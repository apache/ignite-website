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
        <title>Multi-language Support</title>
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
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
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
                Apache Ignite® is a Java-powered database and computing platform that works with operating systems and
                architectures supported by Java Virtual Machines. You can find Ignite deployments running on Linux,
                Windows, Mac OS, Oracle Solaris, IBM zOS and x86, x64, SPARC, and PowerPC instruction set
                architectures.
                <br />
                <br />
              </span>
              <span>
                All the features and capabilities available in Ignite are supported in its Java libraries. This includes
                SQL, key-value, co-located computations, machine learning algorithms, and much more.
                <br />
                <br />
              </span>
              <span>
                In addition to Java, Ignite supports C#, C++, Python, Node.JS, and PHP languages out-of-the-box. The
                thin client protocol allows expanding Ignite support to other programming languages. For instance, you
                can find a Go client for Ignite that is not being developed or maintained by the Ignite community.
                <br />
                <br />
              </span>
              <span>
                Furthermore, you can interact with Ignite as you would with any other SQL database with the usage of
                JDBC or ODBC drivers.
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
              Discover our quick start guide and build your first
              <br /> application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/index"
              target="_blank"
              rel="noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check out how to run Ignite with Java, .NET/C#, C++, Python, Node.JS, SQL, PHP, or REST API
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/quick-start/java"
              target="_blank"
              rel="noreferrer"
            >
              Multi-Language Guide
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
