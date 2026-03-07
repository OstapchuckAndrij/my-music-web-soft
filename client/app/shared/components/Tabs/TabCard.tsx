// This component represents a single tab card in the list of tabs.
// It displays the song title, artist name, and difficulty level.
// The styling is done using Tailwind CSS classes.
import { ListMusic } from "lucide-react";
import { Link } from "react-router";
interface TabCardProps {
  songId: string;
  title: string;
  artist: string;
  difficulty: string;
  imgUrl: string | null;
}

const TabCard: React.FC<TabCardProps> = ({
  songId,
  title,
  artist,
  difficulty,
  imgUrl,
}) => {
  return (
    <Link to={`/tabs/${songId}`} className={styles.card}>
      <div>
        {imgUrl ? (
          <img src={imgUrl} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <ListMusic className="text-gray-400" />
          </div>
        )}
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
        <p className={styles.difficulty}>Difficulty: {difficulty}</p>
      </div>
    </Link>
  );
};

const styles = {
  card: "cursor-pointer p-4 flex items-center gap-4 hover:bg-neutral-700 border border-transparent hover:border hover:border-emerald-700 rounded-lg transition-colors",
  image: "w-16 h-16 rounded-full object-cover",
  placeholder:
    "w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center",
  title: "font-bold",
  artist: "text-sm text-gray-400",
  difficulty: "text-xs text-gray-500",
};

export default TabCard;
