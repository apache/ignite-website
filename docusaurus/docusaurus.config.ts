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
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          postsPerPage: 10,
          blogTitle: 'Apache Ignite Blog',
          blogDescription: 'News, updates, and technical articles about Apache Ignite',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent Posts',
          feedOptions: {
            type: 'all',
            title: 'Apache Ignite Blog',
            description: 'News, updates, and technical articles about Apache Ignite',
            copyright: `Copyright © ${new Date().getFullYear()} The Apache Software Foundation`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              // Filter out archived posts (pre-2025)
              const recentPosts = blogPosts.filter((post) => {
                const postDate = new Date(post.metadata.date);
                return postDate >= new Date('2025-01-01');
              });
              return defaultCreateFeedItems({
                blogPosts: recentPosts,
                ...rest,
              });
            },
          },
          editUrl: 'https://github.com/apache/ignite-website/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Blog index pagination
          { from: '/blog/', to: '/blog' },
          { from: '/blog/1/', to: '/blog' },
          { from: '/blog/2/', to: '/blog/page/2' },
          { from: '/blog/3/', to: '/blog/page/3' },

          // Individual blog posts (26 posts)
          { from: '/blog/whats-new-in-apache-ignite-3-0', to: '/blog/2025/02/24/whats-new-in-apache-ignite-3-0' },
          { from: '/blog/apache-ignite-2-17-0', to: '/blog/2025/02/13/apache-ignite-2-17-0' },
          { from: '/blog/ignite-net-intel-cet-fix', to: '/blog/2024/11/22/ignite-net-intel-cet-fix' },
          { from: '/blog/apache-ignite-2-16-0', to: '/blog/2023/12/25/apache-ignite-2-16-0' },
          { from: '/blog/apache-ignite-net-dynamic-linq', to: '/blog/2023/05/22/apache-ignite-net-dynamic-linq' },
          { from: '/blog/apache-ignite-2-13-0', to: '/blog/2022/04/28/apache-ignite-2-13-0' },
          { from: '/blog/apache-ignite-2-12-0', to: '/blog/2022/01/14/apache-ignite-2-12-0' },
          { from: '/blog/apache-ignite-2-11-1', to: '/blog/2021/12/21/apache-ignite-2-11-1' },
          { from: '/blog/apache-ignite-2-11-stabilization', to: '/blog/2021/09/20/apache-ignite-2-11-stabilization' },
          { from: '/blog/apache-ignite-momentum-highlights-from', to: '/blog/2021/09/14/apache-ignite-momentum-highlights-from' },
          { from: '/blog/apache-ignite-2-10-thin', to: '/blog/2021/03/18/apache-ignite-2-10-thin' },
          { from: '/blog/apache-ignite-2-9-released', to: '/blog/2020/11/05/apache-ignite-2-9-released' },
          { from: '/blog/ignite-2-8-released-less', to: '/blog/2020/03/11/ignite-2-8-released-less' },
          { from: '/blog/apache-ignite-2-7-deep', to: '/blog/2018/12/13/apache-ignite-2-7-deep' },
          { from: '/blog/apache-ignite-2-5-scaling', to: '/blog/2018/05/31/apache-ignite-2-5-scaling' },
          { from: '/blog/meltdown-and-spectre-patches-show', to: '/blog/2018/01/30/meltdown-and-spectre-patches-show' },
          { from: '/blog/protecting-apache-ignite-from-meltdown', to: '/blog/2018/01/08/protecting-apache-ignite-from-meltdown' },
          { from: '/blog/apache-ignite-2-4-brings', to: '/blog/2018/03/15/apache-ignite-2-4-brings' },
          { from: '/blog/apache-ignite-essentials-series-for', to: '/blog/2017/11/17/apache-ignite-essentials-series-for' },
          { from: '/blog/apache-ignite-2-3-more', to: '/blog/2017/11/01/apache-ignite-2-3-more' },
          { from: '/blog/apache-ignite-community-news-september', to: '/blog/2017/09/15/apache-ignite-community-news-september' },
          { from: '/blog/apache-ignite-community-update-august', to: '/blog/2017/08/30/apache-ignite-community-update-august' },
          { from: '/blog/apache-ignite-2-1-a', to: '/blog/2017/07/27/apache-ignite-2-1-a' },
          { from: '/blog/apache-ignite-2-0-redesigned', to: '/blog/2017/05/05/apache-ignite-2-0-redesigned' },
          { from: '/blog/presenting-apache-ignite-sql-grid', to: '/blog/2017/03/13/presenting-apache-ignite-sql-grid' },
          { from: '/blog/apache-ignite-1-9-released', to: '/blog/2017/03/07/apache-ignite-1-9-released' },

          // Tag pages
          { from: '/blog/apache/', to: '/blog/tags/apache' },
          { from: '/blog/release/', to: '/blog/tags/release' },
          { from: '/blog/database/', to: '/blog/tags/database' },
          { from: '/blog/ignite/', to: '/blog/tags/ignite' },
          { from: '/blog/bigdata/', to: '/blog/tags/bigdata' },
          { from: '/blog/in/', to: '/blog/tags/in' },
          { from: '/blog/memory/', to: '/blog/tags/memory' },
          { from: '/blog/open/', to: '/blog/tags/open' },
          { from: '/blog/source/', to: '/blog/tags/source' },
          { from: '/blog/meetup/', to: '/blog/tags/meetup' },
          { from: '/blog/archived/', to: '/blog/tags/archived' },
        ],
      },
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
            {label: 'Blog', to: '/blog'},
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
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'csharp', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
