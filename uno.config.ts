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