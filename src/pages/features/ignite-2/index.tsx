import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import { useCanonicalUrl } from "@site/src/hooks/useCanonicalUrl";

import "../../../css/features.css";

export default function Ignite2FeaturesIndex(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite 2.x Features - Previous Generation</title>
        <meta
          name="description"
          content="Apache Ignite 2.x feature set. These features represent the previous generation of Apache Ignite. For current Apache Ignite capabilities, see the main features page."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:title"
          content="Apache Ignite 2.x Features - Previous Generation"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite 2.x feature set. These features represent the previous generation of Apache Ignite."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite 2.x</div>
            <h1 className="h1 innerhero__h1">Previous Generation Features</h1>
            <div className="innerhero__descr pt-2 h5">
              These features represent the Apache Ignite 2.x generation. <br />
              For current Apache Ignite capabilities, see the{" "}
              <Link to="/features">main features page</Link>.
            </div>
            <div className="innerhero__action pt-3">
              <Link className="button innerhero__button" to="/features">
                View Current Features
              </Link>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--features"
            src="/img/features/hero-bg.svg"
            alt="Apache Ignite 2.x Features"
          />
        </div>
      </section>

      <section className="container" style={{ padding: "2rem 0" }}>
        <div
          style={{
            background: "#f0f7ff",
            border: "1px solid #0066cc",
            borderRadius: "8px",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
              fill="#0066cc"
            />
          </svg>
          <div>
            <strong style={{ color: "#0066cc" }}>
              Apache Ignite 2.x Feature Archive
            </strong>
            <p style={{ margin: "0.25rem 0 0 0", color: "#333" }}>
              <strong>Apache Ignite 2.x</strong> remains a stable,
              production-ready platform with extensive features and
              integrations.
            </p>
            <p style={{ margin: "0.25rem 0 0 0", color: "#333" }}>
              {" "}
              These pages are preserved for users working with Ignite 2.x.
            </p>
            <p style={{ margin: "0.25rem 0 0 0", color: "#333" }}>
              This archive contains Apache Ignite 2.x features. For current
              Apache Ignite capabilities, see the{" "}
              <Link to="/features">main features page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="features2" id="features2">
        <div className="container">
          <header className="blockheader blockheader--spl flexi">
            <h2 className="h4 blockheader__left">Storage and Persistence</h2>
            <div className="blockheader__right fz20">
              <p>
                In-memory and persistent storage modes for Apache Ignite 2.x
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
                Choose a storage mode for your performance and capacity needs:
                in-memory, in-memory + external database, or in-memory + native
                persistence.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/multi-tier-storage"
                  className="cardsimple__button button button--shadow"
                >
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
                Turn Ignite into a database with capacity and durability
                characteristics of traditional disk-based databases.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/native-persistence"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/deployment/hero.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Clustering</h3>
              <div className="cardsimple__text">
                Distributed architecture with node discovery, data partitioning,
                and fault tolerance.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/clustering"
                  className="cardsimple__button button button--shadow"
                >
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
            <h2 className="h4 blockheader__left">Developer APIs</h2>
            <div className="blockheader__right fz20">
              <p>Essential APIs for working with Apache Ignite 2.x</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/03-distributed-SQL.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Distributed SQL</h3>
              <div className="cardsimple__text">
                Interact with Ignite as with a regular SQL database using JDBC,
                ODBC drivers, or native SQL APIs.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/sql"
                  className="cardsimple__button button button--shadow"
                >
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
                Operate in a strongly consistent mode with full support for
                distributed ACID transactions
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/acid-transactions"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/05-key-value-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Key Value APIs</h3>
              <div className="cardsimple__text">
                Use simple key-value requests for fast data look-ups and
                updates.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/key-value-apis"
                  className="cardsimple__button button button--shadow"
                >
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
            <h2 className="h4 blockheader__left">High-Performance Computing</h2>
            <div className="blockheader__right fz20">
              <p>Execute custom code over distributed datasets</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/06-compute-APIs.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Compute APIs</h3>
              <div className="cardsimple__text">
                Execute data-intensive and compute-intensive logic over your
                distributed cluster.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/compute-apis"
                  className="cardsimple__button button button--shadow"
                >
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
                Use built-in algorithms to train and execute machine and deep
                learning models at scale.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/machine-learning"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/08-services.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Services</h3>
              <div className="cardsimple__text">
                Create and deploy custom micro-services on your cluster nodes.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/service-apis"
                  className="cardsimple__button button button--shadow"
                >
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
            <h2 className="h4 blockheader__left">Real-Time Streaming</h2>
            <div className="blockheader__right fz20">
              <p>Stream and process data in real-time</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/09-streaming.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Streaming</h3>
              <div className="cardsimple__text">
                Stream and process your data in a scalable and fault-tolerant
                fashion.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/streaming"
                  className="cardsimple__button button button--shadow"
                >
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
            <h2 className="h4 blockheader__left">Operations and Tooling</h2>
            <div className="blockheader__right fz20">
              <p>Multi-language support and operational tools</p>
            </div>
          </header>
          <div className="cardswrap">
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/multilanguage/multi.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Multi-Language Support</h3>
              <div className="cardsimple__text">
                Use Apache Ignite with Java, .NET, C++, Python, and other
                programming languages.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/multilanguage"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="usecasecard cardsimple">
              <div className="cardsimple__icon">
                <img src="/img/features/tooling/herobg.svg" alt="" />
              </div>
              <h3 className="cardsimple__title">Tooling</h3>
              <div className="cardsimple__text">
                Operational tools and integrations for Apache Ignite 2.x
                deployments.
              </div>
              <div className="cardsimple__bottom">
                <Link
                  to="/features/ignite-2/tooling"
                  className="cardsimple__button button button--shadow"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featureslast">
        <div className="container">
          <div className="featureslast__main">
            <div className="h4 featureslast__title pb-1">
              Ready to Explore Current Features?
            </div>
            <div className="featureslast__descr fz20">
              Discover the latest Apache Ignite capabilities built memory-first
              for modern workloads
            </div>
            <div className="pt-4">
              <Link
                to="/features"
                className="button"
                style={{ background: "var(--blue4)", color: "#fff" }}
              >
                View Current Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
