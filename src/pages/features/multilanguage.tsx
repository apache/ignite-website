import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/compute-apis.css';
import '../../css/multilanguage.css';

export default function Multilanguage(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Multi-Language Support - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides native clients for Java, .NET, C++, Python, and other languages. Consistent APIs across languages with partition-aware routing built in. Access through SQL, JDBC, or language-specific APIs."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/multilanguage" />
        <meta property="og:title" content="Multi-Language Support - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/multilanguage" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides native clients for Java, .NET, C++, Python, and other languages. Consistent APIs across languages with partition-aware routing built in. Access through SQL, JDBC, or language-specific APIs."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innherhero__lang">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">
              Multi-language
              <br /> Support
            </h1>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/3.1.0/getting-started/quick-start" target="_blank" rel="noreferrer">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--lang"
            src="/img/features/multilanguage/multi.svg"
            alt="Distributed In-Memory Cache"
          />
        </div>
      </section>

      <section className="lang">
        <div className="container">
          <div className="lang-block flexi">
            <p className="lang__text">
              <span>
                Apache Ignite provides native clients for Java, .NET, C++, and Python. Each client implements the same core capabilities including SQL queries, Table API operations, transactions, and compute job submission. Consistent APIs across languages simplify polyglot architectures.
                <br />
                <br />
              </span>
              <span>
                All clients include partition-aware routing. Operations route directly to nodes holding the data. No coordinator overhead. This single-hop access delivers consistent performance regardless of client language. The system calculates partition ownership from keys automatically.
                <br />
                <br />
              </span>
              <span>
                The Java client provides the complete feature set including embedded SQL execution, compute APIs, and schema management. Other language clients support SQL queries through JDBC, Table API operations, transactions, and basic schema operations. Each client handles connection pooling and automatic failover.
                <br />
                <br />
              </span>
              <span>
                JDBC and ODBC drivers enable integration with existing SQL tools and BI platforms. Standard database connectivity works with reporting tools, ETL systems, and data integration frameworks. This compatibility simplifies adoption for SQL-oriented workloads.
              </span>
            </p>
            <div className="lang__image">
              <div className="lang__one flexi">
                <img className="lang__img lang__img1" src="/img/features/multilanguage/one.svg" alt="one" />
                <img className="lang__img" src="/img/features/multilanguage/two.svg" alt="two" />
              </div>
              <div className="lang__two flexi">
                <img className="lang__img" src="/img/features/multilanguage/three.png" alt="three" />
                <img className="lang__img lang__img4" src="/img/features/multilanguage/four.png" alt="four" />
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
              Learn about Java, .NET, C++, and Python clients with partition-aware routing and connection pooling
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/docs/3.1.0/develop/ignite-clients/"
              target="_blank"
              rel="noreferrer"
            >
              Client Documentation
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
