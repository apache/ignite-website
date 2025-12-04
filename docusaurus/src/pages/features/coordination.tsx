import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function Coordination(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Coordination That Scales - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides distributed coordination through Catalog, Meta Storage, and Hybrid Logical Clock. Type-safe configuration with hot reconfiguration. Schema metadata with version tracking enables zero-downtime evolution."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/coordination" />
        <meta property="og:title" content="Coordination That Scales - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/coordination" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides distributed coordination through Catalog, Meta Storage, and Hybrid Logical Clock. Type-safe configuration with hot reconfiguration. Schema metadata with version tracking enables zero-downtime evolution."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Coordination That Scales</h1>
            <div className="innerhero__descr pt-2 h5">
              Distributed metadata, configuration, and event ordering
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Coordination"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite provides distributed coordination primitives that scale with cluster size. The Catalog manages schema metadata with atomic versioning. Meta Storage provides distributed key-value coordination. Hybrid Logical Clock ensures event ordering. Type-safe configuration enables hot reconfiguration without restarts.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Catalog: Schema Metadata Management</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Versioned Schema Storage</h3>
            <p>
              The Catalog stores table definitions, indexes, and distribution zones with version numbers. Schema changes create new versions atomically. All nodes see schema updates simultaneously. This eliminates inconsistent schema states during changes.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Schema Evolution Support</h3>
            <p>
              The Catalog enables schema evolution without downtime. Add columns to existing tables. Create indexes on populated tables. Modify distribution zones. Applications continue operating during schema changes with backward compatibility.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Multi-API Consistency</h3>
            <p>
              One Catalog schema serves SQL, RecordView, and KeyValueView. Schema changes apply to all access patterns simultaneously. No need to synchronize cache configurations separately. This unified approach prevents API inconsistencies.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Distributed Consensus</h3>
            <p>
              The Catalog uses Raft consensus for schema changes. Changes replicate through the consensus log before becoming visible. This ensures all nodes agree on schema state. No split-brain scenarios during network partitions.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Meta Storage: Distributed Key-Value Coordination</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Coordination Primitive</h3>
            <p>
              Meta Storage provides a distributed key-value store for coordination. Store cluster metadata, partition assignments, and node attributes. Access through get, put, and compare-and-swap operations. Raft consensus ensures consistency.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Watches and Notifications</h3>
            <p>
              Meta Storage supports watches on key prefixes. Applications receive notifications when watched keys change. This enables reactive patterns for topology changes, configuration updates, and partition reassignments.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Topology Management</h3>
            <p>
              Meta Storage tracks node membership and attributes. Nodes register on join. Updates propagate through consensus. Node failures detect through timeouts. This provides reliable cluster membership information.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Partition Assignment</h3>
            <p>
              Meta Storage stores partition-to-node assignments. Distribution zones query these assignments for data placement. Rebalancing updates assignments atomically. This coordination enables dynamic partition distribution.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Configuration Management</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Type-Safe Configuration</h3>
            <p>
              Apache Ignite uses typed configuration objects. Compile-time validation prevents configuration errors. IDE auto-completion helps discoverability. Generated documentation keeps configuration references current.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Hot Reconfiguration</h3>
            <p>
              Many configuration parameters support runtime updates. Change without cluster restarts. Updates propagate through Meta Storage. Nodes apply changes atomically. This enables operational adjustments without downtime.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Configuration Validation</h3>
            <p>
              The system validates configuration changes before applying them. Reject invalid values at submission time. Validate cross-parameter constraints. This prevents runtime failures from configuration errors.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Configuration History</h3>
            <p>
              Meta Storage maintains configuration history. Query previous configurations. Understand when changes occurred. This supports troubleshooting and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Hybrid Logical Clock</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Event Ordering</h3>
            <p>
              Hybrid Logical Clock (HLC) provides total ordering of events across nodes. Combines physical time with logical counters. Events order deterministically even when physical clocks skew. This enables causality tracking in distributed operations.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Clock Synchronization</h3>
            <p>
              HLC synchronizes through message passing. No external clock synchronization service required. Clock skew remains bounded within configured limits. This simplifies deployment compared to systems requiring NTP or GPS.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">MVCC Integration</h3>
            <p>
              HLC timestamps MVCC versions. Transactions use HLC values for snapshot isolation. This provides consistent timestamps across distributed operations. Clock ordering ensures transaction serialization.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Wait-Free Reads</h3>
            <p>
              HLC enables wait-free read operations. No synchronization required for reads. Readers use HLC timestamps to select correct MVCC versions. This delivers maximum read throughput without coordination overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Coordination Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Raft Consensus for Metadata</h3>
            <div className="cardsimple__text">
              Catalog and Meta Storage use Raft consensus. Metadata changes replicate through distributed consensus log. This provides strong consistency for schema and configuration without requiring external coordination services.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About Distributed Replication
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/04-ACID-transactions.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">HLC Enables MVCC</h3>
            <div className="cardsimple__text">
              Hybrid Logical Clock provides timestamps for MVCC versions. Transactions use HLC for snapshot isolation. This coordination primitive enables distributed transactions without external timestamp services.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/acid-transactions" className="cardsimple__button button button--shadow">
                Learn About Transactions
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/01-multi-tier-storage.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Catalog Enables Schema Evolution</h3>
            <div className="cardsimple__text">
              The Catalog's versioned schema storage enables zero-downtime schema evolution. Atomic versioning ensures consistency. This coordination layer supports continuous deployment without maintenance windows.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/schema-evolution" className="cardsimple__button button button--shadow">
                Learn About Schema Evolution
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
              Learn about configuration management, catalog operations, and cluster coordination
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/configure-and-operate/configuration/config-cluster-and-nodes"
            >
              Configuration Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
