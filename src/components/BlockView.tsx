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
          border: 'border-[#D9A000]',
          shadow: 'shadow-[0_5px_0_#B38400]',
          activeShadow: 'active:shadow-none',
          icon: <Flag className="w-4 h-4 text-emerald-950 fill-emerald-400" />,
        };
      case 'motion':
        return {
          bg: 'bg-[#4C97FF]',
          border: 'border-[#3373CC]',
          shadow: 'shadow-[0_5px_0_#2659A0]',
          activeShadow: 'active:shadow-none',
          icon: <Footprints className="w-4 h-4 text-sky-100" />,
        };
      case 'looks':
        return {
          bg: 'bg-[#9966FF]',
          border: 'border-[#7D47EB]',
          shadow: 'shadow-[0_5px_0_#6234BF]',
          activeShadow: 'active:shadow-none',
          icon: <MessageSquare className="w-4 h-4 text-purple-100" />,
        };
      case 'sound':
        return {
          bg: 'bg-[#CF63CF]',
          border: 'border-[#A845A8]',
          shadow: 'shadow-[0_5px_0_#853185]',
          activeShadow: 'active:shadow-none',
          icon: <Volume2 className="w-4 h-4 text-pink-100" />,
        };
      default:
        return {
          bg: 'bg-[#FFAB19]',
          border: 'border-[#D98A00]',
          shadow: 'shadow-[0_5px_0_#B36F00]',
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
      } ${isSelected ? 'ring-4 ring-dopamine-cyan ring-offset-2 ring-offset-slate-900 scale-105' : ''}`}
    >
      {/* Hat Top Curve (if hat block) */}
      {isHat && (
        <div className="w-24 h-3.5 bg-inherit self-start rounded-t-full -mb-1 ml-4 border-t-2 border-x-2 border-white/20" />
      )}

      {/* Main Block Body */}
      <div
        className={`relative flex items-center gap-2.5 font-bold text-white rounded-xl ${
          size === 'compact' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm md:text-base'
        } ${style.bg} ${style.shadow} border-t border-white/30`}
      >
        {/* Puzzle top notch for stack blocks */}
        {!isHat && (
          <div className="absolute -top-1 left-4 w-6 h-1.5 bg-slate-900/60 rounded-b-md" />
        )}

        {/* Category Icon */}
        {style.icon && <span className="flex-shrink-0">{style.icon}</span>}

        {/* Block Label */}
        <span className="tracking-wide drop-shadow-sm font-display font-medium">
          {block.label}
        </span>

        {/* Puzzle bottom socket */}
        <div className="absolute -bottom-1 left-4 w-6 h-1.5 bg-inherit rounded-b-md border-b border-black/20" />
      </div>
    </div>
  );
};
