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
    <div className="flex flex-col h-full bg-white rounded-3xl border-2 border-slate-200 shadow-lg overflow-hidden">
      {/* Stage Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          {/* Green Flag Button */}
          <button
            onClick={() => {
              sound.playSnap();
              onRun?.();
            }}
            title="运行程序 (绿旗)"
            className={`flex items-center justify-center w-8 h-8 rounded-xl font-black transition-all ${
              isRunning
                ? 'bg-emerald-500 text-white shadow-none translate-y-0.5'
                : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_3px_0_#15803D] active:translate-y-0.5 active:shadow-none'
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
            className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-500 hover:bg-rose-400 text-white transition-all shadow-[0_3px_0_#BE123C] active:translate-y-0.5 active:shadow-none"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>

          <span className="ml-2 text-xs font-mono font-bold text-slate-500 tracking-wider">
            舞台 PREVIEW
          </span>
        </div>

        {/* Realtime Coordinates Badge */}
        <div className="flex items-center gap-2 font-mono text-xs bg-white px-3 py-1 rounded-lg border border-slate-200 text-slate-600 shadow-sm">
          <span className="text-sky-600 font-extrabold">X:</span>
          <span className="w-7 text-right font-bold">{Math.round(x)}</span>
          <span className="text-rose-500 font-extrabold ml-1">Y:</span>
          <span className="w-7 text-right font-bold">{Math.round(y)}</span>
        </div>
      </div>

      {/* Stage Canvas Viewport */}
      <div className="relative flex-1 w-full overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-slate-50 flex items-center justify-center">
        {/* Subtle STEM Cartesian Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {/* Center Crosshairs */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sky-400/80 border-r border-dashed border-sky-400" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-400/80 border-b border-dashed border-sky-400" />
          {/* Grid dots */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
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
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center animate-bounce shadow-[0_4px_12px_rgba(251,191,36,0.6)]">
              <span className="text-xl">💎</span>
            </div>
            <span className="mt-1 text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-300 shadow-sm">
              目标点
            </span>
          </div>
        )}

        {/* Scratch Cat Sprite */}
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
            <div className="relative mb-2 max-w-[180px] bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-2xl shadow-lg animate-fade-in border-2 border-slate-800">
              <span>{speechText}</span>
              {/* Bubble Tail */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
            </div>
          )}

          {/* SVG Scratch Cat Icon */}
          <div className="relative w-20 h-20 filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.15)]">
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

              {/* Big Anime Eyes */}
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
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between items-center font-mono font-medium">
        <span>坐标原点 (0, 0) 居中</span>
        <span className="text-emerald-600 font-bold">● 实时仿真引擎就绪</span>
      </div>
    </div>
  );
};
