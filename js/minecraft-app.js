const THREE_MODULE_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/+esm";
const EFFECT_COMPOSER_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js/+esm";
const RENDER_PASS_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/RenderPass.js/+esm";
const UNREAL_BLOOM_PASS_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js/+esm";
const SHADER_PASS_URL = "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/postprocessing/ShaderPass.js/+esm";

const WINDOW_ID = "minecraft";

const DEFAULT_CONFIG = {
  seed: 30117,
  chunkSize: 16,
  maxHeight: 48,
  waterLevel: 10,
  streamRadiusDesktop: 5,
  streamRadiusMobile: 3,
  moveSpeed: 8.7,
  sprintMultiplier: 1.42,
  crouchMultiplier: 0.58,
  jumpSpeed: 9.5,
  gravity: 26,
  groundAcceleration: 32,
  airAcceleration: 12,
  mouseSensitivity: 0.0021,
  mobileLookSensitivity: 0.0042,
  mobileMoveDeadzone: 0.12,
  postFxProfile: "max",
  fogDensity: 0.018,
  bloomStrength: 0.45,
  bloomRadius: 0.24,
  bloomThreshold: 0.52,
  pixelRatioDesktop: 1.5,
  pixelRatioMobile: 1,
  shadowDistanceDesktop: 52,
  shadowDistanceMobile: 30,
  audioAssetBasePath: "./assets/minecraft/audio",
  masterVolume: 0.86,
  sfxVolume: 0.95,
  musicVolume: 0.28,
};

const BLOCK_IDS = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  WOOD: 5,
};

const TILE_IDS = {
  GRASS_TOP: 0,
  GRASS_SIDE: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  WOOD: 5,
};

const HOTBAR_BLOCKS = [
  BLOCK_IDS.GRASS,
  BLOCK_IDS.DIRT,
  BLOCK_IDS.STONE,
  BLOCK_IDS.SAND,
  BLOCK_IDS.WOOD,
];

const BLOCK_LABELS = {
  [BLOCK_IDS.GRASS]: "Grass",
  [BLOCK_IDS.DIRT]: "Dirt",
  [BLOCK_IDS.STONE]: "Stone",
  [BLOCK_IDS.SAND]: "Sand",
  [BLOCK_IDS.WOOD]: "Wood",
};

