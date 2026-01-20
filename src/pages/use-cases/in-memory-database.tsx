import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function InMemoryDatabase(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Database with Memory-First Storage - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite is a database-first platform with memory-first storage profile. Multi-tier storage (aimem, aipersist, rocksdb) supports concurrent transactional and analytical workloads with full SQL support."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Database with Memory-First Storage - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite is a database-first platform with memory-first storage profile and multi-tier storage."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Database with Memory-First Storage
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Database-first platform with multi-tier storage and full SQL support
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/ignite2/2.17.0/quick-start/java.html" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--usecase"
            src="/img/usecases/head-bg.svg"
            alt="Apache Ignite Use Cases"
          />
        </div>
      </section>

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">Database-First Platform</h2>
          <div className="inmememor1__text">
            <p>
              Apache Ignite is a database-first platform with memory-first storage profile. Multi-tier storage enables
              flexible data placement across memory (aimem), persistent memory-first (aipersist), and disk (rocksdb)
              storage engines. Full SQL support with ACID transactions for both transactional and analytical workloads.
            </p>
            <p className="pt-3">
              Memory-first architecture delivers low-latency operations while horizontal scalability handles growing
              data volumes. Concurrent transactional writes and analytical queries operate on same data without
              separate systems. Not positioned as full HTAP but supports operational analytics patterns.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">Multi-Tier Storage</h2>
            <div className="blockheader__right fz20">
              Flexible data placement across memory, persistent memory-first, and disk storage engines
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Storage Engine Options</h3>
              <div className="inmememor-adv__text">
                Three storage engines provide flexible data placement: aimem (pure memory), aipersist (memory-first with
                disk persistence), and rocksdb (disk-based). Configure storage engine per table based on access patterns
                and durability requirements. Hot data in memory with cold data on disk within same cluster.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Memory-First Performance</h3>
              <div className="inmememor-adv__text">
                Memory-first architecture (aimem, aipersist) delivers low-latency operations for hot data. Automatic
                page management between memory and disk for aipersist storage. No warm-up required after restarts with
                persistent storage engines. Horizontal scalability across cluster nodes.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Concurrent Transactional And Analytical Workloads</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Single platform supports both transactional writes and analytical queries without separate systems for
                OLTP and OLAP.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Applications execute transactional operations (INSERT, UPDATE,
              DELETE) using standard SQL with ACID guarantees. Analytical queries (aggregations, joins, GROUP BY) run
              concurrently on same data. Snapshot isolation prevents analytical queries from blocking transactional
              writes.
            </p>
            <p>
              <strong>Storage Configuration:</strong> Configure storage engine per table: aimem for hot transactional
              data, aipersist for durable memory-first operations, rocksdb for historical data. Multi-tier strategy
              places frequently accessed data in memory with cold data on disk. Single SQL interface across all storage
              tiers.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first storage delivers low-latency transactional
              operations. Analytical queries leverage snapshot isolation for concurrent execution. Horizontal
              scalability handles growing data volumes across cluster. Not positioned as full HTAP but supports
              operational analytics patterns.
            </p>
          </div>
        </div>

        <p className="fz20 pt-5">
          <strong>When This Pattern Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p><strong>This architecture pattern is best for:</strong></p>
            <ul className="dashlist pt-1">
              <li>Applications requiring both transactional operations and operational analytics</li>
              <li>Systems needing low-latency data access with horizontal scalability</li>
              <li>Workloads with mixed hot and cold data requiring flexible storage placement</li>
              <li>Platforms consolidating transactional and analytical systems</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>E-Commerce Platform:</strong> Transactional order processing with concurrent analytics for
                inventory management and sales reporting
              </li>
              <li>
                <strong>Financial Services:</strong> Account transactions with real-time fraud detection analytics and
                compliance reporting
              </li>
              <li>
                <strong>IoT Analytics:</strong> High-volume sensor data ingestion with operational dashboards and
                time-series aggregations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Flexible Storage Placement</h3>
            <p>
              Multi-tier storage enables per-table storage engine configuration. Hot transactional data in memory
              (aimem) for low latency. Durable data with memory-first access (aipersist) for balanced performance.
              Historical data on disk (rocksdb) for cost-effective storage. Single SQL interface across all tiers.
            </p>
            <h3 className="fz20 pt-4">Concurrent Workloads</h3>
            <p>
              Snapshot isolation enables analytical queries without blocking transactional writes. Single platform
              eliminates ETL between transactional and analytical systems. Operational analytics on live data without
              replication delays. Not full HTAP but supports operational reporting patterns.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Horizontal Scalability</h3>
            <p>
              Distributed architecture scales transactional and analytical workloads across cluster nodes. Add nodes to
              increase capacity for both write throughput and query performance. Partition-aware routing distributes
              load evenly. Memory-first storage maintains low latency at scale.
            </p>
            <h3 className="fz20 pt-4">Full SQL Support</h3>
            <p>
              Standard SQL for transactional operations (INSERT, UPDATE, DELETE) and analytical queries (aggregations,
              joins, GROUP BY). ACID transactions with snapshot isolation. DDL for schema management. JDBC/ODBC
              connectivity for standard tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Storage Engine Comparison</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">aimem (Pure Memory)</h3>
            <p>
              Pure in-memory storage with no persistence. Delivers lowest latency for hot data. Suitable for
              transactional workloads requiring microsecond-to-millisecond operations. Data lost on cluster restart.
              Best for caching and session management patterns.
            </p>
            <h3 className="fz20 pt-4">aipersist (Memory-First Persistent)</h3>
            <p>
              Memory-first storage with automatic persistence to disk. Delivers low-latency operations with durability
              guarantees. No warm-up required after restart. Automatic page management between memory and disk. Best for
              transactional workloads requiring both performance and durability.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">rocksdb (Disk-Based)</h3>
            <p>
              Disk-based storage using RocksDB engine. Optimized for large datasets exceeding memory capacity.
              Cost-effective storage for historical data. Higher latency than memory-first engines but better than
              remote disk access. Best for analytical workloads on cold data.
            </p>
            <h3 className="fz20 pt-4">Mixed Strategy</h3>
            <p>
              Configure different storage engines per table within same cluster. Hot transactional tables use aimem or
              aipersist for low latency. Historical tables use rocksdb for cost-effective storage. Single SQL interface
              queries across all storage tiers. Optimize cost and performance through strategic placement.
            </p>
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
              href="https://ignite.apache.org/docs/ignite2/latest/#quick-start-guides"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Learn About Multi-Tier Storage</span>
            </div>
            <p className="nativebotblock__text">Explore Apache Ignite storage engines</p>
            <Link className="nativebotblock__link arrowlink" to="/arch/multi-tier-storage">
              Multi-Tier Storage
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
