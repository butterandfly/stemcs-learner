import React, { useState, useRef } from 'react';
import {
  X,
  Check,
  Gift,
  Sparkles,
  BookOpen,
  BookMarked,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  ListChecks,
  Link2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LearningNode } from '../types';
import { ALL_AMC_CODEX_CARDS } from '../data/amcCurriculum';
import { AmcCardItem, getAmcCardTheme } from './AmcCardItem';
import { MathText } from './MathText';
import { sound } from '../audio/sound';

interface AmcGuidedViewProps {
  node: LearningNode;
  completedTaskIds: string[];
  unlockedCardIds: string[];
  onToggleTask: (taskId: string, cardIdsToUnlock: string[]) => boolean;
  onUnlockCards?: (cardIds: string[]) => void;
  onOpenCodex: () => void;
  onClose: () => void;
  onComplete: (xpEarned: number) => void;
}

export const AmcGuidedView: React.FC<AmcGuidedViewProps> = ({
  node,
  completedTaskIds,
  unlockedCardIds,
  onToggleTask,
  onUnlockCards,
  onOpenCodex,
  onClose,
  onComplete,
}) => {
  const amcData = node.amcData;
  const pages = amcData?.pages || [];

  // Resume at first uncompleted page (or 0 if all completed)
  const initialIndex = Math.max(
    0,
    pages.findIndex((p) => !completedTaskIds.includes(p.id))
  );

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [newlyUnlockedIds, setNewlyUnlockedIds] = useState<string[]>([]);
  const [expandedRelatedIds, setExpandedRelatedIds] = useState<string[]>([]);
  const [checkedCheckpoints, setCheckedCheckpoints] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!amcData || pages.length === 0) return null;

  const currentPage = pages[currentIndex];
  const isLastPage = currentIndex === pages.length - 1;
  const isCurrentCompleted = completedTaskIds.includes(currentPage.id);

  // All cards across all pages in this node
  const sectionCards = pages.flatMap((p) =>
    p.cards.map((card) => ({
      card,
      pageId: p.id,
      pageLabel: p.title,
    }))
  );
  const unlockedSectionCardCount = sectionCards.filter((item) =>
    unlockedCardIds.includes(item.card.card_id)
  ).length;

  const pageCardIds = currentPage.cards.map((c) => c.card_id);
  const arePageCardsUnlocked =
    pageCardIds.length > 0 && pageCardIds.every((id) => unlockedCardIds.includes(id));

  // On concept/intro pages, cards are always visible for reading;
  // On problem pages, cards stay folded as blind boxes until revealed or unlocked.
  const shouldShowCardsUnlocked =
    currentPage.type === 'concept' || arePageCardsUnlocked;

  // Lookup related cards from global codex
  const relatedCards = (currentPage.relatedCardIds || [])
    .map((id) => ALL_AMC_CODEX_CARDS.find((entry) => entry.card.card_id === id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const checkpoints = currentPage.checkpoints || [];
  const checkedCheckpointCount = checkpoints.filter(
    (_, idx) => checkedCheckpoints[`${currentPage.id}-${idx}`]
  ).length;

  const goToPage = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= pages.length) return;
    setCurrentIndex(targetIndex);
    setShowSolution(false);
    setExpandedRelatedIds([]);
    setNewlyUnlockedIds([]);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRevealProblemCards = () => {
    if (pageCardIds.length === 0) return;
    sound.playSuccess();
    onUnlockCards?.(pageCardIds);
    setNewlyUnlockedIds(pageCardIds);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  const handleToggleCheckpoint = (idx: number) => {
    const key = `${currentPage.id}-${idx}`;
    setCheckedCheckpoints((prev) => {
      const next = !prev[key];
      if (next) {
        sound.playSnap();
      } else {
        sound.playPop();
      }
      return { ...prev, [key]: next };
    });
  };

  const handleToggleRelatedCard = (cardId: string) => {
    sound.playPop();
    setExpandedRelatedIds((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  const handleConfirmPage = () => {
    // 1. Mark current page completed (without unchecking if already done)
    if (!isCurrentCompleted) {
      onToggleTask(currentPage.id, pageCardIds);
    } else if (pageCardIds.length > 0 && !arePageCardsUnlocked) {
      onUnlockCards?.(pageCardIds);
    }

    // 2. If not last page, move to next page
    if (!isLastPage) {
      if (pageCardIds.length > 0 && !arePageCardsUnlocked) {
        sound.playSuccess();
      } else {
        sound.playSnap();
      }
      goToPage(currentIndex + 1);
      return;
    }

    // 3. Last page: check if any earlier page is still uncompleted
    const remainingIndex = pages.findIndex(
      (p, idx) => idx !== currentIndex && !completedTaskIds.includes(p.id)
    );
    if (remainingIndex !== -1) {
      sound.playSnap();
      goToPage(remainingIndex);
      return;
    }

    // 4. All pages done -> Victory screen!
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
            Section {amcData.section_id} · 全部小节完成
          </span>
          <h2 className="text-2xl font-display font-black text-slate-900 mt-3 mb-2">
            {node.title} 通关达成！
          </h2>
          <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
            你已完成全部 {pages.length} 个小节，成功解锁 {sectionCards.length} 张核心数学卡片并收入全局图鉴！
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

  const completedPagesCount = pages.filter((p) => completedTaskIds.includes(p.id)).length;
  const allOthersCompleted = pages.every(
    (p, idx) => idx === currentIndex || completedTaskIds.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col overflow-hidden select-none animate-fade-in">
      {/* 1. Top Navigation & Page Stepper */}
      <header className="shrink-0 h-16 px-4 md:px-8 bg-white border-b border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
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

          <div className="min-w-0 hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                AoPS {amcData.section_id}
              </span>
              <h1 className="font-display font-black text-base text-slate-900 truncate">
                {node.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Center Page Stepper Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {pages.map((page, idx) => {
            const isActive = idx === currentIndex;
            const isDone = completedTaskIds.includes(page.id);
            return (
              <button
                key={page.id}
                onClick={() => {
                  sound.playPop();
                  goToPage(idx);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : isDone
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200/70'
                }`}
              >
                {isDone && (
                  <Check
                    className={`w-3.5 h-3.5 stroke-[3] ${
                      isActive ? 'text-emerald-300' : 'text-emerald-600'
                    }`}
                  />
                )}
                <span>{page.label}</span>
              </button>
            );
          })}
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
          <span className="hidden md:inline">全局图鉴</span>
          <span className="px-1.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono text-[10px]">
            {unlockedSectionCardCount}/{sectionCards.length}
          </span>
        </button>
      </header>

      {/* 2. Centered Single-Column Focused Body */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8"
      >
        <div className="max-w-3xl mx-auto space-y-6 pb-8">
          {/* Page Header */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  currentPage.type === 'concept'
                    ? 'bg-sky-100 text-sky-800 border-sky-200'
                    : 'bg-indigo-100 text-indigo-800 border-indigo-200'
                }`}
              >
                {currentPage.type === 'concept' ? 'Concept Intro' : 'Problem'}
              </span>
              <h2 className="text-xl md:text-2xl font-display font-black text-slate-900">
                {currentPage.title}
              </h2>
            </div>

            {isCurrentCompleted && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>已学完</span>
              </span>
            )}
          </div>

          {/* Section A: Problem Statement (only for type === 'problem') */}
          {currentPage.type === 'problem' && currentPage.problem && (
            <section className="rounded-3xl bg-white border-2 border-indigo-200 shadow-sm overflow-hidden">
              <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 via-sky-50/70 to-white border-b border-indigo-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-2xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider">
                    Problem
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  先在纸上独立思考，再核对解析
                </span>
              </div>

              <div className="p-5 md:p-6 text-base md:text-lg text-slate-800 font-medium leading-relaxed select-text">
                <MathText text={currentPage.problem} />
              </div>

              {/* Optional Collapsible Solution */}
              {currentPage.solution && (
                <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3">
                  <button
                    onClick={() => {
                      sound.playPop();
                      setShowSolution((prev) => !prev);
                    }}
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-display font-bold text-indigo-700 hover:text-indigo-900 transition-colors cursor-pointer"
                  >
                    {showSolution ? (
                      <>
                        <EyeOff className="w-4 h-4" />
                        <span>收起参考解析 (Solution)</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>查看参考解析 (Solution)</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {showSolution && (
                    <div className="mt-3 pt-3 border-t border-slate-200/80 text-sm md:text-base text-slate-700 font-medium leading-relaxed animate-fade-in select-text">
                      <MathText text={currentPage.solution} />
                    </div>
                  )}
                </div>
              )}
            </section>
          )}

          {/* Section B: Unlocked Knowledge Cards for this Page */}
          {currentPage.cards.length > 0 && (
            <section className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-display font-black text-base md:text-lg text-slate-800">
                    本小节解锁卡片 ({currentPage.cards.length})
                  </h3>
                </div>

                {!shouldShowCardsUnlocked && (
                  <button
                    onClick={handleRevealProblemCards}
                    className="px-4 py-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-display font-black text-xs md:text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer border border-amber-500/30"
                  >
                    <Gift className="w-4 h-4" />
                    <span>思考完成？点击拆开本页知识卡 (×{currentPage.cards.length})</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {currentPage.cards.map((card) => (
                  <AmcCardItem
                    key={card.card_id}
                    card={card}
                    isUnlocked={shouldShowCardsUnlocked}
                    sourceLabel={currentPage.title}
                    isNewlyUnlocked={newlyUnlockedIds.includes(card.card_id)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Section C: Related Cards (compact expandable pills) */}
          {relatedCards.length > 0 && (
            <section className="rounded-3xl bg-white border border-slate-200 p-4 md:p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                <Link2 className="w-4 h-4 text-indigo-500" />
                <span>关联知识卡 · 点击回顾 (Related Cards)</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {relatedCards.map(({ card }) => {
                  const theme = getAmcCardTheme(card.type);
                  const isExpanded = expandedRelatedIds.includes(card.card_id);
                  return (
                    <button
                      key={card.card_id}
                      onClick={() => handleToggleRelatedCard(card.card_id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer ${
                        isExpanded
                          ? `${theme.badgeBg} ${theme.badgeText} border-transparent shadow-xs`
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {theme.icon}
                      <span>{card.title}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {expandedRelatedIds.length > 0 && (
                <div className="space-y-3 pt-2 animate-fade-in">
                  {relatedCards
                    .filter(({ card }) => expandedRelatedIds.includes(card.card_id))
                    .map(({ card, problemLabel }) => (
                      <AmcCardItem
                        key={card.card_id}
                        card={card}
                        isUnlocked={true}
                        sourceLabel={problemLabel}
                      />
                    ))}
                </div>
              )}
            </section>
          )}

          {/* Section D: Teaching Checkpoints (from "## 教学安排") */}
          {checkpoints.length > 0 && (
            <section className="rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-indigo-50/40 border-2 border-amber-200 p-5 md:p-6 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-amber-950 flex items-center justify-center shadow-2xs">
                    <ListChecks className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-base text-slate-900">
                      Checkpoints
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      教学要点核对（可选勾选）
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {checkedCheckpointCount} / {checkpoints.length}
                </span>
              </div>

              <div className="space-y-2.5">
                {checkpoints.map((item, idx) => {
                  const isChecked = Boolean(checkedCheckpoints[`${currentPage.id}-${idx}`]);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleCheckpoint(idx)}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left transition-all flex items-center gap-3 cursor-pointer active:scale-[0.99] ${
                        isChecked
                          ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950'
                          : 'bg-white/90 hover:bg-amber-50/60 border-amber-200/80 text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white border-2 border-slate-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span
                        className={`text-sm md:text-base font-medium leading-snug ${
                          isChecked ? 'line-through opacity-75' : ''
                        }`}
                      >
                        <MathText text={item} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* 3. Bottom Navigation & Confirm Bar */}
      <footer className="shrink-0 px-4 md:px-8 py-4 bg-white border-t border-slate-200 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {currentIndex > 0 && (
            <button
              onClick={() => {
                sound.playPop();
                goToPage(currentIndex - 1);
              }}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-bold text-sm flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>上一页</span>
            </button>
          )}

          <span className="text-xs md:text-sm font-mono font-bold text-slate-500">
            第 {currentIndex + 1} / {pages.length} 页 · 已完成 {completedPagesCount}/{pages.length}
          </span>
        </div>

        <button
          onClick={handleConfirmPage}
          className={`px-5 md:px-6 py-3 rounded-2xl font-display font-black text-sm md:text-base transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-95 ${
            isLastPage && allOthersCompleted
              ? 'bg-emerald-500 hover:bg-emerald-400 text-white'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white'
          }`}
        >
          <span>
            {isLastPage
              ? allOthersCompleted
                ? `确认完毕，完成本节 (+${node.xp} XP)`
                : '确认本页，前往未完成小节'
              : isCurrentCompleted
                ? '下一页'
                : '确认本页已学完 · 下一页'}
          </span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </footer>
    </div>
  );
};
