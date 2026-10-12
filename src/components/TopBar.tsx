import React, { useState } from 'react';
import { Flame, Zap, Heart, Volume2, VolumeX, Wifi, WifiOff, Menu } from 'lucide-react';
import { sound } from '../audio/sound';

interface TopBarProps {
  xp: number;
  streakDays: number;
  energy: number;
  currentUser?: {
    name: string;
    avatar: string;
  };
  onOpenUserManager?: () => void;
  onRefillEnergy: () => void;
  onToggleSidebar?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  xp,
  streakDays,
  energy,
  currentUser,
  onOpenUserManager,
  onRefillEnergy,
  onToggleSidebar,
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
    <header className="shrink-0 h-16 px-4 md:px-6 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between z-30 select-none shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      {/* Left: Mobile / Tablet Sidebar Toggle & Offline Status Badge */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={() => {
              sound.playPop();
              onToggleSidebar();
            }}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="切换章节导航"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2 text-xs font-mono font-bold">
          {isOnline ? (
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
              <Wifi className="w-3.5 h-3.5 text-emerald-600" />
              <span>离线可用</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm">
              <WifiOff className="w-3.5 h-3.5 text-amber-600" />
              <span>离线运行中</span>
            </span>
          )}
        </div>
      </div>

      {/* Right Gamification Stats: Student Profile, Streak, XP, Hearts, Sound */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Active Student Chip Button */}
        {currentUser && onOpenUserManager && (
          <button
            onClick={() => {
              sound.playPop();
              onOpenUserManager();
            }}
            className="flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 bg-amber-50 hover:bg-amber-100/90 active:scale-95 transition-all rounded-2xl border-2 border-amber-300 shadow-sm cursor-pointer group"
            title="点击切换或管理学生档案"
          >
            <span className="text-xl -my-1 group-hover:scale-110 transition-transform">
              {currentUser.avatar}
            </span>
            <span className="font-display font-black text-xs md:text-sm text-amber-950 truncate max-w-[80px] md:max-w-[120px]">
              {currentUser.name}
            </span>
            <span className="text-[10px] text-amber-700 opacity-70 group-hover:opacity-100">▼</span>
          </button>
        )}

        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 rounded-xl border border-orange-200 shadow-sm">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="font-display font-black text-xs md:text-sm text-orange-950">
            {streakDays} 天
          </span>
        </div>

        {/* XP Points */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-200 shadow-sm">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="font-display font-black text-xs md:text-sm text-amber-950">
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
          className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 active:scale-95 transition-all rounded-xl border border-rose-200 shadow-sm group"
        >
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform" />
          <span className="font-display font-black text-xs md:text-sm text-rose-900">
            {energy}
          </span>
        </button>

        {/* Mute Sound Toggle */}
        <button
          onClick={handleToggleSound}
          className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          title={isMuted ? '开启声音' : '静音'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-rose-500" />
          ) : (
            <Volume2 className="w-4 h-4 text-sky-600" />
          )}
        </button>
      </div>
    </header>
  );
};
