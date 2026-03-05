//services
import { getSongsList } from "../service/SongService";
//types
import { type Song } from "../types/song";
//components
import TabsList from "../components/Tabs/TabsList";
//utils
import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tabs" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader() {
  return getSongsList();
}

export default function TabListRoute() {
  const songs = useLoaderData<typeof loader>() as Song[];
  return <TabsList songs={songs} />;
}
