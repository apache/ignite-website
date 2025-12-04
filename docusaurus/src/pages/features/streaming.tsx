import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function BackpressuredStreaming(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Backpressured Streaming - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides reactive streaming with automatic backpressure control. DataStreamer delivers high-throughput ingestion while respecting cluster capacity. Integrates with MVCC and transactions for consistent data ingestion."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/streaming" />
        <meta property="og:title" content="Backpressured Streaming - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/streaming" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides reactive streaming with automatic backpressure control. DataStreamer delivers high-throughput ingestion while respecting cluster capacity. Integrates with MVCC and transactions for consistent data ingestion."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Backpressured Streaming</h1>
            <div className="innerhero__descr pt-2 h5">
              Reactive streams with automatic rate coordination
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Backpressured Streaming"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite provides reactive streaming with automatic backpressure control. DataStreamer delivers high-throughput ingestion while respecting cluster capacity. The system coordinates producer and consumer rates automatically. This prevents memory overflow and maintains cluster stability under high-velocity data streams.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Reactive Streaming with Backpressure</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Publisher Interface</h3>
            <p>
              DataStreamer implements reactive Publisher patterns. Producers publish data items. The system requests items based on cluster capacity. This pull-based approach prevents overwhelming the cluster with data faster than it can process.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Automatic Rate Coordination</h3>
            <p>
              The streaming system signals producers when ready for more data. Producers slow down when cluster capacity decreases. Producers speed up when capacity increases. This dynamic coordination happens automatically without manual tuning.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Buffer Management</h3>
            <p>
              DataStreamer maintains internal buffers sized based on cluster capacity. Buffers absorb temporary rate mismatches. The system applies backpressure before buffers overflow. This prevents out-of-memory conditions during ingestion spikes.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Flow Control</h3>
            <p>
              The Publisher interface provides natural flow control. Applications receive signals when the cluster needs more data. Applications pause data generation when backpressure applies. This coordination works across network boundaries.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">High-Throughput Ingestion</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Batching and Buffering</h3>
            <p>
              DataStreamer groups individual items into batches automatically. Batch sizes adapt to network conditions and cluster load. Larger batches reduce network overhead. Smaller batches reduce latency. The system balances throughput and latency dynamically.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Partition-Aware Distribution</h3>
            <p>
              The streamer routes data items to partition owners directly. Single-hop writes avoid coordinator overhead. Items for the same partition group together in batches. This optimization delivers maximum throughput for partitioned data.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Parallel Processing</h3>
            <p>
              DataStreamer processes multiple batches in parallel across cluster nodes. Each node processes its partition data independently. This parallelism scales linearly with cluster size. Adding nodes increases total ingestion throughput proportionally.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Memory-First Writes</h3>
            <p>
              Streamed data writes directly to memory. No disk I/O during ingestion. Replication handles durability through distributed consensus. This memory-first approach delivers the throughput needed for high-velocity streams.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Integration with Transactions and MVCC</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Transactional Streaming</h3>
            <p>
              DataStreamer supports transactional writes. Batches commit atomically. Failures trigger automatic rollback. This ensures consistency for streamed data. Applications choose between throughput-optimized non-transactional mode or consistency-optimized transactional mode.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">MVCC Compatibility</h3>
            <p>
              Streaming writes create new MVCC versions. Concurrent queries see consistent snapshots. Long-running aggregations don't block streaming ingestion. Readers never block writers. This enables mixed streaming and analytical workloads.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Upsert Semantics</h3>
            <p>
              DataStreamer supports upsert operations. Inserts new records. Updates existing records. Applications specify keys for conflict resolution. This handles duplicate events in streaming scenarios without application-level deduplication logic.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Ordered Processing</h3>
            <p>
              The system preserves ordering within partitions. Events for the same key process in order. Events across partitions process in parallel. This ordering guarantee simplifies event stream processing logic.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">Use Cases</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/09-streaming.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Event Stream Processing</h3>
            <div className="cardsimple__text">
              Ingest event streams at high velocity. Process events with transactional guarantees. Update multiple aggregations atomically. Backpressure prevents data loss during spikes. MVCC enables concurrent analytics on streaming data.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/event-stream-processing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/05-key-value-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">IoT Data Ingestion</h3>
            <div className="cardsimple__text">
              Stream sensor data from millions of devices. Partition-aware routing delivers maximum throughput. Memory-first writes provide minimal latency. Backpressure protects cluster during device bursts. Upsert semantics handle sensor state updates.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/high-performance-computing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Real-Time Aggregations</h3>
            <div className="cardsimple__text">
              Stream events into base tables. Update materialized aggregations on write. Transactional streaming ensures consistent aggregates. Queries run against current aggregated state. No batch processing delays.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/operational-analytics" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Streaming Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Ingestion</h3>
            <div className="cardsimple__text">
              DataStreamer writes directly to memory without disk I/O. Distributed replication provides durability. This memory-first approach delivers the throughput needed for high-velocity event streams.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/storage" className="cardsimple__button button button--shadow">
                Learn About Storage
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/04-ACID-transactions.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Transactional Guarantees</h3>
            <div className="cardsimple__text">
              Streaming writes support full ACID transactions. Batches commit atomically. MVCC enables concurrent queries during ingestion. This provides consistency without sacrificing streaming throughput.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/acid-transactions" className="cardsimple__button button button--shadow">
                Learn About Transactions
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/05-key-value-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Partition-Aware Routing</h3>
            <div className="cardsimple__text">
              DataStreamer routes items to partition owners directly. Single-hop writes eliminate coordinator overhead. Items group by partition in batches. This optimization scales linearly with cluster size.
            </div>
            <div className="cardsimple__bottom">
              <a
                href="/docs/3.1.0/configure-and-operate/operations/colocation"
                className="cardsimple__button button button--shadow"
              >
                Learn About Colocation
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
              href="/docs/3.1.0/getting-started/quick-start"
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
              Learn about DataStreamer configuration, batching strategies, and reactive patterns
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/develop/work-with-data/streaming"
            >
              Streaming Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
