import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/digital-hub.css';

export default function DigitalIntegrationHub(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Digital Integration Hub - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite functions as a low-latency and shared store of the digital integration hub architecture that caches and persists data sets scattered across many disjointed back-end databases and systems."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/digital-integration-hub.html" />
        <meta property="og:title" content="Digital Integration Hub - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/digital-integration-hub.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite functions as a low-latency and shared store of the digital integration hub architecture that caches and persists data sets scattered across many disjointed back-end databases and systems."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__mainhub">
            <h1 className="h1 innerhero__h1">
              Digital Integration Hub
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Build new types of applications that require real-time access
              <br /> to data scattered across disparate data sources
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--hub"
            src="/img/usecases/digital-hub/hero-image.svg"
            alt="hero-image"
          />
        </div>
      </section>

      <section className="hub1">
        <div className="container">
          <h2 className="compute2__h2">Digital Integration Hub Overview</h2>
          <div className="hub1__block flexi">
            <div className="hub1__info">
              <h3 className="h5 hub1__title">What is a digital integration hub?</h3>
              <p className="hub1__text">
                A digital integration hub (DIH) is an advanced platform architecture that aggregates multiple back-end systems
                and databases into a low-latency and shared data store.
              </p>
              <p className="pt-1">
                The store caches and persists data sets scattered across many disjointed back-end databases and makes them
                available to your applications through high-performance APIs.
              </p>
              <h3 className="h5 hub1__title hub1__titleend">How digital integration hub works</h3>
              <p className="hub1__text">
                Applications access Ignite via an API service layer and experience substantial performance improvements by
                requesting data from only the Ignite distributed store.
              </p>
            </div>
            <img className="hub1__image" src="/img/usecases/digital-hub/image.svg" alt="image" />
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <h2 className="compute2__h2">Benefits Of Using Apache Ignite as a Digital Integration Hub</h2>
          <div className="compute2__grid flexi hub2__grid">
            <div className="compute2item hub2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">
                  Advanced architecture that aggregates data
                  <br /> from multiple back-end data sources
                </h3>
                <p className="compute2__text hub2__text">
                  No need to clutter the applications with logic accessing numerous data stores.
                </p>
              </div>
            </div>

            <div className="compute2item hub2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">
                  Unified data access layer for new types
                  <br /> of applications and services
                </h3>
                <p className="compute2__text hub2__text">
                  Have applications accessing a single low-latency store for hybrid operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hub3">
        <div className="container">
          <h2 className="h4">Digital Integration Hub Synchronization Techniques</h2>
          <p className="hub3__subtext">
            Ignite, as a high-performance data store, can be synchronized with the back-end databases via:
          </p>
          <div className="hub3__parts flexi">
            <div className="hub3__part flexi">
              <div className="compute2-points__item fz20"></div>
              <div className="hub3__item">Streaming</div>
            </div>
            <div className="hub3__part flexi">
              <div className="compute2-points__item fz20"></div>
              <div className="hub3__item">Event-based</div>
            </div>
            <div className="hub3__part flexi">
              <div className="compute2-points__item fz20"></div>
              <div className="hub3__item">Change data capture (CDC)</div>
            </div>
            <div className="hub3__part flexi">
              <div className="compute2-points__item fz20"></div>
              <div className="hub3__item">And other techniques</div>
            </div>
          </div>
          <div className="hub3__blocks flexi">
            <div className="hub3__block">
              <p className="hub3__text">
                <strong>For uni-directional synchronization</strong> between an Ignite cluster
                <br /> and an external store, Ignite provides the CacheStore interface.
              </p>
              <p className="hub3__text pt-1">
                This interface allows Ignite to write-through or write-behind all the changes to the backend-systems
                automatically.
              </p>
              <p className="hub3__text pt-1">
                It also includes transactions. Ignite coordinates and commits a transaction across its in-memory cluster as
                well as an external transactional database.
              </p>
            </div>
            <div className="hub3__block">
              <p className="hub3__text">
                <strong>For bi-directional synchronization,</strong> you can consider various streaming, CDC, and event-based
                technologies, such as: Kafka, Spark, Debezium and others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hub4">
        <div className="container">
          <h2 className="hub4__h2 h4">
            Why Do Businesses Need
            <br /> Digital Integration Hub Solutions?
          </h2>
          <div className="hub4__blocks flexi">
            <p className="hub4__subtext h5">
              To create new types of applications that can query data from disperse data sources.
            </p>
            <p className="hub4__grey h5">DIH is a contemporary way to complete this challenging task.</p>
          </div>
          <div className="hub4__numbers flexi">
            <div className="hub4__number">
              <div className="hub4__num h5">01</div>
              <p className="hub4__text">Accumulate data from dozens of data sources</p>
            </div>
            <div className="hub4__number">
              <div className="hub4__num h5">02</div>
              <p className="hub4__text hub4__textall">Keep data in a shared and low-latency store</p>
            </div>
            <div className="hub4__number">
              <div className="hub4__num h5">03</div>
              <p className="hub4__text hub4__textall">Get data synchronized with back-end systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hub5">
        <div className="container">
          <h2 className="compute2__h2">Apache Ignite User Stories</h2>
          <div className="highcases__two">
            <div className="hub5__twowrap flexi pt-5">
              <div className="hub5__item">
                <div className="comvideo__txt--white hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=EdFOKJIjRSg&feature=emb_imp_woyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/digital-hub/one-video.png" alt="24 Hour Fitness video" />
                  </a>
                </div>
                <div className="h4 hub5__title">24 Hour Fitness</div>
                <p className="hub5__text">
                  implements a Digital Integration Hub to offload API calls and enable new data access patterns.
                </p>
              </div>
              <div className="hub5__item">
                <div className="comvideo__txt--black comvideo__txthub hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=g1FcrOPXWyg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/digital-hub/two-video.png" alt="Banco do Brasil video" />
                  </a>
                </div>
                <div className="h4 hub5__title">Banco do Brasil</div>
                <p className="hub5__text">uses digital integration hub capabilities to develop the omnichannel Horus platform.</p>
              </div>
            </div>
            <div className="hub5__twowrap flexi pt-5">
              <div className="hub5__item">
                <div className="comvideo__txt--white hub5__video">
                  <a
                    href="https://www.youtube.com/watch?v=3FFexcYIpmA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comvideo__screen"
                  >
                    <img src="/img/usecases/digital-hub/three-video.png" alt="IBM video" />
                  </a>
                </div>
                <div className="h4 hub5__title">IBM</div>
                <p className="hub5__text">
                  launches the Z Digital Integration Hub built on Apache Ignite to enable real-time business agility for
                  organizations.
                </p>
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
            <p className="nativebotblock__text">Run our digital integration hub sample application</p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://github.com/GridGain-Demos/gridgain-dih-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download The Sample Project
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
