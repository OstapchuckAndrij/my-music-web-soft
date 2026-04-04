import React, { useEffect, useRef, useState } from "react";
import * as VF from "vexflow";
//Redux
import { addMeasure } from "../../store/reducers/songSlice";
import { useAppSelector } from "../../hooks/useReduxFactory";
import { useDispatch } from "react-redux";
//types
import { type Measure } from "../../types/song";
//components
import MeasureCursor from "./MeasureCursor";
import { Plus } from "lucide-react";
//utils
import { calculateMeasureWidth } from "../../utils/measureUtils";

interface MeasureViewProps {
  measure: Measure;
  mIndex: number;
  tuning?: string[]; // Додайте це, якщо хочете показувати налаштування струн
  isFirst: boolean;
  isLast?: boolean;
}

const MeasureView: React.FC<MeasureViewProps> = ({
  measure,
  mIndex,
  isFirst,
  isLast,
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const { cursor } = useAppSelector((state) => state.song);
  const [cursorRect, setCursorRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const isCurrentMeasure = cursor.measureIdx === mIndex;
  const beats = measure.beats;

  const measureWidth = calculateMeasureWidth(beats.length, isFirst);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Очищуємо контейнер
    containerRef.current.innerHTML = "";

    // 2. Ініціалізація
    const renderer = new VF.Renderer(
      containerRef.current,
      VF.Renderer.Backends.SVG,
    );
    renderer.resize(measureWidth, 200);
    const context = renderer.getContext();

    // 3. Створюємо табулатурний стан
    // x=0, y=40 (дамо трохи місця зверху), ширина=300
    const stave = new VF.TabStave(0, 40, measureWidth);
    if (isFirst) {
      stave.addTabGlyph();
    }
    if (measure.timeSignature) {
      stave.addTimeSignature(
        `${measure.timeSignature.upper}/${measure.timeSignature.lower}`,
      );
    }
    if (measure.clef) {
      stave.addClef(measure.clef);
    }
    stave.setContext(context).draw();

    // 4. Створюємо ноти
    const vfNotes = beats
      // .filter((beat) => beat.notes.length > 0)
      .map((beat) => {
        const isRest = beat.notes.length === 0;
        if (isRest) {
          const note = new VF.StaveNote({
            keys: ["b/4"],
            duration: beat.duration + "r",
          });
          return note;
        } else {
          return new VF.TabNote({
            positions: beat.notes.map((n) => ({
              str: n.string,
              fret: n.fret.toString(),
              drawStem: true, // Для табулатури зазвичай не малюємо стебла
            })),
            duration: beat.duration,
          }).setStave(stave);
        }
      });

    // 5. Рендеринг через Voice (найбільш стабільний спосіб)
    if (vfNotes.length > 0) {
      const voice = new VF.Voice();
      voice.addTickables(vfNotes);

      // Форматуємо (розраховуємо X-координати)
      const padding = isFirst ? 80 : 20;
      new VF.Formatter()
        .joinVoices([voice])
        .format([voice], measureWidth - padding);

      // Малюємо
      voice.draw(context, stave);
      if (vfNotes.length > 0 && isCurrentMeasure) {
        const activeNote = vfNotes[cursor.beatIdx];
        if (activeNote) {
          const x = activeNote.getAbsoluteX();
          const staveTop = stave.getYForLine(0);
          const staveBottom = stave.getYForLine(5);
          const staveHeight = staveBottom - staveTop;

          setCursorRect({
            x: x - 15,
            y: staveTop - 5, // Трохи вище верхньої лінії
            width: 30,
            height: staveHeight + 10, // Трохи нижче нижньої лінії
          });
        }
      }
    }
  }, [beats, isFirst, isCurrentMeasure, cursor.beatIdx, measureWidth]);

  return (
    <div className="flex relative items-center gap-2">
      <div ref={containerRef} className="MeasureView" />
      {isCurrentMeasure && (
        <MeasureCursor cursorRect={cursorRect} cursor={cursor} />
      )}
      {isLast && (
        <button
          className="mt-13 px-2 py-2 opacity-0 hover:opacity-100 text-emerald-500"
          onClick={() => dispatch(addMeasure())}
        >
          <Plus size={42} />
        </button>
      )}
    </div>
  );
};

export default MeasureView;
