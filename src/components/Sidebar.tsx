import React from 'react';
import { CURRICULUM } from '../data/curriculum';
import { Lock, Code, Terminal, Cpu, RotateCcw, CheckCircle2, X } from 'lucide-react';
import { sound } from '../audio/sound';

interface SidebarProps {
  activeModuleId: string;
  activeUnitId: string;
  completedNodeIds: string[];
  onSelectModule: (id: string) => void;
  onSelectUnit: (id: string) => void;
  onResetProgress: () => void;
  onCloseMobile?: () => void;
  onToggleDevPanel?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModuleId,
  activeUnitId,
  completedNodeIds,
  onSelectModule,
  onSelectUnit,
  onResetProgress,
  onCloseMobile,
  onToggleDevPanel,
}) => {
  const [logoClicks, setLogoClicks] = React.useState(0);
  const currentModule = CURRICULUM.find((m) => m.id === activeModuleId) || CURRICULUM[0];

  const handleLogoClick = () => {
    sound.playPop();
    const next = logoClicks + 1;
    setLogoClicks(next);

    if (next >= 5) {
      sound.playLevelUp();
      setLogoClicks(0);
      onToggleDevPanel?.();
    } else {
      setTimeout(() => setLogoClicks(0), 3000);
    }
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cat':
        return <Code className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <aside className="shrink-0 w-72 lg:w-80 h-full bg-white border-r border-slate-200 flex flex-col justify-between select-none shadow-[2px_0_8px_rgba(0,0,0,0.02)] z-40">
      {/* Top Branding & Module Selection */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              title="连续点击 5 次打开开发者面板"
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-emerald-400 flex items-center justify-center font-display font-black text-white text-xl shadow-md active:scale-95 transition-transform cursor-pointer relative group"
            >
              <span>CQ</span>
              {logoClicks > 1 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-900 rounded-full text-[10px] font-mono font-bold flex items-center justify-center shadow">
                  {logoClicks}
                </span>
              )}
            </button>
            <div>
              <h1 className="font-display font-black text-lg text-slate-800 tracking-wider flex items-center gap-1.5">
                <span>CodeQuest</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-200">
                  STEM
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                iPad 多巴胺营地
              </p>
            </div>
          </div>

          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Module Switcher */}
        <div className="p-4 border-b border-slate-100">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase px-2 mb-2 tracking-wider">
            学习模块
          </div>
          <div className="flex flex-col gap-1.5">
            {CURRICULUM.map((module) => {
              const isActive = module.id === activeModuleId;
              return (
                <button
                  key={module.id}
                  disabled={module.isLocked}
                  onClick={() => {
                    sound.playPop();
                    onSelectModule(module.id);
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-2xl flex items-center justify-between text-left transition-all ${
                    isActive
                      ? 'bg-amber-100/80 text-amber-950 border-2 border-amber-300 shadow-sm'
                      : module.isLocked
                      ? 'text-slate-400 cursor-not-allowed hover:bg-transparent opacity-60'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`p-2 rounded-xl ${
                        isActive
                          ? 'bg-amber-400 text-amber-950 shadow-sm'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {getModuleIcon(module.icon)}
                    </span>
                    <div>
                      <div className="font-display font-black text-sm">
                        {module.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {module.tagline}
                      </div>
                    </div>
                  </div>

                  {module.isLocked && (
                    <Lock className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Units Navigation for Current Module */}
        <div className="p-4">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase px-2 mb-2 tracking-wider">
            章节导航
          </div>

          <div className="space-y-4">
            {currentModule.sections.map((section) => (
              <div key={section.id} className="space-y-1.5">
                <div className="px-2 text-xs font-bold text-slate-500">
                  {section.title}
                </div>

                <div className="space-y-1">
                  {section.units.map((unit) => {
                    const isSelected = unit.id === activeUnitId;
                    const isUnitCompleted =
                      unit.nodes.length > 0 &&
                      unit.nodes.every((n) => completedNodeIds.includes(n.id));

                    return (
                      <button
                        key={unit.id}
                        onClick={() => {
                          sound.playPop();
                          onSelectUnit(unit.id);
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-sky-50 text-sky-900 border-2 border-sky-300 font-black shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 font-medium'
                        }`}
                      >
                        <span className="truncate pr-2">{unit.title}</span>
                        {isUnitCompleted && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Controls */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <button
          onClick={() => {
            if (window.confirm('确定重置所有学习进度吗？')) {
              sound.playPop();
              onResetProgress();
            }
          }}
          className="flex items-center gap-1.5 text-slate-400 hover:text-rose-600 transition-colors font-medium"
          title="重置进度"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>重置进度</span>
        </button>

        <span className="text-[10px] font-mono text-slate-400">v0.1.0 · PWA</span>
      </div>
    </aside>
  );
};
