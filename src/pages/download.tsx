import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import QuickDownload from '@site/src/components/Download/QuickDownload';
import DownloadSelector from '@site/src/components/Download/DownloadSelector';
import {
  extensionSourceReleases,
  extensionBinaryReleases,
  springBootDependencies,
} from '@site/src/data/downloads';
import { DOCS_BASE_PATH } from '@site/src/config/docs-urls';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './download.module.css';

const DOCS_BASE_URL = DOCS_BASE_PATH;

export default function DownloadPage(): JSX.Element {
  const [preferredMirror, setPreferredMirror] = useState('https://dlcdn.apache.org');
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout
      title="Download - Apache Ignite"
      description="Download Apache Ignite and start building distributed applications. Get the latest binary, source code, or Docker images.">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Download - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Download Apache Ignite and start building distributed applications. Get the latest binary, source code, or Docker images."
        />
      </Head>

      {/* Hero Section */}
      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Downloads</h1>
            <div className="innerhero__descr pt-2 h5">
              Get Apache Ignite and start building
              <br />
              distributed applications
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--download"
            src="/img/downloads/hero.svg"
            alt="Downloads"
          />
        </div>
      </section>

      {/* Quick Download - Featured Ignite 3 */}
      <QuickDownload />

      {/* Apache Ignite 3 */}
      <section className={`${styles.downloadSection} container`} id="ignite3">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Apache Ignite 3</h2>
          <p className={styles.sectionDescription}>
            The latest version of Apache Ignite. Binary packages are recommended for most users.
            Source releases are available for building from source.
          </p>
        </div>

        <DownloadSelector variant="ignite3" preferredMirror={preferredMirror} />
      </section>

      {/* Apache Ignite 2 (LTS) */}
      <section className={styles.ltsSection} id="ignite2">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.ltsTitleRow}>
              <h2 className={styles.sectionTitle}>Apache Ignite 2</h2>
              <span className={styles.ltsBadge}>LTS</span>
            </div>
            <p className={styles.sectionDescription}>
              Long-term support release. Continues to receive maintenance updates and is
              recommended for existing deployments.
            </p>
          </div>

          <DownloadSelector variant="ignite2" preferredMirror={preferredMirror} />

          {/* Extensions */}
          <div className={styles.extensionsBlock} id="extensions">
            <h3 className={styles.extensionsTitle}>Extensions</h3>
            <p className={styles.extensionIntro}>
              Extensions provide additional functionality including cloud discovery, Spring
              integration, and performance monitoring.
            </p>

            <div className={styles.extensionGrid}>
              {extensionSourceReleases.map((ext) => {
                const binaryRelease = extensionBinaryReleases.find((b) => b.name === ext.name);
                return (
                  <div key={ext.name} className={styles.extensionCard}>
                    <div className={styles.extensionCardHeader}>
                      <h4 className={styles.extensionName}>{ext.displayName}</h4>
                      <span className={styles.extensionVersion}>v{ext.version}</span>
                    </div>
                    <div className={styles.extensionCardLinks}>
                      <a
                        href={ext.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.extensionLink}>
                        Source
                      </a>
                      {binaryRelease && (
                        <a
                          href={binaryRelease.binaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.extensionLink}>
                          Binary
                        </a>
                      )}
                      {ext.guide && (
                        <a
                          href={ext.guide}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.extensionLinkGuide}>
                          Guide
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.springBootSection}>
              <h4 className={styles.springBootTitle}>Spring Boot Auto-Configuration</h4>
              <p className={styles.springBootDescription}>
                Add Spring Boot auto-configuration support for Ignite 2.x applications.
              </p>
              <div className={styles.codeBlockWrapper}>
                <CodeBlock language="xml">{springBootDependencies}</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className={styles.verifySection} id="verify">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Verify Your Download</h2>
            <p className={styles.sectionDescription}>
              Verify the integrity of downloaded files to ensure they were not corrupted and were
              released by the Apache Ignite project.
            </p>
          </div>

          <div className={styles.verifyGrid}>
            <div className={styles.verifyCard}>
              <h4>Using PGP Signature</h4>
              <div className={styles.codeBlockWrapper}>
                <CodeBlock language="bash">
                  {`# Download the KEYS file
wget https://downloads.apache.org/ignite/KEYS

# Import the keys
gpg --import KEYS

# Verify the signature
gpg --verify apache-ignite-*.zip.asc apache-ignite-*.zip`}
                </CodeBlock>
              </div>
            </div>

            <div className={styles.verifyCard}>
              <h4>Using SHA512 Checksum</h4>
              <div className={styles.codeBlockWrapper}>
                <CodeBlock language="bash">
                  {`# Download the SHA512 file
wget https://downloads.apache.org/ignite/3.1.0/apache-ignite-3.1.0-src.zip.sha512

# Verify the checksum
sha512sum -c apache-ignite-3.1.0-src.zip.sha512`}
                </CodeBlock>
              </div>
            </div>
          </div>

          <p className={styles.verifyLinks}>
            <a
              href="https://www.apache.org/info/verification.html"
              target="_blank"
              rel="noopener noreferrer">
              Apache Verification Guide
            </a>
            {' | '}
            <a
              href="https://downloads.apache.org/ignite/KEYS"
              target="_blank"
              rel="noopener noreferrer">
              Download KEYS File
            </a>
          </p>
        </div>
      </section>

      {/* Additional Resources */}
      <section className={styles.resourcesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Additional Resources</h2>

          <div className={styles.resourcesGrid}>
            {/* Git Repositories */}
            <div className={styles.resourceCard}>
              <div className={styles.resourceCardHeader}>
                <svg className={styles.resourceIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3>Git Repositories</h3>
              </div>
              <div className={styles.gitCommands}>
                <div className={styles.gitCommand}>
                  <span className={styles.gitLabel}>Ignite 3</span>
                  <code>git clone https://github.com/apache/ignite-3.git</code>
                </div>
                <div className={styles.gitCommand}>
                  <span className={styles.gitLabel}>Ignite 2</span>
                  <code>git clone https://github.com/apache/ignite.git</code>
                </div>
              </div>
            </div>

            {/* Archive */}
            <div className={styles.resourceCard}>
              <div className={styles.resourceCardHeader}>
                <svg className={styles.resourceIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                </svg>
                <h3>Release Archive</h3>
              </div>
              <p>Access all previous versions of Apache Ignite.</p>
              <a
                href="https://archive.apache.org/dist/ignite"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceLink}>
                Browse Archive
              </a>
            </div>

            {/* 3rd Party */}
            <div className={styles.resourceCard}>
              <div className={styles.resourceCardHeader}>
                <svg className={styles.resourceIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <h3>3rd Party Distributions</h3>
              </div>
              <p>
                <a
                  href="https://www.gridgain.com/resources/download#communityEdition"
                  target="_blank"
                  rel="noopener noreferrer">
                  GridGain Community Edition
                </a>{' '}
                includes LGPL dependencies like Hibernate L2 cache and Geospatial Indexing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className={styles.readyToStart}>
        <div className={clsx('container', 'flexi')}>
          <div className={styles.readyToStartMain}>
            <p className={clsx(styles.readyToStartTitle, 'h3')}>
              <strong>Ready To Start?</strong>
            </p>
            <p className="h5 pt-2">
              Discover our quick start guides and build your first
              <br />
              application in 5-10 minutes
            </p>
          </div>
          <div className={styles.readyToStartAction}>
            <a
              className="button"
              href={`${DOCS_BASE_URL}/getting-started/quick-start`}
              target="_blank"
              rel="noreferrer">
              Quick Start Guide
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
