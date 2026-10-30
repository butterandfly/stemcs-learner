import { AmcSectionData, AmcKnowledgeCard, Module } from '../types';

export const AOPS_SECTION_1_2: AmcSectionData = {
  section_id: '1.2',
  title: 'Addition (加法)',
  problem_list: [
    {
      id: 'p-1.1',
      label: 'Problem 1.1',
      cards: [
        {
          card_id: 'c-1.2-1',
          type: 'definition',
          title: '变量 (Variables)',
          formula: '$a, b, c$',
          content:
            '用来代表数字的字母（如 $a$ 和 $b$）称为变量。在同一个等式或题目中，同一个字母代表相同的数值；但在不同的题目中，它可以代表不同的数。',
        },
        {
          card_id: 'c-1.2-2',
          type: 'fact/property',
          title: '加法交换律 (Commutative Property of Addition)',
          formula: '$a + b = b + a$',
          content:
            '两个数相加，交换加数的位置，和不变。对于任意数字 $a$ 和 $b$，恒有 $a + b = b + a$。',
        },
      ],
    },
    {
      id: 'p-1.2',
      label: 'Problem 1.2',
      cards: [
        {
          card_id: 'c-1.2-3',
          type: 'fact/property',
          title: '加法结合律 (Associative Property of Addition)',
          formula: '$(a + b) + c = a + (b + c)$',
          content: '三个数相加，先把前两个数相加，或者先把后两个数相加，和不变。',
        },
        {
          card_id: 'c-1.2-4',
          type: 'warning',
          title: '辨析：交换律 vs. 结合律',
          formula: 'Commutative vs. Associative',
          content:
            '不要混淆这两个名称！在交换律（Commutative）中，数字的位置发生了移动（commuted）；而在结合律（Associative）中，数字原地不动，只是括号分组（associated）改变了。',
        },
      ],
    },
    {
      id: 'p-1.3',
      label: 'Problem 1.3',
      cards: [
        {
          card_id: 'c-1.2-5',
          type: 'strategy',
          title: '任意顺序求和原则 (Any-Order Principle)',
          formula: 'Rearranging Sums',
          content:
            '交换律和结合律结合在一起，允许我们以任意顺序对一串数字求和。遇到复杂加法时，先移动并组合能凑成整十、整百的数字，能让计算变得极其轻松。',
        },
      ],
    },
    {
      id: 'p-1.4',
      label: 'Problem 1.4',
      cards: [],
    },
    {
      id: 'p-1.5',
      label: 'Problem 1.5',
      cards: [
        {
          card_id: 'c-1.2-6',
          type: 'strategy',
          title: '首尾配对求和法 (Pairing Numbers)',
          formula: '$(1+20) + (2+19) + \\dots + (10+11)$',
          content:
            '计算一长串有规律的连续数字之和时，不要从左到右硬算。尝试首尾两两配对，使每一对的和都相等，再乘以总对数即可。',
        },
      ],
    },
    {
      id: 'p-1.6',
      label: 'Problem 1.6',
      cards: [
        {
          card_id: 'c-1.2-7',
          type: 'fact/property',
          title: '加零性质 (Adding Zero)',
          formula: '$a + 0 = a$',
          content:
            '任何数加上 0 都等于它本身。对于任意数字 $a$，恒有 $a + 0 = a$。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.2.1',
      label: 'Exercise 1.2.1',
    },
    {
      id: 'ex-1.2.2',
      label: 'Exercise 1.2.2',
    },
    {
      id: 'ex-1.2.3',
      label: 'Exercise 1.2.3',
    },
    {
      id: 'ex-1.2.4',
      label: 'Exercise 1.2.4',
    },
  ],
};

export const AOPS_SECTION_1_3: AmcSectionData = {
  section_id: '1.3',
  title: 'Multiplication (乘法)',
  problem_list: [
    {
      id: 'p-1.7',
      label: 'Problem 1.7',
      cards: [
        {
          card_id: 'c-1.3-1',
          type: 'fact/property',
          title: '乘法交换律 (Commutative Property of Multiplication)',
          formula: '$ab = ba$',
          content: '两个数相乘，交换因数的位置，积不变。对于任意数字 $a$ 和 $b$，恒有 $ab = ba$。',
        },
      ],
    },
    {
      id: 'p-1.8',
      label: 'Problem 1.8',
      cards: [
        {
          card_id: 'c-1.3-2',
          type: 'fact/property',
          title: '乘法结合律 (Associative Property of Multiplication)',
          formula: '$(ab)c = a(bc)$',
          content: '三个数相乘，先把前两个数相乘，或者先把后两个数相乘，积不变。对于任意数字 $a, b, c$，恒有 $(ab)c = a(bc)$。',
        },
      ],
    },
    {
      id: 'p-1.9',
      label: 'Problem 1.9',
      cards: [
        {
          card_id: 'c-1.3-3',
          type: 'strategy',
          title: '重新排列乘积 (Reordering Products)',
          formula: 'Rearranging Products',
          content: '结合乘法交换律与结合律，可以按任意顺序对一串因子求积。遇到复杂乘法时，优先组合能凑成整十、整百、整千的因子对（如 $25 \\times 4 = 100$、$125 \\times 8 = 1000$），能极大简化计算。',
        },
      ],
    },
    {
      id: 'p-1.10',
      label: 'Problem 1.10',
      cards: [
        {
          card_id: 'c-1.3-4',
          type: 'fact/property',
          title: '乘 1 性质 (Multiplying by 1)',
          formula: '$1a = a$',
          content: '任何数乘以 1 都等于它本身。对于任意数字 $a$，恒有 $1a = a$。',
        },
      ],
    },
    {
      id: 'p-1.11',
      label: 'Problem 1.11',
      cards: [
        {
          card_id: 'c-1.3-5',
          type: 'definition',
          title: '运算顺序 (Order of Operations)',
          formula: 'Order of Operations',
          content: '含有多种运算时，优先计算括号内部的表达式；无括号时，先算乘除法，后算加减法。',
        },
      ],
    },
    {
      id: 'p-1.12',
      label: 'Problem 1.12',
      cards: [
        {
          card_id: 'c-1.3-6',
          type: 'fact/property',
          title: '乘法分配律 (Distributive Property)',
          formula: '$a(b + c) = ab + ac$',
          content: '一个数同两个数的和相乘，等于把这个数分别同这两个加数相乘，再把积相加。对任意数 $a, b, c$，恒有 $a(b + c) = ab + ac$ 及 $(b + c)a = ba + ca$。',
        },
      ],
    },
    {
      id: 'p-1.13',
      label: 'Problem 1.13',
      cards: [
        {
          card_id: 'c-1.3-7',
          type: 'strategy',
          title: '提取公因式 / 因式分解 (Factoring)',
          formula: '$ab + ac = a(b + c)$',
          content: '逆向运用乘法分配律，将多个含有公共因子 $a$ 的乘积之和改写为 $a(b + c)$ 的形式，可以大幅简化计算过程。',
        },
      ],
    },
    {
      id: 'p-1.14',
      label: 'Problem 1.14',
      cards: [
        {
          card_id: 'c-1.3-8',
          type: 'definition',
          title: '重复加法 (Repeated Addition)',
          formula: '$n \\cdot a = a + a + \\dots + a$',
          content: '正整数乘以一个数在概念上等价于重复加法，即 $n$ 个相同的数相加。',
        },
      ],
    },
    {
      id: 'p-1.15',
      label: 'Problem 1.15',
      cards: [
        {
          card_id: 'c-1.3-9',
          type: 'fact/property',
          title: '乘 0 性质 (Multiplying by Zero)',
          formula: '$0a = 0$',
          content: '任何数与 0 相乘，结果均为 0。对于任意数字 $a$，恒有 $0a = 0$。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.3.1',
      label: 'Exercise 1.3.1',
    },
    {
      id: 'ex-1.3.2',
      label: 'Exercise 1.3.2',
    },
    {
      id: 'ex-1.3.3',
      label: 'Exercise 1.3.3',
    },
    {
      id: 'ex-1.3.4',
      label: 'Exercise 1.3.4',
    },
    {
      id: 'ex-1.3.5',
      label: 'Exercise 1.3.5',
    },
    {
      id: 'ex-1.3.6',
      label: 'Exercise 1.3.6',
    },
    {
      id: 'ex-1.3.7',
      label: 'Exercise 1.3.7',
    },
    {
      id: 'ex-1.3.8',
      label: 'Exercise 1.3.8',
    },
    {
      id: 'ex-1.3.9',
      label: 'Exercise 1.3.9',
    },
  ],
};

export const AOPS_SECTIONS: AmcSectionData[] = [AOPS_SECTION_1_2, AOPS_SECTION_1_3];

export interface CodexCardEntry {
  card: AmcKnowledgeCard;
  sectionId: string;
  sectionTitle: string;
  problemId: string;
  problemLabel: string;
}

export const ALL_AMC_CODEX_CARDS: CodexCardEntry[] = AOPS_SECTIONS.flatMap((section) =>
  section.problem_list.flatMap((problem) =>
    problem.cards.map((card) => ({
      card,
      sectionId: section.section_id,
      sectionTitle: section.title,
      problemId: problem.id,
      problemLabel: problem.label,
    }))
  )
);

export const ALL_AMC_TASK_IDS: string[] = AOPS_SECTIONS.flatMap((section) => [
  ...section.problem_list.map((p) => p.id),
  ...section.exercise_list.map((e) => e.id),
]);

export const AMC_MODULE: Module = {
  id: 'amc',
  name: 'AMC 数学思维',
  tagline: 'AoPS Prealgebra · 伴读图鉴',
  icon: 'Calculator',
  color: '#6366F1',
  isLocked: false,
  sections: [
    {
      id: 'sec-aops-ch1',
      title: 'Chapter 1: Properties of Arithmetic (算术的性质)',
      description: '配合《AoPS Prealgebra》第 1 章实体教材，探索算术基本定律与巧算思维',
      units: [
        {
          id: 'unit-amc-ch1',
          unitNumber: 1,
          title: '第 1 单元：算术的性质',
          titleEn: 'Chapter 1: Properties of Arithmetic',
          badge: 'AoPS 伴读',
          summary: '翻开实体书独立完成 Problem 探索题与 Exercise 巩固练习，打卡收集核心数学图鉴卡片！',
          nodes: [
            {
              id: 'node-amc-1-2-problems',
              title: '1.2 Problems',
              titleEn: 'Section 1.2 Addition · Problems',
              shortDesc: '完成 1.2 节 6 道探索题打卡，拆开 7 张加法核心定律与巧算盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.2 Addition · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.2 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_2.section_id,
                section_title: AOPS_SECTION_1_2.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_2.problem_list,
              },
            },
            {
              id: 'node-amc-1-2-exercises',
              title: '1.2 Exercises',
              titleEn: 'Section 1.2 Addition · Exercises',
              shortDesc: '完成 1.2 节末尾 4 道巩固练习打卡，运用交换律、结合律与配对法实战通关',
              icon: 'Award',
              xp: 40,
              blueprint: {
                title: 'Section 1.2 Addition · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.2 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.2 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_2.section_id,
                section_title: AOPS_SECTION_1_2.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_2.exercise_list,
                problem_list: AOPS_SECTION_1_2.problem_list,
              },
            },
            {
              id: 'node-amc-1-3-problems',
              title: '1.3 Problems',
              titleEn: 'Section 1.3 Multiplication · Problems',
              shortDesc: '完成 1.3 节 9 道探索题打卡，拆开 9 张乘法定律、分配律与公因式盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.3 Multiplication · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.3 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_3.section_id,
                section_title: AOPS_SECTION_1_3.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_3.problem_list,
              },
            },
            {
              id: 'node-amc-1-3-exercises',
              title: '1.3 Exercises',
              titleEn: 'Section 1.3 Multiplication · Exercises',
              shortDesc: '完成 1.3 节末尾 9 道巩固练习打卡，实战运用乘法结合律、分配律与公因式巧算',
              icon: 'Award',
              xp: 40,
              blueprint: {
                title: 'Section 1.3 Multiplication · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.3 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.3 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_3.section_id,
                section_title: AOPS_SECTION_1_3.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_3.exercise_list,
                problem_list: AOPS_SECTION_1_3.problem_list,
              },
            },
          ],
        },
      ],
    },
  ],
};
