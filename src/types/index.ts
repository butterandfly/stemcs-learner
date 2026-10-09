export type BlockCategory = 'events' | 'motion' | 'looks' | 'control' | 'sound';

export interface ScratchBlock {
  id: string;
  category: BlockCategory;
  label: string;
  param?: string | number;
  shape: 'hat' | 'stack' | 'c-block' | 'cap';
}

export type QuestionType = 'select_one' | 'block_assemble' | 'predict_output' | 'parameter_tune';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
  block?: ScratchBlock;
}

export interface StageSimulation {
  initialX: number;
  initialY: number;
  targetX?: number;
  initialCostume?: number;
  expectedBlocks?: string[];
  speechText?: string;
  actionType: 'move' | 'say' | 'turn' | 'grow';
  actionValue?: number | string;
}

export interface ChallengeQuestion {
  id: string;
  type: QuestionType;
  prompt: string; // Concise instruction
  subtext?: string;
  stageConfig?: StageSimulation;
  availableBlocks?: ScratchBlock[];
  correctBlockSequence?: string[]; // block IDs
  options?: QuestionOption[];
  successMessage: string;
}

export interface LearningNode {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  xp: number;
  questions: ChallengeQuestion[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  badge: string;
  summary: string;
  nodes: LearningNode[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  units: Unit[];
}

export interface Module {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  isLocked: boolean;
  sections: Section[];
}

export interface UserProgress {
  xp: number;
  streakDays: number;
  energy: number; // 5 hearts max
  completedNodeIds: string[];
  activeNodeId: string;
  lastActiveDate: string;
}
