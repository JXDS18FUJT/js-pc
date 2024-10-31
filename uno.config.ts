import { resolve } from 'node:path'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig } from 'unocss'

const iconDirectory = resolve(__dirname, 'icons')

export default defineConfig({
	shortcuts: [
		{ logo: 'i-logos-vue w-6em h-6em transform transition-800' },
	],
	rules:[
		[/^w-(\d+)$/, ([, d]) => ({
			width: `${d}rem`
		})],
		[/^h-(\d+)$/, ([, d]) => ({
			height: `${d}rem`
		})],
		[/^lh-(\d+)$/, ([, d]) => ({
			'line-height': `${d}rem`
		})],
		[/^pr-(\d+)$/, ([, d]) => ({
			'padding-right': `${d}rem`
		})],
		[/^pl-(\d+)$/, ([, d]) => ({
			'padding-left': `${d}rem`
		})],
		[/^pt-(\d+)$/, ([, d]) => ({
			'padding-top': `${d}rem`
		})],
		[/^pb-(\d+)$/, ([, d]) => ({
			'padding-bottom': `${d}rem`
		})],
		
		[/^mr-(\d+)$/, ([, d]) => ({
			'margin-right': `${d}rem`
		})],
		[/^ml-(\d+)$/, ([, d]) => ({
			'margin-left': `${d}rem`
		})],
		[/^mt-(\d+)$/, ([, d]) => ({
			'margin-top': `${d}rem`
		})],
		[/^mb-(\d+)$/, ([, d]) => ({
			'margin-bottom': `${d}rem`
		})],
		[/^text-(\d+)$/, ([, d]) => ({
			'font-size': `${d}rem`
		})],
		[/^top-(\d+)$/, ([, d]) => ({
			top: `${d}rem`
		})],
		[/^left-(\d+)$/, ([, d]) => ({
			left: `${d}rem`
		})],
		[/^right-(\d+)$/, ([, d]) => ({
			right: `${d}rem`
		})],
		[/^bottom-(\d+)$/, ([, d]) => ({
			bottom: `${d}rem`
		})],
		[/^rd(\d+)$/, ([, d]) => ({
			'border-radius': `${d}rem`
		})],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle',
			},
			collections: {
				custom: FileSystemIconLoader(iconDirectory),
			},
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Roboto',
				mono: ['Fira Code', 'Fira Mono:400,700'],
				lobster: 'Lobster',
				lato: [
					{
						name: 'Lato',
						weights: ['400', '700'],
						italic: true,
					},
					{
						name: 'sans-serif',
						provider: 'none',
					},
				],
			},
			processors: createLocalFontProcessor(),
		}),
	],
})