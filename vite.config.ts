import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr({ exportAsDefault: true }), react()],
	resolve: {
		alias: {
			app: path.resolve('src/app'),
			pages: path.resolve('src/pages'),
			widgets: path.resolve('src/widgets'),
			features: path.resolve('src/features'),
			entities: path.resolve('src/entities'),
			shared: path.resolve('src/shared'),
		},
	},
	base: '/rtk-charge/',
})
