import React, {useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import QuickDownload from '@site/src/components/Download/QuickDownload';
import DownloadSelector from '@site/src/components/Download/DownloadSelector';
import CollapsibleSection from '@site/src/components/Download/CollapsibleSection';
import {
  extensionSourceReleases,
  extensionBinaryReleases,
  springBootDependencies,
} from '@site/src/data/downloads';
import styles from './download.module.css';

const DOCS_BASE_URL = 'https://ignite.apache.org/docs/ignite3/3.1.0';

export default function DownloadPage(): JSX.Element {
  const [preferredMirror, setPreferredMirror] = useState('https://dlcdn.apache.org');

  return (
    <Layout
      title="Download - Apache Ignite"
      description="Download Apache Ignite and start building distributed applications. Get the latest binary, source code, or Docker images.">
      <Head>
        <link rel="canonical" href="https://ignite.apache.org/download" />
        <meta property="og:title" content="Download - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/download" />
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

      {/* Download Options - Ignite 3 */}
      <section className={`${styles.downloadSection} container`} id="ignite3">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Choose Your Installation Method</h2>
          <p className={styles.sectionDescription}>
            Select how you want to install Apache Ignite 3. Binary packages are recommended for most
            users. Source releases are available for building from source.
          </p>
        </div>

        <DownloadSelector variant="ignite3" preferredMirror={preferredMirror} />

        <div className={styles.archiveNote}>
          <p>
            Looking for an older version?{' '}
            <a href="https://archive.apache.org/dist/ignite" target="_blank" rel="noopener noreferrer">
              Browse the archive
            </a>
          </p>
        </div>
      </section>

      {/* Verification Guide - Collapsed */}
      <CollapsibleSection id="verify" title="VERIFY YOUR DOWNLOAD" defaultOpen={false}>
        <div className={styles.verifyContent}>
          <p>
            It is essential to verify the integrity of downloaded files. Verification ensures the
            file was not corrupted during download and that it was released by the Apache Ignite
            project.
          </p>

          <h4>Using PGP Signature</h4>
          <CodeBlock language="bash">
            {`# Download the KEYS file
wget https://downloads.apache.org/ignite/KEYS

# Import the keys
gpg --import KEYS

# Verify the signature
gpg --verify apache-ignite-*.zip.asc apache-ignite-*.zip`}
          </CodeBlock>

          <h4>Using SHA512 Checksum</h4>
          <CodeBlock language="bash">
            {`# Download the SHA512 file
wget https://downloads.apache.org/ignite/3.1.0/apache-ignite-3.1.0-src.zip.sha512

# Verify the checksum
sha512sum -c apache-ignite-3.1.0-src.zip.sha512`}
          </CodeBlock>

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
      </CollapsibleSection>

      {/* Ignite 2 LTS */}
      <CollapsibleSection
        id="ignite2"
        title="APACHE IGNITE 2 (LTS)"
        subtitle="Long-term support release"
        defaultOpen={false}>
        <div className={styles.ltsNotice}>
          <p>
            Apache Ignite 2.x is the long-term support (LTS) version. It continues to receive
            maintenance updates and is recommended for existing deployments. For new projects,
            consider Apache Ignite 3.
          </p>
        </div>

        <DownloadSelector variant="ignite2" preferredMirror={preferredMirror} />

        <div className={styles.ltsExtras}>
          <h4>Slim Binary Releases</h4>
          <p>
            Slim packages contain a minimal set of modules for reduced deployment size. Available
            for Ignite 2.x only.
          </p>
        </div>
      </CollapsibleSection>

      {/* Extensions - Ignite 2 Only */}
      <CollapsibleSection
        id="extensions"
        title="EXTENSIONS"
        subtitle="Apache Ignite 2 Only"
        defaultOpen={false}>
        <p className={styles.extensionIntro}>
          Extensions provide additional functionality for Apache Ignite 2.x, including cloud
          discovery, Spring integration, and performance monitoring.
        </p>

        <div className={styles.extensionList}>
          {extensionSourceReleases.map((ext) => (
            <div key={ext.name} className={styles.extensionItem}>
              <div className={styles.extensionName}>{ext.displayName}</div>
              <div className={styles.extensionVersion}>v{ext.version}</div>
              <div className={styles.extensionLinks}>
                <a href={ext.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
                {extensionBinaryReleases.find((b) => b.name === ext.name) && (
                  <a
                    href={extensionBinaryReleases.find((b) => b.name === ext.name)?.binaryUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    Binary
                  </a>
                )}
                {ext.guide && (
                  <a href={ext.guide} target="_blank" rel="noopener noreferrer">
                    Guide
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h4 className={styles.springBootTitle}>Spring Boot Auto-Configuration</h4>
        <CodeBlock language="xml">{springBootDependencies}</CodeBlock>
      </CollapsibleSection>

      {/* Additional Resources */}
      <section className={styles.resourcesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Additional Resources</h2>

          <div className={styles.resourcesGrid}>
            {/* Git Repositories */}
            <div className={styles.resourceCard}>
              <h3>Git Repositories</h3>
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
              <h3>Release Archive</h3>
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
              <h3>3rd Party Distributions</h3>
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
