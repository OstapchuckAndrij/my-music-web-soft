import { type Song } from "../../service/SongService";
//components
import TabCard from "./TabCard";
//utils
import type { Route } from "../../../routes/+types/home";
import { getSongsList } from "../../service/SongService";

interface TabsListProps {
  songs: Song[] | null;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tabs" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader() {
  return getSongsList();
}

export default function TabsList({ songs }: TabsListProps) {
  if (songs === null) {
    return <p className="text-white font-bold">Помилка завантаження пісень</p>;
  } else {
    return (
      <div className="flex-1 flex-col p-4 justify-center align-middle">
        {songs.map((song) => (
          <TabCard
            key={song.id}
            songId={song.id}
            imgUrl={song.artists?.image_url}
            title={song.title}
            artist={song.artists?.name || "Unknown Artist"}
            difficulty={song.difficulty}
          />
        ))}
      </div>
    );
  }
}
