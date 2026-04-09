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
        // Main pages
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/pricing',
        '/contact',
        '/privacy',
        '/terms',
        '/refund',

        // Service detail pages
        '/services/web-development',
        '/services/mobile-app-development',
        '/services/landing-pages',
        '/services/custom-software-development',
        '/services/ui-ux-design',
        '/services/cloud-solutions',
        '/services/backend-development',
        '/services/security',
        '/services/domain-hosting',
        '/services/testing',
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});