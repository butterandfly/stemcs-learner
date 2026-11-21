import React from 'react';
import {
  Map,
  Compass,
  BookOpen,
  Layers,
  GraduationCap,
  Clock,
  CheckCircle2,
  Sparkles,
  Target,
  Lightbulb,
  Calendar,
  Wrench,
  Telescope,
  HeartHandshake,
  Cpu,
  FlaskConical,
  Feather,
} from 'lucide-react';

interface StageBook {
  title: string;
  subtitle: string;
  tag: string;
  whatItTeaches: string;
  mindsetGain: string;
}

interface RoadmapStage {
  stage: string;
  badge: string;
  isCurrent?: boolean;
  title: string;
  gradeAge: string;
  duration: string;
  examNote: string;
  corePhilosophy: string;
  accentBg: string;
  accentBorder: string;
  badgeBg: string;
  tagBg: string;
  books: StageBook[];
  note: string;
}

const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stage: 'STAGE 00',
    badge: '小学启蒙前传（可选）',
    title: '数学好奇心与视觉化推理启蒙',
    gradeAge: '建议 1–5 年级（约 6–11 岁）',
    duration: '随小学同步推进',
    examNote: '无须功利刷赛，以培养数感与解谜乐趣为主',
    corePhilosophy:
      '用漫画故事和趣味谜题替代枯燥计算练习，让孩子从小爱上“想不通但想试试”的探索感。',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-200',
    badgeBg: 'bg-sky-600 text-white',
    tagBg: 'bg-sky-100 text-sky-800 border-sky-200',
    books: [
      {
        title: 'Beast Academy（Level 1 – Level 5）',
        subtitle: 'AoPS 官方小学全套漫画教材（含 Guide + Practice）',
        tag: '小学启蒙',
        whatItTeaches:
          '图形空间感、数独与逻辑推理、巧算与数感、分数与负数直觉、初步排列计数与面积剪拼。',
        mindsetGain: '打破“数学等于背口诀”的刻板印象，建立面对陌生问题敢于尝试的信心。',
      },
    ],
    note: '衔接说明：如果孩子已经 5 年级左右且校内算术扎实，无需回头补完 Beast Academy 全套，可直接进入 Stage 01 的 Prealgebra。',
  },
  {
    stage: 'STAGE 01',
    badge: '筑基与思维转型',
    isCurrent: true,
    title: '从“算数字”到“懂结构”：代数抽象与逻辑启蒙',
    gradeAge: '建议 5–7 年级（约 10–13 岁）',
    duration: '约 6–10 个月',
    examNote: '自然检验节点：AMC 8 基础与进阶',
    corePhilosophy:
      '告别死记硬背的运算套路，第一次用公理和变量去追问“为什么法则成立”，完成小学算术到中学数学的关键跨越。',
    accentBg: 'bg-indigo-50/70',
    accentBorder: 'border-indigo-200',
    badgeBg: 'bg-indigo-600 text-white',
    tagBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    books: [
      {
        title: 'AoPS Prealgebra',
        subtitle: '主线必学 · BitPi 当前伴读教材',
        tag: '核心基石',
        whatItTeaches:
          '算术公理体系、指数与乘方、整数整除与素数、分数/小数与方程不等式、比例百分数、基础平面几何（角度/面积/勾股定理）、计数与统计初步。',
        mindsetGain: '学会用字母表达普遍规律，理解“证明一个结论”与“举几个例子”的本质区别。',
      },
    ],
    note: '家长提示：这一阶段宁慢勿快。Prealgebra 是后续所有中学数学和竞赛的共同地基，把“为什么负负得正”“为什么能消去公因子”想透，远比提前赶进度重要。',
  },
  {
    stage: 'STAGE 02',
    badge: '中学数学四科支柱',
    title: '代数 · 几何 · 计数 · 数论：构建完整数学世界观',
    gradeAge: '建议 6–9 年级（约 11–15 岁）',
    duration: '约 1.5–2.5 年',
    examNote: '自然检验节点：AMC 8 高分 → AMC 10',
    corePhilosophy:
      '校内数学通常以代数和几何为主，而 AoPS 的四本 Introduction 教材把“离散数学（计数、概率、数论）”放到同等高度，让孩子看到数学真正的全貌。',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-200',
    badgeBg: 'bg-emerald-600 text-white',
    tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    books: [
      {
        title: 'Introduction to Algebra',
        subtitle: '四科之首 · 建议优先推进（前半部分即可衔接 AMC 8）',
        tag: '代数',
        whatItTeaches:
          '线性与二次方程、多项式、函数与图像、方程组、指数对数入门、数列与级数、复数概念及常见不等式。',
        mindsetGain: '训练符号操纵与抽象建模能力，学会把现实或几何问题翻译成方程与函数。',
      },
      {
        title: 'Introduction to Counting & Probability',
        subtitle: '离散思维训练 · 篇幅适中，可与代数并行',
        tag: '计数与概率',
        whatItTeaches:
          '分类与分步计数、排列组合、容斥原理、隔板法、递推思想、条件概率、几何概型与数学期望。',
        mindsetGain: '培养严密的分类讨论习惯，学会在不确定的世界里用量化逻辑做判断。',
      },
      {
        title: 'Introduction to Number Theory',
        subtitle: '纯数学逻辑启蒙 · 篇幅适中，极佳的思维体操',
        tag: '数论',
        whatItTeaches:
          '素数与唯一分解、最大公约数与辗转相除法、不同进制、同余与模运算、丢番图方程与经典数论定理。',
        mindsetGain: '体验最纯粹的逻辑推导乐趣，也为未来理解计算机编码与密码学打下直觉基础。',
      },
      {
        title: 'Introduction to Geometry',
        subtitle: '体系最庞大 · 建议代数稳固后精学',
        tag: '几何',
        whatItTeaches:
          '全等与相似、三角形性质与五心、圆与圆幂定理、面积法、解析几何初步与基础立体几何。',
        mindsetGain: '训练空间想象力、构造辅助线的创造力，以及从公理一步步严格演绎证明的能力。',
      },
      {
        title: 'AoPS Volume 1: The Basics',
        subtitle: '综合融会贯通读本（四科之后的串联与拔高）',
        tag: '综合串联',
        whatItTeaches:
          '把代数、几何、数论、计数四大板块打通融合，训练识别陌生综合题结构与寻找多种解法的能力。',
        mindsetGain: '从“分章做题”升级为“综合调用工具箱”，形成独立拆解复杂问题的自信。',
      },
    ],
    note: '推荐节奏：先学 Intro to Algebra 前半部分，再穿插 Counting & Probability 或 Number Theory 调剂思维；代数基本学完后再集中攻克 Intro to Geometry，最后用 Volume 1 串联复习。',
  },
  {
    stage: 'STAGE 03',
    badge: '高阶结构与大学前导',
    title: '深入抽象代数、高等组合、三角复数与微积分',
    gradeAge: '建议 8–12 年级（约 13–18 岁）',
    duration: '约 1.5–2.5 年',
    examNote: '自然检验节点：AMC 12 / AIME / 大学先修',
    corePhilosophy:
      '这一阶段不仅覆盖高中全部进阶数学与 AIME 深度工具，更直接架起通往大学数学、物理、计算机与工程研究的桥梁。',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-200',
    badgeBg: 'bg-amber-500 text-amber-950',
    tagBg: 'bg-amber-100 text-amber-900 border-amber-200',
    books: [
      {
        title: 'Intermediate Algebra',
        subtitle: '高阶代数与不等式核心',
        tag: '进阶代数',
        whatItTeaches:
          '高次多项式理论、复数代数与几何意义、圆锥曲线、递推数列、AM-GM/柯西等经典不等式与函数方程。',
        mindsetGain: '掌握高阶代数结构分析，学会在复杂表达式背后洞察对称性与不变量。',
      },
      {
        title: 'Intermediate Counting & Probability',
        subtitle: '高阶离散数学与组合工具',
        tag: '进阶组合',
        whatItTeaches:
          '高阶容斥、递推关系与特征方程、生成函数、图论初步与状态机概率建模。',
        mindsetGain: '接触大学离散数学与计算机算法的核心思想（状态转移、图结构与生成函数）。',
      },
      {
        title: 'Precalculus',
        subtitle: '三角、向量、矩阵与复数几何',
        tag: '微积分前导',
        whatItTeaches:
          '三角函数与恒等变换、极坐标与复数单位根、二维/三维向量与线性变换、矩阵与行列式基础。',
        mindsetGain: '将几何与代数深度统一，提前建立线性代数与物理矢量分析的核心直觉。',
      },
      {
        title: 'Calculus',
        subtitle: 'AoPS 官方出版的大学级微积分教材',
        tag: '微积分终章',
        whatItTeaches:
          '极限与连续、导数与微分、积分与微积分基本定理、泰勒级数与微分方程入门（兼顾直观与严谨证明）。',
        mindsetGain: '理解“变化率”与“无限累积”的数学语言，打开现代科学、物理、经济与人工智能的大门。',
      },
      {
        title: 'AoPS Volume 2: and Beyond',
        subtitle: '高阶综合思维读本',
        tag: '综合冲刺',
        whatItTeaches:
          '跨板块高难综合题策略、经典竞赛技巧归纳、构造法与反证法深度训练。',
        mindsetGain: '锻炼面对 30–60 分钟级深度难题的专注力、耐挫力与严谨书写的表达力。',
      },
    ],
    note: '说明：以上 Stage 00–03 已完整涵盖 AoPS 官方出版的全部主线纸质教材（共 11 套/本）。此外，AoPS 官网还提供 Olympiad Geometry、Group Theory、WOOT 等线上高阶专题课，供学有余力、志在奥赛或数学研究的学生选修。',
  },
];

