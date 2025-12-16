import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import ScrollToTop from '@site/src/components/ScrollToTop';

// Matomo analytics integration
export default function Root({children}) {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();

  // Check if we're in development environment
  const isDevelopment =
    ExecutionEnvironment.canUseDOM &&
    (window.location.hostname === 'localhost' ||
     window.location.hostname === '127.0.0.1' ||
     window.location.hostname.includes('.local') ||
     process.env.NODE_ENV === 'development');

  React.useEffect(() => {
    // Skip Matomo in development
    if (isDevelopment) {
      console.log('[Analytics] Matomo disabled in development environment');
      return;
    }

    // Initialize Matomo only in production
    if (typeof window !== 'undefined') {
      window._paq = window._paq || [];
      window._paq.push(['setDoNotTrack', true]);
      window._paq.push(['disableCookies']);
      window._paq.push(['trackPageView']);
      window._paq.push(['enableLinkTracking']);

      const script = document.createElement('script');
      const firstScript = document.getElementsByTagName('script')[0];
      script.async = true;
      script.src = 'https://analytics.apache.org/matomo.js';

      window._paq.push(['setTrackerUrl', 'https://analytics.apache.org/matomo.php']);
      window._paq.push(['setSiteId', '77']);

      firstScript.parentNode?.insertBefore(script, firstScript);

      console.log('[Analytics] Matomo initialized for production');
    }
  }, [isDevelopment]);

  // Track page views on route change (only in production)
  React.useEffect(() => {
    if (isDevelopment) return;

    if (typeof window !== 'undefined' && window._paq) {
      window._paq.push(['setCustomUrl', window.location.href]);
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
    }
  }, [location, isDevelopment]);

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
