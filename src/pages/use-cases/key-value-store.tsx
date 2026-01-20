import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';
import '../../css/key-value-store.css';

export default function KeyValueStore(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Key-Value Store - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite provides key-value access patterns across both versions. Ignite 2 uses Cache API for primary key-value operations. Ignite 3 provides Table API with RecordView and KeyValueView for key-value access patterns."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Key-Value Store - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite provides key-value access patterns across both versions."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Key-Value Store
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Direct key-value access patterns across Ignite 2 and Ignite 3
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="/docs/ignite2/2.17.0/quick-start/java.html" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
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
          <h2 className="capstext pb-3">Key-Value Access Patterns</h2>
          <div className="inmememor1__text">
            <p>
              Key-value access is a major pattern in Ignite 2 (Cache API) and a supporting pattern in Ignite 3 (Table
              API with KeyValueView). Both versions provide direct key-based access without SQL overhead, but use
              different APIs reflecting their architectural evolution.
            </p>
            <p className="pt-3">
              Ignite 2 provides the Cache API (IgniteCache) as the primary interface for key-value operations. Ignite 3
              provides the Table API with RecordView and KeyValueView for key-value access patterns. Both support
              partition-aware routing for low-latency operations.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">API Evolution</h2>
            <div className="blockheader__right fz20">
              Ignite 3 Table API provides key-value access through RecordView and KeyValueView
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Ignite 2: Cache API</h3>
              <div className="inmememor-adv__text">
                Ignite 2 uses the Cache API (IgniteCache) for key-value operations. Supports get, put, remove operations
                with ACID guarantees. Partition-aware routing enables direct access to data without coordinator overhead.
                Colocation support through Affinity Key annotation.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Ignite 3: Table API</h3>
              <div className="inmememor-adv__text">
                Ignite 3 provides Table API with RecordView for tuple-based access and KeyValueView for key-value
                patterns. Schema-driven design with compile-time type safety. Partition-aware routing through
                colocation keys defined in table schema. Supports same ACID guarantees with improved API design.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Side-By-Side Comparison</h2>
        <p className="fz20 pt-5">
          <strong>Simple Get/Put Operations</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <h3 className="fz20">Ignite 2: Cache API</h3>
            <CodeBlock language="java">
{`// Get cache instance
IgniteCache<Integer, Person> cache =
    ignite.cache("person");

// Put operation
cache.put(1, new Person("John", 30));

// Get operation
Person person = cache.get(1);

// Remove operation
cache.remove(1);`}
            </CodeBlock>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Ignite 3: Table API</h3>
            <CodeBlock language="java">
{`// Get KeyValueView from table
KeyValueView<Integer, Person> kvView =
    table.keyValueView(Integer.class, Person.class);

// Put operation
kvView.put(null, 1, new Person("John", 30));

// Get operation
Person person = kvView.get(null, 1);

// Remove operation
kvView.remove(null, 1);`}
            </CodeBlock>
          </div>
        </div>

        <p className="fz20 pt-5">
          <strong>Batch Operations</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Ignite 2: Cache API</h3>
            <CodeBlock language="java">
{`// Batch put
Map<Integer, Person> batch = new HashMap<>();
batch.put(1, new Person("John", 30));
batch.put(2, new Person("Jane", 25));
cache.putAll(batch);

// Batch get
Set<Integer> keys = Set.of(1, 2);
Map<Integer, Person> results = cache.getAll(keys);`}
            </CodeBlock>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Ignite 3: Table API</h3>
            <CodeBlock language="java">
{`// Batch put
Map<Integer, Person> batch = Map.of(
    1, new Person("John", 30),
    2, new Person("Jane", 25)
);
kvView.putAll(null, batch);

// Batch get
Collection<Integer> keys = List.of(1, 2);
Map<Integer, Person> results = kvView.getAll(null, keys);`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Common Use Cases</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Session Management</h3>
            <p>
              Store user session data with direct key-based access. Both versions support partition-aware routing for
              low-latency session retrieval. Any-node access eliminates sticky sessions. ACID guarantees ensure
              consistency across replicas.
            </p>
            <h3 className="fz20 pt-4">Reference Data Caching</h3>
            <p>
              Cache frequently accessed reference data (product catalogs, configuration settings) with key-value
              patterns. Direct partition access delivers low-latency lookups. Colocation support enables local joins
              with related data.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">User Profile Lookups</h3>
            <p>
              Store user profiles with userId as key for direct access patterns. Partition-aware routing ensures
              consistent latency across cluster. Both versions support atomic updates to profile data. Memory-first
              architecture delivers low-latency reads.
            </p>
            <h3 className="fz20 pt-4">Shopping Cart State</h3>
            <p>
              Maintain shopping cart state with sessionId as key. Direct key-based access for cart operations without
              SQL overhead. ACID guarantees ensure cart consistency during checkout. Automatic failover prevents cart
              data loss.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Key Differences</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">API Design</h3>
            <p>
              Ignite 2 Cache API provides a simpler interface focused on key-value operations. Ignite 3 Table API
              requires table schema definition upfront but provides compile-time type safety. RecordView offers
              tuple-based access while KeyValueView provides key-value patterns. Both support same performance
              characteristics.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Schema Management</h3>
            <p>
              Ignite 2 Cache API supports dynamic cache creation without schema definition. Ignite 3 requires table
              schema definition using SQL DDL before accessing KeyValueView. Schema evolution supported in both
              versions. Ignite 3 schema-driven design enables better query optimization.
            </p>
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
              href="https://ignite.apache.org/docs/ignite2/latest/#quick-start-guides"
              target="_blank"
              rel="noopener noreferrer"
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
