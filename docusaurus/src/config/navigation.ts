/**
 * Navigation Configuration
 *
 * Defines the structure and content of all navigation menus, dropdowns,
 * and links throughout the site. This configuration is used by the
 * custom Navbar and Footer components.
 */

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface NavSection {
  title: string;
  titleLink?: string;
  items: NavItem[];
}

export interface DropdownMenu {
  sections: NavSection[];
  featured?: {
    icon: string;
    label: string;
    href: string;
    className?: string;
  };
}

/**
 * Get Started Dropdown Menu
 * Quick start guide, learning resources, FAQ, and use cases
 */
export const getStartedMenu: DropdownMenu = {
  featured: {
    icon: '/img/menu/icon-red-rocket.svg',
    label: 'Quick Start Guide',
    href: 'https://ignite.apache.org/docs/latest/',
    className: 'dropmenu__redbutton'
  },
  sections: [
    {
      title: '',
      items: [
        {
          label: 'Learning resources',
          href: '/resources.html#learning',
        },
        {
          label: 'Training and Courses',
          href: '/resources.html#training',
        },
        {
          label: 'FAQ',
          href: '/faq.html',
        },
      ],
    },
    {
      title: 'USE CASES',
      titleLink: '/use-cases.html',
      items: [
        {
          label: 'In-Memory Cache',
          href: '/use-cases/in-memory-cache.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'In-Memory Data Grid',
          href: '/use-cases/in-memory-data-grid.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'In-Memory Database',
          href: '/use-cases/in-memory-database.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Key-Value Store',
          href: '/use-cases/key-value-store.html',
          icon: '/img/menu/icon-folder.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'High-Performance Computing',
          href: '/use-cases/high-performance-computing.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Digital Integration Hub',
          href: '/use-cases/digital-integration-hub.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Spark Acceleration',
          href: '/use-cases/spark-acceleration.html',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Hadoop Acceleration',
          href: '/use-cases/hadoop-acceleration.html',
          icon: '/img/menu/icon-folder.svg',
        },
      ],
    },
  ],
};

/**
 * Features Dropdown Menu
 * Multi-tier storage, developer APIs, computing APIs, and streaming APIs
 */
