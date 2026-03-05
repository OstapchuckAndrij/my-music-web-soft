import { type Song } from "../../types/song";

interface TabsListProps {
  songs: Song[] | null;
}

export default function TabsList({ songs }: TabsListProps) {
  if (songs === null) {
    return <p className="text-white font-bold">Помилка завантаження пісень</p>;
  } else {
    return (
      <div className="flex-1 flex-col justify-center align-middle text-white">
        {songs.map((song) => (
          <div
            key={song.id}
            className="p-4 border-b border-neutral-700 flex items-center gap-4"
          >
            <img
              src={song.artists?.image_url || "/default-image.jpg"}
              alt={song.artists?.name || "Unknown Artist"}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artists?.name}</p>
              <p className="text-xs text-gray-500">
                Difficulty: {song.difficulty}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
