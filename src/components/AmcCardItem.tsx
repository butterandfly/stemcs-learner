import React from 'react';
import { BookOpen, Zap, Compass, AlertTriangle, Lock, Sparkles } from 'lucide-react';
import { AmcCardType, AmcKnowledgeCard } from '../types';
import { MathText } from './MathText';

export interface CardTypeTheme {
  label: string;
  labelEn: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  cardBorder: string;
  formulaBg: string;
  formulaBorder: string;
  formulaText: string;
  icon: React.ReactNode;
}

export function getAmcCardTheme(type: AmcCardType): CardTypeTheme {
  switch (type) {
    case 'definition':
      return {
        label: '数学定义',
        labelEn: 'Definition',
        badgeBg: 'bg-sky-500',
        badgeText: 'text-white',
        cardBg: 'bg-gradient-to-br from-sky-50/90 via-white to-sky-50/50',
        cardBorder: 'border-sky-300',
        formulaBg: 'bg-sky-100/70',
        formulaBorder: 'border-sky-300/80',
        formulaText: 'text-sky-950',
        icon: <BookOpen className="w-3.5 h-3.5" />,
      };
    case 'fact/property':
      return {
        label: '核心定律与性质',
        labelEn: 'Fact / Property',
        badgeBg: 'bg-amber-500',
        badgeText: 'text-amber-950',
        cardBg: 'bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50',
        cardBorder: 'border-amber-300',
        formulaBg: 'bg-amber-100/70',
        formulaBorder: 'border-amber-300/80',
        formulaText: 'text-amber-950',
        icon: <Zap className="w-3.5 h-3.5 fill-current" />,
      };
    case 'strategy':
      return {
        label: '解题策略与巧算',
        labelEn: 'Strategy',
        badgeBg: 'bg-emerald-500',
        badgeText: 'text-white',
        cardBg: 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50',
        cardBorder: 'border-emerald-300',
        formulaBg: 'bg-emerald-100/70',
        formulaBorder: 'border-emerald-300/80',
        formulaText: 'text-emerald-950',
        icon: <Compass className="w-3.5 h-3.5" />,
      };
    case 'warning':
      return {
        label: '常见误区与避坑',
        labelEn: 'Warning',
        badgeBg: 'bg-rose-500',
        badgeText: 'text-white',
        cardBg: 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/50',
        cardBorder: 'border-rose-300',
        formulaBg: 'bg-rose-100/70',
        formulaBorder: 'border-rose-300/80',
        formulaText: 'text-rose-950',
        icon: <AlertTriangle className="w-3.5 h-3.5" />,
      };
  }
}

interface AmcCardItemProps {
  card: AmcKnowledgeCard;
  isUnlocked: boolean;
  sourceLabel?: string; // e.g., "Problem 1.1" or "Section 1.2 · Problem 1.1"
  isNewlyUnlocked?: boolean;
}

export const AmcCardItem: React.FC<AmcCardItemProps> = ({
  card,
  isUnlocked,
  sourceLabel,
  isNewlyUnlocked = false,
}) => {
  const theme = getAmcCardTheme(card.type);

  if (!isUnlocked) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-100/80 p-5 flex items-center justify-between gap-4 select-none transition-all">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-slate-200/90 border border-slate-300 flex items-center justify-center text-slate-400 shrink-0 shadow-inner">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-200 text-slate-600">
                🎁 未拆封知识盲盒
              </span>
              {sourceLabel && (
                <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                  完成 {sourceLabel} 解锁
                </span>
              )}
            </div>
            <div className="text-sm font-display font-bold text-slate-500">
              在实体书上独立完成 {sourceLabel || '对应题目'} 并勾选打卡后揭晓！
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 border border-slate-200 text-xs font-mono font-bold text-slate-400 shrink-0">
          <span>???</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border-2 ${theme.cardBorder} ${theme.cardBg} p-5 shadow-sm transition-all relative overflow-hidden ${
        isNewlyUnlocked ? 'ring-4 ring-indigo-400/40 animate-fade-in' : ''
      }`}
    >
      {/* Top Meta Row: Type Pill & Source Label */}
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-black shadow-xs ${theme.badgeBg} ${theme.badgeText}`}
        >
          {theme.icon}
          <span>{theme.label}</span>
          <span className="opacity-75 font-mono text-[10px] font-bold">
            · {theme.labelEn}
          </span>
        </span>

        <div className="flex items-center gap-1.5">
          {isNewlyUnlocked && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-indigo-600 text-white shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>新解锁!</span>
            </span>
          )}
          {sourceLabel && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/90 text-slate-600 border border-slate-200">
              {sourceLabel}
            </span>
          )}
        </div>
      </div>

      {/* Card Title */}
      <h4 className="text-base md:text-lg font-display font-black text-slate-900 mb-3">
        {card.title}
      </h4>

      {/* Formula Highlight Box */}
      {card.formula && (
        <div
          className={`mb-3.5 px-4 py-2.5 rounded-2xl border ${theme.formulaBorder} ${theme.formulaBg} ${theme.formulaText} flex items-center justify-center text-center shadow-inner`}
        >
          <MathText
            text={card.formula}
            isFormulaBlock
            className="text-base md:text-lg font-mono font-black tracking-wide"
          />
        </div>
      )}

      {/* Explanation Content */}
      <p className="text-sm text-slate-700 font-medium leading-relaxed">
        <MathText text={card.content} />
      </p>
    </div>
  );
};
