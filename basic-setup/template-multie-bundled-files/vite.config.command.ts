import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/command.ts"),
      name: "yourprefix.commands",
      formats: ["umd"],
    },
    minify: false, //true for minification
  },
});
