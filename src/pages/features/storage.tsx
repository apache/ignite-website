import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function MemoryFirstStorage(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Memory-First Storage Architecture - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite places data and operations in memory by default. AIPERSIST provides persistent storage with sub-millisecond latency. AIMEM delivers microsecond-level access when durability is unnecessary."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/storage" />
        <meta property="og:title" content="Memory-First Storage Architecture - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/storage" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite places data and operations in memory by default. AIPERSIST provides persistent storage with sub-millisecond latency. AIMEM delivers microsecond-level access when durability is unnecessary."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Memory-First Storage Architecture</h1>
            <div className="innerhero__descr pt-2 h5">
              Data lives in memory by default. Disk provides durability.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Memory-First Storage"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite places data and operations in memory by default. Persistence provides durability rather than serving as the primary access path. This design delivers the latency characteristics needed for complex operations within shrinking transaction windows.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">AIPERSIST: Persistent Storage with Memory-First Access</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">What It Provides</h3>
            <p>
              AIPERSIST keeps data in memory while maintaining durable copies on disk. The storage engine provides persistence with sub-millisecond latency for hot data. Data remains available after restarts without full reload.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">How It Works</h3>
            <p>
              Data modifications replicate through the distributed consensus log (Raft). No traditional write-ahead log needed. The storage engine persists data in sorted structures that support efficient scans and range queries.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">When to Use</h3>
            <p>
              Use AIPERSIST when you need durability without sacrificing latency. Suitable for transactional workloads, event stream processing, and operational data stores where restart tolerance matters.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Memory Management</h3>
            <p>
              The storage engine automatically manages memory allocation. Hot data stays in memory. Cold data resides on disk but loads to memory on access. No manual cache configuration needed.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">AIMEM: Pure Memory Storage</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">What It Provides</h3>
            <p>
              AIMEM stores data entirely in memory with no disk persistence. This delivers microsecond-level access latency when durability is unnecessary. Data exists only while the cluster runs.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">How It Works</h3>
            <p>
              Data replicates across cluster nodes for availability but never touches disk. Version chains support MVCC without persistence overhead. All coordination and transaction state stays in memory.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">When to Use</h3>
            <p>
              Use AIMEM for session state, real-time aggregations, temporary result sets, or derived data that can be recreated. Appropriate when restart tolerance isn't required or data has external durability.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Availability</h3>
            <p>
              AIMEM provides high availability through replication. Data remains accessible during node failures as long as a majority of replicas are reachable. Losing the majority means data loss.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">RocksDB: Experimental Storage</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Current Status</h3>
            <p>
              RocksDB storage remains experimental. It provides an alternative persistence approach for specialized workloads. Not recommended for production deployments until the implementation matures.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Characteristics</h3>
            <p>
              RocksDB offers different performance trade-offs compared to AIPERSIST. It may suit workloads with specific access patterns or storage requirements. Evaluate carefully before adoption.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Storage Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Raft-Based Durability</h3>
            <div className="cardsimple__text">
              AIPERSIST uses Raft consensus for durability instead of traditional write-ahead logs. Data replicates through the distributed consensus log. This eliminates local WAL overhead while providing durability.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About Distributed Replication
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/04-ACID-transactions.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">MVCC Version Chains</h3>
            <div className="cardsimple__text">
              Both AIPERSIST and AIMEM leverage MVCC version chains. Multiple versions of each row enable snapshot isolation without blocking. Storage engines manage version cleanup automatically.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About MVCC
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-Resident Operations</h3>
            <div className="cardsimple__text">
              SQL queries, transactions, and compute jobs execute directly against in-memory data. No cache-miss penalties. No cache-warming strategies. Data already resides where processing happens.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/sql" className="cardsimple__button button button--shadow">
                Learn About Access Patterns
              </Link>
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
              href="/docs/3.1.0/getting-started/quick-start"
              target="_blank"
              rel="noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Read Documentation</span>
            </div>
            <p className="nativebotblock__text">
              Learn about table creation, storage engines, and configuration options
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/develop/work-with-data/table-api"
              target="_blank"
              rel="noreferrer"
            >
              Tables Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
