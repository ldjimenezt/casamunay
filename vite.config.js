import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [react(), tailwindcss(), vercel({
    rewrites: [
      { source: "/(.*)", destination: "/index.html" }
    ]
  })],
  base: "./", // Muy importante: usa './' para que las rutas de CSS y JS sean relativas
});