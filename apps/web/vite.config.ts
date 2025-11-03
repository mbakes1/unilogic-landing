import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss(), tanstackRouter({}), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'router-vendor': ['@tanstack/react-router'],
					'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-slot'],
					'animation-vendor': ['framer-motion'],
					'utilities-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
					'utils': ['@/lib/utils'],
				},
			},
		},
	},
	// Optimize loading of critical resources
	preview: {
		port: 4173,
		strictPort: true,
	},
	server: {
		port: 3001,
		strictPort: true,
		host: true,
	},
});
