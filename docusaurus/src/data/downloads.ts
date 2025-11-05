export interface DownloadVersion {
  version: string;
  releaseDate: string;
  guide?: string;
  javadoc?: string;
  scaladoc?: string;
  notes?: string;
  sourceLink: string;
  binaryLink?: string;
  slimLink?: string;
  isLatest?: boolean;
  ignite3: boolean;
}

export interface ExtensionVersion {
  name: string;
  version: string;
  releaseDate: string;
  guide?: string;
  notes?: string;
  sourceLink: string;
  binaryLink?: string;
}

export interface DockerImage {
  name: string;
  releaseDate: string;
  guide?: string;
  links: Array<{
    url: string;
    eventCategory: string;
  }>;
}

export const SOURCE_RELEASES: DownloadVersion[] = [
  {
    version: '3.0.0',
    releaseDate: '2025-02-05',
    guide: '/docs/ignite3/3.0.0',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourceLink: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0-src.zip',
    isLatest: true,
    ignite3: true,
  },
  {
    version: '2.17.0',
    releaseDate: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourceLink: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-src.zip',
    isLatest: true,
    ignite3: false,
  },
  {
    version: '2.16.0',
    releaseDate: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.15.0',
    releaseDate: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.14.0',
    releaseDate: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.13.0',
    releaseDate: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.12.0',
    releaseDate: '2022-01-14',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.12.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.12.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-2.12.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.11.1',
    releaseDate: '2021-12-20',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.1/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.11.1/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-2.11.1-src.zip',
    ignite3: false,
  },
  {
    version: '2.11.0',
    releaseDate: '2021-09-17',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.11.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-2.11.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.10.0',
    releaseDate: '2021-03-15',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-2.10.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.9.1',
    releaseDate: '2020-12-28',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.1/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.9.1/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-2.9.1-src.zip',
    ignite3: false,
  },
  {
    version: '2.9.0',
    releaseDate: '2020-10-21',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.9.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-2.9.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.8.1',
    releaseDate: '2020-05-27',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.1/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.8.1/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.8.1/apache-ignite-2.8.1-src.zip',
    ignite3: false,
  },
  {
    version: '2.8.0',
    releaseDate: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/scaladoc/scalar/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.8.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.8.0/apache-ignite-2.8.0-src.zip',
    ignite3: false,
  },
  {
    version: '2.7.6',
    releaseDate: '2019-09-19',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/scaladoc/scalar/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.7.6/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.7.6/apache-ignite-2.7.6-src.zip',
    ignite3: false,
  },
];

export const BINARY_RELEASES: DownloadVersion[] = [
  {
    version: '3.0.0',
    releaseDate: '2025-02-05',
    guide: 'https://ignite.apache.org/docs/ignite3/3.0.0',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourceLink: 'https://dlcdn.apache.org/ignite/3.0.0/ignite3-3.0.0.zip',
    binaryLink: 'https://dlcdn.apache.org/ignite/3.0.0/ignite3-3.0.0.zip',
    isLatest: true,
    ignite3: true,
  },
  {
    version: '2.17.0',
    releaseDate: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourceLink: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-bin.zip',
    binaryLink: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-bin.zip',
    slimLink: '[preferred][distdir]/2.17.0/apache-ignite-slim-2.17.0-bin.zip',
    isLatest: true,
    ignite3: false,
  },
  {
    version: '2.16.0',
    releaseDate: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-slim-2.16.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.15.0',
    releaseDate: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-slim-2.15.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.14.0',
    releaseDate: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-slim-2.14.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.13.0',
    releaseDate: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-slim-2.13.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.12.0',
    releaseDate: '2022-01-14',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.12.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.12.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-2.12.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-2.12.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-slim-2.12.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.11.1',
    releaseDate: '2021-12-20',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.1/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.11.1/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-2.11.1-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-2.11.1-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-slim-2.11.1-bin.zip',
    ignite3: false,
  },
  {
    version: '2.11.0',
    releaseDate: '2021-09-17',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.11.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-2.11.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-2.11.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-slim-2.11.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.10.0',
    releaseDate: '2021-03-15',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-2.10.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-2.10.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-slim-2.10.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.9.1',
    releaseDate: '2020-12-28',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.1/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.9.1/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-2.9.1-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-2.9.1-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-slim-2.9.1-bin.zip',
    ignite3: false,
  },
  {
    version: '2.9.0',
    releaseDate: '2020-10-21',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.9.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-2.9.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-2.9.0-bin.zip',
    slimLink: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-slim-2.9.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.8.1',
    releaseDate: '2020-05-27',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.8.1/apache-ignite-2.8.1-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.8.1/apache-ignite-2.8.1-bin.zip',
    ignite3: false,
  },
  {
    version: '2.8.0',
    releaseDate: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/scaladoc/scalar/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.8.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.8.0/apache-ignite-2.8.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.8.0/apache-ignite-2.8.0-bin.zip',
    ignite3: false,
  },
  {
    version: '2.7.6',
    releaseDate: '2019-09-19',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/scaladoc/scalar/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.7.6/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/2.7.6/apache-ignite-2.7.6-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/2.7.6/apache-ignite-2.7.6-bin.zip',
    ignite3: false,
  },
];

