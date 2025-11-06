import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';
import '../../css/database.css';

export default function InMemoryDatabase(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>In-Memory Database - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite, as the best open source in-memory database, is a high-performance system-of-records that can store and query large data sets from memory and disk without requiring to warm up the memory tier on cluster restarts."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/in-memory-database.html" />
        <meta property="og:title" content="In-Memory Database - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/in-memory-database.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite, as the best open source in-memory database, is a high-performance system-of-records that can store and query large data sets from memory and disk without requiring to warm up the memory tier on cluster restarts."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              In-Memory Database
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              In-memory database that scales horizontally across memory
              <br /> and disk with full SQL support
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--database"
            src="/img/usecases/database/hero-image.svg"
            alt="hero-image"
          />
        </div>
      </section>

      <section className="hub1">
        <div className="container">
          <h2 className="compute2__h2">In-Memory Database Overview</h2>
          <div className="hub1__block flexi">
            <div className="hub1__info">
              <h3 className="h5 hub1__title">What is an in-memory database?</h3>
              <p className="hub1__text">
                An in-memory database (IMDB) is a data management system that stores data primarily in the computer's
                main memory.
              </p>
              <h3 className="h5 hub1__title hub1__titleend">How does an in-memory database work?</h3>
              <p className="hub1__text">
                In-memory databases rely on spinning disks for data storage. IMDBs allow mission-critical applications
                to benefit from faster response times than disk-based databases.
              </p>
            </div>
            <img className="hub1__image" src="/img/usecases/database/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="base1">
        <div className="container">
          <h2 className="base1__h2 h5">
            Apache Ignite as a distributed in-memory database scales horizontally across memory and disk without
            compromise
          </h2>
          <div className="base1__blocks flexi">
            <div className="base1__block">
              <p className="base1__text">
                Apache Ignite works with memory, disk, and Intel Optane as active storage tiers.
              </p>
              <p className="base1__text pt-1">
                This <a href="/arch/multi-tier-storage.html">multi-tier</a> architecture combines the advantages of
                in-memory computing with disk durability and strong consistency, all in one system.
              </p>
            </div>
            <div className="base1__block">
              <div className="base1__item flexi">
                <div className="compute2-points__item fz20"></div>
                <h3 className="base1__black">Speed of memory</h3>
              </div>
              <div className="base1__item flexi">
                <div className="compute2-points__item fz20"></div>
                <h3 className="base1__black">Strong consistency</h3>
              </div>
              <div className="base1__item flexi">
                <div className="compute2-points__item fz20"></div>
                <h3 className="base1__black">Durability of disk</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <h2 className="compute2__h2">Advantages Of Ignite Multi-Tiered Architecture</h2>
          <div className="compute2__grid flexi hub2__grid">
            <div className="compute2item hub2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Instantaneous cluster restarts</h3>
                <p className="compute2__text base2__text">
                  Ignite becomes fully operational from disk upon a cluster startup or restarts without requiring a
                  preload or a warm-up the memory tier.
                </p>
              </div>
            </div>

            <div className="compute2item hub2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Multi-tiered storage</h3>
                <p className="compute2__text base2__text">
                  Ignite treats disk as an active storage layer, allowing it to cache a subset of the data in memory
                  and query both in-memory and disk-only records with SQL and all other available APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="base3">
        <div className="container">
          <h2 className="base3__h2 h4">
            Apache Ignite as an in-memory database <br />
            supports a variety of developer APIs
          </h2>
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

      <section className="hub5">
        <div className="container">
          <h2 className="compute2__h2">In-Memory Database Ignite User Stories</h2>
          <div className="highcases__two">
            <div className="hub5__twowrap flexi pt-5">
              <div className="hub5__item">
                <div className="comvideo__txt--white hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=-t-Syy9blXQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/database/one-video.png" alt="BNP Paribas video" />
                  </a>
                </div>
                <div className="h4 hub5__title">BNP Paribas</div>
                <p className="hub5__text base5__text">
                  with the help of Apache Ignite managed to design, build, and optimize a hybrid
                  transactional-analytical processing (HTAP) solution. This enabled the bank to make key business
                  decisions in real time.
                </p>
              </div>
              <div className="hub5__item">
                <div className="comvideo__txt--white hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=B8A8yR_e6VM&t=2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/datagrid/two-video.png" alt="JP Morgan Chase video" />
                  </a>
                </div>
                <div className="h4 hub5__title">JP MorganChase</div>
                <p className="hub5__text base5__text">
                  faced an increasing need to apply transformations to large datasets in real time. To meet this need,
                  their team selected Ignite to achieve persistence, caching and integrated compute.
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
              href="https://ignite.apache.org/docs/latest/"
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
            <p className="nativebotblock__text">Read the In-Memory Cache article</p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/in-memory-cache.html">
              In-Memory Cache Article
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
