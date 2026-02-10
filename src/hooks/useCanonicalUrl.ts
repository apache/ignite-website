/**
 * Hook for generating canonical URLs
 *
 * Generates canonical URLs based on the current page path.
 * Uses the production site URL and current location pathname.
 */

import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Returns the canonical URL for the current page
 *
 * @returns The full canonical URL (e.g., "https://ignite.apache.org/features/sql")
 */
export function useCanonicalUrl(): string {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  // Remove trailing slash from pathname unless it's the root
  let pathname = location.pathname;
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Combine site URL with pathname
  // siteConfig.url is the production URL (e.g., "https://ignite.apache.org")
  return `${siteConfig.url}${pathname}`;
}

/**
 * Returns both canonical URL and og:url for SEO meta tags
 *
 * @returns Object with canonicalUrl and ogUrl properties
 */
export function useSeoUrls(): { canonicalUrl: string; ogUrl: string } {
  const canonicalUrl = useCanonicalUrl();
  return {
    canonicalUrl,
    ogUrl: canonicalUrl,
  };
}

export default useCanonicalUrl;
