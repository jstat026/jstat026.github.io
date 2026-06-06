#!/usr/bin/env python3
"""Build a sharded GTFS trip-stop index for cityrail.exe.

The browser needs fast trip_id -> remaining stop list lookup. Building that
from TfNSW GTFS during a Worker request is too expensive, so this script runs
offline in GitHub Actions and writes static JSON shards for GitHub Pages.
"""

from __future__ import annotations

import argparse
import copy
import csv
import hashlib
import io
import json
import os
import shutil
import sys
import tempfile
import urllib.request
import zipfile
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path


TFNSW_BASE_URL = "https://api.transport.nsw.gov.au"
DEFAULT_FEEDS = (
    "/v1/gtfs/schedule/sydneytrains",
    "/v1/gtfs/schedule/nswtrains",
)
SHARD_COUNT = 256
HASH_ALGORITHM = "fnv1a-32-prefix-2"


def fnv1a_shard(value: str) -> str:
    hash_value = 0x811C9DC5
    for char in value.lower():
        hash_value ^= ord(char)
        hash_value = (hash_value * 0x01000193) & 0xFFFFFFFF
    return f"{hash_value:08x}"[:2]


def normalize_trip_id(value: str) -> str:
    return (value or "").strip().lower()


def trip_name(trip_id: str) -> str:
    return trip_id.split(".", 1)[0]


def is_boarding_allowed(value: str) -> bool:
    # GTFS defaults blank pickup/drop-off types to regular service.
    return (value or "0").strip() in {"", "0"}


def stop_station_key(stop: dict[str, object]) -> str:
    parent_stop_id = str(stop.get("parentStopId") or "")
    if parent_stop_id:
        return f"parent:{parent_stop_id}"
    stop_id = str(stop.get("stopId") or "")
    return f"stop:{stop_id}" if stop_id else ""


def parse_gtfs_time_seconds(value: object) -> int | None:
    parts = str(value or "").split(":")
    if len(parts) < 2:
        return None
    try:
        hours = int(parts[0])
        minutes = int(parts[1])
        seconds = int(parts[2]) if len(parts) > 2 else 0
    except ValueError:
        return None
    return hours * 3600 + minutes * 60 + seconds


def is_same_gtfs_time(first: object, second: object) -> bool:
    first_seconds = parse_gtfs_time_seconds(first)
    second_seconds = parse_gtfs_time_seconds(second)
    if first_seconds is None or second_seconds is None:
        return False
    return any(abs(candidate - first_seconds) <= 1 for candidate in (
        second_seconds,
        second_seconds + 86400,
        second_seconds - 86400,
    ))


def append_block_continuation(
    trip: dict[str, object],
    continuation_trips: list[dict[str, object]],
) -> None:
    stop_rows = list(trip.get("stops") or [])
    if not stop_rows:
        return

    last_stop = stop_rows[-1]
    last_stop_key = stop_station_key(last_stop)
    existing_stop_keys = {stop_station_key(stop) for stop in stop_rows if stop_station_key(stop)}

    for continuation_trip in continuation_trips:
        continuation_rows = list(continuation_trip.get("stops") or [])
        start_index = next(
            (
                index
                for index, stop in enumerate(continuation_rows)
                if last_stop_key
                and stop_station_key(stop) == last_stop_key
                and is_same_gtfs_time(last_stop.get("departureTime"), stop.get("departureTime"))
            ),
            -1,
        )
        if start_index < 0:
            continue

        appended_rows = []
        next_stop_sequence = int(last_stop.get("stopSequence") or len(stop_rows)) + 1
        for stop in continuation_rows[start_index + 1 :]:
            stop_key = stop_station_key(stop)
            if stop_key and stop_key in existing_stop_keys:
                break
            appended_stop = copy.deepcopy(stop)
            appended_stop["stopSequence"] = next_stop_sequence
            next_stop_sequence += 1
            appended_rows.append(appended_stop)
            if stop_key:
                existing_stop_keys.add(stop_key)

        if appended_rows:
            trip["stops"] = stop_rows + appended_rows
            return


