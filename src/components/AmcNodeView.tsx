import React, { useState } from 'react';
import {
  X,
  Check,
  Gift,
  Sparkles,
  BookOpen,
  BookMarked,
  CheckCircle2,
  ArrowRight,
  Lock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LearningNode } from '../types';
import { AmcCardItem, getAmcCardTheme } from './AmcCardItem';
import { sound } from '../audio/sound';

interface AmcNodeViewProps {
  node: LearningNode;
  completedTaskIds: string[];
  unlockedCardIds: string[];
  onToggleTask: (taskId: string, cardIdsToUnlock: string[]) => boolean;
  onOpenCodex: () => void;
  onClose: () => void;
  onComplete: (xpEarned: number) => void;
}

export const AmcNodeView: React.FC<AmcNodeViewProps> = ({
  node,
  completedTaskIds,
  unlockedCardIds,
  onToggleTask,
  onOpenCodex,
  onClose,
  onComplete,
}) => {
  const [newlyUnlockedIds, setNewlyUnlockedIds] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const amcData = node.amcData;
  if (!amcData) return null;

  const isProblemsMode = amcData.mode === 'problems';
  const problemList = amcData.problem_list || [];
  const exerciseList = amcData.exercise_list || [];

  const totalTasks = isProblemsMode ? problemList.length : exerciseList.length;
  const completedCount = isProblemsMode
    ? problemList.filter((p) => completedTaskIds.includes(p.id)).length
    : exerciseList.filter((e) => completedTaskIds.includes(e.id)).length;

  const allTasksCompleted = totalTasks > 0 && completedCount === totalTasks;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  // All cards in this section
  const sectionCards = problemList.flatMap((p) =>
    p.cards.map((card) => ({
      card,
      problemId: p.id,
      problemLabel: p.label,
    }))
  );
  const unlockedSectionCardCount = sectionCards.filter((item) =>
    unlockedCardIds.includes(item.card.card_id)
  ).length;

  const handleTaskClick = (taskId: string, cardIds: string[]) => {
    const nowChecked = onToggleTask(taskId, cardIds);
    if (nowChecked) {
      if (cardIds.length > 0) {
        sound.playSuccess();
        setNewlyUnlockedIds(cardIds);
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
        });
      } else {
        sound.playSnap();
      }
    } else {
      sound.playPop();
      setNewlyUnlockedIds((prev) => prev.filter((id) => !cardIds.includes(id)));
    }
  };

  const handleFinishNode = () => {
    if (!allTasksCompleted) return;
    sound.playLevelUp();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
    setIsFinished(true);
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col items-center justify-center p-6 animate-fade-in select-none">
        <div className="max-w-md w-full bg-white border-2 border-indigo-200 rounded-3xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-tr from-indigo-500 to-amber-400 flex items-center justify-center text-4xl shadow-lg">
            🏆
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
            Section {amcData.section_id} · {isProblemsMode ? '探索打卡完成' : '练习打卡完成'}
          </span>
          <h2 className="text-2xl font-display font-black text-slate-900 mt-3 mb-2">
            {node.title} 全部打卡达成！
          </h2>
          <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
            {isProblemsMode
              ? `你已完成全部 ${totalTasks} 道探索题，成功将 ${sectionCards.length} 张核心数学卡片收入全局图鉴！`
              : `你已独立完成全部 ${totalTasks} 道巩固练习，扎实掌握了 ${amcData.section_title}！`}
          </p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6 flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="font-display font-black text-lg text-amber-950">
              +{node.xp} XP 经验值到账
            </span>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onComplete(node.xp);
            }}
            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-display font-black text-base shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>返回学习地图</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col overflow-hidden select-none animate-fade-in">
      {/* 1. Top Bar */}
      <header className="shrink-0 h-16 px-4 md:px-8 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all active:scale-95 shrink-0 cursor-pointer"
            title="返回地图"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                AoPS {amcData.section_id}
              </span>
              <h1 className="font-display font-black text-base md:text-lg text-slate-900 truncate">
                {amcData.section_title} · {node.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Center Progress Bar */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 shrink-0">
            {completedCount} / {totalTasks}
          </span>
        </div>

        {/* Right: Global Codex Button */}
        <button
          onClick={() => {
            sound.playPop();
            onOpenCodex();
          }}
          className="px-3.5 py-2 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border-2 border-indigo-200 font-display font-black text-xs md:text-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer shrink-0 shadow-2xs"
        >
          <BookMarked className="w-4 h-4 text-indigo-600" />
          <span>全局图鉴 (Codex)</span>
          <span className="px-1.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono text-[10px]">
            {unlockedSectionCardCount}/{sectionCards.length}
          </span>
        </button>
      </header>

      {/* 2. Dual-Column Body: Left Todo List + Right Knowledge Cards */}
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        {/* Left Column: Physical Book Todo Checklist (45% width on desktop/iPad landscape) */}
        <div className="w-full lg:w-[44%] h-1/2 lg:h-full overflow-y-auto p-5 md:p-7 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white flex flex-col">
          {/* Dual-Track Companion Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-sky-50 to-indigo-50/60 border border-indigo-200/80 mb-5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-indigo-800 uppercase tracking-wider mb-0.5">
                {isProblemsMode ? 'Step 1 · 探索题伴读打卡' : 'Step 2 · 巩固练习打卡'}
              </div>
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                {isProblemsMode
                  ? '翻开实体教材《AoPS Prealgebra》Section 1.2，在纸上独立算完每道 Problem 后打勾，立即拆开对应的知识盲盒！'
                  : '翻开实体教材《AoPS Prealgebra》Section 1.2 末尾，独立完成每道 Exercise 后打勾。右侧已为你备好本节核心知识卡！'}
              </p>
            </div>
          </div>

          {/* Todo Items List */}
          <div className="space-y-3 flex-1">
            {isProblemsMode
              ? problemList.map((problem) => {
                  const isChecked = completedTaskIds.includes(problem.id);
                  const cardIds = problem.cards.map((c) => c.card_id);
                  const hasCards = problem.cards.length > 0;

                  return (
                    <button
                      key={problem.id}
                      onClick={() => handleTaskClick(problem.id, cardIds)}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer active:scale-[0.99] ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-400 shadow-xs'
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Tactile Checkbox */}
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                            isChecked
                              ? 'bg-emerald-500 text-white shadow-xs scale-105'
                              : 'bg-white border-2 border-slate-300 text-transparent'
                          }`}
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>

                        <div className="min-w-0">
                          <div
                            className={`font-display font-black text-base transition-colors ${
                              isChecked ? 'text-emerald-950' : 'text-slate-800'
                            }`}
                          >
                            {problem.label}
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">
                            {hasCards
                              ? isChecked
                                ? `已解锁 ${problem.cards.length} 张知识卡`
                                : `完成打卡可拆开 ${problem.cards.length} 个知识盲盒`
                              : '基础探索热身（无盲盒掉落）'}
                          </div>
                        </div>
                      </div>

                      {/* Right Blind Box / Unlocked Badges */}
                      <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                        {hasCards ? (
                          isChecked ? (
                            problem.cards.map((c) => {
                              const theme = getAmcCardTheme(c.type);
                              return (
                                <span
                                  key={c.card_id}
                                  className={`px-2.5 py-1 rounded-xl text-[11px] font-display font-bold flex items-center gap-1 shadow-2xs ${theme.badgeBg} ${theme.badgeText}`}
                                >
                                  {theme.icon}
                                  <span>{theme.label}</span>
                                </span>
                              );
                            })
                          ) : (
                            <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-mono font-bold text-xs flex items-center gap-1.5 shadow-2xs">
                              <Gift className="w-3.5 h-3.5 text-amber-600" />
                              <span>盲盒 ×{problem.cards.length}</span>
                            </span>
                          )
                        ) : (
                          <span className="px-2.5 py-1 rounded-xl bg-slate-200/70 text-slate-600 font-mono font-bold text-[11px]">
                            纯打卡
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              : exerciseList.map((exercise) => {
                  const isChecked = completedTaskIds.includes(exercise.id);
                  return (
                    <button
                      key={exercise.id}
                      onClick={() => handleTaskClick(exercise.id, [])}
                      className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer active:scale-[0.99] ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-400 shadow-xs'
                          : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                            isChecked
                              ? 'bg-emerald-500 text-white shadow-xs scale-105'
                              : 'bg-white border-2 border-slate-300 text-transparent'
                          }`}
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <div>
                          <div
                            className={`font-display font-black text-base ${
                              isChecked ? 'text-emerald-950' : 'text-slate-800'
                            }`}
                          >
                            {exercise.label}
                          </div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">
                            {isChecked ? '已完成实体书练习打卡' : '在实体书上完成本题后点击打卡'}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-xl font-mono font-bold text-xs ${
                          isChecked
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-slate-200/70 text-slate-500'
                        }`}
                      >
                        {isChecked ? '✓ 已打卡' : '巩固练习'}
                      </span>
                    </button>
                  );
                })}
          </div>
        </div>

        {/* Right Column: Blind-Box Knowledge Cards Showcase (56% width on desktop/iPad landscape) */}
        <div className="w-full lg:w-[56%] h-1/2 lg:h-full overflow-y-auto p-5 md:p-7 bg-[#F8FAFC] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h3 className="font-display font-black text-base md:text-lg text-slate-800">
                {isProblemsMode
                  ? `本节知识盲盒图鉴 (${unlockedSectionCardCount} / ${sectionCards.length})`
                  : `Section ${amcData.section_id} 知识速查卡 (${unlockedSectionCardCount} / ${sectionCards.length})`}
              </h3>
            </div>

            {unlockedSectionCardCount < sectionCards.length && (
              <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                <span>剩余 {sectionCards.length - unlockedSectionCardCount} 张待拆封</span>
              </span>
            )}
          </div>

          <div className="space-y-4 pb-6">
            {sectionCards.map(({ card, problemLabel }) => {
              const isUnlocked = unlockedCardIds.includes(card.card_id);
              const isNewlyUnlocked = newlyUnlockedIds.includes(card.card_id);

              return (
                <AmcCardItem
                  key={card.card_id}
                  card={card}
                  isUnlocked={isUnlocked}
                  sourceLabel={problemLabel}
                  isNewlyUnlocked={isNewlyUnlocked}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Bottom Completion Bar */}
      <footer className="shrink-0 px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <CheckCircle2
            className={`w-5 h-5 ${
              allTasksCompleted ? 'text-emerald-500' : 'text-slate-400'
            }`}
          />
          <span className="text-xs md:text-sm font-display font-bold text-slate-700">
            {allTasksCompleted
              ? `太棒了！本节全部 ${totalTasks} 项任务已打卡完毕！`
              : `当前进度：已完成 ${completedCount} / ${totalTasks} 项（全部打勾后即可完成本关）`}
          </span>
        </div>

        <button
          disabled={!allTasksCompleted}
          onClick={handleFinishNode}
          className={`px-6 py-3 rounded-2xl font-display font-black text-sm md:text-base transition-all flex items-center gap-2 ${
            allTasksCompleted
              ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-md cursor-pointer active:scale-95'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>完成本节打卡 (+{node.xp} XP)</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </footer>
    </div>
  );
};
