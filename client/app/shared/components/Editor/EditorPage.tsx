import React from "react";
//hooks
import { useAppSelector } from "~/shared/hooks/useReduxFactory";
//components
import MeasureView from "./MeasureView";
//types
import TrackSelector from "./TrackSelector";

const DebugUI: React.FC = () => {
  const { cursor, tracks, activeTrackIdx } = useAppSelector(
    (state) => state.song,
  );
  const currentTrack = tracks[activeTrackIdx];

  return (
    <div>
      <div className="sticky top-0 z-10">
        <TrackSelector />
      </div>
      <div className="flex flex-wrap overflow-y-auto">
        {currentTrack?.measures.map((measure, idx) => (
          <MeasureView
            key={measure.id}
            mIndex={idx}
            measure={measure}
            isFirst={idx === 0}
            isLast={idx === currentTrack.measures.length - 1}
          />
        ))}
      </div>
      <div className="fixed bottom-4 right-4 bg-black/80 text-green-400 p-4 rounded-lg font-mono text-xs z-50">
        <div>TRACK: {cursor?.trackIdx}</div>
        <div>MEASURE: {cursor?.measureIdx}</div>
        <div>BEAT: {cursor?.beatIdx}</div>
        <div>STRING: {cursor?.stringIdx} (EADGBe)</div>
      </div>
    </div>
  );
};

export default DebugUI;
