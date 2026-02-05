import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/usecases.css';

export default function UseCasesIndex(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Use Cases - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates distributed systems trade-offs. Fast OR Consistent? Choose Both. Discover use cases for event stream processing, microservices, AI/ML feature stores, and more."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Use Cases - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates distributed systems trade-offs. Fast OR Consistent? Choose Both."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Use Cases</h1>
            <div className="innerhero__descr pt-2 h5">
              Fast OR Consistent? Choose Both. Apache Ignite eliminates the distributed systems trade-off through
              memory-first architecture, partition-aware routing, and consensus replication.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--usecase"
            src="/img/usecases/head-bg.svg"
            alt="Apache Ignite Use Cases"
          />
        </div>
      </section>

      <section className="usecase2" id="primary-use-cases">
        <div className="container">
          <p className="blockcapslead">Primary Use Cases</p>
          <header className="blockheader flexi">
            <h2 className="h4">
              Eliminating The Distributed Systems Trade-off
            </h2>
            <div className="blockheader__right fz20">
              <p>
                These use cases demonstrate Apache Ignite's core differentiation: delivering both speed and consistency
                where traditional systems force an impossible choice.
              </p>
            </div>
          </header>
          <div className="usecase2__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Event Stream Processing And Enrichment</h4>
              <div className="cardsimple__text">
                <strong>Fast OR Consistent?</strong> Enrich high-throughput event streams with consistent reference data.
                Eliminate cache invalidation complexity.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/event-stream-processing" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Microservices State Management</h4>
              <div className="cardsimple__text">
                <strong>Simple OR Scalable?</strong> Distributed ACID transactions across service boundaries eliminate saga
                complexity. Infrastructure cost reduction through system consolidation.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/microservices-state" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">AI/ML Feature Stores</h4>
              <div className="cardsimple__text">
                <strong>Real-time OR Accurate?</strong> Zero training/serving skew with low-latency feature retrieval.
                MVCC snapshots provide point-in-time consistency.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/ai-ml-feature-stores" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Session Management And Caching At Scale</h4>
              <div className="cardsimple__text">
                <strong>Fast OR Durable?</strong> Any-node session access with automatic failover and zero data loss.
                Eliminate sticky sessions while maintaining consistency.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/session-management" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usecase2" id="additional-use-cases" style={{background: 'var(--blue4)'}}>
        <div className="container">
          <p className="blockcapslead">Additional Use Cases</p>
          <header className="blockheader flexi">
            <h2 className="h4">
              Operational + Analytical In One Platform
            </h2>
            <div className="blockheader__right fz20">
              <p>
                Apache Ignite supports operational analytics and time-series workloads while maintaining ACID guarantees
                and SQL query capabilities across your entire data platform.
              </p>
            </div>
          </header>
          <div className="usecase2__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Operational Analytics</h4>
              <div className="cardsimple__text">
                <strong>Transactional OR Analytical?</strong> Run concurrent analytical queries on live transactional data
                without blocking writes. Competes with relational database MVCC and dedicated OLAP systems.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/operational-analytics" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Fast Data Marts</h4>
              <div className="cardsimple__text">
                <strong>Warehouse Latency OR Data Mart Limits?</strong> Sub-second queries on curated datasets without cache complexity.
                Purpose-built analytical repository with ETL-populated data and full SQL support.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/fast-data-marts" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">IoT and Time-Series Data</h4>
              <div className="cardsimple__text">
                <strong>Scale OR Validate?</strong> High-volume writes with schema validation and SQL aggregations.
                Competes with specialized time-series databases.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/iot-time-series" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usecase2" id="supporting-patterns">
        <div className="container">
          <p className="blockcapslead">Supporting Patterns</p>
          <header className="blockheader flexi">
            <h2 className="h4 blockheader__left">
              Architectural Patterns For Both Versions
            </h2>
            <div className="blockheader__right fz20">
              <p>
                These patterns apply to both Ignite 2 and Ignite 3, providing architectural guidance for specific
                deployment scenarios.
              </p>
            </div>
          </header>
          <div className="usecase2__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Digital Integration Hub</h4>
              <div className="cardsimple__text">
                An advanced platform architecture that aggregates multiple back-end systems and databases into a
                low-latency and shared data store.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/digital-integration-hub" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">High-Performance Computing</h4>
              <div className="cardsimple__text">
                Schema-driven colocation and compute-to-data patterns enable local joins and recommendation engines
                with significant latency reduction through colocation.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/high-performance-computing" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Key-Value Store</h4>
              <div className="cardsimple__text">
                Access the cluster with key-value requests using Ignite 3's Table API with RecordView and KeyValueView,
                or explore Ignite 2's Cache API for legacy deployments.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/key-value-store" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Database with Memory-First Storage</h4>
              <div className="cardsimple__text">
                Database-first platform with multi-tier storage (aimem, aipersist, rocksdb) and full SQL support.
                Concurrent transactional and analytical workloads with flexible storage placement.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/in-memory-database" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usecase2" id="ignite-2-use-cases" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <p className="blockcapslead">Apache Ignite 2.x Use Cases</p>
          <header className="blockheader flexi">
            <h2 className="h4 blockheader__left">
              Legacy Use Cases
              <br />
              For Apache Ignite 2.x
            </h2>
            <div className="blockheader__right fz20">
              <p>
                These use cases apply to Apache Ignite 2.x, which remains actively supported. Each page includes
                patterns and APIs specific to Ignite 2's architecture.
              </p>
            </div>
          </header>
          <div className="usecase2__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">In-Memory Cache</h4>
              <div className="cardsimple__text">
                Distributed in-memory cache accelerates applications and databases. Cache data with SQL queries and ACID
                transactions using cache-aside or read-through/write-through strategies.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/in-memory-cache" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">In-Memory Data Grid</h4>
              <div className="cardsimple__text">
                Advanced read-through/write-through cache deployed on top of multiple databases. Colocation enables
                low-latency computing with data stored in-memory.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/in-memory-data-grid" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Apache Spark Acceleration</h4>
              <div className="cardsimple__text">
                Accelerate Spark applications by keeping data in a shared in-memory cluster. Minimize data shuffling with
                Ignite's RDD and DataFrame implementations.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/spark-acceleration" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Apache Hadoop Acceleration</h4>
              <div className="cardsimple__text">
                Real-time analytics across Hadoop operational and historical data. Use Ignite as a high-performance data
                access layer for low-latency operations.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/hadoop-acceleration" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
