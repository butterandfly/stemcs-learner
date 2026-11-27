import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  X,
  BookMarked,
  Sparkles,
  BookOpen,
  Zap,
  Compass,
  AlertTriangle,
  Search,
  Lock,
  Unlock,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Check,
  RotateCcw,
} from 'lucide-react';
import {
  ALL_AMC_CODEX_CARDS,
  AMC_CODEX_CHAPTERS,
  AOPS_SECTIONS,
  CodexCardEntry,
} from '../data/amcCurriculum';
import { AmcCardType } from '../types';
import { AmcCardItem, getAmcCardTheme } from './AmcCardItem';
import { MathText } from './MathText';
import { sound } from '../audio/sound';

interface AmcCodexModalProps {
  isOpen: boolean;
  unlockedCardIds: string[];
  onClose: () => void;
}

type NavScope =
  | { kind: 'all' }
  | { kind: 'chapter'; chapterKey: string }
  | { kind: 'section'; sectionId: string };

type ViewMode = 'cards' | 'compact';

interface GroupedSection {
  sectionId: string;
  sectionTitle: string;
  entries: CodexCardEntry[];
  totalInSection: number;
  unlockedInSection: number;
}

export const AmcCodexModal: React.FC<AmcCodexModalProps> = ({
  isOpen,
  unlockedCardIds,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<'all' | AmcCardType>('all');
  const [navScope, setNavScope] = useState<NavScope>({ kind: 'all' });
  const [collapsedChapters, setCollapsedChapters] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [unlockedOnly, setUnlockedOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [expandedCompactIds, setExpandedCompactIds] = useState<string[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navScope]);

  const unlockedSet = useMemo(() => new Set(unlockedCardIds), [unlockedCardIds]);

  const sectionStatsMap = useMemo(() => {
    const map = new Map<string, { total: number; unlocked: number }>();
    for (const chapter of AMC_CODEX_CHAPTERS) {
      for (const sec of chapter.sections) {
        const unlocked = sec.entries.filter((e) => unlockedSet.has(e.card.card_id)).length;
        map.set(sec.sectionId, { total: sec.entries.length, unlocked });
      }
    }
    return map;
  }, [unlockedSet]);

  const scopedEntries = useMemo<CodexCardEntry[]>(() => {
    if (navScope.kind === 'all') {
      return ALL_AMC_CODEX_CARDS;
    }
    if (navScope.kind === 'chapter') {
      const chapter = AMC_CODEX_CHAPTERS.find((c) => c.chapterKey === navScope.chapterKey);
      return chapter ? chapter.entries : ALL_AMC_CODEX_CARDS;
    }
    for (const chapter of AMC_CODEX_CHAPTERS) {
      const sec = chapter.sections.find((s) => s.sectionId === navScope.sectionId);
      if (sec) return sec.entries;
    }
    return ALL_AMC_CODEX_CARDS;
  }, [navScope]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const baseFilteredEntries = useMemo<CodexCardEntry[]>(() => {
    return scopedEntries.filter((entry) => {
      const isUnlocked = unlockedSet.has(entry.card.card_id);
      if (unlockedOnly && !isUnlocked) return false;

      if (normalizedQuery) {
        // Anti-spoiler rule: locked blind-box cards never match search queries
        if (!isUnlocked) return false;

        const theme = getAmcCardTheme(entry.card.type);
        const haystack = [
          entry.card.title,
          entry.card.content,
          entry.card.formula,
          entry.sectionId,
          entry.sectionTitle,
          entry.problemLabel,
          theme.label,
          theme.labelEn,
        ]
          .join(' ')
          .toLowerCase();

        if (!haystack.includes(normalizedQuery)) return false;
      }

      return true;
    });
  }, [scopedEntries, unlockedSet, unlockedOnly, normalizedQuery]);

  const typeCounts = useMemo(() => {
    const counts: Record<'all' | AmcCardType, number> = {
      all: baseFilteredEntries.length,
      definition: 0,
      'fact/property': 0,
      strategy: 0,
      warning: 0,
    };
    for (const entry of baseFilteredEntries) {
      counts[entry.card.type] += 1;
    }
    return counts;
  }, [baseFilteredEntries]);

  const filteredEntries = useMemo(() => {
    return selectedType === 'all'
      ? baseFilteredEntries
      : baseFilteredEntries.filter((entry) => entry.card.type === selectedType);
  }, [baseFilteredEntries, selectedType]);

  const groupedSections = useMemo<GroupedSection[]>(() => {
    const bucketMap = new Map<string, CodexCardEntry[]>();
    for (const entry of filteredEntries) {
      const list = bucketMap.get(entry.sectionId);
      if (list) {
        list.push(entry);
      } else {
        bucketMap.set(entry.sectionId, [entry]);
      }
    }

    const result: GroupedSection[] = [];
    for (const sec of AOPS_SECTIONS) {
      const entries = bucketMap.get(sec.section_id);
      if (!entries || entries.length === 0) continue;
      const stats = sectionStatsMap.get(sec.section_id);
      result.push({
        sectionId: sec.section_id,
        sectionTitle: sec.title,
        entries,
        totalInSection: stats?.total ?? entries.length,
        unlockedInSection:
          stats?.unlocked ??
          entries.filter((e) => unlockedSet.has(e.card.card_id)).length,
      });
    }
    return result;
  }, [filteredEntries, sectionStatsMap, unlockedSet]);

  if (!isOpen) return null;

  const totalCount = ALL_AMC_CODEX_CARDS.length;
  const unlockedCount = ALL_AMC_CODEX_CARDS.filter((entry) =>
    unlockedSet.has(entry.card.card_id)
  ).length;
  const progressPercent = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  const hasActiveFilters =
    navScope.kind !== 'all' ||
    selectedType !== 'all' ||
    unlockedOnly ||
    normalizedQuery.length > 0;

  const handleResetFilters = () => {
    sound.playPop();
    setNavScope({ kind: 'all' });
    setSelectedType('all');
    setUnlockedOnly(false);
    setSearchQuery('');
  };

  const handleToggleChapterCollapse = (chapterKey: string) => {
    sound.playPop();
    setCollapsedChapters((prev) => ({
      ...prev,
      [chapterKey]: !prev[chapterKey],
    }));
  };

  const handleToggleCompactExpand = (cardId: string) => {
    sound.playPop();
    setExpandedCompactIds((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  const filterTabs: {
    id: 'all' | AmcCardType;
    label: string;
    icon: React.ReactNode;
    activeClass: string;
  }[] = [
    {
      id: 'all',
      label: `全部 (${typeCounts.all})`,
      icon: <Sparkles className="w-3.5 h-3.5" />,
      activeClass: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    },
    {
      id: 'definition',
      label: `数学定义 (${typeCounts.definition})`,
      icon: <BookOpen className="w-3.5 h-3.5" />,
      activeClass: 'bg-sky-500 text-white border-sky-500 shadow-sm',
    },
    {
      id: 'fact/property',
      label: `核心定律与性质 (${typeCounts['fact/property']})`,
      icon: <Zap className="w-3.5 h-3.5" />,
      activeClass: 'bg-amber-500 text-amber-950 border-amber-500 shadow-sm',
    },
    {
      id: 'strategy',
      label: `解题策略与巧算 (${typeCounts.strategy})`,
      icon: <Compass className="w-3.5 h-3.5" />,
      activeClass: 'bg-emerald-500 text-white border-emerald-500 shadow-sm',
    },
    {
      id: 'warning',
      label: `常见误区与避坑 (${typeCounts.warning})`,
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
      activeClass: 'bg-rose-500 text-white border-rose-500 shadow-sm',
    },
  ];

  return (
    <div className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-3 md:p-5 animate-fade-in select-none">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-[#F8FAFC] border-2 border-indigo-200 rounded-3xl w-full max-w-6xl h-[88vh] shadow-2xl flex flex-col overflow-hidden">
        {/* 1. Compact Header */}
        <div className="px-5 md:px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-md shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg md:text-xl font-display font-black text-slate-900 truncate">
                  AoPS 全局知识图鉴 (Codex)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                  已收集 {unlockedCount} / {totalCount}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5 hidden sm:block">
                按章节浏览或即时搜索已解锁定理，随时速查回顾核心数学卡片
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress Bar */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 md:w-28 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-900">
                {progressPercent}%
              </span>
            </div>

            <button
              onClick={() => {
                sound.playPop();
                onClose();
              }}
              className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer shrink-0"
              title="关闭图鉴"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 2. Search, Quick Actions & Type Filter Toolbar */}
        <div className="px-5 md:px-6 py-3 bg-indigo-50/60 border-b border-indigo-100 space-y-2.5 shrink-0">
          {/* Row 1: Search Input + Unlocked Only + View Mode */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索定理、公式或小节（如 分配律、Power、2.2）..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-slate-200 focus:border-indigo-400 focus:outline-none text-xs md:text-sm font-medium text-slate-800 placeholder:text-slate-400 shadow-2xs select-text"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    sound.playPop();
                    setSearchQuery('');
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
                  title="清空搜索"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Unlocked-only toggle */}
            <button
              onClick={() => {
                sound.playPop();
                setUnlockedOnly((prev) => !prev);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer shrink-0 ${
                unlockedOnly
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {unlockedOnly ? (
                <Unlock className="w-3.5 h-3.5" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span>只看已解锁</span>
            </button>

            {/* View mode segmented toggle */}
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shrink-0">
              <button
                onClick={() => {
                  sound.playPop();
                  setViewMode('cards');
                }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="卡片视图"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>卡片</span>
              </button>
              <button
                onClick={() => {
                  sound.playPop();
                  setViewMode('compact');
                }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                  viewMode === 'compact'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="速查列表"
              >
                <List className="w-3.5 h-3.5" />
                <span>速查</span>
              </button>
            </div>
          </div>

          {/* Row 2: Card Type Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {filterTabs.map((tab) => {
              const isActive = selectedType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playPop();
                    setSelectedType(tab.id);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer ${
                    isActive
                      ? tab.activeClass
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Row 3 (Mobile / Narrow Screens): Horizontal Chapter & Section Pills */}
          <div className="flex md:hidden items-center gap-1.5 overflow-x-auto pb-0.5">
            <button
              onClick={() => {
                sound.playPop();
                setNavScope({ kind: 'all' });
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border shrink-0 cursor-pointer ${
                navScope.kind === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              全部
            </button>
            {AMC_CODEX_CHAPTERS.map((chapter) => (
              <React.Fragment key={chapter.chapterKey}>
                <button
                  onClick={() => {
                    sound.playPop();
                    setNavScope({ kind: 'chapter', chapterKey: chapter.chapterKey });
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border shrink-0 cursor-pointer ${
                    navScope.kind === 'chapter' && navScope.chapterKey === chapter.chapterKey
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  Ch.{chapter.chapterKey}
                </button>
                {chapter.sections.map((sec) => (
                  <button
                    key={sec.sectionId}
                    onClick={() => {
                      sound.playPop();
                      setNavScope({ kind: 'section', sectionId: sec.sectionId });
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border shrink-0 cursor-pointer ${
                      navScope.kind === 'section' && navScope.sectionId === sec.sectionId
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    {sec.sectionId}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. Dual-Pane Body: Left Chapter Tree + Right Cards Content */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Left Chapter / Section Sidebar (md+) */}
          <aside className="hidden md:flex flex-col w-60 lg:w-64 shrink-0 bg-white border-r border-slate-200 overflow-y-auto p-3 space-y-1.5">
            {/* All Chapters */}
            <button
              onClick={() => {
                sound.playPop();
                setNavScope({ kind: 'all' });
              }}
              className={`w-full px-3 py-2 rounded-xl text-left text-xs font-display font-black flex items-center justify-between gap-2 transition-all cursor-pointer ${
                navScope.kind === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>全部章节</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  navScope.kind === 'all'
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {unlockedCount}/{totalCount}
              </span>
            </button>

            <div className="h-px bg-slate-100 my-1" />

            {/* Chapter Tree */}
            {AMC_CODEX_CHAPTERS.map((chapter) => {
              const chapterUnlocked = chapter.entries.filter((e) =>
                unlockedSet.has(e.card.card_id)
              ).length;
              const chapterTotal = chapter.entries.length;
              const isChapterComplete = chapterTotal > 0 && chapterUnlocked === chapterTotal;
              const isChapterSelected =
                navScope.kind === 'chapter' && navScope.chapterKey === chapter.chapterKey;
              const isCollapsed = Boolean(collapsedChapters[chapter.chapterKey]);

              return (
                <div key={chapter.chapterKey} className="space-y-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleToggleChapterCollapse(chapter.chapterKey)}
                      className="w-6 h-7 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center shrink-0 cursor-pointer"
                      title={isCollapsed ? '展开章节' : '折叠章节'}
                    >
                      {isCollapsed ? (
                        <ChevronRight className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        sound.playPop();
                        setNavScope({ kind: 'chapter', chapterKey: chapter.chapterKey });
                      }}
                      className={`flex-1 min-w-0 px-2.5 py-1.5 rounded-xl text-left text-xs font-display font-bold flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                        isChapterSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">{chapter.shortTitle}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${
                          isChapterSelected
                            ? 'bg-white/20 text-white'
                            : isChapterComplete
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {chapterUnlocked}/{chapterTotal}
                      </span>
                    </button>
                  </div>

                  {!isCollapsed && (
                    <div className="pl-5 space-y-0.5">
                      {chapter.sections.map((sec) => {
                        const secUnlocked = sec.entries.filter((e) =>
                          unlockedSet.has(e.card.card_id)
                        ).length;
                        const secTotal = sec.entries.length;
                        const isSecComplete = secTotal > 0 && secUnlocked === secTotal;
                        const isSecSelected =
                          navScope.kind === 'section' && navScope.sectionId === sec.sectionId;
                        const shortSecName = sec.sectionTitle.split(' (')[0];

                        return (
                          <button
                            key={sec.sectionId}
                            onClick={() => {
                              sound.playPop();
                              setNavScope({ kind: 'section', sectionId: sec.sectionId });
                            }}
                            className={`w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-medium flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                              isSecSelected
                                ? 'bg-indigo-50 text-indigo-900 border border-indigo-200 font-bold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                            }`}
                          >
                            <span className="truncate">
                              <span className="font-mono font-bold mr-1">{sec.sectionId}</span>
                              {shortSecName}
                            </span>

                            {isSecComplete ? (
                              <span
                                className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${
                                  isSecSelected
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-emerald-100 text-emerald-700'
                                }`}
                              >
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                <span>{secTotal}</span>
                              </span>
                            ) : (
                              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-500 shrink-0">
                                {secUnlocked}/{secTotal}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </aside>

          {/* Right Cards Content Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F8FAFC]">
            {/* Filter / Search Summary Strip */}
            {hasActiveFilters && (
              <div className="mb-4 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-2 flex-wrap shadow-2xs">
                <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600 font-medium">
                  <span>
                    当前显示{' '}
                    <strong className="font-mono text-indigo-700">
                      {filteredEntries.length}
                    </strong>{' '}
                    张卡片
                  </span>
                  {normalizedQuery && (
                    <span className="text-[11px] text-slate-400">
                      · 仅检索已解锁卡片，未拆盲盒防剧透
                    </span>
                  )}
                </div>

                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-display font-bold transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>重置筛选</span>
                </button>
              </div>
            )}

            {/* Empty State or Section-Grouped Cards */}
            {groupedSections.length === 0 ? (
              <div className="h-full min-h-[260px] flex flex-col items-center justify-center text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-base text-slate-800 mb-1">
                  没有找到符合条件的卡片
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mb-4 leading-relaxed">
                  {normalizedQuery
                    ? '没有匹配到已解锁的卡片（未拆封的知识盲盒不会出现在搜索结果中）。'
                    : '当前章节或筛选条件下暂无可显示的卡片，试试切换筛选条件吧。'}
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-display font-bold shadow-xs cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>重置搜索与筛选</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-7 pb-4">
                {groupedSections.map((group) => (
                  <section key={group.sectionId} className="space-y-3">
                    {/* Section Group Header */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                          Section {group.sectionId}
                        </span>
                        <h3 className="font-display font-black text-sm md:text-base text-slate-800 truncate">
                          {group.sectionTitle}
                        </h3>
                      </div>

                      <span className="text-xs font-mono font-bold text-slate-500 shrink-0">
                        已解锁 {group.unlockedInSection}/{group.totalInSection}
                      </span>
                    </div>

                    {/* Cards Grid vs Compact Quick-Lookup List */}
                    {viewMode === 'cards' ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {group.entries.map((entry) => {
                          const isUnlocked = unlockedSet.has(entry.card.card_id);
                          return (
                            <AmcCardItem
                              key={entry.card.card_id}
                              card={entry.card}
                              isUnlocked={isUnlocked}
                              sourceLabel={`Section ${entry.sectionId} · ${entry.problemLabel}`}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {group.entries.map((entry) => {
                          const isUnlocked = unlockedSet.has(entry.card.card_id);

                          if (!isUnlocked) {
                            return (
                              <div
                                key={entry.card.card_id}
                                className="px-4 py-2.5 rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 flex items-center justify-between gap-3 text-xs text-slate-500"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <span className="font-display font-bold truncate">
                                    未拆封知识盲盒
                                  </span>
                                </div>
                                <span className="font-mono text-[11px] text-slate-400 shrink-0">
                                  Section {entry.sectionId} · {entry.problemLabel}
                                </span>
                              </div>
                            );
                          }

                          const theme = getAmcCardTheme(entry.card.type);
                          const isExpanded = expandedCompactIds.includes(entry.card.card_id);

                          return (
                            <div
                              key={entry.card.card_id}
                              className={`rounded-2xl border ${theme.cardBorder} bg-white overflow-hidden transition-all shadow-2xs`}
                            >
                              <button
                                onClick={() => handleToggleCompactExpand(entry.card.card_id)}
                                className="w-full px-4 py-2.5 text-left flex items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5 min-w-0 flex-1 flex-wrap">
                                  <span
                                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-display font-bold shrink-0 ${theme.badgeBg} ${theme.badgeText}`}
                                  >
                                    {theme.icon}
                                    <span>{theme.labelEn.split(' / ')[0]}</span>
                                  </span>

                                  <span className="font-display font-bold text-sm text-slate-900 truncate">
                                    {entry.card.title}
                                  </span>

                                  {entry.card.formula && (
                                    <span className="text-xs text-slate-700 font-mono truncate max-w-full">
                                      <MathText text={entry.card.formula} />
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="hidden sm:inline px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 font-mono text-[11px] font-bold">
                                    {entry.problemLabel}
                                  </span>
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4 text-slate-400" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                  )}
                                </div>
                              </button>

                              {isExpanded && (
                                <div
                                  className={`px-4 pb-4 pt-3 border-t border-slate-100 ${theme.cardBg} space-y-3 animate-fade-in`}
                                >
                                  {entry.card.formula && (
                                    <div
                                      className={`px-4 py-2.5 rounded-2xl border ${theme.formulaBorder} ${theme.formulaBg} ${theme.formulaText} flex items-center justify-center text-center shadow-inner`}
                                    >
                                      <MathText
                                        text={entry.card.formula}
                                        isFormulaBlock
                                        className="text-base font-mono font-black tracking-wide"
                                      />
                                    </div>
                                  )}
                                  <p className="text-sm text-slate-700 font-medium leading-relaxed select-text">
                                    <MathText text={entry.card.content} />
                                  </p>
                                  <div className="text-[11px] font-mono font-bold text-slate-400">
                                    来源：Section {entry.sectionId} · {entry.problemLabel}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
