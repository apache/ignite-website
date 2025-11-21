import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function OperationalAnalytics(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Operational Analytics - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates the transactional-or-analytical trade-off. Run concurrent analytical queries on live transactional data without blocking writes through snapshot isolation and memory-first architecture."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/operational-analytics.html" />
        <meta property="og:title" content="Operational Analytics - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/operational-analytics.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates the transactional-or-analytical trade-off. Run concurrent analytical queries on live transactional data without blocking writes."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Operational Analytics
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Transactional OR Analytical? Choose Both. <br />
              Concurrent queries on live transactional data without blocking writes
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
              Traditional relational databases force an impossible choice: run analytical queries on transactional data
              (blocking writes with table locks), or replicate data to separate OLAP systems (data staleness and ETL
              complexity). Relational database MVCC helps but analytical queries still cause lock contention on write-heavy tables.
            </p>
            <p className="pt-3">
              Aggregation queries on transactional data create read locks that block writes. Replicating to data
              warehouses introduces latency and synchronization complexity. Separate OLAP systems require ETL pipelines
              and duplicate storage infrastructure.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite provides lock-free analytical queries on live transactional data through snapshot isolation
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Lock-Free Queries</h3>
              <div className="inmememor-adv__text">
                Snapshot isolation enables analytical queries to read consistent data snapshots without blocking
                concurrent writes. Queries run on committed data without acquiring read locks. Transactions continue
                writing while analytical queries execute concurrently. Eliminates the need for table-level locks during
                aggregation operations.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Single Platform</h3>
              <div className="inmememor-adv__text">
                Memory-first architecture delivers low-latency access for both transactional writes and analytical reads.
                Standard SQL aggregations (SUM, COUNT, AVG, GROUP BY) run directly on transactional data. No ETL
                pipelines or separate OLAP infrastructure. Eliminates data replication latency and synchronization
                complexity.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Concurrent Analytical Queries On Transactional Data</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Applications execute transactional writes while analytical queries run concurrently on consistent
                snapshots without blocking operations.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Transactional applications write to Apache Ignite tables using standard
              ACID operations. Analytical queries use SQL aggregations (SUM, COUNT, GROUP BY, HAVING) to generate
              reports and dashboards directly from transactional tables.
            </p>
            <p className="pb-2">
              <strong>Consistency Model:</strong> Snapshot isolation ensures analytical queries read consistent data at
              point-in-time without blocking writes. Queries see committed transactions only. No table locks or read
              blocking during aggregations.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first storage delivers low-latency analytical query
              execution. Concurrent writes continue without degradation during query execution. Horizontal scalability
              handles both transactional and analytical workload growth.
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
              <li>Operational reporting requiring real-time transactional data</li>
              <li>Compliance dashboards with audit trail queries</li>
              <li>Business intelligence on live operational data</li>
              <li>Systems where ETL latency creates business risk</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p><strong>Example Use Cases:</strong></p>
            <ul className="dashlist pt-1">
              <li>
                <strong>Financial Reporting:</strong> Real-time account balances and transaction summaries without
                blocking payment processing
              </li>
              <li>
                <strong>Inventory Management:</strong> Current stock levels and movement analysis without blocking order
                fulfillment
              </li>
              <li>
                <strong>Operational Dashboards:</strong> Live metrics and KPIs calculated directly from transactional
                data
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Zero Lock Contention</h3>
            <p>
              Snapshot isolation enables analytical queries without acquiring read locks. Transactional writes proceed
              without blocking during query execution. Queries read consistent snapshots at point-in-time. Eliminates
              table-level locks required by traditional databases during aggregations.
            </p>
            <h3 className="fz20 pt-4">Eliminate ETL Complexity</h3>
            <p>
              Single platform supports both transactional and analytical workloads. No data replication to separate OLAP
              systems. Analytical queries access current data without ETL latency. Reduces infrastructure complexity and
              operational overhead.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Standard SQL Aggregations</h3>
            <p>
              Support for common SQL aggregations (SUM, COUNT, AVG, MIN, MAX, GROUP BY, HAVING). Familiar query syntax
              for reporting and business intelligence. SQL-based analytics without learning specialized query languages.
              Standard JDBC/ODBC connectivity for BI tools.
            </p>
            <h3 className="fz20 pt-4">Real-Time Insights</h3>
            <p>
              Analytical queries operate on live transactional data without replication delays. Memory-first architecture
              delivers low-latency query execution. Operational dashboards reflect current state immediately. Business
              decisions based on real-time data.
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
