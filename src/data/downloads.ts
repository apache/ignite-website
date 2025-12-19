/**
 * Apache Ignite Download Data Configuration
 *
 * This file contains all download version data for Apache Ignite.
 * Separate content from infrastructure for easier maintenance.
 *
 * MAINTENANCE GUIDE
 * =================
 *
 * Check for Updates:
 *   npm run check-downloads
 *   This scans Apache Archive and Docker Hub for new versions and reports
 *   what updates are needed.
 *
 * When a New Version is Released:
 *   1. Run `npm run check-downloads` to see the new version details
 *   2. Add a new entry to the appropriate arrays below:
 *      - Ignite 3: ignite3SourceReleases, ignite3BinaryReleases
 *      - Ignite 2: ignite2SourceReleases, ignite2BinaryReleases, ignite2SlimReleases
 *   3. Mark the new version with `latest: true` and remove from previous latest
 *   4. Update dockerImages array dates if new Docker images were published
 *   5. Update the DOCS_BASE_URL in download.tsx if docs version changed
 *
 * URL Patterns:
 *   - Latest releases: Use '[preferred][distdir]' prefix for mirror selection
 *   - Older releases: Use 'https://archive.apache.org/dist/ignite/' prefix
 *   - Ignite 3 binary: ignite3-X.X.X.zip
 *   - Ignite 2 binary: apache-ignite-X.X.X-bin.zip
 *   - Source: apache-ignite-X.X.X-src.zip
 *
 * Data Sources:
 *   - Apache Archive: https://archive.apache.org/dist/ignite/
 *   - Apache Mirrors: https://dlcdn.apache.org/ignite/
 *   - Docker Hub: https://hub.docker.com/r/apacheignite/ignite/tags
 */

export interface DownloadRelease {
  version: string;
  date: string; // YYYY-MM-DD format
  latest?: boolean;
  guide?: string;
  javadoc?: string;
  scaladoc?: string;
  releaseNotes?: string;
  sourceUrl?: string;
  binaryUrl?: string;
  slimUrl?: string;
}

export interface DockerImage {
  name: string;
  date: string;
  guide?: string;
  links: Array<{
    url: string;
    region?: string;
    trackingLabel: string;
  }>;
}

export interface Extension {
  name: string;
  displayName: string;
  version: string;
  date: string;
  guide?: string;
  releaseNotes?: string;
  sourceUrl: string;
  binaryUrl?: string;
}

/**
 * Ignite 3 Source Releases
 */
export const ignite3SourceReleases: DownloadRelease[] = [
  {
    version: '3.1.0',
    latest: true,
    date: '2025-10-21',
    guide: 'https://ignite.apache.org/docs/ignite3/3.1.0/configure-and-operate/installation/installing-using-zip',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.1.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite3/3.1.0/RELEASE_NOTES.txt',
    sourceUrl: 'https://archive.apache.org/dist/ignite/3.1.0/apache-ignite-3.1.0-src.zip',
  },
  {
    version: '3.0.0',
    date: '2025-02-05',
    guide: 'https://ignite.apache.org/docs/ignite3/3.0.0/configure-and-operate/installation/installing-using-zip',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourceUrl: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0-src.zip',
  },
];

/**
 * Ignite 2 Source Releases
 * Note: 2.17.0 uses [preferred][distdir] placeholder for mirror selection
 */
export const ignite2SourceReleases: DownloadRelease[] = [
  {
    version: '2.17.0',
    latest: true,
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourceUrl: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-src.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-src.zip',
  },
  {
    version: '2.15.0',
    date: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-src.zip',
  },
  {
    version: '2.14.0',
    date: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-src.zip',
  },
  {
    version: '2.13.0',
    date: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-src.zip',
  },
  {
    version: '2.12.0',
    date: '2022-01-14',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.12.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.12.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-2.12.0-src.zip',
  },
  {
    version: '2.11.1',
    date: '2021-12-20',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.1/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-2.11.1-src.zip',
  },
  {
    version: '2.11.0',
    date: '2021-09-17',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-2.11.0-src.zip',
  },
  {
    version: '2.10.0',
    date: '2021-03-15',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-2.10.0-src.zip',
  },
  {
    version: '2.9.1',
    date: '2020-12-28',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.1/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-2.9.1-src.zip',
  },
  {
    version: '2.9.0',
    date: '2020-10-21',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-2.9.0-src.zip',
  },
  {
    version: '2.8.1',
    date: '2020-05-27',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.8.1/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.8.1/apache-ignite-2.8.1-src.zip',
  },
  {
    version: '2.8.0',
    date: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/scaladoc/scalar/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.8.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.8.0/apache-ignite-2.8.0-src.zip',
  },
  {
    version: '2.7.6',
    date: '2019-09-19',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/scaladoc/scalar/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.7.6/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/2.7.6/apache-ignite-2.7.6-src.zip',
  },
];

