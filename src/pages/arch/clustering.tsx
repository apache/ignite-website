import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/deployment-opts.css';

export default function Clustering(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Deployment Options</title>
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1 innerhero__mega">
              Deployment <br />
              Options
            </h1>
          </div>
          <img
            className="innerhero__pic innerhero__pic--deploy"
            src="/img/features/deployment/hero.svg"
            alt="Deployment Options"
          />
        </div>
      </section>

      <section className="deploymenytext container flexi">
        <div className="deploymenytext__main">
          <p>
            Apache Ignite® implements the shared-nothing architecture where all cluster nodes are equal and there is no
            single point of failure or bottleneck. Ignite does NOT have a component such as a master node or name node
            that is present in most distributed systems.
          </p>

          <p>
            Ignite nodes discover each other automatically in your environment, and the cluster can be scaled out or in
            easily.
          </p>

          <p className="pb-4">
            Apache Ignite can run on bare metal, virtual machines, Docker, Kubernetes, and cloud environments.
            Technically there are no limitations in regards to deployment environments — since Ignite nodes can
            auto-discover each other via the TCP/IP interface, you can launch a cluster anywhere.
          </p>

          <h3 className="h5 pt-2 pb-2 deploymenytext__title">Servers, clients and protocols</h3>
          <p>
            Ignite defines two types of nodes — servers and clients. A server node is the base computational and data
            storage unit. Typically, you start a single server node per machine or container and it will scale vertically
            by utilizing all of the CPU, RAM, and other resources available unless specified differently. These resources
            are pooled and become available to Ignite applications once the server node joins the cluster of other server
            nodes.
          </p>

          <p>
            A cluster is a group of server nodes interconnected together in order to provide shared resources like RAM
            and CPU to your applications.
          </p>

          <p>
            Client nodes (aka. thick clients) are your connection endpoints and gateways from the application layer to
            the cluster of server nodes. You always embed a client into your application code and execute the required
            APIs. The clients shield all the complexity of Ignite's distributed nature from application developers who
            will see the cluster as a single unit. It's as simple as connecting to an RDBMS via a JDBC driver or Spring
            Data framework.
          </p>

          <p>
            In addition to the thick clients, you can access the cluster with Ignite thin clients, JDBC and ODBC drivers,
            or the REST API.
          </p>
        </div>
        <aside className="deploymenytext__picwrap picwrap">
          <img className="deploymenytext__pic" src="/img/features/deployment/deploy-pic.svg" alt="" />
        </aside>
      </section>

      <section className="native-bottom container">
        <div className="native-bottom__grid">
          <article className="nativebotblock">
            <h3 className="h4 nativebotblock__title">
              <img src="/img/features/native-rocket.svg" alt="" className="nativebotblock__icon" />
              <span>Ready to Start?</span>
            </h3>
            <p className="nativebotblock__text">
              Discover our quick start guide and build <br />
              your first application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/ignite2/latest/"
              target="_blank"
              rel="noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <h3 className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want To Learn More?</span>
            </h3>
            <p className="nativebotblock__text">Read Native Persistence article</p>
            <a className="nativebotblock__link arrowlink" href="/arch/native-persistence">
              Native Persistence Article
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
