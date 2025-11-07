import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import DownloadTable from '@site/src/components/Download/DownloadTable';
import MirrorSelector from '@site/src/components/Download/MirrorSelector';
import DockerTable from '@site/src/components/Download/DockerTable';
import VerificationGuide from '@site/src/components/Download/VerificationGuide';
import {
  ignite3SourceReleases,
  ignite2SourceReleases,
  ignite3BinaryReleases,
  ignite2BinaryReleases,
  ignite2SlimReleases,
  dockerImages,
  extensionSourceReleases,
  extensionBinaryReleases,
  springBootDependencies,
} from '@site/src/data/downloads';
import styles from './download.module.css';

export default function DownloadPage(): JSX.Element {
  const [preferredMirror, setPreferredMirror] = useState('https://dlcdn.apache.org');

  const handleMirrorChange = (newMirror: string) => {
    setPreferredMirror(newMirror);
  };

  return (
    <Layout
      title="Download - Apache Ignite"
      description="Download Apache Ignite here and install in your environment. It's for free – just select from one of the available options and download.">
      <Head>
        <link rel="canonical" href="https://ignite.apache.org/download" />
        <meta property="og:title" content="Download - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/download" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Download Apache Ignite here and install in your environment. It's for free – just select from one of the available options and download."
        />
      </Head>

      <section className={`innerhero ${styles.downloadHero}`}>
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className={`h1 innerhero__h1 innerhero__mega ${styles.downloadTitle}`}>Downloads</h1>
          </div>
          <img
            className="innerhero__pic innerhero__pic--download"
            src="/img/downloads/hero.svg"
            alt="Downloads"
          />
        </div>
      </section>

      <section className={`container pb-5 ${styles.downloadtitle}`}>
        <p>
          Download Apache Ignite and install in your environment.
          <br />
          Select from one of the available options.
        </p>
      </section>

      <section className={`cmtynavblock jsNavBlock ${styles.cmtynavblockDownwrap}`}>
        <div className="container">
          <ul className="cmtynavblock__list flexi cmtynavblock--down">
            <li>
              <a className="cmtynavblock__active" href="#source">
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
      </section>

      <section className={`${styles.downloadSrc} container`} id="source">
        <h2 className="capstext pb-5">SOURCE RELEASES</h2>

        <DownloadTable
          ignite3Releases={ignite3SourceReleases}
          ignite2Releases={ignite2SourceReleases}
          type="source"
          preferredMirror={preferredMirror}
        />

        <div className={`${styles.downloadSrcBottom} flexi pt-5`}>
          <div className={styles.downloadSrcLeft}>
            <p>
              If you are looking for an earlier version of Apache Ignite, please find it in the archive.
              If you encounter a problem with the selected mirror, please choose another one. If primary
              mirrors are not reachable, switch to backup servers added to the end of the list.
            </p>
          </div>
          <div className={styles.downloadSrcRight}>
            <MirrorSelector onMirrorChange={handleMirrorChange} />
          </div>
        </div>
      </section>

      <section className={`${styles.downloadBin} container`} id="binary">
        <h2 className="capstext">BINARY RELEASES</h2>

        <div className={`${styles.downloadBinHeader} pt-4 pb-5`}>
          <p>
            Binary release packages are provided for your convenience and not considered as primary release
            artifacts of the ASF. It's recommended to verify a release downloadable, following{' '}
            <a href="#verify">this guidelines.</a> For more information about Apache release policy see{' '}
            <a href="http://www.apache.org/dev/release.html#what" target="_blank" rel="noopener noreferrer">
              What is a Release?
            </a>
          </p>
        </div>

        <DownloadTable
          ignite3Releases={ignite3BinaryReleases}
          ignite2Releases={ignite2BinaryReleases}
          type="binary"
          preferredMirror={preferredMirror}
        />

        <p className="pt-5">
          If you are looking for previous release versions of Apache Ignite, please have a look in the{' '}
          <a href="https://archive.apache.org/dist/ignite" target="_blank" rel="noopener noreferrer">
            archive
          </a>
          .
        </p>
      </section>

      <section className={`${styles.downloadslim} container`}>
        <h3 className="h5 pb-2">Slim binary releases</h3>
        <DownloadTable ignite2Releases={ignite2SlimReleases} type="slim" preferredMirror={preferredMirror} />
      </section>

      <section className={`${styles.downloadDocker} container`} id="docker">
        <h2 className="capstext pb-5">DOCKER AND CLOUD IMAGES</h2>
        <DockerTable images={dockerImages} />
      </section>

      <VerificationGuide />

      <section className={`${styles.downfooter} container`} id="git">
        <h2 className="capstext pb-3">GIT REPOSITORY</h2>
        <CodeBlock language="bash" className={styles.nomargin}>
          {`$ git clone https://gitbox.apache.org/repos/asf/ignite`}
        </CodeBlock>

        <div className={`${styles.downfooterSpacer} pt-5 pb-5`}></div>
      </section>

      <section className={`${styles.downloadExtensions} container`} id="extensions">
        <h2 className="capstext pb-3">EXTENSIONS</h2>

        <h3 className="h5 pb-2">Source Releases</h3>
        <DownloadTable extensions={extensionSourceReleases} type="extension" preferredMirror={preferredMirror} />

        <h3 className="h5 pt-5 pb-2">Binary Releases</h3>
        <p className="pb-2">
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
        <DownloadTable extensions={extensionBinaryReleases} type="extension" preferredMirror={preferredMirror} />

        <p className="pt-2 pb-2">Spring Boot extensions:</p>
        <CodeBlock language="xml" className={styles.nomargin}>
          {springBootDependencies}
        </CodeBlock>
      </section>

      <section className={`${styles.party3rd} container`} id="party3rd">
        <h2 className="capstext">3RD PARTY BINARIES</h2>
        <div className={`${styles.party3rdWrap} pt-5 flexi`}>
          <div className={styles.party3rdLeft}>
            <p className="pb-2">
              This is a list of 3rd party binary packages based on Apache Ignite. The Apache Ignite project
              does not endorse or maintain any 3rd party binary packages.
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
              Please note that artifacts located at GridGain Maven Repository provided for convenience and are
              NOT official Apache Ignite artifacts.
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
