import React, { useState } from 'react';
import { Flag, Footprints, Gauge, Award, Lock, Check, Star, Sparkles, Play, RotateCw, Compass } from 'lucide-react';
import { Unit, LearningNode } from '../types';
import { sound } from '../audio/sound';

interface PathViewProps {
  unit: Unit;
  completedNodeIds: string[];
  onStartNode: (node: LearningNode) => void;
}

export const PathView: React.FC<PathViewProps> = ({
  unit,
  completedNodeIds,
  onStartNode,
}) => {
  const [selectedNode, setSelectedNode] = useState<LearningNode | null>(null);

  // Helper to get node icon
  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag':
        return <Flag className="w-8 h-8 fill-emerald-400 text-emerald-950" />;
      case 'Footprints':
        return <Footprints className="w-8 h-8 text-sky-200" />;
      case 'Gauge':
        return <Gauge className="w-8 h-8 text-amber-200" />;
      case 'Award':
        return <Award className="w-8 h-8 text-yellow-300" />;
      case 'RotateCw':
        return <RotateCw className="w-8 h-8 text-purple-200" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-teal-200" />;
      default:
        return <Sparkles className="w-8 h-8 text-white" />;
    }
  };

  // Horizontal offsets for Duolingo-style winding path
  const getOffsetClass = (index: number) => {
    const cycle = index % 4;
    switch (cycle) {
      case 0:
        return 'translate-x-0';
      case 1:
        return 'translate-x-12';
      case 2:
        return '-translate-x-12';
      case 3:
        return 'translate-x-0';
      default:
        return 'translate-x-0';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
      {/* Unit Header Card */}
      <div className="w-full max-w-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 border-2 border-amber-500/40 rounded-3xl p-6 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute right-4 -bottom-6 text-8xl opacity-15 select-none pointer-events-none">
          🐱
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-slate-950">
            {unit.badge}
          </span>
          <span className="text-xs font-mono text-amber-300/80 uppercase">
            UNIT {unit.unitNumber}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-display font-black text-white tracking-wide">
          {unit.title}
        </h1>
        <p className="mt-1 text-sm text-slate-300 font-medium">
          {unit.summary}
        </p>
      </div>

      {/* Duolingo Winding Path of Learning Nodes */}
      <div className="relative flex flex-col items-center gap-12 w-full max-w-md pb-16">
        {/* Continuous Energy Conduit Line */}
        <div className="absolute top-10 bottom-10 w-2.5 bg-slate-800 rounded-full -z-0">
          <div className="w-full h-full bg-gradient-to-b from-dopamine-cyan via-dopamine-lime to-slate-800 opacity-60 rounded-full" />
        </div>

        {unit.nodes.map((node, index) => {
          const isCompleted = completedNodeIds.includes(node.id);
          // First incomplete node is active
          const prevCompleted = index === 0 || completedNodeIds.includes(unit.nodes[index - 1].id);
          const isUnlocked = isCompleted || prevCompleted;
          const isCurrent = isUnlocked && !isCompleted;

          const offsetClass = getOffsetClass(index);

          return (
            <div
              key={node.id}
              className={`relative z-10 flex flex-col items-center transition-transform duration-300 ${offsetClass}`}
            >
              {/* Floating "START / 当前关卡" tooltip banner for current node */}
              {isCurrent && (
                <div className="absolute -top-10 px-3.5 py-1 bg-dopamine-cyan text-slate-950 text-xs font-display font-black rounded-full shadow-[0_0_12px_rgba(0,229,255,0.8)] animate-bounce uppercase tracking-wider flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" />
                  <span>开始</span>
                </div>
              )}

              {/* Node Button (Chunky Dopamine 3D Button) */}
              <button
                disabled={!isUnlocked}
                onClick={() => {
                  sound.playPop();
                  setSelectedNode(node);
                }}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center transition-all duration-150 select-none ${
                  isCompleted
                    ? 'bg-emerald-500 shadow-[0_8px_0_#059669] hover:bg-emerald-400 active:translate-y-2 active:shadow-none'
                    : isCurrent
                    ? 'bg-dopamine-cyan shadow-[0_8px_0_#009BB0] ring-4 ring-dopamine-cyan/50 hover:bg-[#25F0FF] active:translate-y-2 active:shadow-none scale-105'
                    : 'bg-slate-800/80 shadow-[0_8px_0_#1E293B] text-slate-600 cursor-not-allowed opacity-60'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-10 h-10 text-slate-950 stroke-[3]" />
                ) : isUnlocked ? (
                  getNodeIcon(node.icon)
                ) : (
                  <Lock className="w-8 h-8 text-slate-500" />
                )}
              </button>

              {/* Node Title & Reward */}
              <div className="mt-3 text-center">
                <span className="block text-sm font-display font-bold text-white tracking-wide">
                  {node.title}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {node.shortDesc}
                </span>
              </div>

              {/* Star Rating for Completed Nodes */}
              {isCompleted && (
                <div className="flex gap-0.5 mt-1 text-dopamine-yellow">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Node Inspector Modal / Start Sheet */}
      {selectedNode && (
        <div className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm flex items-end md:items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 shadow-2xl animate-fade-in flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-dopamine-purple/30 text-purple-300 border border-purple-500/30">
                知识点节点
              </span>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-white text-sm font-bold"
              >
                关闭
              </button>
            </div>

            <h3 className="text-2xl font-display font-black text-white mb-1">
              {selectedNode.title}
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              {selectedNode.shortDesc}
            </p>

            <div className="flex items-center justify-between bg-slate-950/60 p-4 rounded-2xl border border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span className="text-sm font-bold text-slate-200">
                  挑战通关奖励
                </span>
              </div>
              <span className="text-base font-display font-extrabold text-dopamine-yellow">
                +{selectedNode.xp} XP
              </span>
            </div>

            <button
              onClick={() => {
                sound.playSnap();
                const nodeToStart = selectedNode;
                setSelectedNode(null);
                onStartNode(nodeToStart);
              }}
              className="w-full py-4 rounded-2xl bg-dopamine-lime hover:bg-[#12FF85] text-slate-950 font-display font-black text-lg shadow-dopamine-lime active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>开始挑战</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
