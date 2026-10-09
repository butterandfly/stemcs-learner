import React, { useState } from 'react';
import { Flag, Footprints, Gauge, Award, Lock, Check, Star, Play, RotateCw, Compass, Sparkles } from 'lucide-react';
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

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag':
        return <Flag className="w-8 h-8 fill-white text-white" />;
      case 'Footprints':
        return <Footprints className="w-8 h-8 text-white stroke-[2.5]" />;
      case 'Gauge':
        return <Gauge className="w-8 h-8 text-white stroke-[2.5]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-white stroke-[2.5]" />;
      case 'RotateCw':
        return <RotateCw className="w-8 h-8 text-white stroke-[2.5]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-white stroke-[2.5]" />;
      default:
        return <Sparkles className="w-8 h-8 text-white" />;
    }
  };

  // Stepped horizontal offsets (pixels) for Duolingo curve
  const nodeOffsets = [0, 56, -56, 0];

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 flex flex-col items-center bg-[#F8FAFC]">
      {/* Unit Header Card (Light Mode, Guaranteed Height & No Content Clipping) */}
      <div className="shrink-0 w-full max-w-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/70 border-2 border-amber-300/80 rounded-3xl p-6 mb-12 shadow-sm relative">
        {/* Cat Avatar Accent */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-4xl shadow-inner select-none pointer-events-none">
          🐱
        </div>

        <div className="pr-24">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-amber-950 shadow-sm">
              {unit.badge}
            </span>
            <span className="text-xs font-mono font-extrabold text-amber-800 tracking-wider">
              UNIT {unit.unitNumber}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-display font-black text-slate-800 tracking-tight leading-snug">
            {unit.title}
          </h1>
          <p className="mt-1.5 text-sm text-slate-600 font-medium leading-relaxed">
            {unit.summary}
          </p>
        </div>
      </div>

      {/* Duolingo Winding Path */}
      <div className="relative flex flex-col items-center w-full max-w-md pb-24">
        {/* SVG Curved Connecting Path */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none -z-0"
          width="240"
          height={unit.nodes.length * 150}
          viewBox={`0 0 240 ${unit.nodes.length * 150}`}
          fill="none"
        >
          {/* Background thick path */}
          <path
            d={unit.nodes.reduce((acc, _, idx) => {
              const x = 120 + nodeOffsets[idx % nodeOffsets.length];
              const y = idx * 150 + 40;
              if (idx === 0) return `M ${x} ${y}`;
              const prevX = 120 + nodeOffsets[(idx - 1) % nodeOffsets.length];
              const prevY = (idx - 1) * 150 + 40;
              const midY = (prevY + y) / 2;
              return `${acc} C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`;
            }, '')}
            stroke="#E2E8F0"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Active / colored path overlay */}
          <path
            d={unit.nodes.reduce((acc, _, idx) => {
              const x = 120 + nodeOffsets[idx % nodeOffsets.length];
              const y = idx * 150 + 40;
              if (idx === 0) return `M ${x} ${y}`;
              const prevX = 120 + nodeOffsets[(idx - 1) % nodeOffsets.length];
              const prevY = (idx - 1) * 150 + 40;
              const midY = (prevY + y) / 2;
              return `${acc} C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`;
            }, '')}
            stroke="#38BDF8"
            strokeWidth="6"
            strokeDasharray="8 8"
            strokeLinecap="round"
            className="opacity-60"
          />
        </svg>

        {/* Nodes with Generous Vertical Rhythm */}
        {unit.nodes.map((node, index) => {
          const isCompleted = completedNodeIds.includes(node.id);
          const prevCompleted = index === 0 || completedNodeIds.includes(unit.nodes[index - 1].id);
          const isUnlocked = isCompleted || prevCompleted;
          const isCurrent = isUnlocked && !isCompleted;

          const offsetX = nodeOffsets[index % nodeOffsets.length];

          return (
            <div
              key={node.id}
              className="relative z-10 flex flex-col items-center justify-start h-[150px] select-none"
              style={{ transform: `translateX(${offsetX}px)` }}
            >
              {/* Floating "START / 开始" beacon banner */}
              {isCurrent && (
                <div className="absolute -top-9 z-20 px-3.5 py-1 bg-sky-500 text-white text-xs font-display font-black rounded-full shadow-[0_4px_10px_rgba(14,165,233,0.4)] animate-bounce flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" />
                  <span>开始</span>
                  {/* Downward triangle caret */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-sky-500" />
                </div>
              )}

              {/* 3D Dopamine Tactile Button */}
              <button
                disabled={!isUnlocked}
                onClick={() => {
                  sound.playPop();
                  setSelectedNode(node);
                }}
                className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-150 active:translate-y-1.5 active:shadow-none ${
                  isCompleted
                    ? 'bg-emerald-500 text-white shadow-dopamine-lime hover:bg-emerald-400'
                    : isCurrent
                    ? 'bg-sky-500 text-white shadow-dopamine-cyan ring-4 ring-sky-200 hover:bg-sky-400 scale-105'
                    : 'bg-slate-200 text-slate-400 shadow-chunky-gray cursor-not-allowed border border-slate-300'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-10 h-10 stroke-[3.5] text-white" />
                ) : isUnlocked ? (
                  getNodeIcon(node.icon)
                ) : (
                  <Lock className="w-7 h-7 text-slate-400" />
                )}
              </button>

              {/* Node Title & Description */}
              <div className="mt-2.5 text-center flex flex-col items-center max-w-[140px]">
                <span className="block text-sm font-display font-bold text-slate-800 leading-tight">
                  {node.title}
                </span>
                <span className="text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                  {node.shortDesc}
                </span>

                {/* Stars for Completed Nodes */}
                {isCompleted && (
                  <div className="flex gap-0.5 mt-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Node Inspector Modal / Start Sheet (Light Mode) */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-end md:items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-100 text-purple-700 border border-purple-200">
                知识点节点
              </span>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold px-2 py-1"
              >
                关闭
              </button>
            </div>

            <h3 className="text-2xl font-display font-black text-slate-800 mb-1">
              {selectedNode.title}
            </h3>
            <p className="text-slate-600 text-sm mb-5">
              {selectedNode.shortDesc}
            </p>

            <div className="flex items-center justify-between bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span className="text-sm font-bold text-amber-900">
                  挑战通关奖励
                </span>
              </div>
              <span className="text-base font-display font-black text-amber-600">
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
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-lg shadow-dopamine-lime active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all"
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
