import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import '../../css/communnity.css';
import '../../css/usecases.css';

interface VideoCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  company: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

function VideoCard({ videoUrl, thumbnailUrl, company, title, className = '', children }: VideoCardProps) {
  return (
    <div className={`comvideo ${className}`}>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="comvideo__screen">
        <img src={thumbnailUrl} alt={`${company} video`} />
      </a>
      <div className="comvideo__company pt-2 pb-1 fz20">
        <strong>{company}</strong>
      </div>
      <h3 className="h5 comvideo__ttl">{title}</h3>
      <div className="comvideo__text pt-2">{children}</div>
    </div>
  );
}

export default function ProvenUseCases(): JSX.Element {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Proven Business Cases - Apache Ignite in Use</title>
        <meta
          name="description"
          content="All publicly disclosed business cases of Apache Ignite. Explore dozens of Ignite case-studies across various industries."
        />
        <link rel="canonical" href="https://ignite.apache.org/use-cases/provenusecases.html" />
        <meta property="og:title" content="Proven Business Cases - Apache Ignite in Use" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/use-cases/provenusecases.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="All publicly disclosed business cases of Apache Ignite. Explore dozens of Ignite case-studies across various industries."
        />
      </Head>

      <section className="grayhero">
        <div className="container">
          <h1 className="grayhero__h1 h1">
            Apache Ignite Is Chosen By Leading Companies Across The World
          </h1>
          <div className="grayhero__logos flexi">
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/microsoft.svg" alt="Microsoft" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/netflix.svg" alt="Netflix" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/apple.png" alt="Apple" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/yahoo.svg" alt="Yahoo" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/bloomberg.svg" alt="Bloomberg" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/paypal.svg" alt="PayPal" />
            </span>
            <span className="grayhero__logo">
              <img src="/img/poweredby/logos/banco-do-brasil.svg" alt="Banco do Brasil" />
            </span>
          </div>
        </div>
      </section>

      <section className="powered2 container">
        <h2 className="h4">Explore Featured Stories</h2>
        <p className="powered2__descr h5 pt-2">
          You can find dozens of Apache Ignite case-studies across various industries:
        </p>
        <div className="powered2__grid pt-5">
          <div className="powered2item">eCommerce</div>
          <div className="powered2item">Pharma & Healthcare</div>
          <div className="powered2item">Financial Services</div>
          <div className="powered2item">Internet of things</div>
          <div className="powered2item">Logistics & Transportation</div>
          <div className="powered2item">Retail</div>
          <div className="powered2item">Leisure & Hospitality</div>
          <div className="powered2item">Entertainment</div>
          <div className="powered2item">Defense</div>
          <div className="powered2item">Gaming</div>
          <div className="powered2item">Biotech</div>
          <div className="powered2item">Software & SaaS</div>
          <div className="powered2item">Telecommunications</div>
        </div>
      </section>

      <section className="poweredbanner container">
        <div className="poweredbanner__bg flexi">
          <div className="poweredbanner__left flexi">
            <p className="h4">
              <strong>Do you have an Apache Ignite use-case to share?</strong>
            </p>
            <div className="pt-1 fz20">
              Reach out to us on the dev mailing list and we'll add it to this page
            </div>
          </div>
          <div className="poweredbanner__right"></div>
        </div>
      </section>

      <section className="poweredvideos container">
        <div className="poweredvideos__grid">
          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=3FFexcYIpmA"
            thumbnailUrl="/img/poweredby/videos/001.png"
            company="IBM"
            title="Leveraging In-Memory Compute Grids With Core Systems Of Record"
          >
            <p>Apache Ignite based platform is used for IBM Z Mainframes workload acceleration.</p>
            <p>
              <a href="https://www.youtube.com/watch?v=1QGUblzStoQ" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://youtu.be/3w0H3zLH594"
            thumbnailUrl="/img/poweredby/videos/bloomberg.jpg"
            company="Bloomberg"
            title="Real-time Data Access with Apache Ignite SQL"
          >
            <p>
              Apache Ignite is a key component of Bloomberg's portfolio management system. From this talk you will learn
              how the finance industry's ever-increasing need to process large datasets in real-time led Bloomberg's
              engineers to select Ignite to deliver persistence, caching, and integrated compute.
            </p>
            <p>
              <a href="https://youtu.be/3w0H3zLH594" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=BSGFL72u2iY"
            thumbnailUrl="/img/poweredby/videos/cern.jpg"
            company="CERN"
            title="Improving the CERN Control and Monitoring Platform (C2MON) with Apache Ignite"
          >
            <p>
              The CERN Control and Monitoring platform (C2MON) is an open-source platform for industrial controls data
              acquisition, monitoring, control, and data publishing. For C2MON the existing legacy was replaced with
              caching framework with Apache Ignite. It improves C2MON's scalability and enables it to handle high
              volumes of data.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=BSGFL72u2iY" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=KLnvIiwAl2o"
            thumbnailUrl="/img/poweredby/videos/013.png"
            company="Trimble"
            title="Building A Live Geospatial Analytics Platform For Construction Productivity With Apache Ignite"
            className="comvideo__txt--black comvideo__txt--medium"
          >
            <p>
              Trimble built a live geospatial analytics platform for construction productivity with Apache Ignite.
              Apache Ignite forms a key infrastructural component of the TRex platform. It supports the real-time
              ingestion of data from the field, along with OLTP-style analytics and queries against that data, such as
              thematic tiling, volumes & cut/fill calculations, spatial profiling, etc.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=KLnvIiwAl2o" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=WLPv_2sKRRw"
            thumbnailUrl="/img/poweredby/videos/cardano.jpg"
            company="Cardano"
            title="Ignite: Quant Revolution"
            className="comvideo__txt--black comvideo__txt--medium"
          >
            <p>
              Quantitative analytics usually requires combining a calculation methodology with data in the form of
              software. Traditionally, the first two components have been on the main stage, but software was never the
              main actor. Cardano Risk management's solution is to build a firsthand, scalable, high-performance system
              with Apache Ignite.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=WLPv_2sKRRw" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://techblog.yahoo.co.jp/oss/yahoo_shopping_purchases_ignite/"
            thumbnailUrl="/img/poweredby/videos/004.png"
            company="Yahoo! Japan"
            title="«Recent Purchases» With Apache Ignite"
          >
            <p>
              <a
                href="https://techblog.yahoo.co.jp/oss/yahoo_shopping_purchases_ignite/"
                target="_blank"
                rel="noopener noreferrer"
              >
                This blog post
              </a>{' '}
              explains why Yahoo! Japan chose Apache Ignite for a highly scalable caching system that can process tens
              of thousands of requests per second.
            </p>
            <p className="comvideo__gray">
              SQL queries were performed via thin clients since they do not require a standard topology join, and
              therefore are easier to handle through container services. After a successful POC, Ignite fully met their
              requirements and was quickly rolled into production.
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=ZZI7MVE1ZBo&t=2s"
            thumbnailUrl="/img/poweredby/videos/005.png"
            company="American Airlines"
            title="In-Memory Computing Patterns For High Volume, Real Time Applications"
          >
            <p>American Airlines' IT transformations are due to the following advantages of Apache Ignite based platform:</p>
            <ul className="dashlist pt-1">
              <li>Improvement in bandwidth and response times</li>
              <li>Improved availability</li>
              <li>Horizontal and vertically scalability</li>
              <li>Efficiency</li>
              <li>ANSI-99 SQL and ACID transaction guarantees and ctr.</li>
            </ul>
            <p>
              <a
                href="https://www.imcsummit.org/2018/us/session/memory-computing-patterns-high-volume-real-time-applications"
                target="_blank"
                rel="noopener noreferrer"
              >
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=CPmwnjDJ1Sk"
            thumbnailUrl="/img/poweredby/videos/006.png"
            company="ING Bank"
            title="Embracing The Service Consumption Shift In Banking"
          >
            <p>ING core banking system transformation using an Apache Ignite-based platform.</p>
            <p>
              <a
                href="https://www.imcsummit.org/2018/us/session/embracing-service-consumption-shift-banking"
                target="_blank"
                rel="noopener noreferrer"
              >
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=g1FcrOPXWyg"
            thumbnailUrl="/img/poweredby/videos/007.png"
            company="Banco do Brasil"
            title="Using Ignite And JBoss Drools To Implement A Complex Event Processing Solution"
            className="comvideo__txt--black comvideo__txt--medium"
          >
            <p>
              Вanco do Brasil is developing the omnichannel Horus platform in-house. They implemented a complex event
              processing ecosystem that is based on Apache Ignite, JBoss Drools, and other components. The team also
              built microservices and interface applications, both event-driven.
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=g1FcrOPXWyg" target="_blank" rel="noopener noreferrer">
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>

          <VideoCard
            videoUrl="https://www.youtube.com/watch?v=EdFOKJIjRSg"
            thumbnailUrl="/img/poweredby/videos/008.png"
            company="24 Hour Fitness"
            title="Fitness + In Memory Computing = Getting Ahead Of The Game"
          >
            <p>
              Apache Ignite based platform is used as a digital integration hub and database for a variety of 24 Hour
              Fitness services.
            </p>
            <p>
              <a
                href="https://www.imcsummit.org/2019/us/session/fitness-memory-computing-getting-ahead-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                View presentation and learn more about speaker
              </a>
            </p>
          </VideoCard>
        </div>

        <div className="poweredvideos__linkwrap pt-5">
          <a
            className="poweredvideos__loadmore"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show less stories' : 'Load more stories'}
          </a>
        </div>

        {showMore && (
          <div className="poweredvideos__more">
            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=luEYsfZAYOU"
              thumbnailUrl="/img/poweredby/videos/ifood.jpg"
              company="iFood"
              title="What We Learned Supporting 1M RPM with 10 MS Latency Using Apache Ignite at iFood"
              className="comvideo__txt--black"
            >
              <p>
                iFood is the largest Food Tech in Latin America, with more than 300k stores in more than 1700 cities in
                Brazil and Colombia. The platform is now processing more than 65 million orders per month, which
                translates to more than 500M events being delivered to external agents (user devices and integrations).
                Apache Ignite allows to support an average throughput of 1M rpm with p99 at less than 10ms of latency.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=luEYsfZAYOU" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=NUxdoL-K9Ys"
              thumbnailUrl="/img/poweredby/videos/012.png"
              company="nference.ai"
              title="How nference.ai Leverages Ignite For Distributed Analytics In The Bioinformatics Domain"
              className="comvideo__txt--black comvideo__txt--medium"
            >
              <p>nference.ai uses Ignite for distributed analytics in the bioinformatics domain.</p>
              <p>
                Ignite, as a horizontally scalable framework, allows for the defining of different statistical analyses,
                and the execution of it on TBs of numerical data in real time, without movement of data.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=NUxdoL-K9Ys" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=jF9T2cJB6t0"
              thumbnailUrl="/img/poweredby/videos/009.png"
              company="JPMorgan Chase"
              title="High Performance Exposure Management With Apache Ignite"
              className="comvideo__txt--black"
            >
              <p>
                Exposure management poses unique technical challenges for Asset Management. Requests involve heavy
                computation on top of millions of data points with target response times of around a 1/3 second.
              </p>
              <p>This challenge was solved using an Apache Ignite-based platform.</p>
              <p>
                <a href="https://www.youtube.com/watch?v=jF9T2cJB6t0" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=B8A8yR_e6VM"
              thumbnailUrl="/img/poweredby/videos/009.png"
              company="JPMorgan Chase"
              title="Real Time Exposure Management Using Ignite"
              className="comvideo__txt--black"
            >
              <p>
                The increasing need in the finance world to apply transformations to large datasets in real time led the
                Asset Management's portfolio management system team to select Ignite to achieve persistence, caching and
                integrated compute.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=B8A8yR_e6VM" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=n8SRNf_mO_U"
              thumbnailUrl="/img/poweredby/videos/expedia.jpg"
              company="Expedia"
              title="Lightning Fast Flight Searches on Expedia Using Apache Ignite"
              className="comvideo__txt--black"
            >
              <p>
                Flight searches on the Expedia platform are executed on a read-heavy system with peak search traffic
                regularly in the range of thousands of transactions per second, so caching is a natural requirement.
                Moving the caching layer to Apache Ignite Expedia made the flight search 10x faster using off-heap
                reads, server-side computing, binary objects, and affinity collocation.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=n8SRNf_mO_U" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speakers
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=_mnZQ3JDcn8"
              thumbnailUrl="/img/poweredby/videos/014.png"
              company="Sentienz"
              title="Ignite Success Story: How Ignite Fuels The High Throughput Messaging In Sentienz Akiro"
              className="comvideo__txt--black comvideo__txt--medium"
            >
              <p>
                Sentienz uses Apache Ignite to handle more than a million requests per second from 10 Million devices
                with a single cluster IoT platform.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=n8SRNf_mO_U" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=mfZ8VOL6XSE"
              thumbnailUrl="/img/poweredby/videos/komodo.jpg"
              company="KomodoHealth"
              title="Processing Komodo Health's Data with Apache Ignite in AWS"
              className="comvideo__txt--black comvideo__txt--medium"
            >
              <p>KomodoHealth is using Apache Ignite to facilitate the processing of healthcare data.</p>
              <p>
                <a href="https://www.youtube.com/watch?v=mfZ8VOL6XSE" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=GoXBevB9iKA"
              thumbnailUrl="/img/poweredby/videos/019.png"
              company="Hypi"
              title="Building A Graph Centric Platform On Ignite"
            >
              <p>Apache Ignite as a graph centric platform.</p>
              <p>
                <a
                  href="https://www.imcsummit.org/2019/eu/session/building-graph-centric-platform-ignite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=B7yRPl56xAM"
              thumbnailUrl="/img/poweredby/videos/psc.jpg"
              company="Transition Technologies PSC"
              title="Data Management in the IoT with Apache Ignite"
            >
              <p>
                Apache Ignite plays a major role in ThingWorx, the enterprise IoT platform from PTC. A distributed cache
                helps keep data synchronized in clustered environments. Distributed computation gives insight into the
                value that hides in the data.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=B7yRPl56xAM" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=eRzX1Rd7T7I"
              thumbnailUrl="/img/poweredby/videos/kubo.jpg"
              company="Kubo"
              title="Building serverless reactive systems using Apache Ignite"
            >
              <p>
                Apache Ignite has powerful in-memory, distributed computing capabilities that can be used as a
                foundation of building various programming models.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=eRzX1Rd7T7I" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=wkCW8YC8eKU"
              thumbnailUrl="/img/poweredby/videos/024.png"
              company="Dutch Railways"
              title="Detecting Potentially Hazardous Situations In Dutch Railway Planning Using Apache Ignite"
              className="comvideo__txt--black comvideo__txt--medium"
            >
              <p>
                Detecting potentially hazardous situations in Dutch railway planning to meet the challenges of one of the
                busiest rail infrastructures in Europe. JDriven built a space-based architecture with Apache Ignite.
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=wkCW8YC8eKU" target="_blank" rel="noopener noreferrer">
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>

            <VideoCard
              videoUrl="https://www.youtube.com/watch?v=z28rthKIrDk"
              thumbnailUrl="/img/poweredby/videos/003.png"
              company="Teradata"
              title="S9D Using Apache Ignite As A Part Of Real Time Campaigning"
            >
              <p>Apache Ignite usage for handling real time marketing campaigns.</p>
              <p>
                <a
                  href="https://www.imcsummit.org/2019/eu/session/using-apache-ignite-part-real-time-campaigning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View presentation and learn more about speaker
                </a>
              </p>
            </VideoCard>
          </div>
        )}
      </section>
    </Layout>
  );
}
