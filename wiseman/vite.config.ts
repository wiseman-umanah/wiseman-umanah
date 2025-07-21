import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';


export default defineConfig({
  plugins: [
		react(),
		tailwindcss(),
		createHtmlPlugin({
      inject: {
        data: {
          title: 'Wiseman Umanah Portfolio',
          description: 'This is the portfolio website of Engr. Wiseman Umanah',
        },
      },
    }),
    Sitemap({
      hostname: 'https://wisemanumanah.vercel.app',
      dynamicRoutes: ['/'],
      generateRobotsTxt: true,
    }),
	],
})
