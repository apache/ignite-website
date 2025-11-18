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
          href: '/resources#learning',
        },
        {
          label: 'Training and Courses',
          href: '/resources#training',
        },
        {
          label: 'FAQ',
          href: '/faq',
        },
      ],
    },
    {
      title: 'USE CASES',
      titleLink: '/use-cases',
      items: [
        {
          label: 'Event Stream Processing',
          href: '/use-cases/event-stream-processing',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Microservices State Management',
          href: '/use-cases/microservices-state',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'AI/ML Feature Stores',
          href: '/use-cases/ai-ml-feature-stores',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Session Management',
          href: '/use-cases/session-management',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Operational Analytics',
          href: '/use-cases/operational-analytics',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'IoT and Time-Series Data',
          href: '/use-cases/iot-time-series',
          icon: '/img/menu/icon-folder.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Digital Integration Hub',
          href: '/use-cases/digital-integration-hub',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'High-Performance Computing',
          href: '/use-cases/high-performance-computing',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Key-Value Store',
          href: '/use-cases/key-value-store',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Database with Memory-First Storage',
          href: '/use-cases/in-memory-database',
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
          href: '/arch/multi-tier-storage',
          icon: '/img/menu/icon-db.svg',
        },
        {
          label: 'Native Persistence',
          href: '/arch/native-persistence',
          icon: '/img/menu/icon-db.svg',
        },
      ],
    },
    {
      title: 'ESSENTIAL Developer APIs',
      items: [
        {
          label: 'Distributed SQL',
          href: '/features/sql',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Key-Value APIs',
          href: '/features/key-value-apis',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'ACID Transactions',
          href: '/features/acid-transactions',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'High-Performance Computing APIs',
      items: [
        {
          label: 'Compute APIs',
          href: '/features/compute-apis',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Services',
          href: '/features/service-apis',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Machine Learning',
          href: '/features/machinelearning',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'Real-Streaming APIs',
      items: [
        {
          label: 'Real-Time Streaming APIs',
          href: '/features/streaming',
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
      titleLink: '/community',
      items: [
        {
          label: 'Apache Ignite Story',
          href: '/community#story',
          icon: '/img/menu/icon-clip.svg',
        },
        {
          label: 'Meet The Community',
          href: '/community#community',
          icon: '/img/menu/icon-comment.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Start Contributing',
          href: '/community#contributing',
          icon: '/img/menu/icon-puzzle.svg',
        },
        {
          label: 'Ask Questions',
          href: '/community#faq',
          icon: '/img/menu/icon-question.svg',
        },
      ],
    },
    {
      title: 'Events',
      titleLink: '/events',
      items: [
        {
          label: 'Apache Ignite Summit',
          href: '/events#summit',
          icon: '/img/menu/icon-calendar.svg',
        },
        {
          label: 'Meetups',
          href: '/events#meetups',
          icon: '/img/menu/icon-calendar.svg',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Upcoming Events',
          href: '/events#upcoming',
          icon: '/img/menu/icon-calendar.svg',
        },
        {
          label: 'Past Events',
          href: '/events#past',
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
          href: '/resources#technical',
        },
        {
          label: 'Learning resources',
          href: '/resources#learning',
        },
      ],
    },
    {
      title: '',
      items: [
        {
          label: 'Training and Courses',
          href: '/resources#training',
        },
        {
          label: 'Apache Ignite Book',
          href: '/resources#book',
        },
        {
          label: 'Mailing Lists, Forums And Discussion Archives',
          href: '/resources#mail',
        },
        {
          label: 'FAQ',
          href: '/faq',
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
  { label: 'Community', key: 'community', href: '/community', menu: communityMenu },
  { label: 'Powered By', href: '/use-cases/provenusecases' },
  { label: 'Resources', key: 'resources', href: '/resources', menu: resourcesMenu },
  { label: 'Docs', href: '//ignite.apache.org/docs/latest/', external: true },
] as const;

/**
 * Mobile Menu Structure
 * Flattened navigation for mobile display
 */
export const mobileMenuItems = [
  { label: 'Quick Start', href: '/docs/latest/' },
  { label: 'Learning resources', href: '/resources#learning' },
  { label: 'Training and Courses', href: '/resources#training' },
  { label: 'FAQ', href: '/faq' },
  {
    label: 'Use Cases',
    href: '/use-cases',
    children: [
      { label: 'Event Stream Processing', href: '/use-cases/event-stream-processing' },
      { label: 'Microservices State Management', href: '/use-cases/microservices-state' },
      { label: 'AI/ML Feature Stores', href: '/use-cases/ai-ml-feature-stores' },
      { label: 'Session Management', href: '/use-cases/session-management' },
      { label: 'Operational Analytics', href: '/use-cases/operational-analytics' },
      { label: 'IoT and Time-Series Data', href: '/use-cases/iot-time-series' },
      { label: 'Digital Integration Hub', href: '/use-cases/digital-integration-hub' },
      { label: 'High Performance Computing', href: '/use-cases/high-performance-computing' },
      { label: 'Key-Value Store', href: '/use-cases/key-value-store' },
      { label: 'Database with Memory-First Storage', href: '/use-cases/in-memory-database' },
      { label: 'View All', href: '/use-cases' },
    ],
  },
  {
    label: 'Features',
    href: '/features/',
    children: [
      { label: 'Multi-Tier Storage', href: '/arch/multi-tier-storage' },
      { label: 'Native Persistence', href: '/arch/native-persistence' },
      { label: 'Distributed SQL', href: '/features/sql' },
      { label: 'Key-Value APIs', href: '/features/key-value-apis' },
      { label: 'ACID Transactions', href: '/features/acid-transactions' },
      { label: 'Compute APIs', href: '/features/compute-apis' },
      { label: 'Services', href: '/features/service-apis' },
      { label: 'Machine Learning', href: '/features/machinelearning' },
      { label: 'Real-Time Streaming APIs', href: '/features/streaming' },
      { label: 'Messaging', href: '/docs/latest/messaging' },
      { label: 'Continuous Queries', href: '/docs/latest/key-value-api/continuous-queries' },
      { label: 'View All', href: '/features/' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Project Info', href: '/community' },
      { label: 'Events', href: '/events' },
    ],
    isDefault: true,
  },
  { label: 'Powered by', href: '/use-cases/provenusecases' },
  { label: 'Resources', href: '/resources' },
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
      { label: 'Multi-Tier Storage', href: '/arch/multi-tier-storage' },
      { label: 'Native Persistence', href: '/arch/native-persistence' },
      { label: 'Distributed SQL', href: '/features/sql' },
      { label: 'ACID Transactions', href: '/features/acid-transactions' },
      { label: 'Key Value APIs', href: '/features/key-value-apis' },
      { label: 'Compute APIs', href: '/features/compute-apis' },
      { label: 'Machine Learning', href: '/features/machinelearning' },
      { label: 'Services', href: '/features/service-apis' },
      { label: 'Real-Streaming APIs', href: '/features/streaming' },
      { label: 'Continuous Queries', href: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries', external: true },
      { label: 'Messaging', href: 'https://ignite.apache.org/docs/latest/messaging', external: true },
    ],
  },
  useCases: {
    title: 'Use Cases',
    titleLink: '/use-cases/',
    items: [
      { label: 'Event Stream Processing', href: '/use-cases/event-stream-processing' },
      { label: 'Microservices State Management', href: '/use-cases/microservices-state' },
      { label: 'AI/ML Feature Stores', href: '/use-cases/ai-ml-feature-stores' },
      { label: 'Session Management', href: '/use-cases/session-management' },
      { label: 'Operational Analytics', href: '/use-cases/operational-analytics' },
      { label: 'IoT and Time-Series Data', href: '/use-cases/iot-time-series' },
      { label: 'Digital Integration Hub', href: '/use-cases/digital-integration-hub' },
      { label: 'High-Performance Computing', href: '/use-cases/high-performance-computing' },
      { label: 'Key-Value Store', href: '/use-cases/key-value-store' },
      { label: 'Database with Memory-First Storage', href: '/use-cases/in-memory-database' },
    ],
  },
  community: {
    links: [
      { label: 'Community', href: '/our-community' },
      { label: 'Resources', href: '/resources' },
      { label: 'Events', href: '/events' },
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
