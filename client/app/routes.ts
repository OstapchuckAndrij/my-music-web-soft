// app/routes.ts
import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Головна сторінка (/)

  layout("layout.tsx", [
    // Спільний дизайн для групи сторінок
    route("editor", "routes/editor.tsx"), // Шлях /editor
    route("tabs/:id?", "routes/tabs.tsx"), // Динамічний шлях з параметром
  ]),

  //route("settings", "routes/settings.tsx"),
] satisfies RouteConfig;