const FOUR_STEP_METHOD = [
  {
    step: '01',
    title: 'Problems 先探索',
    en: 'Discover First',
    desc: '不提前背公式，先独立思考每节开头的 Problems（15–25 分钟），在试错与猜测中自己发现规律。',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    step: '02',
    title: '精读详解 & 提炼卡片',
    en: 'Read & Distill',
    desc: '对照教材解答与 BitPi 知识卡片，把核心定义、定理、策略与避坑点内化为自己的逻辑语言。',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    step: '03',
    title: 'Exercises 即时巩固',
    en: 'Practice & Verify',
    desc: '独立完成本节末尾 Exercises 并核对 Solutions Manual，检验刚理解的思想是否真正能迁移运用。',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    step: '04',
    title: 'Review & Challenge',
    en: 'Master & Stretch',
    desc: '章末用 Review 梳理知识网络，再挑做星号 Challenge 题，体会跳出舒适区的深度思考快感。',
    color: 'from-amber-500 to-orange-500',
  },
];

const SUMMARY_TABLE = [
  {
    stage: 'Stage 00 · 启蒙',
    grade: '1–5 年级 (6–11 岁)',
    books: 'Beast Academy (Level 1–5)',
    focus: '数感、空间直觉、逻辑谜题',
    exam: '培养兴趣，无须功利刷赛',
  },
  {
    stage: 'Stage 01 · 筑基',
    grade: '5–7 年级 (10–13 岁)',
    books: 'Prealgebra',
    focus: '算术公理、变量抽象、基础几何与数论',
    exam: '自然衔接 AMC 8',
  },
  {
    stage: 'Stage 02 · 四科支柱',
    grade: '6–9 年级 (11–15 岁)',
    books: 'Intro 四件套 (Algebra / C&P / NT / Geometry) + Vol. 1',
    focus: '完整搭建代数、几何、计数、数论四维体系',
    exam: '自然衔接 AMC 8 / AMC 10',
  },
  {
    stage: 'Stage 03 · 高阶前导',
    grade: '8–12 年级 (13–18 岁)',
    books: 'Intermediate Algebra / C&P + Precalculus + Calculus + Vol. 2',
    focus: '高阶结构、复数三角、微积分与大学先修',
    exam: '自然衔接 AMC 12 / AIME / 大学先修',
  },
];