const BLOCK_FACE_TILES = {
  [BLOCK_IDS.GRASS]: {
    px: TILE_IDS.GRASS_SIDE,
    nx: TILE_IDS.GRASS_SIDE,
    py: TILE_IDS.GRASS_TOP,
    ny: TILE_IDS.DIRT,
    pz: TILE_IDS.GRASS_SIDE,
    nz: TILE_IDS.GRASS_SIDE,
  },
  [BLOCK_IDS.DIRT]: {
    px: TILE_IDS.DIRT,
    nx: TILE_IDS.DIRT,
    py: TILE_IDS.DIRT,
    ny: TILE_IDS.DIRT,
    pz: TILE_IDS.DIRT,
    nz: TILE_IDS.DIRT,
  },
  [BLOCK_IDS.STONE]: {
    px: TILE_IDS.STONE,
    nx: TILE_IDS.STONE,
    py: TILE_IDS.STONE,
    ny: TILE_IDS.STONE,
    pz: TILE_IDS.STONE,
    nz: TILE_IDS.STONE,
  },
  [BLOCK_IDS.SAND]: {
    px: TILE_IDS.SAND,
    nx: TILE_IDS.SAND,
    py: TILE_IDS.SAND,
    ny: TILE_IDS.SAND,
    pz: TILE_IDS.SAND,
    nz: TILE_IDS.SAND,
  },
  [BLOCK_IDS.WOOD]: {
    px: TILE_IDS.WOOD,
    nx: TILE_IDS.WOOD,
    py: TILE_IDS.WOOD,
    ny: TILE_IDS.WOOD,
    pz: TILE_IDS.WOOD,
    nz: TILE_IDS.WOOD,
  },
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothStep(t) {
  return t * t * (3 - 2 * t);
}

function hash2i(x, z, seed) {
  let n = (x | 0) * 374761393 + (z | 0) * 668265263 + (seed | 0) * 2147483647;
  n = (n ^ (n >> 13)) | 0;
  n = Math.imul(n, 1274126177);
  n = (n ^ (n >> 16)) >>> 0;
  return n / 4294967295;
}

function floorDiv(value, divisor) {
  return Math.floor(value / divisor);
}

function createValueNoise(seed) {
  function sample(x, z) {
    const x0 = Math.floor(x);
    const z0 = Math.floor(z);
    const x1 = x0 + 1;
    const z1 = z0 + 1;

    const tx = smoothStep(x - x0);
    const tz = smoothStep(z - z0);

    const v00 = hash2i(x0, z0, seed);
    const v10 = hash2i(x1, z0, seed);
    const v01 = hash2i(x0, z1, seed);
    const v11 = hash2i(x1, z1, seed);

    const xa = lerp(v00, v10, tx);
    const xb = lerp(v01, v11, tx);
    return lerp(xa, xb, tz);
  }

  return {
    sample,
    fbm(x, z, octaves = 4, lacunarity = 2, gain = 0.5) {
      let amplitude = 1;
      let frequency = 1;
      let sum = 0;
      let norm = 0;

      for (let i = 0; i < octaves; i += 1) {
        sum += sample(x * frequency, z * frequency) * amplitude;
        norm += amplitude;
        frequency *= lacunarity;
        amplitude *= gain;
      }

      return norm > 0 ? sum / norm : 0;
    },
  };
}

function normalizeConfig(input = {}) {
  const postFxProfile = String(input.postFxProfile || DEFAULT_CONFIG.postFxProfile).toLowerCase();

  return {
    seed: Math.floor(Number(input.seed) || DEFAULT_CONFIG.seed),
    chunkSize: clamp(Math.floor(Number(input.chunkSize) || DEFAULT_CONFIG.chunkSize), 8, 32),
    maxHeight: clamp(Math.floor(Number(input.maxHeight) || DEFAULT_CONFIG.maxHeight), 24, 96),
    waterLevel: clamp(Math.floor(Number(input.waterLevel) || DEFAULT_CONFIG.waterLevel), 2, 28),
    streamRadiusDesktop: clamp(
      Math.floor(Number(input.streamRadiusDesktop) || DEFAULT_CONFIG.streamRadiusDesktop),
      3,
      7
    ),
    streamRadiusMobile: clamp(
      Math.floor(Number(input.streamRadiusMobile) || DEFAULT_CONFIG.streamRadiusMobile),
      2,
      5
    ),
    moveSpeed: clamp(Number(input.moveSpeed) || DEFAULT_CONFIG.moveSpeed, 4, 16),
    sprintMultiplier: clamp(
      Number(input.sprintMultiplier) || DEFAULT_CONFIG.sprintMultiplier,
      1,
      2.1
    ),
    crouchMultiplier: clamp(
      Number(input.crouchMultiplier) || DEFAULT_CONFIG.crouchMultiplier,
      0.3,
      0.9
    ),
    jumpSpeed: clamp(Number(input.jumpSpeed) || DEFAULT_CONFIG.jumpSpeed, 4, 16),
    gravity: clamp(Number(input.gravity) || DEFAULT_CONFIG.gravity, 9, 42),
    groundAcceleration: clamp(
      Number(input.groundAcceleration) || DEFAULT_CONFIG.groundAcceleration,
      6,
      72
    ),
    airAcceleration: clamp(Number(input.airAcceleration) || DEFAULT_CONFIG.airAcceleration, 2, 28),
    mouseSensitivity: clamp(
      Number(input.mouseSensitivity) || DEFAULT_CONFIG.mouseSensitivity,
      0.0008,
      0.0065
    ),
    mobileLookSensitivity: clamp(
      Number(input.mobileLookSensitivity) || DEFAULT_CONFIG.mobileLookSensitivity,
      0.0015,
      0.012
    ),
    mobileMoveDeadzone: clamp(
      Number(input.mobileMoveDeadzone) || DEFAULT_CONFIG.mobileMoveDeadzone,
      0.02,
      0.4
    ),
    postFxProfile:
      postFxProfile === "none" || postFxProfile === "balanced" || postFxProfile === "max"
        ? postFxProfile
        : "max",
    fogDensity: clamp(Number(input.fogDensity) || DEFAULT_CONFIG.fogDensity, 0.004, 0.05),
    bloomStrength: clamp(Number(input.bloomStrength) || DEFAULT_CONFIG.bloomStrength, 0, 1.6),
    bloomRadius: clamp(Number(input.bloomRadius) || DEFAULT_CONFIG.bloomRadius, 0, 1),
    bloomThreshold: clamp(Number(input.bloomThreshold) || DEFAULT_CONFIG.bloomThreshold, 0, 1),
    pixelRatioDesktop: clamp(
      Number(input.pixelRatioDesktop) || DEFAULT_CONFIG.pixelRatioDesktop,
      1,
      2
    ),
    pixelRatioMobile: clamp(
      Number(input.pixelRatioMobile) || DEFAULT_CONFIG.pixelRatioMobile,
      0.8,
      1.25
    ),
    shadowDistanceDesktop: clamp(
      Number(input.shadowDistanceDesktop) || DEFAULT_CONFIG.shadowDistanceDesktop,
      24,
      88
    ),
    shadowDistanceMobile: clamp(
      Number(input.shadowDistanceMobile) || DEFAULT_CONFIG.shadowDistanceMobile,
      16,
      48
    ),
    audioAssetBasePath: String(input.audioAssetBasePath || DEFAULT_CONFIG.audioAssetBasePath),
    masterVolume: clamp(Number(input.masterVolume) || DEFAULT_CONFIG.masterVolume, 0, 1),
    sfxVolume: clamp(Number(input.sfxVolume) || DEFAULT_CONFIG.sfxVolume, 0, 1),
    musicVolume: clamp(Number(input.musicVolume) || DEFAULT_CONFIG.musicVolume, 0, 1),
  };
}

function isLikelyMobileViewport() {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const narrowViewport = window.matchMedia("(max-width: 900px)").matches;
  return coarsePointer || narrowViewport;
}

async function loadThreeDependencies() {
  const [THREE, effectComposerModule, renderPassModule, bloomPassModule, shaderPassModule] =
    await Promise.all([
      import(THREE_MODULE_URL),
      import(EFFECT_COMPOSER_URL),
      import(RENDER_PASS_URL),
      import(UNREAL_BLOOM_PASS_URL),
      import(SHADER_PASS_URL),
    ]);

  return {
    THREE,
    EffectComposer: effectComposerModule.EffectComposer,
    RenderPass: renderPassModule.RenderPass,
    UnrealBloomPass: bloomPassModule.UnrealBloomPass,
    ShaderPass: shaderPassModule.ShaderPass,
  };
}

function createProceduralAtlasTexture(THREE, seed) {
  const tileSize = 32;
  const columns = 4;
  const rows = 2;
  const atlasWidth = columns * tileSize;
  const atlasHeight = rows * tileSize;

  const canvas = document.createElement("canvas");
  canvas.width = atlasWidth;
  canvas.height = atlasHeight;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) {
    throw new Error("Failed to create texture atlas canvas context.");
  }

  function pixelNoise(px, py, localSeed) {
    return hash2i(px + localSeed * 47, py + localSeed * 73, seed + localSeed * 31);
  }

  function drawTile(tileId, painter) {
    const tx = (tileId % columns) * tileSize;
    const ty = Math.floor(tileId / columns) * tileSize;
    const image = ctx.createImageData(tileSize, tileSize);
    const data = image.data;

    for (let py = 0; py < tileSize; py += 1) {
      for (let px = 0; px < tileSize; px += 1) {
        const i = (py * tileSize + px) * 4;
        const edgeDist = Math.min(px, py, tileSize - 1 - px, tileSize - 1 - py);
        const edgeShade = edgeDist <= 1 ? 0.83 : edgeDist <= 2 ? 0.91 : 1;
        const color = painter(px, py, edgeShade, pixelNoise);

        data[i] = clamp(Math.round(color[0]), 0, 255);
        data[i + 1] = clamp(Math.round(color[1]), 0, 255);
        data[i + 2] = clamp(Math.round(color[2]), 0, 255);
        data[i + 3] = color.length > 3 ? clamp(Math.round(color[3]), 0, 255) : 255;
      }
    }

    ctx.putImageData(image, tx, ty);
  }

  drawTile(TILE_IDS.GRASS_TOP, (px, py, edgeShade, noiseFn) => {
    const n = noiseFn(px, py, 11);
    const m = noiseFn(px * 2, py * 2, 29);
    return [
      (42 + m * 16) * edgeShade,
      (152 + n * 74) * edgeShade,
      (32 + n * 22) * edgeShade,
      255,
    ];
  });

  drawTile(TILE_IDS.GRASS_SIDE, (px, py, edgeShade, noiseFn) => {
    const n = noiseFn(px, py, 19);
    if (py < 8) {
      return [
        (48 + n * 18) * edgeShade,
        (154 + n * 62) * edgeShade,
        (30 + n * 17) * edgeShade,
        255,
      ];
    }

    const dirt = noiseFn(px + py, py, 23);
    const root = py < 12 ? noiseFn(px * 3 + py, py * 7 + px, 31) : 0;
    return [
      (95 + dirt * 34) * edgeShade,
      (61 + dirt * 23 + root * 11) * edgeShade,
      (36 + dirt * 12) * edgeShade,
      255,
    ];
  });

  drawTile(TILE_IDS.DIRT, (px, py, edgeShade, noiseFn) => {
    const n = noiseFn(px, py, 37);
    const grain = noiseFn(px * 4 + py, py * 2 + px, 41);
    return [
      (100 + n * 33 + grain * 12) * edgeShade,
      (65 + n * 24) * edgeShade,
      (38 + grain * 13) * edgeShade,
      255,
    ];
  });

  drawTile(TILE_IDS.STONE, (px, py, edgeShade, noiseFn) => {
    const n = noiseFn(px, py, 43);
    const p = noiseFn(px * 3 + py, py * 5 + px, 53);
    const tone = 116 + n * 56;
    const speck = p > 0.83 ? 26 : 0;
    return [
      (tone + speck) * edgeShade,
      (tone + 4 + speck) * edgeShade,
      (tone + 9 + speck) * edgeShade,
      255,
    ];
  });

  drawTile(TILE_IDS.SAND, (px, py, edgeShade, noiseFn) => {
    const n = noiseFn(px, py, 59);
    const g = noiseFn(px * 2 + py * 3, py * 5 + px, 61);
    return [
      (180 + n * 40 + g * 11) * edgeShade,
      (167 + n * 28 + g * 10) * edgeShade,
      (121 + n * 20 + g * 8) * edgeShade,
      255,
    ];
  });

  drawTile(TILE_IDS.WOOD, (px, py, edgeShade, noiseFn) => {
    const stripe = Math.sin((px + noiseFn(py, px, 79) * 4) * 0.52) * 0.5 + 0.5;
    const n = noiseFn(px, py, 83);
    return [
      (108 + stripe * 43 + n * 10) * edgeShade,
      (78 + stripe * 18 + n * 8) * edgeShade,
      (42 + stripe * 11 + n * 6) * edgeShade,
      255,
    ];
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipMapNearestFilter;
  texture.generateMipmaps = true;
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  const padding = 0.7;
  const tileUVRects = {};

  for (let tile = 0; tile <= TILE_IDS.WOOD; tile += 1) {
    const tx = (tile % columns) * tileSize;
    const ty = Math.floor(tile / columns) * tileSize;
    tileUVRects[tile] = [
      (tx + padding) / atlasWidth,
      (ty + padding) / atlasHeight,
      (tx + tileSize - padding) / atlasWidth,
      (ty + tileSize - padding) / atlasHeight,
    ];
  }

  return { texture, tileUVRects };
}

class WorldStore {
  constructor(config) {
    this.chunkSize = config.chunkSize;
    this.maxHeight = config.maxHeight;
    this.waterLevel = config.waterLevel;
    this.seed = config.seed;
    this.planeStride = this.chunkSize * this.chunkSize;
    this.overrides = new Map();
    this.chunkCache = new Map();
    this.heightCache = new Map();
    this.baseNoise = createValueNoise(config.seed + 91);
    this.detailNoise = createValueNoise(config.seed + 211);
  }

  chunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }

  voxelKey(x, y, z) {
    return `${x},${y},${z}`;
  }

  toLocalIndex(localX, y, localZ) {
    return localX + localZ * this.chunkSize + y * this.planeStride;
  }

  getHeightAt(x, z) {
    const key = `${x},${z}`;
    if (this.heightCache.has(key)) {
      return this.heightCache.get(key);
    }

    const base = this.baseNoise.fbm((x + this.seed * 0.18) * 0.032, (z - this.seed * 0.11) * 0.032, 5, 2, 0.53);
    const detail = this.detailNoise.fbm((x - 2400) * 0.087, (z + 1350) * 0.087, 3, 2.1, 0.5);
    const raised = Math.pow(base, 1.16) * (this.maxHeight - this.waterLevel - 8);
    const ridge = Math.pow(detail, 2.35) * 6.2;

    const height = clamp(Math.floor(this.waterLevel + 4 + raised + ridge), 3, this.maxHeight - 2);
    this.heightCache.set(key, height);
    return height;
  }

  getBaseBlock(x, y, z) {
    if (y < 0 || y > this.maxHeight) {
      return BLOCK_IDS.AIR;
    }
    if (y === 0) {
      return BLOCK_IDS.STONE;
    }

    const height = this.getHeightAt(x, z);
    if (y > height) {
      return BLOCK_IDS.AIR;
    }

    if (y === height) {
      return height <= this.waterLevel + 1 ? BLOCK_IDS.SAND : BLOCK_IDS.GRASS;
    }

    if (y >= height - 3) {
      return height <= this.waterLevel + 2 ? BLOCK_IDS.SAND : BLOCK_IDS.DIRT;
    }

    return BLOCK_IDS.STONE;
  }

  getBlock(x, y, z) {
    if (y < 0 || y > this.maxHeight) {
      return BLOCK_IDS.AIR;
    }

    const override = this.overrides.get(this.voxelKey(x, y, z));
    if (override !== undefined) {
      return override;
    }

    const chunkX = floorDiv(x, this.chunkSize);
    const chunkZ = floorDiv(z, this.chunkSize);
    const chunk = this.getChunk(chunkX, chunkZ);
    const localX = x - chunkX * this.chunkSize;
    const localZ = z - chunkZ * this.chunkSize;
    return chunk.voxels[this.toLocalIndex(localX, y, localZ)] || BLOCK_IDS.AIR;
  }

  recalcColumnTopForChunk(chunk, localX, localZ, worldX, worldZ) {
    const topIndex = localX + localZ * this.chunkSize;

    for (let y = this.maxHeight; y >= 0; y -= 1) {
      const blockId = this.overrides.get(this.voxelKey(worldX, y, worldZ));
      const value = blockId !== undefined ? blockId : this.getBaseBlock(worldX, y, worldZ);
      if (value !== BLOCK_IDS.AIR) {
        chunk.topHeights[topIndex] = y + 1;
        return;
      }
    }

    chunk.topHeights[topIndex] = 0;
  }

  getChunk(chunkX, chunkZ) {
    const key = this.chunkKey(chunkX, chunkZ);
    const existing = this.chunkCache.get(key);
    if (existing) {
      return existing;
    }

    const voxels = new Uint8Array(this.chunkSize * this.chunkSize * (this.maxHeight + 1));
    const topHeights = new Uint8Array(this.chunkSize * this.chunkSize);

    for (let localZ = 0; localZ < this.chunkSize; localZ += 1) {
      for (let localX = 0; localX < this.chunkSize; localX += 1) {
        const worldX = chunkX * this.chunkSize + localX;
        const worldZ = chunkZ * this.chunkSize + localZ;

        for (let y = 0; y <= this.maxHeight; y += 1) {
          const override = this.overrides.get(this.voxelKey(worldX, y, worldZ));
          const blockId = override !== undefined ? override : this.getBaseBlock(worldX, y, worldZ);
          voxels[this.toLocalIndex(localX, y, localZ)] = blockId;
        }

        for (let y = this.maxHeight; y >= 0; y -= 1) {
          const blockId = voxels[this.toLocalIndex(localX, y, localZ)];
          if (blockId !== BLOCK_IDS.AIR) {
            topHeights[localX + localZ * this.chunkSize] = y + 1;
            break;
          }
        }
      }
    }

    const created = {
      chunkX,
      chunkZ,
      voxels,
      topHeights,
      version: 1,
    };

    this.chunkCache.set(key, created);
    return created;
  }

  getColumnTop(x, z) {
    const chunkX = floorDiv(x, this.chunkSize);
    const chunkZ = floorDiv(z, this.chunkSize);
    const localX = x - chunkX * this.chunkSize;
    const localZ = z - chunkZ * this.chunkSize;
    const chunk = this.getChunk(chunkX, chunkZ);
    return chunk.topHeights[localX + localZ * this.chunkSize] || 0;
  }

  setBlock(x, y, z, nextId) {
    if (y <= 0 || y > this.maxHeight) {
      return false;
    }

    const prev = this.getBlock(x, y, z);
    if (prev === nextId) {
      return false;
    }

    const base = this.getBaseBlock(x, y, z);
    const key = this.voxelKey(x, y, z);

    if (nextId === base) {
      this.overrides.delete(key);
    } else {
      this.overrides.set(key, nextId);
    }

    const chunkX = floorDiv(x, this.chunkSize);
    const chunkZ = floorDiv(z, this.chunkSize);
    const localX = x - chunkX * this.chunkSize;
    const localZ = z - chunkZ * this.chunkSize;

    const chunk = this.chunkCache.get(this.chunkKey(chunkX, chunkZ));
    if (chunk) {
      chunk.voxels[this.toLocalIndex(localX, y, localZ)] = nextId;
      this.recalcColumnTopForChunk(chunk, localX, localZ, x, z);
      chunk.version += 1;
    }

    return true;
  }

  isSolidBlock(x, y, z) {
    return this.getBlock(x, y, z) !== BLOCK_IDS.AIR;
  }
}

class AudioController {
  constructor(config) {
    this.config = config;
    this.context = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.buffers = new Map();
    this.ready = false;
    this.initializing = null;
    this.ambienceSource = null;
    this.loadedNames = new Set();
  }

  getUrl(name) {
    return `${this.config.audioAssetBasePath}/${name}`;
  }

  async ensureContext() {
    if (this.context) {
      return;
    }

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) {
      return;
    }

    this.context = new AudioContextCtor();
    this.masterGain = this.context.createGain();
    this.sfxGain = this.context.createGain();
    this.musicGain = this.context.createGain();

    this.masterGain.gain.value = this.config.masterVolume;
    this.sfxGain.gain.value = this.config.sfxVolume;
    this.musicGain.gain.value = this.config.musicVolume;

    this.sfxGain.connect(this.masterGain);
    this.musicGain.connect(this.masterGain);
    this.masterGain.connect(this.context.destination);
  }

  async fetchBuffer(name) {
    if (!this.context) {
      return null;
    }
    if (this.loadedNames.has(name)) {
      return this.buffers.get(name) || null;
    }

    this.loadedNames.add(name);

    try {
      const response = await fetch(this.getUrl(name));
      if (!response.ok) {
        return null;
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = await this.context.decodeAudioData(arrayBuffer);
      this.buffers.set(name, buffer);
      return buffer;
    } catch {
      return null;
    }
  }

  async init() {
    if (this.ready) {
      return;
    }
    if (this.initializing) {
      await this.initializing;
      return;
    }

    this.initializing = (async () => {
      await this.ensureContext();
      if (!this.context) {
        return;
      }

      await Promise.all([
        "grass-break.mp3",
        "grass-placed.mp3",
        "grass-walk-1.mp3",
        "grass-walk-2.mp3",
        "stone-break.mp3",
        "stone-placed.mp3",
        "stone-walk-1.mp3",
        "stone-walk-2.mp3",
        "sand-break.mp3",
        "sand-placed.mp3",
        "sand-walk-1.mp3",
        "sand-walk-2.mp3",
        "wood-break.mp3",
        "wood-placed.mp3",
        "wood-walk-1.mp3",
        "wood-walk-2.mp3",
        "rain-loop.mp3",
      ].map((name) => this.fetchBuffer(name)));

      this.ready = true;
    })();

    await this.initializing;
  }

  async unlock() {
    await this.ensureContext();
    if (!this.context) {
      return;
    }

    if (this.context.state === "suspended") {
      try {
        await this.context.resume();
      } catch {
        // ignore resume failures
      }
    }

    if (!this.ready) {
      this.init().catch(() => {
        // ignore async asset load errors
      });
    }
  }

  playBuffer(name, { volume = 1, playbackRate = 1, loop = false, bus = "sfx" } = {}) {
    if (!this.context) {
      return null;
    }

    const buffer = this.buffers.get(name);
    if (!buffer) {
      return null;
    }

    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = playbackRate;
    source.loop = loop;

    const gain = this.context.createGain();
    gain.gain.value = volume;

    source.connect(gain);
    gain.connect(bus === "music" ? this.musicGain : this.sfxGain);
    source.start(0);
    return source;
  }

  getMaterialName(blockId) {
    if (blockId === BLOCK_IDS.STONE) {
      return "stone";
    }
    if (blockId === BLOCK_IDS.SAND) {
      return "sand";
    }
    if (blockId === BLOCK_IDS.WOOD) {
      return "wood";
    }
    return "grass";
  }

  playBreak(blockId) {
    const material = this.getMaterialName(blockId);
    this.playBuffer(`${material}-break.mp3`, {
      volume: 0.8,
      playbackRate: 0.95 + Math.random() * 0.1,
    });
  }

  playPlace(blockId) {
    const material = this.getMaterialName(blockId);
    this.playBuffer(`${material}-placed.mp3`, {
      volume: 0.72,
      playbackRate: 0.96 + Math.random() * 0.08,
    });
  }

  playStep(blockId) {
    const material = this.getMaterialName(blockId);
    const variant = 1 + Math.floor(Math.random() * 2);
    this.playBuffer(`${material}-walk-${variant}.mp3`, {
      volume: 0.42,
      playbackRate: 0.93 + Math.random() * 0.12,
    });
  }

  startAmbience() {
    if (!this.context || this.ambienceSource) {
      return;
    }

    const source = this.playBuffer("rain-loop.mp3", {
      volume: 0.35,
      loop: true,
      bus: "music",
    });

    if (source) {
      this.ambienceSource = source;
      source.onended = () => {
        if (this.ambienceSource === source) {
          this.ambienceSource = null;
        }
      };
    }
  }

  stopAmbience() {
    if (!this.ambienceSource) {
      return;
    }

    try {
      this.ambienceSource.stop();
    } catch {
      // ignore stop errors
    }
    this.ambienceSource = null;
  }

  async pause() {
    if (!this.context) {
      return;
    }
    if (this.context.state === "running") {
      try {
        await this.context.suspend();
      } catch {
        // ignore suspend failures
      }
    }
  }

  async resume() {
    await this.unlock();
    this.startAmbience();
  }

  dispose() {
    this.stopAmbience();
    if (this.context) {
      try {
        this.context.close();
      } catch {
        // ignore close failures
      }
      this.context = null;
    }

    this.buffers.clear();
    this.loadedNames.clear();
    this.ready = false;
    this.initializing = null;
  }
}

class ChunkStreamManager {
  constructor({
    THREE,
    scene,
    world,
    worker,
    material,
    chunkSize,
    maxHeight,
    tileUVRects,
    onTargetsChanged,
  }) {
    this.THREE = THREE;
    this.scene = scene;
    this.world = world;
    this.worker = worker;
    this.material = material;
    this.chunkSize = chunkSize;
    this.maxHeight = maxHeight;
    this.tileUVRects = tileUVRects;
    this.active = new Map();
    this.queue = [];
    this.queued = new Set();
    this.inflight = new Map();
    this.inflightKeys = new Set();
    this.revisionCounter = 0;
    this.radius = 5;
    this.maxInflight = 4;
    this.onTargetsChanged = onTargetsChanged;
    this.disposed = false;

    this.worker.onmessage = (event) => this.handleWorkerMessage(event.data);

    this.worker.postMessage({
      type: "init",
      chunkSize: this.chunkSize,
      maxHeight: this.maxHeight,
      blockAir: BLOCK_IDS.AIR,
      blockFaceTiles: BLOCK_FACE_TILES,
      tileUVRects: this.tileUVRects,
    });
  }

  chunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }

  setRadius(radius) {
    this.radius = Math.max(2, radius | 0);
  }

  getRaycastTargets() {
    return [...this.active.values()]
      .map((entry) => entry.mesh)
      .filter(Boolean);
  }

  refreshTargets() {
    this.onTargetsChanged?.(this.getRaycastTargets());
  }

  enqueue(chunkX, chunkZ, priority = 0) {
    if (this.disposed) {
      return;
    }

    const key = this.chunkKey(chunkX, chunkZ);
    if (!this.active.has(key) || this.queued.has(key) || this.inflightKeys.has(key)) {
      return;
    }

    this.queued.add(key);
    this.queue.push({ key, chunkX, chunkZ, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  addTarget(chunkX, chunkZ) {
    const key = this.chunkKey(chunkX, chunkZ);
    if (this.active.has(key)) {
      return;
    }

    this.active.set(key, {
      key,
      chunkX,
      chunkZ,
      mesh: null,
      requestedVersion: 0,
    });
  }

  removeChunkByKey(key) {
    const entry = this.active.get(key);
    if (!entry) {
      return;
    }

    if (entry.mesh) {
      this.scene.remove(entry.mesh);
      entry.mesh.geometry.dispose();
    }

    this.active.delete(key);
    this.queued.delete(key);
    this.refreshTargets();
  }

  updateTargets(centerChunkX, centerChunkZ) {
    const desired = new Set();

    for (let dz = -this.radius; dz <= this.radius; dz += 1) {
      for (let dx = -this.radius; dx <= this.radius; dx += 1) {
        const chunkX = centerChunkX + dx;
        const chunkZ = centerChunkZ + dz;
        const key = this.chunkKey(chunkX, chunkZ);
        desired.add(key);

        this.addTarget(chunkX, chunkZ);
        const entry = this.active.get(key);
        const currentVersion = this.world.getChunk(chunkX, chunkZ).version;
        const needsMesh = !entry.mesh || entry.requestedVersion !== currentVersion;
        if (needsMesh) {
          const dist = dx * dx + dz * dz;
          this.enqueue(chunkX, chunkZ, dist);
        }
      }
    }

    [...this.active.keys()].forEach((key) => {
      if (!desired.has(key)) {
        this.removeChunkByKey(key);
      }
    });
  }

  invalidateChunk(chunkX, chunkZ) {
    const key = this.chunkKey(chunkX, chunkZ);
    const entry = this.active.get(key);
    if (!entry) {
      return;
    }

    entry.requestedVersion = 0;
    this.enqueue(chunkX, chunkZ, 0);
  }

  invalidateAroundBlock(worldX, worldZ) {
    const chunkX = floorDiv(worldX, this.chunkSize);
    const chunkZ = floorDiv(worldZ, this.chunkSize);
    this.invalidateChunk(chunkX, chunkZ);

    const localX = worldX - chunkX * this.chunkSize;
    const localZ = worldZ - chunkZ * this.chunkSize;

    if (localX === 0) {
      this.invalidateChunk(chunkX - 1, chunkZ);
    }
    if (localX === this.chunkSize - 1) {
      this.invalidateChunk(chunkX + 1, chunkZ);
    }
    if (localZ === 0) {
      this.invalidateChunk(chunkX, chunkZ - 1);
    }
    if (localZ === this.chunkSize - 1) {
      this.invalidateChunk(chunkX, chunkZ + 1);
    }
  }

  processQueue(maxJobsPerTick = 2) {
    if (this.disposed) {
      return;
    }

    let started = 0;
    while (
      started < maxJobsPerTick &&
      this.queue.length > 0 &&
      this.inflight.size < this.maxInflight
    ) {
      const job = this.queue.shift();
      this.queued.delete(job.key);

      const activeEntry = this.active.get(job.key);
      if (!activeEntry) {
        continue;
      }

      const center = this.world.getChunk(job.chunkX, job.chunkZ);
      const negX = this.world.getChunk(job.chunkX - 1, job.chunkZ);
      const posX = this.world.getChunk(job.chunkX + 1, job.chunkZ);
      const negZ = this.world.getChunk(job.chunkX, job.chunkZ - 1);
      const posZ = this.world.getChunk(job.chunkX, job.chunkZ + 1);

      const revision = ++this.revisionCounter;
      activeEntry.requestedVersion = center.version;
      this.inflight.set(revision, {
        revision,
        key: job.key,
        chunkX: job.chunkX,
        chunkZ: job.chunkZ,
        version: center.version,
      });
      this.inflightKeys.add(job.key);

      this.worker.postMessage({
        type: "meshChunk",
        revision,
        chunkX: job.chunkX,
        chunkZ: job.chunkZ,
        center: center.voxels,
        negX: negX?.voxels || null,
        posX: posX?.voxels || null,
        negZ: negZ?.voxels || null,
        posZ: posZ?.voxels || null,
      });

      started += 1;
    }
  }

  handleWorkerMessage(payload) {
    if (this.disposed) {
      return;
    }

    if (!payload || (payload.type !== "meshReady" && payload.type !== "meshError")) {
      return;
    }

    const meta = this.inflight.get(payload.revision);
    if (!meta) {
      return;
    }

    this.inflight.delete(payload.revision);
    this.inflightKeys.delete(meta.key);

    const entry = this.active.get(meta.key);
    if (!entry) {
      return;
    }

    if (payload.type === "meshError") {
      this.enqueue(meta.chunkX, meta.chunkZ, 0);
      return;
    }

    const currentVersion = this.world.getChunk(meta.chunkX, meta.chunkZ).version;
    if (currentVersion !== meta.version) {
      this.enqueue(meta.chunkX, meta.chunkZ, 0);
      return;
    }

    if (entry.mesh) {
      this.scene.remove(entry.mesh);
      entry.mesh.geometry.dispose();
      entry.mesh = null;
    }

    if (!payload.hasGeometry) {
      this.refreshTargets();
      return;
    }

    const geometry = new this.THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new this.THREE.BufferAttribute(new Float32Array(payload.positions), 3)
    );
    geometry.setAttribute(
      "normal",
      new this.THREE.BufferAttribute(new Float32Array(payload.normals), 3)
    );
    geometry.setAttribute("uv", new this.THREE.BufferAttribute(new Float32Array(payload.uvs), 2));

    const indexArray =
      payload.indexType === "u32"
        ? new Uint32Array(payload.indices)
        : new Uint16Array(payload.indices);
    geometry.setIndex(new this.THREE.BufferAttribute(indexArray, 1));
    geometry.computeBoundingSphere();

    const mesh = new this.THREE.Mesh(geometry, this.material);
    mesh.frustumCulled = true;
    mesh.matrixAutoUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    entry.mesh = mesh;
    this.scene.add(mesh);
    this.refreshTargets();
  }

  dispose() {
    this.disposed = true;

    this.worker.postMessage({ type: "dispose" });
    this.worker.terminate();

    this.active.forEach((entry) => {
      if (entry.mesh) {
        this.scene.remove(entry.mesh);
        entry.mesh.geometry.dispose();
      }
    });

    this.active.clear();
    this.queue.length = 0;
    this.queued.clear();
    this.inflight.clear();
    this.inflightKeys.clear();
  }
}

export function createMinecraftSection(rawConfig = {}) {
  const config = normalizeConfig(rawConfig);

  const section = document.createElement("section");
  section.className = "minecraft-section";
  section.innerHTML = `
    <div class="minecraft-stage" data-minecraft-stage>
      <canvas class="minecraft-canvas" data-minecraft-canvas aria-label="Minecraft voxel canvas"></canvas>
      <div class="minecraft-crosshair" data-minecraft-crosshair aria-hidden="true"></div>
      <div class="minecraft-overlay" data-minecraft-overlay>
        <p><strong>minecraft.exe</strong></p>
        <p data-overlay-desktop>Click to capture mouse. <span class="nowrap">Esc</span> to release.</p>
        <p data-overlay-mobile class="is-hidden">Touch look-zone to rotate camera.</p>
        <p>WASD move, Space jump, Shift sprint, Ctrl crouch</p>
        <p>Left click break, Right click place, 1-5 pick block</p>
        <button type="button" class="retro-btn minecraft-release-btn" data-minecraft-release>Release Mouse</button>
      </div>
      <div class="minecraft-hotbar" data-minecraft-hotbar></div>
      <p class="minecraft-status" data-minecraft-status>Loading...</p>
      <div class="minecraft-mobile-ui is-hidden" data-minecraft-mobile-ui>
        <div class="minecraft-joystick" data-minecraft-joy-base>
          <div class="minecraft-joystick-knob" data-minecraft-joy-knob></div>
        </div>
        <div class="minecraft-mobile-look" data-minecraft-look-zone>
          <span>Look</span>
        </div>
        <div class="minecraft-mobile-actions">
          <button type="button" class="retro-btn" data-minecraft-action="jump">Jump</button>
          <button type="button" class="retro-btn" data-minecraft-action="break">Break</button>
          <button type="button" class="retro-btn" data-minecraft-action="place">Place</button>
        </div>
      </div>
    </div>
  `;

  const stageEl = section.querySelector("[data-minecraft-stage]");
  const canvasEl = section.querySelector("[data-minecraft-canvas]");
  const crosshairEl = section.querySelector("[data-minecraft-crosshair]");
  const overlayEl = section.querySelector("[data-minecraft-overlay]");
  const overlayDesktopEl = section.querySelector("[data-overlay-desktop]");
  const overlayMobileEl = section.querySelector("[data-overlay-mobile]");
  const hotbarEl = section.querySelector("[data-minecraft-hotbar]");
  const statusEl = section.querySelector("[data-minecraft-status]");
  const releaseBtnEl = section.querySelector("[data-minecraft-release]");
  const mobileUiEl = section.querySelector("[data-minecraft-mobile-ui]");
  const joyBaseEl = section.querySelector("[data-minecraft-joy-base]");
  const joyKnobEl = section.querySelector("[data-minecraft-joy-knob]");
  const lookZoneEl = section.querySelector("[data-minecraft-look-zone]");

  const state = {
    disposed: false,
    initialized: false,
    paused: true,
    rafId: 0,
    lastTs: 0,
    listeners: [],
    resizeObserver: null,

    isMobile: isLikelyMobileViewport(),
    pointerLocked: false,

    selectedSlot: 0,
    keys: {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      Space: false,
      ShiftLeft: false,
      ShiftRight: false,
      ControlLeft: false,
      ControlRight: false,
    },

    mobileMove: { x: 0, y: 0, activePointerId: null },
    mobileLook: { activePointerId: null, lastX: 0, lastY: 0 },
    mobileJumpQueued: false,

    deps: null,
    THREE: null,

    renderer: null,
    scene: null,
    camera: null,
    composer: null,
    renderPass: null,
    bloomPass: null,
    colorPass: null,
    directionalLight: null,
    hemisphereLight: null,
    ambientLight: null,
    sunTarget: null,

    atlasTexture: null,
    voxelMaterial: null,
    highlightMesh: null,
    boundsMaterial: null,

    raycaster: null,
    raycastTargets: [],
    targetBreak: null,
    targetPlace: null,
    forwardDir: null,

    world: null,
    chunkStream: null,
    meshWorker: null,

    audio: new AudioController(config),

    player: {
      x: 0.5,
      y: 10,
      z: 0.5,
      vx: 0,
      vy: 0,
      vz: 0,
      yaw: 0,
      pitch: 0,
      onGround: false,
      eyeHeight: 1.72,
      stepAccumulator: 0,
    },

    dayT: 0.2,
    qualityScale: 1,
    fpsEMA: 60,
    perfDropTimer: 0,
    perfGuardApplied: false,
  };

  function setStatus(message, isError = false) {
    statusEl.textContent = message;
    statusEl.classList.toggle("is-error", isError);
  }

  function addListener(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    state.listeners.push(() => target.removeEventListener(type, handler, options));
  }

  function setOverlayVisible(visible) {
    overlayEl.classList.toggle("is-hidden", !visible);
  }

  function updateMobileModeUI() {
    state.isMobile = isLikelyMobileViewport();
    mobileUiEl.classList.toggle("is-hidden", !state.isMobile);
    crosshairEl.classList.toggle("is-hidden", state.isMobile);
    overlayDesktopEl.classList.toggle("is-hidden", state.isMobile);
    overlayMobileEl.classList.toggle("is-hidden", !state.isMobile);
    releaseBtnEl.classList.toggle("is-hidden", state.isMobile);

    const radius = state.isMobile ? config.streamRadiusMobile : config.streamRadiusDesktop;
    state.chunkStream?.setRadius(radius);
    if (state.chunkStream) {
      state.chunkStream.maxInflight = state.isMobile ? 2 : 4;
    }
  }

  function buildHotbar() {
    hotbarEl.innerHTML = HOTBAR_BLOCKS.map((blockId, index) => {
      const label = BLOCK_LABELS[blockId] || `Block ${index + 1}`;
      return `
        <button class="minecraft-hotbar-item${index === 0 ? " is-active" : ""}" data-slot-index="${index}" type="button" aria-label="Select ${label}">
          <span class="minecraft-hotbar-key">${index + 1}</span>
          <span class="minecraft-hotbar-label">${label}</span>
        </button>
      `;
    }).join("");

    hotbarEl.querySelectorAll(".minecraft-hotbar-item").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.slotIndex);
        if (Number.isFinite(index)) {
          setHotbarSlot(index);
        }
      });
    });
  }

  function setHotbarSlot(index) {
    state.selectedSlot = clamp(index, 0, HOTBAR_BLOCKS.length - 1);
    hotbarEl.querySelectorAll(".minecraft-hotbar-item").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === state.selectedSlot);
    });
  }

  function selectedBlockId() {
    return HOTBAR_BLOCKS[state.selectedSlot] || BLOCK_IDS.DIRT;
  }

  function createVignetteShader() {
    return {
      uniforms: {
        tDiffuse: { value: null },
        saturation: { value: 1.06 },
        vignetteStrength: { value: 0.22 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float saturation;
        uniform float vignetteStrength;
        varying vec2 vUv;

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          vec3 sat = mix(vec3(luma), color.rgb, saturation);

          vec2 centered = vUv - 0.5;
          float vignette = smoothstep(0.95, 0.24, dot(centered, centered));
          sat *= mix(1.0 - vignetteStrength, 1.0, vignette);

          gl_FragColor = vec4(sat, color.a);
        }
      `,
    };
  }

  function setupRenderer() {
    const { THREE, EffectComposer, RenderPass, UnrealBloomPass, ShaderPass } = state.deps;

    state.renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      antialias: !state.isMobile,
      alpha: false,
      powerPreference: "high-performance",
    });
    state.renderer.setClearColor(0x8db8ec, 1);
    state.renderer.outputColorSpace = THREE.SRGBColorSpace;
    state.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    state.renderer.toneMappingExposure = config.postFxProfile === "max" ? 1.12 : 1.06;
    state.renderer.shadowMap.enabled = true;
    state.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    state.scene = new THREE.Scene();
    state.scene.background = new THREE.Color(0x8db8ec);
    state.scene.fog = new THREE.FogExp2(0x8db8ec, config.fogDensity);

    state.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 320);

    state.hemisphereLight = new THREE.HemisphereLight(0xe7f2ff, 0x66785d, 0.82);
    state.scene.add(state.hemisphereLight);

    state.ambientLight = new THREE.AmbientLight(0xffffff, 0.24);
    state.scene.add(state.ambientLight);

    state.directionalLight = new THREE.DirectionalLight(0xffffff, 1.08);
    state.directionalLight.position.set(44, 65, 26);
    state.directionalLight.castShadow = true;
    state.directionalLight.shadow.mapSize.width = state.isMobile ? 1024 : 2048;
    state.directionalLight.shadow.mapSize.height = state.isMobile ? 1024 : 2048;
    state.directionalLight.shadow.bias = -0.00035;
    state.directionalLight.shadow.normalBias = 0.025;
    state.directionalLight.shadow.camera.near = 8;
    state.directionalLight.shadow.camera.far = 220;

    state.sunTarget = new THREE.Object3D();
    state.sunTarget.position.set(0, 0, 0);
    state.scene.add(state.sunTarget);
    state.directionalLight.target = state.sunTarget;
    state.scene.add(state.directionalLight);

    const { texture, tileUVRects } = createProceduralAtlasTexture(THREE, config.seed);
    state.atlasTexture = texture;

    state.voxelMaterial = new THREE.MeshStandardMaterial({
      map: state.atlasTexture,
      roughness: 0.92,
      metalness: 0,
    });

    const highlightGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.01, 1.01, 1.01));
    state.boundsMaterial = new THREE.LineBasicMaterial({
      color: 0xf8f8f8,
      transparent: true,
      opacity: 0.95,
    });
    state.highlightMesh = new THREE.LineSegments(highlightGeometry, state.boundsMaterial);
    state.highlightMesh.visible = false;
    state.scene.add(state.highlightMesh);

    state.raycaster = new THREE.Raycaster();
    state.raycaster.far = 8;

    if (config.postFxProfile !== "none") {
      state.composer = new EffectComposer(state.renderer);
      state.renderPass = new RenderPass(state.scene, state.camera);
      state.bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), config.bloomStrength, config.bloomRadius, config.bloomThreshold);
      state.colorPass = new ShaderPass(createVignetteShader());

      if (config.postFxProfile === "balanced") {
        state.bloomPass.strength = Math.min(state.bloomPass.strength, 0.28);
      }

      state.composer.addPass(state.renderPass);
      state.composer.addPass(state.bloomPass);
      state.composer.addPass(state.colorPass);
    }

    state.world = new WorldStore(config);

    state.meshWorker = new Worker(new URL("./workers/minecraft-mesh-worker.js", import.meta.url), {
      type: "module",
    });

    state.chunkStream = new ChunkStreamManager({
      THREE,
      scene: state.scene,
      world: state.world,
      worker: state.meshWorker,
      material: state.voxelMaterial,
      chunkSize: config.chunkSize,
      maxHeight: config.maxHeight,
      tileUVRects,
      onTargetsChanged: (targets) => {
        state.raycastTargets = targets;
      },
    });

    state.chunkStream.setRadius(state.isMobile ? config.streamRadiusMobile : config.streamRadiusDesktop);
    state.chunkStream.maxInflight = state.isMobile ? 2 : 4;
  }

  function resizeRenderer() {
    if (!state.renderer || !state.camera) {
      return;
    }

    const width = Math.max(64, stageEl.clientWidth);
    const height = Math.max(64, stageEl.clientHeight);

    const targetRatio = state.isMobile ? config.pixelRatioMobile : config.pixelRatioDesktop;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, targetRatio) * state.qualityScale;

    state.renderer.setPixelRatio(pixelRatio);
    state.renderer.setSize(width, height, false);

    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();

    state.composer?.setPixelRatio(pixelRatio);
    state.composer?.setSize(width, height);
  }

  function setSpawnPosition() {
    const spawnX = 0.5;
    const spawnZ = 0.5;
    const topY = state.world.getColumnTop(Math.floor(spawnX), Math.floor(spawnZ));
    state.player.x = spawnX;
    state.player.z = spawnZ;
    state.player.y = Math.max(topY + state.player.eyeHeight + 0.1, 12);
    state.player.vx = 0;
    state.player.vy = 0;
    state.player.vz = 0;
    state.player.onGround = false;
    state.player.yaw = 0;
    state.player.pitch = -0.06;
  }

  function syncCameraToPlayer() {
    state.camera.position.set(state.player.x, state.player.y, state.player.z);
    state.camera.rotation.set(state.player.pitch, state.player.yaw, 0, "YXZ");
  }

  function playerIntersectsSolid(nextX, nextY, nextZ, eyeHeight) {
    const radius = 0.3;
    const minX = nextX - radius;
    const maxX = nextX + radius;
    const minY = nextY - eyeHeight;
    const maxY = nextY - 0.08;
    const minZ = nextZ - radius;
    const maxZ = nextZ + radius;

    const fromX = Math.floor(minX);
    const toX = Math.floor(maxX);
    const fromY = Math.floor(minY);
    const toY = Math.floor(maxY);
    const fromZ = Math.floor(minZ);
    const toZ = Math.floor(maxZ);

    for (let y = fromY; y <= toY; y += 1) {
      for (let z = fromZ; z <= toZ; z += 1) {
        for (let x = fromX; x <= toX; x += 1) {
          if (state.world.isSolidBlock(x, y, z)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function shouldAllowLook() {
    return state.isMobile || state.pointerLocked;
  }

  function updateRaycastTarget() {
    if (!state.raycaster || !state.raycastTargets.length || !shouldAllowLook()) {
      state.targetBreak = null;
      state.targetPlace = null;
      state.highlightMesh.visible = false;
      return;
    }

    state.raycaster.setFromCamera({ x: 0, y: 0 }, state.camera);
    const hits = state.raycaster.intersectObjects(state.raycastTargets, false);

    if (!hits.length) {
      state.targetBreak = null;
      state.targetPlace = null;
      state.highlightMesh.visible = false;
      return;
    }

    const hit = hits[0];
    const breakPoint = hit.point.clone().addScaledVector(hit.face.normal, -0.01);
    const placePoint = hit.point.clone().addScaledVector(hit.face.normal, 0.01);

    const breakPos = {
      x: Math.floor(breakPoint.x),
      y: Math.floor(breakPoint.y),
      z: Math.floor(breakPoint.z),
    };

    const placePos = {
      x: Math.floor(placePoint.x),
      y: Math.floor(placePoint.y),
      z: Math.floor(placePoint.z),
    };

    if (breakPos.y <= 0 || breakPos.y > config.maxHeight) {
      state.targetBreak = null;
      state.targetPlace = null;
      state.highlightMesh.visible = false;
      return;
    }

    state.targetBreak = breakPos;
    state.targetPlace = placePos;

    state.highlightMesh.position.set(breakPos.x + 0.5, breakPos.y + 0.5, breakPos.z + 0.5);
    state.highlightMesh.visible = true;
  }

  function playStepSound(blockBelow) {
    if (blockBelow !== BLOCK_IDS.AIR) {
      state.audio.playStep(blockBelow);
    }
  }

  function updateMovement(deltaTime) {
    const moveXInput = (state.keys.KeyD ? 1 : 0) - (state.keys.KeyA ? 1 : 0) + state.mobileMove.x;
    const moveZInput = (state.keys.KeyW ? 1 : 0) - (state.keys.KeyS ? 1 : 0) + state.mobileMove.y;

    const wishLength = Math.hypot(moveXInput, moveZInput);
    const clampedMoveX = wishLength > 1 ? moveXInput / wishLength : moveXInput;
    const clampedMoveZ = wishLength > 1 ? moveZInput / wishLength : moveZInput;

    const sprinting = (state.keys.ShiftLeft || state.keys.ShiftRight) && !state.isMobile;
    const crouching = state.keys.ControlLeft || state.keys.ControlRight;
    const speed =
      config.moveSpeed *
      (sprinting ? config.sprintMultiplier : 1) *
      (crouching ? config.crouchMultiplier : 1);

    const targetEyeHeight = crouching ? 1.42 : 1.72;
    state.player.eyeHeight = lerp(state.player.eyeHeight, targetEyeHeight, clamp(deltaTime * 10, 0, 1));

    let forwardX = Math.sin(state.player.yaw);
    let forwardZ = -Math.cos(state.player.yaw);
    let rightX = -forwardZ;
    let rightZ = forwardX;

    if (state.camera && state.THREE) {
      if (!state.forwardDir) {
        state.forwardDir = new state.THREE.Vector3();
      }
      state.camera.getWorldDirection(state.forwardDir);
      state.forwardDir.y = 0;
      if (state.forwardDir.lengthSq() > 1e-6) {
        state.forwardDir.normalize();
        forwardX = state.forwardDir.x;
        forwardZ = state.forwardDir.z;
        rightX = -forwardZ;
        rightZ = forwardX;
      }
    }

    const desiredVX = (rightX * clampedMoveX + forwardX * clampedMoveZ) * speed;
    const desiredVZ = (rightZ * clampedMoveX + forwardZ * clampedMoveZ) * speed;

    const accel = state.player.onGround ? config.groundAcceleration : config.airAcceleration;
    const accelFactor = clamp(accel * deltaTime, 0, 1);

    state.player.vx = lerp(state.player.vx, desiredVX, accelFactor);
    state.player.vz = lerp(state.player.vz, desiredVZ, accelFactor);

    if (wishLength < 0.01 && state.player.onGround) {
      const friction = clamp(1 - deltaTime * 9, 0, 1);
      state.player.vx *= friction;
      state.player.vz *= friction;
    }

    const jumpPressed = state.keys.Space || state.mobileJumpQueued;
    if (jumpPressed && state.player.onGround) {
      state.player.vy = config.jumpSpeed;
      state.player.onGround = false;
    }
    state.mobileJumpQueued = false;

    state.player.vy -= config.gravity * deltaTime;

    let nextX = state.player.x + state.player.vx * deltaTime;
    let nextY = state.player.y + state.player.vy * deltaTime;
    let nextZ = state.player.z + state.player.vz * deltaTime;

    if (playerIntersectsSolid(nextX, state.player.y, state.player.z, state.player.eyeHeight)) {
      nextX = state.player.x;
      state.player.vx = 0;
    }

    if (playerIntersectsSolid(nextX, state.player.y, nextZ, state.player.eyeHeight)) {
      nextZ = state.player.z;
      state.player.vz = 0;
    }

    state.player.onGround = false;

    if (playerIntersectsSolid(nextX, nextY, nextZ, state.player.eyeHeight)) {
      if (state.player.vy <= 0) {
        for (let i = 0; i < 14; i += 1) {
          nextY += 0.02;
          if (!playerIntersectsSolid(nextX, nextY, nextZ, state.player.eyeHeight)) {
            state.player.onGround = true;
            break;
          }
        }
      } else {
        for (let i = 0; i < 14; i += 1) {
          nextY -= 0.02;
          if (!playerIntersectsSolid(nextX, nextY, nextZ, state.player.eyeHeight)) {
            break;
          }
        }
      }
      state.player.vy = 0;
    }

    state.player.x = nextX;
    state.player.y = nextY;
    state.player.z = nextZ;

    if (state.player.y < -20) {
      setSpawnPosition();
    }

    const horizontalSpeed = Math.hypot(state.player.vx, state.player.vz);
    if (state.player.onGround && horizontalSpeed > 0.55) {
      state.player.stepAccumulator += horizontalSpeed * deltaTime;
      const interval = sprinting ? 2.5 : 1.9;
      if (state.player.stepAccumulator > interval) {
        state.player.stepAccumulator = 0;
        const belowY = Math.floor(state.player.y - state.player.eyeHeight - 0.06);
        const blockBelow = state.world.getBlock(
          Math.floor(state.player.x),
          belowY,
          Math.floor(state.player.z)
        );
        playStepSound(blockBelow);
      }
    } else {
      state.player.stepAccumulator = 0;
    }
  }

  function updateDayLighting(deltaTime) {
    if (!state.directionalLight || !state.hemisphereLight || !state.scene) {
      return;
    }

    state.dayT = (state.dayT + deltaTime * 0.007) % 1;
    const angle = state.dayT * Math.PI * 2;
    const daylight = clamp(Math.sin(angle) * 0.5 + 0.5, 0.38, 1);

    const targetX = state.player.x;
    const targetY = Math.max(2, state.player.y - state.player.eyeHeight + 2);
    const targetZ = state.player.z;
    if (state.sunTarget) {
      state.sunTarget.position.set(targetX, targetY, targetZ);
    }

    state.directionalLight.position.set(
      targetX + Math.cos(angle) * 58,
      targetY + 35 + daylight * 30,
      targetZ + Math.sin(angle) * 36
    );
    state.directionalLight.intensity = lerp(0.48, 1.08, daylight);
    state.hemisphereLight.intensity = lerp(0.46, 0.9, daylight);
    if (state.ambientLight) {
      state.ambientLight.intensity = lerp(0.2, 0.34, daylight);
    }

    const shadowSpan = state.isMobile ? config.shadowDistanceMobile : config.shadowDistanceDesktop;
    const shadowCam = state.directionalLight.shadow.camera;
    shadowCam.left = -shadowSpan;
    shadowCam.right = shadowSpan;
    shadowCam.top = shadowSpan;
    shadowCam.bottom = -shadowSpan;
    shadowCam.near = 8;
    shadowCam.far = Math.max(120, shadowSpan * 5);
    shadowCam.updateProjectionMatrix();
    state.directionalLight.target.updateMatrixWorld();

    const skyR = lerp(0x2a, 0x8d, daylight);
    const skyG = lerp(0x38, 0xb8, daylight);
    const skyB = lerp(0x58, 0xec, daylight);
    const fogColor = (skyR << 16) | (skyG << 8) | skyB;

    state.scene.background.setHex(fogColor);
    state.scene.fog.color.setHex(fogColor);
  }

  function updatePerformanceGuard(deltaTime) {
    if (!state.isMobile) {
      return;
    }

    const fps = 1 / Math.max(deltaTime, 0.0001);
    state.fpsEMA = lerp(state.fpsEMA, fps, 0.08);

    if (state.fpsEMA < 24) {
      state.perfDropTimer += deltaTime;
    } else {
      state.perfDropTimer = Math.max(0, state.perfDropTimer - deltaTime * 0.7);
    }

    if (state.perfDropTimer > 6.2 && !state.perfGuardApplied) {
      state.perfGuardApplied = true;
      state.qualityScale = Math.max(0.78, state.qualityScale - 0.2);
      if (state.bloomPass) {
        state.bloomPass.strength = Math.max(0.22, state.bloomPass.strength * 0.8);
      }
      resizeRenderer();
      setStatus("Performance mode enabled.");
    }
  }

  function renderFrame() {
    if (state.composer) {
      state.composer.render();
    } else {
      state.renderer.render(state.scene, state.camera);
    }
  }

  function tryBreakBlock() {
    if (!state.targetBreak) {
      return;
    }

    const { x, y, z } = state.targetBreak;
    const blockId = state.world.getBlock(x, y, z);
    if (blockId === BLOCK_IDS.AIR || y <= 0) {
      return;
    }

    const changed = state.world.setBlock(x, y, z, BLOCK_IDS.AIR);
    if (!changed) {
      return;
    }

    state.audio.playBreak(blockId);
    state.chunkStream.invalidateAroundBlock(x, z);
  }

  function tryPlaceBlock() {
    if (!state.targetPlace) {
      return;
    }

    const { x, y, z } = state.targetPlace;
    if (y <= 0 || y > config.maxHeight) {
      return;
    }

    if (state.world.getBlock(x, y, z) !== BLOCK_IDS.AIR) {
      return;
    }

    if (playerIntersectsSolid(x + 0.5, y + 1.72, z + 0.5, state.player.eyeHeight)) {
      return;
    }

    const blockId = selectedBlockId();
    const changed = state.world.setBlock(x, y, z, blockId);
    if (!changed) {
      return;
    }

    state.audio.playPlace(blockId);
    state.chunkStream.invalidateAroundBlock(x, z);
  }

  function updateChunkStreaming() {
    const chunkX = floorDiv(Math.floor(state.player.x), config.chunkSize);
    const chunkZ = floorDiv(Math.floor(state.player.z), config.chunkSize);
    state.chunkStream.updateTargets(chunkX, chunkZ);
    state.chunkStream.processQueue(state.isMobile ? 1 : 2);
  }

  function tick(timestamp) {
    if (state.disposed || state.paused) {
      state.rafId = 0;
      return;
    }

    const deltaTime = Math.min((timestamp - state.lastTs) / 1000, 0.05);
    state.lastTs = timestamp;

    updateMovement(deltaTime);
    syncCameraToPlayer();
    updateChunkStreaming();
    updateRaycastTarget();
    updateDayLighting(deltaTime);
    updatePerformanceGuard(deltaTime);
    renderFrame();

    state.rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (state.rafId || state.paused || !state.initialized || state.disposed) {
      return;
    }

    state.lastTs = performance.now();
    state.rafId = requestAnimationFrame(tick);
  }

  function stopLoop() {
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = 0;
    }
  }

  function isHostVisible() {
    const hostWindow = section.closest(".window");
    if (!hostWindow) {
      return false;
    }
    if (hostWindow.hidden || hostWindow.style.display === "none") {
      return false;
    }
    return true;
  }

  function lockPointer() {
    if (state.isMobile || state.pointerLocked || state.disposed) {
      return;
    }
    canvasEl.requestPointerLock?.();
  }

  function unlockPointer() {
    if (document.pointerLockElement === canvasEl) {
      document.exitPointerLock?.();
    }
  }

  function pause() {
    state.paused = true;
    stopLoop();
    unlockPointer();
    state.audio.pause();
  }

  function resume() {
    if (state.disposed || !state.initialized || !isHostVisible()) {
      return;
    }
    state.paused = false;
    startLoop();
    state.audio.resume();
  }

  function bindWindowLifecycle() {
    const onWindowLifecycle = (event) => {
      if (event?.detail?.id !== WINDOW_ID) {
        return;
      }

      if (event.type === "window:minimize" || event.type === "window:close") {
        pause();
        return;
      }

      if (
        event.type === "window:restore" ||
        event.type === "window:focus" ||
        event.type === "window:open"
      ) {
        resume();
      }
    };

    addListener(document, "window:minimize", onWindowLifecycle);
    addListener(document, "window:restore", onWindowLifecycle);
    addListener(document, "window:focus", onWindowLifecycle);
    addListener(document, "window:open", onWindowLifecycle);
    addListener(document, "window:close", onWindowLifecycle);
  }

  function bindDesktopPointerInput() {
    addListener(canvasEl, "click", () => {
      state.audio.unlock();
      if (!state.isMobile && !state.pointerLocked) {
        lockPointer();
      }
    });

    addListener(canvasEl, "contextmenu", (event) => {
      event.preventDefault();
    });

    addListener(canvasEl, "pointerdown", (event) => {
      state.audio.unlock();
      if (!state.pointerLocked || state.isMobile) {
        return;
      }

      if (event.button === 0) {
        tryBreakBlock();
      } else if (event.button === 2) {
        tryPlaceBlock();
      }
    });

    addListener(releaseBtnEl, "click", () => {
      unlockPointer();
    });

    addListener(document, "pointerlockchange", () => {
      state.pointerLocked = document.pointerLockElement === canvasEl;

      if (state.pointerLocked) {
        setOverlayVisible(false);
        setStatus("Esc: release mouse");
      } else {
        setOverlayVisible(true);
        setStatus("Pointer released.");
      }
    });

    addListener(document, "mousemove", (event) => {
      if (!state.pointerLocked || state.isMobile) {
        return;
      }

      state.player.yaw -= event.movementX * config.mouseSensitivity;
      state.player.pitch -= event.movementY * config.mouseSensitivity;
      state.player.pitch = clamp(state.player.pitch, -Math.PI * 0.49, Math.PI * 0.49);
    });
  }

  function bindKeyboardInput() {
    addListener(document, "keydown", (event) => {
      state.audio.unlock();

      if (event.code in state.keys) {
        state.keys[event.code] = true;
        if (state.pointerLocked) {
          event.preventDefault();
        }
      }

      if (event.code.startsWith("Digit")) {
        const slot = Number(event.code.slice(-1)) - 1;
        if (slot >= 0 && slot < HOTBAR_BLOCKS.length) {
          setHotbarSlot(slot);
        }
      }

      if (event.code === "Escape" && state.pointerLocked) {
        event.preventDefault();
        unlockPointer();
      }
    });

    addListener(document, "keyup", (event) => {
      if (event.code in state.keys) {
        state.keys[event.code] = false;
      }
    });

    addListener(window, "blur", () => {
      Object.keys(state.keys).forEach((key) => {
        state.keys[key] = false;
      });
      state.mobileMove.x = 0;
      state.mobileMove.y = 0;
      if (state.pointerLocked) {
        unlockPointer();
      }
    });
  }

  function setJoystickFromClient(clientX, clientY) {
    const rect = joyBaseEl.getBoundingClientRect();
    const centerX = rect.left + rect.width * 0.5;
    const centerY = rect.top + rect.height * 0.5;
    const radius = rect.width * 0.5;

    let dx = clientX - centerX;
    let dy = clientY - centerY;
    const length = Math.hypot(dx, dy);

    if (length > radius) {
      dx = (dx / length) * radius;
      dy = (dy / length) * radius;
    }

    const nx = dx / radius;
    const ny = dy / radius;
    const deadzone = config.mobileMoveDeadzone;

    const moveX = Math.abs(nx) < deadzone ? 0 : nx;
    const moveY = Math.abs(ny) < deadzone ? 0 : -ny;

    state.mobileMove.x = clamp(moveX, -1, 1);
    state.mobileMove.y = clamp(moveY, -1, 1);

    joyKnobEl.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function resetJoystick() {
    state.mobileMove.x = 0;
    state.mobileMove.y = 0;
    joyKnobEl.style.transform = "translate(0px, 0px)";
  }

  function bindMobileInput() {
    addListener(joyBaseEl, "pointerdown", (event) => {
      if (!state.isMobile) {
        return;
      }
      state.audio.unlock();
      state.mobileMove.activePointerId = event.pointerId;
      joyBaseEl.setPointerCapture(event.pointerId);
      setJoystickFromClient(event.clientX, event.clientY);
      event.preventDefault();
    });

    addListener(joyBaseEl, "pointermove", (event) => {
      if (!state.isMobile || state.mobileMove.activePointerId !== event.pointerId) {
        return;
      }
      setJoystickFromClient(event.clientX, event.clientY);
      event.preventDefault();
    });

    const endJoy = (event) => {
      if (state.mobileMove.activePointerId !== event.pointerId) {
        return;
      }
      state.mobileMove.activePointerId = null;
      resetJoystick();
    };

    addListener(joyBaseEl, "pointerup", endJoy);
    addListener(joyBaseEl, "pointercancel", endJoy);

    addListener(lookZoneEl, "pointerdown", (event) => {
      if (!state.isMobile) {
        return;
      }
      state.audio.unlock();
      state.mobileLook.activePointerId = event.pointerId;
      state.mobileLook.lastX = event.clientX;
      state.mobileLook.lastY = event.clientY;
      lookZoneEl.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

    addListener(lookZoneEl, "pointermove", (event) => {
      if (!state.isMobile || state.mobileLook.activePointerId !== event.pointerId) {
        return;
      }

      const dx = event.clientX - state.mobileLook.lastX;
      const dy = event.clientY - state.mobileLook.lastY;
      state.mobileLook.lastX = event.clientX;
      state.mobileLook.lastY = event.clientY;

      state.player.yaw -= dx * config.mobileLookSensitivity;
      state.player.pitch -= dy * config.mobileLookSensitivity;
      state.player.pitch = clamp(state.player.pitch, -Math.PI * 0.49, Math.PI * 0.49);
      event.preventDefault();
    });

    const endLook = (event) => {
      if (state.mobileLook.activePointerId !== event.pointerId) {
        return;
      }
      state.mobileLook.activePointerId = null;
    };

    addListener(lookZoneEl, "pointerup", endLook);
    addListener(lookZoneEl, "pointercancel", endLook);

    mobileUiEl.querySelectorAll("[data-minecraft-action]").forEach((button) => {
      addListener(button, "click", () => {
        state.audio.unlock();

        const action = button.dataset.minecraftAction;
        if (action === "jump") {
          state.mobileJumpQueued = true;
          return;
        }
        if (action === "break") {
          tryBreakBlock();
          return;
        }
        if (action === "place") {
          tryPlaceBlock();
        }
      });
    });
  }

  function bindResizeHandlers() {
    const onResize = () => {
      updateMobileModeUI();
      resizeRenderer();
    };

    addListener(window, "resize", onResize);

    if (typeof ResizeObserver === "function") {
      state.resizeObserver = new ResizeObserver(() => {
        updateMobileModeUI();
        resizeRenderer();
      });
      state.resizeObserver.observe(stageEl);
    }
  }

  async function init() {
    setStatus("Loading 3D engine...");
    buildHotbar();
    updateMobileModeUI();

    state.deps = await loadThreeDependencies();
    state.THREE = state.deps.THREE;

    if (state.disposed) {
      return;
    }

    setupRenderer();
    bindWindowLifecycle();
    bindDesktopPointerInput();
    bindKeyboardInput();
    bindMobileInput();
    bindResizeHandlers();

    setSpawnPosition();
    syncCameraToPlayer();
    resizeRenderer();

    state.chunkStream.updateTargets(0, 0);
    state.chunkStream.processQueue(state.isMobile ? 1 : 3);

    state.initialized = true;
    setOverlayVisible(true);
    setStatus("Ready.");

    state.audio.init().catch(() => {
      // optional audio setup
    });

    resume();
  }

  function disposeRendererResources() {
    state.chunkStream?.dispose();
    state.chunkStream = null;

    if (state.highlightMesh) {
      state.highlightMesh.geometry.dispose();
      state.scene?.remove(state.highlightMesh);
      state.highlightMesh = null;
    }

    if (state.boundsMaterial) {
      state.boundsMaterial.dispose();
      state.boundsMaterial = null;
    }

    if (state.voxelMaterial) {
      state.voxelMaterial.dispose();
      state.voxelMaterial = null;
    }

    if (state.atlasTexture) {
      state.atlasTexture.dispose();
      state.atlasTexture = null;
    }

    if (state.composer) {
      state.composer.dispose();
      state.composer = null;
    }

    if (state.renderer) {
      state.renderer.dispose();
      state.renderer = null;
    }

    state.scene = null;
    state.camera = null;
  }

  function dispose() {
    state.disposed = true;
    pause();

    if (state.resizeObserver) {
      state.resizeObserver.disconnect();
      state.resizeObserver = null;
    }

    while (state.listeners.length) {
      const remove = state.listeners.pop();
      try {
        remove();
      } catch {
        // ignore cleanup errors
      }
    }

    state.audio.dispose();
    disposeRendererResources();
  }

  section.cleanup = dispose;
  section.pause = pause;
  section.resume = resume;

  init().catch((error) => {
    if (state.disposed) {
      return;
    }
    console.error("minecraft.exe failed to initialize", error);
    setStatus(`Failed to initialize minecraft.exe: ${error.message}`, true);
    setOverlayVisible(true);
  });

  return section;
}
