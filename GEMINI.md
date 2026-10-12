# STEM CodeQuest 专属项目规则与系统提示 (Workspace Prompt)

本文件是本项目（`stem-cs-learner`）的常驻系统级提示词与行为准则。在本项目中与用户进行结对编程和教学内容开发时，必须无条件遵循以下规则：

---

## 1. 核心铁律 (Non-Negotiable Constraints)

1. **Git 推送纪律 (Git Push Rule)**：
   - ⚠️ **严禁擅自自动执行 `git push`**！
   - 所有改动必须通过本地编译测试（`npm run build`）并在本地完成 git commit。
   - **只有当用户在对话中明确发出指令（如「push」、「推送到github」）时，才允许执行 `git push`**。

2. **受众画像与语气规范 (Persona & Tone)**：
   - **目标受众**：7–12 岁小学生及阿斯伯格/神经多样性（Neurodiverse）儿童。
   - **极简多巴胺风格**：语言必须极其精简（1–2 句短句直击目标），**严禁任何居高临下的废话、泛滥的空洞表扬或企业级客套说辞**。
   - **高确定性与低挫败感**：Light Mode 护眼底色搭配高饱和度多巴胺配色；错误提示必须指向积木的运行逻辑心智模型。

3. **双轨教学法 (Dual-Track Learning)**：
   - **iPad/Web 平板端**：逻辑导航仪、概念辨析、沙盘组装。
   - **电脑端**：学生在自己的物理电脑上打开 Scratch 3.0 或系统终端，独立上机动手实现与全屏验证。

---

## 2. 课程体系设计规范 (Curriculum Standards)

在设计或修改具体课程节点时，根据模块类型自动关联并遵循对应 Skill：

### A. Scratch 教学模块（关联技能：`scratch-curriculum-design`）
- **官方双语严密对齐**：所有积木命名严格采用 Scratch 3.0 官方中英文（如 `when ⚑ clicked` / `当 绿旗 被点击`，`forever` / `重复执行`，`if on edge, bounce` / `碰到边缘就反弹`，`set rotation style [left-right ▼]` / `将旋转方式设为 [left-right ▼]`）。
- **常规关卡 (Normal Node)**：
  - 右侧提供代码蓝图工作台（`blueprint.blocks`）。
  - 5 步递进链：素材库认知 → 核心积木分类 → 行为预测 → 沙盘装配 → 电脑 Scratch 上机实操。
- **综合复习关卡 (Mastery Review Node)**：
  - ⚠️ **严禁泄露现成代码**：`blueprint.blocks` 设为空数组，触发系统自动隐藏右侧工作台，呈现居中单栏全屏专注布局。
  - **核心安排两种题型（交替递进）**：
    1. **关键知识点考察 (Conceptual Why)**：辨析运行本质（如单次执行 0.0001 秒必须用循环不断刷新位置；碰壁反弹为什么倒立及左右翻转原理；为什么条件碰撞必须放进循环实时扫描）。
    2. **重新在 Scratch 上实现核心功能 (Context Transfer How)**：**必须脱离原单元情境**，换用全新趣味角色与背景（如太空飞船、城堡幽灵等），指导学生在自己电脑上从空白项目独立复现核心逻辑并验证。

### B. 命令行极客模块（关联技能：`cli-curriculum-design`）
- **实体物理空间隐喻**：
  - 目录（Directory）= 房间（Room）
  - `pwd` = 雷达定位当前所在房间
  - `ls` = 观察房间地面物品
  - `cd <dir>` = 走进指定房间
  - `cd ..` = 两个点退出房间回上一级走廊
  - `mkdir` = 建造专属新房间
  - `mv <old> <new>` = 撕下旧门牌给房间改名字
  - `rmdir` = 安全拆除不需要的空房间
  - Vim = 特工写信三步走（按 `i` 动笔 → 按 `Esc` 盖笔盖 → 敲 `:wq` 保存退出）
  - `cat` = 猫咪神眼一秒打印
- **认知严格分阶**：
  - 第一单元中 `mv` **严格限定为「给目录改名」**，坚决不讲跨路径移动文件，避免认知超载。
  - 删除只讲安全的 `rmdir`，杜绝危险的 `rm -rf`。
- **常规关卡**：右侧展示 macOS 风格交互终端视窗与命令雷达速查。
- **复习关卡**：隐藏右侧看板，全屏单栏专注考核相对路径、改名机制与原生终端独立打造秘密基地。

---

## 3. 技术栈与工程规范 (Technical Conventions)

- **框架**：React 18 + TypeScript + Vite PWA + Tailwind CSS + Lucide React + Web Audio API 纯代码实时物理合成。
- **构建健康度**：每次功能交付前必须执行 `npm run build`，确保 0 TypeScript 错误与 0 警告打包通过。
- **响应式布局**：iPad 横屏优先（Landscape），居中内容区域 `max-w-2xl`，双栏分栏 `60% / 40%`。
