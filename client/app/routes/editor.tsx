// app/routes/editor.tsx
import type { Route } from "./+types/editor";
import DebugUI from "../shared/components/Editor/EditorPage";
import useKeyboardManager from "../shared/hooks/useKeyboardManager";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HlatTab Editor" },
    { name: "description", content: "Edit your tabs online" },
  ];
}

export default function EditorPage() {
  useKeyboardManager();

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-2xl font-bold">Таб-редактор</h1>
      <p className="mt-4 text-gray-400">Тут скоро буде AlphaTab полотно...</p>
      <DebugUI />
    </div>
  );
}
