---
name: cli-curriculum-design
description: >-
  Design, structure, and implement Command-Line / Terminal curriculum units,
  lesson nodes, terminal simulators, and mastery challenges for beginner geeks.
  Use whenever creating or modifying CLI/terminal learning content.
---

# 命令行教程设计规范 (CLI Curriculum Design)

本指南规范了在 STEM CS 学习平台中设计与开发「命令行极客 (Terminal Geek)」教学单元、关卡节点（Lesson Nodes）、终端模拟看板以及综合复习关卡的完整流程与教学标准。

---

## 1. 核心教学哲学与受众画像

- **消除黑屏恐惧感**：初学者面对黑底白字的终端容易产生“敲错指令会破坏电脑”的焦虑。教程必须建立**实体空间隐喻**与**高心理安全感**。
- **认知负载严格分阶 (Pacing & Scoping)**：
  - **精简指令语义**：每个阶段只教该指令当前最直观的用法。
  - *经典案例*：在第 1 单元文件系统中，`mv` 指令**严格限定为「给目录改名」**（`$ mv old_dir new_dir`），坚决不与「跨路径移动文件」混在一起讲，避免初学者同时理解源路径、目标路径与重命名的认知过载。
  - **安全第一**：初学者只教安全指令，删除只教 `rmdir`（只删空目录，绝不误伤文件），不教危险的 `rm -rf`。
- **极客多巴胺体验**：
  - 命令行交互设计为像特工执行机密任务一样的爽快感。
  - macOS 终端风格预览窗口（带红黄绿交通灯、当前工作目录高亮、脉冲光标）。

---

## 2. 核心实体隐喻体系 (Metaphor System)

所有终端指令必须建立具象、可感知的生活与物理隐喻：

| 实体/指令 | 极客物理隐喻 | 解释与口诀 |
| :--- | :--- | :--- |
| **Directory (目录)** | **房间 (Room)** | 计算机文件系统就是由无数相连的房间构成的神秘基地。 |
| **`pwd`** | **雷达定位当前房间** | *Print Working Directory*，看脚下正在哪个房间内部。 |
| **`ls`** | **观察房间地面物品** | *List*，看房间里摆放着哪些文件和子房间。 |
| **`cd <room>`** | **走进指定房间** | *Change Directory*，推门走进这个房间。 |
| **`cd ..`** | **退回上一级走廊** | **两个点 `..` 就是退回门外上一级走廊**的万能钥匙。 |
| **`mkdir <name>`** | **建造专属新房间** | *Make Directory*，平地建起一间属于自己的新房间。 |
| **`mv <old> <new>`** | **给房间重新改名** | *Move*，在门牌上撕下旧名字，贴上更酷的新名字。 |
| **`rmdir <name>`** | **拆除不用的空房间** | *Remove Directory*，安全拆除没有任何杂物的空房间。 |
| **Vim** | **特工信件编辑器** | **写信三步走**：按 `i` 动笔 → 按 `Esc` 盖上笔盖 → 敲 `:wq` 保存退出。 |
| **`cat <file>`** | **猫咪神眼一秒打印** | 不必进入编辑器，直接把文本一秒打印在终端屏幕上。 |

---

## 3. 常规终端关卡设计规范 (Regular CLI Node)

每个常规终端关卡包含 **右侧极客终端看板 (Terminal Desk)** 与 **5 步递进式闯关题**：

### 3.1 右侧终端看板配置 (`blueprint`)
```typescript
blueprint: {
  title: '终端实战会话',
  titleEn: 'Terminal Live Session',
  blocks: [],
  cliWindowPreview: {
    currentPath: '~/geek_base',
    terminalLines: [
      { type: 'comment', text: '在当前房间建造秘密实验室' },
      { type: 'input', text: 'mkdir secret_lab' },
      { type: 'comment', text: '给实验室换一个更酷的名字' },
      { type: 'input', text: 'mv secret_lab cool_lab' },
      { type: 'input', text: 'ls' },
      { type: 'output', text: 'cool_lab/' },
    ],
  },
  cliCommands: [
    {
      command: 'mkdir',
      usage: 'mkdir <目录名>',
      description: '创建新房间（目录）',
      example: 'mkdir my_room',
    },
    {
      command: 'mv',
      usage: 'mv <旧名字> <新名字>',
      description: '给房间（目录）改名字',
      example: 'mv old_room new_room',
    },
  ],
  tip: '打开电脑终端亲自敲一遍：先 mkdir 建房，再用 mv 改名，最后 ls 确认！',
}
```

