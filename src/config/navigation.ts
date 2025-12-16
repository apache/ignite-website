/**
 * Navigation Configuration
 *
 * Defines the structure and content of all navigation menus, dropdowns,
 * and links throughout the site. This configuration is used by the
 * custom Navbar and Footer components.
 */

import { DOCS_PATHS, DOCS_INDEX } from './docs-urls';

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
 * Quick start guide, learning resources, and FAQ
 */
export const getStartedMenu: DropdownMenu = {
  featured: {
    icon: '/img/menu/icon-red-rocket.svg',
    label: 'Quick Start Guide',
    href: DOCS_PATHS.gettingStarted.quickStart,
    className: 'dropmenu__redbutton'
  },
  sections: [
    {
      title: '',
      items: [
        {
          label: 'Developer Resources',
          href: '/resources',
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
  ],
};

/**
 * Features Dropdown Menu
 * Architectural foundation, core features, data placement, and operational capabilities
 */
export const featuresMenu: DropdownMenu = {
  sections: [
    {
      title: 'ARCHITECTURAL BACKBONE',
      items: [
        {
          label: 'Memory-First + MVCC + Distributed Replication',
          href: '/features/architectural-foundation',
          icon: '/img/menu/icon-db.svg',
        },
      ],
    },
    {
      title: 'CORE FEATURES',
      items: [
        {
          label: 'Memory-First Storage',
          href: '/features/storage',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'ACID Transactions',
          href: '/features/acid-transactions',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Access Patterns',
          href: '/features/sql',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Schema Evolution',
          href: '/features/schema-evolution',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Backpressured Streaming',
          href: '/features/streaming',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'DATA PLACEMENT & PROCESSING',
      items: [
        {
          label: 'Schema-Driven Data Placement',
          href: '/features/data-placement',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Processing Where Data Lives',
          href: '/features/compute-apis',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
    {
      title: 'OPERATIONAL EXCELLENCE',
      items: [
        {
          label: 'Coordination That Scales',
          href: '/features/coordination',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Operations Built In',
          href: '/features/tooling',
          icon: '/img/menu/icon-cube.svg',
        },
        {
          label: 'Multi-Language Support',
          href: '/features/multilanguage',
          icon: '/img/menu/icon-cube.svg',
        },
      ],
    },
  ],
};

/**
 * Use Cases Dropdown Menu
 * Primary, additional, supporting, and legacy use cases
 */
export const useCasesMenu: DropdownMenu = {
  sections: [
    {
      title: 'PRIMARY USE CASES',
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
          label: 'Session Management',
          href: '/use-cases/session-management',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'AI/ML Feature Stores',
          href: '/use-cases/ai-ml-feature-stores',
          icon: '/img/menu/icon-folder.svg',
        },
      ],
    },
    {
      title: 'ADDITIONAL USE CASES',
      items: [
        {
          label: 'Operational Analytics',
          href: '/use-cases/operational-analytics',
          icon: '/img/menu/icon-folder.svg',
        },
        {
          label: 'Fast Data Marts',
          href: '/use-cases/fast-data-marts',
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
      title: 'SUPPORTING PATTERNS',
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
        {
          label: 'Project Governance',
          href: '/community#governance',
          icon: '/img/menu/icon-clip.svg',
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
          label: 'Get In Touch',
          href: '/community#channels',
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
          label: 'Get Started',
          href: '/resources#get-started',
        },
        {
          label: 'Documentation',
          href: '/resources#documentation',
        },
        {
          label: 'Source Code',
          href: '/resources#source-code',
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
          label: 'Community',
          href: '/resources#community',
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
  { label: 'Use Cases', key: 'useCases', href: '/use-cases', menu: useCasesMenu },
  { label: 'Community', key: 'community', href: '/community', menu: communityMenu },
  { label: 'Resources', key: 'resources', href: '/resources', menu: resourcesMenu },
  { label: 'Blog', href: '/blog/' },
  { label: 'Docs', href: DOCS_INDEX },
] as const;

/**
 * Mobile Menu Structure
 * Flattened navigation for mobile display
 */
export const mobileMenuItems = [
  { label: 'Quick Start', href: DOCS_PATHS.gettingStarted.quickStart },
  { label: 'Developer Resources', href: '/resources' },
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
      { label: 'Fast Data Marts', href: '/use-cases/fast-data-marts' },
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
      { label: 'Architectural Foundation', href: '/features/architectural-foundation' },
      { label: 'Memory-First Storage', href: '/features/storage' },
      { label: 'ACID Transactions', href: '/features/acid-transactions' },
      { label: 'Access Patterns', href: '/features/sql' },
      { label: 'Schema Evolution', href: '/features/schema-evolution' },
      { label: 'Backpressured Streaming', href: '/features/streaming' },
      { label: 'Schema-Driven Data Placement', href: '/features/data-placement' },
      { label: 'Processing Where Data Lives', href: '/features/compute-apis' },
      { label: 'Coordination That Scales', href: '/features/coordination' },
      { label: 'Operations Built In', href: '/features/tooling' },
      { label: 'Multi-Language Support', href: '/features/multilanguage' },
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
      { label: 'Architectural Foundation', href: '/features/architectural-foundation' },
      { label: 'Memory-First Storage', href: '/features/storage' },
      { label: 'ACID Transactions', href: '/features/acid-transactions' },
      { label: 'Access Patterns', href: '/features/sql' },
      { label: 'Schema Evolution', href: '/features/schema-evolution' },
      { label: 'Backpressured Streaming', href: '/features/streaming' },
      { label: 'Schema-Driven Data Placement', href: '/features/data-placement' },
      { label: 'Processing Where Data Lives', href: '/features/compute-apis' },
      { label: 'Coordination That Scales', href: '/features/coordination' },
      { label: 'Operations Built In', href: '/features/tooling' },
      { label: 'Multi-Language Support', href: '/features/multilanguage' },
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
      { label: 'Fast Data Marts', href: '/use-cases/fast-data-marts' },
      { label: 'IoT and Time-Series Data', href: '/use-cases/iot-time-series' },
      { label: 'Digital Integration Hub', href: '/use-cases/digital-integration-hub' },
      { label: 'High-Performance Computing', href: '/use-cases/high-performance-computing' },
      { label: 'Key-Value Store', href: '/use-cases/key-value-store' },
      { label: 'Database with Memory-First Storage', href: '/use-cases/in-memory-database' },
    ],
  },
  community: {
    links: [
      { label: 'Community', href: '/community' },
      { label: 'Resources', href: '/resources' },
      { label: 'Events', href: '/events' },
      { label: 'Blog', href: '/blog/' },
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
      href: DOCS_PATHS.gettingStarted.quickStart,
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
  trademarkNotice: 'Apache, Apache Ignite, the Apache oak leaf and the Apache Ignite logo are either registered trademarks or trademarks of The Apache Software Foundation',
  privacyPolicyLink: 'http://apache.org/foundation/policies/privacy.html',
} as const;
