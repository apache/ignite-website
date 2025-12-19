import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Section from '@site/src/components/Section';
import { DOCS_BASE_PATH } from '@site/src/config/docs-urls';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './resources.module.css';

// Data definitions
// Documentation links are relative paths, resolved with baseUrl at build time
const DOCS_BASE_URL = DOCS_BASE_PATH;

const gettingStartedLinks = [
  {
    title: 'Quick Start Guide',
    description: 'Get started with Apache Ignite in 5 minutes. Download, install, and execute your first queries.',
    url: `${DOCS_BASE_URL}/getting-started/quick-start`,
    featured: true,
  },
  {
    title: 'Start Your First Cluster',
    description: 'Launch a local cluster and verify topology',
    url: `${DOCS_BASE_URL}/getting-started/start-cluster`,
  },
  {
    title: 'Work with SQL',
    description: 'Execute queries, create tables, manipulate data',
    url: `${DOCS_BASE_URL}/getting-started/work-with-sql`,
  },
  {
    title: 'Table API',
    description: 'Use the Table API for record-view or key-value operations',
    url: `${DOCS_BASE_URL}/getting-started/key-value-api`,
  },
];

const documentationLinks = {
  core: [
    { title: 'Apache Ignite 3 Documentation', url: `${DOCS_BASE_URL}/`, primary: true },
    { title: 'SQL Reference', url: `${DOCS_BASE_URL}/sql/` },
    { title: 'Java API Reference', url: `${DOCS_BASE_URL}/api-reference/native-clients/java/` },
    { title: '.NET API Reference', url: `${DOCS_BASE_URL}/api-reference/native-clients/dotnet/` },
    { title: 'Apache Ignite 2 Documentation (LTS)', url: 'https://ignite.apache.org/docs/ignite2/latest/', secondary: true },
  ],
  architecture: [
    { title: 'Core Concepts', url: `${DOCS_BASE_URL}/understand/` },
    { title: 'Installation Guides', url: `${DOCS_BASE_URL}/configure-and-operate/installation/` },
    { title: 'Configuration & Monitoring', url: `${DOCS_BASE_URL}/configure-and-operate/` },
    { title: 'Ignite Wiki', url: 'https://cwiki.apache.org/confluence/display/IGNITE/', external: true },
  ],
};

const repositoryLinks = [
  {
    title: 'Apache Ignite 3',
    description: 'Current generation development',
    url: 'https://github.com/apache/ignite-3',
    primary: true,
  },
  {
    title: 'Apache Ignite 2',
    description: 'Long-term support (LTS)',
    url: 'https://github.com/apache/ignite',
  },
  {
    title: 'Ignite Extensions',
    description: 'Integrations for Kafka, Flink, and more',
    url: 'https://github.com/apache/ignite-extensions',
  },
];

const trainingCourses = [
  {
    title: 'Apache Ignite Essentials: Key Design Principles For Building Data-Intensive Applications',
    description: 'Learn about data partitioning, affinity co-location, and co-located processing',
    image: '/img/resourses/training2.svg',
    url: 'https://www.gridgain.com/products/services/training/apache-ignite-essentials',
  },
  {
    title: 'Apache Ignite and Kubernetes: Deployment and Orchestration Strategies',
    description: 'Learn how to deploy and orchestrate Apache Ignite in a Kubernetes environment',
    image: '/img/resourses/kubernetes.svg',
    url: 'https://www.gridgain.com/products/services/training/apache-ignite-and-kubernetes-deployment-and-orchestration-strategies',
  },
  {
    title: 'Apache Ignite For Spring Boot And Spring Data Development',
    description: 'Explore the best practices and nuances of using Spring Boot and Spring Data with Apache Ignite',
    image: '/img/resourses/training3.svg',
    url: 'https://www.gridgain.com/products/services/training/apache-ignite-spring-boot-and-spring-data-development',
  },
];

