import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function IoTTimeSeries(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>IoT and Time-Series Data - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite eliminates the scale-or-validate trade-off for IoT data ingestion. High-volume writes with schema validation and SQL aggregations through memory-first architecture and horizontal scalability."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/iot-time-series.html" />
        <meta property="og:title" content="IoT and Time-Series Data - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/iot-time-series.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite eliminates the scale-or-validate trade-off for IoT data ingestion. High-volume writes with schema validation and SQL aggregations."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              IoT and Time-Series Data
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Scale OR Validate? Choose Both. <br />
              High-volume writes with schema validation and SQL aggregations
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
              Traditional IoT architectures force an impossible choice: NoSQL databases for high-volume writes but no
              schema validation (data quality issues), or relational databases with validation but write scalability
              limits. Schema-less ingestion allows bad data into analytics pipelines.
            </p>
            <p className="pt-3">
              NoSQL systems handle write volume but lack schema enforcement at ingestion. Relational databases validate
              data but struggle with high-frequency sensor writes. Separate validation layers add complexity and latency.
              Bad data discovered during analytics creates downstream processing failures.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite Solves This</h2>
            <div className="blockheader__right fz20">
              Apache Ignite provides high-volume writes with schema validation and SQL aggregations through horizontal scalability
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Schema Validation at Ingestion</h3>
              <div className="inmememor-adv__text">
                Table schema enforcement validates data types and constraints during writes. Catch data quality issues at
                ingestion point before entering analytics pipelines. Horizontal scalability handles high-frequency sensor
                writes without compromising validation. Schema evolution supports adding new sensor types without breaking
                existing ingestion.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Time-Grouped Aggregations</h3>
              <div className="inmememor-adv__text">
                SQL aggregations with GROUP BY time intervals for sensor data rollups. Standard aggregation functions (AVG,
                SUM, COUNT, MIN, MAX) for time-series calculations. Single platform for ingestion, validation, and
                aggregation without separate processing layers. Memory-first architecture delivers low-latency queries on
                recent time-series data.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>High-Volume Ingestion With Schema Validation</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                IoT devices write sensor data to Apache Ignite tables with schema validation at ingestion, enabling SQL
                aggregations for time-series analysis.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Integration Pattern:</strong> IoT gateways write sensor readings to Apache Ignite tables with defined
              schemas (timestamp, device_id, sensor_type, value, units). Schema validation rejects malformed data at
              ingestion. Analytical queries use GROUP BY with time intervals for rollups and aggregations.
            </p>
            <p>
              <strong>Consistency Model:</strong> ACID guarantees ensure sensor writes commit atomically. Schema
              enforcement validates data types and constraints during ingestion. Queries read consistent snapshots without
              blocking concurrent writes.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Horizontal scalability handles high-frequency sensor writes
              across distributed nodes. Memory-first storage delivers low-latency access to recent sensor data.
              Partition-aware routing distributes write load across cluster.
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
              <li>IoT deployments requiring schema validation at ingestion</li>
              <li>Sensor networks where data quality issues create downstream failures</li>
              <li>Time-series data with standard SQL aggregation requirements</li>
              <li>Systems needing single platform for ingestion and analysis</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Example Use Cases:</strong>
            </p>
            <ul className="pt-1">
              <li>
                <strong>Industrial Monitoring:</strong> Sensor data validation at ingestion with time-grouped aggregations
                for equipment health monitoring
              </li>
              <li>
                <strong>Smart Buildings:</strong> HVAC and energy meter data with schema enforcement and occupancy pattern
                analysis
              </li>
              <li>
                <strong>Fleet Management:</strong> Vehicle telemetry ingestion with validation and rollup queries for
                operational dashboards
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Data Quality at Ingestion</h3>
            <p>
              Schema validation enforces data types and constraints during writes. Reject malformed sensor data before
              entering analytics pipelines. Catch data quality issues at ingestion point rather than during analysis.
              Reduces downstream processing failures from bad data.
            </p>
            <h3 className="fz20 pt-4">Horizontal Write Scalability</h3>
            <p>
              Distributed architecture handles high-frequency sensor writes across cluster nodes. Partition-aware routing
              distributes write load without hotspots. Add nodes to scale write throughput for growing IoT deployments.
              Memory-first storage absorbs write bursts without latency spikes.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Standard SQL Aggregations</h3>
            <p>
              Time-grouped aggregations using GROUP BY with time intervals. Support for common aggregation functions (AVG,
              SUM, COUNT, MIN, MAX) on sensor data. Standard SQL syntax for time-series analysis without specialized query
              languages. Familiar query patterns for operational reporting.
            </p>
            <h3 className="fz20 pt-4">Single Platform</h3>
            <p>
              Unified platform for ingestion, validation, and aggregation eliminates separate processing layers. No data
              movement between ingestion and analytics systems. Reduces infrastructure complexity and operational overhead.
              Simplifies IoT data pipeline architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Important Limitations</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Competes With Specialized Systems</h3>
            <p>
              This pattern competes with specialized time-series databases optimized for
              time-series workloads. For extremely high-frequency sensor writes, specialized time-series databases may
              provide better compression and query performance through columnar storage and time-series specific
              optimizations.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Best For Standard Aggregations</h3>
            <p>
              This pattern works well for standard SQL aggregations (GROUP BY time intervals, AVG, SUM, COUNT). For complex
              time-series analysis requiring window functions, downsampling, or interpolation, specialized time-series
              databases provide richer query capabilities.
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
