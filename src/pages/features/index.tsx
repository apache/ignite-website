import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/features.css';

export default function FeaturesIndex(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Apache Ignite Features - Built Memory-First for Modern Workloads</title>
        <meta
          name="description"
          content="Apache Ignite delivers ACID transactions, distributed SQL, and compute capabilities through memory-first architecture with MVCC and distributed replication."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/" />
        <meta property="og:title" content="Apache Ignite Features - Built Memory-First for Modern Workloads" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite delivers ACID transactions, distributed SQL, and compute capabilities through memory-first architecture with MVCC and distributed replication."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Features</h1>
            <div className="innerhero__descr pt-2 h5">
              Built Memory-First for Modern Workloads.<br />
              Apache Ignite delivers complex operations<br />
              within shrinking transaction windows at scale.
            </div>
          </div>
          <img className="innerhero__pic innerhero__pic--features" src="/img/features/hero-bg.svg" alt="Apache Ignite Features" />
        </div>
      </section>

      <section className="features2" id="features2">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">The Architectural Backbone</h2>
            <div className="blockheader__right fz20">
              <p>
                Two foundational architectural choices enable everything Apache Ignite delivers. These aren't implementation details. They're the backbone that makes memory-first distributed computing possible without sacrificing consistency or availability.
              </p>
            </div>
          </header>

          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/04-ACID-transactions.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">MVCC</h3>
              <div className="cardsimple__text cardsimple__text--long">
                Multi-Version Concurrency Control solves the fundamental problem: how to serve reads and writes concurrently without blocking. Every write creates a new version tagged with a timestamp. Readers and writers never block each other.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/architectural-foundation"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/02-native-persistence.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Distributed Replication</h3>
              <div className="cardsimple__text">
                Makes distributed state changes safe through consensus-based replication via Raft. Each partition forms a Raft group with leader and followers. Provides durability and availability without traditional write-ahead logging.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/architectural-foundation"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features3">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Core Capabilities</h2>
            <div className="blockheader__right fz20">
              <p>
                Essential features built on the memory-first foundation with MVCC and distributed replication
              </p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/02-native-persistence.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Memory-First Storage</h3>
              <div className="cardsimple__text">
                Data lives in memory as the primary storage tier. AIPERSIST provides persistence with sub-millisecond latency. AIMEM delivers microsecond-level latency when durability is unnecessary.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/storage"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/04-ACID-transactions.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">ACID Transactions</h3>
              <div className="cardsimple__text cardsimple__text--long">
                Full ACID across any number of partitions. MVCC provides snapshot isolation without blocking readers. Distributed replication ensures durability. Lock tables and transaction state managed in memory.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/acid-transactions"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/03-distributed-SQL.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Your Choice of Access Pattern</h3>
              <div className="cardsimple__text">
                Use SQL with JDBC drivers, Table API with RecordView and KeyValueView, or native APIs. All benefit from memory-first architecture and partition-aware routing.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/sql"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/01-multi-tier-storage.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Schema Evolution Without Downtime</h3>
              <div className="cardsimple__text">
                Catalog-driven schema management with atomic versioning. Add columns, modify indexes, change distributions without stopping the cluster. Deploy features continuously.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/schema-evolution"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/09-streaming.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Backpressured Streaming</h3>
              <div className="cardsimple__text">
                Reactive streams with automatic rate coordination. DataStreamer provides high-throughput writes with backpressure control. Works with MVCC and transactions for consistent ingestion.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/streaming"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features4">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Data Placement and Processing</h2>
            <div className="blockheader__right fz20">
              <p>Control where data lives and process it where it resides</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/05-key-value-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Schema-Driven Data Placement</h3>
              <div className="cardsimple__text">
                The colocateBy annotation keeps related data together. Distribution zones control replica counts and node placement. Transform cross-node queries into local memory operations.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/data-placement"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/06-compute-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Processing Where Data Lives</h3>
              <div className="cardsimple__text">
                Execute compute jobs on nodes that hold the data. Colocated compute eliminates network overhead. Works with colocation and memory-first storage for local aggregations.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/compute-apis"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features5">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Operational Excellence</h2>
            <div className="blockheader__right fz20">
              <p>
                Built-in operational capabilities for production deployments
              </p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/08-services.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Coordination That Scales</h3>
              <div className="cardsimple__text">
                Catalog manages schema metadata with version tracking. Meta Storage provides distributed key-value coordination. Hybrid Logical Clock ensures event ordering. Type-safe configuration with hot reconfiguration.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/coordination"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/07-machine-learning.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Operations Built In</h3>
              <div className="cardsimple__text">
                OpenTelemetry metrics and system views for monitoring. Raft snapshots and Meta Storage backup for recovery. Authentication and SSL/TLS for security.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/tooling"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/tooling/icon-apache.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Multi-Language Support</h3>
              <div className="cardsimple__text">
                Native clients for Java, .NET, C++, Python, and other languages. Consistent APIs across languages with partition-aware routing built in.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/multilanguage"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featureslast" style={{ background: '#f5f5f5', padding: '3rem 0' }}>
        <div className="container">
          <div className="featureslast__main">
            <div className="h4 featureslast__title pb-1" style={{ color: '#666' }}>Looking for Apache Ignite 2.x Features?</div>
            <div className="featureslast__descr fz20" style={{ color: '#666' }}>
              Apache Ignite 2.x remains a stable, production-ready platform. View the previous generation features.
            </div>
            <div className="pt-4">
              <Link
                to="/features/ignite-2"
                className="arrowlink"
                style={{ color: '#666' }}
              >
                View Previous Generation Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
