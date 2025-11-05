import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/features.css';

export default function Features(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Product Features - Apache Ignite Components</title>
        <meta
          name="description"
          content="Apache Ignite set of components. Learn more about Apache Ignite product features on our website."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/" />
        <meta property="og:title" content="Product Features - Apache Ignite Components" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite set of components. Learn more about Apache Ignite product features on our website."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Features</h1>
            <div className="innerhero__descr pt-2 h5">
              Scale across memory and disk with no compromises.
              <br />
              Process your data with SQL, compute, real-time streaming and other APIs.
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--features"
            src="/img/features/hero-bg.svg"
            alt="Apache Ignite Features"
          />
        </div>
      </section>

      <section className="features2" id="features2">
        <div className="container">
          <h2 className="h3 features2__title">
            Apache Ignite comprises the following
            <br />
            set of components
          </h2>
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Distributed Multi-Tiered Storage</h2>
            <div className="blockheader__right fz20">
              <p>
                State-of-the-art storage engine that performs at in-memory
                <br />
                speed and stores data durably at unlimited scale
              </p>
            </div>
          </header>

          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/01-multi-tier-storage.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Multi-Tier Storage</h3>
              <div className="cardsimple__text cardsimple__text--long">
                Chose a storage mode for your performance and capacity needs: in-memory, in-memory +&nbsp;external
                database, or in-memory + native persistence.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/arch/multi-tier-storage" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/02-native-persistence.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Native Persistence</h3>
              <div className="cardsimple__text">
                Turn Ignite into a database with capacity and durability characteristics of traditional disk-based
                databases.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/arch/native-persistence" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features3">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Essential Developer APIs</h2>
            <div className="blockheader__right fz20">
              <p>
                Start with Ignite seamlessly using the APIs you are already
                <br />
                experienced with
              </p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/03-distributed-SQL.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Distributed SQL</h3>
              <div className="cardsimple__text">
                Interact with Ignite as with a regular SQL database using JDBC, ODBC drivers, or native SQL APIs.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/features/sql" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/04-ACID-transactions.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">ACID Transactions</h3>
              <div className="cardsimple__text cardsimple__text--long">
                Operate in a strongly consistent mode with full support for distributed ACID transactions
              </div>
              <div className="cardsimple__bottom">
                <Link to="/features/acid-transactions" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/05-key-value-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Key Value APIs</h3>
              <div className="cardsimple__text">Use simple key-value requests for fast data look-ups and updates.</div>
              <div className="cardsimple__bottom">
                <Link to="/features/key-value-apis" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features4">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">High-Performance Computing APIs</h2>
            <div className="blockheader__right fz20">
              <p>Execute kilobyte-size custom code over petabytes of data</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/06-compute-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Compute APIs</h3>
              <div className="cardsimple__text">
                Execute data-intensive and compute-intensive logic over your distributed cluster.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/features/compute-apis" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/07-machine-learning.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Machine Learning</h3>
              <div className="cardsimple__text">
                Use built-in algorithms to train and execute machine and deep learning models at scale.
              </div>
              <div className="cardsimple__bottom">
                <Link to="/features/machinelearning" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/08-services.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Services</h3>
              <div className="cardsimple__text">Create and deploy custom micro-service on your cluster nodes.</div>
              <div className="cardsimple__bottom">
                <Link to="/features/service-apis" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features5">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Real-Time Streaming APIs</h2>
            <div className="blockheader__right fz20">
              <p>
                Implement event-driven architectures seamlessly
                <br />
                with the following Ignite product features:
              </p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/09-streaming.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Streaming</h3>
              <div className="cardsimple__text">Stream and process your data in a scalable and fault-tolerant fashion.</div>
              <div className="cardsimple__bottom">
                <Link to="/features/streaming" className="cardsimple__button button button--shadow">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/10-continuous-queries.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Continuous Queries</h3>
              <div className="cardsimple__text">
                Execute your custom logic in response to data changes happening across the cluster.
              </div>
              <div className="cardsimple__bottom">
                <a
                  href="https://ignite.apache.org/docs/latest/key-value-api/continuous-queries"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/11-messaging.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Messaging</h3>
              <div className="cardsimple__text">Exchange messages across the publisher-subscriber pattern.</div>
              <div className="cardsimple__bottom">
                <a href="https://ignite.apache.org/docs/latest/messaging" className="cardsimple__button button button--shadow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featureslast">
        <div className="container">
          <div className="featureslast__main">
            <div className="h4 featureslast__title pb-1">Looking For Something Else?</div>
            <div className="featureslast__descr fz20">Explore our technical documentation to discover Ignite's other features</div>
            <ul className="featureslast__links pt-4">
              <li>
                <a href="https://ignite.apache.org/docs/latest/data-structures/queue-and-set" className="arrowlink">
                  Data Structures
                </a>
              </li>
              <li>
                <a href="https://ignite.apache.org/docs/latest/clustering/clustering" className="arrowlink">
                  Clustering
                </a>
              </li>
              <li>
                <a
                  href="https://ignite.apache.org/docs/latest/extensions-and-integrations/spring/spring-boot"
                  className="arrowlink"
                >
                  Other Integrations
                </a>
              </li>
              <li>
                <Link to="/features/multilanguage" className="arrowlink">
                  Multi-Language Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
