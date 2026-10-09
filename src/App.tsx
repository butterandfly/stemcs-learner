import { useState, useEffect } from 'react';
import { CURRICULUM } from './data/curriculum';
import { useUserStore } from './data/useStore';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PathView } from './components/PathView';
import { LessonView } from './components/LessonView';
import { DevPanel } from './components/DevPanel';
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
    addXp,
    completeNode,
    loseEnergy,
    refillEnergy,
    unlockAllNodes,
    resetAllProgress,
  } = useUserStore();

  const [activeLessonNode, setActiveLessonNode] = useState<LearningNode | null>(null);
  const [isPortrait, setIsPortrait] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isDevOpen, setIsDevOpen] = useState<boolean>(false);

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

  // All node IDs across current module for dev unlock
  const allNodeIds = allUnits.flatMap((u) => u.nodes.map((n) => n.id));

  return (
    <div className="relative w-screen h-screen overflow-hidden flex bg-[#F8FAFC] text-slate-800 font-sans">
      {/* Landscape Advisor for small mobile portrait screens */}
      {isPortrait && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-sky-100 border-2 border-sky-300 flex items-center justify-center mb-4 animate-pulse">
              <Smartphone className="w-8 h-8 text-sky-600 rotate-90" />
            </div>
            <h2 className="text-xl font-display font-black text-slate-800 mb-2">
              建议横屏使用
            </h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              本应用专为 iPad 横屏打造，横向视窗可获得沉浸式双栏编程与最佳积木触控体验。
            </p>
            <button
              onClick={() => setIsPortrait(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-all"
            >
              继续竖屏预览
            </button>
          </div>
        </div>
      )}

      {/* 1. Desktop & iPad Landscape Sidebar */}
      <div className="hidden lg:flex shrink-0 h-full">
        <Sidebar
          activeModuleId={activeModuleId}
          activeUnitId={activeUnitId}
          completedNodeIds={progress.completedNodeIds}
          onSelectModule={setActiveModuleId}
          onSelectUnit={setActiveUnitId}
          onResetProgress={resetAllProgress}
          onToggleDevPanel={() => setIsDevOpen(true)}
        />
      </div>

      {/* Mobile / Tablet Drawer Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-10 h-full animate-fade-in shadow-2xl">
            <Sidebar
              activeModuleId={activeModuleId}
              activeUnitId={activeUnitId}
              completedNodeIds={progress.completedNodeIds}
              onSelectModule={(id) => {
                setActiveModuleId(id);
                setSidebarOpen(false);
              }}
              onSelectUnit={(id) => {
                setActiveUnitId(id);
                setSidebarOpen(false);
              }}
              onResetProgress={resetAllProgress}
              onCloseMobile={() => setSidebarOpen(false)}
              onToggleDevPanel={() => setIsDevOpen(true)}
            />
          </div>
        </div>
      )}

      {/* 2. Right Center Canvas: TopBar + Duolingo Path View */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8FAFC] relative">
        <TopBar
          xp={progress.xp}
          streakDays={progress.streakDays}
          energy={progress.energy}
          onRefillEnergy={refillEnergy}
          onToggleSidebar={() => setSidebarOpen(true)}
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

      {/* 4. Developer Debug Panel */}
      <DevPanel
        isOpen={isDevOpen}
        onClose={() => setIsDevOpen(false)}
        progress={progress}
        onResetProgress={resetAllProgress}
        onUnlockAll={() => unlockAllNodes(allNodeIds)}
        onAddXp={addXp}
        onRefillEnergy={refillEnergy}
        onJumpToNode={(node) => {
          setActiveLessonNode(node);
          setIsDevOpen(false);
        }}
      />
    </div>
  );
}
