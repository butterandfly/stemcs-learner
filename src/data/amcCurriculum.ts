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

export const AOPS_SECTION_2_1: AmcSectionData = {
  section_id: '2.1',
  title: 'Squares (平方)',
  problem_list: [],
  exercise_list: [],
  pages: [
    {
      id: 'aops-prealg-2.1-intro',
      type: 'concept',
      label: 'Intro',
      title: '2.1 Squares — Concept & Intro',
      cards: [
        {
          card_id: 'c-2.1-1',
          type: 'definition',
          title: 'Square (平方)',
          formula: '$a^2 = a \\cdot a$',
          content:
            'Let $a$ be a number. The **square** of $a$, written $a^2$, is equal to $a \\cdot a$.',
        },
        {
          card_id: 'c-2.1-2',
          type: 'definition',
          title: 'Perfect Square (完全平方数)',
          formula: '$0^2, 1^2, 2^2, 3^2, \\dots$',
          content: 'A **perfect square** is the square of an integer.',
        },
        {
          card_id: 'c-2.1-3',
          type: 'warning',
          title: 'Order of Operations (运算顺序)',
          formula: '$\\text{Parentheses} \\to \\text{Powers} \\to \\times, \\div \\to +, -$',
          content:
            'Always compute powers **after** parentheses and **before** multiplication or division:\n1. Evaluate expressions inside parentheses first.\n2. Compute powers.\n3. Multiply and divide from left to right.\n4. Add and subtract from left to right.\n*Watch out*: In $7 \\cdot 3^2$, square $3$ first ($7 \\cdot 9 = 63$), rather than multiplying $7 \\cdot 3$ first.',
        },
      ],
      checkpoints: [
        '读法',
        '使用面积来理解；同时回顾离散（方格子数量）的情况及连续（面积）的情况',
        'Perfect Square 的定义',
        '运算顺序的更新',
      ],
    },
    {
      id: 'aops-prealg-2.1-p2.1',
      type: 'problem',
      label: 'P2.1',
      title: 'Problem 2.1',
      problem: 'Simplify $180 - 5 \\cdot 2^2$.',
      solution:
        'Compute the square first, then multiply, and then subtract:\n$$180 - 5 \\cdot 2^2 = 180 - 5 \\cdot 4 = 180 - 20 = 160.$$',
      cards: [],
      relatedCardIds: ['c-2.1-3'],
    },
    {
      id: 'aops-prealg-2.1-p2.2',
      type: 'problem',
      label: 'P2.2',
      title: 'Problem 2.2',
      problem:
        'What is the value of $(2x + 5)^2$ when $x = 3$? In other words, in the expression $(2x + 5)^2$, replace the $x$ with $3$, and evaluate the new expression.',
      solution:
        "Let's first replace the $x$ with a $3$ in the expression $(2x + 5)^2$. Since $2x$ means $2 \\cdot x$, we get\n$$(2x + 5)^2 = (2 \\cdot 3 + 5)^2.$$\nNext we evaluate $(2 \\cdot 3 + 5)^2$ by following the order of operations:\n$$(2 \\cdot 3 + 5)^2 = (6 + 5)^2 = (11)^2 = 121.$$",
      cards: [],
      relatedCardIds: ['c-2.1-3'],
    },
    {
      id: 'aops-prealg-2.1-p2.3',
      type: 'problem',
      label: 'P2.3',
      title: 'Problem 2.3',
      problem: '(a) Evaluate $(-12)^2$.\n(b) How are $(-a)^2$ and $a^2$ related?',
      solution:
        '(a) First, we write the square as a product: $(-12)^2 = (-12)(-12)$. Applying the rule for a product of two negations, we have $(-12)(-12) = 12 \\cdot 12 = 144$. So, we have $(-12)^2 = 144$.\n(b) Above, we showed that $(-12)^2 = 12 \\cdot 12 = 12^2$. We can do the same for the square of any negation. For any number $a$, we have\n$$\\begin{aligned}\n(-a)^2 &= (-a)(-a) && \\text{definition of a square} \\\\\n&= a \\cdot a && \\text{negation times negation} \\\\\n&= a^2. && \\text{definition of a square}\n\\end{aligned}$$',
      cards: [
        {
          card_id: 'c-2.1-4',
          type: 'fact/property',
          title: 'Square of Negation (负数的平方)',
          formula: '$(-a)^2 = a^2$',
          content: 'Let $a$ be a number. Then $(-a)^2 = a^2$.',
        },
        {
          card_id: 'c-2.1-5',
          type: 'fact/property',
          title: 'Squares are Nonnegative (平方的非负性)',
          formula: '$a^2 \\ge 0$',
          content: 'Let $a$ be a number. Then $a^2$ is nonnegative.',
        },
      ],
      relatedCardIds: ['c-2.1-1', 'c-2.1-2'],
      checkpoints: [
        '从“处理例子”到“处理边界情况”；切换武器',
        '证明两个 theorem；“分类讨论”入门',
      ],
    },
    {
      id: 'aops-prealg-2.1-p2.4',
      type: 'problem',
      label: 'P2.4',
      title: 'Problem 2.4',
      problem:
        '(a) What is $(-2)^2$?\n(b) The expression $-2^2$ is the negation of the square of $2$. What number does $-2^2$ equal?\n(c) Given $x = -2$, find the value of $2x^2 + 3x + 4$.',
      solution:
        '(a) Because of the parentheses, this part asks us to square $-2$. Using what we just learned about squaring negative numbers, we have\n$$(-2)^2 = 2^2 = 4.$$\n(b) Hmm, this part looks like part (a). But the missing parentheses make all the difference. The expression $-2^2$ is the negation of the square of $2$. In other words, we have to square $2$ first, and then negate. So we get\n$$-2^2 = -(2^2) = -4.$$\n(c) In the expression $2x^2 + 3x + 4$, we first replace each $x$ with $-2$:\n$$2x^2 + 3x + 4 = 2(-2)^2 + 3(-2) + 4.$$\nNote that we were careful to write $(-2)$ instead of $-2$. Since $x^2$ means to square $x$, we want $(-2)^2$, the square of $-2$, not $-2^2$, the negation of $2^2$. Similarly, since $3x$ means $3$ times $x$, we want $3(-2)$, which means $3$ times $-2$.\nFinally, we evaluate the expression using the order of operations:\n$$\\begin{aligned}\n2(-2)^2 + 3(-2) + 4 &= 2(4) + 3(-2) + 4 \\\\\n&= 8 + (-6) + 4 \\\\\n&= 2 + 4 \\\\\n&= 6.\n\\end{aligned}$$',
      cards: [
        {
          card_id: 'c-2.1-6',
          type: 'warning',
          title: 'Square of a Negation vs. Negation of a Square (负数的平方 vs. 平方的相反数)',
          formula: '$(-2)^2 = 4 \\neq -4 = -2^2$',
          content:
            'The square of a negation and the negation of a square are **NOT** the same thing! For example, $(-2)^2$ and $-2^2$ are **NOT** equal.',
        },
      ],
      relatedCardIds: ['c-2.1-4', 'c-2.1-3'],
    },
    {
      id: 'aops-prealg-2.1-p2.5',
      type: 'problem',
      label: 'P2.5',
      title: 'Problem 2.5',
      problem:
        '(a) Explain why $(8 \\cdot 125)^2 = 8^2 \\cdot 125^2$.\n(b) How does part (a) help us compute $8^2 \\cdot 125^2$ quickly?',
      solution:
        '(a) Let\'s rewrite the square $(8 \\cdot 125)^2$ as a product and then group equal numbers:\n$$\\begin{aligned}\n(8 \\cdot 125)^2 &= (8 \\cdot 125)(8 \\cdot 125) && \\text{definition of a square} \\\\\n&= (8 \\cdot 8)(125 \\cdot 125) && \\text{commutative and associative properties} \\\\\n&= 8^2 \\cdot 125^2. && \\text{definition of a square}\n\\end{aligned}$$\nSo, we see that a square of a product, $(8 \\cdot 125)^2$, equals a product of squares, $8^2 \\cdot 125^2$.\n(b) The product $8 \\cdot 125$ is $1000$, which is an easy number to square. So, the relationship in part (a) makes $8^2 \\cdot 125^2$ easy to compute:\n$$8^2 \\cdot 125^2 = (8 \\cdot 125)^2 = 1000^2 = 1000 \\cdot 1000 = 1{,}000{,}000.$$',
      cards: [
        {
          card_id: 'c-2.1-7',
          type: 'fact/property',
          title: 'Square of Product (乘积的平方)',
          formula: '$(ab)^2 = a^2b^2$',
          content: 'Let $a$ and $b$ be numbers. Then $(ab)^2 = a^2b^2$.',
        },
      ],
      relatedCardIds: ['c-2.1-1'],
    },
    {
      id: 'aops-prealg-2.1-p2.6',
      type: 'problem',
      label: 'P2.6',
      title: 'Problem 2.6',
      problem: 'Evaluate $\\left(\\frac{1}{7}\\right)^2$.',
      solution:
        'Again, let\'s rewrite the square as a product:\n$$\\begin{aligned}\n\\left(\\frac{1}{7}\\right)^2 &= \\frac{1}{7} \\cdot \\frac{1}{7} && \\text{definition of a square} \\\\\n&= \\frac{1}{7 \\cdot 7} && \\text{product of reciprocals} \\\\\n&= \\frac{1}{7^2} && \\text{definition of a square} \\\\\n&= \\frac{1}{49}. && 7^2 = 49\n\\end{aligned}$$',
      cards: [
        {
          card_id: 'c-2.1-8',
          type: 'fact/property',
          title: 'Square of Reciprocal (倒数的平方)',
          formula: '$\\left(\\frac{1}{a}\\right)^2 = \\frac{1}{a^2}$',
          content: 'Let $a$ be a nonzero number. Then $\\left(\\frac{1}{a}\\right)^2 = \\frac{1}{a^2}$.',
        },
      ],
      relatedCardIds: ['c-2.1-1'],
    },
    {
      id: 'aops-prealg-2.1-p2.7',
      type: 'problem',
      label: 'P2.7',
      title: 'Problem 2.7',
      problem: 'Explain why $(7224 \\div 12)^2 = 7224^2 \\div 12^2$.',
      solution:
        'We could compute both $(7224 \\div 12)^2$ and $7224^2 \\div 12^2$ but squaring $7224$ is a lot of work! Instead, let\'s try using the properties of squares and division. Because division is multiplication by a reciprocal, we can use our rules for the square of a product and the square of a reciprocal:\n$$\\begin{aligned}\n(7224 \\div 12)^2 &= \\left(7224 \\cdot \\frac{1}{12}\\right)^2 && \\text{definition of division} \\\\\n&= 7224^2 \\cdot \\left(\\frac{1}{12}\\right)^2 && \\text{square of product} \\\\\n&= 7224^2 \\cdot \\frac{1}{12^2} && \\text{square of reciprocal} \\\\\n&= 7224^2 \\div 12^2. && \\text{definition of division}\n\\end{aligned}$$\nSo, the square of $7224 \\div 12$ is $7224^2 \\div 12^2$.',
      cards: [
        {
          card_id: 'c-2.1-9',
          type: 'fact/property',
          title: 'Square of Quotient (商的平方)',
          formula: '$(a \\div b)^2 = a^2 \\div b^2$',
          content:
            'Let $a$ and $b$ be numbers such that $b$ is nonzero. Then $(a \\div b)^2 = a^2 \\div b^2$.',
        },
      ],
      relatedCardIds: ['c-2.1-7', 'c-2.1-8'],
    },
    {
      id: 'aops-prealg-2.1-p2.8',
      type: 'problem',
      label: 'P2.8',
      title: 'Problem 2.8',
      problem:
        '(a) What is the value of $(5 + 6)^2$?\n(b) What is the value of $5^2 + 6^2$?\n(c) Is $(5 + 6)^2$ equal to $5^2 + 6^2$?',
      solution:
        '(a) The value of $(5 + 6)^2$ is $(5 + 6)^2 = 11^2 = 121$.\n(b) The value of $5^2 + 6^2$ is $5^2 + 6^2 = 25 + 36 = 61$.\n(c) No. By the first two parts, $(5 + 6)^2$ is greater than $5^2 + 6^2$, so the two expressions are not equal.',
      cards: [
        {
          card_id: 'c-2.1-10',
          type: 'warning',
          title: 'Square of a Sum Is Not the Sum of Squares (和的平方 ≠ 平方和)',
          formula: '$(a + b)^2 \\neq a^2 + b^2 \\quad (a, b \\neq 0)$',
          content:
            'If $a$ and $b$ are nonzero, then $(a + b)^2$ is **NOT** equal to $a^2 + b^2$. That is, the square of a sum of two nonzero numbers is **NOT** equal to the sum of the squares of the numbers.',
        },
      ],
      relatedCardIds: ['c-2.1-3'],
    },
    {
      id: 'aops-prealg-2.1-p2.9',
      type: 'problem',
      label: 'P2.9',
      title: 'Problem 2.9',
      problem:
        '(a) Using the picture at the right, explain why $8^2 = 7^2 + 2(7) + 1$.\n(b) Explain why $901^2 = 900^2 + 2(900) + 1$.\n(c) What is $901^2$?',
      solution:
        '(a) On one hand, the entire picture is a square with $8$ rows and $8$ columns. So it has $8^2$ little squares.\nOn the other hand, we split the grid of little squares into four pieces with the bold lines inside the square. The big piece is a square with $7$ rows and $7$ columns, so it has $7^2$ little squares. The two skinny rectangles have $7$ little squares each. Finally, there is $1$ lonely square in the upper right corner. In all, the number of little squares is\n$$7^2 + 2(7) + 1.$$\nWe have counted the same squares in two different ways, so these two counts must be equal. We found $8^2$ little squares with our first method and $7^2 + 2(7) + 1$ with the second, so\n$$8^2 = 7^2 + 2(7) + 1.$$\nLet\'s check this equation. The left side, $8^2$, is $64$. The right side, $7^2 + 2(7) + 1$, simplifies to $49 + 14 + 1$, which is also $64$. Yes, the equation checks out.\n(b) We can use the same argument. Imagine a huge square with $901$ rows and $901$ columns. It will have $901^2$ little squares.\nWe can also count the little squares by cutting the huge square into the four pieces in the same pattern:\n• A square with $900$ rows and $900$ columns. This square has $900^2$ little squares.\n• One skinny rectangle that is a row of $900$ little squares.\n• One skinny rectangle that is a column of $900$ little squares.\n• $1$ lonely little square.\nThis gives us a total of $900^2 + 2(900) + 1$ little squares. But this must be the same total as our first count, $901^2$, so\n$$901^2 = 900^2 + 2(900) + 1.$$\n(c) Using part (b), we have\n$$\\begin{aligned}\n901^2 &= 900^2 + 2(900) + 1 \\\\\n&= 900^2 + 1800 + 1 \\\\\n&= 810{,}000 + 1801 \\\\\n&= 811{,}801.\n\\end{aligned}$$\nSo we have found a quick way to go from one perfect square to the next.',
      diagram: 'grid-8x8',
      cards: [
        {
          card_id: 'c-2.1-11',
          type: 'fact/property',
          title: 'Square of (a + 1) (相邻完全平方数公式)',
          formula: '$(a + 1)^2 = a^2 + 2a + 1 = a^2 + a + (a + 1)$',
          content: 'For every number $a$, $(a + 1)^2 = a^2 + 2a + 1 = a^2 + a + (a + 1)$.',
        },
        {
          card_id: 'c-2.1-12',
          type: 'fact/property',
          title: 'Square of a Sum (完全平方和公式)',
          formula: '$(a + b)^2 = a^2 + 2ab + b^2$',
          content: 'For any two numbers $a$ and $b$, $(a + b)^2 = a^2 + 2ab + b^2$.',
        },
      ],
      relatedCardIds: ['c-2.1-1', 'c-2.1-2', 'c-2.1-10'],
    },
  ],
};