export const featuresMenu: DropdownMenu = {
  sections: [
    {
      title: 'MULTI-TIER STORAGE',
      items: [
        {
          label: 'Multi-Tier Storage',
          href: '/arch/multi-tier-storage.html',
          icon: '/img/menu/icon-db.svg',
        },
        {
          label: 'Native Persistence',
          href: '/arch/native-persistence.html',
          icon: '/img/menu/icon-db.svg',
        },
      ],
    },
    {
      title: 'ESSENTIAL Developer APIs',
      items: [
        {
          label: 'Distributed SQL',
          href: '/features/sql.html',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Key-Value APIs',
          href: '/features/key-value-apis.html',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'ACID Transactions',
          href: '/features/acid-transactions.html',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'High-Performance Computing APIs',
      items: [
        {
          label: 'Compute APIs',
          href: '/features/compute-apis.html',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Services',
          href: '/features/service-apis.html',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Machine Learning',
          href: '/features/machinelearning.html',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'Real-Streaming APIs',
      items: [
        {
          label: 'Real-Time Streaming APIs',
          href: '/features/streaming.html',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Messaging',
          href: 'https://ignite.apache.org/docs/latest/messaging',
          icon: '/img/menu/icon-cube.svg',
          external: true,
        },
        {
          label: 'Continuous Queries',
          href: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries',
          icon: '/img/menu/icon-cube.svg',
          external: true,
        },
      ],
    },
  ],
};

/**
 * Community Dropdown Menu
 * Project information and events
 */
export const communityMenu: DropdownMenu = {
  sections: [
    {
      title: 'Project Info',
      titleLink: '/community.html',
      items: [
        {
          label: 'Apache Ignite Story',
          href: '/community.html#story',
          icon: '/img/menu/icon-clip.svg',
        },
        {
          label: 'Meet The Community',
          href: '/community.html#community',
          icon: '/img/menu/icon-comment.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Start Contributing',
          href: '/community.html#contributing',
          icon: '/img/menu/icon-puzzle.svg',
        },
        {
          label: 'Ask Questions',
          href: '/community.html#faq',
          icon: '/img/menu/icon-question.svg',
        },
      ],
    },
    {
      title: 'Events',
      titleLink: '/events.html',
      items: [
        {
          label: 'Apache Ignite Summit',
          href: '/events.html#summit',
          icon: '/img/menu/icon-calendar.svg',
        },
        {
          label: 'Meetups',
          href: '/events.html#meetups',
          icon: '/img/menu/icon-calendar.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Upcoming Events',
          href: '/events.html#upcoming',
          icon: '/img/menu/icon-calendar.svg',
        },
        {
          label: 'Past Events',
          href: '/events.html#past',
          icon: '/img/menu/icon-calendar.svg',
        },
      ],
    },
  ],
};

/**
 * Resources Dropdown Menu
 * Blog, technical resources, learning materials, and mailing lists
 */
export const resourcesMenu: DropdownMenu = {
  featured: {
    icon: '/img/menu/icon-blog.svg',
    label: 'Blog',
    href: '/blog/',
    className: 'dropmenu__redbutton blog'
  },
  sections: [
    {
      title: '',
      items: [
        {
          label: 'Technical resources',
          href: '/resources.html#technical',
        },
        {
          label: 'Learning resources',
          href: '/resources.html#learning',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Training and Courses',
          href: '/resources.html#training',
        },
        {
          label: 'Apache Ignite Book',
          href: '/resources.html#book',
        },
        {
          label: 'Mailing Lists, Forums And Discussion Archives',
          href: '/resources.html#mail',
        },
        {
          label: 'FAQ',
          href: '/faq.html',
        },
      ],
    },
  ],
};

/**
 * Main Navigation Items
 * Top-level navigation menu items
 */
export const mainNavItems = [
  { label: 'Get Started', key: 'getStarted', href: '/', menu: getStartedMenu },
  { label: 'Features', key: 'features', href: '/features/', menu: featuresMenu },
  { label: 'Community', key: 'community', href: '/community.html', menu: communityMenu },
  { label: 'Powered By', href: '/use-cases/provenusecases.html' },
  { label: 'Resources', key: 'resources', href: '/resources.html', menu: resourcesMenu },
  { label: 'Docs', href: '//ignite.apache.org/docs/latest/', external: true },
] as const;

/**
 * Mobile Menu Structure
 * Flattened navigation for mobile display
 */
export const mobileMenuItems = [
  { label: 'Quick Start', href: '/docs/latest/' },
  { label: 'Learning resources', href: '/resources.html#learning' },
  { label: 'Training and Courses', href: '/resources.html#training' },
  { label: 'FAQ', href: '/faq.html' },
  {
    label: 'Use Cases',
    href: '/use-cases.html',
    children: [
      { label: 'In-Memory Cache', href: '/use-cases/in-memory-cache.html' },
      { label: 'In-Memory Data Grid', href: '/use-cases/in-memory-data-grid.html' },
      { label: 'In-Memory Database', href: '/use-cases/in-memory-database.html' },
      { label: 'Key-Value Store', href: '/use-cases/key-value-store.html' },
      { label: 'High Performance Computing', href: '/use-cases/high-performance-computing.html' },
      { label: 'Digital Integration Hub', href: '/use-cases/digital-integration-hub.html' },
      { label: 'Spark Acceleration', href: '/use-cases/spark-acceleration.html' },
      { label: 'Hadoop Acceleration', href: '/use-cases/hadoop-acceleration.html' },
      { label: 'View All', href: '/use-cases.html' },
    ],
  },
  {
    label: 'Features',
    href: '/features/',
    children: [
      { label: 'Multi-Tier Storage', href: '/arch/multi-tier-storage.html' },
      { label: 'Native Persistence', href: '/arch/native-persistence.html' },
      { label: 'Distributed SQL', href: '/features/sql.html' },
      { label: 'Key-Value APIs', href: '/features/key-value-apis.html' },
      { label: 'ACID Transactions', href: '/features/acid-transactions.html' },
      { label: 'Compute APIs', href: '/features/compute-apis.html' },
      { label: 'Services', href: '/features/service-apis.html' },
      { label: 'Machine Learning', href: '/features/machinelearning.html' },
      { label: 'Real-Time Streaming APIs', href: '/features/streaming.html' },
      { label: 'Messaging', href: '/docs/latest/messaging' },
      { label: 'Continuous Queries', href: '/docs/latest/key-value-api/continuous-queries' },
      { label: 'View All', href: '/features/index.html' },
    ],
  },
  {
    label: 'Community',
    href: '/community.html',
    children: [
      { label: 'Project Info', href: '/community.html' },
      { label: 'Events', href: '/events.html' },
    ],
    isDefault: true,
  },
  { label: 'Powered by', href: '/use-cases/provenusecases.html' },
  { label: 'Resources', href: '/resources.html' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Docs', href: '/docs/latest/' },
] as const;

/**
 * Footer Navigation Sections
 * Footer menu structure organized by columns
 */
export const footerSections = {
  features: {
    title: 'Features',
    titleLink: '/features/',
    items: [
      { label: 'Multi-Tier Storage', href: '/arch/multi-tier-storage.html' },
      { label: 'Native Persistence', href: '/arch/native-persistence.html' },
      { label: 'Distributed SQL', href: '/features/sql.html' },
      { label: 'ACID Transactions', href: '/features/acid-transactions.html' },
      { label: 'Key Value APIs', href: '/features/key-value-apis.html' },
      { label: 'Compute APIs', href: '/features/compute-apis.html' },
      { label: 'Machine Learning', href: '/features/machinelearning.html' },
      { label: 'Services', href: '/features/service-apis.html' },
      { label: 'Real-Streaming APIs', href: '/features/streaming.html' },
      { label: 'Continuous Queries', href: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries', external: true },
      { label: 'Messaging', href: 'https://ignite.apache.org/docs/latest/messaging', external: true },
    ],
  },
  useCases: {
    title: 'Use Cases',
    titleLink: '/use-cases/',
    items: [
      { label: 'In-Memory Cache', href: '/use-cases/in-memory-cache.html' },
      { label: 'In-Memory Data Grid', href: '/use-cases/in-memory-data-grid.html' },
      { label: 'In-Memory Database', href: '/use-cases/in-memory-database.html' },
      { label: 'High-Performance Computing', href: '/use-cases/high-performance-computing.html' },
      { label: 'Digital Integration Hub', href: '/use-cases/digital-integration-hub.html' },
      { label: 'Key-Value Store', href: '/use-cases/key-value-store.html' },
      { label: 'Apache Spark Acceleration', href: '/use-cases/spark-acceleration.html' },
      { label: 'Apache Hadoop Acceleration', href: '/use-cases/hadoop-acceleration.html' },
    ],
  },
  community: {
    links: [
      { label: 'Community', href: '/our-community.html' },
      { label: 'Resources', href: '/resources.html' },
      { label: 'Events', href: '/events.html' },
    ],
  },
  contact: {
    devMailingList: 'dev@ignite.apache.org',
    userMailingList: 'user@ignite.apache.org',
    social: [
      { name: 'GitHub', href: 'https://github.com/apache/ignite', icon: '/img/icon-github.svg' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/showcase/apache-ignite/', icon: '/img/icon-linkedin.svg' },
      { name: 'Twitter', href: 'https://twitter.com/apacheignite', icon: '/img/icon-twitter.svg' },
      { name: 'Meetup', href: 'https://www.meetup.com/Apache-Ignite-Virtual-Meetup/', icon: '/img/icon-meetup-black.png' },
    ],
    ctaButton: {
      label: 'Start Using Apache Ignite',
      href: 'https://ignite.apache.org/docs/latest/index',
    },
  },
} as const;

/**
 * Copyright Information
 * Footer copyright and legal notices
 */
export const copyrightInfo = {
  startYear: 2015,
  organization: 'The Apache Software Foundation',
  organizationLink: 'http://www.apache.org/',
  trademarkNotice: 'Apache, Apache Ignite, the Apache feather and the Apache Ignite logo are either registered trademarks or trademarks of The Apache Software Foundation',
  privacyPolicyLink: 'http://apache.org/foundation/policies/privacy.html',
} as const;
