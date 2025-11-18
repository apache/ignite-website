import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/usecases.css';

export default function UseCasesIndex(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Use Cases - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite 3 eliminates distributed systems trade-offs. Fast OR Consistent? Choose Both. Discover use cases for event stream processing, microservices, AI/ML feature stores, and more."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases.html" />
        <meta property="og:title" content="Use Cases - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite 3 eliminates distributed systems trade-offs. Fast OR Consistent? Choose Both."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Use Cases</h1>
            <div className="innerhero__descr pt-2 h5">
              Fast OR Consistent? Choose Both. Apache Ignite 3 eliminates the distributed systems trade-off through
              memory-first architecture, partition-aware routing, and RAFT consensus.
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
            <h2 className="h4 blockheader__left">
              Eliminating The
              <br />
              Distributed Systems Trade-off
            </h2>
            <div className="blockheader__right fz20">
              <p>
                These use cases demonstrate Ignite 3's core differentiation: delivering both speed and consistency
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

      <section className="usecase4" id="additional-use-cases">
        <div className="container">
          <p className="blockcapslead">Additional Use Cases</p>
          <header className="blockheader flexi">
            <h2 className="h4 blockheader__left">
              Specialized
              <br />
              Alternatives May Excel
            </h2>
            <div className="blockheader__right fz20">
              <p>
                These use cases are supported by Ignite 3, but specialized databases may provide better performance
                for specific workloads.
              </p>
            </div>
          </header>
          <div className="usecase4__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Operational Analytics</h4>
              <div className="cardsimple__text">
                <strong>Transactional OR Analytical?</strong> Run concurrent analytical queries on live transactional data
                without blocking writes. Competes with PostgreSQL MVCC and dedicated OLAP systems.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/use-cases/operational-analytics" className="cardsimple__button button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">IoT and Time-Series Data</h4>
              <div className="cardsimple__text">
                <strong>Scale OR Validate?</strong> High-volume writes with schema validation and SQL aggregations.
                Competes with specialized time-series databases (InfluxDB, TimescaleDB, QuestDB).
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

      <section className="usecase3" id="supporting-patterns">
        <div className="container">
          <p className="blockcapslead">Supporting Patterns</p>
          <div className="blockheader usecase3__block flexi">
            <h2 className="h4 blockheader__left">Digital Integration Hub</h2>
            <div className="blockheader__right fz20">
              <p>
                An advanced platform architecture that aggregates multiple back-end systems and databases into a
                low-latency and shared data store.
              </p>
              <Link to="/use-cases/digital-integration-hub" className="blockheader__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>
          <div className="blockheader usecase3__block flexi">
            <h2 className="h4 blockheader__left">High-Performance Computing</h2>
            <div className="blockheader__right fz20">
              <p>
                Schema-driven colocation and compute-to-data patterns enable local joins and recommendation engines
                with significant latency reduction through colocation.
              </p>
              <Link to="/use-cases/high-performance-computing" className="blockheader__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>
          <div className="blockheader usecase3__block flexi">
            <h2 className="h4 blockheader__left">Key-Value Store</h2>
            <div className="blockheader__right fz20">
              <p>
                Access the cluster with key-value requests using Ignite 3's Table API with RecordView and KeyValueView,
                or explore Ignite 2's Cache API for legacy deployments.
              </p>
              <Link to="/use-cases/key-value-store" className="blockheader__button button button--shadow">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
