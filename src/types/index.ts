export type BlockCategory =
  | 'events'
  | 'motion'
  | 'control'
  | 'looks'
  | 'sound'
  | 'sensing'
  | 'operators'
  | 'variables'
  | 'terminal';

export interface ScratchBlock {
  id: string;
  category: BlockCategory;
  label: string; // Official Scratch Chinese
  labelEn: string; // Official Scratch English
  shape: 'hat' | 'stack' | 'c-block' | 'cap' | 'reporter';
  nestedBlocks?: ScratchBlock[];
}

export type QuestionType =
  | 'select_one'
  | 'block_assemble'
  | 'predict_output'
  | 'action_mission';

export interface QuestionOption {
  id: string;
  text: string;
  textEn?: string;
  isCorrect: boolean;
  explanation?: string;
  block?: ScratchBlock;
}

export interface CliCommandBlueprint {
  command: string;
  usage: string;
  description: string;
  descriptionEn?: string;
  example: string;
}

export interface CliTerminalLine {
  type: 'input' | 'output' | 'comment';
  text: string;
}

export interface ReviewChecklist {
  title: string;
  items: {
    label: string;
    description: string;
  }[];
  allowedCommands?: string[];
}

export interface TargetBlueprint {
  title: string;
  titleEn: string;
  blocks: ScratchBlock[];
  tip: string;
  cliCommands?: CliCommandBlueprint[];
  cliWindowPreview?: {
    currentPath: string;
    terminalLines: CliTerminalLine[];
  };
  reviewChecklist?: ReviewChecklist;
}

export interface ChallengeQuestion {
  id: string;
  type: QuestionType;
  prompt: string; // Concise instruction
  promptEn?: string;
  subtext?: string;
  availableBlocks?: ScratchBlock[];
  correctBlockSequence?: string[]; // block IDs
  options?: QuestionOption[];
  successMessage: string;
  missionStep?: {
    stepNumber: number;
    title: string;
    description: string;
  };
}

export interface LearningNode {
  id: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  icon: string;
  xp: number;
  blueprint: TargetBlueprint;
  questions: ChallengeQuestion[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  titleEn: string;
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
  energy: number;
  completedNodeIds: string[];
  activeNodeId: string;
  lastActiveDate: string;
}
