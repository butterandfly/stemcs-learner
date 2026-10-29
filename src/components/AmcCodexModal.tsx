import React, { useState } from 'react';
import { X, BookMarked, Sparkles, BookOpen, Zap, Compass, AlertTriangle } from 'lucide-react';
import { ALL_AMC_CODEX_CARDS } from '../data/amcCurriculum';
import { AmcCardType } from '../types';
import { AmcCardItem } from './AmcCardItem';
import { sound } from '../audio/sound';

interface AmcCodexModalProps {
  isOpen: boolean;
  unlockedCardIds: string[];
  onClose: () => void;
}

export const AmcCodexModal: React.FC<AmcCodexModalProps> = ({
  isOpen,
  unlockedCardIds,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<'all' | AmcCardType>('all');

  if (!isOpen) return null;

  const totalCount = ALL_AMC_CODEX_CARDS.length;
  const unlockedCount = ALL_AMC_CODEX_CARDS.filter((entry) =>
    unlockedCardIds.includes(entry.card.card_id)
  ).length;
  const progressPercent = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  const filteredEntries =
    selectedType === 'all'
      ? ALL_AMC_CODEX_CARDS
      : ALL_AMC_CODEX_CARDS.filter((entry) => entry.card.type === selectedType);

  const filterTabs: {
    id: 'all' | AmcCardType;
    label: string;
    icon: React.ReactNode;
    activeClass: string;
  }[] = [
    {
      id: 'all',
      label: `全部 (${ALL_AMC_CODEX_CARDS.length})`,
      icon: <Sparkles className="w-3.5 h-3.5" />,
      activeClass: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    },
    {
      id: 'definition',
      label: '数学定义',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      activeClass: 'bg-sky-500 text-white border-sky-500 shadow-sm',
    },
    {
      id: 'fact/property',
      label: '核心定律与性质',
      icon: <Zap className="w-3.5 h-3.5" />,
      activeClass: 'bg-amber-500 text-amber-950 border-amber-500 shadow-sm',
    },
    {
      id: 'strategy',
      label: '解题策略与巧算',
      icon: <Compass className="w-3.5 h-3.5" />,
      activeClass: 'bg-emerald-500 text-white border-emerald-500 shadow-sm',
    },
    {
      id: 'warning',
      label: '常见误区与避坑',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
      activeClass: 'bg-rose-500 text-white border-rose-500 shadow-sm',
    },
  ];

  return (
    <div className="fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in select-none">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 bg-[#F8FAFC] border-2 border-indigo-200 rounded-3xl w-full max-w-4xl max-h-[88vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-5 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-md shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-display font-black text-slate-900">
                  AoPS 全局知识图鉴 (Codex)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                  已收集 {unlockedCount} / {totalCount}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                在实体书《AoPS Prealgebra》中完成探索题打卡，即可永久点亮对应知识卡片
              </p>
            </div>
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

        {/* Collection Progress & Type Filter Bar */}
        <div className="px-6 py-3.5 bg-indigo-50/60 border-b border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
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

          {/* Mini Progress Bar */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-28 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-indigo-900">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEntries.map((entry) => {
              const isUnlocked = unlockedCardIds.includes(entry.card.card_id);
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
        </div>
      </div>
    </div>
  );
};
