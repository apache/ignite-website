import React from 'react';
import clsx from 'clsx';
import {ignite3BinaryReleases} from '@site/src/data/downloads';
import {trackDownload} from '@site/src/components/Download/downloadUtils';
import { DOCS_INDEX } from '@site/src/config/docs-urls';
import styles from './styles.module.css';

const DOCS_BASE_URL = DOCS_INDEX;

export default function QuickDownload(): JSX.Element {
  const latestRelease = ignite3BinaryReleases.find((r) => r.latest) || ignite3BinaryReleases[0];
  const downloadUrl = latestRelease.binaryUrl || '';
  const fileName = downloadUrl.split('/').pop() || 'ignite3.zip';

  const handleDownloadClick = () => {
    trackDownload('binary_download', `ignite3_${latestRelease.version}_quick_download`);
  };

  return (
    <section className={styles.quickDownload}>
      <div className="container">
        <div className={clsx(styles.quickDownloadCard, 'cardsimple')}>
          <div className={styles.quickDownloadContent}>
            <p className="capstext">LATEST RELEASE</p>
            <h2 className={clsx('h1', styles.quickDownloadTitle)}>
              Apache Ignite {latestRelease.version}
            </h2>
            <p className={styles.quickDownloadDesc}>
              Production-ready distributed database with memory-first storage.
              <br />
              Released {latestRelease.date}
            </p>
            <div className={styles.quickDownloadActions}>
              <a
                href={downloadUrl}
                className="button"
                onClick={handleDownloadClick}
                target="_blank"
                rel="noopener noreferrer">
                Download {fileName}
              </a>
              <a
                href={`${DOCS_BASE_URL}/category/installation`}
                className="button button--shadow"
                target="_blank"
                rel="noopener noreferrer">
                Install Ignite
              </a>
            </div>
            <div className={styles.quickDownloadLinks}>
              <span>Verify: </span>
              <a href={`${downloadUrl}.asc`} target="_blank" rel="noopener noreferrer">
                PGP
              </a>
              <a href={`${downloadUrl}.sha512`} target="_blank" rel="noopener noreferrer">
                SHA512
              </a>
              <span className={styles.quickDownloadSeparator}>|</span>
              <a href={latestRelease.releaseNotes} target="_blank" rel="noopener noreferrer">
                Release Notes
              </a>
              <a href={latestRelease.javadoc} target="_blank" rel="noopener noreferrer">
                Javadoc
              </a>
            </div>
          </div>
          <div className={styles.quickDownloadImage}>
            <img src="/img/downloads/hero.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
