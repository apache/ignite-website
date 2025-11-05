/**
 * User Stories - Video testimonials from companies using Apache Ignite
 *
 * Data extracted from homepage user stories slider section.
 * Each story includes a video link, thumbnail, title, and category.
 */

export interface UserStory {
  url: string;
  thumbnail: string;
  title: string;
  titleClass?: string;
  category: string;
  isArticle?: boolean;
}

export const userStories: UserStory[] = [
  {
    url: 'https://www.youtube.com/watch?v=3w0H3zLH594',
    thumbnail: '/img/poweredby/videos/bloomberg.jpg',
    title: 'Real-time Data Access with Apache Ignite SQL',
    titleClass: 'comvideo__txt--small',
    category: 'Banking & Finances'
  },
  {
    url: 'https://www.youtube.com/watch?v=BSGFL72u2iY',
    thumbnail: '/img/poweredby/videos/cern.jpg',
    title: 'Improving the CERN Control and Monitoring Platform (C2MON) with Apache Ignite',
    titleClass: 'comvideo__txt--small',
    category: 'Others'
  },
  {
    url: 'https://www.youtube.com/watch?v=NUxdoL-K9Ys',
    thumbnail: '/img/poweredby/videos/012.png',
    title: 'How nference.ai leverages Ignite for distributed analytics in the bioinformatics domain',
    titleClass: 'comvideo__txt--small',
    category: 'Biotech'
  },
  {
    url: 'https://www.youtube.com/watch?v=3FFexcYIpmA',
    thumbnail: '/img/poweredby/videos/001.png',
    title: 'Leveraging In Memory Compute Grids With Core Systems Of Record',
    titleClass: 'comvideo__txt--small',
    category: 'Banking & Finances'
  },
  {
    url: 'https://www.youtube.com/watch?v=Mhtt2QL_qCQ',
    thumbnail: '/img/poweredby/videos/002.png',
    title: 'Apache Ignite, Load Reduction and System Scaling for Banking',
    titleClass: 'comvideo__txt--black comvideo__txt--small',
    category: 'Banking & Finances'
  },
  {
    url: 'https://www.youtube.com/watch?v=z28rthKIrDk',
    thumbnail: '/img/poweredby/videos/003.png',
    title: 'S9D Using Apache Ignite As A Part Of Real Time Campaigning',
    titleClass: 'comvideo__txt--small',
    category: 'Retail'
  },
  {
    url: 'https://techblog.yahoo.co.jp/oss/yahoo_shopping_purchases_ignite/',
    thumbnail: '/img/poweredby/videos/005.png',
    title: 'In-Memory Computing Patterns For High Volume, Real Time Applications',
    titleClass: 'comvideo__txt--small',
    category: 'Retail',
    isArticle: true
  },
  {
    url: 'https://www.youtube.com/watch?v=EdFOKJIjRSg',
    thumbnail: '/img/poweredby/videos/008.png',
    title: 'Fitness + In Memory Computing = Getting Ahead Of The Game',
    titleClass: 'comvideo__txt--small',
    category: 'Others'
  },
  {
    url: 'https://www.youtube.com/watch?v=jF9T2cJB6t0',
    thumbnail: '/img/poweredby/videos/009.png',
    title: 'High Performance Exposure Management With Apache Ignite',
    titleClass: 'comvideo__txt--black comvideo__txt--small',
    category: 'Banking & Finances'
  },
  {
    url: 'https://www.youtube.com/watch?v=_mnZQ3JDcn8',
    thumbnail: '/img/poweredby/videos/014.png',
    title: 'Ignite Success Story: How Ignite Fuels The High Throughput Messaging In Sentienz Akiro',
    titleClass: 'comvideo__txt--black  comvideo__txt--small',
    category: 'Software & SaaS'
  },
  {
    url: 'https://techblog.yahoo.co.jp/oss/yahoo_shopping_purchases_ignite/',
    thumbnail: '/img/poweredby/videos/004.png',
    title: 'Recent Purchases With Apache Ignite',
    titleClass: 'comvideo__txt--small',
    category: 'Retail',
    isArticle: true
  },
  {
    url: 'https://www.youtube.com/watch?v=CPmwnjDJ1Sk',
    thumbnail: '/img/poweredby/videos/006.png',
    title: 'Embracing The Service Consumption Shift In Banking',
    titleClass: 'comvideo__txt--small',
    category: 'Banking & Finances'
  }
];

export const storyCategories = [
  'Software & SaaS',
  'Banking & Finances',
  'Retail',
  'Biotech',
  'Logistics & Transportation',
  'Others'
];
