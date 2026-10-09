import React from 'react';
import { Play, Square } from 'lucide-react';
import { sound } from '../audio/sound';

interface ScratchStageProps {
  x: number;
  y: number;
  speechText?: string;
  targetX?: number;
  isRunning?: boolean;
  onRun?: () => void;
  onReset?: () => void;
}

export const ScratchStage: React.FC<ScratchStageProps> = ({
  x,
  y,
  speechText,
  targetX,
  isRunning = false,
  onRun,
  onReset,
}) => {
  return (
    <div className="flex flex-col h-full bg-slate-900/90 rounded-2xl border-2 border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Stage Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700">
        <div className="flex items-center gap-2">
          {/* Green Flag Button */}
          <button
            onClick={() => {
              sound.playSnap();
              onRun?.();
            }}
            title="运行程序 (绿旗)"
            className={`flex items-center justify-center w-8 h-8 rounded-lg font-black transition-all ${
              isRunning
                ? 'bg-emerald-400 text-slate-900 shadow-dopamine-lime'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 active:translate-y-0.5'
            }`}
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>

          {/* Red Stop Sign Button */}
          <button
            onClick={() => {
              sound.playPop();
              onReset?.();
            }}
            title="停止并复位"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-600/80 hover:bg-rose-500 text-white transition-all active:translate-y-0.5"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>

          <span className="ml-2 text-xs font-mono font-bold text-slate-400 tracking-wider">
            舞台 PREVIEW
          </span>
        </div>

        {/* Realtime Coordinates Badge */}
        <div className="flex items-center gap-2 font-mono text-xs bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
          <span className="text-dopamine-cyan font-bold">X:</span>
          <span className="w-7 text-right">{Math.round(x)}</span>
          <span className="text-dopamine-pink font-bold ml-1">Y:</span>
          <span className="w-7 text-right">{Math.round(y)}</span>
        </div>
      </div>

      {/* Stage Canvas Viewport */}
      <div className="relative flex-1 w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-[#0c1322] flex items-center justify-center">
        {/* Subtle Cartesian STEM Coordinate Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Center Crosshairs */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-dopamine-cyan/70 border-r border-dashed border-dopamine-cyan" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-dopamine-cyan/70 border-b border-dashed border-dopamine-cyan" />
          {/* Grid dots */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Target Crystal (if specified) */}
        {targetX !== undefined && (
          <div
            className="absolute z-10 transition-all duration-300 pointer-events-none flex flex-col items-center"
            style={{
              left: `calc(50% + ${targetX}px - 20px)`,
              top: 'calc(50% - 24px)',
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-dopamine-yellow/20 border-2 border-dopamine-yellow flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(255,208,0,0.5)]">
              <span className="text-xl">💎</span>
            </div>
            <span className="mt-1 text-[10px] font-mono font-bold text-amber-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-500/30">
              目标点
            </span>
          </div>
        )}

        {/* Scratch Cat Sprite Container */}
        <div
          className="absolute z-20 transition-all duration-500 ease-out flex flex-col items-center pointer-events-none"
          style={{
            transform: `translate(calc(-50% + ${x}px), calc(-50% - ${y}px))`,
            left: '50%',
            top: '50%',
          }}
        >
          {/* Comic Speech Bubble */}
          {speechText && (
            <div className="relative mb-2 max-w-[180px] bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-2xl shadow-xl animate-fade-in border-2 border-slate-900">
              <span>{speechText}</span>
              {/* Bubble Tail */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
            </div>
          )}

          {/* SVG Scratch Cat Icon */}
          <div className="relative w-20 h-20 filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Body */}
              <ellipse cx="50" cy="55" rx="30" ry="24" fill="#FFAB19" />
              <ellipse cx="50" cy="58" rx="20" ry="15" fill="#FFE5A3" />

              {/* Ears */}
              <polygon points="26,38 32,18 42,32" fill="#FFAB19" />
              <polygon points="30,34 34,22 40,30" fill="#FF8C1A" />
              <polygon points="74,38 68,18 58,32" fill="#FFAB19" />
              <polygon points="70,34 66,22 60,30" fill="#FF8C1A" />

              {/* Head */}
              <circle cx="50" cy="40" r="24" fill="#FFAB19" />

              {/* Whiskers */}
              <line x1="20" y1="40" x2="34" y2="42" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="46" x2="34" y2="45" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
              <line x1="80" y1="40" x2="66" y2="42" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
              <line x1="78" y1="46" x2="66" y2="45" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />

              {/* Big Anime Eyes (Asperger/Kid Friendly, High Contrast) */}
              <ellipse cx="40" cy="36" rx="6" ry="8" fill="#FFFFFF" />
              <circle cx="41" cy="36" r="4.5" fill="#1E293B" />
              <circle cx="43" cy="34" r="1.8" fill="#FFFFFF" />

              <ellipse cx="60" cy="36" rx="6" ry="8" fill="#FFFFFF" />
              <circle cx="59" cy="36" r="4.5" fill="#1E293B" />
              <circle cx="57" cy="34" r="1.8" fill="#FFFFFF" />

              {/* Cute Nose and Smile */}
              <polygon points="48,43 52,43 50,45" fill="#E11D48" />
              <path d="M 45 47 Q 50 51 55 47" fill="none" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />

              {/* Paws */}
              <ellipse cx="34" cy="74" rx="8" ry="5" fill="#FFFFFF" stroke="#FFAB19" strokeWidth="2" />
              <ellipse cx="66" cy="74" rx="8" ry="5" fill="#FFFFFF" stroke="#FFAB19" strokeWidth="2" />

              {/* Playful Tail */}
              <path
                d="M 22 62 Q 10 50 14 36"
                fill="none"
                stroke="#FFAB19"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stage Bottom Footer */}
      <div className="px-3 py-1.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center font-mono">
        <span>坐标原点 (0, 0) 居中</span>
        <span className="text-emerald-400">● 实时仿真引擎就绪</span>
      </div>
    </div>
  );
};
