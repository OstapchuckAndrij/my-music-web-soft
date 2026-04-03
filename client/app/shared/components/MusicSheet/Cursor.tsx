interface CursorProps {
  x: number;
  y: number;
  height: number;
}

const Cursor: React.FC<CursorProps> = ({ x, y, height }) => {
  return (
    <div
      className="absolute transition-all duration-100 ease-linear pointer-events-none"
      style={{
        left: x,
        top: y,
        width: "18px",
        height: height,
        backgroundColor: "rgba(131, 214, 68, 0.7)", // Зелений Songsterr
        borderRadius: "8px",
        marginLeft: "-9px",
        zIndex: 20,
      }}
    >
      {/* Біла цятка зверху */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
    </div>
  );
};

export default Cursor;
