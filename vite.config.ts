import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/playground/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        color: resolve(__dirname, "pages/color/index.html"),
        reviews: resolve(__dirname, "pages/reviews/index.html"),
        nav: resolve(__dirname, "pages/nav/index.html"),
        modal: resolve(__dirname, "pages/modal/index.html"),
        questions: resolve(__dirname, "pages/questions/index.html"),
        menu: resolve(__dirname, "pages/menu/index.html"),
      }
    }
  }
})
