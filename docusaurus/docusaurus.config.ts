import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Apache Ignite',
  tagline: 'Distributed Database For High-Performance Applications With In-Memory Speed',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ignite.apache.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Apache Software Foundation deployment config
  organizationName: 'apache',
  projectName: 'ignite-website',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disabled - will configure custom docs integration in WP10
        blog: false, // Disabled - will configure custom blog in WP8
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true, // Current site doesn't have dark mode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Apache Ignite',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
      },
      style: 'primary',
      items: [
        {
          label: 'Get Started',
          position: 'left',
          items: [
            {label: 'Quick Start', to: 'https://ignite.apache.org/docs/latest/quick-start/java'},
            {label: 'Learning resources', to: '/resources.html'},
            {label: 'Training and Courses', to: '/resources.html#training'},
            {label: 'FAQ', to: '/faq.html'},
            {label: 'Use Cases', to: '/use-cases.html'},
          ],
        },
        {
          label: 'Features',
          position: 'left',
          items: [
            {label: 'Multi-Tier Storage', to: '/arch/multi-tier-storage.html'},
            {label: 'Native Persistence', to: '/arch/native-persistence.html'},
            {label: 'Distributed SQL', to: '/use-cases/database/distributed-database.html'},
            {label: 'ACID Transactions', to: '/features/transactions.html'},
            {label: 'Compute APIs', to: '/features/compute-apis.html'},
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {label: 'Project Info', to: '/community.html'},
            {label: 'Events', to: '/events.html'},
            {label: 'Powered by', to: '/powered-by-ignite.html'},
          ],
        },
        {
          label: 'Resources',
          position: 'left',
          items: [
            {label: 'Blog', to: '/blogs.html'},
            {label: 'Learning resources', to: '/resources.html'},
            {label: 'Training', to: '/resources.html#training'},
            {label: 'Apache Ignite Book', to: 'https://www.amazon.com/High-Performance-Memory-Computing-Apache-Ignite/dp/1789347521'},
            {label: 'Mailing Lists', to: '/community.html#mailing-lists'},
            {label: 'FAQ', to: '/faq.html'},
          ],
        },
        {
          label: 'Docs',
          href: 'https://ignite.apache.org/docs/latest/',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Footer links will be configured in WP2
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
