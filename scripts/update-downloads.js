#!/usr/bin/env node

/**
 * Apache Ignite Downloads Data Updater
 *
 * This script fetches version information from:
 * - Apache Archive (https://archive.apache.org/dist/ignite/)
 * - Apache Mirrors (https://dlcdn.apache.org/ignite/)
 * - Docker Hub API (https://hub.docker.com/v2/repositories/apacheignite/ignite/tags)
 *
 * Usage:
 *   node scripts/update-downloads.js [--dry-run] [--verbose]
 *
 * Options:
 *   --dry-run   Show what would be updated without writing changes
 *   --verbose   Show detailed progress information
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const ARCHIVE_URL = 'https://archive.apache.org/dist/ignite/';
const MIRROR_URL = 'https://dlcdn.apache.org/ignite/';
const DOCKER_HUB_URL = 'https://hub.docker.com/v2/repositories/apacheignite/ignite/tags';
const DOWNLOADS_FILE = path.join(__dirname, '../src/data/downloads.ts');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const VERBOSE = args.includes('--verbose');

function log(msg) {
  console.log(`>>> ${msg}`);
}

function logVerbose(msg) {
  if (VERBOSE) {
    console.log(`    ${msg}`);
  }
}

function logResult(msg) {
  console.log(`<<< ${msg}`);
}

function logWarning(msg) {
  console.log(`!!! ${msg}`);
}

/**
 * Fetch HTML content from a URL
 */
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Fetch JSON from a URL
 */
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Accept': 'application/json' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        fetchJson(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Invalid JSON from ${url}`));
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Parse Apache directory listing HTML to extract version folders
 */
function parseApacheDirectory(html) {
  const versionRegex = /href="(\d+\.\d+\.\d+)\/"/g;
  const versions = [];
  let match;
  while ((match = versionRegex.exec(html)) !== null) {
    versions.push(match[1]);
  }
  return versions;
}

/**
 * Fetch file modification date from Apache archive
 */
async function fetchVersionDate(version) {
  try {
    const url = `${ARCHIVE_URL}${version}/`;
    const html = await fetchUrl(url);
    // Look for the date in the directory listing (format: YYYY-MM-DD HH:MM)
    const dateRegex = /(\d{4}-\d{2}-\d{2})\s+\d{2}:\d{2}/;
    const match = html.match(dateRegex);
    if (match) {
      return match[1];
    }
  } catch (e) {
    logVerbose(`Could not fetch date for ${version}: ${e.message}`);
  }
  return null;
}

/**
 * Check if a file exists at the given URL
 */
function checkFileExists(url) {
  return new Promise((resolve) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname,
      method: 'HEAD',
    };
    https.request(options, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false)).end();
  });
}

/**
 * Determine available artifacts for a version
 */
async function getVersionArtifacts(version) {
  const isIgnite3 = version.startsWith('3.');
  const artifacts = {
    version,
    isIgnite3,
    hasSource: false,
    hasBinary: false,
    hasSlim: false,
    sourceUrl: null,
    binaryUrl: null,
    slimUrl: null,
  };

  if (isIgnite3) {
    // Ignite 3 naming: apache-ignite-X.X.X-src.zip, ignite3-X.X.X.zip
    const sourceUrl = `${ARCHIVE_URL}${version}/apache-ignite-${version}-src.zip`;
    const binaryUrl = `${ARCHIVE_URL}${version}/ignite3-${version}.zip`;

    artifacts.hasSource = await checkFileExists(sourceUrl);
    artifacts.hasBinary = await checkFileExists(binaryUrl);

    if (artifacts.hasSource) artifacts.sourceUrl = sourceUrl;
    if (artifacts.hasBinary) artifacts.binaryUrl = binaryUrl;
  } else {
    // Ignite 2 naming: apache-ignite-X.X.X-src.zip, apache-ignite-X.X.X-bin.zip
    const sourceUrl = `${ARCHIVE_URL}${version}/apache-ignite-${version}-src.zip`;
    const binaryUrl = `${ARCHIVE_URL}${version}/apache-ignite-${version}-bin.zip`;
    const slimUrl = `${ARCHIVE_URL}${version}/apache-ignite-slim-${version}-bin.zip`;

    artifacts.hasSource = await checkFileExists(sourceUrl);
    artifacts.hasBinary = await checkFileExists(binaryUrl);
    artifacts.hasSlim = await checkFileExists(slimUrl);

    if (artifacts.hasSource) artifacts.sourceUrl = sourceUrl;
    if (artifacts.hasBinary) artifacts.binaryUrl = binaryUrl;
    if (artifacts.hasSlim) artifacts.slimUrl = slimUrl;
  }

  return artifacts;
}

