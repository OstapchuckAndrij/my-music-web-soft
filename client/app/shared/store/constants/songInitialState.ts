import { type SongState } from "../../types/song";

const initialState: SongState = {
  title: "New Composition",
  tempo: 120,
  // Активна позиція курсора
  cursor: {
    trackIdx: 0,
    measureIdx: 0,
    beatIdx: 0,
    stringIdx: 0, // 0 - перша струна (тонка E), 5 - шоста (товста E)
  },
  // Дані табулатури
  tracks: [
    {
      id: "t1",
      name: "Guitar 1",
      instrument: "steel-guitar",
      tuning: ["E4", "B3", "G3", "D3", "A2", "E2"],
      measures: [
        {
          id: "m1",
          beats: [
            {
              id: "b1",
              notes: [
                { string: 6, fret: 5 },
                { string: 5, fret: 7 },
                { string: 5, fret: 7 },
              ],
              duration: "q",
            },
            { id: "b2", notes: [{ string: 5, fret: 7 }], duration: "q" },
            { id: "b3", notes: [], duration: "q" },
            { id: "b4", notes: [], duration: "q" },
          ],
        },
      ],
    },
  ],
};

export default initialState;
