import { HeadConfig } from 'vitepress';

export const head = (): HeadConfig[] => [
  // Favicon
  ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32' }],
  ['link', { rel: 'icon', href: '/theme/localazy-logo.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/theme/apple-touch-icon.png' }],

  // Fonts
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
    },
  ],

  // Open Graph protocol
  ['meta', { name: 'theme-color', content: '#066fef' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en' }],
  ['meta', { property: 'og:url', content: 'https://developer.localazy.com/' }],
  ['meta', { property: 'og:title', content: 'Developer Portal | Localazy' }],
  ['meta', { property: 'og:site_name', content: 'Localazy Developer Portal' }],
  // ['meta', { property: 'og:description', content: '' }],
  // ['meta', { property: 'og:image', content: '' }],

  // Twitter card
  ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { property: 'twitter:url', content: 'https://developer.localazy.com/' }],
  ['meta', { property: 'twitter:title', content: 'Developer Portal | Localazy' }],
  // ['meta', { property: 'twitter:description', content: '' }],
  // ['meta', { property: 'twitter:image', content: '' }],
];
