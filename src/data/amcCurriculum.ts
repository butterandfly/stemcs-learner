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
          formula: 'Convert Subtraction to Addition',
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

export const AOPS_SECTIONS: AmcSectionData[] = [
  AOPS_SECTION_1_2,
  AOPS_SECTION_1_3,
  AOPS_SECTION_1_4,
  AOPS_SECTION_1_5,
  AOPS_SECTION_1_6,
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
          ],
        },
      ],
    },
  ],
};
