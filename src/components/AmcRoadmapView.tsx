import React from 'react';
import {
  Map,
  Compass,
  BookOpen,
  Layers,
  Trophy,
  Clock,
  CheckCircle2,
  Sparkles,
  Target,
  Lightbulb,
  Calendar,
  Wrench,
} from 'lucide-react';

interface StageBook {
  title: string;
  subtitle: string;
  tag: string;
  focus: string;
}

interface RoadmapStage {
  stage: string;
  badge: string;
  isCurrent?: boolean;
  title: string;
  targetExam: string;
  duration: string;
  goal: string;
  accentBg: string;
  accentBorder: string;
  badgeBg: string;
  tagBg: string;
  books: StageBook[];
  note: string;
}

const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stage: 'STAGE 01',
    badge: '筑基与思维转型',
    isCurrent: true,
    title: '算术公理与竞赛入门 · 备战 AMC 8',
    targetExam: 'AMC 8（目标 18+ / 荣誉榜前 5% / DHR 前 1%）',
    duration: '约 6–10 个月',
    goal: '脱离死记硬背，建立代数抽象、基础数论、计数与几何推导思维。',
    accentBg: 'bg-indigo-50/70',
    accentBorder: 'border-indigo-200',
    badgeBg: 'bg-indigo-600 text-white',
    tagBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    books: [
      {
        title: 'AoPS Prealgebra',
        subtitle: '主线必学 · BitPi 当前伴读教材',
        tag: '核心基石',
        focus:
          '算术公理、指数与乘方、数论基础（整除/素数/GCD-LCM）、分数与方程、比例百分数、基础平面几何（角度/面积/勾股定理）、计数与统计初步。',
      },
      {
        title: 'Intro to Algebra（前半部分 Ch 1–13）',
        subtitle: '衔接拓展 · 冲刺 AMC 8 高分',
        tag: '代数进阶',
        focus:
          '一次方程与不等式、线性函数图像、方程组、比值与比例应用、二次方程初步，显著提升代数变形速度。',
      },
      {
        title: 'Intro to Counting & Number Theory（基础章节）',
        subtitle: '竞赛专项 · 补齐校内缺失板块',
        tag: '竞赛提分',
        focus:
          '乘法/加法原理、基础排列组合、分类讨论、整除特征与余数入门，直接覆盖 AMC 8 后 5 题高频考点。',
      },
    ],
    note: '学习建议：Prealgebra 务必逐节完成 Problems 并整理知识卡片，不要跳过证明类问题；这是后续四本 Introduction 教材的地基。',
  },
  {
    stage: 'STAGE 02',
    badge: '四科支柱全面构建',
    title: '四大板块系统进阶 · 备战 AMC 10 & 晋级 AIME',
    targetExam: 'AMC 10（目标 100+ / 晋级 AIME 前 2.5% / DHR 前 1%）',
    duration: '约 12–18 个月',
    goal: '完整搭建代数、几何、计数概率、数论四大竞赛知识体系，具备综合拆题能力。',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-200',
    badgeBg: 'bg-emerald-600 text-white',
    tagBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    books: [
      {
        title: 'Introduction to Algebra（全书）',
        subtitle: '四科之首 · 优先推进',
        tag: '代数',
        focus:
          '多项式、二次函数与韦达定理、复数基础、指数与对数入门、数列与级数、函数概念与常见不等式。',
      },
      {
        title: 'Introduction to Counting & Probability',
        subtitle: '性价比极高的提分板块',
        tag: '计数与概率',
        focus:
          '组合恒等式、容斥原理、隔板法、递推计数、条件概率、几何概型与数学期望。',
      },
      {
        title: 'Introduction to Number Theory',
        subtitle: '竞赛思维核心训练',
        tag: '数论',
        focus:
          '素数分解、辗转相除法、进制转换、同余与模运算、中国剩余定理、欧拉/费马小定理与不定方程。',
      },
      {
        title: 'Introduction to Geometry',
        subtitle: '体系最庞大 · 建议搭配画图精学',
        tag: '几何',
        focus:
          '全等与相似、三角形五心、圆与圆幂定理、面积法、解析几何与基础立体几何。',
      },
    ],
    note: '推荐顺序：先推进 Intro to Algebra，同时穿插 Counting & Probability 或 Number Theory（两本篇幅适中）；代数基础稳固后集中攻克 Intro to Geometry，考前配合《AoPS Volume 1: The Basics》与近 10 年 AMC 10 真题模考。',
  },
  {
    stage: 'STAGE 03',
    badge: '高阶竞赛冲刺',
    title: '深度专题与综合突破 · 备战 AMC 12 & AIME',
    targetExam: 'AMC 12（晋级 AIME 前 5%）& AIME（目标 7–10+ 分）',
    duration: '约 12–18 个月',
    goal: '补齐三角、复数、高等代数与组合工具，训练 3 小时 15 题的 AIME 深度推演耐力。',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-200',
    badgeBg: 'bg-amber-500 text-amber-950',
    tagBg: 'bg-amber-100 text-amber-900 border-amber-200',
    books: [
      {
        title: 'Intermediate Algebra',
        subtitle: '高阶代数核心',
        tag: '进阶代数',
        focus:
          '高次多项式、复数运算与根的分布、圆锥曲线、递推数列、AM-GM/柯西等经典不等式与函数方程。',
      },
      {
        title: 'Precalculus',
        subtitle: 'AMC 12 必考增量板块',
        tag: '三角与复数',
        focus:
          '三角恒等变换、正余弦定理进阶、复数的三角/极坐标形式与单位根、向量与矩阵基础。',
      },
      {
        title: 'Intermediate Counting & Probability',
        subtitle: 'AIME 中后段决胜工具',
        tag: '进阶组合',
        focus:
          '递推关系与特征方程、生成函数、图论初步、状态机概率与高阶容斥。',
      },
      {
        title: 'AoPS Volume 2: and Beyond',
        subtitle: '综合技巧与真题衔接',
        tag: '综合冲刺',
        focus:
          '串联代数、数论、组合与几何的跨板块难题技巧，配合 AMC 12 与 AIME 历年真题专题复盘。',
      },
    ],
    note: '冲刺建议：AIME 全为 000–999 整数填空题，无选项可蒙，极度考验计算准确度与严谨推导；建议建立错题本并每周进行 1 次定时精刷。',
  },
];

