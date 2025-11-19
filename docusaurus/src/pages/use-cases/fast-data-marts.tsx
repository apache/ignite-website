import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function FastDataMarts(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Fast Data Marts - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates both warehouse latency and data mart limits. Sub-second queries on curated datasets without cache complexity through memory-first architecture and full SQL support."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/fast-data-marts.html" />
        <meta property="og:title" content="Fast Data Marts - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/fast-data-marts.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates both warehouse latency and data mart limits. Sub-second queries on curated datasets without cache complexity."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              Fast Data Marts
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Warehouse Latency OR Data Mart Limits? Neither. <br />
              Sub-second queries on curated datasets without cache complexity
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
              Traditional analytical data mart architectures force an impossible choice: data warehouses with complete
              data but high query latency (seconds to minutes), or specialized OLAP systems with fast analytics but
              expensive infrastructure and operational complexity. Department dashboards require sub-second response times
              on curated datasets.
            </p>
            <p className="pt-3">
              PostgreSQL or MySQL data marts struggle with high-concurrency analytical workloads. Redis caching layers
              add cache invalidation complexity and lack SQL query capabilities. Data warehouse queries unsuitable for
              customer-facing analytics APIs or operational dashboards requiring sub-second response times.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite provides purpose-built fast data marts without cache complexity through memory-first architecture
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Sub-Second Analytics</h3>
              <div className="inmememor-adv__text">
                Memory-first storage delivers low-latency queries for dashboards and operational reports. Complex
                aggregations, joins, and GROUP BY operations without specialized query languages. Horizontal scalability
                handles concurrent dashboard users without performance degradation. Partition-aware routing minimizes query
                overhead.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Not a Cache</h3>
              <div className="inmememor-adv__text">
                ETL or CDC-populated data store eliminates cache invalidation complexity. Purpose-built analytical repository
                with durable storage and ACID guarantees. Full SQL support for complex analytics without key-value
                limitations. Scheduled refreshes or real-time updates without cache warming or TTL management.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>ETL-Populated Analytical Data Store</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Data warehouses or operational systems populate Apache Ignite data marts through ETL pipelines or CDC
                streams, enabling sub-second analytics on curated datasets.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Integration Pattern:</strong> ETL pipelines or CDC streams populate department-specific tables in
              Apache Ignite (sales_mart, finance_mart, customer_mart). Applications query data marts directly for
              dashboards, customer APIs, and operational reports. Scheduled refreshes (hourly, daily) or real-time updates
              based on business requirements.
            </p>
            <p>
              <strong>Consistency Model:</strong> ACID guarantees ensure data consistency during ETL updates. No cache
              invalidation logic required. Queries read consistent snapshots without blocking concurrent updates. Point-in-time
              consistency for reporting periods.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first architecture delivers sub-second query latency.
              Partition-aware routing distributes analytical workload across cluster. Horizontal scalability handles growing
              data volumes and concurrent users. Consistent performance as data marts scale.
            </p>
          </div>
        </div>

        <p className="fz20 pt-5">
          <strong>When This Pattern Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p>This architecture pattern is best for:</p>
            <ul className="dashlist pt-1">
              <li>Department-specific dashboards requiring sub-second response times</li>
              <li>Customer-facing analytics APIs serving in-app dashboards</li>
              <li>Operational reporting on curated datasets</li>
              <li>Organizations replacing PostgreSQL/MySQL analytical data marts</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Example Use Cases:</strong>
            </p>
            <ul className="pt-1">
              <li>
                <strong>E-Commerce:</strong> Sales team dashboard with daily revenue, conversion metrics, and top products
                refreshed hourly
              </li>
              <li>
                <strong>SaaS Applications:</strong> Customer usage analytics API serving portal dashboards with real-time
                CDC updates
              </li>
              <li>
                <strong>Financial Services:</strong> Fraud detection dashboard with transaction patterns and risk scores
                updated every 5 minutes
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Sub-Second Query Performance</h3>
            <p>
              Memory-first storage eliminates data warehouse query latency for department dashboards and operational
              reports. Partition-aware routing minimizes query overhead. Horizontal scalability handles concurrent users
              without performance degradation. Consistent response times as data volumes grow.
            </p>
            <h3 className="fz20 pt-4">Purpose-Built Repository</h3>
            <p>
              Not positioned as cache. No staleness concerns or invalidation complexity. ETL or CDC-populated data store
              with proper governance. Curated datasets reduce query complexity and improve performance. Full SQL support
              for complex analytics without specialized query languages.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Infrastructure Consolidation</h3>
            <p>
              Replace multiple PostgreSQL or MySQL departmental data marts with single platform. Eliminate Redis cache
              layers and database combinations. Reduce operational overhead of managing multiple systems. Single platform
              for all departmental analytics with consistent query interface.
            </p>
            <h3 className="fz20 pt-4">Operational Simplicity</h3>
            <p>
              Scheduled ETL refreshes or CDC real-time updates without cache warming. No cache invalidation logic or TTL
              management required. ACID guarantees for data consistency during updates. Standard SQL interface with JDBC
              and ODBC connectivity for BI tools.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Important Limitations</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Not a Complete Data Warehouse</h3>
            <p>
              Fast data marts contain curated subsets, not comprehensive historical data. Ad-hoc exploratory queries
              across all dimensions require data warehouse. Long-term data retention (years) better suited to warehouse
              storage. Complex ETL logic remains in data warehouse layer.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">ETL Dependency and Query Constraints</h3>
            <p>
              Data freshness depends on ETL or CDC update frequency. Not suitable for use cases requiring writes from
              applications. Window functions NOT supported (LAG, LEAD, ROW_NUMBER, RANK). For extremely complex analytical
              workloads, specialized OLAP databases may provide better performance.
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
