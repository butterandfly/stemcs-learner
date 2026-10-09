import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const STORAGE_KEY = 'cq_user_progress_v1';

const defaultProgress: UserProgress = {
  xp: 0,
  streakDays: 1,
  energy: 5,
  completedNodeIds: [],
  activeNodeId: 'node-1-1',
  lastActiveDate: new Date().toISOString().split('T')[0],
};

export function useUserStore() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultProgress;
  });

  const [activeModuleId, setActiveModuleId] = useState<string>('scratch');
  const [activeUnitId, setActiveUnitId] = useState<string>('unit-1');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // quota or private mode
    }
  }, [progress]);

  const addXp = (amount: number) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount,
    }));
  };

  const completeNode = (nodeId: string, earnedXp: number) => {
    setProgress((prev) => {
      const alreadyCompleted = prev.completedNodeIds.includes(nodeId);
      const newCompleted = alreadyCompleted
        ? prev.completedNodeIds
        : [...prev.completedNodeIds, nodeId];

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        completedNodeIds: newCompleted,
      };
    });
  };

  const loseEnergy = () => {
    setProgress((prev) => ({
      ...prev,
      energy: Math.max(0, prev.energy - 1),
    }));
  };

  const refillEnergy = () => {
    setProgress((prev) => ({
      ...prev,
      energy: 5,
    }));
  };

  const resetAllProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    activeModuleId,
    setActiveModuleId,
    activeUnitId,
    setActiveUnitId,
    addXp,
    completeNode,
    loseEnergy,
    refillEnergy,
    resetAllProgress,
  };
}
