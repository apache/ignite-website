import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function ArchitecturalFoundation(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Architectural Foundation - Apache Ignite</title>
        <meta
          name="description"
          content="The architectural backbone of Apache Ignite: MVCC and distributed replication via Raft enable memory-first distributed computing without sacrificing consistency or availability."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/architectural-foundation" />
        <meta property="og:title" content="Architectural Foundation - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/architectural-foundation" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="The architectural backbone of Apache Ignite: MVCC and distributed replication via Raft enable memory-first distributed computing without sacrificing consistency or availability."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">The Architectural Backbone</h1>
            <div className="innerhero__descr pt-2 h5">
              Two foundational choices that make memory-first distributed computing possible
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Architectural Foundation"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Two foundational architectural choices enable everything Apache Ignite delivers. These aren't implementation details. They're the backbone that makes memory-first distributed computing possible without sacrificing consistency or availability.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">MVCC: Multi-Version Concurrency Control</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">The Fundamental Problem</h3>
            <p>
              How do you serve reads and writes concurrently without blocking? Traditional locking approaches force a choice: either readers block writers, writers block readers, or you accept eventual consistency.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">The Solution</h3>
            <p>
              MVCC solves this by creating a new version for every write, tagged with a timestamp. Readers work against stable snapshots while writers create new versions. Readers and writers never block each other.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">How It Works</h3>
            <p>
              Every row exists as a version chain. Each write adds a new version with begin and commit timestamps. Transactions read from a snapshot determined by their start time. The system maintains multiple versions until older snapshots complete.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">What This Enables</h3>
            <p>
              Snapshot isolation (REPEATABLE_READ) without traditional locking overhead. Analytical queries execute on stable snapshots while transactional updates proceed at full speed. Long-running reads don't block operational writes.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="https://ignite-dev.gridgain.com/docs/3.1.0/develop/work-with-data/transactions"
            className="button button--shadow"
            target="_blank"
            rel="noreferrer"
          >
            Read Transactions Documentation
          </a>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Distributed Replication</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Consensus-Based Replication</h3>
            <p>
              Making distributed state changes safe requires consensus. Apache Ignite uses Raft consensus for replication. Each partition forms a Raft group with a leader and followers.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">How Leader Election Works</h3>
            <p>
              When a leader fails, the remaining nodes elect a new leader through the Raft protocol. Leader election completes in milliseconds. The new leader continues serving requests without data loss.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">WAL-Free Architecture</h3>
            <p>
              Apache Ignite uses Raft consensus for durability instead of traditional write-ahead logs. The leader processes writes and replicates through the distributed consensus log. No local WAL needed.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Durability and Availability</h3>
            <p>
              Data is durable once replicated to a majority of replicas. The cluster remains available as long as a majority of replicas are reachable. This provides both durability and availability without traditional logging overhead.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="https://ignite-dev.gridgain.com/docs/3.1.0/sql/reference/language-definition/distribution-zones"
            className="button button--shadow"
            target="_blank"
            rel="noreferrer"
          >
            Read Distribution Zones Documentation
          </a>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">What This Foundation Enables</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/04-ACID-transactions.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">ACID Transactions</h3>
            <div className="cardsimple__text">
              MVCC provides snapshot isolation without blocking readers. Distributed replication ensures durability across partitions. Full ACID transactions work across any number of partitions.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/acid-transactions" className="cardsimple__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Storage</h3>
            <div className="cardsimple__text">
              Raft-based replication provides durability without traditional write-ahead logging. AIPERSIST uses this for sub-millisecond persistence. AIMEM leverages version chains for microsecond-level access.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/storage" className="cardsimple__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Concurrent Workloads</h3>
            <div className="cardsimple__text">
              MVCC allows analytical queries and operational writes to run simultaneously. Long-running aggregations work on stable snapshots while real-time updates proceed at full throughput.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/sql" className="cardsimple__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/deployment/hero.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">High Availability</h3>
            <div className="cardsimple__text">
              Raft leader election ensures continuous operation during failures. Automatic failover completes in milliseconds. The cluster remains available as long as a majority of replicas are reachable.
            </div>
            <div className="cardsimple__bottom">
              <a
                href="https://ignite-dev.gridgain.com/docs/3.1.0/sql/reference/language-definition/distribution-zones"
                className="cardsimple__button button button--shadow"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
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
              href="https://ignite-dev.gridgain.com/docs/3.1.0/getting-started/quick-start"
              target="_blank"
              rel="noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Explore Features</span>
            </div>
            <p className="nativebotblock__text">
              See how these architectural foundations enable all Apache Ignite capabilities
            </p>
            <Link className="nativebotblock__link arrowlink" to="/features">
              Features Overview
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
