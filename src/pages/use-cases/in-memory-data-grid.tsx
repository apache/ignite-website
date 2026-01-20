import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';
import '../../css/database.css';
import '../../css/datagrid.css';

export default function InMemoryDataGrid(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>In-Memory Data Grid - Apache Ignite</title>
        <meta
          name="description"
          content="The Apache Ignite in-memory data grid accelerates and scales out distributed databases, services, and APIs. Learn more about an IMDG with Apache Ignite."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="In-Memory Data Grid - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="The Apache Ignite in-memory data grid accelerates and scales out distributed databases, services, and APIs. Learn more about an IMDG with Apache Ignite."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              In-Memory Data Grid
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Use an advanced read-through / write-through cache
              <br /> that is deployed on top of one or several databases
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/ignite2/2.17.0/quick-start/java.html" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--datagrid"
            src="/img/usecases/datagrid/hero-image.svg"
            alt="hero-image"
          />
        </div>
      </section>

      <section className="container" style={{ padding: '2rem 0' }}>
        <div style={{
          background: '#f0f7ff',
          border: '1px solid #0066cc',
          borderRadius: '8px',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#0066cc"/>
          </svg>
          <div>
            <strong style={{ color: '#0066cc' }}>Apache Ignite 2.x Use Case</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#333' }}>
              This use case applies to Apache Ignite 2.x. For Ignite 3, see the <Link to="/use-cases/">new use cases</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="grid1">
        <div className="container">
          <h2 className="grid1__h2 h4">
            In-memory data grid with Apache Ignite <strong>accelerates and scales</strong> your existing databases and
            data stores.
          </h2>
        </div>
      </section>

      <section className="hub1 grid2">
        <div className="container">
          <h2 className="compute2__h2">In-Memory Data Grid Overview</h2>
          <div className="hub1__block flexi">
            <div className="hub1__info">
              <h3 className="h5 hub1__title">What is an in-memory data grid?</h3>
              <p className="hub1__text">
                An in-memory data grid (IMDG) is an advanced read-through/write-through cache that is deployed on top
                of multiple databases.
              </p>
              <p className="hub1__text">
                Applications write to and read from the grid, and the grid propagates changes to the underlying data
                stores in a consistent way.
              </p>
              <h3 className="h5 hub1__title hub1__titleend">How does an in-memory data grid work?</h3>
              <p className="hub1__text">
                Co-location is the main IMDG feature. It organizes related data for storage in the same node and
                enables low latency with high throughput computing.
              </p>
              <p className="hub1__text">Co-located applications can access in-memory data without network movement.</p>
              <p className="hub1__text">
                In an in-memory data grid queries are processed at high speeds and scaled to multiple nodes, because
                there's no distance between data and applications.
              </p>
            </div>
            <img className="hub1__image" src="/img/usecases/datagrid/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="base3">
        <div className="container">
          <h2 className="base3__h2 h4">Apache Ignite as a data grid supports a variety of developer APIs</h2>
          <div className="base3__blocks flexi">
            <div className="base3__block">
              <h3 className="base3__h3">Essential Developer APIs</h3>
              <div className="base3__images flexi">
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/03-distributed-SQL.svg" alt="sql" />
                  <div className="base3__subtext">SQL</div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/05-key-value-APIs.svg" alt="apis" />
                  <div className="base3__subtext">Key-value</div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/04-ACID-transactions.svg" alt="acid" />
                  <div className="base3__subtext">
                    ACID
                    <br /> transactions
                  </div>
                </div>
              </div>
              <p className="base3__text">Enable you to request, join, and group distributed datasets.</p>
            </div>
            <div className="base3__block">
              <h3 className="base3__h3">High-Performance Computing APIs</h3>
              <div className="base3__images flexi">
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/06-compute-APIs.svg" alt="sql" />
                  <div className="base3__subtext">Compute</div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/07-machine-learning.svg" alt="apis" />
                  <div className="base3__subtext">
                    Machine
                    <br /> learning
                  </div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/08-services.svg" alt="acid" />
                  <div className="base3__subtext">Services</div>
                </div>
              </div>
              <p className="base3__text">
                Execute logic close to the data, thus eliminating expensive data shuffling over the network.
              </p>
            </div>
            <div className="base3__block">
              <h3 className="base3__h3">Real-Time Streaming APIs</h3>
              <div className="base3__images flexi">
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/09-streaming.svg" alt="sql" />
                  <div className="base3__subtext">Streaming</div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/10-continuous-queries.svg" alt="apis" />
                  <div className="base3__subtext">
                    Continuous
                    <br /> Queries
                  </div>
                </div>
                <div className="base3__item flexi">
                  <img className="base3__image" src="/img/features/11-messaging.svg" alt="acid" />
                  <div className="base3__subtext">Messaging</div>
                </div>
              </div>
              <p className="base3__text base3__textend">Allow the seamless implementation of event-driven architectures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid4">
        <div className="container">
          <div className="grid4__blocks flexi">
            <h2 className="grid4__h2 h5">Native Persistence And In-Memory Data</h2>
            <div className="grid4__block">
              <p className="grid4__text">
                When <a href="/arch/native-persistence">native persistence</a> is enabled, Ignite stores both data
                and indexes
                <br /> on disk, thus eliminating the time-consuming cache warm-up step.
              </p>
              <p className="grid4__text pt-1">
                Native persistence keeps a full copy of data on disk, so you are free
                <br /> to cache a subset of records in memory.
              </p>
              <p className="grid4__text pt-1">
                If a required data record is missing from memory, Ignite reads the record from the disk automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid5">
        <div className="container">
          <h2 className="grid5__h2 h4">
            An in-memory data grid is frequently used when a business works with large datasets at low latency and high
            throughput.
          </h2>
          <div className="grid5__blocks flexi">
            <article className="native2item grid5__item">
              <p className="grid5__text">
                Increase the performance and scalability of real-time applications and external databases.
              </p>
            </article>
            <article className="native2item grid5__item">
              <p className="grid5__text">
                Support <a href="/use-cases/high-performance-computing"> high-performance computing.</a>
              </p>
            </article>
            <article className="native2item grid5__item">
              <p className="grid5__text">Cache data that is scattered across databases.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hub5">
        <div className="container">
          <h2 className="compute2__h2">In-Memory Data Grid Ignite User Stories</h2>
          <div className="highcases__two">
            <div className="hub5__twowrap flexi pt-5">
              <div className="hub5__item">
                <div className="comvideo__txt--white hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=78UE11GrWzk&t=2586s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/database/one-video.png" alt="Agilent Technologies video" />
                  </a>
                </div>
                <div className="h4 hub5__title">Agilent Technologies Inc.</div>
                <p className="hub5__text base5__text">
                  improved its online channel by implementing in-memory solutions. They leveraged an in-memory data grid
                  to achieve faster time-to-market, and data flexibility across digital channels.
                </p>
              </div>
              <div className="hub5__item">
                <div className="comvideo__txt--white comvideo__txthub hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=CPmwnjDJ1Sk&feature=emb_imp_woyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/database/two-video.png" alt="ING Bank video" />
                  </a>
                </div>
                <div className="h4 hub5__title">ING Bank</div>
                <p className="hub5__text base5__text base5__textend">
                  used in-memory computing platforms to meet increasing demand for performance and scalability.
                </p>
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
              Discover our quick start guide and build your first
              <br /> application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to View More Use-Cases?</span>
            </div>
            <p className="nativebotblock__text">Read the In-Memory Database article</p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/in-memory-database">
              In-Memory Database
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
