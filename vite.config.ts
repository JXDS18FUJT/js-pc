import { rmSync } from 'node:fs'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import pkg from './package.json'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
	rmSync('dist-electron', { recursive: true, force: true })
	const UnoCSS = (await import('unocss/vite')).default
	const isServe = command === 'serve'
	const isBuild = command === 'build'
	const sourcemap = isServe || !!process.env.VSCODE_DEBUG

	return {

		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
		plugins: [
			VueRouter({
				routesFolder: 'src/views',
				exclude: ['**/components/*.vue'],
				extensions: ['.vue'],
			}),
			vue(),
			Components({
				dts: true,
				dirs: ['src/components'],
			}),
			UnoCSS(),
			electron([
				{
					// Main-Process entry file of the Electron App.
					entry: 'electron/main/index.ts',
					onstart(options) {
						if (process.env.VSCODE_DEBUG) {
							console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
						} else {
							options.startup()
						}
					},
					vite: {
						build: {
							sourcemap,
							minify: isBuild,
							outDir: 'dist-electron/main',
							rollupOptions: {
								external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
							},
						},
					},
				},
				{
					entry: 'electron/preload/index.ts',
					onstart(options) {
						// Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
						// instead of restarting the entire Electron App.
						options.reload()
					},
					vite: {
						build: {
							sourcemap: sourcemap ? 'inline' : undefined, // #332
							minify: isBuild,
							outDir: 'dist-electron/preload',
							rollupOptions: {
								external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
							},
						},
					},
				}
			]),
			// Use Node.js API in the Renderer-process
			renderer(),
		],
		server: process.env.VSCODE_DEBUG && (() => {
			const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
			return {
				host: url.hostname,
				port: +url.port,
			}
		})(),
		clearScreen: false,
	}
})