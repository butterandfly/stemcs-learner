import { useState, useEffect } from 'react';
import { CURRICULUM } from './data/curriculum';
import { useUserStore } from './data/useStore';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PathView } from './components/PathView';
import { LessonView } from './components/LessonView';
import { LearningNode } from './types';
import { Smartphone } from 'lucide-react';
import { registerSW } from 'virtual:pwa-register';

export default function App() {
  const {
    progress,
    activeModuleId,
    setActiveModuleId,
    activeUnitId,
    setActiveUnitId,
    completeNode,
    loseEnergy,
    refillEnergy,
    resetAllProgress,
  } = useUserStore();

  const [activeLessonNode, setActiveLessonNode] = useState<LearningNode | null>(null);
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  // Register PWA Service Worker for offline support
  useEffect(() => {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('New content available, auto-updating...');
      },
      onOfflineReady() {
        console.log('PWA is ready to work 100% offline!');
      },
    });
  }, []);

  // Monitor orientation: iPad landscape is prioritized
  useEffect(() => {
    const checkOrientation = () => {
      // If height is significantly larger than width, it's portrait
      setIsPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 768);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Get active unit data
  const currentModule = CURRICULUM.find((m) => m.id === activeModuleId) || CURRICULUM[0];
  const allUnits = currentModule.sections.flatMap((s) => s.units);
  const currentUnit = allUnits.find((u) => u.id === activeUnitId) || allUnits[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex bg-dopamine-surface text-slate-100 font-sans">
      {/* Landscape Advisor for small mobile portrait screens */}
      {isPortrait && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-8 text-center backdrop-blur-md">
          <div className="w-20 h-20 rounded-3xl bg-dopamine-cyan/20 border-2 border-dopamine-cyan flex items-center justify-center mb-6 animate-pulse">
            <Smartphone className="w-10 h-10 text-dopamine-cyan rotate-90" />
          </div>
          <h2 className="text-2xl font-display font-black text-white mb-2">
            请将设备横屏使用
          </h2>
          <p className="text-sm text-slate-400 max-w-xs mb-6">
            本应用专为 iPad 横屏设计，横屏可获得最佳的双栏编程与积木拼装体验。
          </p>
          <button
            onClick={() => setIsPortrait(false)}
            className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono font-bold hover:bg-slate-700"
          >
            强制竖屏预览
          </button>
        </div>
      )}

      {/* Main iPad Landscape Layout */}
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        activeModuleId={activeModuleId}
        activeUnitId={activeUnitId}
        completedNodeIds={progress.completedNodeIds}
        onSelectModule={setActiveModuleId}
        onSelectUnit={setActiveUnitId}
        onResetProgress={resetAllProgress}
      />

      {/* 2. Right Center Canvas: TopBar + Duolingo Path View */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-950/60 relative">
        <TopBar
          xp={progress.xp}
          streakDays={progress.streakDays}
          energy={progress.energy}
          onRefillEnergy={refillEnergy}
        />

        <PathView
          unit={currentUnit}
          completedNodeIds={progress.completedNodeIds}
          onStartNode={(node) => setActiveLessonNode(node)}
        />
      </main>

      {/* 3. Interactive Lesson Modal */}
      {activeLessonNode && (
        <LessonView
          node={activeLessonNode}
          userEnergy={progress.energy}
          onClose={() => setActiveLessonNode(null)}
          onLoseEnergy={loseEnergy}
          onComplete={(xpEarned) => {
            completeNode(activeLessonNode.id, xpEarned);
            setActiveLessonNode(null);
          }}
        />
      )}
    </div>
  );
}
