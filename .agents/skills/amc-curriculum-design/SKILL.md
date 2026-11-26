---
name: amc-curriculum-design
description: >-
  Design, structure, and implement AMC / AoPS Prealgebra curriculum units,
  guided per-page lesson nodes, knowledge cards, and teaching checkpoints from
  Obsidian AMC notes. Use whenever creating or modifying AMC learning content.
---

# AMC / AoPS 数学思维课程设计规范 (AMC Curriculum Design)

本指南规范了在 BitPi (比特派) 中将 Obsidian 笔记（`/Users/butterandfly/MyNotes/AMC/`）同步与制作成 **AMC 逐页伴读关卡（Guided Node）** 的完整流程、数据结构与渲染约定。

---

## 1. 数据源与上游规范

- **笔记根目录**：`/Users/butterandfly/MyNotes/AMC/`
  - 总览索引：`Map of AMC.md`
  - 转换规范：`spec.md`
  - 课程笔记：`Prealgebra/aops-prealg-{节号}-intro.md` 与 `Prealgebra/aops-prealg-{节号}-p{题号}.md`
- **双区边界遵守**：
  - 上半区（原书提取区）：卡片 callout、`## Problem`、`## Solution` 严格忠实于原书英文表述，不擅自改写数学定义或定理。
  - 下半区（个人教学区 `## 教学安排`）：直接映射为页面内的 `checkpoints`（展示为 **Checkpoints** 可勾选清单）。

---

## 2. Node 组织与逐页伴读模式 (`mode: 'guided'`)

从第 2 单元（Chapter 2: Exponents）起，每个教材小节（Section，如 `2.1 Squares`、`2.2 Higher Exponents`）对应 **1 个独立的 `LearningNode`**，采用 `mode: 'guided'` 逐页伴读视图（[AmcGuidedView.tsx](file:///Users/butterandfly/Projects/stem-cs-learner/src/components/AmcGuidedView.tsx)）：

| 页面要素 | `type: 'concept'`（如 `Intro`） | `type: 'problem'`（如 `P2.10`） |
| :--- | :--- | :--- |
| **Problem 题面** | 不显示 | 显示原书英文 `## Problem`（支持内嵌几何示意图 `diagram`） |
| **Solution 解析** | 不显示 | 默认折叠，点击「查看参考解析 (Solution)」展开 |
| **解锁卡片 (`cards`)** | 直接展示供学习，确认过页时收入全局 Codex | 防剧透盲盒折叠，点击「思考完成？点击拆开本页知识卡」解锁并收入 Codex |
| **关联卡片 (`relatedCardIds`)** | 如有则展示 | 轻量折叠胶囊「关联知识卡 · 点击回顾」，点击可原地展开对应卡片 |
| **Checkpoints (`checkpoints`)** | 有 `## 教学安排` 时展示 | 有 `## 教学安排` 时展示；可选勾选，不阻塞「确认本页已学完 → 下一页」 |

> 注：第 1 单元（Chapter 1）保留原有 `problems` / `exercises` 双栏清单模式，向后兼容。

---

## 3. 卡片映射硬约束（4 种类型）

严格对应 `spec.md` 的 4 种卡片类型，禁止新增枚举：

| Obsidian `unlocks` 前缀 | BitPi `AmcCardType` | 视觉色系 |
| :--- | :--- | :--- |
| `Definition:` | `'definition'` | 天空蓝 (Sky) |
| `Fact:` | `'fact/property'` | 琥珀黄 (Amber) |
| `Strategy:` | `'strategy'` | 翡翠绿 (Emerald) |
| `Warning:` | `'warning'` | 玫瑰红 (Rose) |

- **卡片 ID 规范**：`c-{节号}-{序号}`（如 `c-2.2-1`、`c-2.2-2`）。
- **标题格式**：英文原名 + 简短中文副标，如 `'Product of Powers (Same Base) (同底数幂相乘)'`。
- **公式与正文**：
  - `formula`：提炼核心公式，使用单 `$` 包裹（`MathText` 会以 `displayMode: true` 居中渲染）。
  - `content`：保留笔记中的英文严谨表述；支持 `$...$` 行内公式、`$$...$$` 独立公式块（含 `\begin{aligned}`）、`\n` 换行及 `**bold**` / `*italic*`。
  - 在 TypeScript 字符串中务必正确双转义反斜杠（如 `\\cdot`、`\\div`、`\\frac`、`\\left`、`\\right`、`\\\\`）。
- **跨节关联**：若某题 `related_cards` 指向前面章节的卡片（如 `2.2` 引用 `2.1` 的 `Warning: Order of Operations`），直接填入对应已有 `card_id`（如 `'c-2.1-3'`），`AmcGuidedView` 会自动从 `ALL_AMC_CODEX_CARDS` 检索渲染。

---

## 4. 工程接入检查清单 (Implementation Checklist)

新增一个小节 Node 时，按顺序完成以下 4 步：

1. **定义 Section 数据**：在 `src/data/amcCurriculum.ts` 中新增 `export const AOPS_SECTION_X_Y: AmcSectionData = { ..., problem_list: [], exercise_list: [], pages: [...] }`。
2. **注册全局索引**：将 `AOPS_SECTION_X_Y` 加入 `AOPS_SECTIONS` 数组（自动同步至 `ALL_AMC_CODEX_CARDS` 与 `ALL_AMC_TASK_IDS`，确保 Codex 统计与 DevPanel 一键解锁同步）。
3. **挂载 Node 到 Unit**：在 `AMC_MODULE` 对应 `Unit.nodes` 中新增 `LearningNode`（`id: 'node-amc-{ch}-{sec}-{slug}'`，`amcData.mode: 'guided'`，`amcData.pages: AOPS_SECTION_X_Y.pages`）。
4. **构建与本地提交**：执行 `npm run build` 确保 0 TypeScript 错误，完成后仅做本地 `git commit`（严禁未经用户指令擅自 `git push`）。
