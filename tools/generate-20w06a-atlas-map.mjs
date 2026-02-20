#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const REQUIRED_TILE_KEYS = [
  "grass_block_top",
  "grass_block_side",
  "dirt",
  "stone",
  "sand",
  "oak_planks",
  "water_still",
  "cobblestone",
  "bricks",
  "sandstone",
  "gravel",
  "clay",
  "snow",
  "light_gray_stained_glass",
  "oak_log",
  "oak_log_top",
  "oak_leaves",
  "coal_ore",
  "iron_ore",
  "gold_ore",
  "diamond_ore",
  "obsidian",
  "mossy_cobblestone",
  "netherrack",
  "bedrock",
];

function parseArgs(argv) {
  const resolved = {
    atlas: path.resolve(process.cwd(), "assets/minecraft/20w06a_blocks.png-atlas.png"),
    out: path.resolve(process.cwd(), "assets/minecraft/20w06a_blocks.atlas-map.json"),
    tileSize: 16,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--atlas" && argv[i + 1]) {
      resolved.atlas = path.resolve(process.cwd(), argv[i + 1]);
      i += 1;
    } else if (token === "--out" && argv[i + 1]) {
      resolved.out = path.resolve(process.cwd(), argv[i + 1]);
      i += 1;
    } else if (token === "--tile-size" && argv[i + 1]) {
      resolved.tileSize = Math.max(1, Math.floor(Number(argv[i + 1])) || 16);
      i += 1;
    }
  }

  return resolved;
}

const options = parseArgs(process.argv.slice(2));

if (!fs.existsSync(options.atlas)) {
  console.error(`Atlas file not found: ${options.atlas}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(options.out), { recursive: true });

const pythonCode = `
import io
import json
import os
import sys
import urllib.request
import zipfile

try:
    from PIL import Image
except Exception:
    raise RuntimeError("Pillow is required. Install with: python3 -m pip install Pillow")

atlas_path = sys.argv[1]
out_path = sys.argv[2]
required_keys = json.loads(sys.argv[3])
tile_size = int(sys.argv[4])

manifest_url = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json"

def read_json_url(url: str):
    with urllib.request.urlopen(url) as response:
        return json.loads(response.read().decode("utf-8"))


def read_bytes_url(url: str):
    with urllib.request.urlopen(url) as response:
        return response.read()

manifest = read_json_url(manifest_url)
version = next((entry for entry in manifest.get("versions", []) if entry.get("id") == "20w06a"), None)
if version is None:
    raise RuntimeError("Could not find version 20w06a in Mojang version manifest")

version_data = read_json_url(version.get("url"))
client_url = version_data.get("downloads", {}).get("client", {}).get("url")
if not client_url:
    raise RuntimeError("Missing client download URL for version 20w06a")

client_jar_bytes = read_bytes_url(client_url)
atlas = Image.open(atlas_path).convert("RGBA")
atlas_width, atlas_height = atlas.size
if atlas_width < tile_size or atlas_height < tile_size:
    raise RuntimeError("Atlas image is smaller than one tile")

atlas_tiles = {}
for y in range(0, atlas_height - tile_size + 1, tile_size):
    for x in range(0, atlas_width - tile_size + 1, tile_size):
        raw = atlas.crop((x, y, x + tile_size, y + tile_size)).tobytes()
        atlas_tiles.setdefault(raw, []).append((x, y))

mapping = {}
missing = []
with zipfile.ZipFile(io.BytesIO(client_jar_bytes), "r") as jar:
    entries = set(jar.namelist())

    for tile_key in required_keys:
        asset_path = f"assets/minecraft/textures/block/{tile_key}.png"
        if asset_path not in entries:
            missing.append(tile_key)
            continue

        tile_image = Image.open(io.BytesIO(jar.read(asset_path))).convert("RGBA")
        if tile_image.width < tile_size or tile_image.height < tile_size:
            missing.append(tile_key)
            continue

        if tile_image.width != tile_size or tile_image.height != tile_size:
            tile_image = tile_image.crop((0, 0, tile_size, tile_size))

        coords = atlas_tiles.get(tile_image.tobytes())
        if not coords:
            missing.append(tile_key)
            continue

        x, y = coords[0]
        mapping[tile_key] = {
            "x": int(x),
            "y": int(y),
            "w": int(tile_size),
            "h": int(tile_size),
        }

if missing:
    missing_unique = sorted(set(missing))
    raise RuntimeError("Failed to match required tiles in atlas: " + ", ".join(missing_unique))

os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, "w", encoding="utf-8") as file_obj:
    json.dump(mapping, file_obj, indent=2, sort_keys=True)
    file_obj.write("\\n")

print(f"Wrote atlas map ({len(mapping)} tiles): {out_path}")
`;

const run = spawnSync(
  "python3",
  [
    "-c",
    pythonCode,
    options.atlas,
    options.out,
    JSON.stringify(REQUIRED_TILE_KEYS),
    String(options.tileSize),
  ],
  { stdio: "inherit" }
);

if (run.status !== 0) {
  process.exit(run.status || 1);
}
