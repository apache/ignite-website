import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../css/native-persistence.css';
import '../../css/high-performance-computing.css';

export default function HighPerformanceComputing(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>High-Performance Computing, HPC Cluster - Apache Ignite</title>
        <meta
          name="description"
          content="Apache Ignite enables high-performance computing by providing APIs for data and compute-intensive calculations. Using Ignite as a HPC cluster, you can turn your commodity hardware or cloud environment into a distributed supercomputer."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/high-performance-computing.html" />
        <meta property="og:title" content="High-Performance Computing, HPC Cluster - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/high-performance-computing.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite enables high-performance computing by providing APIs for data and compute-intensive calculations. Using Ignite as a HPC cluster, you can turn your commodity hardware or cloud environment into a distributed supercomputer."
        />
      </Head>

      <section className="innerhero">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              High-Performance <br />
              Computing
              <span className="highperf__herosmall">With Apache Ignite</span>
            </h1>
            <div className="innerhero__descr pt-2 h5">
              Minimize network utilization by executing kilobyte-size custom <br />
              code over petabytes of data
            </div>
            <div className="innerhero__action">
              <a className="button innerhero__button" href="https://ignite.apache.org/docs/latest/index">
                Start Coding
              </a>
            </div>
          </div>
          <img
            className="innerhero__pic innerhero__pic--highperf"
            src="/img/usecases/high-peformance/hero.svg"
            alt="High Performance Computing"
          />
        </div>
      </section>

      <section className="high1 container">
        <h2 className="capstext pb-5">High-Performance Computing Overview</h2>
        <div className="high1__wrap flexi">
          <div className="high1__main pt-1">
            <h3 className="h5 high1__title">What is high-performance computing?</h3>
            <div className="high1__text pt-3 pb-5">
              <p>High-performance computing is the ability to process data and perform complex calculations at high speeds.</p>
              <p>
                You keep all your data on the cluster node and execute your kilobyte-size custom code over petabytes of data,
                avoiding network-like utilization.
              </p>
            </div>
            <h3 className="h5 high1__title">How it works</h3>
            <div className="high1__text pt-2">
              <div className="high1__sub pb-2">
                In traditional disk-based systems, <br />
                such as relational or NoSQL databases
              </div>
              <p>
                Client applications usually bring data from servers, use the records for local calculations, and discard the
                data as soon as the business task is completed.
              </p>
              <p>This approach does not scale well if a significant volume of data gets transferred over the network.</p>
              <div className="high1__sub pt-2 pb-2">
                In in-memory computing systems, <br />
                such as Apache Ignite
              </div>
              <p>
                Apache Ignite supports a co-located processing technique. The primary aim of this technique is to increase the
                performance of your data-intensive or compute-intensive calculations by running them straight on Ignite cluster
                nodes.
              </p>
              <p>
                In co-located processing, calculations are done on local data sets of the cluster nodes. This avoids records
                shuffling over the network and eliminates the impact of network latency on the performance of your applications.
              </p>
            </div>
          </div>
          <aside className="high1__picwrap">
            <img src="/img/usecases/high-peformance/perf-pic.svg" alt="" className="high1__pic" />
            <div className="high1__picdescr flexi">
              <div className="high1__arrowline flexi">
                <i>1</i>
                <p>– Map Phase</p>
              </div>
              <div className="high1__arrowline flexi">
                <i>2</i>
                <p>– Execution Phase</p>
              </div>
              <div className="high1__arrowline flexi">
                <i>3</i>
                <p>– Reduce Phase</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="high2">
        <div className="container">
          <h2 className="capstext">Benefits Of Apache Ignite Compute APIs</h2>
          <div className="high2__wrap">
            <div className="high2__block">
              <div className="high2__title">Broadcast or execute on specific nodes</div>
              <div className="high2__text">
                <p>— Broadcast your tasks to use all the CPUs of your distributed cluster.</p>
                <p className="pt-1">— Or execute your computations on a specific group of nodes.</p>
              </div>
            </div>
            <div className="high2__block">
              <div className="high2__title">Load balance your queries</div>
              <div className="high2__text">
                <p>If some of the nodes are over-utilized, Ignite can load balance your calculations to the other node.</p>
              </div>
            </div>
            <div className="high2__block">
              <div className="high2__title">All computations are fault-tolerant</div>
              <div className="high2__text">
                <p>
                  Some computations might take minutes or hours to complete, e.g. drug discovery or logistics planning. You
                  don't need to start from the very beginning if something goes wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highicons container">
        <h2 className="h4">
          Sample Data- And Compute-Intensive Tasks That <br />
          Leverage High-Performance Computing
        </h2>
        <div className="highicons__wrap pt-5">
          <div className="highicons__item">
            <div className="highicons__iconwrap flexi">
              <img src="/img/usecases/high-peformance/icon-perf1.svg" alt="" className="highicons__icon" />
            </div>
            <div className="highicons__title">Finance</div>
            <div className="highicons__descr">e.g. fraud-detection, risk management, financial modeling</div>
          </div>
          <div className="highicons__item">
            <div className="highicons__iconwrap flexi">
              <img src="/img/usecases/high-peformance/icon-perf2.svg" alt="" className="highicons__icon" />
            </div>
            <div className="highicons__title">Retail & Hospitality</div>
            <div className="highicons__descr">e.g. recommendation systems, 360 customer experience</div>
          </div>
          <div className="highicons__item">
            <div className="highicons__iconwrap flexi">
              <img src="/img/usecases/high-peformance/icon-perf3.svg" alt="" className="highicons__icon" />
            </div>
            <div className="highicons__title">Media & Entertainment</div>
            <div className="highicons__descr">e.g. creating animations, rendering special effects</div>
          </div>
          <div className="highicons__item">
            <div className="highicons__iconwrap flexi">
              <img src="/img/usecases/high-peformance/icon-perf4.svg" alt="" className="highicons__icon" />
            </div>
            <div className="highicons__title">Logistic and transportation</div>
            <div className="highicons__descr">e.g. logistics planning, detecting potential hazardous situations</div>
          </div>
          <div className="highicons__item">
            <div className="highicons__iconwrap flexi">
              <img src="/img/usecases/high-peformance/icon-perf5.svg" alt="" className="highicons__icon" />
            </div>
            <div className="highicons__title">Biotech</div>
            <div className="highicons__descr">e.g. drug and vaccine discovery, sequencing DNA</div>
          </div>
        </div>
      </section>

      <section className="highcases container">
        <h2 className="h4">
          High-Performance Computing Ignite <br />
          User Stories
        </h2>
        <div className="highcases__one flexi pt-2 pb-4">
          <div className="highcases__topleft">
            <div className="highcases__subtitle pb-2">Personalized websites with dynamically changing content</div>
            <p className="pb-3">
              Whenever you visit Amazon, Walmart, Booking, or other websites, you see personalized content, such as relevant
              deals made especially for you.
            </p>
            <p>
              Personalized content that takes your age, location, preferences, and previous interactions into consideration is
              processed and displayed in just a few seconds thanks to high-performance computing tasks that process gigabytes
              of data within a second.
            </p>
          </div>
          <div className="highcases__topright">
            <div className="comvideo">
              <a
                href="https://www.youtube.com/watch?v=qYd9GGRC4L0"
                target="_blank"
                rel="noopener noreferrer"
                className="comvideo__screen"
              >
                <img src="/img/usecases/high-peformance/video-1.png" alt="HomeAway video" />
              </a>
            </div>
            <p>
              <strong>HomeAway,</strong> rental website with personalized offers
            </p>
          </div>
        </div>

        <div className="highcases__two pt-4 pb-4">
          <div className="highcases__subtitle pb-2">Data-driven modelling and simulations</div>
          <p>
            To create a new vaccine or drug you have to run thousands or millions <br />
            of simulations to come up with the best formula.
          </p>
          <div className="highcases__twowrap flexi pt-5">
            <div className="highcases__twoitem">
              <div className="comvideo">
                <a
                  href="https://www.youtube.com/watch?v=PFHb-UuhGkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comvideo__screen"
                >
                  <img src="/img/usecases/high-peformance/video-2.png" alt="E-Therapeutics video" />
                </a>
              </div>
              <p>
                <strong>E-Therapeutics</strong> uses Apache Ignite capabilities for drug discovery.
              </p>
            </div>
            <div className="highcases__twoitem">
              <div className="comvideo comvideo__txt--small">
                <a
                  href="https://www.youtube.com/watch?v=NUxdoL-K9Ys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comvideo__screen"
                >
                  <img src="/img/usecases/high-peformance/video-3.png" alt="nference.ai video" />
                </a>
              </div>
              <p>
                <strong>nference.ai:</strong> high-performance compute APIs used to define different statistical analyses and
                execute numerical data in real time.
              </p>
            </div>
          </div>
        </div>

        <div className="highcases__one flexi pt-4 pb-4">
          <div className="highcases__topleft">
            <div className="highcases__subtitle pb-2">
              Logistic and transportation companies use advanced calculations for logistics planning
            </div>
            <p>
              <strong>Dutch Railways</strong> have thousands of different trains to deliver cargo and people across the
              country. They need to calculate how all those trains should be moving in real time. These calculations also
              happen with high compute APIs.
            </p>
          </div>
          <div className="highcases__topright">
            <div className="comvideo comvideo__txt--small">
              <a
                href="https://www.youtube.com/watch?v=wkCW8YC8eKU"
                target="_blank"
                rel="noopener noreferrer"
                className="comvideo__screen"
              >
                <img src="/img/usecases/high-peformance/video-4.png" alt="Dutch Railways video" />
              </a>
            </div>
          </div>
        </div>

        <div className="highcases__two pt-4">
          <div className="highcases__subtitle pb-2">Real-time analytics enables fast and precise decisions</div>
          <p>
            High-performance computing allows the processing of unlimited data sets, <br />
            with analysis taking only seconds.
          </p>
          <div className="highcases__twowrap flexi pt-5">
            <div className="highcases__twoitem">
              <div className="comvideo comvideo__txt--small">
                <a
                  href="https://www.youtube.com/watch?v=jF9T2cJB6t0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comvideo__screen"
                >
                  <img src="/img/usecases/high-peformance/video-5.png" alt="JPMorgan Chase video" />
                </a>
              </div>
              <p>
                <strong>JPMorgan Chase</strong> use Apache Ignite for heavy computations which help to make effective exposure
                management.
              </p>
            </div>
            <div className="highcases__twoitem">
              <div className="comvideo">
                <a
                  href="https://www.youtube.com/watch?v=B8A8yR_e6VM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comvideo__screen"
                >
                  <img src="/img/usecases/high-peformance/video-6.png" alt="JPMorgan Chase video" />
                </a>
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
              Discover our quick start guide and build <br />
              your first application in 5-10 minutes
            </p>
            <a
              className="nativebotblock__link arrowlink"
              href="https://ignite.apache.org/docs/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Start Guide
            </a>
          </article>
          <article className="nativebotblock nativebotblock--learn">
            <div className="h4 nativebotblock__title">
              <img src="/img/features/native-docs.svg" alt="" className="nativebotblock__icon" />
              <span>Want to View More Use-Cases?</span>
            </div>
            <p className="nativebotblock__text">
              Check out success stories from <br />
              different industries across the world
            </p>
            <a className="nativebotblock__link arrowlink" href="/use-cases/provenusecases.html">
              Ignite User Stories
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
