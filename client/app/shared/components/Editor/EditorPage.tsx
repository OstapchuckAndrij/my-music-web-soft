import React, { type JSX } from "react";
import { useAppSelector } from "~/shared/hooks/reduxFactory";

const DebugUI: React.FC = () => {
  const { cursor } = useAppSelector((state) => state.song);

  console.log("Cursor Position:", cursor);
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-green-400 p-4 rounded-lg font-mono text-xs z-50">
      <div>TRACK: {cursor?.trackIdx}</div>
      <div>MEASURE: {cursor?.measureIdx}</div>
      <div>BEAT: {cursor?.beatIdx}</div>
      <div>STRING: {cursor?.stringIdx} (EADGBe)</div>
    </div>
  );
};

export default DebugUI;
