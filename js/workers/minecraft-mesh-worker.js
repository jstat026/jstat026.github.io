const FACE_DEFS = [
  {
    key: "px",
    dir: [1, 0, 0],
    normal: [1, 0, 0],
    corners: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 1],
    ],
  },
  {
    key: "nx",
    dir: [-1, 0, 0],
    normal: [-1, 0, 0],
    corners: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
  {
    key: "py",
    dir: [0, 1, 0],
    normal: [0, 1, 0],
    corners: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
  },
  {
    key: "ny",
    dir: [0, -1, 0],
    normal: [0, -1, 0],
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
  },
  {
    key: "pz",
    dir: [0, 0, 1],
    normal: [0, 0, 1],
    corners: [
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    key: "nz",
    dir: [0, 0, -1],
    normal: [0, 0, -1],
    corners: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  },
];

let ctx = {
  chunkSize: 16,
  maxHeight: 32,
  planeStride: 16 * 16,
  blockAir: 0,
  blockFaceTiles: {},
  tileUVRects: {},
};

function toIndex(x, y, z) {
  return x + z * ctx.chunkSize + y * ctx.planeStride;
}

function getNeighborBlock(localX, y, localZ, center, negX, posX, negZ, posZ) {
  if (y < 0 || y > ctx.maxHeight) {
    return ctx.blockAir;
  }

  if (localX < 0) {
    if (!negX) {
      return ctx.blockAir;
    }
    return negX[toIndex(ctx.chunkSize - 1, y, localZ)] ?? ctx.blockAir;
  }

  if (localX >= ctx.chunkSize) {
    if (!posX) {
      return ctx.blockAir;
    }
    return posX[toIndex(0, y, localZ)] ?? ctx.blockAir;
  }

  if (localZ < 0) {
    if (!negZ) {
      return ctx.blockAir;
    }
    return negZ[toIndex(localX, y, ctx.chunkSize - 1)] ?? ctx.blockAir;
  }

  if (localZ >= ctx.chunkSize) {
    if (!posZ) {
      return ctx.blockAir;
    }
    return posZ[toIndex(localX, y, 0)] ?? ctx.blockAir;
  }

  return center[toIndex(localX, y, localZ)] ?? ctx.blockAir;
}

function shouldOcclude(currentBlock, neighborBlock) {
  if (neighborBlock === ctx.blockAir) {
    return false;
  }
  return neighborBlock !== 0;
}

function resolveUV(faceKey, corner, rect) {
  const [uMin, vMin, uMax, vMax] = rect;

  if (faceKey === "py") {
    const u = corner[0] === 1 ? uMax : uMin;
    const v = corner[2] === 1 ? vMax : vMin;
    return [u, v];
  }

  if (faceKey === "ny") {
    const u = corner[0] === 1 ? uMax : uMin;
    const v = corner[2] === 1 ? vMin : vMax;
    return [u, v];
  }

  let horizontal = 0;
  switch (faceKey) {
    case "px":
      horizontal = corner[2];
      break;
    case "nx":
      horizontal = 1 - corner[2];
      break;
    case "pz":
      horizontal = 1 - corner[0];
      break;
    case "nz":
      horizontal = corner[0];
      break;
    default:
      horizontal = corner[0];
  }

  const u = horizontal === 1 ? uMax : uMin;
  const v = corner[1] === 1 ? vMin : vMax;
  return [u, v];
}

function buildChunkMesh(payload) {
  const {
    chunkX,
    chunkZ,
    revision,
    center,
    negX,
    posX,
    negZ,
    posZ,
  } = payload;

  if (!center) {
    self.postMessage({
      type: "meshError",
      revision,
      chunkX,
      chunkZ,
      message: "Missing center chunk data.",
    });
    return;
  }

  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const blockIds = [];

  const worldStartX = chunkX * ctx.chunkSize;
  const worldStartZ = chunkZ * ctx.chunkSize;

  for (let localZ = 0; localZ < ctx.chunkSize; localZ += 1) {
    for (let localX = 0; localX < ctx.chunkSize; localX += 1) {
      for (let y = 0; y <= ctx.maxHeight; y += 1) {
        const blockId = center[toIndex(localX, y, localZ)] ?? ctx.blockAir;
        if (blockId === ctx.blockAir) {
          continue;
        }

        const tileMap = ctx.blockFaceTiles[String(blockId)] || ctx.blockFaceTiles[blockId];
        if (!tileMap) {
          continue;
        }

        for (let i = 0; i < FACE_DEFS.length; i += 1) {
          const face = FACE_DEFS[i];
          const neighbor = getNeighborBlock(
            localX + face.dir[0],
            y + face.dir[1],
            localZ + face.dir[2],
            center,
            negX,
            posX,
            negZ,
            posZ
          );

          if (shouldOcclude(blockId, neighbor)) {
            continue;
          }

          const tileId = tileMap[face.key];
          const rect = ctx.tileUVRects[String(tileId)] || ctx.tileUVRects[tileId];
          if (!rect) {
            continue;
          }

          const baseIndex = positions.length / 3;

          for (let cornerIndex = 0; cornerIndex < 4; cornerIndex += 1) {
            const corner = face.corners[cornerIndex];
            const worldX = worldStartX + localX + corner[0];
            const worldY = y + corner[1];
            const worldZ = worldStartZ + localZ + corner[2];
            positions.push(worldX, worldY, worldZ);
            normals.push(face.normal[0], face.normal[1], face.normal[2]);

            const uv = resolveUV(face.key, corner, rect);
            uvs.push(uv[0], uv[1]);
          }

          indices.push(
            baseIndex,
            baseIndex + 1,
            baseIndex + 2,
            baseIndex,
            baseIndex + 2,
            baseIndex + 3
          );
          blockIds.push(blockId);
        }
      }
    }
  }

  if (positions.length === 0) {
    self.postMessage({
      type: "meshReady",
      revision,
      chunkX,
      chunkZ,
      hasGeometry: false,
    });
    return;
  }

  const positionArray = new Float32Array(positions);
  const normalArray = new Float32Array(normals);
  const uvArray = new Float32Array(uvs);
  const useUint32 = positionArray.length / 3 > 65535;
  const indexArray = useUint32 ? new Uint32Array(indices) : new Uint16Array(indices);
  const blockIdArray = new Uint16Array(blockIds);

  self.postMessage(
    {
      type: "meshReady",
      revision,
      chunkX,
      chunkZ,
      hasGeometry: true,
      positions: positionArray.buffer,
      normals: normalArray.buffer,
      uvs: uvArray.buffer,
      indices: indexArray.buffer,
      blockIds: blockIdArray.buffer,
      indexType: useUint32 ? "u32" : "u16",
    },
    [
      positionArray.buffer,
      normalArray.buffer,
      uvArray.buffer,
      indexArray.buffer,
      blockIdArray.buffer,
    ]
  );
}

self.onmessage = (event) => {
  const payload = event.data || {};

  if (payload.type === "init") {
    ctx = {
      ...ctx,
      ...payload,
      planeStride: payload.chunkSize * payload.chunkSize,
    };
    return;
  }

  if (payload.type === "meshChunk") {
    try {
      buildChunkMesh(payload);
    } catch (error) {
      self.postMessage({
        type: "meshError",
        revision: payload.revision,
        chunkX: payload.chunkX,
        chunkZ: payload.chunkZ,
        message: error instanceof Error ? error.message : String(error),
      });
    }
    return;
  }

  if (payload.type === "dispose") {
    close();
  }
};
