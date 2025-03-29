import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import remarkDefList from 'remark-deflist'
import 'dotenv/config'

const config: Config = {
  title: 'ScopeDB Documents',
  favicon: 'brand-kit/favicon.svg',

  url: 'https://docs.scopedb.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // NOTE: DocSearch Crawler needs this to read the proper pages.
  trailingSlash: true,

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'brand-kit/centered-sign.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'DOCUMENTATION',
      logo: {
        alt: 'ScopeDB Logo',
        src: 'brand-kit/horizontal-no-slogan-trimmed.svg',
      },
      items: [
        { type: 'docSidebar', docsPluginId: 'reference', sidebarId: 'reference', position: 'right', label: 'Reference' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright (c) ${new Date().getFullYear()} ScopeDB Inc. All rights reserved.`
    },
    prism: {
      theme: prismThemes.github,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      }
    },
    algolia: {
      appId: process.env.ALGOLIA_APPID,
      apiKey: process.env.ALGOLIA_APIKEY,
      indexName: process.env.ALGOLIA_INDEXNAME,
      searchPagePath: 'search',
    }
  } satisfies Preset.ThemeConfig,

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      // change the default value of toc_max_heading_level from 3 to 2
      if (!result.frontMatter.toc_max_heading_level) {
        result.frontMatter.toc_max_heading_level = 2;
      }

      return result;
    }
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reference',
        path: 'reference',
        routeBasePath: 'reference',
        sidebarPath: './reference/sidebars.ts',
        remarkPlugins: [remarkDefList],
      },
    ],
  ],

  themes: [],

  scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.scopedb.io' }],
};

export default config;
