import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function HighPerformanceComputing(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>High-Performance Computing - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite supports compute-to-data patterns through schema-driven colocation. Local joins and recommendation engines benefit from significant latency reduction through colocation."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="High-Performance Computing - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite supports compute-to-data patterns through schema-driven colocation."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              High-Performance Computing
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Schema-driven colocation and compute-to-data patterns
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/ignite3/3.1.0/getting-started/quick-start" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--usecase"
            src="/img/usecases/head-bg.svg"
            alt="Apache Ignite Use Cases"
          />
        </div>
      </section>

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">Compute-To-Data Pattern</h2>
          <div className="inmememor1__text">
            <p>
              Ignite supports compute-to-data patterns by executing calculations on nodes where data resides. Schema-driven
              colocation through table design enables local joins without network transfers. Recommendation engines and
              analytics benefit from significant latency reduction through colocation.
            </p>
            <p className="pt-3">
              Both Ignite 2 and Ignite 3 support compute-to-data patterns. Ignite 2 uses Affinity Key annotation for
              colocation. Ignite 3 uses colocation keys defined in table schema. Both versions provide Compute APIs for
              executing code across cluster nodes.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Colocation Works</h2>
            <div className="blockheader__right fz20">
              Schema-driven colocation keeps related data on the same nodes for local processing
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Schema-Driven Colocation</h3>
              <div className="inmememor-adv__text">
                Define colocation keys in table schema to control data placement. Related records (orders with order
                items, users with transactions) stored on same partition. Local joins execute without network transfers.
                Significant latency reduction compared to distributed joins.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Compute-To-Data Execution</h3>
              <div className="inmememor-adv__text">
                Execute calculations on nodes where data resides. Compute APIs broadcast tasks to cluster nodes. Custom
                code executes locally on colocated data sets. Eliminates network transfers for data-intensive
                calculations.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Local Joins With Colocated Data</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Define colocation keys in table schema to ensure related records reside on same partitions, enabling
                local joins without network overhead.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Design table schemas with colocation keys that match join patterns.
              Orders table colocated with order items using orderId. Users table colocated with transactions using
              userId. Local joins execute on single node without network transfers.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Local joins deliver significant latency reduction compared
              to distributed joins. Network transfers eliminated for colocated data. Memory-first storage enables
              low-latency join execution. Horizontal scalability maintained through proper partitioning strategy.
            </p>
            <p>
              <strong>Version Support:</strong> Ignite 2 uses Affinity Key annotation for colocation. Ignite 3 uses
              colocation keys defined in CREATE TABLE statements. Both versions support same performance benefits.
            </p>
          </div>
        </div>

        <p className="fz20 pt-5">
          <strong>Recommendation Engines</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p>
              <em>
                Execute recommendation algorithms on nodes where user and product data resides, avoiding network
                transfers for large feature sets.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p className="pb-2">
              <strong>Integration Pattern:</strong> Colocate user profiles, purchase history, and product catalogs
              using userId as colocation key. Execute recommendation algorithms using Compute APIs on colocated data
              sets. Results calculated locally without network transfers.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Compute-to-data pattern delivers significant latency
              reduction for recommendation calculations. Feature extraction from colocated data avoids network
              overhead. Parallel execution across cluster nodes for multiple user recommendations.
            </p>
            <p>
              <p><strong>Example Use Cases:</strong></p> E-commerce product recommendations based on purchase history and
              browsing patterns. Content recommendations for streaming platforms. Personalized search results.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Significant Latency Reduction</h3>
            <p>
              Local joins and calculations on colocated data eliminate network transfers. Significant latency reduction
              compared to distributed joins across nodes. Memory-first storage delivers low-latency data access for
              local operations. Particularly effective for join-heavy queries and recommendation algorithms.
            </p>
            <h3 className="fz20 pt-4">Schema-Driven Design</h3>
            <p>
              Define colocation keys in table schema to control data placement. Compile-time awareness of colocation
              patterns. Query optimizer leverages colocation for local execution. Explicit schema design makes
              colocation patterns visible in DDL.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Horizontal Scalability</h3>
            <p>
              Add nodes to increase compute capacity while maintaining colocation benefits. Each partition processed
              independently in parallel. Scales to large data sets through proper partitioning strategy. Compute-to-data
              pattern scales linearly with cluster size.
            </p>
            <h3 className="fz20 pt-4">Familiar SQL Patterns</h3>
            <p>
              Standard SQL joins work automatically with colocated data. No specialized APIs required for local joins.
              Query optimizer detects colocation and executes locally. Compute APIs available for custom algorithms on
              colocated data.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">When This Pattern Works</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Best For Join-Heavy Workloads</h3>
            <p>
              This pattern works well when workloads have predictable join patterns (orders with order items, users
              with transactions). Schema-driven colocation enables local joins for related records. Significant latency
              reduction for join-heavy queries. Best when colocation key matches most frequent join patterns.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Requires Careful Schema Design</h3>
            <p>
              Effective colocation requires upfront schema design with appropriate colocation keys. Poor colocation key
              choice results in distributed joins. Single colocation key per table limits flexibility for multiple join
              patterns. Query patterns should be analyzed before defining colocation strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Example Applications</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p>This pattern applies to:</p>
            <ul className="dashlist pt-1">
              <li>E-commerce platforms with product recommendations based on purchase history</li>
              <li>Financial applications with account-based analytics requiring local joins</li>
              <li>Content platforms with personalized recommendations based on user behavior</li>
              <li>IoT analytics with device-based aggregations on colocated sensor data</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Concrete Example:</strong>
            </p>
            <ul className="pt-1">
              <li>
                <strong>Order Processing:</strong> Orders table colocated with order_items using orderId. Local joins
                for order totals without network transfers. Significant latency reduction for checkout processing.
              </li>
              <li>
                <strong>Recommendation Engine:</strong> User profiles colocated with purchase history using userId.
                Execute recommendation algorithms locally on colocated data. Parallel execution across cluster for
                multiple users.
              </li>
            </ul>
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
              href="/docs/ignite3/3.1.0/getting-started/quick-start"
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
