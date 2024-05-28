import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        ViteFaviconsPlugin({
            logo: "public/logo_32.png",
            inject: false,
            favicons: {
                path: "./dist/",
            },
        }),
    ],
});
