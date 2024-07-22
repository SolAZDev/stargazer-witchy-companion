import type { DreamSymbol } from 'src/models/dreams.model';
import * as Symbols from '../assets/Symbols.json';

//** Entire Dreams Dictionary */
export const DreamsDictionary = Symbols.dreams as Array<DreamSymbol>;

export const SearchableDreamsDictionary = DreamsDictionary.map((dream) => {
  return {
    value: dream.id,
    label: dream.symbol,
  };
});

export function getDream(id: number): DreamSymbol {
  return DreamsDictionary.filter((dream) => dream.id == id)[0];
}
