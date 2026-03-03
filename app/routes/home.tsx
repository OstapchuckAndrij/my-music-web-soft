import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analog Songsterr/GuitarPro" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.title}>Hello musicians!</p>
        <p className={styles.article}>
          This is my web application, that should be free analog of such service
          like songsterr and desktop applicatio GuitarPro. Now it is being
          developed by phone ;). Don't how long i will do it this way
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button
            className={styles.button}
            onClick={() => {
              navigate("/tabs");
            }}
          >
            Find tabs for songs
          </button>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/editor");
            }}
          >
            Create yours tabs
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: "min-h-screen flex justify-center items-center",
  container:
    "m-20 p-4 border-dashed border-2 border-white rounded-md flex flex-col justify-center items-center",
  title: "font-bold text-xl mb-3",
  article: "text-center text-gray-400 mb-3",
  button:
    "items-center gap-1 md:gap-2 border-dashed border-white hover:bg-emerald-950 hover:border-emerald-800 text-white hover:text-emerald-600 font-semibold p-2 rounded-md transition-colors shadow-lg active:scale-95 border-2",
};
