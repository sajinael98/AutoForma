import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AutoForma",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "dayjs",
        "@mantine/core",
      ],
    },
    outDir: "dist",
  },
  plugins: [react(), dts(), tsconfigPaths()],
  optimizeDeps: {
    exclude: ["autoforma"],
  },
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@mantine/core",
    ],
  },
});
