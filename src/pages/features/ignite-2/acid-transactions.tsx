import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../../css/native-persistence.css';
import '../../../css/acid-transactions.css';

export default function ACIDTransactions(): JSX.Element {
  const [showWALDetails, setShowWALDetails] = useState(false);
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Distributed ACID Transactions - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite can operate in a strongly consistent mode with full support for distributed ACID transactions. Ignite is an ACID compliant storage engine which can handle possible distributed failures properly to avoid data inconsistencies cluster-wide."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Distributed ACID Transactions - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite can operate in a strongly consistent mode with full support for distributed ACID transactions. Ignite is an ACID compliant storage engine which can handle possible distributed failures properly to avoid data inconsistencies cluster-wide."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-5">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">
              Distributed ACID
              <br />
              Transactions
            </h1>
            <div className="innerhero__descr pt-4 h5">
              Classical ACID transactions that let you update distributed data
              <br />
              consistently, durably and with in-memory speed
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--acid"
            src="/img/features/acid/hero.svg"
            alt="Distributed ACID transactions"
          />
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

      <section className="acid1 container">
        <h2 className="acid1__h2 h4">
          Update multiple records from different tables that span across many cluster nodes
        </h2>
        <div className="acid1__wrap flexi">
          <div className="acid1__item">
            <div className="acid1__title fz20">Consistency</div>
            <div className="acid1__text pt-3">
              <p>
                Ignite transactional APIs are used by&nbsp;banks to&nbsp;implement payments services that transfer
                money between accounts in&nbsp;real-time.
              </p>
            </div>
          </div>
          <div className="acid1__item">
            <div className="acid1__title fz20">Durability</div>
            <div className="acid1__text pt-3">
              <p>
                Multi-tier storage persists changes durably to&nbsp;disk. Committed transactions always survive
                failures, and incomplete transactions are rolled back.
              </p>
            </div>
          </div>
          <div className="acid1__item">
            <div className="acid1__title fz20">Fault-Tolerance</div>
            <div className="acid1__text pt-3">
              <p>The transactional engine avoids inconsistencies even if your transaction fails halfway through.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="acid2 container">
        <h2 className="acid2__h2">
          To guarantee data consistency, durability and fault-tolerance,
          <br /> <strong>Ignite implements a two-phase commit protocol</strong>
        </h2>
        <div className="acid2__wrap flexi pt-5">
          <div className="acid2__main">
            <p>In distributed systems, a transaction usually spans multiple cluster nodes.</p>
            <p>
              To handle possible distributed failures properly and avoid data inconsistencies cluster-wide, a
              two-phase commit protocol (2PC) is used.
            </p>
            <h3 className="acid2__subtitle h5 pb-2">How ACID transactions work</h3>
            <p>
              Whenever the records get updated within a&nbsp;transaction, Ignite keeps the transactional state
              in&nbsp;a&nbsp;local transaction map until the changes are committed.
            </p>
            <p>
              From here, the data is&nbsp;transferred to&nbsp;the participating remote nodes. Only the nodes that
              hold primary or&nbsp;backup copies of&nbsp;the data participate in&nbsp;the transaction.
            </p>
            <p>
              If&nbsp;a&nbsp;transaction is&nbsp;mapped to&nbsp;a&nbsp;single node, then Ignite optimizes the
              transaction execution by&nbsp;switching to&nbsp;the one-phase-commit (1PC) protocol.
            </p>
          </div>
          <aside className="acid2__right">
            <img src="/img/features/acid/acid-func.svg" alt="" className="acid2__funcimg" />
          </aside>
        </div>
      </section>

      <section className="acid3 container pt-5">
        <h2 className="h4 acid3__title">
          Records are updated consistently across
          <br />
          memory and disk tiers
        </h2>
        <div className="acid3__wrap pt-5 flexi">
          <div className="acid3__col">
            <h3 className="h5 pb-2">Transactions with Ignite native persistence</h3>
            <p className="fz20 acid3__collead">
              In case of any failure you can always recover to a consistent state
            </p>
            <div className="acid3__small pt-4">
              <p>
                When native persistence mode is&nbsp;enabled and Apache Ignite is&nbsp;used as&nbsp;a&nbsp;database
                that scales beyond available memory capacity, the distributed transactions update data across memory
                and disk in&nbsp;a&nbsp;consistent way.
              </p>
              <p>
                All the changes stay durable, because they are written to&nbsp;the write-ahead log (WAL) files.
                It&nbsp;guarantees data consistency even if&nbsp;the cluster or&nbsp;individual nodes go&nbsp;down
                in&nbsp;the middle of&nbsp;a&nbsp;transaction.
              </p>
            </div>
            <a
              className="acid3__detlink"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowWALDetails(!showWALDetails);
              }}
            >
              WAL in details
            </a>
            {showWALDetails && (
              <div className="acid3__detwrap" data-hidebox="acidbox">
                <div className="acid3__detmore">
                  <button
                    className="acid3__close"
                    onClick={() => setShowWALDetails(false)}
                  >
                    <img src="/img/features/acid/icon-cross.svg" alt="" />
                  </button>
                  <p>
                    The purpose of&nbsp;the WAL is&nbsp;to&nbsp;propagate updates to&nbsp;the disk in&nbsp;the
                    append-only mode, which is&nbsp;the fastest way to&nbsp;persist data to&nbsp;disk.
                  </p>
                  <p className="pt-1">
                    The WAL provides a&nbsp;recovery mechanism for failure scenarios when a&nbsp;single node
                    or&nbsp;the whole cluster goes down. A&nbsp;cluster can always be&nbsp;recovered to&nbsp;the
                    latest successfully committed transaction.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="acid3__col">
            <h3 className="h5 pb-2">Transactions with external databases</h3>
            <p className="fz20 acid3__collead">
              Your transactions will be updated both in&nbsp;the&nbsp;external database and in Apache Ignite
            </p>
            <div className="acid3__small pt-4">
              <p>
                When Apache Ignite is&nbsp;used as&nbsp;a&nbsp;caching layer for an&nbsp;external database, such
                as&nbsp;RDBMS, transactions span the cached data in&nbsp;Ignite as&nbsp;well as&nbsp;the data
                persisted in&nbsp;a&nbsp;database supporting transactional APIs.
              </p>
              <p>
                For instance, if&nbsp;a&nbsp;relational database is&nbsp;configured as&nbsp;a&nbsp;disk tier, Ignite
                writes the transactional changes to&nbsp;the database before sending a&nbsp;commit message
                to&nbsp;participating cluster nodes.
              </p>
              <p>
                This way, if&nbsp;a&nbsp;transaction fails at&nbsp;the database level, Ignite can still send the
                rollback message to&nbsp;the cluster nodes, keeping the data consistent across memory and disk tiers.
              </p>
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
              Create your transactional application
              <br />
              with Apache Ignite
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/key-value-api/transactions"
              target="_blank"
              rel="noreferrer"
            >
              Performing ACID Transactions
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to&nbsp;Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Ignite&nbsp;3.0 advances its replication and transactional components with the support
              of&nbsp;the <strong>Raft consensus algorithm</strong>
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://cwiki.apache.org/confluence/display/IGNITE/IEP-61%3A+Common+Replication+Infrastructure"
              target="_blank"
              rel="noreferrer"
            >
              Ignite 3.0 and Raft Details
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
