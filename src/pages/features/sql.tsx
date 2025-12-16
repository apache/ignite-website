import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';

export default function AccessPatterns(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Access Patterns - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite offers multiple access patterns for the same data: SQL with JDBC drivers, Table API with RecordView and KeyValueView, or native language APIs. All benefit from memory-first architecture and partition-aware routing."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Access Patterns - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite offers multiple access patterns for the same data: SQL with JDBC drivers, Table API with RecordView and KeyValueView, or native language APIs. All benefit from memory-first architecture and partition-aware routing."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Your Choice of Access Pattern</h1>
            <div className="innerhero__descr pt-2 h5">
              SQL, Table API, or native language APIs. All access the same data.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Access Patterns"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite provides multiple ways to access data. Use SQL with standard JDBC drivers. Use the Table API with typed RecordView or efficient KeyValueView. Use native language-specific APIs. All approaches access the same underlying data and benefit from memory-first architecture with partition-aware routing.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">SQL with Distributed Execution</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">ANSI SQL Support</h3>
            <p>
              Apache Ignite implements ANSI SQL with support for DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE, MERGE), and complex queries with joins, aggregations, and subqueries. The query planner generates distributed execution plans.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Distributed Query Execution</h3>
            <p>
              Queries execute across cluster nodes in parallel. The planner routes operations to nodes holding relevant partitions. Results stream back through the coordinator. This enables queries against datasets larger than any single node's memory.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Colocated Joins</h3>
            <p>
              When tables share colocation keys, joins execute locally without data movement. The colocateBy annotation in schema definitions enables this optimization. Colocated joins deliver join performance comparable to single-node databases at distributed scale.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">JDBC Access</h3>
            <p>
              Apache Ignite provides standard JDBC drivers. Applications connect using familiar JDBC patterns. The driver implements automatic failover and connection pooling. This enables integration with existing tools and frameworks expecting JDBC connectivity.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Table API: Type-Safe Access</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">RecordView</h3>
            <p>
              RecordView provides typed access to complete table rows. Methods accept and return objects matching the table schema. The API handles serialization automatically. Use RecordView when working with full records or when type safety matters.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">KeyValueView</h3>
            <p>
              KeyValueView separates key and value types for efficient partial updates. Operations specify only the columns involved. This reduces network traffic and serialization overhead. Use KeyValueView for high-throughput scenarios or targeted column updates.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Partition-Aware Routing</h3>
            <p>
              The Table API calculates partition ownership from keys. Operations route directly to nodes holding the data. No coordinator overhead. This single-hop access delivers minimal latency for point lookups and targeted updates.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Bulk Operations</h3>
            <p>
              Both RecordView and KeyValueView support batch operations. Methods like getAll, putAll, and deleteAll process multiple keys efficiently. The API groups operations by partition and executes them in parallel across relevant nodes.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Native Language APIs</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Multi-Language Support</h3>
            <p>
              Apache Ignite provides native clients for Java, .NET, C++, Python, and other languages. Each client implements the same core APIs with language-specific patterns. Consistent functionality across languages enables polyglot architectures.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Protocol Efficiency</h3>
            <p>
              All clients communicate via an efficient binary protocol. The protocol minimizes serialization overhead and supports request pipelining. Partition awareness works identically across languages. This delivers consistent performance characteristics regardless of client language.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Transaction Support</h3>
            <p>
              SQL queries and Table API operations both support transactions. Begin transactions explicitly or use single-statement transactions. Choose isolation levels (REPEATABLE_READ or READ_COMMITTED). All access patterns provide the same transactional guarantees.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Async and Reactive APIs</h3>
            <p>
              The Table API offers asynchronous methods returning CompletableFuture. This enables non-blocking operations for high-concurrency scenarios. Reactive streams support backpressure for controlled data ingestion. Choose synchronous or asynchronous based on application requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">Use Cases</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Operational Analytics</h3>
            <div className="cardsimple__text">
              Run analytical SQL queries against operational data. Complex aggregations execute in parallel across cluster nodes. MVCC enables analytical queries while transactional updates proceed at full speed. No ETL to separate analytical systems.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/operational-analytics" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/05-key-value-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">High-Throughput Applications</h3>
            <div className="cardsimple__text">
              Use KeyValueView for maximum throughput. Partition-aware routing delivers single-hop access. Batch operations process thousands of keys efficiently. Memory-first architecture provides microsecond-level latency for point operations.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/high-performance-computing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/06-compute-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Polyglot Architectures</h3>
            <div className="cardsimple__text">
              Build systems with multiple languages accessing the same data. Java services use RecordView. Python analytics use SQL. .NET applications use KeyValueView. Consistent APIs and performance across all languages.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/microservices-state" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Access Patterns Connect to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Operations</h3>
            <div className="cardsimple__text">
              All access patterns execute against in-memory data. SQL queries, Table API operations, and native calls all benefit from memory-resident processing. No cache-miss penalties. No cache-warming strategies needed.
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
            <h3 className="cardsimple__title">MVCC Enables Concurrent Access</h3>
            <div className="cardsimple__text">
              MVCC allows SQL analytical queries and Table API updates to run simultaneously. Long-running aggregations work on stable snapshots. Transactional updates proceed at full throughput. Readers never block writers.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About MVCC
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/05-key-value-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Partition-Aware Routing</h3>
            <div className="cardsimple__text">
              Table API and SQL both leverage partition awareness. Operations route directly to data owners. Colocated joins execute locally. This delivers minimal latency through single-hop access patterns.
            </div>
            <div className="cardsimple__bottom">
              <a
                href="/docs/3.1.0/configure-and-operate/operations/colocation"
                className="cardsimple__button button button--shadow"
                target="_blank"
                rel="noreferrer"
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
              Learn about SQL syntax, Table API methods, and client configuration
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/api-reference/sql-only-apis/jdbc"
              target="_blank"
              rel="noreferrer"
            >
              SQL and JDBC Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