/**
 * Fetch Docker Hub tags
 */
async function fetchDockerTags() {
  const tags = { ignite3: [], ignite2: [] };
  let url = `${DOCKER_HUB_URL}?page_size=100`;

  try {
    while (url) {
      const data = await fetchJson(url);
      for (const result of data.results || []) {
        const tag = result.name;
        // Skip non-version tags
        if (tag === 'latest' || tag.includes('-') || !tag.match(/^\d+\.\d+/)) {
          continue;
        }
        if (tag.startsWith('3.')) {
          tags.ignite3.push(tag);
        } else if (tag.startsWith('2.')) {
          tags.ignite2.push(tag);
        }
      }
      url = data.next;
      if (url && !url.startsWith('http')) {
        url = `https://hub.docker.com${url}`;
      }
    }
  } catch (e) {
    logWarning(`Could not fetch Docker tags: ${e.message}`);
  }

  return tags;
}

/**
 * Compare semver versions
 */
function compareVersions(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] || 0;
    const nb = pb[i] || 0;
    if (na > nb) return -1;
    if (na < nb) return 1;
  }
  return 0;
}

/**
 * Generate TypeScript for a release entry
 */
function generateReleaseEntry(release, isLatest, usePreferredMirror = false) {
  const lines = ['  {'];
  lines.push(`    version: '${release.version}',`);
  if (isLatest) {
    lines.push(`    latest: true,`);
  }
  lines.push(`    date: '${release.date}',`);

  // Add documentation links based on version
  if (release.isIgnite3) {
    lines.push(`    guide: 'https://ignite.apache.org/docs/ignite3/${release.version}',`);
    lines.push(`    javadoc: 'https://ignite.apache.org/releases/ignite3/${release.version}/javadoc/',`);
    lines.push(`    releaseNotes: 'https://ignite.apache.org/releases/ignite3/${release.version}/RELEASE_NOTES.txt',`);
  } else {
    lines.push(`    guide: 'https://ignite.apache.org/docs/latest',`);
    lines.push(`    javadoc: 'https://ignite.apache.org/releases/ignite2/${release.version}/javadoc/',`);
    lines.push(`    releaseNotes: 'https://ignite.apache.org/releases/ignite2/${release.version}/release_notes.html',`);
  }

  // Add download URLs
  if (release.sourceUrl) {
    if (usePreferredMirror && isLatest) {
      lines.push(`    sourceUrl: '[preferred][distdir]/${release.version}/apache-ignite-${release.version}-src.zip',`);
    } else {
      lines.push(`    sourceUrl: '${release.sourceUrl}',`);
    }
  }
  if (release.binaryUrl) {
    if (usePreferredMirror && isLatest && !release.isIgnite3) {
      lines.push(`    binaryUrl: '[preferred][distdir]/${release.version}/apache-ignite-${release.version}-bin.zip',`);
    } else if (isLatest && release.isIgnite3) {
      // Ignite 3 latest should use dlcdn mirror
      lines.push(`    binaryUrl: 'https://dlcdn.apache.org/ignite/${release.version}/ignite3-${release.version}.zip',`);
    } else {
      lines.push(`    binaryUrl: '${release.binaryUrl}',`);
    }
  }
  if (release.slimUrl) {
    if (usePreferredMirror && isLatest) {
      lines.push(`    slimUrl: '[preferred][distdir]/${release.version}/apache-ignite-slim-${release.version}-bin.zip',`);
    } else {
      lines.push(`    slimUrl: '${release.slimUrl}',`);
    }
  }

  lines.push('  },');
  return lines.join('\n');
}

/**
 * Main execution
 */
