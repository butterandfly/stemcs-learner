import React, { useState } from 'react';
import { UserProfile } from '../types';
import { PRESET_AVATARS } from '../data/useStore';
import {
  X,
  UserPlus,
  Edit2,
  Trash2,
  Check,
  Zap,
  Award,
  Flame,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { sound } from '../audio/sound';

interface UserManagerModalProps {
  users: UserProfile[];
  activeUserId: string;
  onClose: () => void;
  onSwitchUser: (userId: string) => void;
  onAddUser: (name: string, avatar: string) => void;
  onUpdateUser: (userId: string, updates: { name?: string; avatar?: string }) => void;
  onDeleteUser: (userId: string) => void;
}

export const UserManagerModal: React.FC<UserManagerModalProps> = ({
  users,
  activeUserId,
  onClose,
  onSwitchUser,
  onAddUser,
  onUpdateUser,
  onDeleteUser,
}) => {
  // Mode: 'list' | 'add' | 'edit'
  const [mode, setMode] = useState<'list' | 'add' | 'edit'>('list');
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  // Form states
  const [formName, setFormName] = useState('');
  const [formAvatar, setFormAvatar] = useState('🐱');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const currentUser = users.find((u) => u.id === activeUserId) || users[0];

  const handleStartAdd = () => {
    sound.playPop();
    setFormName('');
    setFormAvatar('🚀');
    setMode('add');
    setDeleteConfirmId(null);
  };

  const handleStartEdit = (user: UserProfile, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    setEditingUserId(user.id);
    setFormName(user.name);
    setFormAvatar(user.avatar);
    setMode('edit');
    setDeleteConfirmId(null);
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = formName.trim() || `极客学员 ${users.length + 1}`;
    sound.playLevelUp();
    onAddUser(finalName, formAvatar);
    setMode('list');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUserId) return;
    const finalName = formName.trim();
    sound.playSnap();
    onUpdateUser(editingUserId, {
      name: finalName || undefined,
      avatar: formAvatar,
    });
    setMode('list');
    setEditingUserId(null);
  };

  const handleConfirmDelete = (userId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    if (users.length <= 1) {
      alert('系统至少需要保留一位学生档案！');
      return;
    }
    setDeleteConfirmId(userId);
  };

  const handleExecuteDelete = (userId: string) => {
    sound.playPop();
    onDeleteUser(userId);
    setDeleteConfirmId(null);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-fade-in select-none">
      <div className="relative z-10 bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shadow-sm">
              👨‍🎓
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-display font-black text-slate-800 flex items-center gap-2">
                <span>学生档案管理</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                  共 {users.length} 位
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                切换学生身份，独立保存各自的关卡进度与能量点数
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-all active:scale-95"
            title="关闭"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Active Student Hero Card */}
          {mode === 'list' && (
            <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/80 border-2 border-amber-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-amber-300 flex items-center justify-center text-4xl shadow-inner">
                  {currentUser.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-full">
                      当前正在学习
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-display font-black text-slate-800 mt-0.5">
                    {currentUser.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    档案创建于 {new Date(currentUser.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Achievement badges */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 rounded-2xl border border-amber-200 shadow-xs">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-display font-black text-sm text-amber-950">
                    {currentUser.progress.xp} XP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 rounded-2xl border border-sky-200 shadow-xs">
                  <Award className="w-4 h-4 text-sky-500 stroke-[2.5]" />
                  <span className="font-display font-black text-sm text-sky-950">
                    {currentUser.progress.completedNodeIds.length} 关
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 rounded-2xl border border-orange-200 shadow-xs">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span className="font-display font-black text-sm text-orange-950">
                    {currentUser.progress.streakDays} 天
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ADD / EDIT FORM */}
          {(mode === 'add' || mode === 'edit') && (
            <form
              onSubmit={mode === 'add' ? handleSaveAdd : handleSaveEdit}
              className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 space-y-5 animate-fade-in"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-black text-lg text-slate-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>{mode === 'add' ? '添加新学生' : '修改学生档案'}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setMode('list');
                  }}
                  className="text-xs font-mono font-bold text-slate-400 hover:text-slate-600"
                >
                  取消
                </button>
              </div>

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  选择萌趣头像
                </label>
                <div className="grid grid-cols-8 gap-2">
                  {PRESET_AVATARS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => {
                        sound.playPop();
                        setFormAvatar(av);
                      }}
                      className={`h-11 rounded-xl flex items-center justify-center text-2xl transition-all cursor-pointer ${
                        formAvatar === av
                          ? 'bg-amber-100 border-2 border-amber-500 scale-110 shadow-md ring-2 ring-amber-300'
                          : 'bg-white hover:bg-slate-100 border border-slate-200 hover:scale-105'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  学生姓名或昵称
                </label>
                <input
                  type="text"
                  maxLength={16}
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="例如：跳跳、小航、Leo..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-slate-200 focus:border-sky-400 focus:outline-hidden font-display font-bold text-slate-800 placeholder:text-slate-400 text-base shadow-inner"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setMode('list');
                  }}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-sm font-bold hover:bg-slate-100"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-display font-black text-sm shadow-dopamine-lime active:translate-y-1 transition-all flex items-center gap-2"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{mode === 'add' ? '创建并开始学习' : '保存修改'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Student Cards List */}
          {mode === 'list' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  选择切换或编辑学生
                </span>
                <button
                  onClick={handleStartAdd}
                  className="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-display font-black text-xs shadow-dopamine-cyan active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>添加新学生</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {users.map((user) => {
                  const isActive = user.id === activeUserId;
                  const isDeleting = deleteConfirmId === user.id;

                  return (
                    <div
                      key={user.id}
                      onClick={() => {
                        if (!isActive) {
                          sound.playLevelUp();
                          onSwitchUser(user.id);
                        }
                      }}
                      className={`relative p-4 rounded-2xl border-2 transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-amber-50/80 border-amber-400 shadow-md ring-2 ring-amber-200'
                          : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-2">
                        {/* Avatar */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                            isActive
                              ? 'bg-amber-200 border-2 border-amber-300 shadow-sm'
                              : 'bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {user.avatar}
                        </div>

                        {/* Name & Stats */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-display font-black text-base text-slate-800 truncate">
                              {user.name}
                            </h4>
                            {isActive && (
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shrink-0">
                                当前
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-0.5">
                            <span className="text-amber-600 font-bold">{user.progress.xp} XP</span>
                            <span>•</span>
                            <span>通关 {user.progress.completedNodeIds.length}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Action Buttons */}
                      <div className="flex items-center gap-1 shrink-0">
                        {/* Edit Button */}
                        <button
                          onClick={(e) => handleStartEdit(user, e)}
                          title="修改学生姓名与头像"
                          className="p-2 rounded-xl text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>

                        {/* Delete Button */}
                        {users.length > 1 && (
                          <button
                            onClick={(e) => handleConfirmDelete(user.id, e)}
                            title="删除该学生档案"
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Delete Confirmation Overlay inside card */}
                      {isDeleting && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="absolute inset-0 z-20 bg-rose-50/95 backdrop-blur-xs rounded-2xl border-2 border-rose-300 p-3 flex items-center justify-between animate-fade-in"
                        >
                          <div className="flex items-center gap-2 text-rose-900 text-xs font-bold">
                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>确定删除「{user.name}」吗？记录将抹除！</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2.5 py-1 text-xs font-bold text-slate-600 bg-white rounded-lg border border-slate-200"
                            >
                              取消
                            </button>
                            <button
                              onClick={() => handleExecuteDelete(user.id)}
                              className="px-2.5 py-1 text-xs font-bold text-white bg-rose-500 rounded-lg shadow-xs hover:bg-rose-600"
                            >
                              确认删除
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 font-bold">💡 小贴士：</span>
            <span>每个学生的数据均保存在当前设备中，切换学生不影响其他人的记录。</span>
          </div>
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-all cursor-pointer"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
