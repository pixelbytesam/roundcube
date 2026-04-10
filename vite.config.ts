import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  server: {
    host: "::",
    port: 9090,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.flatorbit.com',
      dynamicRoutes: [
        '/',
        '/services',
        '/about',
        '/portfolio',
        '/pricing',
        '/contact',

        '/web-development',
        '/mobile-app-development',
        '/custom-software-development',
        '/ui-ux-design',
        '/cloud-solutions',
        '/backend-development',
        '/security-enhancement',
        '/domain-hosting-services',
        '/landing-pages',
        '/software-testing',

        '/privacy',
        '/terms',
        '/refund',
      ],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});