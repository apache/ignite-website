import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * Top Banner Component
 *
 * Displays promotional announcements above the main navigation.
 * Used for important events, releases, or community announcements.
 */
export default function TopBanner(): JSX.Element {
  const arrowIcon = useBaseUrl('/images/promos/arrow-white.svg');

  return (
    <div id="promotion-bar" className={styles.promotionBar}>
      <a
        href="https://ignite-summit.org/?utm_medium=website-direct&utm_source=apache_ignite&utm_term=ignite-summit&utm_content=event-hosted"
        target="_blank"
        rel="noopener noreferrer"
        title="Ignite Summit 2026"
        className={styles.promotionLink}
      >
        Save the Date: Ignite Summit 2026 &nbsp;
        <span className={styles.more}>
          <img src={arrowIcon} alt="" />
        </span>
      </a>
    </div>
  );
}
