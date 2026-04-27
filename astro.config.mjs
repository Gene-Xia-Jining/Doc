// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://doc-redboil.pages.dev',
	output: 'static',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '交易之道',
					autogenerate: { directory: '交易之道' },
				},
				{
					label: '交易之道',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '期货比较', slug: '0-期货-比较' },
					],
				},
			],
		}),
		mdx(),
	],
});