### 3.2 5 步递进题型链
1. **第 1 题（隐喻与指令认知）**：理解指令全拼与物理隐喻（`select_one`，带 `$ command` 格式）。
2. **第 2 题（参数语法与规则）**：考察参数用法（例如重命名时旧名字在前、新名字在后）。
3. **第 3 题（终端输出预测）**：给出一段终端会话，预测屏幕将输出什么内容（`predict_output`）。
4. **第 4 题（指令流水线拼装）**：将几个终端动作按先后顺序拼装为完整工作流（`block_assemble`）。
5. **第 5 题（电脑终端动手实操）**：指导学生在原生终端中敲击验证，体验真实极客手感（`action_mission`）。

---

## 4. 终端综合复习关卡规范 (Mastery Review Node)

### 4.1 核心原则一：隐藏右侧看板 (Clean Focus Layout)
- 复习关卡不渲染 `cliWindowPreview` 和 `blocks`，触发全屏居中专注模式。
- 避免右侧展示现成指令字典，考验学生真正的肌肉记忆与心智模型。

### 4.2 核心原则二：两类核心题型设计
1. **关键知识点考察 (Conceptual Why)**：
   - 考点 1：相对路径穿梭（`cd ..` 返回上一层的两个点含义）。
   - 考点 2：改名模式机制（`mv` 的两段参数：源对象 -> 目标名称）。
   - 考点 3：Vim 模式切换手感（`i` 插入模式、`Esc` 命令模式、`:wq` 写入并退出）。
2. **在原生终端独立实现完整闭环 (Real Terminal Re-implementation)**：
   - 给出一个综合连贯的情境（如“打造特工秘密基地并编写特工日记”）。
   - 包含建房、改名、进驻、写文件、验证打印、安全拆除全套动作链。

---

## 5. 代码实装模版 (Code Template)

```typescript
{
  id: 'node-cli-review-1',
  title: '文件系统大通关',
  titleEn: 'Unit 1 File System Mastery Challenge',
  shortDesc: '综合复习：目录穿梭、创建与改名、Vim 写作及 cat 查看，在电脑上独立完成实操',
  icon: 'Award',
  xp: 60,
  blueprint: {
    title: '文件系统大通关',
    titleEn: 'File System Mastery Challenge',
    blocks: [],
    tip: '本关为综合实战复习，请回忆学过的指令，在电脑终端中独立完成任务！',
  },
  questions: [
    {
      id: 'q-rev-nav',
      type: 'select_one',
      prompt: '极客探险时，想确认「我现在在哪个目录」以及「返回上一层走廊」，分别用什么指令？',
      promptEn: 'Which commands check your current directory and step back to parent?',
      subtext: '提示：定位当前目录 + 两个点退回上一层',
      options: [
        { id: 'opt-1', text: '$ pwd 查看当前位置，$ cd .. 返回上一级', isCorrect: true },
        { id: 'opt-2', text: '$ ls 查看当前位置，$ exit 返回上一级', isCorrect: false },
      ],
      successMessage: '扎实！pwd 定位当前房间，cd .. 退回上一级走廊！',
    },
    {
      id: 'q-rev-mission',
      type: 'action_mission',
      prompt: '现在打开电脑终端，不看现成答案，独立完成第一单元终极大挑战！',
      promptEn: 'Open your computer terminal and complete the Unit 1 mastery challenge on your own!',
      subtext: '挑战：独立构建秘密基地，编写特工信件，验证并安全清理',
      successMessage: '🏆 恭喜通关第一单元！你已完全征服命令行文件系统全部核心技能，晋升真正的终端极客！',
      missionStep: {
        stepNumber: 4,
        title: '电脑终端独立实战任务：打造特工秘密基地',
        description: '1. 打开电脑终端，敲击 pwd 和 ls 查看当前环境\n2. 敲击 mkdir base 建造房间，并用 mv base my_lab 改名\n3. 敲击 cd my_lab 走进房间\n4. 敲击 vim secret.txt，按 i 输入文字，按 Esc，敲 :wq 保存退出\n5. 敲击 cat secret.txt 亲眼验证文本打印！\n6. 敲击 cd .. 退出房间，建 mkdir temp 并用 rmdir temp 拆除它！',
      },
    },
  ],
}
```
