import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function SessionManagement(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Session Management and Caching at Scale - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates the fast-or-durable trade-off for session management. Any-node session access with automatic failover and zero data loss through memory-first architecture with distributed replication."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/session-management.html" />
        <meta property="og:title" content="Session Management and Caching at Scale - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/session-management.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates the fast-or-durable trade-off for session management. Any-node session access with automatic failover and zero data loss."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Session Management
              <br />
              And Caching At Scale
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Fast OR Durable? Choose Both. <br />
              Any-node session access with automatic failover and zero data loss
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
          <h2 className="capstext pb-3">The Trade-off Problem</h2>
          <div className="inmememor1__text">
            <p>
              Traditional session management architectures force an impossible choice: in-memory caches for low-latency access but
              memory-only storage (data loss on failure), or disk-backed databases for durability but slower access and
              sticky session constraints.
            </p>
            <p className="pt-3">
              Sticky sessions create operational complexity and limit failover capabilities. In-memory caches without persistence
              risk session data loss during node failures. Database-backed sessions add latency and read-write
              blocking issues.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite combines memory-first performance with automatic replication for durability and any-node access
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Low-Latency Access</h3>
              <div className="inmememor-adv__text">
                Memory-first architecture delivers low-latency session retrieval. Partition-aware routing enables direct access from any node without sticky sessions. Load balancers route requests freely across application servers without session affinity constraints.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Zero Data Loss</h3>
              <div className="inmememor-adv__text">
                Distributed replication ensures session data survives node failures with automatic replica promotion. ACID guarantees maintain session consistency across replicas. No trade-off between speed and durability.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Distributed Session Store Without Sticky Sessions</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Application servers store and retrieve session data using Apache Ignite's KeyValueView API with automatic
                replication and partition-aware routing.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Integration Pattern:</strong> Web applications store session data in Apache Ignite using session ID as
              key. Any application server can retrieve any session without sticky routing. Load balancers distribute
              requests freely across application servers.
            </p>
            <p>
              <strong>Consistency Model:</strong> Distributed replication ensures session updates propagate to all replicas
              with strong consistency. Session data remains consistent across all nodes. No eventual consistency
              windows.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Low-latency session retrieval through memory-first storage.
              Partition-aware routing eliminates coordinator overhead. Horizontal scalability handles session volume
              growth.
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
              <li>Web applications requiring elastic scalability without sticky sessions</li>
              <li>Microservices architectures where session data needs global access</li>
              <li>Multi-region deployments requiring session replication</li>
              <li>High-availability requirements with automatic failover</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>E-commerce:</strong> Shopping cart state, user preferences, and checkout data accessible from
                any application server
              </li>
              <li>
                <strong>SaaS Platforms:</strong> User session state shared across microservices without sticky routing
                constraints
              </li>
              <li>
                <strong>Banking Applications:</strong> Secure session data with automatic failover and audit trail
                requirements
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Eliminate Sticky Sessions</h3>
            <p>
              Partition-aware routing enables any-node session access. Load balancers distribute requests freely across
              application servers. Simplifies deployment and improves resource utilization. No session affinity
              constraints.
            </p>
            <h3 className="fz20 pt-4">Zero Data Loss</h3>
            <p>
              Distributed replication ensures session data survives node failures. Automatic replica promotion maintains
              availability during failures. No session data loss during deployments or infrastructure failures. Meets
              high-availability requirements.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Low-Latency Access</h3>
            <p>
              Memory-first storage delivers microsecond-to-millisecond session retrieval. ACID guarantees ensure
              session consistency without eventual consistency delays. Horizontal scalability handles session volume
              growth without latency degradation.
            </p>
            <h3 className="fz20 pt-4">System Consolidation</h3>
            <p>
              Single platform replaces separate caching and session persistence layers. Reduces infrastructure
              complexity and operational overhead. Eliminates synchronization between in-memory cache and durable
              storage.
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
