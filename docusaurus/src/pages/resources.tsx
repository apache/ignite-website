import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import styles from './resources.module.css';

function HeroSection() {
  return (
    <section className={styles.reshero}>
      <div className="container">
        <img src="/img/resourses/hero.svg" alt="" className={styles.reshero__img} />
        <h1 className={clsx(styles.h1, styles.reshero__h1)}>Apache Ignite <br />Resources</h1>
        <div className={clsx(styles.h5, styles.reshero__descr, 'pt-3')}>
          Elevate your Ignite experience with the help of community-curated technical resources,
          code samples, how-to videos, training courses and other materials
        </div>
      </div>
    </section>
  );
}

function TechnicalResourcesSection() {
  return (
    <Section className={styles.restechnical} id="technical">
      <p className="capstext">TECHNICAL RESOURCES</p>
      <div className={styles.restechnical__grid}>
        <article className={styles.restechnical__item}>
          <div className={clsx(styles.restechnical__title, 'flexi', 'pb-5')}>
            <img src="/img/resourses/res2-book.svg" alt="" />
            <h2 className={styles.h4}>Apache Ignite Documentation</h2>
          </div>
          <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
            <div className={clsx(styles.restechnical__subtitle, styles.h5)}>
              Start with the technical documentation to discover:
            </div>
            <div className={clsx(styles.restechnical__text, 'pt-2')}>
              <ul className="dashlist">
                <li>Apache Ignite's key capabilities</li>
                <li>How to use certain features</li>
                <li>How to approach cluster optimizations</li>
                <li>Best troubleshooting techniques</li>
              </ul>
            </div>
            <div className={styles.restechnical__action}>
              <a className="button" href="https://ignite.apache.org/docs/latest/index" target="_blank" rel="noreferrer">
                Discover The Entire Documentation
              </a>
            </div>
          </div>
        </article>

        <article className={styles.restechnical__item}>
          <div className={clsx(styles.restechnical__title, 'flexi', 'pb-5')}>
            <img src="/img/resourses/res2-book2.svg" alt="" />
            <h2 className={styles.h4}>Ignite Wiki</h2>
          </div>
          <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
            <div className={clsx(styles.restechnical__subtitle, styles.h5)}>
              A collection of low-level design documents and instructions:
            </div>
            <div className={clsx(styles.restechnical__text, 'pt-2')}>
              <ul className="dashlist">
                <li>Architectural internals of Ignite components</li>
                <li>Ignite Enhancement Proposals: next big things for Ignite</li>
                <li>Coding and release guidelines</li>
              </ul>
            </div>
            <div className={styles.restechnical__action}>
              <a className="button" href="https://cwiki.apache.org/confluence/display/IGNITE/" target="_blank" rel="noreferrer">
                Check Out Wiki
              </a>
            </div>
          </div>
        </article>

        <article className={styles.restechnical__item} id="git">
          <div className={clsx(styles.restechnical__title, 'flexi', 'pb-5')}>
            <img src="/img/icon-github.svg" alt="" />
            <h2 className={styles.h4}>Git Repositories</h2>
          </div>
          <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
            <div className={clsx(styles.restechnical__subtitle, styles.h5)}>Ignite Source Code</div>
            <div className={clsx(styles.restechnical__text, 'pt-2')}>
              <p className="pb-2">Download Apache Ignite and install in your environment.</p>
              <p>Select one of the following links:</p>
            </div>
            <div className={clsx(styles.restechnical__action, 'flexi')}>
              <a className="button" href="https://github.com/apache/ignite" target="_blank" rel="noreferrer">
                Ignite 2.X
              </a>
              <a className="button" href="https://github.com/apache/ignite-3" target="_blank" rel="noreferrer">
                Ignite 3.X
              </a>
            </div>
          </div>
        </article>

        <article className={styles.restechnical__item}>
          <div className={clsx(styles.restechnical__title, styles['restechnical__title--empty'], 'flexi', 'pb-5')}>
            <span className={styles.h4}>&nbsp;</span>
          </div>
          <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
            <div className={clsx(styles.restechnical__subtitle, styles.h5)}>Ignite Extensions</div>
            <div className={clsx(styles.restechnical__text, 'pt-2')}>
              <p>
                A group of integrations between Apache Ignite and various Java frameworks such as Kafka, Flink, and others.
              </p>
            </div>
            <div className={styles.restechnical__action}>
              <a className="button" href="https://github.com/apache/ignite-extensions" target="_blank" rel="noreferrer">
                Ignite Extensions
              </a>
            </div>
          </div>
        </article>

        <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
          <div className={clsx(styles.restechnical__subtitle, styles.h5)}>Ignite Teamcity Bot</div>
          <div className={clsx(styles.restechnical__text, 'pt-2')}>
            <p className="pb-2">A tool intended to monitor Apache Ignite Teamcity where Apache Ignite is tested</p>
          </div>
          <div className={clsx(styles.restechnical__action, 'flexi')}>
            <a className="button" href="https://github.com/apache/ignite-teamcity-bot" target="_blank" rel="noreferrer">
              Teamcity Bot
            </a>
          </div>
        </div>

        <div className={clsx(styles.restechnical__box, styles.cardsimple)}>
          <div className={clsx(styles.restechnical__subtitle, styles.h5)}>Ignite Website</div>
          <div className={clsx(styles.restechnical__text, 'pt-2')}>
            <p className="pb-2">The repository hosts the source code <br />of the Apache Ignite website</p>
          </div>
          <div className={clsx(styles.restechnical__action, 'flexi')}>
            <a className="button" href="https://github.com/apache/ignite-website" target="_blank" rel="noreferrer">
              Ignite Website
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function LearningResourcesSection() {
  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=UeQKuAQaMNU',
      title: 'In-Memory Computing Essentials',
      description: 'In this video, we introduce the fundamental capabilities of in-memory computing platforms, such as high-speed performance and scalability.',
    },
    {
      url: 'https://www.youtube.com/watch?v=hrnrsIkCnI0',
      title: 'Distributed Computing <br />With Apache Ignite',
      description: 'In this video, we demonstrate how to design and execute distributed computations, and consider all the pros and cons.',
    },
    {
      url: 'https://www.youtube.com/watch?v=TCsl-W0tsEE',
      title: 'Consistency And Transactions <br />Of Apache Ignite',
      description: 'In this webinar, we provide a deep understanding of Apache Ignite\'s support for ACID transactions and data consistency.',
    },
    {
      url: 'https://www.youtube.com/watch?v=eYV-tNLzIts',
      title: 'Apache Ignite <br />SQL Essentials',
      description: 'Learn how to apply a classic SQL database experience while enabling in-memory speeds at petabyte scale for a variety of workloads.',
    },
    {
      url: 'https://www.youtube.com/watch?v=38YgdAOs038',
      title: 'Deploying Apache Ignite In Kubernetes',
      description: 'In this webinar, speakers provide steps on how to deploy Ignite in Kubernetes.',
    },
    {
      url: 'https://www.youtube.com/watch?v=eGlmZoBSS8g',
      title: 'Machine Learning<br />With Apache Ignite',
      description: 'Watch this webinar to learn how to leverage the Apache Ignite machine learning framework to implement a continuous machine learning platform.',
    },
  ];

  return (
    <section className={styles.resvideos} id="learning">
      <div className="container">
        <p className="capstext">LEARNING RESOURCES</p>
        <h2 className={clsx(styles.h4, styles.resicontitle, 'flexi')}>
          <img src="/img/resourses/block-video.svg" alt="" />
          <span>Essential Videos And Webinar Recordings</span>
        </h2>
        <p className={clsx(styles.h5, 'pt-1x')}>Explore our collection of videos featuring widespread use-cases.</p>
        <div className={clsx(styles.resvideos__grid, 'pt-5')}>
          {videos.map((video, idx) => (
            <article key={idx} className={styles.comvideo}>
              <div className={styles.comvideo__box}>
                <a href={video.url} className={styles.comvideo__screen} data-youtube target="_blank" rel="noreferrer">
                  <span className={clsx(styles.comvideo__txt, styles['comvideo__txt--medium'])} dangerouslySetInnerHTML={{ __html: video.title }} />
                  <span className={styles.comvideo__sub}>Webinar <br />recording</span>
                  <img src="/img/resourses/video.png" alt="" />
                </a>
              </div>
              <div className={clsx(styles.comvideo__descr, 'pt-2')}>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={clsx(styles.resvideos__youtube, styles.h5)}>
          Explore{' '}
          <a href="https://www.youtube.com/channel/UChYD3lCEnzHlWioUb2sNgSg" target="_blank" rel="noreferrer">
            the full collection of Apache Ignite videos
          </a>{' '}
          and recordings on YouTube.
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <Section className={styles.rescourses} id="training">
      <h2 className={clsx(styles.h4, styles.resicontitle, 'flexi')}>
        <img src="/img/resourses/icon-training.svg" alt="" />
        <span>Training and Courses</span>
      </h2>
      <p className={clsx('pt-2', styles.h5)}>
        Enhance your knowledge of building high-performance and <br />data-intensive applications with the Apache Ignite capabilities.
      </p>
      <div className={clsx(styles.rescourses__wrap, 'pt-5')}>
        <article className={clsx(styles.rescourse, styles.cardsimple)}>
          <p className={clsx('fz20', styles.rescourse__title, 'pb-2', 'maxline3')}>
            Apache Ignite Essentials: Key Design Principles For Building Data-Intensive Applications
          </p>
          <img src="/img/resourses/training2.svg" alt="" className={styles.rescourse__pic} />
          <p className={clsx(styles.rescourse__descr, 'pb-3', 'pt-2')}>
            Learn about data partitioning, affinity co-location, and co-located processing
          </p>
          <a
            className={clsx(styles.rescourse__button, 'button')}
            href="https://www.gridgain.com/products/services/training/apache-ignite-essentials"
            target="_blank"
            rel="noreferrer"
          >
            Training Schedule
          </a>
        </article>
        <article className={clsx(styles.rescourse, styles.cardsimple)}>
          <p className={clsx('fz20', styles.rescourse__title, 'pb-2', 'maxline3')}>
            Apache Ignite and Kubernetes: Deployment and Orchestration Strategies
          </p>
          <img src="/img/resourses/kubernetes.svg" alt="" className={styles.rescourse__pic} />
          <p className={clsx(styles.rescourse__descr, 'pb-3', 'pt-2')}>
            Learn how to deploy and orchestrate Apache Ignite in a Kubernetes environment
          </p>
          <a
            className={clsx(styles.rescourse__button, 'button')}
            href="https://www.gridgain.com/products/services/training/apache-ignite-and-kubernetes-deployment-and-orchestration-strategies"
            target="_blank"
            rel="noreferrer"
          >
            Training Schedule
          </a>
        </article>
        <article className={clsx(styles.rescourse, styles.cardsimple)}>
          <p className={clsx('fz20', styles.rescourse__title, 'pb-2', 'maxline3')}>
            Apache Ignite For Spring Boot And Spring Data Development
          </p>
          <img src="/img/resourses/training3.svg" alt="" className={styles.rescourse__pic} />
          <p className={clsx(styles.rescourse__descr, 'pb-3', 'pt-2')}>
            Explore the best practices and nuances of using Spring Boot and Spring Data with Apache Ignite
          </p>
          <a
            className={clsx(styles.rescourse__button, 'button')}
            href="https://www.gridgain.com/products/services/training/apache-ignite-spring-boot-and-spring-data-development"
            target="_blank"
            rel="noreferrer"
          >
            Training Schedule
          </a>
        </article>
      </div>
      <div className={clsx(styles.resourses__bottom, 'pt-5')}>
        <a className="button button--shadow" href="https://www.gridgain.com/services/training" target="_blank" rel="noreferrer">
          Explore Other Free Training Courses
        </a>
      </div>
    </Section>
  );
}

function BookSection() {
  return (
    <Section className={styles.resbook} id="book">
      <h2 className={clsx(styles.h4, styles.resicontitle, 'flexi')}>
        <img src="/img/resourses/block-book.svg" alt="" />
        <span>Apache Ignite Book</span>
      </h2>
      <p className={clsx('pt-2', styles.h5)}>
        This book is useful for developers and architects who want to expand <br />their knowledge of in-memory computing and distributed databases.
      </p>
      <div className={clsx(styles.resbook__wrap, 'pt-5', 'flexi')}>
        <div className={styles.resbook__picwrap}>
          <img src="/img/resourses/book-cover.jpg" alt="" />
        </div>
        <div className={styles.resbook__content}>
          <div className={clsx(styles.resbook__caps, 'capstext', 'pb-5')}>
            The book is recommended by <br />the Apache Ignite Community
          </div>
          <blockquote className={clsx(styles.resbook__quote, styles.h5)}>
            This is one of the very few good books on Apache Ignite. It covers <br />the whole spectrum of Ignite. From use-cases and architecture to maintenance and code examples that get your hands dirty. If you want one book to get it all, this is it!
          </blockquote>
          <div className={clsx('cmtyhistory__avaavtor', 'pt-3', 'flexi')}>
            <div className="cmtyhistory__avaright cmtyhistory__avaright--noimg">
              <div className="cmtyhistory__avaname">Edward Kuenen</div>
              <div className="cmtyhistory__avaproff">Software developer</div>
            </div>
          </div>
          <a className={clsx('button', styles.resbook__button)} href="https://github.com/srecon/the-apache-ignite-book" target="_blank" rel="noreferrer">
            Visit Book GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

function MailingListsSection() {
  return (
    <Section className={styles.resmail} id="mail">
      <h2 className={clsx(styles.h4, styles.resicontitle, 'flexi')}>
        <img src="/img/resourses/icon-email.svg" alt="" />
        <span>Mailing Lists, Forums And Discussion Archives</span>
      </h2>
      <p className={clsx('pt-2', styles.h5)}>
        Connect with the Ignite community through our mailing lists and forums.
      </p>
      <div className={clsx(styles.resmail__grid, 'pt-5')}>
        <article className={clsx(styles.resmail__item, styles.cardsimple)}>
          <h3 className={clsx(styles.h5, 'pb-2')}>User Mailing List</h3>
          <p>For general questions about using Apache Ignite</p>
          <div className={clsx(styles.resmail__links, 'pt-3')}>
            <a href="mailto:user@ignite.apache.org" className="button">
              Contact
            </a>
            <a href="https://lists.apache.org/list.html?user@ignite.apache.org" target="_blank" rel="noreferrer" className="button">
              Archives
            </a>
          </div>
        </article>
        <article className={clsx(styles.resmail__item, styles.cardsimple)}>
          <h3 className={clsx(styles.h5, 'pb-2')}>Dev Mailing List</h3>
          <p>For discussions related to Apache Ignite development</p>
          <div className={clsx(styles.resmail__links, 'pt-3')}>
            <a href="mailto:dev@ignite.apache.org" className="button">
              Contact
            </a>
            <a href="https://lists.apache.org/list.html?dev@ignite.apache.org" target="_blank" rel="noreferrer" className="button">
              Archives
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}

export default function ResourcesPage(): ReactNode {
  return (
    <Layout>
      <Head>
        <title>Apache Ignite Resources – Videos, Examples, Book</title>
        <meta
          name="description"
          content="Explore our collection of videos, webinar recordings, examples, and other Ignite resources. Download the Apache Ignite book."
        />
        <link rel="canonical" href="https://ignite.apache.org/resources.html" />
        <meta property="og:title" content="Apache Ignite Resources – Videos, Examples, Book" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/resources.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Explore our collection of videos, webinar recordings, examples, and other Ignite resources. Download the Apache Ignite book."
        />
      </Head>
      <main>
        <HeroSection />
        <TechnicalResourcesSection />
        <LearningResourcesSection />
        <TrainingSection />
        <BookSection />
        <MailingListsSection />
      </main>
    </Layout>
  );
}
