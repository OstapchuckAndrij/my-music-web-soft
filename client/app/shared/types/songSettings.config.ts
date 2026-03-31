export const defaultSongSettings = {
  file: "",
  core: {
    fontDirectory: "/font/",
    enableCursor: true,
  },
  player: {
    enablePlayer: true,
    soundFont: "/soundfont/sonivox.sf2",
  },
  render: {
    cursorType: 2,
    layoutMode: 1,
  },
};

export type SongSettings = typeof defaultSongSettings;
