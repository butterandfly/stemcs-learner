import { useState, useEffect, useMemo } from 'react';
import { UserProgress, UserProfile } from '../types';

const OLD_STORAGE_KEY = 'cq_user_progress_v1';
const USERS_STORAGE_KEY = 'cq_users_v2';
const ACTIVE_USER_ID_KEY = 'cq_active_user_id_v2';

export const PRESET_AVATARS = [
  '🐱', '🚀', '🦖', '🤖', '🦊', '👾', '🦁', '⭐',
  '🦄', '🐼', '🐯', '🐬', '🧙‍♂️', '⚡', '🦉', '🏎️'
];

export const createDefaultProgress = (): UserProgress => ({
  xp: 0,
  streakDays: 1,
  energy: 5,
  completedNodeIds: [],
  activeNodeId: 'node-star-mouse',
  lastActiveDate: new Date().toISOString().split('T')[0],
});

function loadInitialData(): { users: UserProfile[]; activeUserId: string } {
  try {
    const savedUsersStr = localStorage.getItem(USERS_STORAGE_KEY);
    const savedActiveId = localStorage.getItem(ACTIVE_USER_ID_KEY);

    if (savedUsersStr) {
      const parsedUsers: UserProfile[] = JSON.parse(savedUsersStr);
      if (Array.isArray(parsedUsers) && parsedUsers.length > 0) {
        const validActiveId = parsedUsers.some((u) => u.id === savedActiveId)
          ? (savedActiveId as string)
          : parsedUsers[0].id;
        return { users: parsedUsers, activeUserId: validActiveId };
      }
    }

    // Migrate from single-user v1 if exists
    const oldProgressStr = localStorage.getItem(OLD_STORAGE_KEY);
    let initialProgress = createDefaultProgress();
    if (oldProgressStr) {
      try {
        const parsedOld = JSON.parse(oldProgressStr);
        if (parsedOld && typeof parsedOld.xp === 'number') {
          initialProgress = {
            ...initialProgress,
            ...parsedOld,
          };
        }
      } catch {
        // ignore fallback
      }
    }

    const defaultUser: UserProfile = {
      id: 'user-default',
      name: '探索先锋',
      avatar: '🐱',
      createdAt: new Date().toISOString(),
      progress: initialProgress,
    };

    return {
      users: [defaultUser],
      activeUserId: defaultUser.id,
    };
  } catch {
    const fallbackUser: UserProfile = {
      id: 'user-default',
      name: '探索先锋',
      avatar: '🐱',
      createdAt: new Date().toISOString(),
      progress: createDefaultProgress(),
    };
    return {
      users: [fallbackUser],
      activeUserId: fallbackUser.id,
    };
  }
}

export function useUserStore() {
  const [userData, setUserData] = useState<{
    users: UserProfile[];
    activeUserId: string;
  }>(loadInitialData);

  const [activeModuleId, setActiveModuleId] = useState<string>('scratch');
  const [activeUnitId, setActiveUnitId] = useState<string>('unit-star-hunter');

  const { users, activeUserId } = userData;

  // Persist users and activeUserId to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      localStorage.setItem(ACTIVE_USER_ID_KEY, activeUserId);
    } catch {
      // quota
    }
  }, [users, activeUserId]);

  // Current active user
  const currentUser = useMemo<UserProfile>(() => {
    return users.find((u) => u.id === activeUserId) || users[0];
  }, [users, activeUserId]);

  // Current active user's progress
  const progress = currentUser.progress;

  // Helper to update progress for current user
  const updateCurrentProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setUserData((prev) => {
      const updatedUsers = prev.users.map((u) => {
        if (u.id === prev.activeUserId) {
          return {
            ...u,
            progress: updater(u.progress),
          };
        }
        return u;
      });
      return {
        ...prev,
        users: updatedUsers,
      };
    });
  };

  // --- Multi-User Management Actions ---

  // 1. Switch User
  const switchUser = (userId: string) => {
    if (users.some((u) => u.id === userId)) {
      setUserData((prev) => ({
        ...prev,
        activeUserId: userId,
      }));
    }
  };

  // 2. Add User
  const addUser = (name: string, avatar: string = '🐱'): UserProfile => {
    const trimmedName = name.trim() || `学生 ${users.length + 1}`;
    const newUser: UserProfile = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: trimmedName,
      avatar: avatar || '🐱',
      createdAt: new Date().toISOString(),
      progress: createDefaultProgress(),
    };

    setUserData((prev) => ({
      users: [...prev.users, newUser],
      activeUserId: newUser.id,
    }));

    return newUser;
  };

  // 3. Update User (name and/or avatar)
  const updateUser = (userId: string, updates: { name?: string; avatar?: string }) => {
    setUserData((prev) => ({
      ...prev,
      users: prev.users.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            name: updates.name !== undefined ? (updates.name.trim() || u.name) : u.name,
            avatar: updates.avatar || u.avatar,
          };
        }
        return u;
      }),
    }));
  };

  // 4. Delete User (Safe: cannot delete the last user)
  const deleteUser = (userId: string): boolean => {
    if (users.length <= 1) {
      return false;
    }

    setUserData((prev) => {
      const remaining = prev.users.filter((u) => u.id !== userId);
      const newActiveId = prev.activeUserId === userId ? remaining[0].id : prev.activeUserId;
      return {
        users: remaining,
        activeUserId: newActiveId,
      };
    });

    return true;
  };

  // --- Gamification Actions for Active User ---

  const addXp = (amount: number) => {
    updateCurrentProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount,
    }));
  };

  const completeNode = (nodeId: string, earnedXp: number) => {
    updateCurrentProgress((prev) => {
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
    updateCurrentProgress((prev) => ({
      ...prev,
      energy: Math.max(0, prev.energy - 1),
    }));
  };

  const refillEnergy = () => {
    updateCurrentProgress((prev) => ({
      ...prev,
      energy: 5,
    }));
  };

  const unlockAllNodes = (allNodeIds: string[]) => {
    updateCurrentProgress((prev) => ({
      ...prev,
      completedNodeIds: allNodeIds,
      xp: Math.max(prev.xp, 100),
      energy: 5,
    }));
  };

  const resetAllProgress = () => {
    updateCurrentProgress(() => createDefaultProgress());
  };

  return {
    users,
    activeUserId,
    currentUser,
    progress,
    activeModuleId,
    setActiveModuleId,
    activeUnitId,
    setActiveUnitId,
    switchUser,
    addUser,
    updateUser,
    deleteUser,
    addXp,
    completeNode,
    loseEnergy,
    refillEnergy,
    unlockAllNodes,
    resetAllProgress,
  };
}
