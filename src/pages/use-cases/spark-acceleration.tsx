import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';
import '../../css/spark.css';

export default function SparkAcceleration(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Spark Performance Acceleration - Distributed Cache, In-Memory Computing</title>
        <meta
          name="description"
          content="Ignite integrates with Apache Spark to accelerate the performance of Spark applications and APIs by keeping data in a shared in-memory cluster."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:title"
          content="Apache Spark Performance Acceleration - Distributed Cache, In-Memory Computing"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Ignite integrates with Apache Spark to accelerate the performance of Spark applications and APIs by keeping data in a shared in-memory cluster."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Accelerate Apache Spark Applications
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Minimize data shuffling over the network with the Apache
              <br /> Ignite implementation of RDD and Dataframe APIs
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--spark"
            src="/img/usecases/spark/hero-image.svg"
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

      <section className="spark1">
        <div className="container">
          <h2 className="h5 spark1__h2">How Does Ignite Accelerate Spark Applications?</h2>
          <div className="spark1__block">
            <div className="spark1__item">
              <h3 className="spark1__h3 fz20">Horizontally scalable and shared in-memory layer</h3>
              <p className="spark1__text">
                Ignite is designed to store data sets in memory across a cluster of nodes, reducing latency of Spark
                operations that usually need to pull date from disk-based systems.
              </p>
            </div>
            <div className="spark1__item">
              <h3 className="spark1__h3 fz20">Minimal data shuffling over the network</h3>
              <p className="spark1__text">
                Ignite tries to minimize data shuffling over the network between its store and Spark applications by running
                certain Spark tasks, produced by RDDs or DataFrames APIs in-place on Ignite nodes.
              </p>
            </div>
            <div className="spark1__item">
              <h3 className="spark1__h3 fz20">Extra performance boost with native Ignite APIs</h3>
              <p className="spark1__text">
                Use native Ignite APIs such as SQL from Spark applications directly and eliminate data shuffling completely
                between Spark and Ignite.
              </p>
            </div>
          </div>
          <img className="spark1__image" src="/img/usecases/spark/image.svg" alt="image" />
        </div>
      </section>

      <section className="spark2">
        <div className="container">
          <h2 className="h5 spark2__h2">Ignite Shared RDDs</h2>
          <div className="spark2__block">
            <div className="spark2__item">
              <p className="spark2__text">
                Apache Ignite provides an implementation of the Spark RDD, which allows any data and state to be shared in
                memory as RDDs across Spark jobs.
              </p>
              <p className="spark2__text pt-2">
                The Ignite RDD provides a shared, mutable view of the data stored in Ignite caches across different Spark
                jobs, workers, or applications.
              </p>
            </div>
            <div className="spark2__item">
              <p className="spark2__text">
                The Ignite RDD is implemented as a view over a distributed Ignite table (aka. cache). It can be deployed with
                an Ignite node either within the Spark job executing process, on a Spark worker, or in a separate Ignite
                cluster.
              </p>
              <p className="spark2__text pt-2">
                This means that depending on the chosen deployment mode, the shared state may either exist only during the
                lifespan of a Spark application (embedded mode), or it may out-survive the Spark application (standalone
                mode).
              </p>
            </div>
          </div>
          <h2 className="h5 spark2__h2">Ignite DataFrames</h2>
          <div className="spark2__block">
            <div className="spark2__item">
              <p className="spark2__text">
                The Apache Spark DataFrame API introduced the concept of a schema to describe the data, allowing Spark to
                manage the schema and organize the data into a tabular format.
              </p>
              <p className="spark2__text pt-2">
                To put it simply, a DataFrame is a distributed collection of data organized into named columns. Conceptually,
                it is the equivalent of a table in a relational database. It allows Spark to leverage the Catalyst query
                optimizer to produce much more efficient query execution plans in comparison to RDDs, which are collections of
                elements partitioned across the nodes of the cluster.
              </p>
            </div>
            <div className="spark2__item">
              <p className="spark2__text">
                Ignite supports DataFrame APIs, allowing Spark to write to and read from Ignite through that interface.
              </p>
              <p className="spark2__text pt-1">
                Furthermore, Ignite analyzes execution plans produced by Spark's Catalyst engine and can execute parts of the
                plan on Ignite nodes directly, which will reduce data shuffling and consequently make your SparkSQL perform
                better.
              </p>
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
            <p className="nativebotblock__text">
              Using Hadoop with Spark? See how Ignite accelerates Hadoop-based deployments
            </p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/hadoop-acceleration">
              Apache Hadoop Acceleration Article
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
