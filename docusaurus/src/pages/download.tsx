import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import MirrorSelector from '@site/src/components/Download/MirrorSelector';
import DownloadTable from '@site/src/components/Download/DownloadTable';
import DockerTable from '@site/src/components/Download/DockerTable';
import {
  SOURCE_RELEASES,
  BINARY_RELEASES,
  SLIM_RELEASES,
  EXTENSION_SOURCE_RELEASES,
  EXTENSION_BINARY_RELEASES,
  DOCKER_IMAGES,
} from '@site/src/data/downloads';
import styles from './download.module.css';

export default function DownloadPage(): JSX.Element {
  useEffect(() => {
    // Replace [preferred][distdir] placeholders with actual mirror URLs
    // This mimics the behavior of the Apache download.cgi system
    const replacePreferredLinks = () => {
      const preferredMirror = 'https://dlcdn.apache.org/';
      const distdir = 'ignite';

      const links = document.querySelectorAll('a[href*="[preferred]"]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href) {
          const newHref = href.replace('[preferred]', preferredMirror).replace('[distdir]', distdir);
          link.setAttribute('href', newHref);
        }
      });
    };

    replacePreferredLinks();
  }, []);

  return (
    <Layout
      title="Download - Apache Ignite"
      description="Download Apache Ignite here and install in your environment. It's for free – just select from one of the available options and download.">
      <Head>
        <meta property="og:title" content="Download - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/download.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Download Apache Ignite here and install in your environment. It's for free – just select from one of the available options and download."
        />
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroPre}>Apache Ignite</div>
              <h1 className={styles.heroTitle}>Downloads</h1>
            </div>
            <img
              className={styles.heroPic}
              src="/img/downloads/hero.svg"
              alt="Downloads"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.downloadIntro} container`}>
        <p>
          Download Apache Ignite® and install in your environment.
          <br />
          Select from one of the available options.
        </p>
      </section>

      <nav className={styles.downloadNav}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <a className={styles.active} href="#source">
                Source Releases
              </a>
            </li>
            <li>
              <a href="#binary">Binary Releases</a>
            </li>
            <li>
              <a href="#docker">
                Docker and <br />
                Cloud Images
              </a>
            </li>
            <li>
              <a href="#git">Git Repository</a>
            </li>
            <li>
              <a href="#extensions">Extensions</a>
            </li>
            <li>
              <a href="#party3rd">3rd Party Binaries</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="source" className={`${styles.downloadSection} container`}>
        <h2 className={styles.sectionTitle}>SOURCE RELEASES</h2>

        <DownloadTable versions={SOURCE_RELEASES} type="source" showTabs={true} />

        <div className={styles.sectionBottom}>
          <div className={styles.bottomLeft}>
            <p>
              If you are looking for an earlier version of Apache Ignite, please find it in the archive.
              If you encounter a problem with the selected mirror, please choose another one. If primary
              mirrors are not reachable, switch to backup servers added to the end of the list.
            </p>
          </div>
          <div className={styles.bottomRight}>
            <MirrorSelector />
          </div>
        </div>
      </section>

      <section id="binary" className={`${styles.downloadSection} container`}>
        <h2 className={styles.sectionTitle}>BINARY RELEASES</h2>

        <div className={styles.sectionHeader}>
          <p>
            Binary release packages are provided for your convenience and not considered as primary
            release artifacts of the ASF. It's recommended to verify a release downloadable, following{' '}
            <a href="#verify">this guidelines.</a> For more information about Apache release policy see{' '}
            <a href="http://www.apache.org/dev/release.html#what" target="_blank" rel="noopener noreferrer">
              What is a Release?
            </a>
          </p>
        </div>

        <DownloadTable versions={BINARY_RELEASES} type="binary" showTabs={true} />

        <p className={styles.archiveNote}>
          If you are looking for previous release versions of Apache Ignite, please have a look in the{' '}
          <a href="https://archive.apache.org/dist/ignite" target="_blank" rel="noopener noreferrer">
            archive
          </a>
          .
        </p>
      </section>

      <section className={`${styles.downloadSection} ${styles.slimSection} container`}>
        <h3 className={styles.subsectionTitle}>Slim binary releases</h3>
        <DownloadTable versions={SLIM_RELEASES} type="slim" showTabs={false} />
      </section>

      <section id="docker" className={`${styles.downloadSection} container`}>
        <h2 className={styles.sectionTitle}>DOCKER AND CLOUD IMAGES</h2>
        <DockerTable images={DOCKER_IMAGES} />
      </section>

      <section id="verify" className={`${styles.verifySection} container`}>
        <h3 className={styles.subsectionTitle}>How to verify</h3>
        <div className={styles.verifyWrap}>
          <div className={styles.verifyLeft}>
            <p>
              The PGP signatures can be verified using PGP or GPG. First download the{' '}
              <a href="https://downloads.apache.org/ignite/KEYS" target="_blank" rel="noopener noreferrer">
                Apache Ignite KEYS
              </a>{' '}
              file as well as the .asc signature files for the desired release version. Make sure you get
              these files from the main distribution directory, rather than from a mirror. Then verify the
              signatures.
            </p>
          </div>
          <aside className={styles.verifyRight}>
            <p>
              Please check{' '}
              <a
                href="https://www.apache.org/info/verification.html"
                target="_blank"
                rel="noopener noreferrer">
                How to Verify Downloaded Files
              </a>{' '}
              for more information on how and why you should verify Apache Ignite releases.
            </p>
            <div className={styles.verifyCode}>
              <p>% gpg --import KEYS</p>
              <p>% gpg --verify apache-ignite-2.9.1-src.zip.asc apache-ignite-2.9.1-src.zip</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="git" className={`${styles.downloadSection} container`}>
        <h2 className={styles.sectionTitle}>GIT REPOSITORY</h2>
        <pre className={styles.codeBlock}>
          <code className="language-bash">$ git clone https://gitbox.apache.org/repos/asf/ignite</code>
        </pre>
      </section>

      <section id="extensions" className={`${styles.downloadSection} container`}>
        <h2 className={styles.sectionTitle}>EXTENSIONS</h2>

        <h3 className={styles.subsectionTitle}>Source Releases</h3>
        <DownloadTable
          versions={EXTENSION_SOURCE_RELEASES}
          type="extension-source"
          showTabs={false}
        />

        <h3 className={`${styles.subsectionTitle} ${styles.subsectionSpaced}`}>Binary Releases</h3>
        <p className={styles.extensionNote}>
          Binary release packages are provided for your convenience and not considered as primary release
          artifacts of the ASF. It's recommended to verify a release downloadable, following{' '}
          <a href="#verify">this guidelines</a>. For more information about Apache release policy see{' '}
          <a
            href="https://www.apache.org/legal/release-policy.html#what"
            target="_blank"
            rel="noopener noreferrer">
            What is a Release?
          </a>
        </p>
        <DownloadTable
          versions={EXTENSION_BINARY_RELEASES}
          type="extension-binary"
          showTabs={false}
        />

        <p className={styles.springBootNote}>Spring Boot extensions:</p>
        <pre className={styles.codeBlock}>
          <code className="language-xml">
            {`<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-thin-client-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>`}
          </code>
        </pre>
      </section>

      <section id="party3rd" className={`${styles.downloadSection} ${styles.party3rdSection} container`}>
        <h2 className={styles.sectionTitle}>3RD PARTY BINARIES</h2>
        <div className={styles.party3rdWrap}>
          <div className={styles.party3rdLeft}>
            <p>
              This is a list of 3rd party binary packages based on Apache Ignite. The Apache Ignite
              project does not endorse or maintain any 3rd party binary packages.
            </p>
            <p>
              <a
                href="https://www.gridgain.com/resources/download#communityEdition"
                target="_blank"
                rel="noopener noreferrer">
                GridGain Community Edition
              </a>{' '}
              is a binary build of Apache Ignite created by GridGain, which includes optional LGPL
              dependencies, such as Hibernate L2 cache integration and Geospatial Indexing, as well as bug
              fixes and features which may be included into the future official Apache Ignite releases.
            </p>
          </div>
          <div className={styles.party3rdRight}>
            <p>
              GridGain also provides his own{' '}
              <a
                href="http://www.gridgainsystems.com/nexus/content/repositories/external"
                target="_blank"
                rel="noopener noreferrer">
                GridGain Maven Repository
              </a>{' '}
              containing Apache Ignite LGPL artifacts such as ignite-hibernate.
            </p>
            <p>
              Please note that artifacts located at GridGain Maven Repository provided for convenience and
              are NOT official Apache Ignite artifacts.
            </p>
            <p>
              If you would like to provide your own edition of Apache Ignite here, please send email to{' '}
              <a href="mailto:dev@ignite.apache.org">Ignite dev list.</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
