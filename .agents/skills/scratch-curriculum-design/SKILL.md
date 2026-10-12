---
name: scratch-curriculum-design
description: >-
  Design, structure, and implement Scratch 3.0 curriculum units, lesson nodes,
  interactive challenge questions, and review nodes for K-12 STEM learners.
  Use whenever creating or modifying Scratch learning content.
---

# Scratch 课程设计规范 (Scratch Curriculum Design)

本指南规范了在 STEM CS 学习平台中设计与开发 Scratch 3.0 教学单元、关卡节点（Lesson Nodes）、交互题目以及综合复习关卡的完整流程与教学标准。

---

## 1. 核心教学哲学与受众画像

- **目标受众**：7–12 岁小学生以及阿斯伯格/神经多样性（Neurodiverse）儿童。
- **高确定性与低挫败感**：
  - 界面采用清新明亮的 Light Mode，结合多巴胺色彩与高对比度。
  - **语言极致凝练**：去除无意义的客套废话和居高临下的说教，单句直击规则与目标（1–2 句短句）。
  - 错误反馈必须指向具体的积木心理模型（Mental Model），杜绝空泛指责。
- **双轨教学法 (Dual-Track Learning)**：
  - **平板端 (iPad/Web)**：作为「导航仪」与「逻辑沙盘」，负责概念剖析、输出预测与逻辑拼装。
  - **电脑端 (PC/Mac)**：学生在自己电脑上的 Scratch 3.0 官方软件中，独立动手搭建、全屏运行与测试。

---

## 2. Scratch 3.0 积木标准与视觉规范

### 2.1 双语官方对齐规范
所有积木文本必须严格对齐 Scratch 3.0 官方中文与英文：
- `when ⚑ clicked` / `当 绿旗 被点击`
- `forever` / `重复执行`
- `go to [mouse-pointer ▼]` / `移到 [鼠标指针 ▼]`
- `move (10) steps` / `移动 (10) 步`
- `if on edge, bounce` / `碰到边缘就反弹`
- `set rotation style [left-right ▼]` / `将旋转方式设为 [left-right ▼]`
- `if <> then` / `如果 <> 那么`
- `touching [Cat ▼] ?` / `碰到 [Cat ▼] ?`
- `stop [all ▼]` / `停止 [全部脚本 ▼]`

### 2.2 积木分类与色彩系统
- **事件 (Events)**：`#FFBF00`（明黄），起跑帽子积木。
- **控制 (Control)**：`#FFAB19`（琥珀橙），循环框、分支判断、平底停止。
- **运动 (Motion)**：`#4C97FF`（天蓝），移动、转向、反弹、旋转方式。
- **外观 (Looks)**：`#9966FF`（紫色），说话、切换造型、显示/隐藏。
- **声音 (Sound)**：`#D65CD6`（品红），播放音效、等待播完。
- **侦测 (Sensing)**：`#5CB1D6`（青蓝），碰触检测、鼠标坐标、按下按键。

### 2.3 积木形状分类 (`shape`)
- `'hat'`：起跑帽（如当绿旗被点击），顶部弧形凸起。
- `'stack'`：普通堆叠积木，上下凹凸榫卯。
- `'c-block'`：C 型包裹框（如 `forever`、`if then`），嘴巴内可嵌套子积木。
- `'cap'`：平底封口积木（如 `stop all`），底部平滑不可再拼接。
- `'reporter'`：椭圆数值/文字胶囊。
- `'boolean'`：六边形真假判断胶囊。

---

## 3. 常规教学关卡结构规范 (Regular Lesson Node)

每个单元常规关卡应包含 **右侧代码工作台 (Blueprint Desk)** 与 **5 步递进式闯关题**：

### 3.1 右侧工作台 (`blueprint`)
```typescript
blueprint: {
  title: '目标脚本：角色鼠标跟随',
  titleEn: 'Target Script: Follow Mouse Pointer',
  blocks: [
    {
      id: 'bp1-flag',
      category: 'events',
      label: '当 绿旗 被点击',
      labelEn: 'when ⚑ clicked',
      shape: 'hat',
    },
    {
      id: 'bp1-forever',
      category: 'control',
      label: '重复执行',
      labelEn: 'forever',
      shape: 'c-block',
      nestedBlocks: [
        {
          id: 'bp1-goto',
          category: 'motion',
          label: '移到 [鼠标指针 ▼]',
          labelEn: 'go to [mouse-pointer ▼]',
          shape: 'stack',
        },
      ],
    },
  ],
  tip: '提示：拼好积木后点击右上角绿旗，移动鼠标看看小猫是否紧跟指针！',
}
```

