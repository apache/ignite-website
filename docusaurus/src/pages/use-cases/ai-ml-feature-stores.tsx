import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/digital-hub.css';

export default function AIMLFeatureStores(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>AI/ML Feature Stores - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite 3 eliminates the real-time-or-accurate trade-off for ML feature stores. Zero training/serving skew with low-latency feature retrieval through MVCC snapshots and memory-first architecture."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/ai-ml-feature-stores.html" />
        <meta property="og:title" content="AI/ML Feature Stores - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/ai-ml-feature-stores.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite 3 eliminates the real-time-or-accurate trade-off for ML feature stores. Zero training/serving skew with low-latency feature retrieval."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main innerhero__main--long">
            <h1 className="h1 innerhero__h1">
              AI/ML Feature Stores
              <br />
              <span className="with-apache">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Real-time OR Accurate? Choose Both. <br />
              Zero training/serving skew with low-latency feature retrieval
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index" style={{ background: '#fff', color: 'var(--ai-blue)' }}>
                Start Coding
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor1 container">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="capstext pb-3">The Trade-off Problem</h2>
          <div className="inmememor1__text">
            <p>
              Traditional ML feature stores force an impossible choice: batch-computed features for training (accurate
              but stale), or cached features for serving (fast but risk training/serving skew). Models trained on
              batch features fail when serving features diverge.
            </p>
            <p className="pt-3">
              Training/serving skew degrades model accuracy in production. Batch feature pipelines introduce latency
              that makes real-time predictions impossible. Cached features create eventual consistency risks where
              models see different feature values during training versus serving.
            </p>
          </div>
        </header>
      </section>

      <section className="inmememor-adv">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4">How Apache Ignite 3 Solves This</h2>
            <div className="blockheader__right fz20">
              Ignite 3 provides point-in-time consistency across training and serving through MVCC snapshots
            </div>
          </header>
          <div className="inmememor-adv__wrap">
            <div className="inmememor-adv__item">
              <h3 className="h4">Zero Training/Serving Skew</h3>
              <div className="inmememor-adv__text">
                MVCC snapshot isolation enables training jobs to read feature values at specific points in time while serving endpoints read current features with strong consistency. Guarantees training and serving see the same feature semantics. No eventual consistency windows that degrade model accuracy.
              </div>
            </div>
            <div className="inmememor-adv__item">
              <h3 className="h4">Low-Latency Inference</h3>
              <div className="inmememor-adv__text">
                Memory-first architecture delivers low-latency feature retrieval for real-time inference. RecordView API provides direct partition-aware access without batch preprocessing. Table schema management supports adding features without breaking models. SQL access enables feature exploration during development.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inmememor2 container">
        <h2 className="h4">Architecture Pattern</h2>
        <p className="fz20 pt-5">
          <strong>Feature Store With Point-In-Time Consistency</strong>
        </p>
        <div className="inmememor2__work flexi pt-2">
          <div className="inmememor2__left">
            <p>
              <em>
                Training pipelines read feature snapshots at specific timestamps. Serving endpoints read current
                features with strong consistency. Eliminates training/serving skew through MVCC.
              </em>
            </p>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Integration Pattern:</strong> Feature engineering pipelines write computed features to Ignite 3
              tables. Training jobs specify snapshot timestamps for historical consistency. Serving endpoints read
              current features through RecordView API for real-time inference.
            </p>
            <p>
              <strong>Consistency Model:</strong> Snapshot isolation ensures training reads consistent feature values
              at point-in-time. Consensus replication ensures serving reads strongly consistent current values. No eventual
              consistency windows between feature writes and reads.
            </p>
            <p>
              <strong>Performance Characteristics:</strong> Memory-first storage delivers low-latency feature retrieval
              for online inference. Partition-aware routing minimizes feature lookup overhead. Batch training jobs read
              historical snapshots without impacting serving latency.
            </p>
          </div>
        </div>

        <p className="fz20 pt-5">
          <strong>When This Pattern Works</strong>
        </p>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <p>This architecture pattern is best for:</p>
            <ul className="dashlist pt-1">
              <li>Real-time ML inference requiring low-latency feature access</li>
              <li>Systems where training/serving skew degrades model accuracy</li>
              <li>Feature stores needing point-in-time consistency for training</li>
              <li>Applications requiring feature versioning and schema evolution</li>
            </ul>
          </div>
          <div className="inmememor2__right">
            <p>
              <strong>Example Use Cases:</strong>
            </p>
            <ul className="pt-1">
              <li>
                <strong>Recommendation Engines:</strong> User and item features with consistent snapshots for model
                training and low-latency serving
              </li>
              <li>
                <strong>Fraud Detection:</strong> Transaction features computed in real-time with historical consistency
                for model retraining
              </li>
              <li>
                <strong>Personalization:</strong> User profile features updated continuously while maintaining
                point-in-time consistency for A/B tests
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="inmememor3 container pt-5">
        <h2 className="h4">Key Benefits</h2>
        <div className="inmememor3__botwrap flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Zero Training/Serving Skew</h3>
            <p>
              MVCC snapshots guarantee training sees consistent feature values at point-in-time. Serving reads current
              features with strong consistency. Models trained on historical snapshots match serving semantics. No
              eventual consistency risks that degrade model accuracy.
            </p>
            <h3 className="fz20 pt-4">Low-Latency Inference</h3>
            <p>
              Memory-first storage delivers low-latency feature retrieval for online inference. Partition-aware routing
              minimizes lookup overhead. RecordView API provides direct access without query parsing. Enables real-time
              ML predictions without batch preprocessing.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Feature Evolution</h3>
            <p>
              Table schema management supports adding features without breaking models. SQL access enables feature
              exploration during development. Version control for feature definitions. Schema evolution doesn't require
              data migration.
            </p>
            <h3 className="fz20 pt-4">Operational Simplicity</h3>
            <p>
              Single platform replaces separate feature computation, storage, and serving layers. Eliminates batch
              export pipelines for training data. No cache warming or TTL management. Reduces operational complexity of
              ML infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="inmememor2 container pt-5">
        <h2 className="h4">Important Limitations</h2>
        <div className="inmememor2__work flexi pt-3">
          <div className="inmememor2__left">
            <h3 className="fz20">Vector Search Not Supported</h3>
            <p>
              Ignite 3 does not provide vector similarity search or nearest-neighbor lookups. For embedding-based
              retrieval (semantic search, similarity recommendations), use specialized vector databases.
            </p>
          </div>
          <div className="inmememor2__right">
            <h3 className="fz20">Best For Structured Features</h3>
            <p>
              This pattern works best for structured tabular features (user attributes, aggregations, computed metrics).
              For unstructured data (embeddings, images, text), consider specialized ML infrastructure.
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
              href="https://ignite.apache.org/docs/latest/#quick-start-guides"
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
            <p className="nativebotblock__text">Learn about other Ignite 3 use cases</p>
            <Link className="nativebotblock__link arrowlink" to="/use-cases/">
              Use Cases Overview
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
