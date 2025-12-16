import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function DataPlacement(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Schema-Driven Data Placement - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite uses schema-driven colocation to keep related data together. The colocateBy annotation transforms cross-node queries into local memory operations. Distribution zones control replica counts and node placement."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/data-placement" />
        <meta property="og:title" content="Schema-Driven Data Placement - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/data-placement" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite uses schema-driven colocation to keep related data together. The colocateBy annotation transforms cross-node queries into local memory operations. Distribution zones control replica counts and node placement."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Schema-Driven Data Placement</h1>
            <div className="innerhero__descr pt-2 h5">
              Keep related data together. Query locally.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Data Placement"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite uses schema-driven colocation to keep related data together. The colocateBy annotation in table definitions specifies which columns control data placement. Related rows store on the same node. This transforms cross-node queries into local memory operations.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Colocation Through Schema Annotations</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">The colocateBy Annotation</h3>
            <p>
              Table definitions specify colocation keys using the colocateBy annotation. All rows with the same colocation key values store on the same partition. The system calculates partition assignments from colocation key hashes. This deterministic placement enables partition-aware operations.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Common Colocation Patterns</h3>
            <p>
              Colocate orders with customers. Colocate line items with orders. Colocate related business entities. The pattern: parent entity key becomes child entity colocation key. This keeps hierarchies together for local joins.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Local Joins</h3>
            <p>
              Joins between colocated tables execute entirely on the node holding the data. No network traffic for join operations. Query execution happens in memory on a single node. This delivers join performance comparable to single-node databases at distributed scale.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Partition-Aware Routing</h3>
            <p>
              The Table API calculates partition ownership from keys. Operations route directly to nodes holding the data. Single-hop access eliminates coordinator overhead. This works for point lookups, batch operations, and colocated queries.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Distribution Zones</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Replica Configuration</h3>
            <p>
              Distribution zones define replica counts for table groups. Tables in the same zone share replication settings. Specify replica counts from 1 to cluster size. Higher replica counts increase availability and read throughput at the cost of write amplification.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Node Filters</h3>
            <p>
              Distribution zones support node filters based on attributes. Restrict data to specific node subsets. Place hot data on high-memory nodes. Place archive data on cost-optimized nodes. This enables heterogeneous cluster configurations.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Data Rebalancing</h3>
            <p>
              The system rebalances data automatically when topology changes. Adding nodes triggers partition migration. Removing nodes redistributes data. Rebalancing maintains target replica counts and respects node filters throughout topology changes.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Zone Management</h3>
            <p>
              Create zones with SQL DDL or management APIs. Assign tables to zones during table creation. Modify zone settings without recreating tables. The system applies changes atomically across the cluster.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Performance Characteristics</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Network Elimination</h3>
            <p>
              Colocated operations execute without network I/O. Joins process in memory on single nodes. Aggregations work on local partitions. This eliminates the network bottleneck that limits distributed query performance.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Cache Efficiency</h3>
            <p>
              Related data residing together improves CPU cache efficiency. Sequential scans benefit from memory locality. Index lookups access fewer cache lines. This memory-level optimization compounds with network elimination for maximum throughput.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Scalability</h3>
            <p>
              Colocation scales linearly with cluster size. Each node processes its partition data independently. Adding nodes increases total cluster capacity proportionally. No centralized coordination limits throughput.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Trade-offs</h3>
            <p>
              Colocation requires careful schema design. Choose colocation keys based on query patterns. Non-colocated joins require data shuffling. The system optimizes for colocated operations, accepting higher cost for cross-partition queries.
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
            <h3 className="cardsimple__title">Multi-Tenant Applications</h3>
            <div className="cardsimple__text">
              Colocate all tenant data by tenant ID. Tenant queries execute locally without cross-node traffic. Achieve single-tenant performance in multi-tenant systems. Scale tenants horizontally by adding nodes.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/microservices-state" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/06-compute-APIs.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">E-Commerce Systems</h3>
            <div className="cardsimple__text">
              Colocate orders, line items, and shipping records by order ID. Order processing queries execute locally. Inventory checks, pricing calculations, and order totals compute in memory. No network overhead for transaction processing.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/high-performance-computing" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/09-streaming.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Time-Series Analytics</h3>
            <div className="cardsimple__text">
              Colocate metrics by device ID or customer ID. Time-range queries execute locally per device. Aggregations compute on single nodes. This pattern works for IoT telemetry, financial tick data, and application metrics.
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
        <h2 className="h4 pb-4">How Data Placement Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Memory-First Operations</h3>
            <div className="cardsimple__text">
              Colocated operations execute against in-memory data. Local joins access memory without disk I/O. This memory-first approach combined with colocation delivers the performance needed for complex queries at scale.
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
            <h3 className="cardsimple__title">Distributed Replication for Availability</h3>
            <div className="cardsimple__text">
              Distribution zones use Raft-based replication. Each partition replicates across configured replica count. Data remains available during node failures. Colocation works transparently with replication.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About Distributed Replication
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">SQL and Table API Integration</h3>
            <div className="cardsimple__text">
              Colocation works identically for SQL and Table API. Schema annotations drive placement for both access patterns. This unified approach simplifies application development.
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
              <span>Read Documentation</span>
            </div>
            <p className="nativebotblock__text">
              Learn about colocation keys, distribution zones, and data placement strategies
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite-dev.gridgain.com/docs/3.1.0/configure-and-operate/operations/colocation"
              target="_blank"
              rel="noreferrer"
            >
              Colocation Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
