import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';

import '../../css/native-persistence.css';
import '../../css/service.css';
import '../../css/compute-apis.css';

export default function ServiceAPIs(): JSX.Element {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Services, Distributed Service Grid</title>
        <meta
          name="description"
          content="Apache Ignite Service Grid allows to deploy various types of singleton services in the cluster or multiple service instances. Build a fault-tolerant, scalable, high-performant, microservice-based solution with Apache Ignite."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite Services, Distributed Service Grid" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite Service Grid allows to deploy various types of singleton services in the cluster or multiple service instances. Build a fault-tolerant, scalable, high-performant, microservice-based solution with Apache Ignite."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <div className="innerhero__pre pb-3">Apache Ignite</div>
            <h1 className="h1 innerhero__h1">Service APIs</h1>
            <div className="innerhero__descr pt-2 h5">
              Deploy your microservices straight on the cluster nodes and
              <br /> trigger execution from the application code
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--servicegrid"
            src="/img/features/service/service-hero.svg"
            alt="Distributed In-Memory Cache"
          />
        </div>
      </section>

      <section className="service1">
        <div className="container">
          <h2 className="service1__h2">Apache Ignite Service APIs Overview</h2>
          <div className="fz20 service1__text">
            With the services API, you can create and deploy arbitrary services on the cluster. For instance, you may
            want to implement custom counters, hierarchical maps, or anything that you treat as a microservice.
          </div>
        </div>
      </section>

      <section className="nativecode container jsTabWrap">
        <header className="blockheader blockheader--spl flexi">
          <h2 className="h4 blockheader__left">Use Contemporary Powerful Languages</h2>
          <div className="blockheader__right service-subtextvideo fz20">
            <p>Create scalable microservices in languages such as Java or C#</p>
          </div>
        </header>
        <div className="nativecode__tabs">
          <div className="nativecode__tab active">
            <pre className="nativecode__codebox">
              <code className="java">{`Ignite ignite = Ignition.start();

//get the services interface associated with all server nodes
IgniteServices services = ignite.services();

//start a node singleton
services.deployClusterSingleton("myCounterService", new MyCounterServiceImpl());`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="service2">
        <div className="container">
          <h2 className="service2__h2 h4">Services Deployment Modes</h2>
          <div className="service2__text">Deploy single or many instances of a service on the cluster</div>
          <div className="service2__block">
            <div className="service2item service2item__one flexi">
              <div className="service2item__info">
                <h3 className="service2item__title">Cluster Singleton</h3>
                <p className="service2item__text">
                  The most commonly used feature is to deploy singleton services on the cluster.
                </p>
                <p className="service2item__text">
                  There is only one instance of the service in the cluster, and Ignite guarantees
                  <br /> that the instance is always available.
                </p>
                <p className="service2item__text">
                  In case the cluster node on which the service is deployed disconnects, Ignite automatically redeploys
                  the instance to another node.
                </p>
              </div>
              <img
                className="service2item__image1"
                src="/img/features/service/one-image.svg"
                alt="one-image"
              />
            </div>

            <div className="service2item service2item__two flexi">
              <img
                className="service2item__image2"
                src="/img/features/service/two-image.svg"
                alt="two-image"
              />
              <div className="service2item__info service2item__info2">
                <h3 className="service2item__title">Node Singleton</h3>
                <p className="service2item__text">
                  You can specify your service as part of the node configuration and start
                  <br /> the service together with the node.
                </p>
                <p className="service2item__text">
                  The service is started on each node of the cluster. If the service is a cluster singleton, it is
                  started in the first cluster node, and is redeployed to one <br />
                  of the other nodes if the first node terminates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compute2">
        <div className="container">
          <h2 className="compute2__h2">Benefits Of Apache Ignite Service APIs</h2>
          <div className="compute2__grid">
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Load balancing</h3>
                <p className="compute2__text">
                  In all cases, other than singleton service deployment, Ignite makes sure that an equal number of
                  services are deployed on each node within the cluster.
                </p>
                <p className="compute2__text">
                  Whenever cluster topology changes, Ignite will re-evaluate service deployments and may re-deploy an
                  already deployed service on another node for better load balancing.
                </p>
              </div>
            </div>
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Fault Tolerance</h3>
                <p className="compute2__text">
                  Ignite always guarantees that services are continuously available, and are deployed according to the
                  specified configuration, regardless of any topology changes or node crashes.
                </p>
              </div>
            </div>
            <div className="compute2item">
              <div className="compute2-points__item fz20"></div>
              <div className="compute2item__block">
                <h3 className="fz20 compute2item__title">Hot Redeployment</h3>
                <p className="compute2__text">
                  You can update the implementation of a service without stopping the cluster.
                </p>
                <p className="compute2__text">
                  Use Ignite's DeploymentSpi configuration to re-deploy services without restarting the cluster.
                </p>
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
            <p className="nativebotblock__text">Start coding with Ignite Service APIs</p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/services/services#re-deploying-services"
              target="_blank"
              rel="noreferrer"
            >
              Performing Service APIs
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to Learn More?</span>
            </div>
            <p className="nativebotblock__text">
              Check out a special tutorial that shows how to build and deploy microservices with Ignite Service APIs
            </p>
            <a
              className="nativebotblock__link servicenativelink arrowlink"
              href="https://www.gridgain.com/resources/blog/implementing-microservices-apache-ignite-service-apis-part-iii"
              target="_blank"
              rel="noreferrer"
            >
              Implementing Microservices
              <br /> With Apache Ignite Service APIs
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
