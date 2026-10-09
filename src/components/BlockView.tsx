import React from 'react';
import { ScratchBlock } from '../types';
import { Flag, RotateCcw } from 'lucide-react';
import { sound } from '../audio/sound';

interface BlockViewProps {
  block: ScratchBlock;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'normal' | 'compact';
  isNestedChild?: boolean;
}

export const BlockView: React.FC<BlockViewProps> = ({
  block,
  isSelected = false,
  onClick,
  size = 'normal',
  isNestedChild = false,
}) => {
  const getCategoryStyles = () => {
    switch (block.category) {
      case 'events':
        return {
          bg: 'bg-[#FFBF00]',
          border: 'border-[#D99B00]',
          shadow: 'shadow-[0_4px_0_#B38000]',
          accent: 'bg-[#E6A800]',
        };
      case 'motion':
        return {
          bg: 'bg-[#4C97FF]',
          border: 'border-[#2E75D9]',
          shadow: 'shadow-[0_4px_0_#1E5BB3]',
          accent: 'bg-[#3373CC]',
        };
      case 'control':
        return {
          bg: 'bg-[#FFAB19]',
          border: 'border-[#D97E00]',
          shadow: 'shadow-[0_4px_0_#B36800]',
          accent: 'bg-[#E09200]',
        };
      case 'looks':
        return {
          bg: 'bg-[#9966FF]',
          border: 'border-[#7744DB]',
          shadow: 'shadow-[0_4px_0_#5B2EB3]',
          accent: 'bg-[#8247E5]',
        };
      case 'sound':
        return {
          bg: 'bg-[#CF63CF]',
          border: 'border-[#B043B0]',
          shadow: 'shadow-[0_4px_0_#8E2B8E]',
          accent: 'bg-[#BA45BA]',
        };
      case 'sensing':
        return {
          bg: 'bg-[#5CB1D6]',
          border: 'border-[#3D94B8]',
          shadow: 'shadow-[0_4px_0_#2B7391]',
          accent: 'bg-[#4396BA]',
        };
      default:
        return {
          bg: 'bg-[#FFAB19]',
          border: 'border-[#D97E00]',
          shadow: 'shadow-[0_4px_0_#B36800]',
          accent: 'bg-[#E09200]',
        };
    }
  };

  const style = getCategoryStyles();
  const isHat = block.shape === 'hat';
  const isCBlock = block.shape === 'c-block';

  // Format label: Extract flag or dropdown if present
  const renderBilingualContent = () => {
    const isFlagBlock = block.labelEn.includes('clicked');
    const isPointerBlock = block.labelEn.includes('mouse-pointer');

    return (
      <div className="flex flex-col select-none">
        {/* English (Scratch Standard) */}
        <div className="flex items-center gap-1.5 font-display font-bold text-white tracking-wide">
          {isFlagBlock ? (
            <>
              <span>when</span>
              <span className="p-1 rounded bg-[#059669] text-white">
                <Flag className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>clicked</span>
            </>
          ) : isPointerBlock ? (
            <>
              <span>go to</span>
              <span className="px-2 py-0.5 rounded-full bg-[#2662B8] text-white text-xs font-mono font-bold flex items-center gap-1 border border-white/20">
                <span>mouse-pointer</span>
                <span className="text-[10px]">▼</span>
              </span>
            </>
          ) : (
            <span>{block.labelEn}</span>
          )}
        </div>

        {/* Chinese (Scratch Official Bilingual Subtitle) */}
        <div className="text-[11px] font-medium text-white/90 font-mono tracking-tight -mt-0.5">
          {block.label}
        </div>
      </div>
    );
  };

  // Render C-Block (forever / 重复执行)
  if (isCBlock) {
    return (
      <div
        onClick={() => {
          sound.playPop();
          onClick?.();
        }}
        className={`relative flex flex-col cursor-pointer transition-all duration-150 select-none ${
          onClick ? 'active:translate-y-1' : ''
        } ${isSelected ? 'ring-4 ring-sky-400 ring-offset-2 ring-offset-white rounded-2xl scale-[1.02]' : ''}`}
      >
        {/* C-Block Top Header */}
        <div
          className={`relative flex items-center justify-between px-4 py-2.5 rounded-t-xl ${style.bg} border-t border-x border-white/30`}
        >
          {/* Puzzle notch at top of C block */}
          <div className="absolute -top-1 left-4 w-6 h-1.5 bg-slate-300 rounded-b-md" />

          {renderBilingualContent()}

          {/* Puzzle socket on inner floor */}
          <div className="absolute -bottom-1 left-4 w-6 h-1.5 bg-inherit rounded-b-md border-b border-black/20" />
        </div>

        {/* C-Block Mouth (holds nested blocks) */}
        <div className="flex">
          {/* Thick Left Spine */}
          <div className={`w-4 ${style.bg} border-l border-white/30 shrink-0`} />

          {/* Inner Mouth Slot */}
          <div className="flex-1 py-1 px-1 min-h-[48px] bg-slate-100/60 border-l border-slate-300/40 rounded-r-lg">
            {block.nestedBlocks && block.nestedBlocks.length > 0 ? (
              <div className="flex flex-col gap-1 items-start">
                {block.nestedBlocks.map((child) => (
                  <BlockView key={child.id} block={child} size="compact" isNestedChild />
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center px-3 text-xs text-slate-400 font-mono italic">
                [ 放入执行积木 ]
              </div>
            )}
          </div>
        </div>

        {/* C-Block Bottom Return Arm */}
        <div
          className={`relative flex items-center justify-between px-4 py-2 rounded-b-xl ${style.bg} ${style.shadow} border-b border-x border-black/10`}
        >
          {/* Loop return arrow symbol */}
          <div className="ml-auto flex items-center gap-1 text-white/90">
            <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    );
  }

  // Render Hat or Stack Block
  return (
    <div
      onClick={() => {
        sound.playPop();
        onClick?.();
      }}
      className={`relative inline-flex flex-col cursor-pointer transition-all duration-150 select-none ${
        onClick ? 'active:translate-y-1' : ''
      } ${isSelected ? 'ring-4 ring-sky-400 ring-offset-2 ring-offset-white rounded-xl scale-105' : ''}`}
    >
      {/* Hat Top Arch */}
      {isHat && (
        <div className="w-24 h-4 bg-inherit self-start rounded-t-full -mb-1 ml-4 border-t-2 border-x-2 border-white/30" />
      )}

      {/* Block Body */}
      <div
        className={`relative flex items-center gap-2.5 rounded-xl ${
          size === 'compact' ? 'px-3 py-1.5' : 'px-4 py-2.5'
        } ${style.bg} ${style.shadow} border-t border-white/30 shadow-sm`}
      >
        {/* Top puzzle tab for stack blocks */}
        {!isHat && !isNestedChild && (
          <div className="absolute -top-1 left-4 w-6 h-1.5 bg-slate-300 rounded-b-md" />
        )}

        {renderBilingualContent()}

        {/* Bottom puzzle socket */}
        <div className="absolute -bottom-1 left-4 w-6 h-1.5 bg-inherit rounded-b-md border-b border-black/20" />
      </div>
    </div>
  );
};