const communityChannels = [
  {
    title: 'User Mailing List',
    description: 'Questions about using Apache Ignite',
    contactUrl: 'mailto:user@ignite.apache.org',
    archiveUrl: 'https://lists.apache.org/list.html?user@ignite.apache.org',
  },
  {
    title: 'Dev Mailing List',
    description: 'Development discussions',
    contactUrl: 'mailto:dev@ignite.apache.org',
    archiveUrl: 'https://lists.apache.org/list.html?dev@ignite.apache.org',
  },
  {
    title: 'Stack Overflow',
    description: 'Technical Q&A with the apache-ignite tag',
    url: 'https://stackoverflow.com/questions/tagged/apache-ignite',
  },
  {
    title: 'Slack Discussions',
    description: 'ASF Community conversations and support',
    joinUrl: 'https://join.slack.com/t/the-asf/shared_invite/zt-3jdgark5c-fZpONqHfM~PoSS4qEoOl7g',
  },
];

function HeroSection() {
  return (
    <section className="innerhero">
      <div className="container innerhero__cont">
        <div className="innerhero__main">
          <div className="innerhero__pre pb-3">Apache Ignite</div>
          <h1 className="h1 innerhero__h1">Developer Resources</h1>
          <div className="innerhero__descr pt-2 h5">
            Documentation, tutorials, and tools for building
            <br />
            distributed applications with Apache Ignite
          </div>
        </div>
        <img
          className="innerhero__pic innerhero__pic--resources"
          src="/img/resourses/hero.svg"
          alt="Apache Ignite Resources"
        />
      </div>
    </section>
  );
}