const BEYOND_IDEAS = [
  {
    title: '大学数学的真正入口',
    subtitle: '从“算得快”走向“看结构”',
    icon: GraduationCap,
    color: 'bg-indigo-100 text-indigo-700',
    desc: '学完 AoPS 体系后，可以自然探索线性代数（Linear Algebra）、抽象代数（群/环/域）、离散数学与图论、初等实分析。这些课程不再追求解题巧技，而是教你欣赏数学大厦的统一结构。',
  },
  {
    title: '数学 × 计算机科学与 AI',
    subtitle: '把抽象逻辑变成可运行的创造力',
    icon: Cpu,
    color: 'bg-sky-100 text-sky-700',
    desc: '数论是现代密码学与信息安全的基石；计数与图论是算法竞赛（USACO / NOI）的核心；微积分、线性代数与概率论则直接构成了机器学习与人工智能的底层引擎。',
  },
  {
    title: '走向探索与小课题研究',
    subtitle: '面对没有标准答案的问题',
    icon: FlaskConical,
    color: 'bg-emerald-100 text-emerald-700',
    desc: '竞赛题永远有设定好的答案与限时，而真正的数学研究是自己提出问题、猜想规律、构造反例。高中阶段可关注 PROMYS、Ross、SUMaC 等探索型数学营，或尝试撰写一篇自己的数学小论文。',
  },
  {
    title: '阅读经典数学文化与方法论',
    subtitle: '与大师对话，滋养长远热爱',
    icon: Feather,
    color: 'bg-amber-100 text-amber-700',
    desc: '推荐适时穿插阅读波利亚《怎样解题（How to Solve It）》、保罗·洛克哈特《数学家的叹息》、库朗《什么是数学》等经典著作，理解数学作为人类思维艺术的美感与自由。',
  },
];