export const SLIM_RELEASES: DownloadVersion[] = BINARY_RELEASES.filter(
  (release) => release.slimLink && !release.ignite3
);

export const EXTENSION_SOURCE_RELEASES: ExtensionVersion[] = [
  {
    name: 'ignite-aws-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-src.zip',
  },
  {
    name: 'ignite-azure-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-src.zip',
  },
  {
    name: 'ignite-gce-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-src.zip',
  },
  {
    name: 'ignite-spring-tx-ext',
    version: '1.0.0',
    releaseDate: '2021-11-02',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-tx.html',
    notes: '/releases/ext/spring-tx-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-tx-ext/1.0.0/ignite-spring-tx-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-cache-ext',
    version: '1.0.0',
    releaseDate: '2021-11-02',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-caching.html',
    notes: '/releases/ext/spring-cache-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-cache-ext/1.0.0/ignite-spring-cache-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-data-ext',
    version: '2.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-data.html',
    notes: '/releases/ext/spring-data-ext-2.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-data-ext/2.0.0/ignite-spring-data-ext-src.zip',
  },
  {
    name: 'ignite-session-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-data.html',
    notes: '/releases/ext/spring-session-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-session-ext/1.0.0/ignite-spring-session-ext-src.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    version: '1.0.0',
    releaseDate: '2021-07-07',
    guide: '/docs/latest/extensions-and-integrations/performance-statistics.html',
    notes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    notes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-src.zip',
  },
];

export const EXTENSION_BINARY_RELEASES: ExtensionVersion[] = [
  {
    name: 'ignite-aws-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-bin.zip',
  },
  {
    name: 'ignite-azure-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-bin.zip',
  },
  {
    name: 'ignite-gce-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-bin.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    version: '1.0.0',
    releaseDate: '2021-07-07',
    guide: '/docs/latest/extensions-and-integrations/performance-statistics.html',
    notes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-bin.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    version: '1.0.0',
    releaseDate: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    notes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourceLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-bin.zip',
    binaryLink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-bin.zip',
  },
];

export const DOCKER_IMAGES: DockerImage[] = [
  {
    name: 'Docker Image',
    releaseDate: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/latest/installation/installing-using-docker',
    links: [
      {
        url: 'https://hub.docker.com/r/apacheignite/ignite/tags/',
        eventCategory: 'docker_repo_download',
      },
    ],
  },
  {
    name: 'Amazon Image',
    releaseDate: '2018-07-16',
    guide: 'https://apacheignite.readme.io/docs/aws-deployment',
    links: [
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=us-west-1#launchAmi=ami-9cdbb3fc',
        eventCategory: 'aws_image_west_download',
      },
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=us-east-1#launchAmi=ami-ce82caa4',
        eventCategory: 'aws_image_east_download',
      },
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=eu-central-1#launchAmi=ami-191b0775',
        eventCategory: 'aws_image_central_download',
      },
    ],
  },
];
