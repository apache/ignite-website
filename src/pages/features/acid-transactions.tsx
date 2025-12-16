import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function ACIDTransactions(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>ACID Transactions - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides full ACID transactions across any number of partitions. MVCC enables snapshot isolation without blocking readers. Distributed replication ensures durability."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/acid-transactions" />
        <meta property="og:title" content="ACID Transactions - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/acid-transactions" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides full ACID transactions across any number of partitions. MVCC enables snapshot isolation without blocking readers. Distributed replication ensures durability."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">ACID Transactions</h1>
            <div className="innerhero__descr pt-2 h5">
              Full ACID across any number of partitions
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="ACID Transactions"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite delivers full ACID transactions across any number of partitions. MVCC provides snapshot isolation without blocking readers. Distributed replication ensures durability. Lock tables, transaction state, and commit decisions all remain in memory.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Snapshot Isolation Without Blocking</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">MVCC Foundation</h3>
            <p>
              Every write creates a new version tagged with a timestamp. Transactions read from a snapshot determined by their start time. Readers and writers never block each other. This delivers REPEATABLE_READ isolation without traditional locking overhead.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Version Management</h3>
            <p>
              The system maintains multiple versions until older snapshots complete. Storage engines handle version cleanup automatically. Analytical queries execute on stable snapshots while transactional updates proceed at full speed.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Read Consistency</h3>
            <p>
              Transactions see a consistent snapshot of the database at their start time. Long-running reads don't block operational writes. No phantom reads. No non-repeatable reads. Snapshot isolation protects against anomalies.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Write Conflicts</h3>
            <p>
              The system detects write-write conflicts during commit. Conflicting transactions abort with serialization errors. Applications can retry failed transactions. This provides safety without requiring locks during execution.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Distributed Durability</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Consensus-Based Commit</h3>
            <p>
              Transactions commit through Raft consensus. The system replicates transaction changes through the distributed consensus log. Data becomes durable once replicated to a majority of replicas. No local write-ahead log needed.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Cross-Partition Coordination</h3>
            <p>
              Transactions span any number of partitions. A coordinator manages distributed commit protocol. All participating partitions must agree before commit completes. Failures trigger automatic rollback across all partitions.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Failure Handling</h3>
            <p>
              The system handles node failures during transaction execution. Ongoing transactions on failed nodes abort automatically. Committed transactions remain durable through replication. No data loss after commit acknowledgment.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Performance Characteristics</h3>
            <p>
              Lock tables and transaction state live in memory. Commit decisions execute without disk I/O. Durability comes from distributed replication rather than local logging. This delivers transactional guarantees with memory-first performance.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Isolation Levels</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">REPEATABLE_READ (Default)</h3>
            <p>
              The default isolation level provides snapshot isolation. Transactions see a consistent snapshot from their start time. Prevents dirty reads, non-repeatable reads, and phantom reads. Write conflicts detected at commit time.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">READ_COMMITTED</h3>
            <p>
              Each statement sees committed data as of statement start. Lower isolation provides better concurrency for read-heavy workloads. Still prevents dirty reads. Non-repeatable reads and phantom reads possible within transaction.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Choosing Isolation</h3>
            <p>
              Use REPEATABLE_READ for transactions requiring consistent snapshots across multiple operations. Use READ_COMMITTED when statement-level consistency suffices and you need maximum read concurrency. Both levels prevent dirty reads.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Concurrency Control</h3>
            <p>
              Both isolation levels use optimistic concurrency. No locks held during transaction execution. Conflicts detected at commit. Applications retry on serialization failures. This approach maximizes throughput for memory-first operations.
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
              Process event streams with ACID guarantees. Update multiple aggregations atomically. Maintain consistency across derived tables. Rollback on processing errors. Transactions ensure exactly-once semantics.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/event-stream-processing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/06-compute-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Microservices State</h3>
            <div className="cardsimple__text">
              Store microservices state with transactional consistency. Coordinate state updates across services. Maintain referential integrity without external coordination. Achieve consistency without distributed transaction managers.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/microservices-state" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Analytical Queries</h3>
            <div className="cardsimple__text">
              Run analytical queries on stable snapshots. Long-running aggregations don't block updates. Queries see consistent data across all partitions. MVCC enables mixed workloads without interference.
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
        <h2 className="h4 pb-4">How Transactions Connect to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/04-ACID-transactions.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">MVCC Enables Isolation</h3>
            <div className="cardsimple__text">
              Multi-Version Concurrency Control provides snapshot isolation without locks. Version chains support concurrent reads and writes. Readers never block writers. Writers never block readers. This foundation enables ACID with memory-first performance.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About MVCC
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Distributed Replication Ensures Durability</h3>
            <div className="cardsimple__text">
              Raft consensus provides durability without traditional write-ahead logs. Transaction changes replicate through the distributed consensus log. Majority replication ensures durability. No local WAL overhead.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About Distributed Replication
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Coordination</h3>
            <div className="cardsimple__text">
              Lock tables, transaction state, and commit decisions live in memory. No disk I/O for coordination. Distributed commit protocol executes against in-memory state. This delivers transactional guarantees with minimal latency.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/storage" className="cardsimple__button button button--shadow">
                Learn About Storage
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
              Learn about transaction isolation levels, commit protocols, and error handling
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/develop/work-with-data/transactions"
              target="_blank"
              rel="noreferrer"
            >
              Transactions Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
