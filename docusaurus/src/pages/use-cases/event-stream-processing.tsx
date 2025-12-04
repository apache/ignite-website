import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function EventStreamProcessing(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Event Stream Processing and Enrichment - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates the fast-or-consistent trade-off for event stream processing. Enrich high-throughput event streams with low-latency, ACID-compliant reference data lookups using memory-first architecture and partition-aware routing."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/event-stream-processing.html" />
        <meta property="og:title" content="Event Stream Processing and Enrichment - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/event-stream-processing.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates the fast-or-consistent trade-off for event stream processing. Enrich high-throughput event streams with low-latency, ACID-compliant reference data lookups."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Event Stream Processing
              <br />
              And Enrichment
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Fast OR Consistent? Choose Both. <br />
              Enrich high-throughput event streams with consistent reference data
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/3.1.0/" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
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
              Traditional event stream architectures force an impossible choice: in-memory caches for speed but stale data, or
              relational databases for consistency but high network round-trip latency. Stream processors need both low-latency
              lookups AND strong consistency for reference data enrichment.
            </p>
            <p className="pt-3">
              Cache invalidation complexity creates operational burden. Eventual consistency risks processing events
              with outdated reference data. Database queries add latency that breaks real-time processing requirements.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite eliminates the latency-consistency trade-off through memory-first architecture with ACID
              guarantees
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Low-Latency Lookups</h3>
              <div className="inmememor-adv__text">
                Memory-first architecture with partition-aware routing delivers microsecond-to-millisecond lookups. RecordView API provides direct partition access without coordinator overhead, delivering significant latency reduction for reference data enrichment.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Strong Consistency</h3>
              <div className="inmememor-adv__text">
                ACID guarantees with consensus replication eliminate cache invalidation complexity. Stream processors always read consistent reference data. No eventual consistency windows. Colocation support enables local joins for further performance optimization.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Event Enrichment Without Cache Invalidation</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Stream processors read reference data directly from Apache Ignite using partition-aware routing for
                low-latency lookups with ACID consistency.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Streaming platforms process events, enriching each
              event by looking up reference data in Apache Ignite through RecordView API.
            </p>
            <p className="pb-2">
              <strong>Consistency Model:</strong> Consensus replication ensures writes to reference data propagate to all
              replicas with strong consistency. No eventual consistency delays.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first architecture delivers microsecond-to-millisecond
              lookup latency at high throughput. Partition-aware routing eliminates coordinator overhead.
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
              <li>High-throughput event stream enrichment</li>
              <li>Reference data that changes infrequently or requires strong consistency</li>
              <li>Real-time processing where cache staleness creates business risk</li>
              <li>Systems where cache invalidation complexity becomes operational burden</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>Financial Trading:</strong> Enrich order events with current instrument data, margin
                requirements, and risk parameters
              </li>
              <li>
                <strong>E-commerce:</strong> Enrich clickstream events with product catalog, pricing, and inventory
                status
              </li>
              <li>
                <strong>Fraud Detection:</strong> Enrich transaction events with customer profiles, risk scores, and
                historical patterns
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20 pb-1">Eliminate Cache Invalidation</h3>
            <p>
              ACID guarantees replace cache invalidation complexity. Stream processors read consistent reference data
              without cache warming, TTL tuning, or invalidation logic. Updates propagate through consensus replication, not
              cache invalidation messages.
            </p>
            <h3 className="fz20 pt-2 pb-1">Low-Latency At Scale</h3>
            <p>
              Memory-first storage delivers microsecond-to-millisecond latency for reference data lookups.
              Partition-aware routing bypasses coordinator overhead. Horizontal scalability handles throughput growth
              without latency degradation.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20 pb-1">Strong Consistency</h3>
            <p>
              Consensus replication ensures reference data updates propagate with strong consistency. No eventual consistency
              windows. Stream processors never enrich events with stale reference data.
            </p>
            <h3 className="fz20 pt-3 pb-1">System Consolidation</h3>
            <p>
              Single platform replaces separate caching and database systems for reference data. Reduces
              infrastructure complexity and operational overhead. Eliminates synchronization between cache and database layers.
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