export const AOPS_SECTION_2_2: AmcSectionData = {
  section_id: '2.2',
  title: 'Higher Exponents (更高次幂)',
  problem_list: [],
  exercise_list: [],
  pages: [
    {
      id: 'aops-prealg-2.2-intro',
      type: 'concept',
      label: 'Intro',
      title: '2.2 Higher Exponents — Concept & Intro',
      cards: [
        {
          card_id: 'c-2.2-1',
          type: 'definition',
          title: 'Power (Positive Integer Exponent) (正整数次幂)',
          formula: '$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n\\text{ copies of }a}$',
          content:
            'Let $a$ be any number and let $n$ be a positive integer. The **power** $a^n$, pronounced "$a$ to the $n$," is defined by multiplying $n$ copies of $a$. For example, $a^5 = a \\cdot a \\cdot a \\cdot a \\cdot a$.',
        },
        {
          card_id: 'c-2.2-2',
          type: 'fact/property',
          title: 'Power of Product (乘积的幂)',
          formula: '$(ab)^n = a^n b^n$',
          content:
            'Let $a$ and $b$ be numbers, and let $n$ be a positive integer. Then $(ab)^n = a^n b^n$.',
        },
        {
          card_id: 'c-2.2-3',
          type: 'fact/property',
          title: 'Power of Reciprocal (倒数的幂)',
          formula: '$\\left(\\frac{1}{b}\\right)^n = \\frac{1}{b^n}$',
          content:
            'Let $b$ be a nonzero number, and let $n$ be a positive integer. Then $\\left(\\frac{1}{b}\\right)^n = \\frac{1}{b^n}$.',
        },
        {
          card_id: 'c-2.2-4',
          type: 'fact/property',
          title: 'Power of Quotient (商的幂)',
          formula: '$(a \\div b)^n = a^n \\div b^n$',
          content:
            'Let $a$ and $b$ be numbers with $b$ nonzero, and let $n$ be a positive integer. Then $(a \\div b)^n = a^n \\div b^n$.',
        },
        {
          card_id: 'c-2.2-5',
          type: 'warning',
          title: 'Power of a Sum Is Not the Sum of Powers (和的幂 ≠ 幂的和)',
          formula: '$(a + b)^n \\neq a^n + b^n$',
          content:
            'Suppose $a$ and $b$ are nonzero numbers, and $n$ is an integer greater than $2$. Just as $(a + b)^2$ is **NOT** equal to $a^2 + b^2$, the expression $(a + b)^n$ is **NOT** necessarily equal to $a^n + b^n$.',
        },
      ],
    },
    {
      id: 'aops-prealg-2.2-p2.10',
      type: 'problem',
      label: 'P2.10',
      title: 'Problem 2.10',
      problem:
        '*(Source: (b) MATHCOUNTS)*\n(a) Compute $(-4)^3$.\n(b) For how many integers $n$ is $n^3$ between $-50$ and $50$?',
      solution:
        "(a) The expression $(-4)^3$ means the product of three $-4$'s, so\n$$(-4)^3 = (-4)(-4)(-4) = (16)(-4) = -64.$$\nThis result shows one key difference between squares and cubes. While the square of a negative number is positive, the cube of a negative number is negative. We see why in our computation of $(-4)^3$. The product of the first two $-4$'s in $(-4)(-4)(-4)$ is positive, and then we multiply by one more $-4$ and have a negative number as a final result. So, while there are no negative squares, there are negative cubes.\n(b) We have\n$$0^3 = 0 \\cdot 0 \\cdot 0 = 0, \\qquad 1^3 = 1 \\cdot 1 \\cdot 1 = 1, \\qquad 2^3 = 2 \\cdot 2 \\cdot 2 = 8,$$\n$$3^3 = 3 \\cdot 3 \\cdot 3 = 27, \\qquad 4^3 = 4 \\cdot 4 \\cdot 4 = 64.$$\nWe see that $4^3$ is greater than $50$, and the cube of any number greater than $4$ is greater than $4^3$. So, the only nonnegative cubes between $-50$ and $50$ are $0^3, 1^3, 2^3,$ and $3^3$. But we have to be careful not to forget about negatives! We have\n$$\\begin{aligned}\n(-1)^3 &= -1^3 = -1, \\\\\n(-2)^3 &= -2^3 = -8, \\\\\n(-3)^3 &= -3^3 = -27.\n\\end{aligned}$$\nJust as all the positive cubes from $4^3$ up are greater than $50$, the negative cubes from $(-4)^3$ down are less than $-50$.\nCombining these $3$ negative cubes with the $4$ nonnegative cubes we found first, we see that there are $7$ integers $n$ such that $n^3$ is between $-50$ and $50$.",
      cards: [
        {
          card_id: 'c-2.2-6',
          type: 'fact/property',
          title: 'Cube of Negation (负数的立方)',
          formula: '$(-a)^3 = -a^3$',
          content: 'Let $a$ be any number. Then $(-a)^3 = -a^3$.',
        },
      ],
      relatedCardIds: ['c-2.2-1', 'c-2.1-5'],
    },
    {
      id: 'aops-prealg-2.2-p2.11',
      type: 'problem',
      label: 'P2.11',
      title: 'Problem 2.11',
      problem:
        'Let $a$ be any number.\n(a) Explain why $(-a)^4 = a^4$.\n(b) Explain why $(-a)^5 = -a^5$.',
      solution:
        '(a) We rewrite the power on the left side as a product, and then use what we know about the product of negations:\n$$\\begin{aligned}\n(-a)^4 &= (-a)(-a)(-a)(-a) && \\text{definition of an exponent} \\\\\n&= ((-a)(-a))((-a)(-a)) && \\text{associative property} \\\\\n&= (a \\cdot a)(a \\cdot a) && \\text{negation times negation (twice)} \\\\\n&= a^4. && \\text{definition of an exponent}\n\\end{aligned}$$\n(b) Again, we convert the power on the left side to a product:\n$$\\begin{aligned}\n(-a)^5 &= (-a)(-a)(-a)(-a)(-a) && \\text{definition of an exponent} \\\\\n&= (-a)((-a)(-a))((-a)(-a)) && \\text{associative property} \\\\\n&= (-a)(a \\cdot a)(a \\cdot a) && \\text{negation times negation (twice)} \\\\\n&= -(a \\cdot a \\cdot a \\cdot a \\cdot a) && \\text{multiplication by negation} \\\\\n&= -a^5. && \\text{definition of an exponent}\n\\end{aligned}$$',
      cards: [
        {
          card_id: 'c-2.2-7',
          type: 'fact/property',
          title: 'Power of Negation (负数的幂)',
          formula: '$(-a)^n = \\begin{cases} a^n & (n\\text{ even}) \\\\ -a^n & (n\\text{ odd}) \\end{cases}$',
          content:
            'Let $a$ be any number. Let $n$ be a positive integer. If $n$ is even, then $(-a)^n = a^n$. If $n$ is odd, then $(-a)^n = -a^n$.',
        },
      ],
      relatedCardIds: ['c-2.2-1', 'c-2.1-4', 'c-2.2-6'],
    },
    {
      id: 'aops-prealg-2.2-p2.12',
      type: 'problem',
      label: 'P2.12',
      title: 'Problem 2.12',
      problem: '*(Source: MATHCOUNTS)*\nEvaluate $(-1)^{(5^2)} + 1^{(2^5)}$.',
      solution:
        "Let's look at the first term of our sum. Because $5^2 = 25$ is odd, we have\n$$(-1)^{(5^2)} = (-1)^{25} = -(1^{25}) = -1.$$\nFor the second term of our sum, any power of $1$ is $1$, so $1^{(2^5)}$ is $1$. Therefore, our sum is $-1 + 1$, which is $0$.",
      cards: [],
      relatedCardIds: ['c-2.2-7', 'c-2.2-1'],
    },
    {
      id: 'aops-prealg-2.2-p2.13',
      type: 'problem',
      label: 'P2.13',
      title: 'Problem 2.13',
      problem:
        'Addition and multiplication are commutative. That is, $a + b = b + a$ and $ab = ba$ for all $a$ and $b$. In this problem, we explore whether or not exponentiation is commutative.\n(a) What is $3^4$?\n(b) What is $4^3$?\n(c) Is exponentiation commutative? That is, if $a$ and $b$ are positive integers, then must we have $a^b = b^a$?',
      solution:
        '(a) $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = (3 \\cdot 3) \\cdot (3 \\cdot 3) = 9 \\cdot 9 = 81$.\n(b) $4^3 = 4 \\cdot 4 \\cdot 4 = 16 \\cdot 4 = 64$.\n(c) In parts (a) and (b), we found that $3^4$ and $4^3$ are not equal. Therefore, we know that exponentiation is not commutative. The order of the numbers in a power matters.',
      cards: [
        {
          card_id: 'c-2.2-8',
          type: 'warning',
          title: 'Exponentiation Is Not Commutative (乘方不满足交换律)',
          formula: '$3^4 = 81 \\neq 64 = 4^3$',
          content:
            'Exponentiation is **not** commutative: $a^b$ and $b^a$ are not necessarily equal (for example, $3^4 = 81 \\neq 64 = 4^3$). The order of the numbers in a power matters.',
        },
      ],
      relatedCardIds: ['c-2.2-1'],
      checkpoints: [
        '引入“^”，在文本格式上指明 power 操作符；将“^”符号类比成加号和乘号',
        '判断 ^ 是否具有交换律',
      ],
    },
    {
      id: 'aops-prealg-2.2-p2.14',
      type: 'problem',
      label: 'P2.14',
      title: 'Problem 2.14',
      problem:
        'Addition and multiplication are associative. That is, $(a + b) + c = a + (b + c)$ and $(ab)c = a(bc)$ for any numbers $a, b,$ and $c$. In this problem, we explore whether or not exponentiation is associative.\n(a) What is $(2^2)^3$?\n(b) What is $2^{(2^3)}$?\n(c) Is exponentiation associative? That is, if $a, b,$ and $c$ are positive integers, must we have $(a^b)^c = a^{(b^c)}$?',
      solution:
        '(a) We evaluate inside the parentheses first:\n$$(2^2)^3 = 4^3 = 64.$$\n(b) Again, we evaluate inside the parentheses first:\n$$\\begin{aligned}\n2^{(2^3)} &= 2^8 \\\\\n&= 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\\\\n&= (2 \\cdot 2 \\cdot 2 \\cdot 2) \\cdot (2 \\cdot 2 \\cdot 2 \\cdot 2) \\\\\n&= 16 \\cdot 16 \\\\\n&= 256.\n\\end{aligned}$$\n(c) We just showed that $(2^2)^3$ is different from $2^{(2^3)}$. So exponentiation is not associative; where we place parentheses in expressions like $(2^2)^3$ and $2^{(2^3)}$ matters.',
      cards: [
        {
          card_id: 'c-2.2-9',
          type: 'warning',
          title: 'Exponentiation Is Not Associative (乘方不满足结合律)',
          formula: '$(2^2)^3 = 64 \\neq 256 = 2^{(2^3)} = 2^{2^3}$',
          content:
            'Exponentiation is **not** associative: $(a^b)^c$ and $a^{(b^c)}$ are not necessarily equal (for example, $(2^2)^3 = 64 \\neq 256 = 2^{(2^3)}$). When written without parentheses as $2^{2^3}$, we evaluate powers from **top to bottom** (right to left), so $2^{2^3} = 2^{(2^3)}$.',
        },
      ],
      relatedCardIds: ['c-2.2-1', 'c-2.1-3'],
      checkpoints: ['判断并证明 power 操作符是否具有结合律', '多层乘方的书写约定'],
    },
    {
      id: 'aops-prealg-2.2-p2.15',
      type: 'problem',
      label: 'P2.15',
      title: 'Problem 2.15',
      problem: 'Let $a$ be any number. Explain why $a^3 \\cdot a^5 = a^8$.',
      solution:
        "We expand the left side as a big product:\n$$\\begin{aligned}\na^3 \\cdot a^5 &= (a \\cdot a \\cdot a)(a \\cdot a \\cdot a \\cdot a \\cdot a) && \\text{definition of an exponent (twice)} \\\\\n&= a \\cdot a \\cdot a \\cdot a \\cdot a \\cdot a \\cdot a \\cdot a && \\text{associative property} \\\\\n&= a^8. && \\text{definition of an exponent}\n\\end{aligned}$$\nIn other words, $a^3$ is the product of $3$ $a$'s and $a^5$ is the product of $5$ $a$'s. So $a^3 \\cdot a^5$ is the product of $3 + 5$ $a$'s, which is $a^{3 + 5}$, or $a^8$.",
      cards: [
        {
          card_id: 'c-2.2-10',
          type: 'fact/property',
          title: 'Product of Powers (Same Base) (同底数幂相乘)',
          formula: '$a^m \\cdot a^n = a^{m + n}$',
          content:
            'Let $a$ be any number. Let $m$ and $n$ be positive integers. Then $a^m \\cdot a^n = a^{m + n}$.',
        },
      ],
      relatedCardIds: ['c-2.2-1'],
      checkpoints: ['证明 Product of Powers', '连乘的情况', '对比乘法分配律'],
    },
    {
      id: 'aops-prealg-2.2-p2.16',
      type: 'problem',
      label: 'P2.16',
      title: 'Problem 2.16',
      problem:
        '*(Source: MATHCOUNTS)*\nExpress $5^{17} + 5^{17} + 5^{17} + 5^{17} + 5^{17}$ as a power of $5$.',
      solution:
        'Because we are adding $5$ copies of a number, we have\n$$\\begin{aligned}\n5^{17} + 5^{17} + 5^{17} + 5^{17} + 5^{17} &= 5 \\cdot 5^{17} && \\text{repeated addition} \\\\\n&= 5^1 \\cdot 5^{17} && \\text{definition of an exponent} \\\\\n&= 5^{1 + 17} && \\text{product of powers (same base)} \\\\\n&= 5^{18}. && \\text{addition}\n\\end{aligned}$$',
      cards: [],
      relatedCardIds: ['c-2.2-10', 'c-2.2-1'],
    },
    {
      id: 'aops-prealg-2.2-p2.17',
      type: 'problem',
      label: 'P2.17',
      title: 'Problem 2.17',
      problem: 'Explain why $9^7 \\div 9^3 = 9^4$.',
      solution:
        'We start by using the product rule "backwards" to write $9^7 = 9^4 \\cdot 9^3$. This allows us to cancel the common factor $9^3$:\n$$\\begin{aligned}\n9^7 \\div 9^3 &= (9^4 \\cdot 9^3) \\div 9^3 && \\text{product of powers (same base)} \\\\\n&= 9^4 \\div 1 && \\text{cancel factor of }9^3 \\\\\n&= 9^4. && \\text{division by }1\n\\end{aligned}$$\nAgain, this result makes sense; $9^7$ is the product of $7$ nines and $9^3$ is the product of $3$ nines. So in $9^7 \\div 9^3$, we can cancel $3$ of the nines in $9^7$ with the $3$ nines of $9^3$. This leaves $7 - 3$ nines, or $9^{7 - 3}$, which is $9^4$.',
      cards: [
        {
          card_id: 'c-2.2-11',
          type: 'fact/property',
          title: 'Quotient of Powers (Same Base) (同底数幂相除)',
          formula: '$a^m \\div a^n = a^{m - n}$',
          content:
            'Let $a$ be a nonzero number. Let $m$ and $n$ be positive integers such that $m$ is greater than $n$. Then $a^m \\div a^n = a^{m - n}$.',
        },
      ],
      relatedCardIds: ['c-2.2-10'],
      checkpoints: ['证明 Quotient of Powers（使用底部大括号）'],
    },
    {
      id: 'aops-prealg-2.2-p2.18',
      type: 'problem',
      label: 'P2.18',
      title: 'Problem 2.18',
      problem: 'Explain why $(7^5)^3 = 7^{5 \\cdot 3}$.',
      solution:
        "We will use the product rule:\n$$\\begin{aligned}\n(7^5)^3 &= 7^5 \\cdot 7^5 \\cdot 7^5 && \\text{definition of an exponent} \\\\\n&= 7^{5 + 5 + 5} && \\text{product of powers (same base)} \\\\\n&= 7^{5 \\cdot 3} && \\text{repeated addition} \\\\\n&= 7^{15}. && \\text{multiplication}\n\\end{aligned}$$\nOnce again, this result makes sense when we count how many $7$'s must be multiplied to get $(7^5)^3$. First, the exponent $3$ means that we multiply $3$ copies of $7^5$:\n$$(7^5)^3 = 7^5 \\cdot 7^5 \\cdot 7^5.$$\nEach of these $3$ copies of $7^5$ is the product of $5$ copies of $7$:\n$$7^5 \\cdot 7^5 \\cdot 7^5 = (7 \\cdot 7 \\cdot 7 \\cdot 7 \\cdot 7) \\cdot (7 \\cdot 7 \\cdot 7 \\cdot 7 \\cdot 7) \\cdot (7 \\cdot 7 \\cdot 7 \\cdot 7 \\cdot 7).$$\nSo, altogether, the product has $5 \\cdot 3$ copies of $7$. Therefore, $(7^5)^3 = 7^{5 \\cdot 3}$.",
      cards: [
        {
          card_id: 'c-2.2-12',
          type: 'fact/property',
          title: 'Power of Power (幂的乘方)',
          formula: '$(a^m)^n = a^{mn}$',
          content:
            'Let $a$ be any number. Let $m$ and $n$ be positive integers. Then $(a^m)^n = a^{mn}$.',
        },
      ],
      relatedCardIds: ['c-2.2-1', 'c-2.2-10'],
      checkpoints: ['证明 Power of Power', '对比 power 的结合律证伪'],
    },
    {
      id: 'aops-prealg-2.2-p2.19',
      type: 'problem',
      label: 'P2.19',
      title: 'Problem 2.19',
      problem:
        'Express each of the following as a power of $2$:\n(a) $(2^7 \\cdot 2^8) \\div 2^3$\n(b) $(2^6)^4 \\div 2^7$\n(c) $4^6 \\div 8^2$',
      solution:
        '(a) We have\n$$\\begin{aligned}\n(2^7 \\cdot 2^8) \\div 2^3 &= 2^{7 + 8} \\div 2^3 && \\text{product of powers (same base)} \\\\\n&= 2^{7 + 8 - 3} && \\text{quotient of powers (same base)} \\\\\n&= 2^{12}. && \\text{addition and subtraction}\n\\end{aligned}$$\n(b) We have\n$$\\begin{aligned}\n(2^6)^4 \\div 2^7 &= 2^{6 \\cdot 4} \\div 2^7 && \\text{power of a power} \\\\\n&= 2^{6 \\cdot 4 - 7} && \\text{quotient of powers (same base)} \\\\\n&= 2^{17}. && \\text{multiplication and subtraction}\n\\end{aligned}$$\n(c) This part is a little trickier because the bases are $4$ and $8$, not $2$. However, both $4$ and $8$ are powers of $2$. Since $4 = 2^2$ and $8 = 2^3$, we can use exponent laws to write $4^6 \\div 8^2$ as a power of $2$:\n$$\\begin{aligned}\n4^6 \\div 8^2 &= (2^2)^6 \\div (2^3)^2 && \\text{powers of }2 \\\\\n&= 2^{2 \\cdot 6} \\div 2^{3 \\cdot 2} && \\text{power of a power (twice)} \\\\\n&= 2^{12} \\div 2^6 && \\text{multiplication} \\\\\n&= 2^{12 - 6} && \\text{quotient of powers (same base)} \\\\\n&= 2^6. && \\text{subtraction}\n\\end{aligned}$$',
      cards: [],
      relatedCardIds: ['c-2.2-10', 'c-2.2-11', 'c-2.2-12'],
    },
    {
      id: 'aops-prealg-2.2-p2.20',
      type: 'problem',
      label: 'P2.20',
      title: 'Problem 2.20',
      problem:
        '(a) Express $11^{20{,}000}$ as a $10{,}000^{\\text{th}}$ power by finding the positive integer $a$ such that $11^{20{,}000}$ equals $a^{10{,}000}$.\n(b) Express $5^{30{,}000}$ as a $10{,}000^{\\text{th}}$ power.\n(c) Express $2^{70{,}000}$ as a $10{,}000^{\\text{th}}$ power.\n(d) Which of the numbers $11^{20{,}000}, 5^{30{,}000},$ and $2^{70{,}000}$ is the greatest?',
      solution:
        '(a) Since the problem asks for a $10{,}000^{\\text{th}}$ power, let\'s write $11^{20{,}000}$ as $11^{2 \\cdot 10{,}000}$. By the "power of a power" rule, we can write $11^{2 \\cdot 10{,}000}$ as $(11^2)^{10{,}000}$. Since $11^2 = 121$, we can write $(11^2)^{10{,}000}$ as $121^{10{,}000}$. As requested, we have expressed the original expression as a $10{,}000^{\\text{th}}$ power.\n(b) Similarly, we have\n$$5^{30{,}000} = 5^{3 \\cdot 10{,}000} = (5^3)^{10{,}000} = 125^{10{,}000}.$$\n(c) Again, we have\n$$2^{70{,}000} = 2^{7 \\cdot 10{,}000} = (2^7)^{10{,}000} = 128^{10{,}000}.$$\n(d) Yikes, the three numbers are enormous! We don\'t want to actually calculate them. Luckily, in the three previous parts, we expressed each number as a $10{,}000^{\\text{th}}$ power. The three $10{,}000^{\\text{th}}$ powers are $121^{10{,}000}$, $125^{10{,}000}$, and $128^{10{,}000}$. The exponents in these three powers are the same, and $128$ is the largest base, so the largest of these three powers is $128^{10{,}000}$. So the largest of our original expressions is $2^{70{,}000}$.',
      cards: [
        {
          card_id: 'c-2.2-13',
          type: 'strategy',
          title: 'Compare Large Powers via Common Exponent (同指数法比较大幂)',
          formula: '$a^{kn} = (a^k)^n$',
          content:
            'To compare huge powers without computing them directly, use the "power of a power" rule backwards ($a^{kn} = (a^k)^n$) to rewrite all numbers with the **same exponent**, and then compare their bases.',
        },
      ],
      relatedCardIds: ['c-2.2-12'],
      checkpoints: ['策略：对比 powers'],
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
  AOPS_SECTION_2_1,
  AOPS_SECTION_2_2,
];

export interface CodexCardEntry {
  card: AmcKnowledgeCard;
  sectionId: string;
  sectionTitle: string;
  problemId: string;
  problemLabel: string;
}

export const ALL_AMC_CODEX_CARDS: CodexCardEntry[] = AOPS_SECTIONS.flatMap((section) => [
  ...section.problem_list.flatMap((problem) =>
    problem.cards.map((card) => ({
      card,
      sectionId: section.section_id,
      sectionTitle: section.title,
      problemId: problem.id,
      problemLabel: problem.label,
    }))
  ),
  ...(section.pages || []).flatMap((page) =>
    page.cards.map((card) => ({
      card,
      sectionId: section.section_id,
      sectionTitle: section.title,
      problemId: page.id,
      problemLabel: page.title,
    }))
  ),
]);

export const ALL_AMC_TASK_IDS: string[] = AOPS_SECTIONS.flatMap((section) => [
  ...section.problem_list.map((p) => p.id),
  ...section.exercise_list.map((e) => e.id),
  ...(section.pages || []).map((p) => p.id),
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
    {
      id: 'sec-aops-ch2',
      title: 'Chapter 2: Exponents (指数)',
      description: '配合《AoPS Prealgebra》第 2 章实体教材，逐页掌握平方、指数运算与证明思维',
      units: [
        {
          id: 'unit-amc-ch2',
          unitNumber: 2,
          title: '第 2 单元：指数与乘方',
          titleEn: 'Chapter 2: Exponents',
          badge: 'AoPS 伴读',
          summary: '逐页精学概念、独立挑战 Problem、核对 Checkpoints 并解锁核心数学卡片！',
          nodes: [
            {
              id: 'node-amc-2-1-squares',
              title: '2.1 Squares',
              titleEn: 'Section 2.1 Squares · Intro & Problems 2.1–2.9',
              shortDesc: '学习平方、完全平方数与运算顺序，完成 Problem 2.1–2.9 并解锁 12 张核心数学卡片',
              icon: 'Sparkles',
              xp: 80,
              blueprint: {
                title: 'Section 2.1 Squares · 逐页伴读',
                titleEn: 'AoPS Prealgebra Section 2.1 Squares',
                blocks: [],
                tip: '逐页完成概念与 Problem 2.1–2.9，确认学习完毕后进入下一页！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_2_1.section_id,
                section_title: AOPS_SECTION_2_1.title,
                mode: 'guided',
                pages: AOPS_SECTION_2_1.pages,
              },
            },
            {
              id: 'node-amc-2-2-higher-exponents',
              title: '2.2 Higher Exponents',
              titleEn: 'Section 2.2 Higher Exponents · Intro & Problems 2.10–2.20',
              shortDesc:
                '掌握正整数次幂、负数奇偶次幂与同底数指数法则，完成 Problem 2.10–2.20 并解锁 13 张核心数学卡片',
              icon: 'Zap',
              xp: 100,
              blueprint: {
                title: 'Section 2.2 Higher Exponents · 逐页伴读',
                titleEn: 'AoPS Prealgebra Section 2.2 Higher Exponents',
                blocks: [],
                tip: '逐页完成概念与 Problem 2.10–2.20，确认学习完毕后进入下一页！',
              },
              questions: [],
              amcData: {
                section_id: AOPS_SECTION_2_2.section_id,
                section_title: AOPS_SECTION_2_2.title,
                mode: 'guided',
                pages: AOPS_SECTION_2_2.pages,
              },
            },
          ],
        },
      ],
    },
  ],
};
