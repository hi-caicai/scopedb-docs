import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import {
    remarkDefinitionList,
    defListHastHandlers,
} from "remark-definition-list";

export default defineConfig({
    outDir: './build',

    experimental: {
        svg: true,
    },

    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx({
        remarkPlugins: [remarkDefinitionList],
        remarkRehype: { handlers: defListHastHandlers },
    })],
});
