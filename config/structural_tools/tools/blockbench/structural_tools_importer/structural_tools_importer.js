(function () {
  let importAction;
  let exportAction;
  let scaleAction;

  const hasNode = typeof require === "function";
  const fs = hasNode ? require("fs") : null;
  const path = hasNode ? require("path") : null;

  const I18N = {
    en: {
      plugin_title: "Structural Tools Importer",
      plugin_desc: "Imports Structural Tools export JSON as cubes (16x16x16 per block).",
      importer_title: "Structural Tools Importer",
      exporter_title: "Structural Tools Export",
      import_action_name: "Import Structural Tools Export",
      import_action_desc: "Import a Structural Tools export JSON and generate cubes",
      export_action_name: "Export Structural Tools / MMCE JSON",
      export_action_desc: "Export cubes back to JSON (supports merged cuboids).",
      merge: "Merge Contiguous Blocks",
      merge_mode: "Merge Mode",
      merge_axis: "Merge Axis",
      mode_auto_3d: "Auto (3D)",
      mode_axis: "Axis (1D)",
      mode_force_max: "Force Max (Extreme)",
      mode_force_max_pure: "Force Max (Pure)",
      mode_force_max_solid: "Force Max (Solid Fill)",
      preserve_shell: "Preserve Shell (1x1)",
      shell_visible_only: "Shell Visible Faces Only",
      apply_textures: "Apply Textures From Folder",
      texture_folder: "Texture Folder",
      format: "Format",
      random_vanilla: "Random Vanilla IDs (By Group)",
      file_name: "File Name",
      scale_action_name: "Scale Model (Uniform)",
      scale_action_desc: "Uniformly scale the whole model around its center.",
      scale_dialog_title: "Scale Model",
      scale_factor: "Scale Factor",
      scale_err_invalid: "Invalid scale factor.",
      err_invalid_root: "Invalid JSON root",
      err_unsupported_format: "Unsupported JSON format (expected blocks[] or parts[])",
      err_force_export: "Force Max models do not contain block type info and cannot be exported yet.",
      err_no_blocks: "No exportable blocks found (import with this plugin before exporting).",
      msg_force_solid_fallback: "Force Max Solid Fill: bounds too large to fill, fell back to Pure.",
      msg_force_neighbor_fallback: "Force Max: bounds too large, shell extraction fell back to neighbor-surface test (may keep cavity walls).",
      msg_desktop_only_textures: "This Blockbench environment cannot read textures from folder (desktop only)."
    },
    zh: {
      plugin_title: "结构工具导入器",
      plugin_desc: "将 Structural Tools 导出 JSON 导入为 cubes（每方块 16×16×16）。",
      importer_title: "结构工具导入器",
      exporter_title: "结构工具导出",
      import_action_name: "导入 Structural Tools 导出",
      import_action_desc: "导入 Structural Tools 导出 JSON 并生成 cubes",
      export_action_name: "导出 Structural Tools / MMCE JSON",
      export_action_desc: "将 cubes 导出回 JSON（支持合并后的长方体）。",
      merge: "合并连续方块",
      merge_mode: "合并模式",
      merge_axis: "合并轴",
      mode_auto_3d: "自动（3D）",
      mode_axis: "单轴（1D）",
      mode_force_max: "Force Max（极限）",
      mode_force_max_pure: "Force Max（纯合并）",
      mode_force_max_solid: "Force Max（填充）",
      preserve_shell: "外壳保持 1×1（只合并内部）",
      shell_visible_only: "外壳仅保留可见面",
      apply_textures: "从文件夹应用贴图",
      texture_folder: "贴图文件夹",
      format: "格式",
      random_vanilla: "按分组随机原版方块 ID",
      file_name: "文件名",
      scale_action_name: "等比缩放模型",
      scale_action_desc: "围绕模型中心等比缩放整个模型。",
      scale_dialog_title: "等比缩放",
      scale_factor: "缩放倍率",
      scale_err_invalid: "缩放倍率无效。",
      err_invalid_root: "无效的 JSON 根对象",
      err_unsupported_format: "不支持的 JSON 格式（需要 blocks[] 或 parts[]）",
      err_force_export: "Force Max 模式的模型不包含方块类型信息，暂不支持导出。",
      err_no_blocks: "未找到可导出的方块（需要从本插件导入后再导出）。",
      msg_force_solid_fallback: "Force Max Solid Fill：结构尺寸过大，无法执行填充，已自动回退为 Pure。",
      msg_force_neighbor_fallback: "Force Max：结构尺寸过大，外壳提取已降级为表面邻接判定（可能保留内部空腔壁）。",
      msg_desktop_only_textures: "当前 Blockbench 环境不支持从文件夹读取贴图（仅桌面版可用）。"
    }
  };

  function getLang() {
    try {
      if (typeof Settings !== "undefined" && Settings && typeof Settings.get === "function") {
        const l = Settings.get("language");
        if (typeof l === "string" && l.length) return l.toLowerCase().startsWith("zh") ? "zh" : "en";
      }
    } catch (e) {}
    try {
      if (typeof Blockbench !== "undefined" && Blockbench && typeof Blockbench.getLocale === "function") {
        const l = Blockbench.getLocale();
        if (typeof l === "string" && l.length) return l.toLowerCase().startsWith("zh") ? "zh" : "en";
      }
    } catch (e) {}
    try {
      const l = typeof navigator !== "undefined" ? navigator.language : null;
      if (typeof l === "string" && l.length) return l.toLowerCase().startsWith("zh") ? "zh" : "en";
    } catch (e) {}
    return "en";
  }

  function tr(key) {
    const lang = getLang();
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function toShortBool(v) {
    if (v === true || v === "true") return "T";
    if (v === false || v === "false") return "F";
    return String(v);
  }

  function abbreviatePropertyName(name) {
    const map = {
      down: "d",
      up: "u",
      north: "n",
      south: "s",
      east: "e",
      west: "w"
    };
    if (map[name]) return map[name];
    if (typeof name !== "string" || !name.length) return "p";
    if (name.length <= 3) return name;
    const parts = name.split("_").filter(Boolean);
    if (parts.length >= 2) return parts.map((p) => p[0]).join("");
    return name.slice(0, 3);
  }

  function formatBlockLabel(id, state) {
    const safeId = typeof id === "string" && id.length ? id.replace(/:/g, "：") : "unknown";
    if (!state || typeof state !== "object") return safeId;

    const keys = Object.keys(state).sort();
    if (keys.length === 0) return safeId;

    if (keys.length === 1 && keys[0] === "meta") {
      return `${safeId} (meta ${state.meta})`;
    }

    const parts = keys.slice(0, 12).map((k) => `${abbreviatePropertyName(k)}=${toShortBool(state[k])}`);
    const suffix = keys.length > 12 ? " …" : "";
    return `${safeId} [${parts.join(" ")}${suffix}]`;
  }

  function formatGroupName(key, sampleBlock) {
    if (typeof key === "string" && key.startsWith("choice:")) {
      const options = key.slice("choice:".length);
      const count = options.length ? options.split("|").length : 0;
      return count ? `choice (${count})` : "choice";
    }
    if (typeof key === "string" && key.startsWith("FORCE_MERGED_")) {
      const mode = key.slice("FORCE_MERGED_".length);
      const label = mode === "PURE" ? "Pure" : mode === "SOLID" ? "Solid Fill" : "Extreme";
      return `FORCE_MERGED (${label})`;
    }
    if (sampleBlock && typeof sampleBlock === "object") {
      return formatBlockLabel(sampleBlock.id, sampleBlock.state);
    }
    return typeof key === "string" && key.length ? key : "blocks";
  }

  function parseElementString(element) {
    if (typeof element !== "string" || !element.length) {
      return { id: "minecraft:air", state: null, key: "minecraft:air" };
    }
    const match = /^([^@]+)(?:@(.+))?$/.exec(element.trim());
    const id = match && match[1] ? match[1] : element.trim();
    const meta = match && match[2] != null ? String(match[2]) : null;
    const state = meta == null ? null : { meta };
    const key = meta == null ? id : `${id}[meta=${meta}]`;
    return { id, state, key };
  }

  function toBlockKey(id, state) {
    if (!state || typeof state !== "object") return id;
    const keys = Object.keys(state).sort();
    if (keys.length === 0) return id;
    const props = keys.map((k) => `${k}=${state[k]}`).join(",");
    return `${id}[${props}]`;
  }

  function normalizeInput(text) {
    const data = JSON.parse(text);
    if (typeof data !== "object" || data === null) throw new Error(tr("err_invalid_root"));

    if (Array.isArray(data.blocks)) {
      return { blocks: data.blocks };
    }

    if (Array.isArray(data.parts)) {
      const blocks = [];
      for (const part of data.parts) {
        if (!part || typeof part !== "object") continue;
        const x = Number(part.x ?? 0);
        const y = Number(part.y ?? 0);
        const z = Number(part.z ?? 0);
        const elements = Array.isArray(part.elements) ? part.elements.filter((e) => typeof e === "string") : [];

        if (elements.length <= 1) {
          const parsed = parseElementString(elements[0] ?? "minecraft:air");
          blocks.push({ pos: [x, y, z], id: parsed.id, state: parsed.state, key: parsed.key });
        } else {
          const choiceKey = `choice:${elements.join("|")}`;
          const parsed = parseElementString(elements[0]);
          blocks.push({ pos: [x, y, z], id: parsed.id, state: parsed.state, key: choiceKey });
        }
      }
      return { blocks };
    }

    throw new Error(tr("err_unsupported_format"));
  }

  function buildOccupancy(blocks) {
    const occ = new Set();
    const coords = [];
    let minX = Infinity;
    let minY = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let maxZ = -Infinity;

    for (const b of blocks) {
      const pos = b && Array.isArray(b.pos) ? b.pos : [0, 0, 0];
      const x = Number(pos[0] ?? 0);
      const y = Number(pos[1] ?? 0);
      const z = Number(pos[2] ?? 0);
      const k = `${x},${y},${z}`;
      if (occ.has(k)) continue;
      occ.add(k);
      coords.push([x, y, z]);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      minZ = Math.min(minZ, z);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      maxZ = Math.max(maxZ, z);
    }

    if (!coords.length) {
      minX = 0;
      minY = 0;
      minZ = 0;
      maxX = -1;
      maxY = -1;
      maxZ = -1;
    }

    return { occ, coords, minX, minY, minZ, maxX, maxY, maxZ };
  }

  function shellOnlyOccupancy(occInfo, maxVolume) {
    const { occ, coords, minX, minY, minZ, maxX, maxY, maxZ } = occInfo;
    if (!coords.length) return { occ: new Set(), coords: [], fallback: false };

    const exMinX = minX - 1;
    const exMinY = minY - 1;
    const exMinZ = minZ - 1;
    const exMaxX = maxX + 1;
    const exMaxY = maxY + 1;
    const exMaxZ = maxZ + 1;

    const dx = exMaxX - exMinX + 1;
    const dy = exMaxY - exMinY + 1;
    const dz = exMaxZ - exMinZ + 1;
    const volume = dx * dy * dz;

    if (volume > maxVolume) {
      const shell = new Set();
      const shellCoords = [];
      for (const [x, y, z] of coords) {
        const n1 = !occ.has(`${x + 1},${y},${z}`);
        const n2 = !occ.has(`${x - 1},${y},${z}`);
        const n3 = !occ.has(`${x},${y + 1},${z}`);
        const n4 = !occ.has(`${x},${y - 1},${z}`);
        const n5 = !occ.has(`${x},${y},${z + 1}`);
        const n6 = !occ.has(`${x},${y},${z - 1}`);
        if (n1 || n2 || n3 || n4 || n5 || n6) {
          const k = `${x},${y},${z}`;
          shell.add(k);
          shellCoords.push([x, y, z]);
        }
      }
      return { occ: shell, coords: shellCoords, fallback: true };
    }

    const occGrid = new Uint8Array(volume);
    const visited = new Uint8Array(volume);
    const plane = dx * dy;

    const toIdx = (x, y, z) => {
      const ix = x - exMinX;
      const iy = y - exMinY;
      const iz = z - exMinZ;
      return ix + dx * iy + plane * iz;
    };

    for (const [x, y, z] of coords) {
      occGrid[toIdx(x, y, z)] = 1;
    }

    const queue = new Int32Array(volume);
    let head = 0;
    let tail = 0;
    queue[tail++] = 0;
    visited[0] = 1;

    while (head < tail) {
      const idx = queue[head++];
      const ix = idx % dx;
      const t = (idx - ix) / dx;
      const iy = t % dy;
      const iz = (t - iy) / dy;

      if (ix > 0) {
        const n = idx - 1;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (ix + 1 < dx) {
        const n = idx + 1;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iy > 0) {
        const n = idx - dx;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iy + 1 < dy) {
        const n = idx + dx;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iz > 0) {
        const n = idx - plane;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iz + 1 < dz) {
        const n = idx + plane;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
    }

    const shell = new Set();
    const shellCoords = [];
    for (const [x, y, z] of coords) {
      const idx = toIdx(x, y, z);

      const ix = idx % dx;
      const t = (idx - ix) / dx;
      const iy = t % dy;
      const iz = (t - iy) / dy;

      let keep = false;
      if (ix > 0 && visited[idx - 1]) keep = true;
      else if (ix + 1 < dx && visited[idx + 1]) keep = true;
      else if (iy > 0 && visited[idx - dx]) keep = true;
      else if (iy + 1 < dy && visited[idx + dx]) keep = true;
      else if (iz > 0 && visited[idx - plane]) keep = true;
      else if (iz + 1 < dz && visited[idx + plane]) keep = true;

      if (keep) {
        const k = `${x},${y},${z}`;
        shell.add(k);
        shellCoords.push([x, y, z]);
      }
    }

    return { occ: shell, coords: shellCoords, fallback: false };
  }

  function greedyRectanglesFromPairs(pairs, width, height) {
    const grid = new Uint8Array(width * height);
    for (const [a, b] of pairs) {
      if (a < 0 || b < 0 || a >= width || b >= height) continue;
      grid[a + b * width] = 1;
    }

    const rects = [];
    for (let by = 0; by < height; by++) {
      const rowBase = by * width;
      for (let bx = 0; bx < width; bx++) {
        const startIdx = rowBase + bx;
        if (!grid[startIdx]) continue;

        let w = 1;
        while (bx + w < width && grid[rowBase + bx + w]) w++;

        let h = 1;
        outer: while (by + h < height) {
          const base = (by + h) * width + bx;
          for (let dx = 0; dx < w; dx++) {
            if (!grid[base + dx]) break outer;
          }
          h++;
        }

        for (let dy = 0; dy < h; dy++) {
          const base = (by + dy) * width + bx;
          for (let dx = 0; dx < w; dx++) {
            grid[base + dx] = 0;
          }
        }

        rects.push({ a0: bx, b0: by, a1: bx + w, b1: by + h });
      }
    }

    return rects;
  }

  function stackRectangles(rectanglesBySlice, sliceOrder) {
    const active = new Map();
    const boxes = [];

    const flushMissing = (nextActive) => {
      for (const [k, v] of active.entries()) {
        if (!nextActive.has(k)) {
          boxes.push(v);
        }
      }
      active.clear();
      for (const [k, v] of nextActive.entries()) active.set(k, v);
    };

    for (const s of sliceOrder) {
      const rects = rectanglesBySlice.get(s) ?? [];
      const nextActive = new Map();
      for (const r of rects) {
        const key = `${r.a0},${r.a1},${r.b0},${r.b1}`;
        const prev = active.get(key);
        if (prev) {
          nextActive.set(key, { a0: r.a0, a1: r.a1, b0: r.b0, b1: r.b1, s0: prev.s0, s1: s + 1 });
        } else {
          nextActive.set(key, { a0: r.a0, a1: r.a1, b0: r.b0, b1: r.b1, s0: s, s1: s + 1 });
        }
      }
      flushMissing(nextActive);
    }

    for (const v of active.values()) boxes.push(v);
    return boxes;
  }

  function greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, axis) {
    const sizeX = maxX - minX + 1;
    const sizeY = maxY - minY + 1;
    const sizeZ = maxZ - minZ + 1;

    const rectanglesBySlice = new Map();
    const slices = new Map();

    if (axis === "y") {
      for (const [x, y, z] of coords) {
        const key = y - minY;
        let arr = slices.get(key);
        if (!arr) {
          arr = [];
          slices.set(key, arr);
        }
        arr.push([x - minX, z - minZ]);
      }
      for (const [s, pairs] of slices.entries()) {
        rectanglesBySlice.set(s, greedyRectanglesFromPairs(pairs, sizeX, sizeZ));
      }
      const sliceOrder = Array.from({ length: sizeY }, (_, i) => i);
      const stacked = stackRectangles(rectanglesBySlice, sliceOrder);
      return stacked.map((b) => ({
        x0: minX + b.a0,
        x1: minX + b.a1,
        y0: minY + b.s0,
        y1: minY + b.s1,
        z0: minZ + b.b0,
        z1: minZ + b.b1
      }));
    }

    if (axis === "x") {
      for (const [x, y, z] of coords) {
        const key = x - minX;
        let arr = slices.get(key);
        if (!arr) {
          arr = [];
          slices.set(key, arr);
        }
        arr.push([y - minY, z - minZ]);
      }
      for (const [s, pairs] of slices.entries()) {
        rectanglesBySlice.set(s, greedyRectanglesFromPairs(pairs, sizeY, sizeZ));
      }
      const sliceOrder = Array.from({ length: sizeX }, (_, i) => i);
      const stacked = stackRectangles(rectanglesBySlice, sliceOrder);
      return stacked.map((b) => ({
        x0: minX + b.s0,
        x1: minX + b.s1,
        y0: minY + b.a0,
        y1: minY + b.a1,
        z0: minZ + b.b0,
        z1: minZ + b.b1
      }));
    }

    for (const [x, y, z] of coords) {
      const key = z - minZ;
      let arr = slices.get(key);
      if (!arr) {
        arr = [];
        slices.set(key, arr);
      }
      arr.push([x - minX, y - minY]);
    }
    for (const [s, pairs] of slices.entries()) {
      rectanglesBySlice.set(s, greedyRectanglesFromPairs(pairs, sizeX, sizeY));
    }
    const sliceOrder = Array.from({ length: sizeZ }, (_, i) => i);
    const stacked = stackRectangles(rectanglesBySlice, sliceOrder);
    return stacked.map((b) => ({
      x0: minX + b.a0,
      x1: minX + b.a1,
      y0: minY + b.b0,
      y1: minY + b.b1,
      z0: minZ + b.s0,
      z1: minZ + b.s1
    }));
  }

  function boxesCost(boxes) {
    let area = 0;
    for (const b of boxes) {
      const dx = b.x1 - b.x0;
      const dy = b.y1 - b.y0;
      const dz = b.z1 - b.z0;
      area += 2 * (dx * dy + dy * dz + dx * dz);
    }
    return boxes.length * 1000000 + area;
  }

  function forceMaxExtreme(blocks) {
    const occInfo = buildOccupancy(blocks);
    const shell = shellOnlyOccupancy(occInfo, 5000000);
    const coords = shell.coords;
    if (!coords.length) return { boxes: [], fallback: shell.fallback };

    let minX = Infinity;
    let minY = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let maxZ = -Infinity;
    for (const [x, y, z] of coords) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      minZ = Math.min(minZ, z);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      maxZ = Math.max(maxZ, z);
    }

    const byY = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "y");
    const byX = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "x");
    const byZ = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "z");

    let best = byY;
    let bestCost = boxesCost(best);
    const cX = boxesCost(byX);
    if (cX < bestCost) {
      best = byX;
      bestCost = cX;
    }
    const cZ = boxesCost(byZ);
    if (cZ < bestCost) {
      best = byZ;
    }

    return { boxes: best, fallback: shell.fallback };
  }

  function forceMaxPure(blocks) {
    const occInfo = buildOccupancy(blocks);
    const coords = occInfo.coords;
    if (!coords.length) return { boxes: [], fallback: false };

    const minX = occInfo.minX;
    const minY = occInfo.minY;
    const minZ = occInfo.minZ;
    const maxX = occInfo.maxX;
    const maxY = occInfo.maxY;
    const maxZ = occInfo.maxZ;

    const byY = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "y");
    const byX = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "x");
    const byZ = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "z");

    let best = byY;
    let bestCost = boxesCost(best);
    const cX = boxesCost(byX);
    if (cX < bestCost) {
      best = byX;
      bestCost = cX;
    }
    const cZ = boxesCost(byZ);
    if (cZ < bestCost) {
      best = byZ;
    }
    return { boxes: best, fallback: false };
  }

  function solidFillOccupancy(occInfo, maxVolume) {
    const { occ, coords, minX, minY, minZ, maxX, maxY, maxZ } = occInfo;
    if (!coords.length) return { occ: new Set(), coords: [], fallback: false };

    const exMinX = minX - 1;
    const exMinY = minY - 1;
    const exMinZ = minZ - 1;
    const exMaxX = maxX + 1;
    const exMaxY = maxY + 1;
    const exMaxZ = maxZ + 1;

    const dx = exMaxX - exMinX + 1;
    const dy = exMaxY - exMinY + 1;
    const dz = exMaxZ - exMinZ + 1;
    const volume = dx * dy * dz;

    if (volume > maxVolume) {
      return { occ, coords, fallback: true };
    }

    const occGrid = new Uint8Array(volume);
    const visited = new Uint8Array(volume);
    const plane = dx * dy;

    const toIdx = (x, y, z) => {
      const ix = x - exMinX;
      const iy = y - exMinY;
      const iz = z - exMinZ;
      return ix + dx * iy + plane * iz;
    };

    for (const [x, y, z] of coords) {
      occGrid[toIdx(x, y, z)] = 1;
    }

    const queue = new Int32Array(volume);
    let head = 0;
    let tail = 0;
    queue[tail++] = 0;
    visited[0] = 1;

    while (head < tail) {
      const idx = queue[head++];
      const ix = idx % dx;
      const t = (idx - ix) / dx;
      const iy = t % dy;
      const iz = (t - iy) / dy;

      if (ix > 0) {
        const n = idx - 1;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (ix + 1 < dx) {
        const n = idx + 1;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iy > 0) {
        const n = idx - dx;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iy + 1 < dy) {
        const n = idx + dx;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iz > 0) {
        const n = idx - plane;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
      if (iz + 1 < dz) {
        const n = idx + plane;
        if (!visited[n] && !occGrid[n]) {
          visited[n] = 1;
          queue[tail++] = n;
        }
      }
    }

    const filled = new Set(occ);
    const filledCoords = [];
    for (let idx = 0; idx < volume; idx++) {
      if (!occGrid[idx] && !visited[idx]) {
        occGrid[idx] = 1;
      }
      if (!occGrid[idx]) continue;

      const ix = idx % dx;
      const t = (idx - ix) / dx;
      const iy = t % dy;
      const iz = (t - iy) / dy;
      const x = exMinX + ix;
      const y = exMinY + iy;
      const z = exMinZ + iz;
      if (x < minX || x > maxX || y < minY || y > maxY || z < minZ || z > maxZ) {
        continue;
      }
      const k = `${x},${y},${z}`;
      if (filled.has(k)) continue;
      filled.add(k);
      filledCoords.push([x, y, z]);
    }

    if (filledCoords.length === 0) {
      return { occ, coords, fallback: false };
    }
    return { occ: filled, coords: coords.concat(filledCoords), fallback: false };
  }

  function forceMaxSolidFill(blocks) {
    const occInfo = buildOccupancy(blocks);
    const filled = solidFillOccupancy(occInfo, 5000000);
    const coords = filled.coords;
    if (!coords.length) return { boxes: [], fallback: filled.fallback };

    let minX = Infinity;
    let minY = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let maxZ = -Infinity;
    for (const [x, y, z] of coords) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      minZ = Math.min(minZ, z);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      maxZ = Math.max(maxZ, z);
    }

    const byY = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "y");
    const byX = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "x");
    const byZ = greedyMeshAxis(coords, minX, minY, minZ, maxX, maxY, maxZ, "z");

    let best = byY;
    let bestCost = boxesCost(best);
    const cX = boxesCost(byX);
    if (cX < bestCost) {
      best = byX;
      bestCost = cX;
    }
    const cZ = boxesCost(byZ);
    if (cZ < bestCost) {
      best = byZ;
    }

    return { boxes: best, fallback: filled.fallback };
  }

  function mergeBlocks(blocks, axis) {
    if (!Array.isArray(blocks) || blocks.length === 0) return [];
    const axisKey = axis === "y" || axis === "z" ? axis : "x";

    const lines = new Map();
    for (const b of blocks) {
      const pos = Array.isArray(b.pos) ? b.pos : [0, 0, 0];
      const x = Number(pos[0] ?? 0);
      const y = Number(pos[1] ?? 0);
      const z = Number(pos[2] ?? 0);

      let key;
      let t;
      if (axisKey === "x") {
        key = `${y},${z}`;
        t = x;
      } else if (axisKey === "y") {
        key = `${x},${z}`;
        t = y;
      } else {
        key = `${x},${y}`;
        t = z;
      }

      let arr = lines.get(key);
      if (!arr) {
        arr = [];
        lines.set(key, arr);
      }
      arr.push(t);
    }

    const boxes = [];
    for (const [key, arr] of lines.entries()) {
      arr.sort((a, b) => a - b);
      let start = arr[0];
      let prev = arr[0];
      for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        if (cur === prev || cur === prev + 1) {
          prev = cur;
          continue;
        }
        boxes.push({ key, start, end: prev, axis: axisKey });
        start = cur;
        prev = cur;
      }
      boxes.push({ key, start, end: prev, axis: axisKey });
    }

    return boxes;
  }

  function mergeBlocksAuto3D(blocks) {
    if (!Array.isArray(blocks) || blocks.length === 0) return [];

    const mergeAdjacentCuboids = (input) => {
      let boxes = input.slice();
      const mergeAxis = (axis) => {
        const groups = new Map();
        for (const b of boxes) {
          let gk;
          if (axis === "x") gk = `${b.y0},${b.y1},${b.z0},${b.z1}`;
          else if (axis === "y") gk = `${b.x0},${b.x1},${b.z0},${b.z1}`;
          else gk = `${b.x0},${b.x1},${b.y0},${b.y1}`;
          let arr = groups.get(gk);
          if (!arr) {
            arr = [];
            groups.set(gk, arr);
          }
          arr.push(b);
        }

        const merged = [];
        let changed = false;
        for (const arr of groups.values()) {
          arr.sort((a, b) => {
            if (axis === "x") return a.x0 - b.x0 || a.y0 - b.y0 || a.z0 - b.z0;
            if (axis === "y") return a.y0 - b.y0 || a.x0 - b.x0 || a.z0 - b.z0;
            return a.z0 - b.z0 || a.x0 - b.x0 || a.y0 - b.y0;
          });

          let cur = arr[0];
          for (let i = 1; i < arr.length; i++) {
            const nxt = arr[i];
            if (axis === "x" && nxt.x0 === cur.x1) {
              cur = { x0: cur.x0, y0: cur.y0, z0: cur.z0, x1: nxt.x1, y1: cur.y1, z1: cur.z1 };
              changed = true;
              continue;
            }
            if (axis === "y" && nxt.y0 === cur.y1) {
              cur = { x0: cur.x0, y0: cur.y0, z0: cur.z0, x1: cur.x1, y1: nxt.y1, z1: cur.z1 };
              changed = true;
              continue;
            }
            if (axis === "z" && nxt.z0 === cur.z1) {
              cur = { x0: cur.x0, y0: cur.y0, z0: cur.z0, x1: cur.x1, y1: cur.y1, z1: nxt.z1 };
              changed = true;
              continue;
            }
            merged.push(cur);
            cur = nxt;
          }
          merged.push(cur);
        }

        boxes = merged;
        return changed;
      };

      for (let i = 0; i < 8; i++) {
        const changed = mergeAxis("x") || mergeAxis("y") || mergeAxis("z");
        if (!changed) break;
      }
      return boxes;
    };

    const occ = new Set();
    const coords = [];
    for (const b of blocks) {
      const pos = Array.isArray(b.pos) ? b.pos : [0, 0, 0];
      const x = Number(pos[0] ?? 0);
      const y = Number(pos[1] ?? 0);
      const z = Number(pos[2] ?? 0);
      const k = `${x},${y},${z}`;
      if (occ.has(k)) continue;
      occ.add(k);
      coords.push([x, y, z]);
    }

    coords.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    const unvisited = new Set(occ);
    const boxes = [];

    const has = (x, y, z) => unvisited.has(`${x},${y},${z}`);
    const clearBox = (x0, y0, z0, x1, y1, z1) => {
      for (let x = x0; x < x1; x++) {
        for (let y = y0; y < y1; y++) {
          for (let z = z0; z < z1; z++) {
            unvisited.delete(`${x},${y},${z}`);
          }
        }
      }
    };

    const canExpandX = (x0, x1, y0, y1, z0, z1) => {
      const nx = x1;
      for (let y = y0; y < y1; y++) {
        for (let z = z0; z < z1; z++) {
          if (!has(nx, y, z)) return false;
        }
      }
      return true;
    };
    const canExpandY = (x0, x1, y0, y1, z0, z1) => {
      const ny = y1;
      for (let x = x0; x < x1; x++) {
        for (let z = z0; z < z1; z++) {
          if (!has(x, ny, z)) return false;
        }
      }
      return true;
    };
    const canExpandZ = (x0, x1, y0, y1, z0, z1) => {
      const nz = z1;
      for (let x = x0; x < x1; x++) {
        for (let y = y0; y < y1; y++) {
          if (!has(x, y, nz)) return false;
        }
      }
      return true;
    };

    const axisLengthsFromSeed = (x, y, z) => {
      let lx = 1;
      while (has(x + lx, y, z)) lx++;
      let ly = 1;
      while (has(x, y + ly, z)) ly++;
      let lz = 1;
      while (has(x, y, z + lz)) lz++;
      return { lx, ly, lz };
    };

    const expandInOrder = (x0, y0, z0, order) => {
      let x1 = x0 + 1;
      let y1 = y0 + 1;
      let z1 = z0 + 1;

      for (const ax of order) {
        if (ax === "x") {
          while (canExpandX(x0, x1, y0, y1, z0, z1)) x1++;
        } else if (ax === "y") {
          while (canExpandY(x0, x1, y0, y1, z0, z1)) y1++;
        } else {
          while (canExpandZ(x0, x1, y0, y1, z0, z1)) z1++;
        }
      }

      let changed = true;
      while (changed) {
        changed = false;
        if (canExpandX(x0, x1, y0, y1, z0, z1)) {
          x1++;
          changed = true;
        }
        if (canExpandY(x0, x1, y0, y1, z0, z1)) {
          y1++;
          changed = true;
        }
        if (canExpandZ(x0, x1, y0, y1, z0, z1)) {
          z1++;
          changed = true;
        }
      }

      return { x0, y0, z0, x1, y1, z1 };
    };

    const volume = (b) => (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0);

    for (const [x0, y0, z0] of coords) {
      const seedKey = `${x0},${y0},${z0}`;
      if (!unvisited.has(seedKey)) continue;

      const { lx, ly, lz } = axisLengthsFromSeed(x0, y0, z0);
      const axes = [
        { ax: "x", len: lx },
        { ax: "y", len: ly },
        { ax: "z", len: lz }
      ].sort((a, b) => b.len - a.len);

      const a = axes[0].ax;
      const b = axes[1].ax;
      const c = axes[2].ax;
      const candidates = [
        [a, b, c],
        [a, c, b],
        [b, a, c],
        [b, c, a],
        [c, a, b],
        [c, b, a]
      ];

      let best = null;
      for (const order of candidates) {
        const cand = expandInOrder(x0, y0, z0, order);
        if (!best || volume(cand) > volume(best)) best = cand;
      }

      boxes.push(best);
      clearBox(best.x0, best.y0, best.z0, best.x1, best.y1, best.z1);
    }

    return mergeAdjacentCuboids(boxes);
  }

  function buildOccupancy(blocks) {
    const set = new Set();
    if (!Array.isArray(blocks)) return set;
    for (const b of blocks) {
      if (!b || typeof b !== "object") continue;
      const pos = Array.isArray(b.pos) ? b.pos : [0, 0, 0];
      const x = Number(pos[0] ?? 0);
      const y = Number(pos[1] ?? 0);
      const z = Number(pos[2] ?? 0);
      set.add(`${x},${y},${z}`);
    }
    return set;
  }

  function isShellAt(occupancy, x, y, z) {
    if (!occupancy) return true;
    if (!occupancy.has(`${x + 1},${y},${z}`)) return true;
    if (!occupancy.has(`${x - 1},${y},${z}`)) return true;
    if (!occupancy.has(`${x},${y + 1},${z}`)) return true;
    if (!occupancy.has(`${x},${y - 1},${z}`)) return true;
    if (!occupancy.has(`${x},${y},${z + 1}`)) return true;
    if (!occupancy.has(`${x},${y},${z - 1}`)) return true;
    return false;
  }

  function isShellBlock(occupancy, block) {
    if (!occupancy) return true;
    const pos = Array.isArray(block && block.pos) ? block.pos : [0, 0, 0];
    const x = Number(pos[0] ?? 0);
    const y = Number(pos[1] ?? 0);
    const z = Number(pos[2] ?? 0);
    return isShellAt(occupancy, x, y, z);
  }

  function hideInternalFaces(cube, x, y, z, occupancy) {
    if (!occupancy || !cube || cube.type !== "cube" || !cube.faces) return;
    const faces = cube.faces;
    const blank = (k) => {
      const f = faces[k];
      if (!f) return;
      f.texture = null;
      f.uv = [0, 0, 0, 0];
      f.rotation = 0;
    };
    if (occupancy.has(`${x + 1},${y},${z}`)) blank("east");
    if (occupancy.has(`${x - 1},${y},${z}`)) blank("west");
    if (occupancy.has(`${x},${y + 1},${z}`)) blank("up");
    if (occupancy.has(`${x},${y - 1},${z}`)) blank("down");
    if (occupancy.has(`${x},${y},${z + 1}`)) blank("south");
    if (occupancy.has(`${x},${y},${z - 1}`)) blank("north");
  }

  function addCubes(data, label) {
    const root = new Group({ name: label || "Structural Tools Import" }).addTo("root").init();
    const groupsByKey = new Map();
    const usedGroupNames = new Map();
    const ensureGroup = (key) => {
      let g = groupsByKey.get(key);
      if (!g) {
        const baseName = formatGroupName(key, null);
        const nextIndex = (usedGroupNames.get(baseName) ?? 0) + 1;
        usedGroupNames.set(baseName, nextIndex);
        const finalName = nextIndex === 1 ? baseName : `${baseName} #${nextIndex}`;
        g = new Group({ name: finalName }).addTo(root).init();
        groupsByKey.set(key, g);
      }
      return g;
    };

    const occupancy = data && data.merge && data.preserve_shell ? buildOccupancy(data.blocks) : null;

    if (data.merge && (data.merge_mode === "force_max" || data.merge_mode === "force_max_pure" || data.merge_mode === "force_max_solid")) {
      const modeLabel = data.merge_mode === "force_max_pure" ? "PURE" : data.merge_mode === "force_max_solid" ? "SOLID" : "EXTREME";
      const group = ensureGroup(`FORCE_MERGED_${modeLabel}`);

      let result;
      if (data.merge_mode === "force_max_pure") result = forceMaxPure(data.blocks);
      else if (data.merge_mode === "force_max_solid") result = forceMaxSolidFill(data.blocks);
      else result = forceMaxExtreme(data.blocks);

      if (result.fallback && data.merge_mode === "force_max_solid") {
        Blockbench.showMessageBox({
          title: tr("importer_title"),
          message: `${tr("msg_force_solid_fallback")}\n${I18N.en.msg_force_solid_fallback}`
        });
        result = forceMaxPure(data.blocks);
      } else if (result.fallback && data.merge_mode === "force_max") {
        Blockbench.showMessageBox({
          title: tr("importer_title"),
          message: `${tr("msg_force_neighbor_fallback")}\n${I18N.en.msg_force_neighbor_fallback}`
        });
      }

      for (const b of result.boxes) {
        const from = [b.x0 * 16, b.y0 * 16, b.z0 * 16];
        const to = [b.x1 * 16, b.y1 * 16, b.z1 * 16];
        const name = `(${b.x0},${b.y0},${b.z0})..(${b.x1 - 1},${b.y1 - 1},${b.z1 - 1})`;
        setCubePerFaceUV(new Cube({ name, from, to }).addTo(group).init());
      }

      root.openUp();
      Canvas.updateAll();
      return root;
    }

    const blocksByKey = new Map();
    for (const block of data.blocks) {
      if (!block || typeof block !== "object") continue;
      const id = typeof block.id === "string" ? block.id : "minecraft:air";
      const key = typeof block.key === "string" && block.key.length ? block.key : toBlockKey(id, block.state);

      let arr = blocksByKey.get(key);
      if (!arr) {
        arr = [];
        blocksByKey.set(key, arr);
      }
      arr.push(block);
    }

    for (const [key, blocks] of blocksByKey.entries()) {
      const group = ensureGroup(key);
      if (group && group.name) {
        const displayName = formatGroupName(key, blocks[0]);
        if (displayName && displayName !== group.name) {
          const nextIndex = (usedGroupNames.get(displayName) ?? 0) + 1;
          usedGroupNames.set(displayName, nextIndex);
          group.name = nextIndex === 1 ? displayName : `${displayName} #${nextIndex}`;
        }
      }
      if (group) {
        group.structural_tools = {
          id: typeof blocks[0].id === "string" ? blocks[0].id : "minecraft:air",
          state: blocks[0].state && typeof blocks[0].state === "object" ? blocks[0].state : null,
          choice: typeof key === "string" && key.startsWith("choice:") ? key.slice("choice:".length).split("|") : null
        };
      }

      if (data.merge && blocks.length > 1) {
        if (data.merge_mode === "auto_3d") {
          const inner = occupancy && data.preserve_shell ? blocks.filter((b) => !isShellBlock(occupancy, b)) : blocks;
          const shell = occupancy && data.preserve_shell ? blocks.filter((b) => isShellBlock(occupancy, b)) : [];

          if (inner.length > 1) {
            const boxes = mergeBlocksAuto3D(inner);
            for (const b of boxes) {
              const from = [b.x0 * 16, b.y0 * 16, b.z0 * 16];
              const to = [b.x1 * 16, b.y1 * 16, b.z1 * 16];
              const name = `(${b.x0},${b.y0},${b.z0})..(${b.x1 - 1},${b.y1 - 1},${b.z1 - 1})`;
              setCubePerFaceUV(new Cube({ name, from, to }).addTo(group).init());
            }
          } else if (inner.length === 1) {
            const pos = Array.isArray(inner[0].pos) ? inner[0].pos : [0, 0, 0];
            const x = Number(pos[0] ?? 0);
            const y = Number(pos[1] ?? 0);
            const z = Number(pos[2] ?? 0);
            const from = [x * 16, y * 16, z * 16];
            const to = [(x + 1) * 16, (y + 1) * 16, (z + 1) * 16];
            setCubePerFaceUV(new Cube({ name: `(${x},${y},${z})`, from, to }).addTo(group).init());
          }

          if (shell.length) {
            for (const block of shell) {
              const pos = Array.isArray(block.pos) ? block.pos : [0, 0, 0];
              const x = Number(pos[0] ?? 0);
              const y = Number(pos[1] ?? 0);
              const z = Number(pos[2] ?? 0);
              const from = [x * 16, y * 16, z * 16];
              const to = [(x + 1) * 16, (y + 1) * 16, (z + 1) * 16];
              const cube = new Cube({ name: `(${x},${y},${z})`, from, to }).addTo(group).init();
              setCubePerFaceUV(cube);
              if (data.shell_visible_only) {
                hideInternalFaces(cube, x, y, z, occupancy);
              }
            }
          }
        } else {
          const inner = occupancy && data.preserve_shell ? blocks.filter((b) => !isShellBlock(occupancy, b)) : blocks;
          const shell = occupancy && data.preserve_shell ? blocks.filter((b) => isShellBlock(occupancy, b)) : [];

          if (inner.length > 1) {
            const boxes = mergeBlocks(inner, data.merge_axis);
            for (const box of boxes) {
              const parts = box.key.split(",").map((v) => Number(v));
              let x0, y0, z0, x1, y1, z1;
              if (box.axis === "x") {
                y0 = parts[0];
                z0 = parts[1];
                x0 = box.start;
                x1 = box.end + 1;
                y1 = y0 + 1;
                z1 = z0 + 1;
              } else if (box.axis === "y") {
                x0 = parts[0];
                z0 = parts[1];
                y0 = box.start;
                y1 = box.end + 1;
                x1 = x0 + 1;
                z1 = z0 + 1;
              } else {
                x0 = parts[0];
                y0 = parts[1];
                z0 = box.start;
                z1 = box.end + 1;
                x1 = x0 + 1;
                y1 = y0 + 1;
              }
              const from = [x0 * 16, y0 * 16, z0 * 16];
              const to = [x1 * 16, y1 * 16, z1 * 16];
              const name = box.axis === "x"
                ? `(${x0},${y0},${z0})..(${x1 - 1},${y0},${z0})`
                : box.axis === "y"
                  ? `(${x0},${y0},${z0})..(${x0},${y1 - 1},${z0})`
                  : `(${x0},${y0},${z0})..(${x0},${y0},${z1 - 1})`;
              setCubePerFaceUV(new Cube({ name, from, to }).addTo(group).init());
            }
          } else if (inner.length === 1) {
            const pos = Array.isArray(inner[0].pos) ? inner[0].pos : [0, 0, 0];
            const x = Number(pos[0] ?? 0);
            const y = Number(pos[1] ?? 0);
            const z = Number(pos[2] ?? 0);
            const from = [x * 16, y * 16, z * 16];
            const to = [(x + 1) * 16, (y + 1) * 16, (z + 1) * 16];
            setCubePerFaceUV(new Cube({ name: `(${x},${y},${z})`, from, to }).addTo(group).init());
          }

          if (shell.length) {
            for (const block of shell) {
              const pos = Array.isArray(block.pos) ? block.pos : [0, 0, 0];
              const x = Number(pos[0] ?? 0);
              const y = Number(pos[1] ?? 0);
              const z = Number(pos[2] ?? 0);
              const from = [x * 16, y * 16, z * 16];
              const to = [(x + 1) * 16, (y + 1) * 16, (z + 1) * 16];
              const cube = new Cube({ name: `(${x},${y},${z})`, from, to }).addTo(group).init();
              setCubePerFaceUV(cube);
              if (data.shell_visible_only) {
                hideInternalFaces(cube, x, y, z, occupancy);
              }
            }
          }
        }
      } else {
        for (const block of blocks) {
          const pos = Array.isArray(block.pos) ? block.pos : [0, 0, 0];
          const x = Number(pos[0] ?? 0);
          const y = Number(pos[1] ?? 0);
          const z = Number(pos[2] ?? 0);
          const from = [x * 16, y * 16, z * 16];
          const to = [(x + 1) * 16, (y + 1) * 16, (z + 1) * 16];
          setCubePerFaceUV(new Cube({ name: `(${x},${y},${z})`, from, to }).addTo(group).init());
        }
      }
    }

    root.openUp();
    Canvas.updateAll();
    return root;
  }

  function normalizeTextureFolder(folder) {
    if (!folder || typeof folder !== "string") return "";
    const trimmed = folder.trim();
    if (!trimmed) return "";
    if (!path) return trimmed;
    return trimmed.replace(/[\\/]+$/, "");
  }

  function parseBlockId(id) {
    if (!id || typeof id !== "string") return { ns: "minecraft", name: "air" };
    const parts = id.split(":");
    if (parts.length === 2) return { ns: parts[0] || "minecraft", name: parts[1] || "air" };
    return { ns: "minecraft", name: id };
  }

  function findTexturePath(folder, blockId) {
    if (!fs || !path) return null;
    const base = normalizeTextureFolder(folder);
    if (!base) return null;

    const { ns, name } = parseBlockId(blockId);
    const nameUnderscore = String(name).replace(/\//g, "_");

    const candidates = [
      path.join(base, ns, name + ".png"),
      path.join(base, ns, nameUnderscore + ".png"),
      path.join(base, ns + "_" + nameUnderscore + ".png"),
      path.join(base, nameUnderscore + ".png"),
      path.join(base, (name.split("/").pop() || nameUnderscore) + ".png")
    ];

    for (const p of candidates) {
      try {
        if (fs.existsSync(p)) return p;
      } catch (e) {}
    }
    return null;
  }

  function setCubePerFaceUV(cube, uvW, uvH) {
    if (!cube || cube.type !== "cube" || !cube.faces) return;
    const w = typeof uvW === "number" && isFinite(uvW) ? uvW : 16;
    const h = typeof uvH === "number" && isFinite(uvH) ? uvH : 16;
    const keys = Object.keys(cube.faces);
    for (const k of keys) {
      const face = cube.faces[k];
      if (!face) continue;
      face.uv = [0, 0, w, h];
      face.rotation = 0;
    }
  }

  function applyTextureToCube(cube, texture) {
    if (!cube || cube.type !== "cube" || !cube.faces || !texture) return;
    const uvW = typeof texture.uv_width === "number" ? texture.uv_width : (typeof texture.getUVWidth === "function" ? texture.getUVWidth() : 16);
    const uvH = typeof texture.uv_height === "number" ? texture.uv_height : (typeof texture.getUVHeight === "function" ? texture.getUVHeight() : 16);
    const keys = Object.keys(cube.faces);
    for (const k of keys) {
      const face = cube.faces[k];
      if (!face) continue;
      face.texture = texture.uuid;
    }
    setCubePerFaceUV(cube, uvW, uvH);
  }

  function applyTexturesFromFolder(rootGroup, folder) {
    const base = normalizeTextureFolder(folder);
    if (!base) return;
    if (!fs || !path) {
      Blockbench.showMessageBox({
        title: tr("importer_title"),
        message: `${tr("msg_desktop_only_textures")}\n${I18N.en.msg_desktop_only_textures}`
      });
      return;
    }

    const texturesById = new Map();

    const ensureTexture = (blockId) => {
      if (texturesById.has(blockId)) return texturesById.get(blockId);
      const p = findTexturePath(base, blockId);
      if (!p) {
        texturesById.set(blockId, null);
        return null;
      }
      const tex = new Texture({ name: blockId, path: p }).fromPath(p).add(false, true).load();
      texturesById.set(blockId, tex);
      return tex;
    };

    const groups = [];
    const walk = (g) => {
      if (!g) return;
      groups.push(g);
      const children = Array.isArray(g.children) ? g.children : [];
      for (const c of children) {
        if (c && c.type === "group") walk(c);
      }
    };
    walk(rootGroup);

    for (const group of groups) {
      const st = group.structural_tools;
      if (!st || typeof st !== "object") continue;
      const id = typeof st.id === "string" && st.id.length ? st.id : null;
      if (!id) continue;

      const tex = ensureTexture(id);
      if (!tex) continue;

      const children = Array.isArray(group.children) ? group.children : [];
      for (const el of children) {
        if (!el) continue;
        if (el.type === "cube") applyTextureToCube(el, tex);
      }
    }

    Canvas.updateAll();
  }

  function importFromText(text, label, settings) {
    const data = normalizeInput(text);
    data.merge = Boolean(settings && settings.merge);
    data.merge_mode = settings && typeof settings.mode === "string" ? settings.mode : "auto_3d";
    data.merge_axis = settings && typeof settings.axis === "string" ? settings.axis : "x";
    data.preserve_shell = Boolean(settings && settings.preserve_shell);
    data.shell_visible_only = Boolean(settings && settings.shell_visible_only);
    const projectName = typeof label === "string" && label.length ? label : "Structural Tools Import";

    if (Project) {
      Project.box_uv = false;
    }

    const root = addCubes(data, projectName);
    if (settings && settings.apply_textures) {
      applyTexturesFromFolder(root, settings.texture_folder);
    }
  }

  function showImportOptions(onConfirm) {
    const dialog = new Dialog({
      id: "structural_tools_importer_options",
      title: tr("importer_title"),
      form: {
        merge: {
          label: tr("merge"),
          type: "checkbox",
          value: true
        },
        mode: {
          label: tr("merge_mode"),
          type: "select",
          options: {
            auto_3d: tr("mode_auto_3d"),
            axis: tr("mode_axis"),
            force_max: tr("mode_force_max"),
            force_max_pure: tr("mode_force_max_pure"),
            force_max_solid: tr("mode_force_max_solid")
          },
          default: "auto_3d",
          condition: (formData) => formData.merge
        },
        axis: {
          label: tr("merge_axis"),
          type: "select",
          options: { x: "X", y: "Y", z: "Z" },
          default: "x",
          condition: (formData) => formData.merge && formData.mode === "axis"
        },
        preserve_shell: {
          label: tr("preserve_shell"),
          type: "checkbox",
          value: false,
          condition: (formData) => formData.merge && (formData.mode === "auto_3d" || formData.mode === "axis")
        },
        shell_visible_only: {
          label: tr("shell_visible_only"),
          type: "checkbox",
          value: false,
          condition: (formData) => formData.merge && (formData.mode === "auto_3d" || formData.mode === "axis") && !!formData.preserve_shell
        },
        apply_textures: {
          label: tr("apply_textures"),
          type: "checkbox",
          value: false
        },
        texture_folder: {
          label: tr("texture_folder"),
          type: "input",
          value: "",
          condition: (formData) => !!formData.apply_textures
        }
      },
      onConfirm: function (formData) {
        this.hide();
        if (formData && formData.mode === "axis") formData.mode = "axis";
        else if (formData && (formData.mode === "force_max" || formData.mode === "force_max_pure" || formData.mode === "force_max_solid")) formData.mode = formData.mode;
        else if (formData) formData.mode = "auto_3d";
        onConfirm(formData);
      },
      onCancel: function () {
        this.hide();
      }
    });
    dialog.show();
  }

  function cubeBoundsInBlocks(cube) {
    const from = Array.isArray(cube.from) ? cube.from : [0, 0, 0];
    const to = Array.isArray(cube.to) ? cube.to : [0, 0, 0];

    const x0p = Math.min(from[0] ?? 0, to[0] ?? 0);
    const y0p = Math.min(from[1] ?? 0, to[1] ?? 0);
    const z0p = Math.min(from[2] ?? 0, to[2] ?? 0);
    const x1p = Math.max(from[0] ?? 0, to[0] ?? 0);
    const y1p = Math.max(from[1] ?? 0, to[1] ?? 0);
    const z1p = Math.max(from[2] ?? 0, to[2] ?? 0);

    const eps = 1e-6;
    const x0 = Math.floor((x0p + eps) / 16);
    const y0 = Math.floor((y0p + eps) / 16);
    const z0 = Math.floor((z0p + eps) / 16);
    const x1 = Math.ceil((x1p - eps) / 16);
    const y1 = Math.ceil((y1p - eps) / 16);
    const z1 = Math.ceil((z1p - eps) / 16);

    return { x0, y0, z0, x1, y1, z1 };
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function getVanillaIdPool() {
    return [
      "minecraft:stone",
      "minecraft:cobblestone",
      "minecraft:andesite",
      "minecraft:diorite",
      "minecraft:granite",
      "minecraft:deepslate",
      "minecraft:tuff",
      "minecraft:calcite",
      "minecraft:sandstone",
      "minecraft:red_sandstone",
      "minecraft:bricks",
      "minecraft:stone_bricks",
      "minecraft:deepslate_bricks",
      "minecraft:polished_blackstone_bricks",
      "minecraft:terracotta",
      "minecraft:white_concrete",
      "minecraft:light_gray_concrete",
      "minecraft:gray_concrete",
      "minecraft:black_concrete",
      "minecraft:red_concrete",
      "minecraft:orange_concrete",
      "minecraft:yellow_concrete",
      "minecraft:lime_concrete",
      "minecraft:green_concrete",
      "minecraft:cyan_concrete",
      "minecraft:light_blue_concrete",
      "minecraft:blue_concrete",
      "minecraft:purple_concrete",
      "minecraft:magenta_concrete",
      "minecraft:pink_concrete",
      "minecraft:oak_planks",
      "minecraft:spruce_planks",
      "minecraft:birch_planks",
      "minecraft:jungle_planks",
      "minecraft:acacia_planks",
      "minecraft:dark_oak_planks",
      "minecraft:mangrove_planks",
      "minecraft:cherry_planks",
      "minecraft:bamboo_planks",
      "minecraft:glass",
      "minecraft:cyan_stained_glass",
      "minecraft:light_blue_stained_glass",
      "minecraft:purple_stained_glass"
    ];
  }

  function collectExportBlocks(resolveForGroup) {
    const groups = Array.isArray(Group.all) ? Group.all : [];
    const blocks = [];

    for (const group of groups) {
      if (!group) continue;
      const isForceMergedGroup = typeof group.name === "string" && group.name.startsWith("FORCE_MERGED");

      const st = group.structural_tools;
      const hasTypedInfo = st && typeof st === "object" && typeof st.id === "string" && st.id.length;
      if (!isForceMergedGroup) {
        if (!hasTypedInfo) continue;
        if (Array.isArray(st.choice) && st.choice.length > 1) continue;
      }

      const children = Array.isArray(group.children) ? group.children : [];
      for (const el of children) {
        if (!el || el.type !== "cube") continue;
        const resolved = typeof resolveForGroup === "function" ? resolveForGroup(group, hasTypedInfo ? st : null, el) : null;
        const id = resolved && typeof resolved.id === "string" && resolved.id.length
          ? resolved.id
          : hasTypedInfo
            ? st.id
            : "minecraft:stone";
        const state = resolved && resolved.state && typeof resolved.state === "object"
          ? resolved.state
          : hasTypedInfo && st.state && typeof st.state === "object"
            ? st.state
            : null;
        const b = cubeBoundsInBlocks(el);
        for (let x = b.x0; x < b.x1; x++) {
          for (let y = b.y0; y < b.y1; y++) {
            for (let z = b.z0; z < b.z1; z++) {
              blocks.push({
                x,
                y,
                z,
                id,
                state
              });
            }
          }
        }
      }
    }

    if (blocks.length === 0) {
      throw new Error(tr("err_no_blocks"));
    }

    const seen = new Set();
    const deduped = [];
    for (const b of blocks) {
      const k = `${b.x},${b.y},${b.z}`;
      if (seen.has(k)) continue;
      seen.add(k);
      deduped.push(b);
    }
    return deduped;
  }

  function boundsOfBlocks(blocks) {
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (const b of blocks) {
      minX = Math.min(minX, b.x);
      minY = Math.min(minY, b.y);
      minZ = Math.min(minZ, b.z);
      maxX = Math.max(maxX, b.x);
      maxY = Math.max(maxY, b.y);
      maxZ = Math.max(maxZ, b.z);
    }
    return { minX, minY, minZ, maxX, maxY, maxZ };
  }

  function hasForceMergedGroup() {
    const groups = Array.isArray(Group.all) ? Group.all : [];
    for (const g of groups) {
      if (g && typeof g.name === "string" && g.name.startsWith("FORCE_MERGED")) return true;
    }
    return false;
  }

  function buildRandomVanillaResolver(options) {
    const randomVanilla = !!(options && options.random_vanilla_by_group);
    if (!randomVanilla) return null;

    const pool = shuffleInPlace(getVanillaIdPool().slice());
    const assigned = new Map();
    let next = 0;
    return (group, _st, cube) => {
      const isForceMergedGroup = group && typeof group.name === "string" && group.name.startsWith("FORCE_MERGED");
      const key = isForceMergedGroup && cube && typeof cube.uuid === "string" && cube.uuid.length
        ? cube.uuid
        : group && typeof group.uuid === "string" && group.uuid.length
          ? group.uuid
          : group && typeof group.name === "string"
            ? group.name
            : String(group);
      let id = assigned.get(key);
      if (!id) {
        id = pool[next] || pool[Math.floor(Math.random() * pool.length)] || "minecraft:stone";
        assigned.set(key, id);
        next++;
      }
      return { id, state: null };
    };
  }

  function exportStructuralToolsJson(name, options) {
    const forceMerged = hasForceMergedGroup();
    const resolveForGroup = buildRandomVanillaResolver({
      random_vanilla_by_group: (options && options.random_vanilla_by_group) || forceMerged
    });

    const blocks = collectExportBlocks(resolveForGroup);
    const bb = boundsOfBlocks(blocks);
    const out = {
      version: 1,
      author: "Blockbench",
      size: [bb.maxX - bb.minX + 1, bb.maxY - bb.minY + 1, bb.maxZ - bb.minZ + 1],
      blocks: blocks.map((b) => {
        const entry = {
          pos: [b.x - bb.minX, b.y - bb.minY, b.z - bb.minZ],
          id: b.id
        };
        if (b.state && typeof b.state === "object" && Object.keys(b.state).length) {
          entry.state = b.state;
        }
        return entry;
      })
    };
    return {
      name: (name && name.length ? name : "export") + ".json",
      content: JSON.stringify(out, null, 2)
    };
  }

  function exportMmceJson(name, options) {
    const forceMerged = hasForceMergedGroup();
    const resolveForGroup = buildRandomVanillaResolver({
      random_vanilla_by_group: (options && options.random_vanilla_by_group) || forceMerged
    });
    const blocks = collectExportBlocks(resolveForGroup);
    const bb = boundsOfBlocks(blocks);
    const parts = blocks.map((b) => {
      let element = b.id + "@0";
      if (b.state && typeof b.state === "object" && b.state.meta != null) {
        element = `${b.id}@${b.state.meta}`;
      }
      return {
        x: b.x - bb.minX,
        y: b.y - bb.minY,
        z: b.z - bb.minZ,
        elements: [element]
      };
    });
    const out = {
      registryname: name && name.length ? name : "machine",
      localizedname: name && name.length ? name : "machine",
      "requires-blueprint": false,
      parts
    };
    return {
      name: (name && name.length ? name : "machine") + ".json",
      content: JSON.stringify(out, null, 2)
    };
  }

  function showExportOptions(onConfirm) {
    const dialog = new Dialog({
      id: "structural_tools_exporter_options",
      title: tr("exporter_title"),
      form: {
        format: {
          label: tr("format"),
          type: "select",
          options: { structural_tools: "Structural Tools", mmce: "MMCE" },
          default: "structural_tools"
        },
        random_vanilla_by_group: {
          label: tr("random_vanilla"),
          type: "checkbox",
          value: false
        },
        name: {
          label: tr("file_name"),
          type: "input",
          value: Project && typeof Project.name === "string" && Project.name.length ? Project.name : "export"
        }
      },
      onConfirm: function (formData) {
        this.hide();
        onConfirm(formData);
      },
      onCancel: function () {
        this.hide();
      }
    });
    dialog.show();
  }

  function scaleVecAround(v, pivot, factor) {
    const x = Number(v[0] ?? 0);
    const y = Number(v[1] ?? 0);
    const z = Number(v[2] ?? 0);
    return [
      pivot[0] + (x - pivot[0]) * factor,
      pivot[1] + (y - pivot[1]) * factor,
      pivot[2] + (z - pivot[2]) * factor
    ];
  }

  function computeModelBounds() {
    const cubes = Array.isArray(Cube.all) ? Cube.all : [];
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (const cube of cubes) {
      if (!cube || cube.type !== "cube") continue;
      const from = Array.isArray(cube.from) ? cube.from : [0, 0, 0];
      const to = Array.isArray(cube.to) ? cube.to : [0, 0, 0];
      const x0 = Math.min(Number(from[0] ?? 0), Number(to[0] ?? 0));
      const y0 = Math.min(Number(from[1] ?? 0), Number(to[1] ?? 0));
      const z0 = Math.min(Number(from[2] ?? 0), Number(to[2] ?? 0));
      const x1 = Math.max(Number(from[0] ?? 0), Number(to[0] ?? 0));
      const y1 = Math.max(Number(from[1] ?? 0), Number(to[1] ?? 0));
      const z1 = Math.max(Number(from[2] ?? 0), Number(to[2] ?? 0));
      minX = Math.min(minX, x0);
      minY = Math.min(minY, y0);
      minZ = Math.min(minZ, z0);
      maxX = Math.max(maxX, x1);
      maxY = Math.max(maxY, y1);
      maxZ = Math.max(maxZ, z1);
    }
    if (!isFinite(minX) || !isFinite(minY) || !isFinite(minZ) || !isFinite(maxX) || !isFinite(maxY) || !isFinite(maxZ)) {
      return null;
    }
    return { minX, minY, minZ, maxX, maxY, maxZ };
  }

  function scaleModelUniform(factor) {
    const f = Number(factor);
    if (!isFinite(f) || f <= 0) {
      Blockbench.showMessageBox({
        title: tr("scale_dialog_title"),
        message: tr("scale_err_invalid")
      });
      return;
    }

    const bounds = computeModelBounds();
    if (!bounds) {
      Blockbench.showMessageBox({
        title: tr("scale_dialog_title"),
        message: tr("err_no_blocks")
      });
      return;
    }

    const pivot = [(bounds.minX + bounds.maxX) / 2, (bounds.minY + bounds.maxY) / 2, (bounds.minZ + bounds.maxZ) / 2];
    const cubes = Array.isArray(Cube.all) ? Cube.all : [];
    const groups = Array.isArray(Group.all) ? Group.all : [];

    Undo.initEdit({ outliner: true, elements: cubes, selection: true });

    for (const g of groups) {
      if (!g || g.type !== "group" || !Array.isArray(g.origin)) continue;
      g.origin = scaleVecAround(g.origin, pivot, f);
    }

    for (const cube of cubes) {
      if (!cube || cube.type !== "cube") continue;
      if (Array.isArray(cube.from)) cube.from = scaleVecAround(cube.from, pivot, f);
      if (Array.isArray(cube.to)) cube.to = scaleVecAround(cube.to, pivot, f);
      if (Array.isArray(cube.origin)) cube.origin = scaleVecAround(cube.origin, pivot, f);
      if (typeof cube.inflate === "number" && isFinite(cube.inflate)) {
        cube.inflate = cube.inflate * f;
      } else if (Array.isArray(cube.inflate)) {
        cube.inflate = cube.inflate.map((v) => {
          const n = Number(v);
          return isFinite(n) ? n * f : v;
        });
      }
    }

    Undo.finishEdit(tr("scale_action_name"));
    Canvas.updateAll();
  }

  function showScaleDialog() {
    const dialog = new Dialog({
      id: "structural_tools_scale_model",
      title: tr("scale_dialog_title"),
      form: {
        factor: {
          label: tr("scale_factor"),
          type: "number",
          value: 1
        }
      },
      onConfirm: function (formData) {
        this.hide();
        scaleModelUniform(formData && formData.factor != null ? formData.factor : 1);
      },
      onCancel: function () {
        this.hide();
      }
    });
    dialog.show();
  }

  Plugin.register("structural_tools_importer", {
    title: tr("plugin_title"),
    author: "non_coffee",
    description: tr("plugin_desc"),
    icon: "fa-cubes",
    version: "0.1.0",
    min_version: "4.9.0",
    variant: "desktop",
    onload() {
      importAction = new Action("import_structural_tools_export", {
        name: tr("import_action_name"),
        description: tr("import_action_desc"),
        icon: "fa-file-import",
        click() {
          showImportOptions((settings) => {
            Blockbench.import(
              {
                extensions: ["json"],
                type: "Structural Tools Export",
                readtype: "text",
                multiple: false
              },
              (files) => {
                try {
                  if (!files || !files.length) return;
                  const file = files[0];
                  const content = typeof file.content === "string" ? file.content : "";
                  const name = typeof file.name === "string" ? file.name.replace(/\.json$/i, "") : "Structural Tools Import";
                  importFromText(content, name, settings);
                } catch (e) {
                  Blockbench.showMessageBox({
                    title: tr("importer_title"),
                    message: String(e && e.message ? e.message : e)
                  });
                }
              }
            );
          });
        }
      });
      MenuBar.addAction(importAction, "file.import");

      exportAction = new Action("export_structural_tools_export", {
        name: tr("export_action_name"),
        description: tr("export_action_desc"),
        icon: "fa-file-export",
        click() {
          showExportOptions((settings) => {
            try {
              const format = settings && settings.format === "mmce" ? "mmce" : "structural_tools";
              const name = settings && typeof settings.name === "string" ? settings.name.trim() : "export";
              const result = format === "mmce" ? exportMmceJson(name, settings) : exportStructuralToolsJson(name, settings);
              Blockbench.export({
                type: "Json Files",
                extensions: ["json"],
                name: result.name,
                savetype: "text",
                content: result.content
              });
            } catch (e) {
              Blockbench.showMessageBox({
                title: tr("exporter_title"),
                message: String(e && e.message ? e.message : e)
              });
            }
          });
        }
      });
      MenuBar.addAction(exportAction, "file.export");

      scaleAction = new Action("scale_structural_tools_model", {
        name: tr("scale_action_name"),
        description: tr("scale_action_desc"),
        icon: "fa-expand",
        click() {
          showScaleDialog();
        }
      });
      MenuBar.addAction(scaleAction, "tools");
    },
    onunload() {
      if (importAction) {
        importAction.delete();
        importAction = null;
      }
      if (exportAction) {
        exportAction.delete();
        exportAction = null;
      }
      if (scaleAction) {
        scaleAction.delete();
        scaleAction = null;
      }
    }
  });
})();
