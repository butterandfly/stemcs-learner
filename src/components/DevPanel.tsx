import React from 'react';
import { X, Wrench, RotateCcw, Unlock, Zap, Heart, Play, Sparkles } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { LearningNode, UserProgress } from '../types';
import { sound } from '../audio/sound';

interface DevPanelProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onResetProgress: () => void;
  onUnlockAll: () => void;
  onAddXp: (amount: number) => void;
  onRefillEnergy: () => void;
  onJumpToNode: (node: LearningNode) => void;
}

export const DevPanel: React.FC<DevPanelProps> = ({
  isOpen,
  onClose,
  progress,
  onResetProgress,
  onUnlockAll,
  onAddXp,
  onRefillEnergy,
  onJumpToNode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in select-none">
      <div className="bg-white border-2 border-slate-300 rounded-3xl p-6 max-w-lg w-full shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center shadow-sm">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-slate-800 flex items-center gap-2">
                <span>开发者调试面板</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                  DEV MODE
                </span>
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                快速重置、关卡跳转与调试作弊器
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"
            title="关闭"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto py-5 space-y-6">
          {/* 1. Quick Cheats Grid */}
          <div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              快捷指令 (Cheats)
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  sound.playPop();
                  onResetProgress();
                }}
                className="p-3 rounded-2xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-2 transition-all active:scale-95 text-left"
              >
                <RotateCcw className="w-4 h-4 text-rose-600 shrink-0" />
                <span>清空学习记录</span>
              </button>

              <button
                onClick={() => {
                  sound.playSuccess();
                  onUnlockAll();
                }}
                className="p-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2 transition-all active:scale-95 text-left"
              >
                <Unlock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>一键解锁全关卡</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  onAddXp(100);
                }}
                className="p-3 rounded-2xl border-2 border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-2 transition-all active:scale-95 text-left"
              >
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>增加 100 XP</span>
              </button>

              <button
                onClick={() => {
                  sound.playPop();
                  onRefillEnergy();
                }}
                className="p-3 rounded-2xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-2 transition-all active:scale-95 text-left"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                <span>补满 5 格生命</span>
              </button>
            </div>
          </div>

          {/* Current State Stats */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex justify-between">
            <span>当前 XP: <strong>{progress.xp}</strong></span>
            <span>已通关节点: <strong>{progress.completedNodeIds.length}</strong></span>
            <span>生命值: <strong>{progress.energy}</strong></span>
          </div>

          {/* 2. Jump to Any Node */}
          <div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              关卡直通车 (Jump to Node)
            </div>

            <div className="space-y-4">
              {CURRICULUM.map((module) => (
                <div key={module.id} className="space-y-2">
                  <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{module.name}</span>
                  </div>

                  <div className="space-y-2">
                    {module.sections.flatMap((s) => s.units).map((unit) => (
                      <div key={unit.id} className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
                        <div className="text-xs font-extrabold text-slate-700">
                          {unit.title}
                        </div>

                        <div className="space-y-1.5">
                          {unit.nodes.map((node) => {
                            const isCompleted = progress.completedNodeIds.includes(node.id);
                            return (
                              <div
                                key={node.id}
                                className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 hover:border-sky-300 transition-all text-xs"
                              >
                                <div className="flex items-center gap-2 truncate pr-2">
                                  <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                  <span className="font-bold text-slate-800">{node.title}</span>
                                  <span className="text-[11px] text-slate-400 truncate">({node.titleEn})</span>
                                </div>

                                <button
                                  onClick={() => {
                                    sound.playSnap();
                                    onJumpToNode(node);
                                    onClose();
                                  }}
                                  className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-sm flex items-center gap-1 shrink-0 active:scale-95"
                                >
                                  <Play className="w-3 h-3 fill-current" />
                                  <span>直接开始</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 text-center">
          <span className="text-[11px] font-mono text-slate-400">
            提示：在主界面连续点击「CQ」Logo 5 次即可随时调出此面板
          </span>
        </div>
      </div>
    </div>
  );
};
