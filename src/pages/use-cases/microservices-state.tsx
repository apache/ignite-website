import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function MicroservicesState(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Microservices State Management - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates the simple-or-scalable trade-off for microservices. Distributed ACID transactions across service boundaries without saga complexity through memory-first architecture and consensus replication."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Microservices State Management - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates the simple-or-scalable trade-off for microservices. Distributed ACID transactions across service boundaries without saga complexity."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Microservices
              <br />
              State Management
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Simple OR Scalable? Choose Both. <br />
              Distributed ACID transactions across service boundaries
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/3.1.0/" target="_blank" rel="noreferrer" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">The Trade-off Problem</h2>
          <div className="inmememor1__text">
            <p>
              Traditional microservices architectures force an impossible choice: monolithic databases with ACID
              transactions (simple but doesn't scale), or per-service databases with distributed sagas (scalable but
              complex compensation logic).
            </p>
            <p className="pt-3">
              Sagas require extensive compensation logic for failure scenarios. Two-phase commit across services creates
              tight coupling and availability risks. Manual coordination between service databases increases operational
              complexity and infrastructure costs.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite provides distributed ACID transactions across service boundaries without saga complexity
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Distributed ACID Transactions</h3>
              <div className="inmememor-adv__text">
                Consensus replication enables ACID guarantees across multiple microservices without two-phase commit overhead. Transaction coordinator handles atomic commits across distribution zones. Eliminates compensation logic required by saga patterns. Each service maintains its own tables while supporting atomic operations across boundaries.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Infrastructure Consolidation</h3>
              <div className="inmememor-adv__text">
                Single platform replaces multiple per-service databases and coordination services. Significant infrastructure cost reduction potential through system consolidation. Logical partitioning with distribution zones enables per-service data isolation without shared schema constraints.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Shared Data Platform For Microservices</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Microservices store state in Apache Ignite using service-specific tables within distribution zones, enabling
                ACID transactions across service boundaries without saga complexity.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Each microservice owns its tables within Apache Ignite. Cross-service
              operations use distributed transactions that span multiple tables. Transaction coordinator ensures atomic
              commits across service boundaries.
            </p>
            <p className="pb-2">
              <strong>Consistency Model:</strong> Consensus replication provides ACID guarantees for distributed transactions.
              Snapshot isolation prevents read-write conflicts across services. No eventual consistency windows or
              compensation logic.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first storage delivers low-latency state access.
              Partition-aware routing minimizes cross-service coordination overhead. Horizontal scalability handles
              service growth without performance degradation.
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
              <li>Microservices requiring atomic operations across service boundaries</li>
              <li>Systems where saga compensation logic becomes too complex to maintain</li>
              <li>Applications with strong consistency requirements across services</li>
              <li>Organizations seeking infrastructure cost reduction through consolidation</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>Order Processing:</strong> Atomic updates to order, inventory, and payment services without
                compensation rollback logic
              </li>
              <li>
                <strong>Financial Services:</strong> Account transfers across multiple services with ACID guarantees
                and audit trails
              </li>
              <li>
                <strong>Reservation Systems:</strong> Booking confirmations that atomically update availability,
                customer, and billing services
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Eliminate Saga Complexity</h3>
            <p>
              Distributed ACID transactions replace saga compensation logic. No need to write rollback handlers for
              every service interaction. Transaction coordinator ensures atomic commits across service boundaries.
              Reduces code complexity and maintenance burden.
            </p>
            <h3 className="fz20 pt-4">Strong Consistency</h3>
            <p>
              Consensus replication ensures cross-service transactions commit atomically. No eventual consistency windows or
              intermediate states visible to other services. Snapshot isolation prevents read-write conflicts across
              service boundaries.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Infrastructure Cost Reduction</h3>
            <p>
              Single platform consolidates multiple per-service databases, caches, and coordination services.
              Significant cost reduction potential through infrastructure consolidation. Reduces operational overhead of
              managing multiple database systems.
            </p>
            <h3 className="fz20 pt-4">Service Independence</h3>
            <p>
              Distribution zones provide logical isolation per service. Each microservice owns its tables and schemas.
              Cross-service transactions don't require tight coupling at the schema level. Services evolve independently
              while maintaining transactional consistency.
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
              <span>Explore More Use Cases</span>
            </div>
            <p className="nativebotblock__text">Learn about other Apache Ignite use cases</p>
            <Link className="nativebotblock__link arrowlink" to="/use-cases/">
              Use Cases Overview
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
