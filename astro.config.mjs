import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    outDir: './build',

    experimental: {
        svg: true,
    },

    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx()],
});
