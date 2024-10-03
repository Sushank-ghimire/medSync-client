import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: import.meta.env.VITE_SERVER_DOMAIN,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
