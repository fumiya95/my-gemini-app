export interface VerbEntry {
  plain: string;
  polite: string;
  respectful: string; // Sonkeigo
  humble: string; // Kenjougo
  tip: string;
}

export interface PhraseEntry {
  ng: string;
  ok: string;
  reason: string;
  category: 'basic' | 'phone' | 'visit' | 'internal';
}

export type QuizType = 'selection' | 'fill-in' | 'stance';

export interface QuizQuestion {
  id: number;
  type: QuizType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type AppView = 'home' | 'verbs' | 'appellations' | 'phrasing' | 'practice';
