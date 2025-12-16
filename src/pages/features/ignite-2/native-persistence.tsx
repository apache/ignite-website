import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../../css/native-persistence.css';

export default function NativePersistence(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Native Persistence - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite native persistence is a distributed, ACID, and SQL-compliant disk-based store. It let Ignite store more data on disk than it can cache in memory and to enable fast cluster restarts."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Native Persistence - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite native persistence is a distributed, ACID, and SQL-compliant disk-based store. It let Ignite store more data on disk than it can cache in memory and to enable fast cluster restarts."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite 2.x</div>
            <h1 className="h1 innerhero__h1">Native Persistence</h1>
            <div className="innerhero__descr pt-2 h5">
              Scale beyond available memory capacity <br />
              and skip memory warm-ups on restarts
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--native"
            src="/img/features/native-header.svg"
            alt="Native Persistence"
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

      <section className="native1 container flexi">
        <div className="native1__block native1__block--bad">
          <img className="native1__icon" src="/img/features/smile-doesnt-have.svg" alt="" />
          <div className="native1__title fz20 pt-1x">
            Usually, in-memory caches and databases provide limited persistence capabilities.
          </div>
          <p className="pt-2">
            For instance, some solutions create a backup copy of <br />
            the in-memory data purely for restart purposes.
          </p>
        </div>
        <div className="native1__block">
          <img className="native1__icon" src="/img/features/smile-done.svg" alt="" />
          <div className="native1__title fz20 pt-1x">
            Ignite persistence doesn't have any limitations. <br />
            Our native persistence behaves like a classic <br />
            disk-based database.
          </div>
        </div>
      </section>

      <section className="native2 container">
        <div className="native2__grid">
          <article className="native2item">
            <h3 className="fz20 native2item__title">
              Scale beyond memory <br />
              capacity
            </h3>
            <p className="pt-1x">
              100% of data is always stored on disk. You decide how much memory to allocate to your data.
            </p>
          </article>
          <article className="native2item">
            <h3 className="fz20 native2item__title">
              Just seconds needed <br />
              for recovery
            </h3>
            <p className="pt-1x">
              Ignite becomes operational from disk instantaneously. There is no need to wait for the data to get
              preloaded on restarts.
            </p>
          </article>
          <article className="native2item">
            <h3 className="fz20 native2item__title">
              Query in-memory <br />
              and on-disk data
            </h3>
            <p className="pt-1x">
              If any record is missing in memory, then Ignite reads it from disk. This is supported for all the APIs
              including SQL.
            </p>
          </article>
        </div>
      </section>

      <section className="native-howwork container">
        <div className="native-howwork__wrap flexi">
          <div className="native-howwork__left">
            <h3 className="h5">How it works</h3>
            <div className="native-howwork__text pt-1">
              <p>
                The native persistence functions as a distributed, ACID, and SQL-compliant disk-based store. It
                integrates into the Ignite{' '}
                <a href="/features/multi-tier-storage.html">multi-tier storage</a> as a disk tier.
              </p>
              <p className="pt-1">
                When the native persistence is enabled, Ignite stores a superset of data on disk and caches as much as
                it can in memory.
              </p>
            </div>
          </div>
          <div className="native-howwork__right">
            <p>For example</p>
            <p className="pt-1x">
              If your application needs to store 200 records in an Ignite cluster and the memory capacity allows caching
              only 150 records, then all 200 will be stored on disk, out of which 150 will be served from memory while
              the rest 50 records from disk whenever the application requests them.
            </p>
          </div>
        </div>
      </section>

      <section className="native-points container">
        <h2 className="h4">
          Checkpointing And Write-Ahead Logging <br />
          Ensure Durability And Consistency Of Data
        </h2>
        <div className="native-points__grid pt-5">
          <div className="native-points__item fz20">
            <p>Committed transactions always survive failures</p>
          </div>
          <div className="native-points__item fz20">
            <p>The cluster can always be recovered to the latest successfully committed transaction</p>
          </div>
        </div>
      </section>

      <section className="native-steps">
        <div className="container">
          <h2 className="h4">
            Three-Step Process To Update Your Data <br />
            At In-Memory Speed But Not Losing A Bit
          </h2>
          <img className="native-steps__pic" src="/img/features/native-stepspic.svg" alt="" />
          <div className="native-steps__grid">
            <article className="nativestepitem">
              <i className="fz20 pb-1x">01</i>
              <div className="nativestepitem__text">
                <p>
                  As soon as the update comes from the application side, a record is updated in memory. Then, the change
                  is added{' '}
                  <a
                    href="https://ignite.apache.org/docs/latest/persistence/native-persistence.html#write-ahead-log"
                    target="_blank"
                    rel="noreferrer"
                  >
                    to the write-ahead log (WAL).
                  </a>
                </p>
                <p>
                  The purpose is to propagate updates to disk in the fastest way possible and provide a consistent
                  recovery mechanism that remediates full cluster failures.
                </p>
              </div>
            </article>
            <article className="nativestepitem">
              <i className="fz20 pb-1x">02</i>
              <div className="nativestepitem__text">
                <p>As the WAL grows, it periodically gets checkpointed to the main storage.</p>
                <p>
                  <a
                    href="https://ignite.apache.org/docs/latest/persistence/native-persistence.html#checkpointing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Checkpointing
                  </a>{' '}
                  is the process of copying dirty pages from the memory tier to the partition files on disk.
                </p>
                <p className="nativestepitem__small">
                  A dirty page is a page that has been updated in memory and appended to the WAL, but has not yet been
                  written to the respective partition file on disk.
                </p>
              </div>
            </article>
            <article className="nativestepitem">
              <i className="fz20 pb-1x">03</i>
              <div className="nativestepitem__text">
                <p>
                  After a while, the information about updates in WAL can be removed, compressed or moved to archive.
                </p>
                <p>So you can reuse your disk space.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="nativecode container jsTabWrap">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="h4 blockheader__left">You Decide Which Data To Persist</h2>
          <div className="blockheader__right fz20">
            <p>
              Toggle a single configuration setting to turn a cluster into a database <br />
              that scales across memory and disk
            </p>
          </div>
        </header>
        <div className="nativecode__tabctrls flexi">
          <a href="#" data-tablink="nativeTabXML" className="nativecode__link active">
            XML
          </a>
          <a href="#" data-tablink="nativeTabJava" className="nativecode__link">
            Java
          </a>
          <a href="#" data-tablink="nativeTabNET" className="nativecode__link">
            C#/.NET
          </a>
        </div>
        <div className="nativecode__tabs">
          <div className="nativecode__tab active" data-tab="nativeTabXML">
            <pre className="nativecode__codebox">
              <code className="xml">{`<bean class="org.apache.ignite.configuration.IgniteConfiguration">
    <property name="dataStorageConfiguration">
        <bean class="org.apache.ignite.configuration.DataStorageConfiguration">
            <property name="defaultDataRegionConfiguration">
                <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                    <property name="persistenceEnabled" value="true"/>
                </bean>
            </property>
        </bean>
    </property>
</bean>`}</code>
            </pre>
          </div>
          <div className="nativecode__tab" data-tab="nativeTabJava">
            <pre className="nativecode__codebox">
              <code className="java">{`IgniteConfiguration cfg = new IgniteConfiguration();

DataStorageConfiguration storageCfg = new DataStorageConfiguration();

// Enable Ignite Persistence
storageCfg.getDefaultDataRegionConfiguration().setPersistenceEnabled(true);

// Using the new storage configuration
cfg.setDataStorageConfiguration(storageCfg);`}</code>
            </pre>
          </div>
          <div className="nativecode__tab" data-tab="nativeTabNET">
            <pre className="nativecode__codebox">
              <code className="csharp">{`var cfg = new IgniteConfiguration
{
    DataStorageConfiguration = new DataStorageConfiguration
    {
        DefaultDataRegionConfiguration = new DataRegionConfiguration
        {
            Name = "Default_Region",
            PersistenceEnabled = true
        }
    }
};`}</code>
            </pre>
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
              Discover more details about native persistence <br />
              and configure it for your use-case
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/persistence/native-persistence"
              target="_blank"
              rel="noreferrer"
            >
              Native Persistence Usage and Configuration
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check out the details of native persistence <br />
              implementation,{' '}
              <a
                href="https://www.youtube.com/watch?v=6Yg5QW-XFVc&list=PLMc7NR20hA-I2EfyXeaSRHY5dRFtK_NF0&index=6"
                target="_blank"
                rel="noreferrer"
              >
                or watch a video
              </a>
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://cwiki.apache.org/confluence/display/IGNITE/Ignite+Persistent+Store+-+under+the+hood"
              target="_blank"
              rel="noreferrer"
            >
              Native Persistence Implementation Details
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
