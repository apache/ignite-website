import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';
import '../../css/datagrid.css';
import '../../css/hadoop.css';
import '../../css/key-value-store.css';

export default function KeyValueStore(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Key-Value Store / Database - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite is the best and fastest key-value database that stores data both in memory and on disk with support for key-value, SQL, ACID transactions, compute, and machine learning APIs."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/key-value-store.html" />
        <meta property="og:title" content="Key-Value Store / Database - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/key-value-store.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite is the best and fastest key-value database that stores data both in memory and on disk with support for key-value, SQL, ACID transactions, compute, and machine learning APIs."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Key-Value Store
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">Distributed store for high-performance data access</div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--key"
            src="/img/usecases/key-value/hero-image.svg"
            alt="hero-image"
          />
        </div>
      </section>

      <section className="key1">
        <div className="container">
          <div className="hub1__block key1__block flexi">
            <div className="hub1__info">
              <h2 className="h5 hub1__title">What is a key-value store?</h2>
              <p className="hub1__text">
                A key-value store is a data storage software. It stores, retrieves, and manages data as a set of unique
                keys. Each one is associated with one and only one value.
              </p>
              <h2 className="h5 hub1__title hub1__titleend">How a key-value store works</h2>
              <p className="hub1__text">
                A key-value store, or a key-value database, holds a collection of data records in various fields. The
                data records have unique keys to retrieve and modify records quickly.
              </p>
            </div>
            <img className="hub1__image" src="/img/usecases/key-value/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <div className="doop2__block">
            <h2 className="compute2__h2">Benefits Of Key-Value Store</h2>
            <div className="compute2__grid flexi hub2__grid doop2__grid">
              <div className="compute2item hub2item doop2__item">
                <div className="compute2-points__item fz20"></div>
                <div className="compute2item__block">
                  <h3 className="fz20 compute2item__title">Low-latency access and high-performance</h3>
                  <p className="compute2__text base2__text">
                    Thanks to their design, key-value stores can perform many more operations in a given amount of time
                    than other database models
                  </p>
                </div>
              </div>

              <div className="compute2item hub2item doop2__item">
                <div className="compute2-points__item fz20"></div>
                <div className="compute2item__block">
                  <h3 className="fz20 compute2item__title">Horizontal scalability</h3>
                  <p className="compute2__text base2__text">
                    Key-value stores can keep and process large volumes of data by scaling horizontally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="key4">
        <div className="container">
          <div className="grid4__blocks flexi">
            <h2 className="grid4__h2 h5 key4__h2">
              With Apache Ignite, a key-value store can cache data in memory and persist it on disk
            </h2>
            <div className="grid4__block">
              <p className="grid4__text">
                The <a href="/arch/native-persistence.html">native persistence</a> feature eliminates the time-consuming
                cache warm-up step as well as the data reloading phase from external databases.
              </p>
              <p className="grid4__text pt-1">
                Since native persistence always keeps a full copy of data on disk, you are free to cache a subset of
                records in memory.
              </p>
              <p className="grid4__text pt-1">
                If a required data record is missing in memory, then Ignite reads it from disk automatically, regardless
                of the API you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="key5">
        <div className="container">
          <h2 className="grid5__h2 key5__h2 h4">
            Key-value store is used when <strong>speed and scale are top priorities</strong>
          </h2>
          <div className="grid5__blocks flexi">
            <article className="native2item grid5__item">
              <h3 className="key5__h3">User sessions caching</h3>
              <p className="grid5__text key5__text">
                Key-value stores are used to accumulate user session details in web applications to personalize content.
              </p>
            </article>
            <article className="native2item grid5__item">
              <h3 className="key5__h3">360 Customer View</h3>
              <p className="grid5__text key5__text">
                Applications can collect user preferences and behavioral patterns to offer better services. The records
                can be stored in a key-value database to enable fast customer data lookups.
              </p>
            </article>
            <article className="native2item grid5__item">
              <h3 className="key5__h3">Back-end systems acceleration</h3>
              <p className="grid5__text key5__text">
                Developers use key-value stores to cache specific records that don't require a regular update. This
                reduces the load on core back-end systems and databases.
              </p>
            </article>
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
              href="https://ignite.apache.org/docs/latest/"
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
            <p className="nativebotblock__text">Check out Ignite key-value APIs article</p>
            <a className="nativebotblock__link arrowlink" href="/features/key-value-apis.html">
              Key-Value APIs Article
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
