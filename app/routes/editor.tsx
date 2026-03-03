// app/routes/editor.tsx
import type { Route } from "./+types/editor";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HlatTab Editor" },
    { name: "description", content: "Edit your tabs online" },
  ];
}

export default function EditorPage() {
  return (
    <div className="p-10 text-white min-h-screen">
      <h1 className="text-2xl font-bold">Таб-редактор</h1>
      <p className="mt-4 text-gray-400">Тут скоро буде AlphaTab полотно...</p>
    </div>
  );
}
