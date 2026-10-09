import React, { useState } from 'react';
import { Flame, Zap, Heart, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';
import { sound } from '../audio/sound';

interface TopBarProps {
  xp: number;
  streakDays: number;
  energy: number;
  onRefillEnergy: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  xp,
  streakDays,
  energy,
  onRefillEnergy,
}) => {
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="h-16 px-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-30 select-none">
      {/* Offline Status Badge */}
      <div className="flex items-center gap-2 text-xs font-mono">
        {isOnline ? (
          <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <Wifi className="w-3.5 h-3.5" />
            <span>离线可用</span>
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-500/20">
            <WifiOff className="w-3.5 h-3.5" />
            <span>离线模式</span>
          </span>
        )}
      </div>

      {/* Gamification Stats: Streak, XP, Hearts */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
          <Flame className="w-5 h-5 text-dopamine-orange fill-dopamine-orange" />
          <span className="font-display font-extrabold text-sm text-amber-200">
            {streakDays} 天
          </span>
        </div>

        {/* XP Points */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 rounded-xl border border-slate-700/80">
          <Zap className="w-5 h-5 text-dopamine-yellow fill-dopamine-yellow" />
          <span className="font-display font-extrabold text-sm text-yellow-300">
            {xp} XP
          </span>
        </div>

        {/* Energy Hearts */}
        <button
          onClick={() => {
            sound.playPop();
            onRefillEnergy();
          }}
          title="点击补满能量"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-750 active:scale-95 transition-all rounded-xl border border-slate-700/80 group"
        >
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform" />
          <span className="font-display font-extrabold text-sm text-rose-300">
            {energy}
          </span>
        </button>

        {/* Mute Sound Toggle */}
        <button
          onClick={handleToggleSound}
          className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all active:scale-95"
          title={isMuted ? '开启声音' : '静音'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-rose-400" />
          ) : (
            <Volume2 className="w-5 h-5 text-dopamine-cyan" />
          )}
        </button>
      </div>
    </header>
  );
};