async function main() {
  console.log('=== [1/4] Fetching Apache Archive Directory');

  let archiveHtml;
  try {
    archiveHtml = await fetchUrl(ARCHIVE_URL);
    logResult('Fetched archive directory listing');
  } catch (e) {
    logWarning(`Failed to fetch archive: ${e.message}`);
    process.exit(1);
  }

  const allVersions = parseApacheDirectory(archiveHtml);
  logVerbose(`Found ${allVersions.length} version directories`);

  // Separate Ignite 3 and Ignite 2 versions
  const ignite3Versions = allVersions.filter(v => v.startsWith('3.')).sort(compareVersions);
  const ignite2Versions = allVersions.filter(v => v.startsWith('2.')).sort(compareVersions);

  log(`Found ${ignite3Versions.length} Ignite 3 versions`);
  log(`Found ${ignite2Versions.length} Ignite 2 versions`);

  console.log('\n=== [2/4] Checking Available Artifacts');

  const releases = [];

  // Process Ignite 3 versions
  for (const version of ignite3Versions) {
    logVerbose(`Checking Ignite 3 version ${version}...`);
    const artifacts = await getVersionArtifacts(version);
    const date = await fetchVersionDate(version);
    if (artifacts.hasSource || artifacts.hasBinary) {
      releases.push({
        ...artifacts,
        date: date || 'Unknown',
      });
      logVerbose(`  Source: ${artifacts.hasSource}, Binary: ${artifacts.hasBinary}`);
    }
  }

  // Process Ignite 2 versions (limit to recent ones for performance)
  const recentIgnite2 = ignite2Versions.slice(0, 15);
  for (const version of recentIgnite2) {
    logVerbose(`Checking Ignite 2 version ${version}...`);
    const artifacts = await getVersionArtifacts(version);
    const date = await fetchVersionDate(version);
    if (artifacts.hasSource || artifacts.hasBinary) {
      releases.push({
        ...artifacts,
        date: date || 'Unknown',
      });
      logVerbose(`  Source: ${artifacts.hasSource}, Binary: ${artifacts.hasBinary}, Slim: ${artifacts.hasSlim}`);
    }
  }

  logResult(`Verified ${releases.length} releases with artifacts`);

  console.log('\n=== [3/4] Fetching Docker Hub Tags');

  const dockerTags = await fetchDockerTags();
  log(`Found ${dockerTags.ignite3.length} Ignite 3 Docker tags`);
  log(`Found ${dockerTags.ignite2.length} Ignite 2 Docker tags`);

  console.log('\n=== [4/4] Generating Updated Downloads Data');

  const ignite3Releases = releases.filter(r => r.isIgnite3).sort((a, b) => compareVersions(a.version, b.version));
  const ignite2Releases = releases.filter(r => !r.isIgnite3).sort((a, b) => compareVersions(a.version, b.version));

  // Generate summary
  console.log('\n--- Summary');
  log(`Ignite 3 Latest: ${ignite3Releases[0]?.version || 'None'}`);
  log(`Ignite 2 Latest: ${ignite2Releases[0]?.version || 'None'}`);

  if (ignite3Releases.length > 0) {
    console.log(`\nIgnite 3 Versions: ${ignite3Releases.map(r => r.version).join(', ')}`);
  }
  if (ignite2Releases.length > 0) {
    console.log(`\nIgnite 2 Versions (recent): ${ignite2Releases.map(r => r.version).join(', ')}`);
  }

  if (DRY_RUN) {
    console.log('\n!!! Dry run mode - no files modified');
    console.log('\nTo apply changes, run without --dry-run flag');
    return;
  }

  // Read current file
  const currentContent = fs.readFileSync(DOWNLOADS_FILE, 'utf-8');

  // Find current latest versions
  const currentIgnite3Latest = currentContent.match(/ignite3SourceReleases.*?version:\s*'(\d+\.\d+\.\d+)'/s)?.[1];
  const currentIgnite2Latest = currentContent.match(/ignite2SourceReleases.*?version:\s*'(\d+\.\d+\.\d+)'/s)?.[1];

  const newIgnite3Latest = ignite3Releases[0]?.version;
  const newIgnite2Latest = ignite2Releases[0]?.version;

  if (currentIgnite3Latest === newIgnite3Latest && currentIgnite2Latest === newIgnite2Latest) {
    logResult('Downloads data is already up to date');
    return;
  }

  if (currentIgnite3Latest !== newIgnite3Latest) {
    logWarning(`New Ignite 3 version available: ${newIgnite3Latest} (current: ${currentIgnite3Latest})`);
  }
  if (currentIgnite2Latest !== newIgnite2Latest) {
    logWarning(`New Ignite 2 version available: ${newIgnite2Latest} (current: ${currentIgnite2Latest})`);
  }

  console.log('\n!!! Manual update required');
  console.log('Update the following in src/data/downloads.ts:\n');

  if (newIgnite3Latest && currentIgnite3Latest !== newIgnite3Latest) {
    console.log('Add to ignite3SourceReleases and ignite3BinaryReleases:');
    console.log(generateReleaseEntry(ignite3Releases[0], true));
  }

  if (newIgnite2Latest && currentIgnite2Latest !== newIgnite2Latest) {
    console.log('\nAdd to ignite2SourceReleases and ignite2BinaryReleases:');
    console.log(generateReleaseEntry(ignite2Releases[0], true, true));
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
