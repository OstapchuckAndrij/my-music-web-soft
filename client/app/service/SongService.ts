import { fetchSongs } from "~/lib/supabase-client";
import type { Song } from "~/types/song";

export async function getSongsList(): Promise<Song[]> {
  try {
    const songs = await fetchSongs();
    return songs;
  } catch (error) {
    console.error("Failed to get songs list:", error);
    throw new Response("Помилка завантаження пісень", { status: 500 });
  }
}
