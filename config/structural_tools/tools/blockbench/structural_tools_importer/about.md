## 版权与传播 / Copyright & Distribution

- 版权所有 © non_coffee。  
- 未经作者允许，禁止将本插件脚本与说明文件脱离 Structural Tools 模组进行二次传播（包括但不限于单独打包、转发、镜像下载链接等）。  
- 允许随 Structural Tools 模组整合包一同分发；允许个人使用与修改（不对外发布）。  

## 简介 / Overview

将 Structural Tools（Forge 模组）导出的结构 JSON 导入 Blockbench，生成可编辑的 cubes，并支持导出回结构 JSON / MMCE JSON。

Import structure JSON exported by the Structural Tools Forge mod into Blockbench as editable cubes, and export back to structure JSON / MMCE JSON.

## 安装（桌面版）/ Install (Desktop)

1. 打开 Blockbench → File → Plugins → Load Plugin from File  
   Open Blockbench → File → Plugins → Load Plugin from File
2. 选择 `tools/blockbench/structural_tools_importer/structural_tools_importer.js`  
   Select `tools/blockbench/structural_tools_importer/structural_tools_importer.js`

## 快速上手 / Quick Start

1. 游戏内导出 JSON：  
   - Structural Tools：`/structural_tools export <name>` → `config/structural_tools/<name>.json`  
   - MMCE：`/structural_tools export_mmce <name>` → `config/structural_tools/<name>_mmce.json`  
   Export in-game:
   - Structural Tools: `/structural_tools export <name>` → `config/structural_tools/<name>.json`
   - MMCE: `/structural_tools export_mmce <name>` → `config/structural_tools/<name>_mmce.json`
2. Blockbench 导入：File → Import → Import Structural Tools Export  
   Import in Blockbench: File → Import → Import Structural Tools Export
3. Blockbench 导出：File → Export → Export Structural Tools / MMCE JSON  
   Export in Blockbench: File → Export → Export Structural Tools / MMCE JSON

## 兼容格式 / Supported Formats

- Structural Tools 导出（推荐）/ Structural Tools export (recommended)  
  Root contains `blocks[]` with entries like `{ pos: [x,y,z], id: "minecraft:stone", state: {...} }`.
- Modular Machinery 机器结构 / Modular Machinery machinery structure (external examples)  
  Root contains `parts[]` with entries like `{ x, y, z, elements: ["modid:block@meta", ...] }`.  
  When `elements` has multiple entries, the importer treats it as a choice and uses the first entry for the cube while grouping under a `choice:` key.
- Blockbench 导出 / Blockbench export  
  导出支持 Structural Tools 与 MMCE 两种格式，会把长方体展开回 1×1×1 方块。  
  对 Force Max（忽略方块类型）生成的模型，导出会默认填充随机原版方块（用于可视化，无法还原真实方块类型）。  
  The exporter supports both Structural Tools and MMCE formats and expands cuboids back into 1×1×1 blocks.  
  For Force Max models (block types ignored), export fills random vanilla block IDs by default (visualization only; original block types cannot be recovered).

## 导入选项 / Import Options

- 合并连续方块 / Merge Contiguous Blocks  
  - Auto (3D)：三轴贪心合并，压缩更强 / 3D greedy merge, stronger compression  
  - Axis (1D)：沿单轴合并，更可控 / merge on one axis, more predictable
- 外壳保持 1×1（只合并内部）/ Preserve Shell (1×1)  
  外壳块满足：六邻接任意方向不存在结构方块。外壳保持 1×1，内部仍可合并。  
  Shell block: any of its 6-neighbors is missing in the structure. Shell stays 1×1 while inner blocks can be merged.
- 外壳仅保留可见面 / Shell Visible Faces Only  
  清空外壳块被内部遮挡的面，便于查看与编辑。  
  Clears faces occluded by neighboring blocks for easier viewing/editing.
- 从文件夹应用贴图 / Apply Textures From Folder（桌面版）  
  指定一个贴图目录，按方块 id 查找 `png` 并绑定到分组 cubes。  
  Provide a texture folder; the plugin loads `png` by block id and assigns them to group cubes.

## Force Max 模式说明 / Force Max Modes

Force Max 用于在 Blockbench 中“快速压缩 cube 数量”，会忽略方块类型（不保留真实方块 id/state），适合预览体积与大致形状。  
Force Max is meant to aggressively reduce cube count for editing/preview. It ignores block types (original id/state will not be preserved).

- Force Max (Extreme)：默认进行外壳提取（尽量移除内部方块，仅保留外观壳层），再做三轴 2D 贪心矩形合并 + 叠层。  
  Best for hollowing out interiors and minimizing cube count.
- Force Max (Pure)：不做外壳提取/不填充体素，仅对原始占用位置做三轴 2D 贪心矩形合并 + 叠层。  
  Preserves occupancy (no shell extraction / no fill), then merges.
- Force Max (Solid Fill)：尝试填充封闭空腔（让内部更“实心”）后再合并；若结构包围盒过大则回退为 Pure。  
  Tries to fill enclosed cavities before merging; falls back to Pure if bounds are too large.

## 导出选项 / Export Options

- Format：Structural Tools / MMCE
- 按分组随机原版方块 ID / Random Vanilla IDs (By Group)  
  用于可视化分组；Force Max 模型导出会自动启用。  
  Useful for visualizing groups; enabled automatically when exporting Force Max models.

## 工具 / Tools

- 等比缩放模型 / Scale Model (Uniform)  
  围绕模型中心等比缩放 from/to/origin，并同步缩放 inflate（膨胀）。  
  Uniformly scales from/to/origin around model center and also scales inflate.

## 说明 / Notes

- 默认使用逐面 UV（Per-Face UV），更适合方块贴图。  
  Uses Per-Face UV by default, suitable for block textures.
- 分组名称会做可读性简化：命名空间用全角冒号（：），方向属性简写为 d/u/n/s/e/w，布尔值简写为 T/F。  
  Group names are shortened for readability: namespaces use full-width colon (：), direction properties are abbreviated to d/u/n/s/e/w, booleans to T/F.
