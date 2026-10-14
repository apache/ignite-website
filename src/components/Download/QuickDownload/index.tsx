import React from 'react';
import clsx from 'clsx';
import {ignite2BinaryReleases} from '@site/src/data/downloads';
import {
  resolveMirrorUrl,
  toCloserUrl,
  withSuffix,
  getFileName,
  trackDownload,
} from '@site/src/components/Download/downloadUtils';
import {IGNITE2_DOCS_PATHS} from '@site/src/config/docs-urls';
import styles from './styles.module.css';

export default function QuickDownload(): JSX.Element {
  const latestRelease = ignite2BinaryReleases.find((r) => r.latest) || ignite2BinaryReleases[0];

  // Raw URL from data
  const rawUrl = latestRelease.binaryUrl || '';

  // Keep behavior consistent with DownloadSelector:
  // 1) resolve [preferred][distdir] placeholders (use dlcdn by default)
  const resolvedUrl = resolveMirrorUrl(rawUrl);
  // 2) convert to closer.lua download URL
  const downloadHref = toCloserUrl(resolvedUrl);

  const fileName = getFileName(downloadHref) || 'apache-ignite.zip';

  const handleDownloadClick = () => {
    trackDownload('binary_download', `ignite2_${latestRelease.version}_quick_download`);
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
                href={downloadHref}
                className="button"
                onClick={handleDownloadClick}
                target="_blank"
                rel="noopener noreferrer">
              Download {fileName}
            </a>

            <a
                href={IGNITE2_DOCS_PATHS.installation}
                className="button button--shadow"
                target="_blank"
                rel="noopener noreferrer">
              Install Ignite
            </a>
          </div>

          <div className={styles.quickDownloadLinks}>
            <span>Verify: </span>

            <a href={withSuffix(downloadHref, '.asc?action=download')} target="_blank" rel="noopener noreferrer">
              PGP
            </a>
            <a
                href={withSuffix(downloadHref, '.sha512?action=download')}
                target="_blank"
                rel="noopener noreferrer">
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