def fetch_feed(path: str, api_key: str) -> bytes:
    request = urllib.request.Request(
        f"{TFNSW_BASE_URL}{path}",
        headers={
            "Authorization": f"apikey {api_key}",
            "Accept": "application/zip",
            "User-Agent": "cityrail-gtfs-index/1.0",
        },
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read()


def read_csv_from_zip(zip_file: zipfile.ZipFile, name: str) -> list[dict[str, str]]:
    with zip_file.open(name) as file_obj:
        text = io.TextIOWrapper(file_obj, encoding="utf-8-sig", newline="")
        return list(csv.DictReader(text))


def build_index_for_feed(path: str, content: bytes) -> dict[str, dict[str, object]]:
    with zipfile.ZipFile(io.BytesIO(content)) as zip_file:
        stops = read_csv_from_zip(zip_file, "stops.txt")
        stop_times = read_csv_from_zip(zip_file, "stop_times.txt")
        trips_rows = read_csv_from_zip(zip_file, "trips.txt")

    stop_names: dict[str, str] = {}
    parent_stop_ids: dict[str, str] = {}
    for stop in stops:
        stop_id = stop.get("stop_id", "")
        if not stop_id:
            continue
        stop_names[stop_id] = stop.get("stop_name") or stop_id
        parent_stop_ids[stop_id] = stop.get("parent_station") or ""

    trip_blocks: dict[str, str] = {}
    trip_names: dict[str, str] = {}
    for trip in trips_rows:
        trip_id = normalize_trip_id(trip.get("trip_id", ""))
        if not trip_id:
            continue
        trip_blocks[trip_id] = trip.get("block_id", "")
        trip_names[trip_id] = trip_name(trip_id)

    trips: dict[str, dict[str, object]] = {}
    for stop_time in stop_times:
        trip_id = normalize_trip_id(stop_time.get("trip_id", ""))
        stop_id = stop_time.get("stop_id", "")
        if not trip_id or not stop_id:
            continue
        pickup = is_boarding_allowed(stop_time.get("pickup_type", "0"))
        dropoff = is_boarding_allowed(stop_time.get("drop_off_type", "0"))
        if not pickup and not dropoff:
            continue

        row: dict[str, object] = {
            "stopId": stop_id,
            "parentStopId": parent_stop_ids.get(stop_id, ""),
            "stopSequence": int(stop_time.get("stop_sequence") or 0),
            "stopName": stop_names.get(stop_id, stop_id),
            "departureTime": stop_time.get("departure_time") or stop_time.get("arrival_time") or "",
        }
        if not pickup:
            row["pickup"] = False
        if not dropoff:
            row["dropoff"] = False

        trip = trips.setdefault(trip_id, {"stops": []})
        trip["stops"].append(row)

    for trip in trips.values():
        trip["stops"].sort(key=lambda item: int(item["stopSequence"]))

    trips_by_block: dict[str, list[str]] = defaultdict(list)
    for trip_id in trips:
        block_id = trip_blocks.get(trip_id, "")
        if block_id:
            trips_by_block[block_id].append(trip_id)

    for block_trip_ids in trips_by_block.values():
        block_trip_ids.sort(key=lambda value: (trip_names.get(value, ""), value))
        for index, trip_id in enumerate(block_trip_ids):
            current_name = trip_names.get(trip_id, "")
            continuation_trip_ids = [
                candidate
                for candidate in block_trip_ids[index + 1 :]
                if trip_names.get(candidate, "") > current_name
            ][:2]
            append_block_continuation(
                trips[trip_id],
                [trips[candidate_id] for candidate_id in continuation_trip_ids],
            )

    return trips


def merge_indexes(indexes: list[dict[str, dict[str, object]]]) -> dict[str, dict[str, object]]:
    merged: dict[str, dict[str, object]] = {}
    for index in indexes:
        for trip_id, stops in index.items():
            merged.setdefault(trip_id, stops)
    return merged


def write_index(output_dir: Path, trips: dict[str, dict[str, object]], feeds: list[str]) -> None:
    temp_dir = Path(tempfile.mkdtemp(prefix="cityrail-gtfs-index-"))
    try:
        shards_dir = temp_dir / "shards"
        shards_dir.mkdir(parents=True)

        shards: dict[str, dict[str, dict[str, object]]] = {
            f"{index:02x}": {} for index in range(SHARD_COUNT)
        }
        for trip_id, stops in trips.items():
            shards[fnv1a_shard(trip_id)][trip_id] = stops

        written_shards = []
        for shard_id, shard_trips in shards.items():
            if not shard_trips:
                continue
            shard_path = shards_dir / f"{shard_id}.json"
            shard_path.write_text(
                json.dumps({"trips": shard_trips}, separators=(",", ":")),
                encoding="utf-8",
            )
            written_shards.append(shard_id)

        manifest = {
            "generatedAt": datetime.now(timezone.utc).isoformat(),
            "feedPaths": feeds,
            "hashAlgorithm": HASH_ALGORITHM,
            "schemaVersion": 2,
            "shardCount": SHARD_COUNT,
            "shards": written_shards,
            "tripCount": len(trips),
        }
        (temp_dir / "manifest.json").write_text(
            json.dumps(manifest, indent=2, sort_keys=True) + "\n",
            encoding="utf-8",
        )

        if output_dir.exists():
            shutil.rmtree(output_dir)
        output_dir.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(temp_dir), str(output_dir))
    finally:
        if temp_dir.exists():
            shutil.rmtree(temp_dir)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        default="assets/cityrail/gtfs-index",
        help="Directory for generated index files.",
    )
    parser.add_argument(
        "--feed",
        action="append",
        dest="feeds",
        help="TfNSW GTFS schedule path. Can be provided multiple times.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    api_key = os.environ.get("TFNSW_API_KEY", "").strip()
    if not api_key:
        print("TFNSW_API_KEY is required.", file=sys.stderr)
        return 2

    feeds = args.feeds or list(DEFAULT_FEEDS)
    indexes = []
    for feed in feeds:
        print(f"Downloading {feed}...", file=sys.stderr)
        try:
            indexes.append(build_index_for_feed(feed, fetch_feed(feed, api_key)))
        except urllib.error.HTTPError as error:
            print(f"Skipping {feed}: HTTP {error.code}", file=sys.stderr)

    trips = merge_indexes(indexes)
    if not trips:
        print("No GTFS trips were indexed.", file=sys.stderr)
        return 1

    output_dir = Path(args.output)
    write_index(output_dir, trips, feeds)
    digest = hashlib.sha256()
    for shard in sorted((output_dir / "shards").glob("*.json")):
        digest.update(shard.read_bytes())
    print(f"Indexed {len(trips)} trips into {output_dir} ({digest.hexdigest()[:12]}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
