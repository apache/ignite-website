import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../../css/native-persistence.css';
import '../../../css/compute-apis.css';
import '../../../css/streaming.css';

export default function Streaming(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Apache Ignite Streaming, Real-Time Data Processing</title>
        <meta
          name="description"
          content="Apache Ignite data loading, streaming, and real-time processing capabilities allow to inject large amounts of data into an Ignite cluster in a scalable and fault-tolerant way. Learn more here."
        />
        <link rel="canonical" href="https://ignite.apache.org/features/streaming.html" />
        <meta property="og:title" content="Apache Ignite Streaming, Real-Time Data Processing" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/features/streaming.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite data loading, streaming, and real-time processing capabilities allow to inject large amounts of data into an Ignite cluster in a scalable and fault-tolerant way. Learn more here."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite 2.x</div>
            <h1 className="h1 innerhero__h1">
              Real-Time Streaming
              <br /> APIs
            </h1>
            <div className="innerhero__descr pt-2 h5">Ingest streams of data and build event-driven architectures</div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--stream"
            src="/img/features/streaming/hero-image.svg"
            alt="stream-hero"
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

      <section className="stream1">
        <div className="container">
          <div className="stream1__block flexi">
            <p className="stream1__p h4">
              With Apache Ignite you can<strong> load and stream</strong> large finite — or never-ending — volumes of
              data<strong> in a scalable and fault-tolerant way</strong> into the cluster.
            </p>
            <div className="stream1__part">
              <img className="stream1__img" src="/img/features/streaming/speed.png" alt="speed" />
              <p className="stream1__text">
                The rate at which data can be injected into Ignite{' '}
                <strong>exceeds millions of events per second </strong>on a moderately sized cluster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stream2">
        <div className="container">
          <div className="stream2__block flexi">
            <div className="stream2__content">
              <h2 className="stream2__h2 h4">Ignite Core Streaming APIs</h2>
              <h3 className="stream2__h3">What are those APIs?</h3>
              <p className="stream2__text">
                With Ignite core streaming APIs such as IgniteDataStreamer you get basic streaming capabilities out of
                the box. You can stream and transform your data originating from multiple custom sources.
                <br />
                <br />
                Ignite data streamers automatically buffer the data and group it into batches for better performance,
                and send it in parallel to multiple nodes.
              </p>
            </div>
            <img className="stream2__img" src="/img/features/streaming/sql.svg" alt="sql" />
          </div>
        </div>
      </section>

      <section className="stream3">
        <div className="container">
          <h2 className="stream3__h2 h4">IgniteDataStreamer is used for:</h2>
          <div className="stream3__blocks flexi">
            <div className="stream3__block">
              <div className="stream3__part flexi">
                <div className="compute2-points__item fz20"></div>
                <p className="stream3__text">Data loading</p>
              </div>
              <div className="stream3__part stream3__end flexi ml-04">
                <div className="compute2-points__item fz20"></div>
                <p className="stream3__text">Real-time data streaming</p>
              </div>
            </div>
            <div className="stream3__block">
              <div className="stream3__part stream3__first flexi">
                <div className="compute2-points__item fz20"></div>
                <p className="stream3__text">
                  Achieving advanced streaming capabilities by integrating with streaming frameworks:
                </p>
              </div>
              <div className="stream3__item stream3__itemstart flexi">
                <img className="stream3__img" src="/img/features/streaming/one.png" alt="one" />
                <img className="stream3__img" src="/img/features/streaming/two.svg" alt="two" />
                <img className="stream3__img" src="/img/features/streaming/three.png" alt="three" />
              </div>
              <div className="stream3__item flexi">
                <img className="stream3__img" src="/img/features/streaming/four.svg" alt="four" />
                <img className="stream3__img" src="/img/features/streaming/five.svg" alt="five" />
                <img className="stream3__img" src="/img/features/streaming/six.svg" alt="six" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stream4">
        <div className="container">
          <h2 className="stream4__h2 h4">Event-Driven Architecture Basic Principles</h2>
          <p className="stream4__p">
            In many cases, streams of data we receive comprise events that we have to react to.
            <br />
            <span className="stream4__greys">With Apache Ignite, you can:</span>
          </p>
          <div className="stream4__block flexi">
            <div className="stream4__part">
              <div className="stream4__number">01</div>
              <div className="stream4__text">
                Enrich and transform your data <br />
                on the fly.
              </div>
            </div>
            <div className="stream4__part stream4__parttwo">
              <div className="stream4__number">02</div>
              <div className="stream4__text">
                Execute any calculations in response
                <br /> to an event on the cluster-node side.
              </div>
            </div>
            <div className="stream4__part">
              <div className="stream4__number">03</div>
              <div className="stream4__text">React to your streams of data on the application side with continuous queries.</div>
              <div className="stream4__grey">
                If streamed data represents an event, your application-side logic can react to it after receiving a
                notification from continuous queries.
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
            <p className="nativebotblock__text">Start coding with Ignite Streaming APIs</p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/data-streaming"
              target="_blank"
              rel="noreferrer"
            >
              Ignite Streaming APIs
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Explore our out-of-the-box integrations with Kafka, Flink, MQTT and other advanced streaming technologies
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/extensions-and-integrations/streaming/kafka-streamer"
              target="_blank"
              rel="noreferrer"
            >
              Extensions And Integrations Guide
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