const CORE_PRINCIPLES = [
  {
    title: '竞赛是“体检”，不是终点',
    desc: 'AMC 和 AIME 是很好的阶段性反馈工具，用来检验思维漏洞与抗压能力；但学数学的终极收益是清晰严谨的思考习惯，它会在未来几十年的任何学科中持续产生复利。',
  },
  {
    title: '慢就是快，允许“卡壳”与留白',
    desc: '对着一道好题独立苦思 20 分钟却没做出来，大脑建立的神经连接远比 1 分钟看懂标准答案更珍贵。不要因为一时卡住就急于翻答案，也不要用刷题量掩盖思考深度。',
  },
  {
    title: '年级只是参考，成熟度才是坐标',
    desc: '每个孩子的抽象思维发育节奏不同。有人 5 年级就对 Prealgebra 游刃有余，有人 7 年级才突然开窍。尊重孩子自己的节奏，比盲目对标同龄人进度更重要。',
  },
];

export const AmcRoadmapView: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 bg-[#F8FAFC]">
      <div className="w-full max-w-4xl mx-auto space-y-9 pb-20">
        {/* 1. Hero Header */}
        <section className="rounded-3xl border-2 border-indigo-300/80 bg-gradient-to-r from-indigo-50 via-violet-50 to-sky-50/80 p-6 md:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl bg-indigo-400/15 border border-indigo-300/40 hidden sm:flex items-center justify-center text-5xl select-none pointer-events-none">
            🗺️
          </div>

          <div className="sm:pr-28">
            <div className="flex items-center gap-2.5 flex-wrap mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-600 text-white shadow-sm">
                <Map className="w-3.5 h-3.5" />
                <span>AoPS 全套教材与成长路线</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white/90 text-indigo-800 border border-indigo-200">
                Beast Academy → Prealgebra → Intro → Intermediate → Calculus
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug">
              AMC 方向 AoPS 课程学习安排与数学成长指南
            </h1>
            <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
              AoPS（Art of Problem Solving）不仅是备战 AMC 的经典教材，更是一套以“发现与证明”为核心的完整数学教育体系。下面按年级参考完整梳理了 AoPS 官方全部 11 套主线教材教什么、怎么学，以及学完之后的数学探索方向。
            </p>
          </div>
        </section>

        {/* 2. AoPS 4-Step Learning Method */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                AoPS 核心学习法：先探索，再归纳
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                与传统“先背定理再套题”相反，每一节（Section）均按以下 4 步让孩子主动发现数学规律
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {FOUR_STEP_METHOD.map((item) => (
              <div
                key={item.step}
                className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black text-white bg-gradient-to-r ${item.color} shadow-xs`}
                    >
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {item.en}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-sm text-slate-800 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Full AoPS Progression Stages */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                AoPS 全套教材分阶段安排（含年级参考与能力培养）
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                完整覆盖 AoPS 官方出版的 11 套主线教材；年级仅为常见参考区间，请以孩子的思维成熟度为准
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {ROADMAP_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className={`rounded-3xl border-2 ${stage.accentBorder} ${stage.accentBg} p-5 md:p-6 shadow-xs space-y-4`}
              >
                {/* Stage Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-black shadow-2xs ${stage.badgeBg}`}
                      >
                        {stage.stage} · {stage.badge}
                      </span>
                      {stage.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-display font-black bg-white text-indigo-700 border border-indigo-300 shadow-2xs">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>当前所在阶段</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-black text-slate-900">
                      {stage.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                      {stage.corePhilosophy}
                    </p>
                  </div>

                  {/* Grade / Duration / Exam Reference Pills */}
                  <div className="flex flex-col gap-1.5 shrink-0 md:items-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200 text-xs font-display font-black text-slate-800">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{stage.gradeAge}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/85 border border-slate-200 text-xs font-mono font-bold text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>建议周期：{stage.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/75 border border-slate-200/80 text-[11px] font-bold text-slate-500">
                      <Target className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{stage.examNote}</span>
                    </div>
                  </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {stage.books.map((book) => (
                    <div
                      key={book.title}
                      className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                          <h4 className="font-display font-black text-sm text-slate-900 leading-snug">
                            {book.title}
                          </h4>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border shrink-0 ${stage.tagBg}`}
                        >
                          {book.tag}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono font-bold text-slate-400">
                        {book.subtitle}
                      </div>
                      <div className="space-y-1.5 text-xs leading-relaxed">
                        <p className="text-slate-700 font-medium">
                          <span className="font-display font-black text-slate-800">核心内容：</span>
                          {book.whatItTeaches}
                        </p>
                        <p className="text-slate-600 font-medium">
                          <span className="font-display font-black text-indigo-700">思维收获：</span>
                          {book.mindsetGain}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stage Note */}
                <div className="bg-white/85 rounded-2xl border border-slate-200/80 px-4 py-3 flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {stage.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Overview Comparison Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                全阶段年级与教材速查表
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                一览各阶段适用年级、AoPS 教材、数学重点与自然衔接的竞赛检验节点
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4">阶段</th>
                    <th className="py-3.5 px-4">建议年级 / 年龄</th>
                    <th className="py-3.5 px-4">AoPS 主线教材</th>
                    <th className="py-3.5 px-4">核心数学成长</th>
                    <th className="py-3.5 px-4">自然检验节点</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {SUMMARY_TABLE.map((row) => (
                    <tr key={row.stage} className="align-top">
                      <td className="py-3.5 px-4 font-display font-black text-slate-800 whitespace-nowrap">
                        {row.stage}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 whitespace-nowrap">
                        {row.grade}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium leading-relaxed">
                        {row.books}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium leading-relaxed">
                        {row.focus}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">
                        {row.exam}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Weekly Schedule & Companion Toolkit */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Weekly Rhythm */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-2xs space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-display font-black text-slate-800">
                  推荐每周学习节奏
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">
                  少量高频、重思考质量，保护孩子的长期好奇心
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80">
                <div className="font-display font-black text-sky-900 mb-1">
                  周一至周五 · 每天 30–45 分钟
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  推进 0.5–1 个 Section：一天专攻 Problems 独立思考与卡片整理，次日完成对应 Exercises 巩固，不赶进度。
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-violet-50/70 border border-violet-200/80">
                <div className="font-display font-black text-violet-900 mb-1">
                  周六 / 周日 · 60–90 分钟深度块
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  安静攻克章末 Review &amp; Challenge 难题，或在 Alcumus 上做主题巩固与本周思路复盘。
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="font-display font-black text-amber-900 mb-1">
                  考前 1–2 个月 · 轻量体检期
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  每周做 1 套对应级别历年真题熟悉节奏，重点在于复盘“没想到哪一步”，而不是盲目刷题海。
                </p>
              </div>
            </div>
          </div>

          {/* Official Companion Resources */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-2xs space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-display font-black text-slate-800">
                  配套工具与使用原则
                </h2>
                <p className="text-[11px] text-slate-500 font-medium">
                  纸质教材为主线，数字工具辅助巩固与沉淀
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    AoPS 实体教材 + Solutions Manual：
                  </span>
                  <span>
                    主线核心。每题先在草稿纸上独立推演，再对照详解核对思路，尤其欣赏书里“更优雅的第二解法”。
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    BitPi 伴读与全局知识图鉴 (Codex)：
                  </span>
                  <span>
                    配合实体书逐节打卡，把零散的定义、公理、策略与避坑点沉淀为属于自己的结构化知识卡片库。
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    Alcumus（AoPS 官方免费自适应题库）：
                  </span>
                  <span>
                    与教材章节一一对应，学完一章即可做对应主题练习，动态调整难度，保持良好题感。
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    AoPS Wiki &amp; 社区：
                  </span>
                  <span>
                    收录历年 AMC / AIME 真题与全球学生的多种解法讨论，是拓展一题多解视野的宝库。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Beyond AoPS & Philosophy */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
              <Telescope className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                在这之后呢？超越竞赛的数学探索与成长理念
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                AoPS 只是推开数学世界的第一扇门，真正的精彩在门后的广阔天地
              </p>
            </div>
          </div>

          {/* 4 Future Exploration Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BEYOND_IDEAS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border-2 border-slate-200/90 rounded-3xl p-5 shadow-2xs space-y-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-sm text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-mono font-bold text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Core Mindset & Philosophy Card */}
          <div className="rounded-3xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/60 p-5 md:p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-xs">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-black text-base text-slate-900">
                  给家长与孩子的三条长远理念
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  比起短期分数，以下三点更能决定孩子能走多远
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {CORE_PRINCIPLES.map((principle, idx) => (
                <div
                  key={principle.title}
                  className="bg-white/90 rounded-2xl border border-violet-200/70 p-4 space-y-1.5"
                >
                  <div className="text-[11px] font-mono font-black text-violet-600">
                    PRINCIPLE 0{idx + 1}
                  </div>
                  <h4 className="font-display font-black text-sm text-slate-900">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
