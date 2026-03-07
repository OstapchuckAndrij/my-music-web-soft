import { supabase } from "~/shared/utils/supabase";
import type { Song } from "~/shared/types/song";

const fetchSongs: () => Promise<Song[]> = async () => {
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
};

const fetchSongById: (id: string) => Promise<Song | null> = async (id) => {
  const { data: song, error } = await supabase
    .from("songs")
    .select("*, artists(name)")
    .eq("id", id)
    .single();
  return (song as unknown as Song) || null;
};

export { fetchSongs, fetchSongById };
