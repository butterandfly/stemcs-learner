# STEM CodeQuest (极客多巴胺营地)

专为 iPad 横屏打造的 STEM / CS 闯关式学习 PWA 应用，设计风格融合**多巴胺极客配色**与**高确定性/结构化交互**，对小学生及阿斯伯格/神经多样性儿童高度友好。

---

## 🌟 核心特性

1. **PWA 离线支持 (Offline First)**
   - 基于 `vite-plugin-pwa` 与 Workbox，所有页面、代码、SVG 资源均已预缓存（Precached）。
   - 音频采用 **Web Audio API 纯代码实时物理合成**，完全脱机运行，零音频网络请求与延迟。
   - 学习进度（XP、连胜天数、生命能量、通关节点）持久化保存在本地 `localStorage`。

2. **iPad 横屏专属交互 (Light Mode)**
   - 锁定/优先考虑横屏体验（`orientation: landscape`）。
   - 清新明亮 Light Mode 风格（`#F8FAFC` 柔和底色搭配高饱和多巴胺点缀），护眼且符合视觉认知。
   - 3D 触觉质感按钮（Chunky dopamine buttons），按压下沉与微震音效反馈。

3. **双轨学习体验：平板导航 + 电脑动手实操**
   - 学生通过 iPad 闯关学习逻辑、预测代码、拼装蓝图，并按照指示在电脑 Scratch 3.0 独立完成项目。
   - **Scratch 官方双语积木渲染引擎**：支持帽子积木、堆叠积木、C 型循环/分支积木、平底 Cap 终结积木、白底数值气泡、深色下拉胶囊以及六边形布尔侦测插槽。

4. **DK 精选项目 · 第 1 单元：星星猎手 (Star Hunter)**
   - **关卡 1 · 鼠标操控小猫**：`when ⚑ clicked` → `forever` → `go to [mouse-pointer ▼]`
   - **关卡 2 · 设置背景与音效**：电脑设置 Underwater 2；`forever` → `play sound [Bubbles ▼] until done`
   - **关卡 3 · 章鱼巡逻怪**：`move (10) steps` → `if on edge, bounce` → `set rotation style [left-right ▼]`
   - **关卡 4 · 碰撞与游戏结束**：`if <touching [Cat ▼] ?> then` → `stop [all ▼]`

5. **命令行极客 · 第 1 单元：文件系统 (File System)**
   - **关卡 1 · 穿梭文件世界**：理解目录（Directory）房间概念，掌握 `pwd`、`ls`、`cd <dir>` 与 `cd ..`。
   - **关卡 2 · 打造与修改房间**：创建专属目录 `mkdir`、搬运与重命名文件 `mv`、拆除空房 `rmdir`。
   - **专属终端看板**：内置 macOS 风格交互式终端视窗与命令雷达速查表。

6. **极客多巴胺 + 友善无冗余**
   - 语言极其精简，去除非必要废话，单句直击规则与目标。
   - 内置**隐藏开发者工具**（连续轻触 5 次左上角 CQ 图标），支持一键清空进度、解锁关卡、直通指定 node。

---

## 🚀 启动与构建

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产环境打包
npm run build

# 本地预览 PWA 生产包
npm run preview
```