const FOUR_STEP_METHOD = [
  {
    step: '01',
    title: 'Problems 先探索',
    en: 'Discover First',
    desc: '不提前看定理，直接独立尝试每节开头的 Problems（15–25 分钟），在试错中主动发现规律。',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    step: '02',
    title: '精读详解 & 提炼卡片',
    en: 'Read & Distill',
    desc: '对照教材解答与 BitPi 知识卡片，把 Definition、Important、Concept 与 Warning 内化为自己的武器。',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    step: '03',
    title: 'Exercises 即时巩固',
    en: 'Practice & Verify',
    desc: '独立完成本节末尾 Exercises，核对 Solutions Manual，确保刚刚掌握的定理能准确落地。',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    step: '04',
    title: 'Review & Challenge',
    en: 'Master & Stretch',
    desc: '每章收尾完成 Review 查漏补缺，再挑做带星号 Challenge 题，提前适应 AMC 压轴题难度。',
    color: 'from-amber-500 to-orange-500',
  },
];

const SUMMARY_TABLE = [
  {
    stage: '阶段一 · 筑基',
    exam: 'AMC 8',
    books: 'Prealgebra + Intro Algebra (前半) / Counting & NT 入门',
    cycle: '6–10 个月',
    target: '建立证明思维，冲击 AMC 8 荣誉榜 (前 5% / 1%)',
  },
  {
    stage: '阶段二 · 四科支柱',
    exam: 'AMC 10',
    books: 'Intro 四件套 (Algebra / Geometry / C&P / NT) + Vol. 1',
    cycle: '12–18 个月',
    target: '四板块无短板，稳定晋级 AIME (前 2.5%)',
  },
  {
    stage: '阶段三 · 高阶冲刺',
    exam: 'AMC 12 / AIME',
    books: 'Intermediate Algebra / C&P + Precalculus + Vol. 2',
    cycle: '12–18 个月',
    target: 'AMC 12 高分 + AIME 7–10+ 分，冲击 USA(J)MO',
  },
];

