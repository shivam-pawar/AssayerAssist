import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugin = {
  manifest: {
    theme_color: "#f69435",
    background_color: "#f69435",
    display: "standalone",
    scope: "/",
    start_url: "/",
    short_name: "vite test",
    description: "testing vite pwa",
    name: "vite test",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // add this to cache all the imports
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true,
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "AssayerAssist",
        description: "A customized assayer report printing software",
        name: "AssayerAssist",
        icons: [
          {
            src: "/assets/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/assets/384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/assets/512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
