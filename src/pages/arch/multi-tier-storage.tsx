import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/multi-tier.css';

export default function MultiTierStorage(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Multi-Tier Storage, Memory Tier - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite multi-tier storage uses memory, disk, and Intel Optane as active storage tiers to provide the speed of memory with the consistency of disk-based databases without the need for memory warm-ups on restarts."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Multi-Tier Storage, Memory Tier - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite multi-tier storage uses memory, disk, and Intel Optane as active storage tiers to provide the speed of memory with the consistency of disk-based databases without the need for memory warm-ups on restarts."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Multi-Tier Storage</h1>
            <div className="innerhero__descr pt-2 h5">
              Store and access your data across memory <br />
              and disk without compromise
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--multitier"
            src="/img/usecases/in-memory-hero.svg"
            alt="Distributed In-Memory Cache"
          />
        </div>
      </section>

      <section className="multitier2">
        <div className="container">
          <div className="h3 multitier2__title">
            Apache Ignite multi-tier storage implements a cutting-edge storage architecture that combines performance
            benefits of memory with the scalability and durability advantages of disk-based databases.
          </div>
        </div>
      </section>

      <section className="multitiers container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="h4 blockheader__left blockheader__left--full">Primary Multi-Tier Storage Usage Modes</h2>
        </header>
        <div className="multitier3 flexi">
          <div className="multitiers__left">
            <article className="multitierblock">
              <h3 className="multitierblock__title">In-Memory Mode</h3>
              <p className="fz20 pt-2">
                Get all the benefits of in-memory computing solutions. Store and process data at the lowest latency and
                highest throughput.
              </p>
              <img className="multitierblock__pic" src="/img/features/multitier/01-bd.svg" alt="" />
            </article>
          </div>
          <div className="multitiers__right multitiers__text">
            <h4 className="multitier3__h4 fz20 pb-1x">How It Works</h4>
            <p>The whole data set is available in memory tier only.</p>
            <p>
              In order to survive node failures, we recommend keeping at least one backup copy of the data in the
              cluster. DRAM or Intel® Optane™ operating in the Memory Mode can be used as a storage device.
            </p>
            <h4 className="multitier3__h4 fz20 pt-3">Use-Cases</h4>
            <ul className="dashlist pt-2">
              <li>In-memory caching</li>
              <li>High-performance computing</li>
              <li>Web-session caching</li>
              <li>Real-time processing of continuous data streams</li>
            </ul>
            <div className="multitiervid pt-3">
              <div className="multitiervid__link pb-2">
                <span>In-Memory Mode Case-Study</span>
              </div>
              <div className="comvideo">
                <a
                  className="comvideo__link"
                  href="https://www.youtube.com/watch?v=Mhtt2QL_qCQ&t=639s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="comvideo__pic" src="/img/features/multitier/video-1.png" alt="" />
                  <div className="comvideo__txt comvideo__txt--black comvideo__txt--small">
                    How To Use Apache Ignite To Resque The Backend <br />
                    Of The Bank
                  </div>
                </a>
              </div>
              <div className="multitiervid__descr">Raiffeisen Bank uses in-memory mode to store their data</div>
            </div>
          </div>
        </div>

        <div className="multitier4 flexi">
          <div className="multitiers__left multitiers__text">
            <h4 className="multitier3__h4 fz20 pb-1x">How It Works</h4>
            <p>
              Ignite slides in between your existing application and data layer. Ignite{' '}
              <a
                href="https://ignite.apache.org/docs/ignite2/latest/persistence/external-storage#read-through-and-write-through"
                target="_blank"
                rel="noreferrer"
              >
                writes-through
              </a>{' '}
              or{' '}
              <a
                href="https://ignite.apache.org/docs/ignite2/latest/persistence/external-storage#write-behind-caching"
                target="_blank"
                rel="noreferrer"
              >
                writes-behind
              </a>{' '}
              all data modifications to the underlying external databases.
            </p>
            <h4 className="multitier3__h4 fz20 pt-3 pb-2">Use-Cases</h4>
            <p>Offloading and acceleration of existing databases, backend-systems, applications and APIs.</p>
            <div className="multitiervid pt-4">
              <div className="multitiervid__link pb-2">
                <span>In-Memory + External Database Mode Case-Study</span>
              </div>
              <div className="comvideo">
                <a
                  className="comvideo__link"
                  href="https://www.youtube.com/watch?v=CPmwnjDJ1Sk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="comvideo__pic" src="https://img.youtube.com/vi/CPmwnjDJ1Sk/hqdefault.jpg" alt="ING Bank video" />
                  <div className="comvideo__txt comvideo__txt--small">
                    Embracing The Service Consumption Shift In Banking
                  </div>
                </a>
              </div>
              <div className="multitiervid__descr">ING core banking system transformation with Apache Ignite.</div>
            </div>
          </div>
          <div className="multitiers__right">
            <article className="multitierblock">
              <h3 className="multitierblock__title">In-Memory + External Database Mode</h3>
              <p className="fz20 pt-1x">
                Accelerate and offload your existing databases by deploying Ignite as a caching layer on top of existing
                disk-based databases and back-end systems.
              </p>
              <img className="multitierblock__pic" src="/img/features/multitier/03-bd.svg" alt="" />
            </article>
          </div>
        </div>

        <div className="multitier5 flexi">
          <div className="multitiers__left">
            <article className="multitierblock">
              <h3 className="multitierblock__title">Multi-Tier Database Mode</h3>
              <p className="fz20 pt-1x">
                Scale beyond the available memory capacity and skip memory warm-ups on restarts
              </p>
              <img className="multitierblock__pic" src="/img/features/multitier/04-bd.svg" alt="" />
            </article>
          </div>
          <div className="multitiers__right multitiers__text">
            <h4 className="multitier3__h4 fz20 pb-1x">How It Works</h4>
            <p>
              100% of data is persisted to Ignite native persistence, and the same amount or less is cached in memory.
              The more data cached, the faster the performance.
            </p>
            <p>
              Applications can query both in-memory and disk-only records transparently scaling beyond available memory
              capacity.
            </p>
            <p>
              There is no need for memory warm-ups on restarts since Ignite can serve data from disk. SSD, Flash, HDD or
              Intel® Optane™ operating in the AppDirect Mode can be used as a storage device.
            </p>
            <h4 className="multitier3__h4 fz20 pt-3 pb-2">Use-Cases</h4>
            <p>
              Ignite as a distributed database for HTAP workloads or digital integration hub with the active persistence
              layer.
            </p>
            <div className="multitiervid pt-4">
              <div className="multitiervid__link pb-2">
                <span>Native Persistence Case-Study</span>
              </div>
              <div className="comvideo">
                <a
                  className="comvideo__link"
                  href="https://www.youtube.com/watch?v=jF9T2cJB6t0&t=137s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="comvideo__pic" src="/img/features/multitier/video-2.png" alt="" />
                  <div className="comvideo__txt comvideo__txt--small">
                    How To Use Apache Ignite To Resque The Backend <br />
                    Of The Bank
                  </div>
                </a>
              </div>
              <div className="multitiervid__descr">
                JP Morgan team use Ignite to achieve persistence, caching and integrated compute
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="native-bottom container">
        <div className="native-bottom__grid">
          <article className="nativebotblock">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-rocket.svg" alt="" className="nativebotblock__icon" />
              <span>Ready to Start?</span>
            </div>
            <p className="nativebotblock__text">
              Discover more details about multi-tier storage <br />
              and configure it for your use-case
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/persistence/native-persistence"
              target="_blank"
              rel="noreferrer"
            >
              Configure Native Persistence
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check multi-tier storage implementation <br />
              details article
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://cwiki.apache.org/confluence/display/IGNITE/Ignite+Multi-Tier+Storage+-+under+the+hood"
              target="_blank"
              rel="noreferrer"
            >
              Multi-Tier Storage Implementation Details
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
