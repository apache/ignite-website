import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../../css/native-persistence.css';
import '../../../css/compute-apis.css';

export default function ComputeAPIs(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Compute APIs - Data-Intensive Computing</title>
        <meta
          name="description"
          content="Apache Ignite compute APIs allow you to perform computations at high speeds. Achieve high performance, low latency, and linear scalability in data-intensive computing."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite Compute APIs - Data-Intensive Computing" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite compute APIs allow you to perform computations at high speeds. Achieve high performance, low latency, and linear scalability in data-intensive computing."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite 2.x</div>
            <h1 className="h1 innerhero__h1">Compute APIs</h1>
            <div className="innerhero__descr pt-2 h5">
              Develop custom tasks in contemporary languages
              <br /> and get the logic executed over a distributed cluster
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/ignite2/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--computeapis"
            src="/img/features/compute-apis/compute-hero.svg"
            alt="Distributed In-Memory Cache"
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

      <section className="compute1 container">
        <h2 className="compute1__h2 h4">Execute Data-Intensive And Compute-Intensive Tasks At High Speed</h2>
        <div className="compute1__deskr">Get an order-of-magnitude performance increase for custom complex logic:</div>
        <div className="compute1__block flexi">
          <div className="compute1__item">
            <img src="/img/features/compute-apis/icon-one.svg" alt="" className="compute1__icon" />
            <p className="compute1__text">
              By minimizing or avoiding network
              <br /> utilization
            </p>
          </div>
          <div className="compute1__item">
            <img src="/img/features/compute-apis/icon-two.svg" alt="" className="compute1__icon" />
            <p className="compute1__text">
              By executing the logic straight on the
              <br />
              cluster nodes
            </p>
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <h2 className="compute2__h2">Benefits Of Apache Ignite Compute APIs</h2>
          <div className="compute2__grid">
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">
                  Broadcast or execute
                  <br /> on specific nodes
                </h3>
                <p className="compute2__text">
                  – Broadcast your tasks to use all
                  <br /> the CPUs of your distributed cluster.
                </p>
                <p className="compute2__text">
                  – Or schedule the tasks for execution on a subset of the nodes based
                  <br /> on custom criteria
                </p>
              </div>
            </div>
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Load balance your logic</h3>
                <p className="compute2__text">
                  If some of the nodes are overutilized, Ignite can automatically load-balance your computations to
                  other nodes.
                </p>
                <p className="compute2__text">
                  There are three ways to enable that:
                  <br /> – Round-robin load balancing <br />– Random and weighted load balancing
                  <br /> – Job stealing.
                </p>
              </div>
            </div>
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">
                  Execute computations
                  <br /> in a fault-tolerant way
                </h3>
                <p className="compute2__text">
                  Some computations might take minutes or hours to complete, e.g.{' '}
                  <em> drug discovery or logistics simulations.</em>
                </p>
                <p className="compute2__text">
                  You don't need to start from scratch if the execution fails in the middle. Restart a calculation from
                  the point
                  <br /> of failure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nativecode container jsTabWrap">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="h4 blockheader__left">
            Forget about PLSQL, use
            <br /> the language you code with daily
          </h2>
          <div className="blockheader__right fz20">
            <p>
              Create tasks in the language of your choice. You don't need
              <br /> to learn PLSQL any more.
            </p>
          </div>
        </header>
        <div className="nativecode__tabs">
          <div className="nativecode__tab active">
            <pre className="nativecode__codebox">
              <code className="java">{`// Broadcast the task to server nodes only.
IgniteCompute compute = ignite.compute(ignite.cluster().forServers());

// Each remote server node will execute the logic of the task/lambda below.
compute.broadcast(() -> System.out.println(
"Hello Node: " + ignite.cluster().localNode().id()));`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="compute3 container">
        <h2 className="compute2__h2">Example Of Logic Building</h2>
        <h3 className="compute3__h2 h4">
          Execute the logic in place and eliminate network impact on the performance of the calculation
        </h3>
        <p className="compute3__text">
          Imagine that a winter storm is about to hit a highly-populated city. As a telecommunication company, you have
          to send a text message to 20 million residents warning them about the blizzard.
        </p>
        <div className="compute4 flexi">
          <div className="compute4__block compute4__block--bad">
            <img className="compute4__icon" src="/img/features/icon-check-err.svg" alt="" />
            <p className="pt-3">
              With the client-server approach, the company would read 20 million records from a database to an
              application that executes some logic before finally sending a message to the residents.
            </p>
          </div>
          <div className="compute4__block">
            <img className="compute4__icon" src="/img/features/icon-check-ok.svg" alt="" />
            <p className="pt-3">
              A much more efficient approach would be to broadcast this logic to the cluster nodes that keep data about
              the city's residents. The logic gets executed on those nodes only and text messages are sent from there.
            </p>
          </div>
        </div>

        <div className="jsTabWrap">
          <div className="nativecode__tabs">
            <div className="nativecode__tab active">
              <pre className="nativecode__codebox">
                <code className="java">{`Ignite ignite = ...

// NewYork ID.
long newYorkId = 2;

// Send the logic to the cluster node that stores NewYork and all its inhabitants.
ignite.compute().affinityRun("City", newYorkId, new IgniteRunnable() {

  @IgniteInstanceResource
  Ignite ignite;

  @Override
  public void run() {
    // Get access to the Person cache.
    IgniteCache<BinaryObject, BinaryObject> people = ignite.cache("Person").withKeepBinary();

    ScanQuery<BinaryObject, BinaryObject> query = new ScanQuery<BinaryObject, BinaryObject>();

    try (QueryCursor<Cache.Entry<BinaryObject, BinaryObject>> cursor = people.query(query)) {
      // Iteration over the local cluster node data using the scan query.
      for (Cache.Entry<BinaryObject, BinaryObject> entry : cursor) {
        BinaryObject personKey = entry.getKey();

        // Pick NewYorkers only.
        if (personKey.<Long>field("CITY_ID") == newYorkId) {
          person = entry.getValue();

          // Send the warning message to the person.
        }
      }
    }
  }
}`}</code>
              </pre>
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
            <p className="nativebotblock__text">Start coding distributed computing APIs</p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/key-value-api/transactions"
              target="_blank"
              rel="noreferrer"
            >
              Performing Distributed Computing
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Learn more about high-performance computing use cases and see how it works in practice
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="/use-cases/high-performance-computing"
              target="_blank"
              rel="noreferrer"
            >
              High-Performance Computing Use-Cases
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
