import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';

export default function Operations(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Operations Built In - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides built-in operational capabilities for production deployments. OpenTelemetry metrics and system views for monitoring. Raft snapshots and Meta Storage backup for recovery. Authentication and SSL/TLS for security."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/tooling" />
        <meta property="og:title" content="Operations Built In - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/tooling" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides built-in operational capabilities for production deployments. OpenTelemetry metrics and system views for monitoring. Raft snapshots and Meta Storage backup for recovery. Authentication and SSL/TLS for security."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Operations Built In</h1>
            <div className="innerhero__descr pt-2 h5">
              Monitoring, recovery, and security for production deployments
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/hero-bg.svg"
            alt="Operations"
          />
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <div className="pt-3 pb-3">
          <p className="fz20">
            Apache Ignite provides built-in operational capabilities for production deployments. OpenTelemetry metrics enable monitoring through standard observability stacks. System views expose internal state through SQL. Raft snapshots and Meta Storage backup provide recovery mechanisms. Authentication and SSL/TLS secure cluster access.
          </p>
        </div>
      </section>

      <section className="nativepersistence3 container">
        <h2 className="h4 pb-3">Monitoring and Observability</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">OpenTelemetry Metrics</h3>
            <p>
              Apache Ignite exports metrics using OpenTelemetry standards. Track operation latencies, throughput, error rates, and resource utilization. Integrate with Prometheus, Grafana, Datadog, or any OpenTelemetry-compatible monitoring system.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">System Views</h3>
            <p>
              Query cluster state through SQL system views. Examine node status, partition distribution, transaction state, and running jobs. Standard SQL access enables integration with existing monitoring tools and custom dashboards.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Metric Categories</h3>
            <p>
              Metrics cover client connections, SQL query execution, transaction processing, replication lag, storage engine performance, and network traffic. Filter metrics by node or partition. This comprehensive coverage enables full-stack observability.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Custom Metrics</h3>
            <p>
              Applications register custom metrics through the OpenTelemetry API. Track business-level indicators alongside system metrics. This unified approach simplifies correlation between application behavior and system performance.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Recovery and Backup</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Raft Snapshots</h3>
            <p>
              Each partition maintains Raft snapshots for recovery. Snapshots capture partition state at specific points in time. New nodes or recovering nodes restore from snapshots before replaying logs. This accelerates recovery compared to full log replay.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Meta Storage Backup</h3>
            <p>
              Meta Storage stores critical cluster metadata including schema, configuration, and partition assignments. Backup Meta Storage separately from data partitions. Recovery requires both partition data and Meta Storage state for full cluster restoration.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Snapshot Management</h3>
            <p>
              Configure snapshot frequency and retention. Balance storage cost against recovery time objectives. Automatic garbage collection removes outdated snapshots. This management ensures snapshots remain available without consuming excessive storage.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Disaster Recovery</h3>
            <p>
              Combine snapshots with distributed replication for disaster recovery. Snapshots provide point-in-time recovery. Replication provides continuous availability. This layered approach addresses both data loss prevention and recovery time requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Security</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">Authentication</h3>
            <p>
              Apache Ignite supports username/password authentication. Configure authentication providers for different deployment environments. Failed authentication attempts log for security monitoring. This protects cluster access from unauthorized clients.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">SSL/TLS Encryption</h3>
            <p>
              Enable SSL/TLS for client-to-cluster and node-to-node communication. Support for standard certificate formats. Configure cipher suites and protocols. This protects data in transit from network eavesdropping.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Authorization</h3>
            <p>
              Control access to tables and operations through permissions. Grant read, write, or admin privileges per user. This fine-grained control enables multi-tenant deployments and compliance with access policies.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Audit Logging</h3>
            <p>
              Log security-relevant events including authentication attempts, authorization failures, and schema changes. Integrate with SIEM systems for security monitoring. This audit trail supports compliance requirements and security investigations.
            </p>
          </div>
        </div>
      </section>

      <section className="nativepersistence3 container pt-5 pb-5">
        <h2 className="h4 pb-3">Command Line Tools</h2>

        <div className="nativepersistence3__block flexi">
          <div className="nativepersistence3__left">
            <h3 className="h5">CLI for Administration</h3>
            <p>
              The Ignite CLI provides commands for cluster management. Start and stop nodes. Create tables and distribution zones. Execute SQL queries. Inspect cluster topology. This enables scripted administration and troubleshooting.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">Cluster Inspection</h3>
            <p>
              Query node status, partition distribution, and replication state through CLI commands. Export metrics for analysis. This command-line access supports automation and remote administration scenarios.
            </p>
          </div>
        </div>

        <div className="nativepersistence3__block flexi pt-4">
          <div className="nativepersistence3__left">
            <h3 className="h5">Diagnostic Tools</h3>
            <p>
              The CLI includes diagnostic commands for troubleshooting. Analyze thread dumps. Inspect transaction state. Export partition data for analysis. These tools help diagnose issues in production environments.
            </p>
          </div>
          <div className="nativepersistence3__right">
            <h3 className="h5">REST API</h3>
            <p>
              Apache Ignite exposes a REST API for programmatic administration. Execute SQL queries. Manage tables and zones. Query cluster state. This HTTP interface enables integration with orchestration systems and custom tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5 pb-5">
        <h2 className="h4 pb-4">How Operations Connect to the Foundation</h2>

        <div className="cardswrap">
          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/02-native-persistence.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Raft Snapshots for Recovery</h3>
            <div className="cardsimple__text">
              Distributed replication through Raft enables partition snapshots. Each partition maintains recoverable state. This provides fast recovery without requiring external backup systems for availability.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/architectural-foundation" className="cardsimple__button button button--shadow">
                Learn About Distributed Replication
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/08-services.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">Meta Storage Backup</h3>
            <div className="cardsimple__text">
              Meta Storage holds critical cluster metadata. Backup operations export this state for disaster recovery. The coordination layer enables consistent snapshots of distributed metadata.
            </div>
            <div className="cardsimple__bottom">
              <Link to="/features/coordination" className="cardsimple__button button button--shadow">
                Learn About Coordination
              </Link>
            </div>
          </div>

          <div className="usecasecard cardsimple">
            <div className="cardsimple__icon">
              <img src="/img/features/03-distributed-SQL.svg" alt="" />
            </div>
            <h3 className="cardsimple__title">System Views Through SQL</h3>
            <div className="cardsimple__text">
              System views expose cluster state through SQL queries. Use standard SQL tools for monitoring. This integration simplifies operations by leveraging existing SQL infrastructure.
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
              Learn about monitoring setup, backup procedures, and security configuration
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/sql/working-with-sql/system-views"
              target="_blank"
              rel="noreferrer"
            >
              System Views Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
