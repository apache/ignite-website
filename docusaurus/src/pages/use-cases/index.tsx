import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/usecases.css';

export default function UseCasesIndex(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Use-Cases - Apache Ignite</title>
        <meta
          name="description"
          content="The most common use-cases for Apache Ignite. Learn more how companies deploy Apache Ignite in production."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases.html" />
        <meta property="og:title" content="Use-Cases - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="The most common use-cases for Apache Ignite. Learn more how companies deploy Apache Ignite in production."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Use Cases</h1>
            <div className="innerhero__descr pt-2 h5">
              With plenty of capabilities, Apache Ignite finds its route in many use-cases, ranging from a basic
              distributed cache, distributed database for hybrid transactional/analytical processing, to a sophisticated
              digital integration hub.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--usecase"
            src="/img/usecases/head-bg.svg"
            alt="Apache Ignite Use Cases"
          />
        </div>
      </section>

      <section className="usecase2" id="usecase2">
        <div className="container">
          <p className="blockcapslead">Widespread use-cases</p>
          <header className="blockheader flexi">
            <h2 className="h4 blockheader__left">
              Application Acceleration
              <br /> And Scale Out
            </h2>
            <div className="blockheader__right fz20">
              <p>
                Accelerate your existing applications by 100x or more by using in-memory computing. There are several
                deployment options.
              </p>
            </div>
          </header>
          <div className="usecase2__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">In-Memory Cache</h4>
              <div className="cardsimple__text">
                Cache data with extra capabilities: query with SQL and update atomically by using ACID transactions.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/in-memory-cache.html" className="cardsimple__button button button--shadow">
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">In-Memory Data Grid</h4>
              <div className="cardsimple__text">
                Use an advanced read-through / write-through cache that is deployed on top of one or several databases.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/in-memory-data-grid.html" className="cardsimple__button button button--shadow">
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">In-Memory Database</h4>
              <div className="cardsimple__text">
                Use Apache Ignite as an ultra-fast and horizontally scalable in-memory database.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/in-memory-database.html" className="cardsimple__button button button--shadow">
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">High-Performance Computing</h4>
              <div className="cardsimple__text cardsimple__text--long">
                Execute kilobyte-size custom code over petabytes of data. Turn your Ignite database into a distributed
                supercomputer for low-latency calculations, complex analytics, and machine learning.
              </div>
              <div className="cardsimple__bottom">
                <a
                  href="/use-cases/high-performance-computing.html"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usecase3" id="database">
        <div className="container">
          <div className="blockheader usecase3__block flexi">
            <h2 className="h4 blockheader__left">Distributed Database For HTAP Workloads</h2>
            <div className="blockheader__right fz20">
              <p>
                Build modern applications that support transactional and analytical workloads by using Ignite as a
                database that scales beyond available memory capacity.
              </p>
              <p id="digitalhub">
                Ignite allocates memory for your hot data and goes to disk whenever applications query cold records.
              </p>
            </div>
          </div>
          <div className="blockheader usecase3__block flexi">
            <h2 className="h4 blockheader__left">Digital Integration Hub</h2>
            <div className="blockheader__right fz20">
              <p>
                An advanced platform architecture that aggregates multiple back-end systems and databases into a
                low-latency and shared data store.
              </p>
              <a href="/use-cases/digital-integration-hub.html" className="blockheader__button button button--shadow">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="usecase4">
        <div className="container">
          <p className="blockcapslead">Other use-cases</p>
          <div className="usecase4__wrap">
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Key-Value Store</h4>
              <div className="cardsimple__text">
                Access the cluster with key-value requests or take advantage of APIs available exclusively in Ignite.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/key-value-store.html" className="cardsimple__button button">
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Apache Spark Performance Acceleration</h4>
              <div className="cardsimple__text">
                Accelerate the performance of Apache Spark® by keeping data in a shared Apache Ignite® in-memory
                cluster.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/spark-acceleration.html" className="cardsimple__button button">
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <h4 className="cardsimple__title">Apache Hadoop Performance Acceleration</h4>
              <div className="cardsimple__text">
                Get real-time analytics across Apache™ Hadoop® operational and historical data silos.
              </div>
              <div className="cardsimple__bottom">
                <a href="/use-cases/hadoop-acceleration.html" className="cardsimple__button button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
