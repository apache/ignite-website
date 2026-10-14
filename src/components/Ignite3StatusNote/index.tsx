import React from 'react';
import {IGNITE2_DOCS_PATHS} from '@site/src/config/docs-urls';
import styles from './styles.module.css';

/**
 * Dated status note about Apache Ignite 3, agreed on the dev list:
 * https://lists.apache.org/thread/7vgj22gf7vvfl4mrr30dtz47ttb27npr
 *
 * The note is shown on the download, docs and FAQ pages, the short form on the
 * cards that link to Ignite 3. Remove both as soon as the next Ignite 3 release
 * is planned.
 */
export const IGNITE3_STATUS_DATE = 'October 2026';
export const IGNITE3_STATUS_SHORT = 'No next release is currently planned';

export default function Ignite3StatusNote(): React.JSX.Element {
  return (
    <div className={styles.note} role="note">
      <strong>Status ({IGNITE3_STATUS_DATE}).</strong> There are currently no plans for the next Apache Ignite 3
      release. Ignite 3.1.0 remains available. For new projects and production deployments the community
      recommends <a href={IGNITE2_DOCS_PATHS.index}>Apache Ignite 2.x</a>, which is actively developed and
      maintained. Questions: <a href="mailto:user@ignite.apache.org">user@ignite.apache.org</a>.
    </div>
  );
}
