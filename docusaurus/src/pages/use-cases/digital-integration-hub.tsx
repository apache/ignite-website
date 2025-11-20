import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function DigitalIntegrationHub(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Digital Integration Hub - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite functions as a low-latency shared store for digital integration hub architectures. Aggregates data from multiple back-end systems into a unified data access layer. Valid pattern for both Ignite 2 and Ignite 3."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/digital-integration-hub.html" />
        <meta property="og:title" content="Digital Integration Hub - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/digital-integration-hub.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite functions as a low-latency shared store for digital integration hub architectures."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Digital Integration Hub
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Unified data access layer that aggregates multiple back-end systems
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">Digital Integration Hub Pattern</h2>
          <div className="inmememor1__text">
            <p>
              A digital integration hub (DIH) is an architectural pattern that aggregates multiple back-end systems and
              databases into a low-latency shared data store. Applications access unified data through a single interface
              rather than querying multiple disparate systems.
            </p>
            <p className="pt-3">
              This pattern applies to both Ignite 2 and Ignite 3. Ignite functions as the centralized data layer that
              synchronizes with back-end systems through streaming, CDC, or event-based integration. System consolidation
              reduces infrastructure complexity and operational overhead.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">System Consolidation Benefits</h2>
            <div className="blockheader__right fz20">
              Ignite consolidates access to multiple back-end systems through a unified data layer
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Unified Data Access</h3>
              <div className="inmememor-adv__text">
                Single interface aggregates data from multiple back-end databases and systems. Applications query one store
                instead of managing connections to multiple systems. Reduces application complexity by eliminating logic for
                accessing numerous data sources. Standard SQL or key-value APIs for data access across consolidated systems.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Infrastructure Consolidation</h3>
              <div className="inmememor-adv__text">
                Replace multiple per-application databases with shared data layer. Significant infrastructure cost reduction
                through system consolidation. Operational overhead reduced by centralizing data management. Memory-first
                architecture delivers low-latency access to aggregated data.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Data Aggregation From Multiple Systems</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Ignite serves as centralized data layer that aggregates data from multiple back-end systems through
                synchronization mechanisms.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Integration Pattern:</strong> Back-end systems synchronize data to Ignite through streaming platforms,
              change data capture tools, or event-based integration. Applications query Ignite
              instead of accessing back-end systems directly. Ignite maintains aggregated view of data across multiple
              sources.
            </p>
            <p>
              <strong>Synchronization Options:</strong> Ignite 2 provides CacheStore interface for write-through and
              write-behind synchronization. Ignite 3 supports similar patterns through custom integration layers. Both
              versions work with streaming platform connectors for bi-directional synchronization.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first architecture delivers low-latency queries across
              aggregated data. Eliminates network hops to multiple back-end systems. Horizontal scalability handles
              growing data volumes from multiple sources.
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
              <li>Applications requiring unified access to data scattered across multiple back-end systems</li>
              <li>Omnichannel platforms aggregating customer data from disparate sources</li>
              <li>API gateways serving data from multiple legacy systems</li>
              <li>Real-time dashboards requiring low-latency access to aggregated data</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>Customer 360:</strong> Aggregate customer data from CRM, billing, support, and marketing systems
                into unified view accessible through single interface
              </li>
              <li>
                <strong>Omnichannel Retail:</strong> Consolidate inventory, pricing, and customer data from multiple
                back-end systems for consistent experience across channels
              </li>
              <li>
                <strong>API Offloading:</strong> Reduce load on back-end systems by serving API requests from Ignite
                with data synchronized from multiple sources
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Reduced Application Complexity</h3>
            <p>
              Applications query single unified interface instead of managing connections to multiple back-end systems.
              Eliminates logic for accessing numerous data sources. Reduces network connections and authentication
              overhead. Standard SQL or key-value APIs simplify data access patterns.
            </p>
            <h3 className="fz20 pt-4">Infrastructure Cost Reduction</h3>
            <p>
              System consolidation replaces multiple per-application databases with shared data layer. Significant cost
              reduction through centralized data management. Operational overhead reduced by eliminating multiple database
              instances. Memory-first architecture delivers low-latency access without specialized hardware.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Low-Latency Data Access</h3>
            <p>
              Memory-first storage delivers low-latency queries across aggregated data. Eliminates network hops to multiple
              back-end systems. Single query returns data from multiple sources. Reduces response times for applications
              accessing consolidated data.
            </p>
            <h3 className="fz20 pt-4">Both Versions Supported</h3>
            <p>
              This pattern works with both Ignite 2 and Ignite 3. Ignite 2 provides CacheStore interface for
              synchronization. Ignite 3 supports custom integration layers with streaming platforms. Both versions deliver
              same consolidation benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Synchronization Mechanisms</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Ignite 2 Synchronization</h3>
            <p>
              CacheStore interface enables write-through and write-behind synchronization with back-end systems. Ignite 2
              automatically writes changes to external databases. Transaction coordination across Ignite cluster and
              external transactional databases. Supports uni-directional synchronization from back-end systems to Ignite.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Bi-Directional Synchronization</h3>
            <p>
              Both versions work with streaming platforms for bi-directional synchronization. Change data
              capture tools stream database changes to Ignite. Event-based integration through message
              queues. Custom integration layers for specific back-end systems.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Important Considerations</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Synchronization Complexity</h3>
            <p>
              Maintaining data consistency across multiple back-end systems requires careful synchronization design.
              Eventual consistency windows may exist during synchronization delays. Conflict resolution strategies needed
              for bi-directional synchronization. Monitoring required to detect synchronization failures.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Data Governance</h3>
            <p>
              Aggregating data from multiple systems requires clear data governance policies. Access control and security
              must be maintained across consolidated data. Compliance requirements (GDPR, CCPA) apply to aggregated data.
              Data lineage tracking needed for auditing purposes.
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
              href="https://ignite.apache.org/docs/latest/#quick-start-guides"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Explore More Use Cases</span>
            </div>
            <p className="nativebotblock__text">Learn about other Ignite use cases</p>
            <Link className="nativebotblock__link arrowlink" to="/use-cases/">
              Use Cases Overview
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
