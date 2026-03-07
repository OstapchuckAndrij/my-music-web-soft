import { fetchSongs, fetchSongById } from "~/lib/supabase-client";
import type { Song } from "~/shared/types/song";

const getSongsList: () => Promise<Song[]> = async () => {
  try {
    const songs = await fetchSongs();
    return songs;
  } catch (error) {
    console.error("Failed to get songs list:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw errorMessage;
  }
};

const getSongById: (id: string) => Promise<Song | null> = async (id) => {
  try {
    const song = await fetchSongById(id);
    return song;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw errorMessage;
  }
};

export { getSongsList, getSongById };
