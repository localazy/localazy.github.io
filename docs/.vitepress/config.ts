import { defineConfig } from 'vitepress';
import { markdown } from './config/markdown';
import { head } from './config/en/head';
import { nav } from './config/en/nav';
import { sidebar } from './config/en/sidebar';

export default defineConfig({
  title: 'Developer Portal',
  titleTemplate: 'Localazy Developer Portal',
  description: 'Localazy portal for developers. Learn how to integrate Localazy into your projects.',

  lang: 'en-US',
  base: '/',
  head: head(),
  lastUpdated: true,
  markdown: markdown(),

  sitemap: {
    hostname: 'https://developer.localazy.com/',
  },

  themeConfig: {
    logo: {
      src: '/theme/localazy-logo.svg',
      width: 24,
      height: 24,
    },
    nav: nav(),
    sidebar: sidebar(),
    externalLinkIcon: true,
  },
});
