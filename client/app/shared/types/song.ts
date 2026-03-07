export interface Song {
  id: string;
  title: string;
  difficulty: string;
  tab_url: string;
  artists: {
    name: string | null;
    image_url: string | null;
  };
}
