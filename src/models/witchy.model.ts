import type { DreamEntry } from './dreams.model';

export interface UserProfile {
  id: number;
  name: string;
  dreams: DreamEntry[];
}

export interface SabbatDate {
  month: number;
  day: number;
}
export interface SabbatInfo {
  name: string;
  northDates: SabbatDate[];
  southDates: SabbatDate[];
  type: string;
  icon: string;
  description: string;
  content: string;
}

export interface SpellInfo {
  name: string;
  author: string;
  tags: string[];
  icon: string;
  ingridients: string[];
  steps: string[];
  description: string;
}

export interface MoonNames {
  name: string;
  month: number;
  text: string;
}
