/**
 * Download Page Utility Functions
 *
 * Handles mirror URL replacement, closer.lua rewriting, filename extraction,
 * verify links generation and download tracking.
 */

const CLOSER_BASE = 'https://www.apache.org/dyn/closer.lua';

/**
 * Replaces [preferred][distdir] placeholder with selected mirror URL
 * Replicates the Apache mirror selection CGI behavior
 *
 * @param url - Download URL that may contain placeholders
 * @param preferredMirror - Selected mirror URL (default: Apache CDN)
 * @returns Resolved download URL
 */
export function resolveMirrorUrl(
    url: string,
    preferredMirror: string = 'https://dlcdn.apache.org'
): string {
  if (!url) return '';

  // Replace [preferred][distdir] placeholder with selected mirror + /ignite
  // This matches the behavior from the original download.cgi script
  return url.replace('[preferred][distdir]', `${preferredMirror}/ignite`);
}

/**
 * Converts an Apache Ignite dist URL (dlcdn/archive/placeholder) into a closer.lua download URL.
 * If URL is not recognized as an Ignite dist file, returns original normalized URL.
 *
 * Examples:
 * - https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-src.zip
 *   -> https://www.apache.org/dyn/closer.lua/ignite/2.15.0/apache-ignite-2.15.0-src.zip?action=download
 *
 * - https://dlcdn.apache.org/ignite/3.1.0/ignite3-3.1.0.zip
 *   -> https://www.apache.org/dyn/closer.lua/ignite/3.1.0/ignite3-3.1.0.zip?action=download
 *
 * - [preferred][distdir]/2.17.0/apache-ignite-2.17.0-bin.zip
 *   (after resolveMirrorUrl) -> https://dlcdn.apache.org/ignite/2.17.0/apache-ignite-2.17.0-bin.zip
 *   -> closer.lua...
 */
export function toCloserUrl(url: string): string {
  if (!url) return '';

  // Already a closer.lua URL
  if (url.startsWith(CLOSER_BASE)) return url;

  // Normalize placeholder if someone calls this before resolveMirrorUrl
  const normalized = url.replace('[preferred][distdir]', 'https://dlcdn.apache.org/ignite');

  try {
    const u = new URL(normalized);

    // We only want to convert links that point to /ignite/... under known ASF dist hosts
    // (dlcdn, downloads, archive). We extract the path portion after "/ignite/".
    const marker = '/ignite/';
    const idx = u.pathname.indexOf(marker);
    if (idx === -1) return normalized;

    const pathFromIgnite = u.pathname.slice(idx + marker.length); // e.g. "2.15.0/apache-ignite-2.15.0-src.zip"
    if (!pathFromIgnite) return normalized;

    return `${CLOSER_BASE}/ignite/${pathFromIgnite}?action=download`;
  } catch {
    return normalized;
  }
}

/**
 * Removes querystring/hash from URL.
 */
export function stripQuery(url: string): string {
  if (!url) return '';
  try {
    const u = new URL(url, 'https://www.apache.org'); // base for relative/odd inputs
    u.search = '';
    u.hash = '';
    return u.toString();
  } catch {
    return url.split('#')[0].split('?')[0];
  }
}

/**
 * Appends a suffix (e.g. ".asc", ".sha512") to the URL BEFORE any querystring.
 */
export function withSuffix(url: string, suffix: string): string {
  return `${stripQuery(url)}${suffix}`;
}

/**
 * Extracts filename from download URL (ignores query/hash).
 */
export function getFileName(url: string): string {
  if (!url) return '';

  try {
    const u = new URL(url, 'https://www.apache.org');
    const last = u.pathname.split('/').filter(Boolean).pop();
    return last ? decodeURIComponent(last) : '';
  } catch {
    const cleaned = url.split('#')[0].split('?')[0];
    const parts = cleaned.split('/');
    return parts[parts.length - 1] || '';
  }
}

/**
 * Tracks download event with Google Analytics (gtag)
 */
export function trackDownload(category: string, label: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: category,
      event_label: label,
    });
  }
}

/**
 * Gets tracking category based on download type
 *
 * @param downloadType - 'source' | 'binary' | 'slim' | 'docker' | 'extension'
 * @returns Tracking category string
 */
export function getTrackingCategory(downloadType: string): string {
  switch (downloadType) {
    case 'source':
    case 'extension':
      return 'apache_ignite_source_download';
    case 'binary':
    case 'slim':
      return 'apache_ignite_fabric_download';
    case 'docker':
      return 'docker_repo_download';
    default:
      return 'apache_ignite_download';
  }
}

/**
 * Extracts version identifier from filename for tracking
 *
 * @param filename - Download filename
 * @returns Version identifier for tracking (e.g., 'apache-ignite-2.17.0')
 */
export function getTrackingLabel(filename: string): string {
  // Remove file extension
  return filename.replace(/\.(zip|tar\.gz|deb|rpm)$/i, '');
}

// Type augmentation for gtag
declare global {
  interface Window {
    gtag?: (
        command: string,
        eventName: string,
        params?: {
          event_category?: string;
          event_label?: string;
        }
    ) => void;
  }
}
