import { supabase } from "~/utils/supabase";
import type { Song } from "~/types/song";

export async function fetchSongs(): Promise<Song[]> {
  const { data: songs, error } = await supabase
    .from("songs")
    .select(
      `
      id,
      title,
      difficulty,
      tab_url,
      artists (
        name,
        image_url
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }

  return (songs as unknown as Song[]) || [];
}
