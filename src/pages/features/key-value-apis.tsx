import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/key-value-api.css';

export default function KeyValueAPIs(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Distributed Key-Value APIs - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite as a distributed key-value store is supported for different caching techniques. Ignite key-value APIs allow to create database key-value tables on-chain and increase processing performance."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Distributed Key-Value APIs - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite as a distributed key-value store is supported for different caching techniques. Ignite key-value APIs allow to create database key-value tables on-chain and increase processing performance."
        />
      </Head>

      <section className="innerhero innerhero--keyvalue">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-5">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">
              Distributed
              <br />
              Key-Value APIs
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Query your distributed data in the fastest way possible
              <br />
              with key-value APIs
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--keyvalue"
            src="/img/features/key-value/hero.svg"
            alt="Distributed Key-Value APIs"
          />
        </div>
      </section>

      <section className="keyvalue1 container flexi">
        <div className="keyvalue1__left">
          <h2 className="capstext">Key-Value APIs Overview</h2>
          <div className="keyvaluetext pt-5">
            <p>
              Every record in Ignite is stored as a key-value pair. All the records are distributed evenly across
              the cluster nodes. Your key-value queries are directed automatically to the nodes that store requested
              data. This is how Ignite utilizes all the given memory, disk, and CPU resources.
            </p>
            <p>Key-value APIs are supported by all existing Ignite client libraries:</p>
          </div>
          <div className="keyvalue1__libs pt-5">
            <p className="h5 leyvalue__lang">
              Java <small>(implements JSR-107 specification known as JCache)</small>
            </p>
            <p className="h5 leyvalue__lang">.NET</p>
            <p className="h5 leyvalue__lang">Python</p>
            <p className="h5 leyvalue__lang">Node.JS</p>
            <p className="h5 leyvalue__lang">Your language</p>
          </div>
        </div>
        <div className="keyvalue1__right">
          <div className="keyvalue1__picwrap picwrap">
            <img src="/img/features/key-value/key-value-api-pic.svg" alt="" className="keyvalue1__pic" />
          </div>
        </div>
      </section>

      <section className="keyvalueplank container">
        <div className="keyvalueplank__inner">
          Apache Ignite key-value APIs provide additional capabilities such as&nbsp;<strong>automatic synchronization</strong> with external databases, <strong>near caching</strong> and <strong>ACID transactions.</strong>
        </div>
      </section>

      <section className="keyvalue2 container flexi">
        <div className="keyvalue2__left">
          <h3 className="keyvalue__title">
            Automatic Synchronization With External
            <br />
            Databases To Keep A Consistent Copy Of Data
          </h3>
          <div className="keyvaluetext pt-2 pb-5">
            <p>
              Two synchronization strategies are available in Apache Ignite:
              <br />
              write-through/behind and read-through.
            </p>
          </div>
          <dl className="keyvalue2__box pb-2">
            <dt>Write-through and write-behind capabilities</dt>
            <dd className="pt-2">
              Ignite can automatically write-through or&nbsp;write-behind all the changes to&nbsp;an&nbsp;external
              database for every key-value request issued by&nbsp;your applications.
            </dd>
          </dl>
          <dl className="keyvalue2__box">
            <dt>Read-through capabilities</dt>
            <dd>
              Read-through means that Ignite can automatically load data from an&nbsp;external database
              if&nbsp;a&nbsp;record is&nbsp;missing in&nbsp;memory.
            </dd>
          </dl>
        </div>
        <div className="keyvalue2__right">
          <div className="keyvalue2__picwrap picwrap">
            <img src="/img/features/key-value/key-value-api-2.svg" alt="" className="keyvalue2__pic" />
          </div>
        </div>
      </section>

      <section className="keyvalue3 container flexi">
        <div className="keyvalue3__right">
          <h3 className="keyvalue__title">
            Near Cache To Process Your Requests In&nbsp;Microseconds
          </h3>
          <div className="keyvaluetext pt-2 pb-5">
            <p>
              A near cache is a local client-side cache that stores the most frequently
              <br />
              used data on the application end.
            </p>
          </div>
          <div className="keyvalue__title">How it works</div>
          <div className="keyvaluetext pt-2 pb-5">
            <p>
              It is applied to applications that require a consistent response time of a few{' '}
              <strong>microseconds.</strong> Ignite automatically invalidates and updates the near cache.
            </p>
            <p>
              Whenever the primary copy of&nbsp;a&nbsp;record gets updated on&nbsp;a&nbsp;server node, Ignite
              propagates the change to&nbsp;all the nodes that store the record's backup copy, as&nbsp;well
              as&nbsp;to&nbsp;the applications that keep the record's copy in&nbsp;their near caches.
            </p>
          </div>
        </div>
        <div className="keyvalue3__left">
          <div className="keyvalue3__picwrap picwrap">
            <img src="/img/features/key-value/key-value-api-3.svg" alt="" className="keyvalue3__pic" />
            <div className="keyvalue3__picdescr">
              <p>1. Call to the near cache</p>
              <p>
                2. Call to the Ignite cluster <span>(if a record is not found in the near cache)</span>
              </p>
              <p>
                3. Read-through from the external database
                <span>(if the record is not in the Ignite cluster yet)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="keyvalue4 container flexi pb-1">
        <div className="keyvalue4__left">
          <h3 className="keyvalue__title">
            ACID Transactions To Update Your Distributed Records Consistently
          </h3>
          <div className="keyvaluetext pt-2 pb-5">
            <p>
              Apache Ignite key-value APIs are fully transactional, which means that data can be&nbsp;updated
              consistently and reliably.
            </p>
          </div>
          <div className="keyvalue__title">How it works</div>
          <div className="keyvaluetext pt-2 pb-5">
            <p>
              An&nbsp;Ignite transaction can update multiple records from different tables stored on&nbsp;different
              cluster nodes. Ignite can even span a&nbsp;transaction to&nbsp;an&nbsp;underlying relational database.
              Ignite implements{' '}
              <a href="/features/acid-transactions.html">
                two-phase-commit protocol to&nbsp;ensure data consistency at&nbsp;scale.
              </a>
            </p>
          </div>
        </div>
        <div className="keyvalue4__right">
          <div className="keyvalue4__picwrap picwrap">
            <img src="/img/features/key-value/key-value-api-4.svg" alt="" className="keyvalue4__pic" />
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
              Create your first application using
              <br />
              Ignite key-value APIs
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/key-value-api/basic-cache-operations"
              target="_blank"
              rel="noreferrer"
            >
              Using Key-Value APIs
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check out how Apache Ignite can be configured
              <br />
              and used as a standard key-value store
            </p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/key-value-store.html">
              Key-Value Store
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
