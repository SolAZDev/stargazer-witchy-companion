export interface DreamSymbol {
  id: number;
  symbol: string;
  meanings: string[];
}
export interface DreamEntry {
  id: number;
  dateTime: Date;
  symbols: number[];
  journalEntry: string;
}
