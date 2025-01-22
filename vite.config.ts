import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import zipPack from "vite-plugin-zip-pack";
import manifest from "./src/manifest";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        input: {
          main: resolve(new URL('src/devtools/index.html', import.meta.url).pathname),
          panel: resolve(new URL('src/panel/index.html', import.meta.url).pathname)
        },
        output: {
          chunkFileNames: "assets/chunk-[hash].js",
        },
      },
    },

    plugins: [
      crx({ manifest }),
      zipPack({
        outDir: `package`,
        inDir: "build",
        // @ts-ignore
        outFileName: `${
          manifest.name.replaceAll(" ", "-")
        }-extension-v${manifest.version}.zip`,
      }),
    ],
  };
});

