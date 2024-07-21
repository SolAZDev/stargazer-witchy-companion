import type { DreamEntry } from './dreams.model';

export interface UserProfile {
  name: string;
  entries: DreamEntry[];
  fav_spelsl: string[];
}
