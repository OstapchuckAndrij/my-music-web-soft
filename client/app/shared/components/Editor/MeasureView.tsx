import React, { useEffect, useRef } from "react";
import * as VF from "vexflow";
import { type Measure } from "../../types/song";

interface MeasureViewProps {
  measure: Measure;
  tuning?: string[]; // Додайте це, якщо хочете показувати налаштування струн
  isFirst: boolean;
  isLast?: boolean;
}

const MeasureView: React.FC<MeasureViewProps> = ({ measure, isFirst }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beats = measure.beats;

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Очищуємо контейнер
    containerRef.current.innerHTML = "";

    // 2. Ініціалізація
    const renderer = new VF.Renderer(
      containerRef.current,
      VF.Renderer.Backends.SVG,
    );
    renderer.resize(300, 200);
    const context = renderer.getContext();

    // 3. Створюємо табулатурний стан
    // x=0, y=40 (дамо трохи місця зверху), ширина=300
    const stave = new VF.TabStave(0, 40, 300);
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
          const note = new VF.TabNote({
            positions: beat.notes.map((n) => ({
              str: n.string,
              fret: n.fret.toString(), // ВАЖЛИВО: має бути string
            })),
            duration: beat.duration,
          });

          // Прив'язуємо кожну ноту до стану, щоб вона знала свої Y-координати
          note.setStave(stave);
          return note;
        }
      });

    // 5. Рендеринг через Voice (найбільш стабільний спосіб)
    if (vfNotes.length > 0) {
      const voice = new VF.Voice();
      voice.addTickables(vfNotes);

      // Форматуємо (розраховуємо X-координати)
      new VF.Formatter().joinVoices([voice]).format([voice], 250); // 250 - корисна ширина

      // Малюємо
      voice.draw(context, stave);
    }
  }, [beats, isFirst]);

  return (
    <div className="flex flex-wrap items-center gap-2 p-2">
      <div ref={containerRef} className="MeasureView" />
      <button className="mt-13 px-4 py-2 bg-neutral-800 text-emerald-500 border border-emerald-500/30 rounded-md hover:bg-emerald-500/10">
        +
      </button>
    </div>
  );
};

export default MeasureView;
