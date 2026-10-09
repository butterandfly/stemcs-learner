import React from 'react';
import { ScratchBlock } from '../types';
import { Flag, Volume2, Footprints, MessageSquare } from 'lucide-react';
import { sound } from '../audio/sound';

interface BlockViewProps {
  block: ScratchBlock;
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'normal' | 'compact';
  showConnector?: boolean;
}

export const BlockView: React.FC<BlockViewProps> = ({
  block,
  isSelected = false,
  onClick,
  size = 'normal',
}) => {
  const getCategoryStyles = () => {
    switch (block.category) {
      case 'events':
        return {
          bg: 'bg-[#FFBF00]',
          border: 'border-[#D99B00]',
          shadow: 'shadow-[0_4px_0_#B38000]',
          activeShadow: 'active:shadow-none',
          icon: <Flag className="w-4 h-4 text-emerald-950 fill-emerald-400" />,
        };
      case 'motion':
        return {
          bg: 'bg-[#4C97FF]',
          border: 'border-[#2E75D9]',
          shadow: 'shadow-[0_4px_0_#1E5BB3]',
          activeShadow: 'active:shadow-none',
          icon: <Footprints className="w-4 h-4 text-sky-100" />,
        };
      case 'looks':
        return {
          bg: 'bg-[#9966FF]',
          border: 'border-[#7744DB]',
          shadow: 'shadow-[0_4px_0_#5B2EB3]',
          activeShadow: 'active:shadow-none',
          icon: <MessageSquare className="w-4 h-4 text-purple-100" />,
        };
      case 'sound':
        return {
          bg: 'bg-[#CF63CF]',
          border: 'border-[#B043B0]',
          shadow: 'shadow-[0_4px_0_#8E2B8E]',
          activeShadow: 'active:shadow-none',
          icon: <Volume2 className="w-4 h-4 text-pink-100" />,
        };
      default:
        return {
          bg: 'bg-[#FFAB19]',
          border: 'border-[#D97E00]',
          shadow: 'shadow-[0_4px_0_#B36800]',
          activeShadow: 'active:shadow-none',
          icon: null,
        };
    }
  };

  const style = getCategoryStyles();
  const isHat = block.shape === 'hat';

  return (
    <div
      onClick={() => {
        sound.playPop();
        onClick?.();
      }}
      className={`relative inline-flex flex-col cursor-pointer transition-all duration-150 select-none ${
        onClick ? 'active:translate-y-1' : ''
      } ${isSelected ? 'ring-4 ring-sky-400 ring-offset-2 ring-offset-white scale-105' : ''}`}
    >
      {/* Hat Top Curve (if hat block) */}
      {isHat && (
        <div className="w-24 h-3.5 bg-inherit self-start rounded-t-full -mb-1 ml-4 border-t-2 border-x-2 border-white/30" />
      )}

      {/* Main Block Body */}
      <div
        className={`relative flex items-center gap-2.5 font-bold text-white rounded-xl ${
          size === 'compact' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm md:text-base'
        } ${style.bg} ${style.shadow} border-t border-white/40 shadow-sm`}
      >
        {/* Puzzle top notch for stack blocks */}
        {!isHat && (
          <div className="absolute -top-1 left-4 w-6 h-1.5 bg-slate-300 rounded-b-md" />
        )}

        {/* Category Icon */}
        {style.icon && <span className="flex-shrink-0">{style.icon}</span>}

        {/* Block Label */}
        <span className="tracking-wide drop-shadow-sm font-display font-medium text-white">
          {block.label}
        </span>

        {/* Puzzle bottom socket */}
        <div className="absolute -bottom-1 left-4 w-6 h-1.5 bg-inherit rounded-b-md border-b border-black/20" />
      </div>
    </div>
  );
};
