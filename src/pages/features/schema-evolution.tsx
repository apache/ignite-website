import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';

export default function SchemaEvolution(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Schema Evolution Without Downtime - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite enables schema changes without cluster restarts. Catalog-driven schema management provides atomic versioning. Add columns, modify indexes, and change distributions while applications continue running."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Schema Evolution Without Downtime - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite enables schema changes without cluster restarts. Catalog-driven schema management provides atomic versioning. Add columns, modify indexes, and change distributions while applications continue running."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Schema Evolution Without Downtime</h1>
            <div className="innerhero__descr pt-2 h5">
              Add columns, modify indexes, change distributions. Applications keep running.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Schema Evolution"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite enables schema changes without cluster restarts. Catalog-driven schema management provides atomic versioning. Add columns, modify indexes, and change distributions while applications continue running. Deploy features continuously without maintenance windows.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Catalog-Driven Schema Management</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Atomic Schema Versioning</h3>
            <p>
              The catalog stores schema definitions with version numbers. Schema changes create new versions atomically. All nodes see schema changes simultaneously. No partial updates. No synchronization windows. This eliminates inconsistent schema states during changes.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Zero-Downtime Changes</h3>
            <p>
              Schema changes execute while the cluster processes requests. Add columns to existing tables. Create new indexes on populated tables. Modify distribution zones for existing data. Applications continue reading and writing during changes.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Backward Compatibility</h3>
            <p>
              New schema versions maintain compatibility with existing data. Nullable columns default to NULL for existing rows. Applications running older schema versions continue functioning. This enables gradual application rollouts without coordinated deployments.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Transaction Safety</h3>
            <p>
              Ongoing transactions complete under their starting schema version. New transactions use the latest schema. No transaction failures from schema changes. MVCC ensures transactions see consistent schema states throughout execution.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Schema Operations</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Column Operations</h3>
            <p>
              Add columns with default values. Drop unused columns. Modify column types when safe. All operations execute without blocking reads or writes. The system handles data migration transparently for storage engines.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Index Management</h3>
            <p>
              Create indexes on existing tables without downtime. The system builds indexes in the background while serving queries. Drop unused indexes immediately. Index changes become visible atomically across the cluster.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Distribution Changes</h3>
            <p>
              Modify distribution zones for existing tables. Change replica counts. Adjust node filters. The system rebalances data automatically. Applications continue operating during rebalancing with no impact on consistency.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Colocation Changes</h3>
            <p>
              Modify colocation keys requires table recreation. The catalog enforces this constraint to prevent incorrect query results. Plan colocation carefully during initial schema design. This trade-off ensures correctness for colocated joins.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Multiple API Views</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Single Schema, Multiple APIs</h3>
            <p>
              One catalog schema serves SQL, RecordView, and KeyValueView. Schema changes apply to all access patterns simultaneously. No need to update cache configurations separately. This simplifies operations and prevents API inconsistencies.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">API Compatibility</h3>
            <p>
              SQL sees new columns immediately after schema changes. RecordView and KeyValueView reflect updated schemas through type-safe interfaces. Applications check schema versions to handle new columns gracefully. This enables progressive rollouts.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Client Schema Awareness</h3>
            <p>
              Clients fetch current schema versions automatically. Type-safe APIs validate against current schemas. The protocol includes schema metadata for correct serialization. This prevents version mismatches between clients and cluster.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Development Workflow</h3>
            <p>
              Define schemas using DDL statements or Table API. Test schema changes in development environments. Apply identical changes to production clusters. The catalog ensures deterministic behavior across environments.
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
            <h3 className="cardsimple__title">Continuous Deployment</h3>
            <div className="cardsimple__text">
              Deploy application features without maintenance windows. Add columns for new functionality. Create indexes to optimize new query patterns. Roll out changes gradually across application tiers. Zero-downtime evolution enables continuous delivery.
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
            <h3 className="cardsimple__title">A/B Testing</h3>
            <div className="cardsimple__text">
              Add columns for experimental features. New application versions write to new columns. Old versions ignore them gracefully. Collect metrics on both approaches. Remove unsuccessful experiments by dropping columns.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/use-cases/operational-analytics" className="cardsimple__button button button--shadow">
                View Use Case
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/09-streaming.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Evolving Data Models</h3>
            <div className="cardsimple__text">
              Adapt schemas as requirements change. Add columns for new attributes. Create indexes as query patterns evolve. Modify distributions as data growth patterns change. Schema evolution supports changing business needs.
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
        <h2 className="h4 pb-4">How Schema Evolution Connects to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/08-services.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Catalog Provides Consistency</h3>
            <div className="cardsimple__text">
              The catalog uses distributed consensus for schema changes. All nodes see schema updates atomically. Version numbers ensure consistent views. This coordination enables zero-downtime schema evolution at scale.
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
            <h3 className="cardsimple__title">MVCC Enables Safe Evolution</h3>
            <div className="cardsimple__text">
              MVCC allows ongoing transactions to complete under old schema versions. New transactions use updated schemas. No transaction failures from schema changes. Version chains support multiple schema versions simultaneously.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About MVCC
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Unified Schema for All APIs</h3>
            <div className="cardsimple__text">
              SQL, RecordView, and KeyValueView share the same catalog schema. Schema changes apply to all access patterns simultaneously. This unified approach simplifies operations and prevents inconsistencies.
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
              Learn about table creation, schema modifications, and catalog operations
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/develop/work-with-data/table-api"
              target="_blank"
              rel="noreferrer"
            >
              Tables Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