function GetStartedSection() {
  const featured = gettingStartedLinks.find((link) => link.featured);
  const secondary = gettingStartedLinks.filter((link) => !link.featured);

  return (
    <Section id="get-started" className={styles.getStarted}>
      <p className="capstext">Get Started</p>
      <h2 className="h3 pt-2">Begin Your Journey with Apache Ignite</h2>
      <div className={styles.getStartedGrid}>
        {featured && (
          <article className={clsx(styles.getStartedFeatured, 'cardsimple')}>
            <div className={styles.getStartedFeaturedContent}>
              <h3 className="h4">{featured.title}</h3>
              <p className="pt-2 pb-5">{featured.description}</p>
              <a className="button" href={featured.url} target="_blank" rel="noreferrer">
                Start Now
              </a>
            </div>
            <div className={styles.getStartedFeaturedImage}>
              <img src="/img/resourses/res2-book.svg" alt="" />
            </div>
          </article>
        )}
        <div className={styles.getStartedSecondary}>
          {secondary.map((link, idx) => (
            <a key={idx} href={link.url} className={clsx(styles.getStartedCard, 'cardsimple')} target="_blank" rel="noreferrer">
              <h4 className="h5">{link.title}</h4>
              <p>{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DocumentationHubSection() {
  return (
    <Section id="documentation" className={styles.docsHub}>
      <p className="capstext">Documentation</p>
      <h2 className="h3 pt-2">Technical Documentation</h2>
      <div className={styles.docsHubGrid}>
        <div className={styles.docsCategory}>
          <div className={clsx(styles.docsCategoryHeader, 'flexi')}>
            <img src="/img/resourses/res2-book.svg" alt="" />
            <h3 className="h5">Core Documentation</h3>
          </div>
          <ul className={styles.docsList}>
            {documentationLinks.core.map((link, idx) => (
              <li key={idx} className={clsx(styles.docsItem, link.primary && styles.docsItemPrimary)}>
                <a href={link.url} className={link.secondary ? styles.docsItemSecondary : undefined} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.docsCategory}>
          <div className={clsx(styles.docsCategoryHeader, 'flexi')}>
            <img src="/img/resourses/res2-book2.svg" alt="" />
            <h3 className="h5">Architecture & Operations</h3>
          </div>
          <ul className={styles.docsList}>
            {documentationLinks.architecture.map((link, idx) => (
              <li key={idx} className={styles.docsItem}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.title}
                  {link.external && <span className={styles.externalIcon}> ↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function SourceCodeSection() {
  return (
    <Section id="source-code" className={styles.sourceCode}>
      <div className={clsx(styles.sourceCategoryHeader, 'flexi')}>
        <img src="/img/icon-github.svg" alt="" />
        <h2 className="h4">Source Code</h2>
      </div>
      <div className={styles.sourceGrid}>
        {repositoryLinks.map((repo, idx) => (
          <article key={idx} className={clsx(styles.sourceCard, 'cardsimple', repo.primary && styles.sourceCardPrimary)}>
            <h3 className="h5">{repo.title}</h3>
            <p className="pt-1 pb-3">{repo.description}</p>
            <a className="button" href={repo.url} target="_blank" rel="noreferrer">
              View Repository
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function TrainingSection() {
  return (
    <Section id="training" className={styles.training}>
      <div className={clsx(styles.trainingHeader, 'flexi')}>
        <img src="/img/resourses/icon-training.svg" alt="" />
        <h2 className="h4">Training and Courses</h2>
      </div>
      <p className="pt-2 h5">
        Enhance your knowledge of building high-performance and data-intensive applications.
      </p>
      <div className={styles.trainingGrid}>
        {trainingCourses.map((course, idx) => (
          <article key={idx} className={clsx(styles.trainingCard, 'cardsimple')}>
            <h3 className={styles.trainingCardTitle}>{course.title}</h3>
            <img src={course.image} alt="" className={styles.trainingCardImage} />
            <p className={styles.trainingCardDescription}>{course.description}</p>
            <a className="button" href={course.url} target="_blank" rel="noreferrer">
              Training Schedule
            </a>
          </article>
        ))}
      </div>
      <div className={styles.trainingMore}>
        <a className="button button--shadow" href="https://www.gridgain.com/services/training" target="_blank" rel="noreferrer">
          Explore Other Free Training Courses
        </a>
      </div>
    </Section>
  );
}

function CommunitySection() {
  return (
    <Section id="community" className={styles.community}>
      <div className={clsx(styles.communityHeader, 'flexi')}>
        <img src="/img/community/b12-icon-quest.svg" alt="" />
        <h2 className="h4">Community</h2>
      </div>
      <p className="pt-2 h5">Connect with the Apache Ignite community.</p>
      <div className={styles.communityGrid}>
        {communityChannels.map((channel, idx) => (
          <article key={idx} className={clsx(styles.communityCard, 'cardsimple')}>
            <h3 className="h5">{channel.title}</h3>
            <p>{channel.description}</p>
            <div className={styles.communityLinks}>
              {channel.contactUrl && channel.archiveUrl ? (
                <>
                  <a href={channel.contactUrl} className="button">
                    Subscribe
                  </a>
                  <a href={channel.archiveUrl} target="_blank" rel="noreferrer" className="button button--shadow">
                    Archives
                  </a>
                </>
              ) : channel.joinUrl ? (
                <a href={channel.joinUrl} target="_blank" rel="noreferrer" className="button">
                  Join
                </a>
              ) : (
                <a href={channel.url} target="_blank" rel="noreferrer" className="button">
                  Visit
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ReadyToStart() {
  return (
    <section className={styles.toolingend}>
      <div className={clsx('container', 'flexi')}>
        <div className={styles.toolingend__main}>
          <p className={clsx(styles.toolingend__title, 'h3')}>
            <strong>Ready To Start?</strong>
          </p>
          <p className="h5 pt-2">
            Discover our quick start guides and build your first
            <br />
            application in 5-10 minutes
          </p>
        </div>
        <div className={styles.toolingend__action}>
          <a className="button" href={`${DOCS_BASE_URL}/getting-started/quick-start`} target="_blank" rel="noreferrer">
            Discover Quick Start Guide
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage(): ReactNode {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Resources - Documentation, Tutorials, Training</title>
        <meta
          name="description"
          content="Developer resources for Apache Ignite: documentation, tutorials, source code, training courses, and community channels."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite Resources" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Developer resources for Apache Ignite: documentation, tutorials, source code, training courses, and community channels."
        />
      </Head>
      <main>
        <HeroSection />
        <GetStartedSection />
        <DocumentationHubSection />
        <SourceCodeSection />
        <TrainingSection />
        <CommunitySection />
        <ReadyToStart />
      </main>
    </Layout>
  );
}
