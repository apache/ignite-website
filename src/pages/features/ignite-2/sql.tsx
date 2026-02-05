import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../../css/native-persistence.css';
import '../../../css/compute-apis.css';
import '../../../css/sql.css';

export default function SQL(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Distributed ANSI SQL Database - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite comes with an ANSI-99 compliant, horizontally scalable, and fault-tolerant SQL engine that allows you to interact with Ignite as with a regular SQL database. Ignite can function in a pure in-memory mode in which it shows the highest performance."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Distributed ANSI SQL Database - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite comes with an ANSI-99 compliant, horizontally scalable, and fault-tolerant SQL engine that allows you to interact with Ignite as with a regular SQL database. Ignite can function in a pure in-memory mode in which it shows the highest performance."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite 2.x</div>
            <h1 className="h1 innerhero__h1">Distributed ANSI SQL</h1>
            <div className="innerhero__descr pt-2 h5">
              The same SQL you've been using for years but now with
              <br /> in-memory speed and at unlimited scale
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img className="innerhero__pic innerhero__pic--sql" src="/img/features/sql/hero-image.svg" alt="sql-hero" />
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
            <strong style={{ color: '#0066cc' }}>Apache Ignite 2.x Feature</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#333' }}>
              This feature applies to Apache Ignite 2.x. For current Apache Ignite capabilities, see the <Link to="/features">main features page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="dist">
        <div className="container">
          <div className="dist__block flexi">
            <div className="dist__info">
              <h2 className="dist__h2 h4">Apache Ignite as a SQL Database</h2>
              <p className="dist__text">
                The native support for SQL let's you work with Ignite as with a standard SQL database. You can use simply
                SQL if your applications need nothing else:
              </p>
              <div className="dist__items flexi">
                <div className="dist__item">
                  <h3 className="dist__item-title">DDL commands</h3>
                  <div className="dist__item-grey dist__item-grey1 flexi">
                    <div className="dist__itemitem flexi">
                      <span className="dist__item-span">CREATE</span>
                      <span className="dist__item-span">ALTER</span>
                      <span className="dist__item-span">DROP</span>
                    </div>
                  </div>
                </div>

                <div className="dist__item">
                  <h3 className="dist__item-title">DML commands</h3>
                  <div className="dist__item-grey dist__item-grey2 flexi">
                    <div className="dist__itemitem flexi">
                      <span className="dist__item-span">SELECT</span>
                      <span className="dist__item-span">INSERT</span>
                      <span className="dist__item-span">UPDATE</span>
                    </div>
                    <div className="dist__itemitem dist__itemitem__end flexi">
                      <span className="dist__item-span">MERGE</span>
                      <span className="dist__item-span">DELETE</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="dist__h3">Apache Ignite is shipped with:</h3>
              <div className="dist__parts flexi">
                <div className="dist__part flexi">
                  <div className="compute2-points__item fz20"></div>
                  <div className="dist__part-text">JDBC driver</div>
                </div>
                <div className="dist__part flexi">
                  <div className="compute2-points__item fz20"></div>
                  <div className="dist__part-text">ODBC driver</div>
                </div>
                <div className="dist__part flexi">
                  <div className="compute2-points__item fz20"></div>
                  <div className="dist__part-text dist__part-textend flexi">
                    Built-in SQL APIs
                    <div className="dist__part-grey">
                      Available for Java, C#, C++, Python, and other programming languages
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="dist__image" src="/img/features/sql/image.svg" alt="sql-hero" />
          </div>
        </div>
      </section>

      <section className="dist1">
        <div className="container">
          <h2 className="dist1__h2 h4">Join, Group and Aggregate Distributed Data Sets</h2>
          <div className="dist1__subtext">Whether you use a two or thousand-node cluster, you can always do the following:</div>
          <div className="dist1__parts flexi">
            <div className="dist1__part">group data</div>
            <div className="dist1__part">join data</div>
            <div className="dist1__part">order data</div>
            <div className="dist1__part dist1__partend">aggregate data</div>
          </div>
          <div className="dist1__title">What is a distributed join?</div>
          <p className="dist1__text h4">
            A distributed join is a SQL statement with a join clause that combines two or more tables that have their data
            distributed across many cluster nodes.
          </p>
          <h3 className="dist1__h3 h4">Types of joins in Ignite</h3>
          <div className="dist1__blocks flexi">
            <div className="dist1__block">
              <h4 className="dist1__h4">Co-located joins</h4>
              <p className="dist1__texts">
                These are the most performant types of joins that avoid data shuffling between nodes and minimize network
                usage.
              </p>
              <p className="dist1__texts pt-1">
                This type of join is used if you join{' '}
                <a
                  className="dist1__link"
                  href="https://ignite.apache.org/docs/ignite2/latest/data-modeling/affinity-collocation"
                  target="_blank"
                  rel="noreferrer"
                >
                  partitioned and replicated tables
                </a>{' '}
                or partitioned tables that are co-located with each other.
              </p>
            </div>
            <div className="dist1__block">
              <h4 className="dist1__h4">Non-colocated joins</h4>
              <p className="dist1__texts">
                A less performant type of join that joins data of non&#8209;colocated tables. Ignite needs to shuffle data
                over the network to produce a correct result set.
              </p>
            </div>
            <div className="dist1__block">
              <h4 className="dist1__h4">Hash joins</h4>
              <p className="dist1__texts">
                Ignite supports classic hash join algorithm that is more efficient than nested loop joins for many
                scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dist2">
        <div className="container">
          <h2 className="dist2__h2 h4">Ignite SQL Engine and Multi-Tier Storage</h2>
          <p className="dist2__p">
            Depending on your storage configuration, Ignite SQL engine can query both in-memory and disk-only records
          </p>
          <div className="dist2__blocks flexi">
            <div className="dist2__block">
              <h3 className="dist2__h3">In-Memory Mode</h3>
              <p className="dist2__text dist2__text1">Ignite caches data only in memory</p>
              <details className="dist2__details">
                <summary className="dist2__active">
                  <img src="/img/features/sql/plus.svg" alt="sql-hero" />
                </summary>
                <div className="dist2__subtext">
                  <p>
                    In this mode, Ignite SQL carries out tasks as quickly as possible, as long as all the data is served
                    from memory, with no usage of the disk tier at all.
                  </p>
                </div>
              </details>
            </div>
            <div className="dist2__block">
              <h3 className="dist2__h3">
                In-Memory <br />+ Native Persistence Mode
              </h3>
              <p className="dist2__text">
                Ignite scales beyond available
                <br /> memory capacity
              </p>
              <details className="dist2__details">
                <summary className="dist2__active">
                  <img src="/img/features/sql/plus.svg" alt="sql-hero" />
                </summary>
                <div className="dist2__subtext">
                  <p>
                    Ignite persists 100% of data and indexes in the{' '}
                    <a href="/arch/native-persistence">native persistence</a> while caching as much as possible in
                    memory.
                  </p>
                  <p className="pt-1">
                    Ignite SQL engine does not require the caching of entire data set in memory to operate correctly.
                  </p>
                  <p className="pt-1">
                    If the engine finds that a record is not cached, then it will read the record from disk. Your
                    application only executes SQL queries, and Ignite gets the records from both memory and disk
                    automatically.
                  </p>
                  <p className="pt-1">
                    On cluster restarts, Ignite reads data and indexes from disk, eliminating the need for memory warm-up,
                    which significantly decreases downtime.
                  </p>
                </div>
              </details>
            </div>

            <div className="dist2__block">
              <h3 className="dist2__h3">
                In-Memory
                <br />+ External Database Mode
              </h3>
              <p className="dist2__text">
                Ignite accelerates your
                <br /> existing databases
              </p>
              <details className="dist2__details">
                <summary className="dist2__active">
                  <img src="/img/features/sql/plus.svg" alt="sql-hero" />
                </summary>
                <div className="dist2__subtext">
                  <p>
                    In this mode, the Ignite SQL engine requires caching of all the data needed for distributed queries in
                    memory, since the engine does not currently support federated queries.
                  </p>
                  <p className="pt-1">
                    If federated queries between Ignite and an external database are required, then you can consider Ignite
                    integration for Spark, where the DataFrames API can combine the data stored in Ignite and other systems.
                  </p>
                </div>
              </details>
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
              Discover more details about Apache Ignite SQL engine
              <br /> and apply it for your use-case
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/persistence/native-persistence"
              target="_blank"
              rel="noreferrer"
            >
              Memory Architecture
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Ignite SQL will become even more powerful and advanced with the release of the Apache Calcite based engine
            </p>
            <div className="dist__link">Coming in Ignite 3.0</div>
            <a
              className="nativebotblock__link arrowlink"
              href="https://cwiki.apache.org/confluence/display/IGNITE/Apache+Calcite-powered+SQL+Engine+Roadmap"
              target="_blank"
              rel="noreferrer"
            >
              New Calcite powered SQL engine
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
