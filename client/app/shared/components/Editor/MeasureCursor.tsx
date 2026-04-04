import { type CursorPosition } from "../../types/song";

interface MeasureCursorProps {
  cursorRect: { x: number; y: number; width: number; height: number };
  cursor: CursorPosition;
}

const MeasureCursor: React.FC<MeasureCursorProps> = ({
  cursorRect,
  cursor,
}) => {
  return (
    <div
      className="absolute bg-emerald-500/20 border border-emerald-400/50 rounded-sm pointer-events-none transition-all duration-75 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
      style={{
        left: `${cursorRect.x + 2}px`,
        top: `${cursorRect.y}px`,
        width: `${cursorRect.width}px`,
        height: `${cursorRect.height}px`,
        zIndex: 10,
      }}
    >
      {/* Лінія конкретної струни всередині курсора (опціонально) */}
      <div
        className="absolute w-full h-[2px] bg-emerald-400 shadow-sm transition-all duration-75"
        style={{
          // 6 струн, тому розбиваємо висоту на 5 інтервалів
          top: `${(cursor.stringIdx * (cursorRect.height - 10)) / 5}px`,
          marginTop: "5px",
        }}
      />
    </div>
  );
};

export default MeasureCursor;
