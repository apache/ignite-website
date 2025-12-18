import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';

export default function ComputeAPIs(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Processing Where Data Lives - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite executes compute jobs on nodes holding the data. Colocated compute eliminates network overhead. Works with colocation and memory-first storage for local aggregations and transformations."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Processing Where Data Lives - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite executes compute jobs on nodes holding the data. Colocated compute eliminates network overhead. Works with colocation and memory-first storage for local aggregations and transformations."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Processing Where Data Lives</h1>
            <div className="innerhero__descr pt-2 h5">
              Execute compute jobs on nodes holding the data
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Compute APIs"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite executes compute jobs on nodes holding the data. This colocated compute pattern eliminates network overhead. Jobs access memory-resident data directly. Combined with schema-driven colocation, this enables complex operations at memory speed without data movement.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Colocated Compute</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Data Locality</h3>
            <p>
              The Compute API schedules jobs on nodes holding relevant data partitions. No data movement across the network. Jobs read and write local memory directly. This eliminates the network bottleneck that limits traditional distributed processing.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Key-Based Routing</h3>
            <p>
              Submit jobs with specific keys. The system routes jobs to nodes holding those keys. Works with colocation to ensure jobs and data reside together. This single-hop execution delivers minimal latency for targeted operations.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Partition-Wide Operations</h3>
            <p>
              Execute jobs across entire partitions. The job receives all rows in the partition as input. Process partition data sequentially or build in-memory indexes. This enables operations that require full partition visibility.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Broadcast Execution</h3>
            <p>
              Broadcast jobs to all nodes for cluster-wide operations. Each node processes its local partitions independently. Results aggregate at the coordinator. This pattern works for parallel aggregations and distributed transformations.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Compute Job Patterns</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Stateless Jobs</h3>
            <p>
              Submit jobs that read data, perform calculations, and return results. No state persists between invocations. Jobs implement simple Java methods. The system handles serialization, routing, and result collection automatically.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">MapReduce Operations</h3>
            <p>
              Implement map-reduce patterns with compute jobs. Map phase executes on data-holding nodes. Reduce phase aggregates results. The framework handles distribution and coordination. This provides map-reduce semantics without separate systems.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Async Execution</h3>
            <p>
              Compute API returns CompletableFuture for non-blocking operations. Submit multiple jobs in parallel. Compose operations with async combinators. This enables high-concurrency compute workloads without thread exhaustion.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Error Handling</h3>
            <p>
              Jobs execute within try-catch blocks. Exceptions propagate to caller as CompletionException. The system handles node failures transparently. Failed jobs retry on other nodes holding the same data partitions.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Integration with Data Layer</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Table API Access</h3>
            <p>
              Compute jobs access tables through RecordView and KeyValueView. Same partition-aware semantics as client access. Local reads avoid network overhead. This provides consistent programming model across client and compute layers.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">SQL Execution</h3>
            <p>
              Compute jobs can execute SQL queries on local partitions. Filter and aggregate local data with SQL. Combine procedural logic with declarative queries. This enables complex business logic at the data layer.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Transaction Support</h3>
            <p>
              Compute jobs execute within transactions. Begin transactions in compute code. Read and write data transactionally. Commit or rollback based on business logic. This ensures consistency for complex multi-step operations.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Memory-First Performance</h3>
            <p>
              Compute jobs operate on memory-resident data. No disk I/O during execution. MVCC provides snapshot isolation for read operations. This delivers the performance needed for real-time compute workloads.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">Use Cases</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/06-compute-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Real-Time Aggregations</h3>
            <div className="cardsimple__text">
              Execute aggregation jobs on data-holding nodes. Process millions of rows in memory. Return aggregated results without data movement. Scale horizontally by adding nodes. Each node processes its partitions independently.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/operational-analytics" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Complex Business Logic</h3>
            <div className="cardsimple__text">
              Implement multi-step business rules in compute jobs. Access related data locally through colocation. Execute validation, transformation, and enrichment. Combine procedural and declarative logic at the data layer.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/microservices-state" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/09-streaming.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Stream Processing</h3>
            <div className="cardsimple__text">
              Process event streams with colocated compute. Execute windowing and aggregation logic where data lands. Update derived tables and materialized views. Maintain complex state in memory for stateful stream processing.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/event-stream-processing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Compute Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/05-key-value-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Colocation Enables Local Processing</h3>
            <div className="cardsimple__text">
              Compute jobs execute on nodes holding colocated data. Schema-driven placement ensures data and compute reside together. This eliminates network overhead for complex operations.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/data-placement" className="cardsimple__button button button--shadow">
                Learn About Data Placement
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Execution</h3>
            <div className="cardsimple__text">
              Compute jobs access data directly from memory. No disk I/O during execution. This memory-first approach delivers the performance needed for real-time compute workloads at scale.
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
            <h3 className="cardsimple__title">Transactional Compute</h3>
            <div className="cardsimple__text">
              Compute jobs execute within ACID transactions. MVCC provides snapshot isolation for read operations. This ensures consistency for complex multi-step operations executing at the data layer.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/acid-transactions" className="cardsimple__button button button--shadow">
                Learn About Transactions
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
              href="/docs/ignite3/3.1.0/getting-started/quick-start"
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
              Learn about compute job submission, execution patterns, and colocated processing
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/ignite3/3.1.0/develop/work-with-data/compute"
              target="_blank"
              rel="noreferrer"
            >
              Compute Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