export const AmcRoadmapView: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 bg-[#F8FAFC]">
      <div className="w-full max-w-4xl mx-auto space-y-8 pb-20">
        {/* 1. Hero Header */}
        <section className="rounded-3xl border-2 border-indigo-300/80 bg-gradient-to-r from-indigo-50 via-violet-50 to-sky-50/80 p-6 md:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl bg-indigo-400/15 border border-indigo-300/40 hidden sm:flex items-center justify-center text-5xl select-none pointer-events-none">
            🗺️
          </div>

          <div className="sm:pr-28">
            <div className="flex items-center gap-2.5 flex-wrap mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-600 text-white shadow-sm">
                <Map className="w-3.5 h-3.5" />
                <span>AMC · AoPS 学习路线图</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white/90 text-indigo-800 border border-indigo-200">
                Prealgebra → AMC 8 → AMC 10 → AMC 12 / AIME
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug">
              AMC 方向 AoPS 课程学习安排
            </h1>
            <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
              AoPS（Art of Problem Solving）是全球 AMC 竞赛最经典的自研教材体系。以下整理了从入门筑基到冲刺 AIME 的完整阶段规划、教材顺序、单节学习法与周节奏建议，供随时对照查阅。
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
                每一节（Section）均按以下 4 步循环推进，确保真正吃透底层原理
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

        {/* 3. Three-Stage Progression */}
        <section className="space-y-5">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                三阶段教材与课程进阶安排
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                按数学思维成熟度螺旋上升，涵盖代数、几何、计数概率、数论四大竞赛板块
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
                    <p className="text-xs md:text-sm text-slate-600 font-medium">
                      {stage.goal}
                    </p>
                  </div>

                  {/* Target & Duration Pills */}
                  <div className="flex flex-col gap-1.5 shrink-0 md:items-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-700">
                      <Target className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{stage.targetExam}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/80 border border-slate-200 text-xs font-mono font-bold text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>建议周期：{stage.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {stage.books.map((book) => (
                    <div
                      key={book.title}
                      className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2"
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
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {book.focus}
                      </p>
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
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-display font-black text-slate-800">
                全阶段路线速查表
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                快速对照各阶段目标竞赛、主线教材与周期预期
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4">阶段</th>
                    <th className="py-3.5 px-4">目标竞赛</th>
                    <th className="py-3.5 px-4">核心 AoPS 教材</th>
                    <th className="py-3.5 px-4">建议周期</th>
                    <th className="py-3.5 px-4">核心目标</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {SUMMARY_TABLE.map((row) => (
                    <tr key={row.stage} className="align-top">
                      <td className="py-3.5 px-4 font-display font-black text-slate-800 whitespace-nowrap">
                        {row.stage}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-indigo-700 whitespace-nowrap">
                        {row.exam}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium leading-relaxed">
                        {row.books}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-600 whitespace-nowrap">
                        {row.cycle}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium leading-relaxed">
                        {row.target}
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
                  少量高频、重思考质量，避免疲劳战术
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/80">
                <div className="font-display font-black text-sky-900 mb-1">
                  周一至周五 · 每天 30–45 分钟
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  推进 0.5–1 个 Section：一天专攻 Problems 探索与卡片整理，次日完成对应 Exercises 巩固，保持连续思考惯性。
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-violet-50/70 border border-violet-200/80">
                <div className="font-display font-black text-violet-900 mb-1">
                  周六 / 周日 · 60–90 分钟深度块
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  集中攻克章末 Review &amp; Challenge 难题，或进行 Alcumus 专题刷题与本周错题复盘。
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="font-display font-black text-amber-900 mb-1">
                  考前 2–3 个月 · 真题模考期
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  每周完成 1–2 套对应级别历年真题（严格计时），重点分析失分题型并回看教材对应章节。
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
                  纸质教材为主线，数字工具辅助巩固与打卡
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
                    主线核心。每题务必先在草稿纸上独立推演，再对照详解核对思路差异，尤其关注“更巧妙的第二解法”。
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
                    配合实体书逐节打卡，将零散的定义、公理、巧算策略与避坑点沉淀为结构化卡片库，方便考前速览。
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    Alcumus（AoPS 官方自适应题库）：
                  </span>
                  <span>
                    与教材章节一一对应，学完一章即可在 Alcumus 刷对应主题，动态提升题目难度并保持手感。
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-black text-slate-800">
                    AoPS Wiki 历年真题库：
                  </span>
                  <span>
                    收录全部 AMC 8 / 10 / 12 / AIME 历年真题与多种解法，适合考前冲刺与一题多解拓展。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
