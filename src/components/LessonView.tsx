import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, Check, ArrowRight, RotateCcw, Monitor, Compass, CheckCircle2, Terminal, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LearningNode, ScratchBlock } from '../types';
import { BlockView } from './BlockView';
import { sound } from '../audio/sound';

interface LessonViewProps {
  node: LearningNode;
  userEnergy: number;
  onClose: () => void;
  onComplete: (xpEarned: number) => void;
  onLoseEnergy: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  node,
  userEnergy,
  onClose,
  onComplete,
  onLoseEnergy,
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [assembledBlocks, setAssembledBlocks] = useState<ScratchBlock[]>([]);
  const [availableBlocks, setAvailableBlocks] = useState<ScratchBlock[]>([]);
  const [missionDone, setMissionDone] = useState(false);

  // Result check state: 'idle' | 'correct' | 'wrong'
  const [checkState, setCheckState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [isFinished, setIsFinished] = useState(false);

  const question = node.questions[currentQIndex];
  const progressPercent = ((currentQIndex + (checkState === 'correct' ? 1 : 0)) / node.questions.length) * 100;

  useEffect(() => {
    if (!question) return;

    setSelectedOptionId(null);
    setCheckState('idle');
    setMissionDone(false);

    if (question.type === 'block_assemble' && question.availableBlocks) {
      setAvailableBlocks([...question.availableBlocks]);
      setAssembledBlocks([]);
    }
  }, [currentQIndex, question]);

  if (!question) {
    return null;
  }

  // Handle assembling blocks
  const handleAddToAssembled = (block: ScratchBlock) => {
    sound.playSnap();
    setAvailableBlocks((prev) => prev.filter((b) => b.id !== block.id));

    // If the assembled list already has a C-block and this is an action/cap block, nest it inside!
    setAssembledBlocks((prev) => {
      const cBlockIndex = prev.findIndex((b) => b.shape === 'c-block');
      if (cBlockIndex !== -1 && (block.category === 'motion' || block.category === 'sound' || block.category === 'looks' || block.shape === 'cap')) {
        const copy = [...prev];
        const cBlock = { ...copy[cBlockIndex] };
        cBlock.nestedBlocks = [...(cBlock.nestedBlocks || []), block];
        copy[cBlockIndex] = cBlock;
        return copy;
      }
      return [...prev, block];
    });
  };

  const handleRemoveFromAssembled = (block: ScratchBlock) => {
    sound.playPop();

    // Remove from root or from nested C-block
    setAssembledBlocks((prev) => {
      const isRoot = prev.some((b) => b.id === block.id);
      if (isRoot) {
        return prev.filter((b) => b.id !== block.id);
      }
      return prev.map((b) => {
        if (b.nestedBlocks && b.nestedBlocks.some((n) => n.id === block.id)) {
          return {
            ...b,
            nestedBlocks: b.nestedBlocks.filter((n) => n.id !== block.id),
          };
        }
        return b;
      });
    });

    setAvailableBlocks((prev) => [...prev, block]);
  };

  // Submit check
  const handleCheck = () => {
    let isCorrect = false;

    if (question.type === 'select_one' || question.type === 'predict_output') {
      const selected = question.options?.find((opt) => opt.id === selectedOptionId);
      isCorrect = !!selected?.isCorrect;
    } else if (question.type === 'block_assemble') {
      // Flatten root and nested blocks
      const flatIds: string[] = [];
      assembledBlocks.forEach((b) => {
        flatIds.push(b.id);
        if (b.nestedBlocks) {
          b.nestedBlocks.forEach((nested) => flatIds.push(nested.id));
        }
      });
      const expectedIds = question.correctBlockSequence || [];
      isCorrect =
        flatIds.length === expectedIds.length &&
        flatIds.every((id, idx) => id === expectedIds[idx]);
    } else if (question.type === 'action_mission') {
      isCorrect = missionDone;
    }

    if (isCorrect) {
      setCheckState('correct');
      sound.playSuccess();

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0EA5E9', '#22C55E', '#F59E0B'],
      });
    } else {
      setCheckState('wrong');
      sound.playError();
      onLoseEnergy();
    }
  };

  // Proceed to next question or complete level
  const handleContinue = () => {
    if (currentQIndex < node.questions.length - 1) {
      sound.playPop();
      setCurrentQIndex((prev) => prev + 1);
    } else {
      sound.playLevelUp();
      setIsFinished(true);

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#0EA5E9', '#22C55E', '#F43F5E', '#F59E0B', '#8B5CF6'],
      });
    }
  };

  const isCheckDisabled = () => {
    if (checkState !== 'idle') return false;
    if (question.type === 'select_one' || question.type === 'predict_output') {
      return !selectedOptionId;
    }
    if (question.type === 'block_assemble') {
      return assembledBlocks.length === 0;
    }
    if (question.type === 'action_mission') {
      return !missionDone;
    }
    return false;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col select-none overflow-hidden animate-fade-in text-slate-800">
      {/* Top Header Bar */}
      <header className="shrink-0 h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shadow-sm">
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all active:scale-95"
          title="退出"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Progress Bar (Juicy Emerald & Sky) */}
        <div className="flex-1 max-w-xl h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Hearts / Energy */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span className="font-display font-black text-sm text-rose-800">
            {userEnergy}
          </span>
        </div>
      </header>

      {/* Main Content Area - Split-Screen on iPad Landscape */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Challenge & Interactive Zone (60%) */}
        <div className="flex-1 flex flex-col p-6 lg:p-10 overflow-y-auto">
          {/* Question Title & Prompt */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
                第 {currentQIndex + 1} / {node.questions.length} 步
              </span>
              {question.promptEn && (
                <span className="text-xs font-mono text-slate-400 truncate">
                  {question.promptEn}
                </span>
              )}
            </div>

            <h2 className="text-2xl lg:text-3xl font-display font-black text-slate-800 tracking-tight leading-snug">
              {question.prompt}
            </h2>
            {question.subtext && (
              <p className="mt-1 text-sm text-slate-500 font-medium">
                {question.subtext}
              </p>
            )}
          </div>

          {/* Interactive Work Area */}
          <div className="flex-1 flex flex-col justify-center">
            {/* 1. Multiple Choice / Prediction */}
            {(question.type === 'select_one' || question.type === 'predict_output') && (
              <div className="grid grid-cols-1 gap-3.5 max-w-xl">
                {question.options?.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  return (
                    <div
                      key={option.id}
                      onClick={() => {
                        if (checkState !== 'idle') return;
                        sound.playPop();
                        setSelectedOptionId(option.id);
                      }}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-sky-50 border-sky-500 text-slate-900 shadow-[0_4px_0_#0284C7] ring-2 ring-sky-200 scale-[1.01]'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {option.block ? (
                          <BlockView block={option.block} size="compact" />
                        ) : (
                          <span className="text-base font-bold text-slate-800">
                            {option.text}
                          </span>
                        )}
                      </div>

                      {/* Radio indicator */}
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-sky-500 bg-sky-500 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 2. Block Assemble Dock & Tray */}
            {question.type === 'block_assemble' && (
              <div className="flex flex-col gap-6 max-w-xl">
                {/* Script Dock (Assembled script) */}
                <div className="min-h-[160px] p-5 bg-white rounded-3xl border-2 border-dashed border-sky-300 shadow-sm flex flex-col gap-2">
                  <div className="text-xs font-mono font-bold text-slate-500 mb-1 flex items-center justify-between">
                    <span>运行轨道 (点击积木可拆卸)</span>
                    <span className="text-sky-600 font-extrabold">
                      已装配 {assembledBlocks.length} 组积木
                    </span>
                  </div>

                  {assembledBlocks.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-slate-400 text-sm font-medium py-8">
                      从下方点击积木依次拼入此处
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 items-start">
                      {assembledBlocks.map((block) => (
                        <BlockView
                          key={block.id}
                          block={block}
                          onClick={() => {
                            if (checkState !== 'idle') return;
                            handleRemoveFromAssembled(block);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Available Blocks Tray */}
                <div>
                  <div className="text-xs font-mono font-bold text-slate-500 mb-2">
                    备选积木托盘
                  </div>
                  <div className="flex flex-wrap gap-3 p-4 bg-slate-100/90 rounded-2xl border border-slate-200 min-h-[70px] items-center">
                    {availableBlocks.map((block) => (
                      <BlockView
                        key={block.id}
                        block={block}
                        onClick={() => {
                          if (checkState !== 'idle') return;
                          handleAddToAssembled(block);
                        }}
                      />
                    ))}
                    {availableBlocks.length === 0 && (
                      <span className="text-xs text-slate-400 italic">
                        所有积木已加入轨道
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 3. Computer Action Mission Step */}
            {question.type === 'action_mission' && (
              <div className="max-w-xl space-y-4">
                <div className="p-6 bg-gradient-to-br from-sky-50 to-emerald-50 rounded-3xl border-2 border-sky-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                      {node.id.includes('cli') || node.id.includes('terminal') ? (
                        <Terminal className="w-6 h-6" />
                      ) : (
                        <Monitor className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-slate-800">
                        {question.missionStep?.title || '电脑实操任务清单'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {node.id.includes('cli') || node.id.includes('terminal')
                          ? '请在你的电脑上打开终端 (Terminal / PowerShell) 进行同步实操'
                          : '请在你的电脑屏幕上打开 Scratch 3.0 进行同步操作'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 font-medium text-sm text-slate-700">
                    {question.missionStep?.description
                      ? question.missionStep.description
                          .split('\n')
                          .filter(Boolean)
                          .map((line, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 bg-white/90 p-3 rounded-xl border border-sky-100 shadow-xs"
                            >
                              <span className="w-5 h-5 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-xs md:text-sm font-medium leading-relaxed">
                                {line.replace(/^[0-9]+\.\s*/, '')}
                              </span>
                            </div>
                          ))
                      : null}
                  </div>
                </div>

                {/* Practical Confirmation Checkbox Button */}
                <button
                  onClick={() => {
                    sound.playSnap();
                    setMissionDone(!missionDone);
                  }}
                  className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                    missionDone
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-[0_4px_0_#16A34A]'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 font-display font-bold text-base">
                    <CheckCircle2
                      className={`w-6 h-6 ${
                        missionDone ? 'text-emerald-500 fill-emerald-100' : 'text-slate-300'
                      }`}
                    />
                    <span>
                      {node.id.includes('cli') || node.id.includes('terminal')
                        ? '我已在电脑终端输入并测试成功！'
                        : '我已在电脑 Scratch 上拼好并测试成功！'}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    {missionDone ? '已就绪' : '点击确认'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Scratch / Terminal Blueprint Desk (40%) */}
        <div className="w-[42%] max-w-[460px] p-6 lg:p-8 border-l border-slate-200 bg-slate-50 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Desk Title */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                  {node.blueprint.reviewChecklist ? (
                    <Award className="w-4 h-4 text-amber-600" />
                  ) : node.blueprint.cliWindowPreview ? (
                    <Terminal className="w-4 h-4" />
                  ) : (
                    <Compass className="w-4 h-4" />
                  )}
                </span>
                <span className="font-display font-black text-sm text-slate-800">
                  {node.blueprint.title}
                </span>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                  node.blueprint.reviewChecklist
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {node.blueprint.reviewChecklist
                  ? '实战考核 · 不给代码'
                  : node.blueprint.cliWindowPreview
                  ? '极客终端看板'
                  : 'DK 规范代码'}
              </span>
            </div>

            {/* Review Checklist (When no complete code is given!) */}
            {node.blueprint.reviewChecklist && (
              <div className="space-y-4 mb-6">
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-amber-950 font-display font-black text-sm">
                    <span className="text-base">🎯</span>
                    <span>{node.blueprint.reviewChecklist.title}</span>
                  </div>
                  <div className="space-y-2">
                    {node.blueprint.reviewChecklist.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs bg-white/95 p-3 rounded-xl border border-amber-200 shadow-xs"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <strong className="text-slate-800 font-bold block">{item.label}</strong>
                          <span className="text-slate-500 text-[11px] leading-relaxed block mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Allowed Tools Clues (Only command names, no answers!) */}
                {node.blueprint.reviewChecklist.allowedCommands &&
                  node.blueprint.reviewChecklist.allowedCommands.length > 0 && (
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                      <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                        可用极客工具库 (回忆线索)
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {node.blueprint.reviewChecklist.allowedCommands.map((cmd, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30 shadow-xs"
                          >
                            $ {cmd}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            )}

            {/* 1. Terminal Window Preview (For CLI nodes) */}
            {node.blueprint.cliWindowPreview && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-md mb-6 bg-slate-950 text-slate-100 font-mono text-xs">
                {/* Traffic lights header */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">
                    bash / zsh — {node.blueprint.cliWindowPreview.currentPath}
                  </span>
                  <div className="w-12" />
                </div>

                {/* Session lines */}
                <div className="p-4 space-y-1.5 min-h-[160px] leading-relaxed">
                  {node.blueprint.cliWindowPreview.terminalLines.map((line, idx) => {
                    if (line.type === 'input') {
                      return (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold select-none">$</span>
                          <span className="text-slate-100 font-bold">{line.text}</span>
                        </div>
                      );
                    } else if (line.type === 'comment') {
                      return (
                        <div key={idx} className="text-slate-500 italic select-none">
                          # {line.text}
                        </div>
                      );
                    } else {
                      return (
                        <div key={idx} className="text-sky-300/90 pl-3">
                          {line.text}
                        </div>
                      );
                    }
                  })}
                  <div className="flex items-center gap-1 text-emerald-400">
                    <span className="font-bold select-none">$</span>
                    <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* 2. Scratch Block Blueprint (For Scratch nodes) */}
            {node.blueprint.blocks && node.blueprint.blocks.length > 0 && (
              <div className="p-6 bg-white rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col items-start gap-1 relative overflow-hidden mb-6">
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative z-10 flex flex-col items-start">
                  {node.blueprint.blocks.map((b) => (
                    <BlockView key={b.id} block={b} />
                  ))}
                </div>
              </div>
            )}

            {/* 3. Terminal Command Radar */}
            {node.blueprint.cliCommands && node.blueprint.cliCommands.length > 0 && (
              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  指令速查雷达 (Command Radar)
                </div>
                <div className="space-y-2">
                  {node.blueprint.cliCommands.map((cmd, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <code className="text-xs font-mono font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          $ {cmd.usage}
                        </code>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          例: {cmd.example}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {cmd.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Scratch Categories Radar Guide (If Scratch blocks exist) */}
            {node.blueprint.blocks && node.blueprint.blocks.length > 0 && (
              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  积木寻宝雷达 (分类指引)
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FFBF00] border border-amber-600" />
                      <strong>事件 (Events)</strong>
                    </div>
                    <span className="font-mono text-amber-800">when ⚑ clicked</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FFAB19] border border-orange-600" />
                      <strong>控制 (Control)</strong>
                    </div>
                    <span className="font-mono text-orange-800">forever</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#4C97FF] border border-sky-600" />
                      <strong>运动 (Motion)</strong>
                    </div>
                    <span className="font-mono text-sky-800">go to mouse-pointer</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Blueprint Tip */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-900 leading-relaxed font-medium">
            💡 {node.blueprint.tip}
          </div>
        </div>
      </div>

      {/* Bottom Action / Feedback Drawer */}
      <footer
        className={`px-8 py-5 border-t-2 transition-all duration-300 flex items-center justify-between ${
          checkState === 'correct'
            ? 'bg-emerald-50 border-emerald-300'
            : checkState === 'wrong'
            ? 'bg-rose-50 border-rose-300'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-4">
          {checkState === 'correct' && (
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-dopamine-lime">
                <Check className="w-6 h-6 stroke-[3.5]" />
              </div>
              <div>
                <h4 className="text-lg font-display font-black text-emerald-900">
                  非常正确！
                </h4>
                <p className="text-sm text-emerald-800 font-medium">
                  {question.successMessage}
                </p>
              </div>
            </div>
          )}

          {checkState === 'wrong' && (
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shadow-dopamine-pink">
                <X className="w-6 h-6 stroke-[3.5]" />
              </div>
              <div>
                <h4 className="text-lg font-display font-black text-rose-900">
                  再思考一下
                </h4>
                <p className="text-sm text-rose-800 font-medium">
                  提示：仔细观察右侧代码蓝图的形状与嵌套关系。
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div>
          {checkState === 'idle' && (
            <button
              onClick={handleCheck}
              disabled={isCheckDisabled()}
              className={`px-8 py-3.5 rounded-2xl font-display font-black text-base uppercase tracking-wider transition-all ${
                isCheckDisabled()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-dopamine-lime active:translate-y-1 active:shadow-none'
              }`}
            >
              检查
            </button>
          )}

          {checkState === 'correct' && (
            <button
              onClick={handleContinue}
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-base shadow-dopamine-lime active:translate-y-1 active:shadow-none flex items-center gap-2"
            >
              <span>继续</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          )}

          {checkState === 'wrong' && (
            <button
              onClick={() => {
                sound.playPop();
                setCheckState('idle');
              }}
              className="px-8 py-3.5 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-display font-black text-base shadow-dopamine-pink active:translate-y-1 active:shadow-none flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>重新尝试</span>
            </button>
          )}
        </div>
      </footer>

      {/* Level Complete Celebration Modal */}
      {isFinished && (
        <div className="fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl flex flex-col items-center">
            {/* Dopamine Trophy */}
            <div className="w-24 h-24 rounded-3xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-bounce">
              <Sparkles className="w-12 h-12 text-amber-500" />
            </div>

            <h3 className="text-3xl font-display font-black text-slate-800 mb-2">
              关卡通过！
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              你已经掌握了「{node.title}」的核心逻辑与 Scratch 拼装！
            </p>

            {/* XP reward card */}
            <div className="flex items-center justify-center gap-3 bg-amber-50 px-6 py-3.5 rounded-2xl border border-amber-200 mb-8 w-full shadow-sm">
              <span className="text-2xl">⚡</span>
              <span className="font-display font-black text-2xl text-amber-600">
                +{node.xp} XP
              </span>
            </div>

            <button
              onClick={() => {
                sound.playPop();
                onComplete(node.xp);
              }}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-lg shadow-dopamine-lime active:translate-y-1 active:shadow-none transition-all"
            >
              继续前进
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
