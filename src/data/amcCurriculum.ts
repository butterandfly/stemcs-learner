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
          formula: '$\\text{Commutative} \\quad \\text{vs.} \\quad \\text{Associative}$',
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
          formula: '$\\text{Rearranging Sums: } a + b + c = b + a + c$',
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
          formula: '$\\text{Rearranging Products: } abc = bac$',
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
          formula: '$\\text{Parentheses} \\to \\times, \\div \\to +, -$',
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

export const AOPS_SECTION_1_4: AmcSectionData = {
  section_id: '1.4',
  title: 'Negation (取相反数)',
  problem_list: [
    {
      id: 'p-1.16',
      label: 'Problem 1.16',
      cards: [
        {
          card_id: 'c-1.4-1',
          type: 'definition',
          title: '相反数 / 否定 (Negation / Additive Inverse)',
          formula: '$-x + x = 0$',
          content: '对于任意数字 $x$，其相反数（或否定，记作 $-x$）是指与 $x$ 相加等于 $0$ 的数，即满足 $-x + x = 0$。在英文中也常被称为 opposite 或 additive inverse。',
        },
        {
          card_id: 'c-1.4-2',
          type: 'fact/property',
          title: '零的相反数 (Negation of Zero)',
          formula: '$-0 = 0$',
          content: '0 的相反数仍然是 0 本身。即 $-0 = 0$。',
        },
        {
          card_id: 'c-1.4-3',
          type: 'fact/property',
          title: '双重否定 / 取相反数的相反数 (Negation of Negation)',
          formula: '$-(-x) = x$',
          content: '一个数的相反数的相反数等于该数本身。对任意数字 $x$，恒有 $-(-x) = x$。',
        },
        {
          card_id: 'c-1.4-4',
          type: 'warning',
          title: '符号辨析：$-x$ 不一定是负数 (Notation Warning)',
          formula: '$-x \\text{ is not always negative}$',
          content: '不要以为带有负号的 $-x$ 就一定是负数！当 $x$ 本身是负数时（如 $x = -1$），$-x = -(-1) = 1$ 是正数。负数的相反数永远是正数。',
        },
      ],
    },
    {
      id: 'p-1.17',
      label: 'Problem 1.17',
      cards: [
        {
          card_id: 'c-1.4-5',
          type: 'fact/property',
          title: '乘以 -1 的性质 (Multiplying by -1)',
          formula: '$(-1)x = -x$',
          content: '任何数乘以 -1 等价于对该数取相反数。对于任意数字 $x$，恒有 $(-1)x = -x$。',
        },
      ],
    },
    {
      id: 'p-1.18',
      label: 'Problem 1.18',
      cards: [
        {
          card_id: 'c-1.4-6',
          type: 'fact/property',
          title: '否定与乘法 / 异号相乘 (Multiplying by Negation)',
          formula: '$(-x)y = -(xy) \\text{ 且 } x(-y) = -(xy)$',
          content: '一个数与另一个数的相反数相乘，等于它们乘积的相反数。正数与负数相乘，结果为负数（“正负得负” / “负正得负”）。',
        },
      ],
    },
    {
      id: 'p-1.19',
      label: 'Problem 1.19',
      cards: [
        {
          card_id: 'c-1.4-7',
          type: 'fact/property',
          title: '负负得正 (Negation times Negation)',
          formula: '$(-x)(-y) = xy$',
          content: '两个负数相乘（或两个相反数相乘），结果等于对应正数之积。即“负负得正”。对于任意数字 $x, y$，恒有 $(-x)(-y) = xy$。',
        },
      ],
    },
    {
      id: 'p-1.20',
      label: 'Problem 1.20',
      cards: [
        {
          card_id: 'c-1.4-8',
          type: 'fact/property',
          title: '和的相反数 / 相反数的分配律 (Negation of a Sum)',
          formula: '$-(x + y) = (-x) + (-y)$',
          content: '两个数之和的相反数，等于这两个数各自相反数之和。取相反数运算对加法满足分配律，例如 $-(x + y + z) = (-x) + (-y) + (-z)$。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.4.1',
      label: 'Exercise 1.4.1',
    },
    {
      id: 'ex-1.4.2',
      label: 'Exercise 1.4.2',
    },
    {
      id: 'ex-1.4.3',
      label: 'Exercise 1.4.3',
    },
    {
      id: 'ex-1.4.4',
      label: 'Exercise 1.4.4',
    },
    {
      id: 'ex-1.4.5',
      label: 'Exercise 1.4.5',
    },
  ],
};

export const AOPS_SECTION_1_5: AmcSectionData = {
  section_id: '1.5',
  title: 'Subtraction (减法)',
  problem_list: [
    {
      id: 'p-1.21',
      label: 'Problem 1.21',
      cards: [
        {
          card_id: 'c-1.5-1',
          type: 'definition',
          title: '减法的定义 (Definition of Subtraction)',
          formula: '$a - b = a + (-b)$',
          content: '减去一个数等于加上这个数的相反数。对于任意数字 $a$ 和 $b$，减法定义为 $a - b = a + (-b)$。',
        },
        {
          card_id: 'c-1.5-2',
          type: 'fact/property',
          title: '与 0 相关的减法性质 (Subtraction with Zero)',
          formula: '$0 - a = -a, \\quad a - a = 0, \\quad a - 0 = a$',
          content: '由减法定义可导出：从 0 减去一个数等于该数的相反数（$0 - a = -a$）；任何数减去它本身等于 0（$a - a = 0$）；任何数减去 0 仍等于它本身（$a - 0 = a$）。',
        },
      ],
    },
    {
      id: 'p-1.22',
      label: 'Problem 1.22',
      cards: [
        {
          card_id: 'c-1.5-3',
          type: 'fact/property',
          title: '减去相反数 / 减去负数 (Subtraction of Negation)',
          formula: '$a - (-b) = a + b$',
          content: '减去一个数的相反数，等于加上这个数本身（“减负得正”）。对于任意数字 $a, b$，恒有 $a - (-b) = a + b$。',
        },
        {
          card_id: 'c-1.5-4',
          type: 'fact/property',
          title: '从相反数中减去 (Subtraction from Negation)',
          formula: '$-a - b = -(a + b)$',
          content: '从一个负数（或相反数）中减去一个数，等于减去它们的和。即 $-a - b = -(a + b)$。',
        },
        {
          card_id: 'c-1.5-5',
          type: 'fact/property',
          title: '差的相反数 (Negation of Subtraction)',
          formula: '$-(a - b) = b - a$',
          content: '对差取相反数，等于交换被减数与减数的位置。对于任意数字 $a, b$，恒有 $-(a - b) = b - a$。',
        },
      ],
    },
    {
      id: 'p-1.23',
      label: 'Problem 1.23',
      cards: [
        {
          card_id: 'c-1.5-6',
          type: 'warning',
          title: '避坑指南：减法不满足交换律与结合律 (Non-commutative & Non-associative)',
          formula: '$a - b \\neq b - a, \\quad (a - b) - c \\neq a - (b - c)$',
          content: '减法既不满足交换律，也不满足结合律！例如 $5 - 3 \\neq 3 - 5$，且 $(8 - 3) - 2 \\neq 8 - (3 - 2)$。在涉及减法的运算中，绝不能随意颠倒顺序或重新分组加括号。',
        },
      ],
    },
    {
      id: 'p-1.24',
      label: 'Problem 1.24',
      cards: [],
    },
    {
      id: 'p-1.25',
      label: 'Problem 1.25',
      cards: [
        {
          card_id: 'c-1.5-7',
          type: 'strategy',
          title: '减法转化为加法策略 (Subtraction-to-Addition Strategy)',
          formula: '$a - b + c - d = a + (-b) + c + (-d)$',
          content: '遇到复杂的连续加减法算式，先将所有减法转化为“加上相反数”（$a - b = a + (-b)$）。转化为纯加法后，即可自由重组并移动项（如寻找抵消对或凑整对），算完后再转回减法形式。',
        },
      ],
    },
    {
      id: 'p-1.26',
      label: 'Problem 1.26',
      cards: [],
    },
    {
      id: 'p-1.27',
      label: 'Problem 1.27',
      cards: [
        {
          card_id: 'c-1.5-8',
          type: 'fact/property',
          title: '乘法对减法的分配律 (Distributive Property over Subtraction)',
          formula: '$a(b - c) = ab - ac \\text{ 且 } (b - c)a = ba - ca$',
          content: '乘法对减法同样满足分配律。一个数乘以两数之差，等于这个数分别乘以被减数和减数后再相减。',
        },
      ],
    },
    {
      id: 'p-1.28',
      label: 'Problem 1.28',
      cards: [
        {
          card_id: 'c-1.5-9',
          type: 'strategy',
          title: '基准数拆分巧算 (Using $1000 - 1$ Trick)',
          formula: '$999 \\times x = (1000 - 1)x = 1000x - x$',
          content: '遇到接近整百、整千的数字乘法（如 999、99 等）时，将其拆写为 $(1000 - 1)$ 或 $(100 - 1)$ 的形式，再利用乘法对减法的分配律展开，可大幅简化速算。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.5.1',
      label: 'Exercise 1.5.1',
    },
    {
      id: 'ex-1.5.2',
      label: 'Exercise 1.5.2',
    },
    {
      id: 'ex-1.5.3',
      label: 'Exercise 1.5.3',
    },
    {
      id: 'ex-1.5.4',
      label: 'Exercise 1.5.4',
    },
    {
      id: 'ex-1.5.5',
      label: 'Exercise 1.5.5',
    },
    {
      id: 'ex-1.5.6',
      label: 'Exercise 1.5.6',
    },
    {
      id: 'ex-1.5.7',
      label: 'Exercise 1.5.7',
    },
    {
      id: 'ex-1.5.8',
      label: 'Exercise 1.5.8',
    },
    {
      id: 'ex-1.5.9',
      label: 'Exercise 1.5.9',
    },
    {
      id: 'ex-1.5.10',
      label: 'Exercise 1.5.10',
    },
    {
      id: 'ex-1.5.11',
      label: 'Exercise 1.5.11*',
    },
  ],
};

export const AOPS_SECTION_1_6: AmcSectionData = {
  section_id: '1.6',
  title: 'Reciprocals (倒数)',
  problem_list: [
    {
      id: 'p-1.29',
      label: 'Problem 1.29',
      cards: [
        {
          card_id: 'c-1.6-1',
          type: 'definition',
          title: '倒数 / 乘法逆元 (Reciprocal / Multiplicative Inverse)',
          formula: '$\\frac{1}{a} \\cdot a = 1 \\quad (a \\neq 0)$',
          content: '对于任意非零数字 $a$，其倒数（记作 $\\frac{1}{a}$）是指与 $a$ 相乘等于 $1$ 的数，满足 $\\frac{1}{a} \\cdot a = 1$。倒数也称为乘法逆元（multiplicative inverse），读作 “1 over $a$”。',
        },
        {
          card_id: 'c-1.6-2',
          type: 'warning',
          title: '零没有倒数 / 零不能作分母 (Zero Has No Reciprocal)',
          formula: '$\\frac{1}{0} \\text{ is undefined}$',
          content: '0 与任何数相乘都等于 0，不可能得到 1。因此，0 是唯一没有倒数的数，表达式 $\\frac{1}{0}$ 无意义。',
        },
      ],
    },
    {
      id: 'p-1.30',
      label: 'Problem 1.30',
      cards: [
        {
          card_id: 'c-1.6-3',
          type: 'fact/property',
          title: '1 的倒数 (Reciprocal of 1)',
          formula: '$\\frac{1}{1} = 1$',
          content: '1 的倒数仍然是 1 本身。',
        },
        {
          card_id: 'c-1.6-4',
          type: 'strategy',
          title: '倒数检验策略 (Reciprocal Strategy)',
          formula: '$x \\cdot y = 1 \\implies y = \\frac{1}{x}$',
          content: '要证明或检验两个数是否互为倒数，只需将它们相乘，检查其乘积是否等于 1。',
        },
      ],
    },
    {
      id: 'p-1.31',
      label: 'Problem 1.31',
      cards: [
        {
          card_id: 'c-1.6-5',
          type: 'fact/property',
          title: '倒数的倒数 (Reciprocal of Reciprocal)',
          formula: '$\\frac{1}{1/a} = a \\quad (a \\neq 0)$',
          content: '一个非零数的倒数的倒数等于该数本身。对于任意非零数字 $a$，恒有 $\\frac{1}{1/a} = a$。',
        },
      ],
    },
    {
      id: 'p-1.32',
      label: 'Problem 1.32',
      cards: [
        {
          card_id: 'c-1.6-6',
          type: 'fact/property',
          title: '积的倒数 (Reciprocal of Product)',
          formula: '$\\frac{1}{ab} = \\frac{1}{a} \\cdot \\frac{1}{b} \\quad (a, b \\neq 0)$',
          content: '两个非零数乘积的倒数，等于这两个数各自倒数的乘积。此性质可推广至任意多个非零因子的乘积倒数。',
        },
      ],
    },
    {
      id: 'p-1.33',
      label: 'Problem 1.33',
      cards: [
        {
          card_id: 'c-1.6-7',
          type: 'fact/property',
          title: '相反数的倒数 (Reciprocal of Negation)',
          formula: '$\\frac{1}{-a} = -\\frac{1}{a} \\quad (a \\neq 0)$',
          content: '一个非零数的相反数的倒数，等于该数倒数的相反数。即取相反数与取倒数的顺序可以互换。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.6.1',
      label: 'Exercise 1.6.1',
    },
    {
      id: 'ex-1.6.2',
      label: 'Exercise 1.6.2',
    },
    {
      id: 'ex-1.6.3',
      label: 'Exercise 1.6.3',
    },
    {
      id: 'ex-1.6.4',
      label: 'Exercise 1.6.4',
    },
    {
      id: 'ex-1.6.5',
      label: 'Exercise 1.6.5',
    },
  ],
};

export const AOPS_SECTION_1_7: AmcSectionData = {
  section_id: '1.7',
  title: 'Division (除法)',
  problem_list: [
    {
      id: 'p-1.34',
      label: 'Problem 1.34',
      cards: [
        {
          card_id: 'c-1.7-1',
          type: 'definition',
          title: '除法的定义 (Definition of Division)',
          formula: '$a \\div b = a \\cdot \\frac{1}{b} \\quad (b \\neq 0)$',
          content: '除以一个非零数等于乘以这个数的倒数。对于任意数字 $a$ 和非零数字 $b$，除法定义为 $a \\div b = a \\cdot \\frac{1}{b}$。',
        },
        {
          card_id: 'c-1.7-2',
          type: 'warning',
          title: '避坑指南：不能除以 0 (Division by Zero is Undefined)',
          formula: '$\\frac{a}{0} \\text{ is undefined}$',
          content: '因为 0 没有倒数，所以 0 不能作为除数。在做除法运算前，必须确保除数不为 0。',
        },
      ],
    },
    {
      id: 'p-1.35',
      label: 'Problem 1.35',
      cards: [
        {
          card_id: 'c-1.7-3',
          type: 'fact/property',
          title: '与 0 和 1 相关的除法性质 (Division with 0 and 1)',
          formula: '$0 \\div a = 0, \\quad a \\div a = 1, \\quad a \\div 1 = a \\quad (a \\neq 0)$',
          content: '由除法定义可得：0 除以任何非零数都等于 0（$0 \\div a = 0$）；任何非零数除以它本身都等于 1（$a \\div a = 1$）；任何数除以 1 都等于它本身（$a \\div 1 = a$）。',
        },
      ],
    },
    {
      id: 'p-1.36',
      label: 'Problem 1.36',
      cards: [
        {
          card_id: 'c-1.7-4',
          type: 'fact/property',
          title: '除以倒数 (Dividing by a Reciprocal)',
          formula: '$a \\div \\frac{1}{b} = ab \\quad (b \\neq 0)$',
          content: '除以一个数的倒数，等于乘以这个数本身。对于任意非零数字 $b$，恒有 $a \\div \\frac{1}{b} = a \\cdot b$。',
        },
      ],
    },
    {
      id: 'p-1.37',
      label: 'Problem 1.37',
      cards: [
        {
          card_id: 'c-1.7-5',
          type: 'fact/property',
          title: '除法的符号法则 / 带相反数的除法 (Signed Division)',
          formula: '$(-a) \\div b = -(a \\div b), \\quad a \\div (-b) = -(a \\div b), \\quad (-a) \\div (-b) = a \\div b$',
          content: '除法的符号法则与乘法完全一致：“异号相除得负，同号相除得正”。即正数与负数相除结果为负，两个负数相除结果为正。',
        },
      ],
    },
    {
      id: 'p-1.38',
      label: 'Problem 1.38',
      cards: [
        {
          card_id: 'c-1.7-6',
          type: 'warning',
          title: '避坑指南：除法不满足交换律与结合律 (Non-commutative & Non-associative)',
          formula: '$a \\div b \\neq b \\div a, \\quad (a \\div b) \\div c \\neq a \\div (b \\div c)$',
          content: '除法既不满足交换律，也不满足结合律！例如 $10 \\div 2 \\neq 2 \\div 10$，且 $(8 \\div 4) \\div 2 \\neq 8 \\div (4 \\div 2)$。在连续除法中，必须严格从左往右依次计算。',
        },
      ],
    },
    {
      id: 'p-1.39',
      label: 'Problem 1.39',
      cards: [
        {
          card_id: 'c-1.7-7',
          type: 'strategy',
          title: '除法转化为乘法重排消因子 (Division-to-Multiplication Strategy)',
          formula: '$(a \\cdot b) \\div (c \\cdot d) = a \\cdot b \\cdot \\frac{1}{c} \\cdot \\frac{1}{d}$',
          content: '面对复杂的分子分母多项乘除法，先将所有除法转化为乘以倒数，再运用乘法交换律与结合律，将可以整除或约分的项配对计算，可大幅简化速算。',
        },
      ],
    },
    {
      id: 'p-1.40',
      label: 'Problem 1.40',
      cards: [
        {
          card_id: 'c-1.7-8',
          type: 'fact/property',
          title: '消去公共因子 (Cancel Common Factor)',
          formula: '$(ab) \\div (ac) = b \\div c \\quad (a, c \\neq 0)$',
          content: '当被除数与除数同时乘以一个非零公共因子 $a$ 时，公共因子可以相互抵消，即 $(ab) \\div (ac) = b \\div c$。',
        },
      ],
    },
    {
      id: 'p-1.41',
      label: 'Problem 1.41',
      cards: [
        {
          card_id: 'c-1.7-9',
          type: 'fact/property',
          title: '除法对加减法的右分配律 (Distributive Property of Division)',
          formula: '$(a + b) \\div c = a \\div c + b \\div c \\text{ 且 } (a - b) \\div c = a \\div c - b \\div c$',
          content: '当一个和或差除以一个数 $c$ 时，可以将每一项分别除以 $c$ 再相加减。注意：除法只满足“右分配律”（除数在右侧）。',
        },
        {
          card_id: 'c-1.7-10',
          type: 'warning',
          title: '避坑指南：除数是和/差时不能分配 (No Left Distribution over Divisor)',
          formula: '$a \\div (b + c) \\neq a \\div b + a \\div c$',
          content: '切记！除数在右侧的和/差可以拆开，但一个数除以一个和/差时绝不能拆开！例如 $6 \\div (2 + 1) = 2$，而 $6 \\div 2 + 6 \\div 1 = 3 + 6 = 9$，两者完全不相等。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.7.1',
      label: 'Exercise 1.7.1',
    },
    {
      id: 'ex-1.7.2',
      label: 'Exercise 1.7.2',
    },
    {
      id: 'ex-1.7.3',
      label: 'Exercise 1.7.3',
    },
    {
      id: 'ex-1.7.4',
      label: 'Exercise 1.7.4',
    },
    {
      id: 'ex-1.7.5',
      label: 'Exercise 1.7.5',
    },
    {
      id: 'ex-1.7.6',
      label: 'Exercise 1.7.6',
    },
    {
      id: 'ex-1.7.7',
      label: 'Exercise 1.7.7',
    },
    {
      id: 'ex-1.7.8',
      label: 'Exercise 1.7.8',
    },
    {
      id: 'ex-1.7.9',
      label: 'Exercise 1.7.9',
    },
    {
      id: 'ex-1.7.10',
      label: 'Exercise 1.7.10',
    },
    {
      id: 'ex-1.7.11',
      label: 'Exercise 1.7.11*',
    },
  ],
};

export const AOPS_SECTION_1_8: AmcSectionData = {
  section_id: '1.8',
  title: 'Summary (本章小结)',
  problem_list: [
    {
      id: 'p-1.8-core',
      label: 'Core Principles (公理框架与定义)',
      cards: [
        {
          card_id: 'c-1.8-1',
          type: 'definition',
          title: '运算顺序法则 (Order of Operations)',
          formula: '$\\text{Parentheses} \\rightarrow \\text{Exponents} \\rightarrow \\text{Mult/Div} \\rightarrow \\text{Add/Sub}$',
          content: '计算复杂算式时遵循：1. 优先算括号内部；2. 计算乘方；3. 从左往右算乘除；4. 从左往右算加减。',
        },
        {
          card_id: 'c-1.8-2',
          type: 'fact/property',
          title: '算术的 9 大基石公理 (9 Fundamental Axioms of Arithmetic)',
          formula: '$a+b=b+a, \\, ab=ba, \\, (a+b)+c=a+(b+c), \\, (ab)c=a(bc), \\, a+0=a, \\, 1a=a, \\, a(b+c)=ab+ac, \\, -a+a=0, \\, \\frac{1}{a} \\cdot a=1$',
          content: '整章代数推导建立在 9 个最基本的假设之上：加法与乘法的交换律、结合律、单位元（加 0、乘 1）、分配律，以及相反数与倒数的定义。所有复杂的代数规则均由这 9 条公理推导而来。',
        },
        {
          card_id: 'c-1.8-3',
          type: 'definition',
          title: '减法与除法的统一定义 (Unified Definitions of Subtraction & Division)',
          formula: '$a - b = a + (-b), \\quad a \\div b = a \\cdot \\frac{1}{b} \\quad (b \\neq 0)$',
          content: '减法定义为“加上相反数”，除法定义为“乘以倒数”。通过这两个基本定义，所有算术运算成功统一为了加法与乘法两大核心机制。',
        },
      ],
    },
    {
      id: 'p-1.8-traps',
      label: 'Pitfall Summary (第一章四大避坑指南)',
      cards: [
        {
          card_id: 'c-1.8-4',
          type: 'warning',
          title: '第一章四大易错陷阱总揽 (Chapter 1 Pitfall Summary)',
          formula: '$\\text{Subtraction/Division Pitfalls}$',
          content: '1. 减法与除法既不满足交换律也不满足结合律；2. 0 不能作除数且没有倒数；3. 除法不能对分母上的和/差进行拆开分配；4. $-x$ 不必然代表负数（负数的相反数是正数）。',
        },
        {
          card_id: 'c-1.8-5',
          type: 'strategy',
          title: '公理化代数思维 (Axiomatic Algebraic Thinking)',
          formula: '$\\text{Learn by Solving and Proving}$',
          content: '学习代数不仅是记忆计算公式，更是理解“规则为什么成立”。学会利用最底层的假定公理去解释与推导复杂性质，是从算术迈向高等数学的核心思维跃迁。',
        },
      ],
    },
  ],
  exercise_list: [
    {
      id: 'ex-1.8-review',
      label: 'Review Problems (第一章复习题组 Problem 1.42 - 1.63)',
    },
    {
      id: 'ex-1.8-challenge',
      label: 'Challenge Problems (第一章挑战题组 Problem 1.64 - 1.76)',
    },
  ],
};

export const AOPS_SECTIONS: AmcSectionData[] = [
  AOPS_SECTION_1_2,
  AOPS_SECTION_1_3,
  AOPS_SECTION_1_4,
  AOPS_SECTION_1_5,
  AOPS_SECTION_1_6,
  AOPS_SECTION_1_7,
  AOPS_SECTION_1_8,
];

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
            {
              id: 'node-amc-1-4-problems',
              title: '1.4 Problems',
              titleEn: 'Section 1.4 Negation · Problems',
              shortDesc: '完成 1.4 节 5 道探索题打卡，拆开 8 张相反数定义、符号辨析与负负得正盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.4 Negation · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.4 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_4.section_id,
                section_title: AOPS_SECTION_1_4.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_4.problem_list,
              },
            },
            {
              id: 'node-amc-1-4-exercises',
              title: '1.4 Exercises',
              titleEn: 'Section 1.4 Negation · Exercises',
              shortDesc: '完成 1.4 节末尾 5 道巩固练习打卡，深入辨析相反数性质、和的相反数与负负得正',
              icon: 'Award',
              xp: 40,
              blueprint: {
                title: 'Section 1.4 Negation · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.4 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.4 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_4.section_id,
                section_title: AOPS_SECTION_1_4.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_4.exercise_list,
                problem_list: AOPS_SECTION_1_4.problem_list,
              },
            },
            {
              id: 'node-amc-1-5-problems',
              title: '1.5 Problems',
              titleEn: 'Section 1.5 Subtraction · Problems',
              shortDesc: '完成 1.5 节 8 道探索题打卡，拆开 9 张减法本质、避坑指南与分配律盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.5 Subtraction · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.5 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_5.section_id,
                section_title: AOPS_SECTION_1_5.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_5.problem_list,
              },
            },
            {
              id: 'node-amc-1-5-exercises',
              title: '1.5 Exercises',
              titleEn: 'Section 1.5 Subtraction · Exercises',
              shortDesc: '完成 1.5 节末尾 11 道巩固练习打卡，实战运用转化为加法、减负得正与拆分巧算',
              icon: 'Award',
              xp: 45,
              blueprint: {
                title: 'Section 1.5 Subtraction · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.5 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.5 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_5.section_id,
                section_title: AOPS_SECTION_1_5.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_5.exercise_list,
                problem_list: AOPS_SECTION_1_5.problem_list,
              },
            },
            {
              id: 'node-amc-1-6-problems',
              title: '1.6 Problems',
              titleEn: 'Section 1.6 Reciprocals · Problems',
              shortDesc: '完成 1.6 节 5 道探索题打卡，拆开 7 张倒数定义、零无倒数与积的倒数盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.6 Reciprocals · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.6 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_6.section_id,
                section_title: AOPS_SECTION_1_6.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_6.problem_list,
              },
            },
            {
              id: 'node-amc-1-6-exercises',
              title: '1.6 Exercises',
              titleEn: 'Section 1.6 Reciprocals · Exercises',
              shortDesc: '完成 1.6 节末尾 5 道巩固练习打卡，熟练掌握乘法逆元检验、倒数的倒数与符号性质',
              icon: 'Award',
              xp: 40,
              blueprint: {
                title: 'Section 1.6 Reciprocals · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.6 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.6 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_6.section_id,
                section_title: AOPS_SECTION_1_6.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_6.exercise_list,
                problem_list: AOPS_SECTION_1_6.problem_list,
              },
            },
            {
              id: 'node-amc-1-7-problems',
              title: '1.7 Problems',
              titleEn: 'Section 1.7 Division · Problems',
              shortDesc: '完成 1.7 节 8 道探索题打卡，拆开 10 张除法本质、右分配律与消因子盲盒卡片',
              icon: 'Sparkles',
              xp: 50,
              blueprint: {
                title: 'Section 1.7 Division · 探索题盲盒',
                titleEn: 'AoPS Prealgebra Section 1.7 Problems',
                blocks: [],
                tip: '先在实体书上独立思考并完成每道 Problem，再勾选打卡解锁对应的知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_7.section_id,
                section_title: AOPS_SECTION_1_7.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_7.problem_list,
              },
            },
            {
              id: 'node-amc-1-7-exercises',
              title: '1.7 Exercises',
              titleEn: 'Section 1.7 Division · Exercises',
              shortDesc: '完成 1.7 节末尾 11 道巩固练习打卡，实战运用除法转化为乘法、约分与符号法则',
              icon: 'Award',
              xp: 45,
              blueprint: {
                title: 'Section 1.7 Division · 巩固练习打卡',
                titleEn: 'AoPS Prealgebra Section 1.7 Exercises',
                blocks: [],
                tip: '在做 Exercise 时，可以随时对照右侧已解锁的 1.7 节知识卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_7.section_id,
                section_title: AOPS_SECTION_1_7.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_7.exercise_list,
                problem_list: AOPS_SECTION_1_7.problem_list,
              },
            },
            {
              id: 'node-amc-1-8-problems',
              title: '1.8 Summary Problems',
              titleEn: 'Section 1.8 Summary · Principles & Pitfalls',
              shortDesc: '梳理第一章公理基石与核心框架，拆开 9 大公理、统一定义与避坑指南知识卡片',
              icon: 'BookMarked',
              xp: 50,
              blueprint: {
                title: 'Section 1.8 Summary · 公理体系与避坑盲盒',
                titleEn: 'AoPS Prealgebra Section 1.8 Core Principles',
                blocks: [],
                tip: '系统复习全章公理架构与四大陷阱，勾选打卡解锁终极总结卡片！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_8.section_id,
                section_title: AOPS_SECTION_1_8.title,
                mode: 'problems',
                problem_list: AOPS_SECTION_1_8.problem_list,
              },
            },
            {
              id: 'node-amc-1-8-exercises',
              title: '1.8 Review & Challenges',
              titleEn: 'Section 1.8 Review & Challenge Problems',
              shortDesc: '挑战第一章综合复习题组 (1.42-1.63) 与竞赛级挑战题组 (1.64-1.76)',
              icon: 'Trophy',
              xp: 60,
              blueprint: {
                title: 'Section 1.8 Summary · 综合复习与挑战打卡',
                titleEn: 'AoPS Prealgebra Chapter 1 Review & Challenges',
                blocks: [],
                tip: '翻开实体教材完成第一章 Review 与 Challenge 综合题组，为第一单元画上圆满句号！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_1_8.section_id,
                section_title: AOPS_SECTION_1_8.title,
                mode: 'exercises',
                exercise_list: AOPS_SECTION_1_8.exercise_list,
                problem_list: AOPS_SECTION_1_8.problem_list,
              },
            },
          ],
        },
      ],
    },
  ],
};
