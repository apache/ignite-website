/**
 * Download Page Utility Functions
 *
 * Handles mirror URL replacement and download tracking
 */

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
 * Extracts filename from download URL
 *
 * @param url - Download URL
 * @returns Filename or empty string
 */
export function getFileName(url: string): string {
  if (!url) return '';

  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

/**
 * Tracks download event with Google Analytics (gtag)
 *
 * @param category - Event category (e.g., 'apache_ignite_source_download')
 * @param label - Event label (e.g., 'apache-ignite-2.17.0')
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
