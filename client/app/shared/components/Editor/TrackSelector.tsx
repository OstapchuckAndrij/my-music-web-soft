import { useAppDispatch, useAppSelector } from "~/shared/hooks/useReduxFactory";
import { selectTrack } from "../../store/reducers/songSlice";

const TrackSelector = () => {
  const dispatch = useAppDispatch();
  const { tracks, activeTrackIdx } = useAppSelector((state) => state.song);

  return (
    <div className="flex gap-2 p-4 bg-neutral-900 border-b border-neutral-700">
      {tracks.map((track, idx) => (
        <button
          key={track.id}
          onClick={() => dispatch(selectTrack(idx))}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTrackIdx === idx
              ? "bg-emerald-600 text-white shadow-lg"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
          }`}
        >
          {track.name}
        </button>
      ))}
      <button className="px-4 py-2 bg-neutral-800 text-emerald-500 border border-emerald-500/30 rounded-md hover:bg-emerald-500/10">
        + Add Track
      </button>
    </div>
  );
};

export default TrackSelector;
