import React from 'react';
import styles from './styles.module.css';

/**
 * Top Banner Component
 *
 * Displays promotional announcements above the main navigation.
 * Used for important events, releases, or community announcements.
 */
export default function TopBanner(): JSX.Element {
  return (
    <div id="promotion-bar" className={styles.promotionBar}>
      <a
        href="https://ignite-summit.org/2025/?utm_medium=website-direct&utm_source=apache_ignite&utm_term=ignite-summit&utm_content=event-hosted&utm_campaign=2023-06-06-ignite-summit-nam"
        target="_blank"
        rel="noopener noreferrer"
        title="Ignite Summit 2025"
        className={styles.promotionLink}
      >
        Ignite Summit 2025 — Watch on demand &nbsp;
        <span className={styles.more}>
          <img src="/images/promos/arrow-white.svg" alt="" />
        </span>
      </a>
    </div>
  );
}
