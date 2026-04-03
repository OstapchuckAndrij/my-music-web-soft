import { useEffect, useRef, useState } from "react";
import * as alphaTab from "@coderline/alphatab";
//Types
import type { Song } from "~/shared/service/SongService";
import {
  type SongSettings,
  defaultSongSettings,
} from "~/shared/types/songSettings.config";

interface TabSheetProps {
  song: Song;
}

const TabSheet: React.FC<TabSheetProps> = ({ song }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<alphaTab.AlphaTabApi | null>(null);

  useEffect(() => {
    if (!containerRef.current || !song) return;
    // Ініціалізація AlphaTab
    const settings: SongSettings = {
      ...defaultSongSettings,
      file: song.tab_url,
    };

    const at = new alphaTab.AlphaTabApi(containerRef.current, settings);
    //at.isSelectionMode = true;
    setApi(at);

    // Очищення при виході зі сторінки
    return () => at.destroy();
  }, [song]);

  return (
    <div className="flex max-w-full overflow-hidden flex-col h-screen">
      {/* Панель керування */}

      {/* Контейнер, де AlphaTab малюватиме ноти */}
      <div className="w-full min-w-0 bg-white overflow-y-auto">
        <div ref={containerRef}></div>
      </div>

      <div className="bg-neutral-900 p-4 text-white flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">{song.title}</h1>
          <p className="text-sm text-gray-400">{song.artists?.name}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => api?.playPause()}
            className="bg-emerald-600 px-4 py-2 rounded"
          >
            Play/Pause
          </button>
          <button
            onClick={() => api?.stop()}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSheet;
