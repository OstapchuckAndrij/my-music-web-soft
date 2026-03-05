export interface Song {
  id: number;
  title: string;
  difficulty: string;
  tab_url: string;
  artists: {
    name: string | null;
    image_url: string | null;
  };
}

export interface LoaderResponse {
  songs: Song[];
}
