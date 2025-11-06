export interface DownloadVersion {
  version: string;
  date: string;
  guide: string;
  javadoc?: string;
  scaladoc?: string;
  notes: string;
  sourcelink: string;
  isLatest?: boolean;
  ignite3?: boolean;
}

export const SOURCE_RELEASES_IGNITE3: DownloadVersion[] = [
  {
    version: '3.0.0',
    date: '2025-02-05',
    guide: '/docs/ignite3/3.0.0',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourcelink: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0-src.zip',
    isLatest: true,
    ignite3: true,
  },
];

export const SOURCE_RELEASES_IGNITE2: DownloadVersion[] = [
  {
    version: '2.17.0',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourcelink: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-src.zip',
    isLatest: true,
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-src.zip',
  },
  {
    version: '2.15.0',
    date: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-src.zip',
  },
];

export interface BinaryRelease {
  version: string;
  date: string;
  guide: string;
  notes: string;
  binarylink: string;
  deb?: string;
  rpm?: string;
  zip?: string;
  isLatest?: boolean;
  ignite3?: boolean;
}

export const BINARY_RELEASES_IGNITE3: BinaryRelease[] = [
  {
    version: '3.0.0',
    date: '2025-02-05',
    guide: '/docs/ignite3/3.0.0',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    binarylink: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0.zip',
    deb: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0.deb',
    rpm: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0.rpm',
    zip: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0.zip',
    isLatest: true,
    ignite3: true,
  },
];

export const BINARY_RELEASES_IGNITE2: BinaryRelease[] = [
  {
    version: '2.17.0',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    binarylink: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-bin.zip',
    isLatest: true,
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    binarylink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-bin.zip',
  },
];

export interface DockerImage {
  name: string;
  guide?: string;
  date: string;
  links: Array<{url: string}>;
}

export const DOCKER_IMAGES: DockerImage[] = [
  {
    name: 'Apache Ignite 3',
    guide: 'https://ignite.apache.org/docs/ignite3/latest/quick-start/getting-started-guide',
    date: '2025-02-05',
    links: [
      {url: 'https://hub.docker.com/r/apacheignite/ignite3'},
    ],
  },
  {
    name: 'Apache Ignite 2',
    guide: 'https://ignite.apache.org/docs/latest/installation/installing-using-docker',
    date: '2025-02-13',
    links: [
      {url: 'https://hub.docker.com/r/apacheignite/ignite'},
    ],
  },
];
