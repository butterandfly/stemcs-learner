import React from 'react';
import { CURRICULUM } from '../data/curriculum';
import { Lock, Code, Terminal, Cpu, RotateCcw, CheckCircle2 } from 'lucide-react';
import { sound } from '../audio/sound';

interface SidebarProps {
  activeModuleId: string;
  activeUnitId: string;
  completedNodeIds: string[];
  onSelectModule: (id: string) => void;
  onSelectUnit: (id: string) => void;
  onResetProgress: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModuleId,
  activeUnitId,
  completedNodeIds,
  onSelectModule,
  onSelectUnit,
  onResetProgress,
}) => {
  const currentModule = CURRICULUM.find((m) => m.id === activeModuleId) || CURRICULUM[0];

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
    <aside className="w-72 lg:w-80 h-full bg-slate-900/95 border-r border-slate-800 flex flex-col justify-between select-none">
      {/* App Branding */}
      <div>
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-dopamine-cyan to-dopamine-lime flex items-center justify-center font-display font-black text-slate-950 text-xl shadow-dopamine-cyan">
              CQ
            </div>
            <div>
              <h1 className="font-display font-black text-lg text-white tracking-wider flex items-center gap-1.5">
                <span>CodeQuest</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-dopamine-cyan/20 text-dopamine-cyan border border-dopamine-cyan/30">
                  STEM
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                iPad 多巴胺极客营
              </p>
            </div>
          </div>
        </div>

        {/* Module Switcher */}
        <div className="p-4 border-b border-slate-800/80">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 mb-2 tracking-wider">
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
                  className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-left transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : module.isLocked
                      ? 'text-slate-500 cursor-not-allowed hover:bg-transparent'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`p-1.5 rounded-lg ${
                        isActive
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {getModuleIcon(module.icon)}
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm">
                        {module.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {module.tagline}
                      </div>
                    </div>
                  </div>

                  {module.isLocked && (
                    <Lock className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Units Navigation for Current Module */}
        <div className="p-4 overflow-y-auto max-h-[calc(100vh-360px)]">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 mb-2 tracking-wider">
            章节导航
          </div>

          <div className="space-y-4">
            {currentModule.sections.map((section) => (
              <div key={section.id} className="space-y-1.5">
                <div className="px-2 text-xs font-bold text-slate-400">
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
                        className={`w-full px-3 py-2 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-dopamine-cyan/20 text-dopamine-cyan border border-dopamine-cyan/40 font-bold'
                            : 'text-slate-300 hover:bg-slate-800/60'
                        }`}
                      >
                        <span className="truncate pr-2">{unit.title}</span>
                        {isUnitCompleted && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
      <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <button
          onClick={() => {
            if (window.confirm('确定重置所有学习进度吗？')) {
              sound.playPop();
              onResetProgress();
            }
          }}
          className="flex items-center gap-1.5 text-slate-500 hover:text-rose-400 transition-colors"
          title="重置进度"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>重置进度</span>
        </button>

        <span className="text-[10px] font-mono text-slate-600">v0.1.0 · PWA</span>
      </div>
    </aside>
  );
};
