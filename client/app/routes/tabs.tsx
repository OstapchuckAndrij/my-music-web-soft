//services
import { getSongsList, getSongById } from "../shared/service/SongService";
import { useParams } from "react-router";
//types
import { type Song } from "../shared/types/song";
//components
import TabsList from "../shared/components/Tabs/TabsList";
import TabSheet from "../shared/components/MusicSheet/MusicSheet";
//utils
import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
  // Use loader data instead of useParams (meta runs before component)
  const isDetail = data && !Array.isArray(data); // Check if data is a single Song
  return [
    { title: isDetail ? "Song Details" : "Tabs" },
    { name: "description", content: "Manage your music tabs" },
  ];
}

export async function loader({ params }: { params: { id?: string } }) {
  if (params.id) {
    return await getSongById(params.id);
  } else {
    return await getSongsList();
  }
}
export default function TabsRoute() {
  const { id } = useParams<{ id?: string }>();

  if (id) {
    const song = useLoaderData() as Song;
    if (!song) {
      throw new Error("Song not found");
    }
    return <TabSheet song={song} />;
  } else {
    // Render list view for /tabs
    const songs = useLoaderData() as Song[] | null;
    return <TabsList songs={songs} />;
  }
}
