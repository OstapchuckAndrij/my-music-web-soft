import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCursor, updateNoteAtCursor } from "../store/reducers/songSlice";
import { useAppSelector } from "./reduxFactory";

const useKeyboardManager = () => {
  const dispatch = useDispatch();
  const { cursor, tracks } = useAppSelector((state) => state.song);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Навігація стрілками
      if (e.key === "ArrowRight") {
        const currentMeasure =
          tracks[cursor.trackIdx].measures[cursor.measureIdx];
        if (cursor.beatIdx < currentMeasure.beats.length - 1) {
          dispatch(setCursor({ beatIdx: cursor.beatIdx + 1 }));
        } else if (
          cursor.measureIdx <
          tracks[cursor.trackIdx].measures.length - 1
        ) {
          // Перехід у наступний такт
          dispatch(
            setCursor({ measureIdx: cursor.measureIdx + 1, beatIdx: 0 }),
          );
        }
      }

      if (e.key === "ArrowLeft") {
        if (cursor.beatIdx > 0) {
          dispatch(setCursor({ beatIdx: cursor.beatIdx - 1 }));
        } else if (cursor.measureIdx > 0) {
          // Перехід у попередній такт
          const prevMeasure =
            tracks[cursor.trackIdx].measures[cursor.measureIdx - 1];
          dispatch(
            setCursor({
              measureIdx: cursor.measureIdx - 1,
              beatIdx: prevMeasure.beats.length - 1,
            }),
          );
        }
      }

      if (e.key === "ArrowDown" && cursor.stringIdx < 5) {
        dispatch(setCursor({ stringIdx: cursor.stringIdx + 1 }));
      }

      if (e.key === "ArrowUp" && cursor.stringIdx > 0) {
        dispatch(setCursor({ stringIdx: cursor.stringIdx - 1 }));
      }

      // 2. Введення ладів (0-9)
      if (e.key >= "0" && e.key <= "9") {
        dispatch(updateNoteAtCursor(parseInt(e.key)));
      }

      // 3. Видалення (Backspace або Delete)
      if (e.key === "Backspace" || e.key === "Delete") {
        dispatch(updateNoteAtCursor(null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch, cursor, tracks]);
};

export default useKeyboardManager;