/**
 * Ignite 3 Binary Releases
 */
export const ignite3BinaryReleases: DownloadRelease[] = [
  {
    version: '3.1.0',
    latest: true,
    date: '2025-10-21',
    guide: 'https://ignite.apache.org/docs/ignite3/3.1.0/configure-and-operate/installation/installing-using-zip',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.1.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite3/3.1.0/RELEASE_NOTES.txt',
    binaryUrl: 'https://dlcdn.apache.org/ignite/3.1.0/ignite3-3.1.0.zip',
  },
  {
    version: '3.0.0',
    date: '2025-02-05',
    guide: 'https://ignite.apache.org/docs/ignite3/3.0.0/configure-and-operate/installation/installing-using-zip',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    binaryUrl: 'https://dlcdn.apache.org/ignite/3.0.0/ignite3-3.0.0.zip',
  },
];

/**
 * Ignite 2 Binary Releases
 * Note: 2.17.0 uses [preferred][distdir] placeholder for mirror selection
 */
export const ignite2BinaryReleases: DownloadRelease[] = [
  {
    version: '2.17.0',
    latest: true,
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    binaryUrl: '[preferred][distdir]/2.17.0/apache-ignite-2.17.0-bin.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-bin.zip',
  },
  {
    version: '2.15.0',
    date: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-bin.zip',
  },
  {
    version: '2.14.0',
    date: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-bin.zip',
  },
  {
    version: '2.13.0',
    date: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-bin.zip',
  },
  {
    version: '2.12.0',
    date: '2022-01-14',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.12.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.12.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-2.12.0-bin.zip',
  },
  {
    version: '2.11.1',
    date: '2021-12-20',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.1/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-2.11.1-bin.zip',
  },
  {
    version: '2.11.0',
    date: '2021-09-17',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-2.11.0-bin.zip',
  },
  {
    version: '2.10.0',
    date: '2021-03-15',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-2.10.0-bin.zip',
  },
  {
    version: '2.9.1',
    date: '2020-12-28',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.1/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-2.9.1-bin.zip',
  },
  {
    version: '2.9.0',
    date: '2020-10-21',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-2.9.0-bin.zip',
  },
  {
    version: '2.8.1',
    date: '2020-05-27',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.8.1/apache-ignite-2.8.1-bin.zip',
  },
  {
    version: '2.8.0',
    date: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.8.0/scaladoc/scalar/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.8.0/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.8.0/apache-ignite-2.8.0-bin.zip',
  },
  {
    version: '2.7.6',
    date: '2019-09-19',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/javadoc/',
    scaladoc: 'https://ignite.apache.org/releases/ignite2/2.7.6/scaladoc/scalar/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.7.6/release_notes.html',
    binaryUrl: 'https://archive.apache.org/dist/ignite/2.7.6/apache-ignite-2.7.6-bin.zip',
  },
];

/**
 * Ignite 2 Slim Binary Releases (Ignite 2 only)
 * Note: 2.17.0 uses [preferred][distdir] placeholder for mirror selection
 */
export const ignite2SlimReleases: DownloadRelease[] = [
  {
    version: '2.17.0',
    latest: true,
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    slimUrl: '[preferred][distdir]/2.17.0/apache-ignite-slim-2.17.0-bin.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-slim-2.16.0-bin.zip',
  },
  {
    version: '2.15.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-slim-2.15.0-bin.zip',
  },
  {
    version: '2.14.0',
    date: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-slim-2.14.0-bin.zip',
  },
  {
    version: '2.13.0',
    date: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-slim-2.13.0-bin.zip',
  },
  {
    version: '2.12.0',
    date: '2022-01-14',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.12.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.12.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.12.0/apache-ignite-slim-2.12.0-bin.zip',
  },
  {
    version: '2.11.1',
    date: '2021-12-20',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.1/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.11.1/apache-ignite-slim-2.11.1-bin.zip',
  },
  {
    version: '2.11.0',
    date: '2021-09-17',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.11.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.11.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.11.0/apache-ignite-slim-2.11.0-bin.zip',
  },
  {
    version: '2.10.0',
    date: '2021-03-15',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.10.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.10.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.10.0/apache-ignite-slim-2.10.0-bin.zip',
  },
  {
    version: '2.9.1',
    date: '2020-12-28',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.1/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.1/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.9.1/apache-ignite-slim-2.9.1-bin.zip',
  },
  {
    version: '2.9.0',
    date: '2020-10-21',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.9.0/javadoc/',
    releaseNotes: 'https://ignite.apache.org/releases/ignite2/2.9.0/release_notes.html',
    slimUrl: 'https://archive.apache.org/dist/ignite/2.9.0/apache-ignite-slim-2.9.0-bin.zip',
  },
];

