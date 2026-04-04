// State для редагування табулатури

interface CursorPosition {
  trackIdx: number;
  measureIdx: number;
  beatIdx: number;
  stringIdx: number; // 0 - перша струна (тонка E), 5 - шоста (товста E)
}

interface SongState {
  title: string;
  tempo: number;
  activeTrackIdx: number;
  tracks: Track[];
  cursor: CursorPosition; // Поточне виділення
}

interface Track {
  id: string;
  name: string;
  instrument: string; // напр. "steel-guitar"
  tuning: string[];
  measures: Measure[];
}

interface Measure {
  id: string;
  beats: Beat[];
  clef?: string; // "tab" або "treble"
  timeSignature?: { upper: number; lower: number };
  bpm?: number;
}

interface Beat {
  id: string;
  duration: string;
  notes: Note[]; // Якщо порожньо — це пауза або порожній біт
}

interface Note {
  string: number;
  fret: number;
  vibrato?: boolean;
  slide?: "up" | "down" | "none";
}

export type { SongState, CursorPosition, Track, Measure, Beat, Note };
