import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   port: 5173,

  //   proxy: {
  //     "/api": {
  //       // host: true,
  //       // port: 5173, 169.254.160.199/16
  //       ws: true,

  //       target: "http://127.0.0.1:8080/",
  //       secure: false,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/api"),
  //     },
  //   },
  // },
  plugins: [react()],
});