/**
 * Docker and Cloud Images
 */
export const dockerImages: DockerImage[] = [
  {
    name: 'Docker Image (Ignite 3)',
    date: '2025-10-30',
    guide: 'https://ignite.apache.org/docs/ignite3/3.1.0/configure-and-operate/installation/installing-using-docker',
    links: [
      {
        url: 'https://hub.docker.com/r/apacheignite/ignite/tags?name=3.',
        trackingLabel: 'docker_ignite3_download',
      },
    ],
  },
  {
    name: 'Docker Image (Ignite 2)',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/ignite2/latest/installation/installing-using-docker',
    links: [
      {
        url: 'https://hub.docker.com/r/apacheignite/ignite/tags?name=2.17',
        trackingLabel: 'docker_ignite2_download',
      },
    ],
  },
  {
    name: 'Amazon Image (Legacy)',
    date: '2018-07-16',
    guide: 'https://apacheignite.readme.io/docs/aws-deployment',
    links: [
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=us-west-1#launchAmi=ami-9cdbb3fc',
        region: 'US West',
        trackingLabel: 'aws_image_west_download',
      },
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=us-east-1#launchAmi=ami-ce82caa4',
        region: 'US East',
        trackingLabel: 'aws_image_east_download',
      },
      {
        url: 'https://console.aws.amazon.com/ec2/home?region=eu-central-1#launchAmi=ami-191b0775',
        region: 'EU Central',
        trackingLabel: 'aws_image_central_download',
      },
    ],
  },
];

/**
 * Ignite Extensions - Source Releases
 */
export const extensionSourceReleases: Extension[] = [
  {
    name: 'ignite-aws-ext',
    displayName: 'AWS Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-src.zip',
  },
  {
    name: 'ignite-azure-ext',
    displayName: 'Azure Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-src.zip',
  },
  {
    name: 'ignite-gce-ext',
    displayName: 'GCE Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-src.zip',
  },
  {
    name: 'ignite-spring-tx-ext',
    displayName: 'Spring TX Extension',
    version: '1.0.0',
    date: '2021-11-02',
    guide: '/docs/ignite2/latest/extensions-and-integrations/spring/spring-tx.html',
    releaseNotes: '/releases/ext/spring-tx-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-tx-ext/1.0.0/ignite-spring-tx-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-cache-ext',
    displayName: 'Spring Cache Extension',
    version: '1.0.0',
    date: '2021-11-02',
    guide: '/docs/ignite2/latest/extensions-and-integrations/spring/spring-caching.html',
    releaseNotes: '/releases/ext/spring-cache-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-cache-ext/1.0.0/ignite-spring-cache-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-data-ext',
    displayName: 'Spring Data Extension',
    version: '2.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/extensions-and-integrations/spring/spring-data.html',
    releaseNotes: '/releases/ext/spring-data-ext-2.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-data-ext/2.0.0/ignite-spring-data-ext-src.zip',
  },
  {
    name: 'ignite-session-ext',
    displayName: 'Spring Session Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/extensions-and-integrations/spring/spring-data.html',
    releaseNotes: '/releases/ext/spring-session-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-session-ext/1.0.0/ignite-spring-session-ext-src.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    displayName: 'Performance Statistics Extension',
    version: '1.0.0',
    date: '2021-07-07',
    guide: '/docs/ignite2/latest/extensions-and-integrations/performance-statistics.html',
    releaseNotes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    displayName: 'Zookeeper IP Finder Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    releaseNotes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-src.zip',
  },
];

/**
 * Ignite Extensions - Binary Releases
 */
export const extensionBinaryReleases: Extension[] = [
  {
    name: 'ignite-aws-ext',
    displayName: 'AWS Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-bin.zip',
    binaryUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-bin.zip',
  },
  {
    name: 'ignite-azure-ext',
    displayName: 'Azure Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-bin.zip',
    binaryUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-bin.zip',
  },
  {
    name: 'ignite-gce-ext',
    displayName: 'GCE Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/clustering/discovery-in-the-cloud.html',
    releaseNotes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-bin.zip',
    binaryUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-bin.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    displayName: 'Performance Statistics Extension',
    version: '1.0.0',
    date: '2021-07-07',
    guide: '/docs/ignite2/latest/extensions-and-integrations/performance-statistics.html',
    releaseNotes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-bin.zip',
    binaryUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-bin.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    displayName: 'Zookeeper IP Finder Extension',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/ignite2/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    releaseNotes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourceUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-bin.zip',
    binaryUrl: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-bin.zip',
  },
];

/**
 * Spring Boot Maven Dependencies
 */
export const springBootDependencies = `<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-thin-client-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>`;
