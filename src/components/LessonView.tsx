import React, { useState, useEffect } from 'react';
import { X, Heart, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LearningNode, ScratchBlock } from '../types';
import { BlockView } from './BlockView';
import { ScratchStage } from './ScratchStage';
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

  // Stage state
  const [stageX, setStageX] = useState<number>(0);
  const [stageY, setStageY] = useState<number>(0);
  const [speech, setSpeech] = useState<string | undefined>(undefined);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Result check state: 'idle' | 'correct' | 'wrong'
  const [checkState, setCheckState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [isFinished, setIsFinished] = useState(false);

  const question = node.questions[currentQIndex];
  const progressPercent = ((currentQIndex + (checkState === 'correct' ? 1 : 0)) / node.questions.length) * 100;

  useEffect(() => {
    if (!question) return;

    setSelectedOptionId(null);
    setCheckState('idle');

    if (question.type === 'block_assemble' && question.availableBlocks) {
      setAvailableBlocks([...question.availableBlocks]);
      setAssembledBlocks([]);
    }

    if (question.stageConfig) {
      setStageX(question.stageConfig.initialX);
      setStageY(question.stageConfig.initialY);
      setSpeech(question.stageConfig.speechText);
    } else {
      setStageX(0);
      setStageY(0);
      setSpeech(undefined);
    }
  }, [currentQIndex, question]);

  if (!question) {
    return null;
  }

  // Handle assembling blocks
  const handleAddToAssembled = (block: ScratchBlock) => {
    sound.playSnap();
    setAvailableBlocks((prev) => prev.filter((b) => b.id !== block.id));
    setAssembledBlocks((prev) => [...prev, block]);
  };

  const handleRemoveFromAssembled = (block: ScratchBlock) => {
    sound.playPop();
    setAssembledBlocks((prev) => prev.filter((b) => b.id !== block.id));
    setAvailableBlocks((prev) => [...prev, block]);
  };

  // Run simulation preview on stage
  const runSimulation = () => {
    setIsRunning(true);
    if (question.stageConfig) {
      if (question.stageConfig.actionType === 'move') {
        const delta = Number(question.stageConfig.actionValue || 50);
        setStageX((prev) => prev + delta);
      } else if (question.stageConfig.actionType === 'say') {
        setSpeech(question.stageConfig.speechText || '你好！');
        sound.playCatMeow();
      }
    }
    setTimeout(() => {
      setIsRunning(false);
    }, 800);
  };

  const resetSimulation = () => {
    if (question.stageConfig) {
      setStageX(question.stageConfig.initialX);
      setStageY(question.stageConfig.initialY);
      setSpeech(question.stageConfig.speechText);
    } else {
      setStageX(0);
      setStageY(0);
      setSpeech(undefined);
    }
  };

  // Submit check
  const handleCheck = () => {
    let isCorrect = false;

    if (question.type === 'select_one' || question.type === 'predict_output' || question.type === 'parameter_tune') {
      const selected = question.options?.find((opt) => opt.id === selectedOptionId);
      isCorrect = !!selected?.isCorrect;
    } else if (question.type === 'block_assemble') {
      const assembledIds = assembledBlocks.map((b) => b.id);
      const expectedIds = question.correctBlockSequence || [];
      isCorrect =
        assembledIds.length === expectedIds.length &&
        assembledIds.every((id, idx) => id === expectedIds[idx]);
    }

    if (isCorrect) {
      setCheckState('correct');
      sound.playSuccess();
      runSimulation();

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
    if (question.type === 'select_one' || question.type === 'predict_output' || question.type === 'parameter_tune') {
      return !selectedOptionId;
    }
    if (question.type === 'block_assemble') {
      return assembledBlocks.length === 0;
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

      {/* Main Content Area - iPad Landscape Split-Screen */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Challenge & Interaction Zone (60%) */}
        <div className="flex-1 flex flex-col p-6 lg:p-8 overflow-y-auto">
          {/* Prompt */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-purple-100 text-purple-800 border border-purple-200 mb-2">
              第 {currentQIndex + 1} / {node.questions.length} 题
            </span>
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
            {/* 1. Multiple Choice / Prediction / Tune */}
            {(question.type === 'select_one' ||
              question.type === 'predict_output' ||
              question.type === 'parameter_tune') && (
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
                          <span className="text-base font-bold text-slate-800">{option.text}</span>
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
                {/* Script Dock (Assembled sequence) */}
                <div className="min-h-[140px] p-5 bg-white rounded-3xl border-2 border-dashed border-sky-300 shadow-sm flex flex-col gap-2">
                  <div className="text-xs font-mono font-bold text-slate-500 mb-1 flex items-center justify-between">
                    <span>运行轨道 (点击积木可放回)</span>
                    <span className="text-sky-600 font-extrabold">
                      已放入 {assembledBlocks.length} 个积木
                    </span>
                  </div>

                  {assembledBlocks.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-slate-400 text-sm font-medium">
                      从下方点击积木拼入此处
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
                    待选积木托盘
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
          </div>
        </div>

        {/* Right Side: Scratch Stage Simulation (40% width on iPad Landscape) */}
        <div className="w-[42%] max-w-[460px] p-6 lg:p-8 border-l border-slate-200 bg-slate-50/50 flex flex-col">
          <ScratchStage
            x={stageX}
            y={stageY}
            speechText={speech}
            targetX={question.stageConfig?.targetX}
            isRunning={isRunning}
            onRun={runSimulation}
            onReset={resetSimulation}
          />
        </div>
      </div>

      {/* Bottom Action / Feedback Drawer (Light Mode Duolingo Drawer) */}
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
                  提示：仔细观察积木的形状与颜色分类。
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

      {/* Level Complete Celebration Modal (Light Mode) */}
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
              你已经掌握了「{node.title}」的核心知识！
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
