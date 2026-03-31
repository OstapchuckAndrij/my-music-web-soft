import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { alphaTab } from "@coderline/alphatab-vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), alphaTab()],
  optimizeDeps: {
    exclude: ["@coderline/alphatab"],
  },
});
