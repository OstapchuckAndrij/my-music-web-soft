// src/shared/store/slices/songSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CursorPosition, type SongState } from "../../types/song";
import initialState from "../constants/songInitialState";

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    selectTrack: (state, action: PayloadAction<number>) => {
      state.activeTrackIdx = action.payload;
      state.cursor.measureIdx = 0;
      state.cursor.beatIdx = 0;
    },
    setCursor: (state, action: PayloadAction<Partial<CursorPosition>>) => {
      state.cursor = { ...state.cursor, ...action.payload };
    },
    addMeasure: (state, action: PayloadAction<void>) => {
      const track = state.tracks[state.activeTrackIdx];
      const newMeasure = {
        id: `m${Date.now()}`,
        beats: [],
      };
      track.measures.push(newMeasure);
    },
    updateNoteAtCursor: (state, action: PayloadAction<number | null>) => {
      const { trackIdx, measureIdx, beatIdx, stringIdx } = state.cursor;
      const fret = action.payload;
      const stringNum = 6 - stringIdx;

      const beat = state.tracks[trackIdx].measures[measureIdx].beats[beatIdx];
      const existingNoteIdx = beat.notes.findIndex(
        (n) => n.string === stringNum,
      );

      if (fret === null) {
        if (existingNoteIdx !== -1) beat.notes.splice(existingNoteIdx, 1);
      } else {
        if (existingNoteIdx !== -1) {
          beat.notes[existingNoteIdx].fret = fret;
        } else {
          beat.notes.push({ string: stringNum, fret });
        }
      }
    },
  },
});

export const { setCursor, updateNoteAtCursor, selectTrack } = songSlice.actions;
export default songSlice.reducer;
