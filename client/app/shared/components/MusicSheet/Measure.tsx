import { i } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";
import React, { useEffect, useRef } from "react";
import vexflow, {
  Renderer,
  Stave,
  StaveNote,
  TabNote,
  TabStave,
  Formatter,
} from "vexflow";

interface MeasureProps {
  notes: Array<{
    positions: { str: number; fret: number }[];
    duration: string;
  }>;
  measureNumber: number;
}

const Measure = ({ notes, measureNumber }: MeasureProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Очищаємо контейнер перед перемалюванням (важливо для React!)
    containerRef.current.innerHTML = "";

    const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
    renderer.resize(250, 150); // Розмір одного такту
    const context = renderer.getContext();

    // Створюємо таб-стан (6 ліній для гітари)
    const stave = new TabStave(0, 40, 250);
    stave.addModifier(new vexflow.StaveModifier());
    if (measureNumber === 1) stave.addTabGlyph(); // Малюємо "TAB" лише в першому такті
    stave.setContext(context).draw();

    // Перетворюємо наші дані у формат VexFlow
    const vfNotes = notes.map(
      (n) =>
        new TabNote({
          positions: n.positions, // напр. [{str: 6, fret: 5}]
          duration: n.duration, // напр. "q" (quarter)
        }),
    );

    // Автоматичне вирівнювання нот у такті
    Formatter.FormatAndDraw(context, stave, vfNotes);
  }, [notes]); // Перемальовуємо, якщо дані змінилися

  return (
    <div className="relative inline-block border-r border-gray-300">
      <span className="absolute top-0 left-2 text-[10px] text-gray-400">
        {measureNumber}
      </span>
      <div ref={containerRef} />
    </div>
  );
};
