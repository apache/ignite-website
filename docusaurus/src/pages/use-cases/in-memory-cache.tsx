import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';
import '../../css/in-memory-cache.css';

export default function InMemoryCache(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Distributed In-Memory Cache - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite as a Distributed In-Memory Cache accelerates and scales your databases, services, and APIs. Learn more about the cache-aside deployment and the read-through/write-through caching strategies with Apache Ignite."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/in-memory-cache.html" />
        <meta property="og:title" content="Distributed In-Memory Cache - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/in-memory-cache.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite enables high-performance computing by providing APIs for data and compute-intensive calculations. Using Ignite as a HPC cluster, you can turn your commodity hardware or cloud environment into a distributed supercomputer."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Distributed <br />
              In-Memory Cache
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Improve the performance and scalability of your applications, <br />
              databases, and microservices with Apache Ignite
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--inmemory"
            src="/img/usecases/in-memory-hero.svg"
            alt="Distributed In-Memory Cache"
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

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">What Is In-Memory Cache?</h2>
          <div className="inmememor1__text">
            <p>
              In-memory cache is a storage layer placed between applications and databases. The cache keeps your hot
              data in memory to offload existing databases and accelerate applications.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">Advantages of Distributed In-Memory Cache</h2>
            <div className="blockheader__right fz20">
              A distributed in-memory cache is <strong>the most straightforward and scalable</strong> way to accelerate
              your existing applications and databases, thanks to:
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Speed</h3>
              <div className="inmememor-adv__text">
                Memory as a storage layer provides the lowest latency and highest throughput. Laws of physics.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Scale</h3>
              <div className="inmememor-adv__text">
                Horizontal scalability lets you grow the cluster size to an unlimited extent to accommodate data size
                and throughput.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor-api container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="h4 blockheader__left blockheader__left--full">
            Unlike Standard In-Memory Caches, Apache Ignite <br />
            Supports Essential Developers APIs
          </h2>
        </header>
        <div className="inmememor-api__wrap flexi">
          <div className="inmememor-api__item">
            <img className="inmememor-api__icon" src="/img/features/in-memory/01-ACID-Transactions.svg" alt="" />
            <p className="fz20 pt-3">
              ACID transactions <br />
              to ensure consistency <br />
              of data
            </p>
          </div>
          <div className="inmememor-api__item">
            <img className="inmememor-api__icon" src="/img/features/in-memory/02-sql.svg" alt="" />
            <p className="fz20 pt-3">SQL queries execution</p>
          </div>
          <div className="inmememor-api__item">
            <img className="inmememor-api__icon" src="/img/features/in-memory/03-user.svg" alt="" />
            <p className="fz20 pt-3">
              Custom computations, <br />
              e.g. on Java, available
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Read-Through / Write-Through Caching</h2>
        <p className="fz20 pt-5">
          <strong>How It Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                The read-through/write-through caching strategy can be <br />
                classified as an in-memory, data-grid type of deployment.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              When Apache Ignite is deployed as a data grid, the application layer begins to treat Ignite as the
              primary store.
            </p>
            <p>
              As applications write to and read from the data grid, Ignite ensures that all underlying external
              databases stay updated and are consistent with the in-memory data.
            </p>
          </div>
        </div>
        <div className="inmememor2__picwrap">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/img/features/in-memory/write-through-caching.svg" />
            <img src="/img/features/in-memory/write-through-caching-mob.svg" alt="" />
          </picture>
        </div>
        <p className="fz20">
          <strong>How It Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left inmememor2__left--icon">
            <p>This strategy is recommended for architectures that need to:</p>
            <ul className="dashlist pt-1">
              <li>accelerate disk-based databases;</li>
              <li>create a shared caching layer across various data sources.</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              Ignite integrates with many databases out-of-the-box and, in write-through or write-behind mode, can
              synchronize all changes to the databases.
            </p>
            <p>
              The strategy also applies to ACID transactions: Ignite will coordinate and commit a transaction across
              its in-memory cluster as well as to a relational database.
            </p>
            <p>
              Read-through capability implies that, if a record is missing from memory, a cache can read the data from
              an external database. Ignite fully supports this capability for key-value APIs.
            </p>
            <p>
              When you use Ignite SQL, you must preload the dataset into memory because Ignite SQL can query on-disk
              data only if the data is stored in native persistence.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Cache-Aside Deployment</h2>
        <div className="inmememor2__picwrap">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/img/features/in-memory/cache-aside-deployment.svg" />
            <img src="/img/features/in-memory/cache-aside-deployment-mob.svg" alt="" />
          </picture>
        </div>
        <p className="fz20 pt-3">
          <strong>When It Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p>This strategy works well in two cases:</p>
            <ul className="pt-1">
              <li>1. The cached data is relatively static, i.e. not updated frequently</li>
              <li>2. A temporary data lag is allowed between the primary store and the cache</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              It's usually assumed that changes will be fully replicated eventually and, <br />
              thus, the cache and the primary store will become consistent.
            </p>
          </div>
        </div>

        <div className="inmememor3__bottom">
          <h3 className="fz20">Cache-Aside Deployment And Native Persistence</h3>
          <div className="inmememor3__botwrap flexi pt-3">
            <div className="inmememor2__left">
              <p>
                When Apache Ignite is deployed in a cache-aside configuration, its native persistence can be used as a
                disk store for Ignite datasets. <a href="/arch/native-persistence.html">Native persistence</a> allows
                for the elimination of the time-consuming cache warm-up step.
              </p>
              <p>
                As native persistence maintains a full copy of data on disk, you can cache a subset of records in
                memory. If a required data record is missing from memory, then Ignite reads the record from the disk
                automatically, regardless of which API you use: SQL, key-value, or scan queries.
              </p>
            </div>
            <div className="inmememor2__right">
              <ul className="inmememor3__checklist">
                <li>Seconds needed for recovery</li>
                <li>Full copy of cached records is duplicated on disk</li>
                <li>Use any API: SQL, key-value, or scan queries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hub5 inmememorvideowrap pt-5">
        <div className="container pt-5">
          <h2 className="capstext pt-5">IN-MEMORY CACHE USER STORIES</h2>
          <div className="highcases__two">
            <div className="hub5__twowrap flexi pt-5">
              <div className="hub5__item">
                <div className="hub5__video comvideo__txt--black">
                  <a
                    href="https://www.youtube.com/watch?v=Mhtt2QL_qCQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="https://img.youtube.com/vi/Mhtt2QL_qCQ/hqdefault.jpg" alt="Raiffeisen Bank video" />
                  </a>
                </div>
                <div className="h4 hub5__title">Raiffeisen Bank</div>
                <div className="comvideo__descr">
                  <p>
                    As users transition to digital channels, the load on the bank's systems has increased. Therefore,
                    load reduction and system scaling are constant and top priorities.
                  </p>
                </div>
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
              Discover our quick start guide and build your first application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/#quick-start-guides"
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
            <p className="nativebotblock__text">Read In-Memory Data Grid article</p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/in-memory-data-grid.html">
              In-Memory Data Grid
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
