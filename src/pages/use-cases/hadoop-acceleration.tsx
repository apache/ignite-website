import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';
import '../../css/hadoop.css';

export default function HadoopAcceleration(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Hadoop Performance Acceleration</title>
        <meta
          name="description"
          content="Achieve the performance acceleration of Hadoop-based systems by deploying Ignite as an in-memory computing platform designated for low-latency, high-throughput and real-time operations while Hadoop continues to be used for long-running OLAP workloads."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Hadoop Performance Acceleration" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Achieve the performance acceleration of Hadoop-based systems by deploying Ignite as an in-memory computing platform designated for low-latency, high-throughput and real-time operations while Hadoop continues to be used for long-running OLAP workloads."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Accelerate Existing Hadoop Deployments
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Accelerate the performance of Hadoop-based applications with Ignite <br />
              as a high-performance data access layer
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/ignite2/2.17.0/quick-start/java.html" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--hadoop"
            src="/img/usecases/hadoop/hero-image.svg"
            alt="hero-image"
          />
        </div>
      </section>

      <section className="container" style={{ padding: '2rem 0' }}>
        <div style={{
          background: '#f0f7ff',
          border: '1px solid #0066cc',
          borderRadius: '8px',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#0066cc"/>
          </svg>
          <div>
            <strong style={{ color: '#0066cc' }}>Apache Ignite 2.x Use Case</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#333' }}>
              This use case applies to Apache Ignite 2.x. For Ignite 3, see the <Link to="/use-cases/">new use cases</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <div className="doop2__block">
            <h2 className="compute2__h2">Benefits Of Using Apache Ignite</h2>
            <div className="compute2__grid flexi hub2__grid doop2__grid">
              <div className="compute2item hub2item doop2__item">
                <div className="compute2-points__item fz20"></div>
                <div className="compute2item__block">
                  <h3 className="fz20 compute2item__title">Real-time analytics</h3>
                  <p className="compute2__text base2__text">
                    Apache Ignite enables real-time analytics across Apache Hadoop operational and historical data silos.
                  </p>
                </div>
              </div>

              <div className="compute2item hub2item doop2__item">
                <div className="compute2-points__item fz20"></div>
                <div className="compute2item__block">
                  <h3 className="fz20 compute2item__title">Low-latency and high-throughput operations</h3>
                  <p className="compute2__text base2__text">
                    Ignite enables low-latency and high-throughput access while Hadoop continues to be used for long-running
                    OLAP workloads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doop3">
        <div className="container">
          <div className="doop3__block flexi">
            <div className="doop3__info">
              <h2 className="doop3__h2 h5">How Does Apache Ignite Acceleration Work?</h2>
              <p className="doop3__text">
                To achieve the performance acceleration of Hadoop-based systems, deploy Ignite as a separate distributed
                storage that maintains the data sets required for your low-latency operations or real-time reports
              </p>
              <h2 className="doop3__h2 h5">There are 3 basic steps:</h2>
              <div className="fz20 doop3__number">01</div>
              <p className="doop3__subtext">
                Depending on the data volume and available memory capacity, you can enable
                <a href="/arch/native-persistence" target="_blank">
                  {' '}
                  Ignite native persistence
                </a>{' '}
                to store historical data sets on disk while dedicating a memory space for operational records.
              </p>
              <p className="doop3__subtext pt-1">
                You can continue to use Hadoop as storage for less frequently-used data or for long-running and ad-hoc
                analytical queries.
              </p>
              <div className="fz20 doop3__number">02</div>
              <p className="doop3__subtext">
                Your applications and services should use Ignite native APIs to process the data residing in the in-memory
                cluster. Ignite provides SQL, compute (aka. map-reduce), and machine learning APIs for various data processing
                needs.
              </p>
              <div className="fz20 doop3__number">03</div>
              <p className="doop3__subtext">
                Consider using Apache Spark DataFrames APIs if an application needs to run federated or cross-database queries
                across Ignite and Hadoop clusters.
              </p>
              <p className="doop3__subtext pt-1">
                Ignite is{' '}
                <a href="/use-cases/spark-acceleration" target="_blank">
                  integrated with Spark
                </a>
                , which natively supports Hive/Hadoop. Cross-database queries should be considered only for a limited number
                of scenarios when neither Ignite nor Hadoop contains the entire data set.
              </p>
            </div>
            <img className="doop3__image" src="/img/usecases/hadoop/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="doop4">
        <div className="container">
          <h2 className="doop4__h2 h4">How Can You Split Data And Operations Between Ignite And Hadoop?</h2>
          <div className="doop4__block">
            <div className="doop4__item">
              <p className="doop4__text">
                Use Apache Ignite for tasks that require:
                <br /> – Low-latency response time <span className="doop4__grey">(microseconds, milliseconds, seconds)</span>
              </p>
              <p className="doop4__text pt-1">
                – High-throughput operations{' '}
                <span className="doop4__grey">(thousands and millions of operations per second)</span> <br />– Real-time
                processing
              </p>
            </div>
            <div className="doop4__item">
              <p className="doop4__text">
                Continue using Apache Hadoop for: <br />— High-latency operations{' '}
                <span className="doop4__grey">(dozens of seconds, minutes, hours)</span>
                <br />— Batch processing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="doop5">
        <div className="container">
          <h2 className="h4 doop5__h2">5 Steps To Implement The Architecture In Practice</h2>
          <div className="doop5__blocks">
            <div className="doop5__block">
              <div className="doop5__item post1">
                <div className="doop5__number h4">01</div>
                <div className="doop5__title">Download and install Apache Ignite to your system.</div>
              </div>
              <div className="doop5__item post2">
                <div className="doop5__number h4">02</div>
                <div className="doop5__title">Select a list of operations for Ignite.</div>
                <p className="doop5__text pt-2">
                  The best operations are those that require low-latency response time, high-throughput, and real-time
                  analytics.
                </p>
              </div>
              <div className="doop5__item post3">
                <div className="doop5__number h4">03</div>
                <p className="doop5__text">
                  <span className="doop5__title">Consider enabling Ignite native persistence,</span> or use Ignite as a pure
                  in-memory cache, or in-memory data grid that persists changes to Hadoop or another external database.
                </p>
              </div>
              <div className="doop5__item post4">
                <div className="doop5__number h4">04</div>
                <div className="doop5__title">Update your applications</div>
                <p className="doop5__text pt-2">
                  Ensure they use Ignite native APIs to process Ignite data and Spark for federated queries.
                </p>
              </div>
              <div className="doop5__item post5">
                <div className="doop5__number h4">05</div>
                <div className="doop5__titleend">
                  If you need to replicate changes between Ignite and Hadoop clusters, use existing change-data-capture
                  solutions:
                </div>
                <div className="doop5__part flexi">
                  <p>
                    Debezium
                    <br />
                    Kafka
                  </p>
                  <p className="doop5__middle">
                    GridGain Data Lake Accelerator
                    <br />
                    Oracle GoldenGate
                  </p>
                  <p className="doop5__end">
                    To write-through changes to Hadoop directly,
                    <br /> implement{' '}
                    <a href="https://ignite.apache.org/docs/ignite2/latest/persistence/external-storage" target="_blank">
                      Ignite's CacheStore
                    </a>{' '}
                    interface.
                  </p>
                </div>
              </div>
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
              Discover our quick start guide and build your first
              <br /> application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">Read the Apache Spark acceleration article</p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/spark-acceleration">
              Apache Spark Acceleration Article
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
