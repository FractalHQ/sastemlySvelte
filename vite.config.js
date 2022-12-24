import { sveltekit } from '@sveltejs/kit/vite';
import {
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
import { extractorSvelte } from '@unocss/core'
import Unocss from 'unocss/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss({
			extractors: [extractorSvelte],
			presets: [
			  presetUno(),
			  presetAttributify(),
			  presetIcons({
				scale: 1.2,
				warn: true,
			  }),
			  presetTypography(),
			  presetWebFonts({
				provider: 'google', // default provider
				fonts: {
				  // these will extend the default theme
				  sans: 'Roboto',
				  mono: ['Fira Code', 'Fira Mono:400,700'],
				  // custom ones
				  lobster: 'Lobster',
				  roboto: [
					{
					  name: 'Roboto Mono',
					  weights: ['400', '700'],
					  italic: true,
					},
					{
					  name: 'sans-serif',
					  provider: 'none',
					},
				  ],
				  eczar: [
					{
					  name: 'Eczar',
					  weights: ['400', '700'],
					  italic: true,
					},
					{
					  name: 'sans-serif',
					  provider: 'none',
					},
				  ],
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
			  }),
			],
			transformers: [
			  transformerDirectives(),
			  transformerVariantGroup(),
			],
			safelist: 'prose prose-sm m-auto text-left'.split(' '),
		  })
	]
};

export default config;