### 3.2 5 步递进题型链
1. **第 1 题（资源/舞台认知）**：考察角色库/背景库/音效库添加入口（`select_one`）。
2. **第 2 题（核心积木识别）**：从多个分类中识别当前所需积木及其分类归属（`select_one`）。
3. **第 3 题（行为预测/关键参数）**：预测积木执行效果或掌握核心参数配置（`select_one` 或 `predict_output`）。
4. **第 4 题（沙盘拼装）**：在交互式轨道上按顺序装配完整积木链（`block_assemble`）。
5. **第 5 题（电脑 Scratch 实操验证）**：给出编号步骤，指导学生在电脑 Scratch 上拼装并测试（`action_mission`）。

---

## 4. 单元综合复习关卡规范 (Mastery Review Node)

复习关卡与常规关卡有重大区别，必须严格执行以下设计规则：

### 4.1 核心原则一：隐藏右侧工作台 (No Blueprint Leak)
- 复习关卡的 `blueprint.blocks` 设为空数组 `[]`，系统会自动隐藏右侧工作台。
- 界面切换为**单栏居中专注模式**（`max-w-2xl`），防止右侧展示现成答案或繁琐清单造成认知分散。
- 错误提示自动切换为通用引导：*“仔细回想积木运行逻辑与控制流，再试一次！”*。

### 4.2 核心原则二：两类核心题型交替递进
复习关卡只安排两种题型，交替递进推进（通常 6 步）：
1. **关键知识点考察 (Conceptual Why · 概念本质)**：
   - 深入考察机制原理，而非死记硬背。
   - *例 1（循环本质）*：为什么持续跟随必须用 `forever`？单次执行需要 0.0001 秒，不加循环为什么只会动一下？
   - *例 2（旋转模式）*：碰壁反弹为什么会倒立（默认 360° 旋转）？为什么必须用 `set rotation style [left-right ▼]`？
   - *例 3（碰撞侦测）*：为什么 `if touching then` 必须嵌在循环内部？（循环如雷达持续扫描；若放外部，绿旗启动只查 1 毫秒即失效）。
2. **在 Scratch 上重新独立实现 (Context Transfer How · 情境迁移实操)**：
   - **严禁局限在原项目情境**：脱离原单元的主角与故事，切换为全新的趣味情境（如将深海小猫章鱼切换为太空飞船 `Rocketship` 与城堡幽灵 `Ghost`）。
   - 让学生在自己电脑上从空白项目开始，独立拼装出该核心功能，亲手验证。

---

## 5. 代码实装模版 (Code Template)

```typescript
{
  id: 'node-unit-review',
  title: '单元综合大挑战',
  titleEn: 'Unit Mastery Challenge',
  shortDesc: '综合考察核心编程原理，并在电脑 Scratch 上脱离答案独立实现核心机制',
  icon: 'Award',
  xp: 60,
  blueprint: {
    title: '综合挑战',
    titleEn: 'Mastery Challenge',
    blocks: [],
    tip: '本关为综合实战复习，请在电脑 Scratch 上独立完成实操！',
  },
  questions: [
    // 1. 考点一：概念辨析
    {
      id: 'q-rev-k1',
      type: 'select_one',
      prompt: '想让角色一直跟随鼠标指针，如果不加「重复执行」，会发生什么？',
      promptEn: 'What happens if "go to mouse-pointer" is NOT wrapped in a forever loop?',
      subtext: '思考：计算机执行单块积木的速度有多快？',
      options: [
        { id: 'opt-k1-1', text: '只在点击绿旗瞬间移动一次，之后鼠标怎么晃角色都不动了', isCorrect: true },
        { id: 'opt-k1-2', text: '角色会永远粘着鼠标到处飞', isCorrect: false },
      ],
      successMessage: '抓到本质！单次执行只需 0.0001 秒，必须用循环不断刷新位置！',
    },
    // 2. 实战一：独立实现跟随（新情境）
    {
      id: 'q-rev-m1',
      type: 'action_mission',
      prompt: '打开电脑 Scratch，为一艘太空飞船（Rocketship）在自己电脑上实现「鼠标领航」！',
      promptEn: 'Open Scratch on your computer and make Rocketship follow mouse pointer!',
      subtext: '全新情境：在太空项目中独立拼出跟随逻辑',
      successMessage: '太酷了！你已经能闭着眼睛独立写出丝滑的鼠标跟随核心逻辑了！',
      missionStep: {
        stepNumber: 1,
        title: '电脑实操任务：太空飞船领航员',
        description: '1. 新建 Scratch 项目，删除默认小猫\n2. 添加角色「Rocketship」\n3. 独立拼出：绿旗被点击 → 重复执行 → 移到鼠标指针\n4. 点击绿旗晃动鼠标测试！',
      },
    },
  ],
}
```
