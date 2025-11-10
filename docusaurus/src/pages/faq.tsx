import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import styles from './faq.module.css';

interface FAQCardProps {
  question: string;
  answer: string;
  description?: ReactNode;
  learnMoreLink?: string;
  learnMoreText?: string;
}

function FAQCard({ question, answer, description, learnMoreLink, learnMoreText }: FAQCardProps) {
  return (
    <article className={clsx(styles.faqbox, styles.cardsimple)}>
      <h3 className={clsx(styles.faqbox__itemtitle, styles.h5)}>{question}</h3>
      <div className={clsx(styles.faqbox__anwser, styles.h5, 'pt-3')}>{answer}</div>
      <div className={clsx(styles.faqbox__text, 'pt-3')}>
        {description}
      </div>
      {learnMoreLink && (
        <div className={styles.cardsimple__bottom}>
          <Link to={learnMoreLink} className="button button--shadow">
            {learnMoreText || 'Learn More'}
          </Link>
        </div>
      )}
    </article>
  );
}

function HeroSection() {
  return (
    <section className={clsx(styles.innerhero, styles['innerhero--faq'])}>
      <div className={clsx('container', styles.innerhero__cont)}>
        <div className={clsx(styles.innerhero__main, styles['innerhero__main--long'])}>
          <h1 className={clsx(styles.h1, styles.innerhero__h1)}>
            Frequently Asked Questions <br />About Apache Ignite
          </h1>
          <div className={clsx(styles.innerhero__descr, 'pt-5', styles.h4)}>
            Ignite's rich feature set means it has a myriad of use cases.<br />
            Is Ignite a cache, transactional database, key-value store? <br />Find the answers below.
          </div>
        </div>
        <img
          src="/img/faq/hero.svg"
          alt="Frequently asked questions"
          className={clsx(styles.innerhero__pic, styles['innerhero__pic--faq'])}
        />
      </div>
    </section>
  );
}

function InMemoryComputingSection() {
  return (
    <Section className={styles.faqabout}>
      <div className="capstext">Apache Ignite FAQs</div>
      <div className={clsx(styles.faqabout__wrap, 'flexi', 'pt-5')}>
        <div className={styles.faqabout__left}>
          <h2 className={clsx(styles.h4, 'pb-2')}>What Is In-Memory Computing?</h2>
          <p>
            In-memory computing is a software and data-processing technique that stores data sets in memory across a cluster of interconnected nodes. An average speed performance is 10-1000x faster than in disk-based systems.
          </p>
          <p>
            In-memory computing software includes a distributed in-memory store with APIs and libraries optimized for high-performance data processing. Each cluster node (physical or virtual machine) contributes its available memory space with CPU cores to the total capacity of the cluster.
          </p>
          <p>
            An application interacts with the cluster as a single unit, letting the in-memory computing software shield and manage all the internals related to inter-node communications, data distribution, and queries processing. The cluster scales linearly and horizontally to meet the data volume and throughput goals of the applications.
          </p>
        </div>
        <aside className={styles.faqabout__right}>
          <div className={clsx(styles.faqabout__num, styles.h3)}>10-1000x</div>
          <p className={styles.h5}>performance increase</p>
          <div className={clsx(styles.faqabout__rightbot, styles.h5)}>Unlimited horizontal scalability</div>
        </aside>
      </div>
    </Section>
  );
}

function FeatureBenefitsSection() {
  return (
    <Section className={styles.faqfeats}>
      <h2 className={clsx(styles.h4, styles.faqfeats__title)}>
        Apache Ignite Belongs To The In-Memory <br />Computing Category:
      </h2>
      <div className={clsx(styles.faqfeats__wrap, 'flexi', 'pt-5')}>
        <article className={clsx(styles.faqfeat, 'pt-1')}>
          <div className={clsx(styles.faqfeat__iconwrap, 'flexi')}>
            <img src="/img/faq/icon-faq1.svg" alt="" />
          </div>
          <div className={clsx(styles.faqfeat__text, 'pt-2')}>
            Build real-time and event-driven solutions that process data with in-memory speed
          </div>
        </article>
        <article className={clsx(styles.faqfeat, 'pt-1')}>
          <div className={clsx(styles.faqfeat__iconwrap, 'flexi')}>
            <img src="/img/faq/icon-faq2.svg" alt="" />
          </div>
          <div className={clsx(styles.faqfeat__text, 'pt-2')}>
            Scale up and out across available memory and disk capacity
          </div>
        </article>
        <article className={clsx(styles.faqfeat, 'pt-1')}>
          <div className={clsx(styles.faqfeat__iconwrap, 'flexi')}>
            <img src="/img/faq/icon-faq3.svg" alt="" />
          </div>
          <div className={clsx(styles.faqfeat__text, 'pt-2')}>
            Take advantage of built-in SQL, high-performance computing and real-time processing APIs
          </div>
        </article>
      </div>
    </Section>
  );
}

function FAQCardsSection() {
  const faqItems: FAQCardProps[] = [
    {
      question: 'Is Ignite A Distributed Cache?',
      answer: 'Yes',
      description: (
        <p>
          When Ignite native persistence is disabled, Ignite can function as a distributed in-memory cache with support distributed ACID transactions, SQL queries, high-performance computing APIs, and more.
        </p>
      ),
      learnMoreLink: '/use-cases/in-memory-cache',
      learnMoreText: 'Learn More: In-Memory Cache',
    },
    {
      question: 'Is Ignite A Distributed Database?',
      answer: 'Yes',
      description: (
        <>
          <p>
            Ignite is a distributed database for high-performance computing with in-memory speed.
          </p>
          <p>
            Data in Ignite is stored in-memory and/or on-disk, and is either partitioned or replicated across a cluster of multiple nodes. This provides scalability, performance, and resiliency.
          </p>
        </>
      ),
      learnMoreLink: '/arch/multi-tier-storage',
      learnMoreText: 'Learn More: Multi-Tier Storage',
    },
    {
      question: 'Is Ignite An In-Memory Database?',
      answer: 'Yes',
      description: (
        <p>
          Ignite multi-tier storage supports both in-memory and disk tiers. You can always disable the native persistence and use Ignite as a distributed in-memory database, with support for SQL, transactions and other APIs.
        </p>
      ),
      learnMoreLink: '/use-cases/in-memory-database',
      learnMoreText: 'Learn More: In-Memory Database',
    },
    {
      question: 'Is Ignite An In-Memory Data Grid?',
      answer: 'Yes',
      description: (
        <p>
          Ignite is a full-featured distributed data grid. As a grid, Ignite can automatically integrate with and accelerate any 3rd party databases, including any RDBMS or NoSQL stores.
        </p>
      ),
      learnMoreLink: '/use-cases/in-memory-data-grid',
      learnMoreText: 'Learn More: In-Memory Data Grid',
    },
    {
      question: 'Is Ignite An SQL Database?',
      answer: 'Not fully',
      description: (
        <>
          <p>
            Although Ignite supports SQL natively, there are differences in how Ignite handles constraints and indexes.
          </p>
          <p>
            Ignite supports primary and secondary indexes, however the uniqueness can only be enforced for the primary indexes. Ignite also does not support foreign key constraints at the moment.
          </p>
        </>
      ),
      learnMoreLink: '/use-cases/in-memory-database',
      learnMoreText: 'Learn More: SQL Database',
    },
    {
      question: 'Is Ignite A Disk- Or Memory-Only Storage?',
      answer: 'Both',
      description: (
        <>
          <p>
            Native persistence in Ignite can be turned on and off. This allows Ignite to store data sets bigger than can fit in the available memory.
          </p>
          <p>
            Essentially, smaller operational data sets can be stored in-memory only, and larger data sets that do not fit in memory can be stored on disk, using memory as a caching layer for better performance.
          </p>
        </>
      ),
      learnMoreLink: '/arch/native-persistence',
      learnMoreText: 'Learn More: Native Persistence',
    },
    {
      question: 'Is Ignite A NoSQL Database?',
      answer: 'Not exactly',
      description: (
        <>
          <p>
            Just like other NoSQL databases, Ignite is highly available and horizontally scalable.
          </p>
          <p>
            However, unlike other NoSQL databases, Ignite supports SQL and ACID transactions across multiple cluster nodes.
          </p>
        </>
      ),
    },
    {
      question: 'Is Ignite A Transactional Database?',
      answer: 'Not fully',
      description: (
        <>
          <p>
            ACID Transactions are supported, but only at key-value API level. Ignite also supports cross-partition transactions, which means that transactions can span keys residing in different partitions on different servers.
          </p>
          <p>
            At SQL level, Ignite supports atomic but not yet transactional consistency. A SQL transactions implementation is already{' '}
            <a href="https://cwiki.apache.org/confluence/display/IGNITE/IEP-3%3A+Transactional+SQL" target="_blank" rel="noreferrer">
              in the works
            </a>{' '}
            and will be released in Ignite 3.
          </p>
        </>
      ),
      learnMoreLink: '/features/acid-transactions',
      learnMoreText: 'Learn More: ACID Transactions',
    },
    {
      question: 'Is Ignite A Multi-Model Database?',
      answer: 'Yes',
      description: (
        <>
          <p>Ignite supports both key-value and SQL for modelling and accessing data.</p>
          <p>In addition, Ignite provides strong processing APIs for computing on distributed data.</p>
        </>
      ),
    },
    {
      question: 'Is Ignite A Key-Value Store?',
      answer: 'Yes',
      description: (
        <p>
          Ignite provides a feature-rich key-value API that is JCache (JSR-107) compliant and supports Java, C++, .NET, and other programming languages.
        </p>
      ),
      learnMoreLink: '/use-cases/key-value-store',
      learnMoreText: 'Learn More: Distributed Key-Value Store',
    },
  ];

  return (
    <section className={clsx(styles.faqboxs, 'container')}>
      {faqItems.map((item, idx) => (
        <FAQCard key={idx} {...item} />
      ))}
    </section>
  );
}

function ReadyToStartSection() {
  return (
    <section className={clsx(styles.toolingend, styles['toolingend--front'])}>
      <div className={clsx('container', 'flexi')}>
        <div className={styles.toolingend__main}>
          <p className={clsx(styles.toolingend__title, styles.h3)}>
            <strong>Ready To Start?</strong>
          </p>
          <p className={clsx(styles.h5, 'pt-2')}>
            Discover our quick start guides and build your first <br />application in 5-10 minutes
          </p>
        </div>
        <div className={styles.toolingend__action}>
          <a className="button" href="https://ignite.apache.org/docs/latest/" target="_blank" rel="noreferrer">
            Discover Quick Start Guide
          </a>
        </div>
      </div>
    </section>
  );
}

export default function FAQPage(): ReactNode {
  return (
    <Layout>
      <Head>
        <title>What Is Apache Ignite - FAQ</title>
        <meta name="description" content="What is Apache Ignite? What is in-memory computing? Read the answers on our FAQ page." />
        <link rel="canonical" href="https://ignite.apache.org/faq.html" />
        <meta property="og:title" content="What Is Apache Ignite - FAQ" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/faq.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta property="og:description" content="What is Apache Ignite? What is in-memory computing? Read the answers on our FAQ page." />
      </Head>
      <main>
        <HeroSection />
        <InMemoryComputingSection />
        <FeatureBenefitsSection />
        <FAQCardsSection />
        <ReadyToStartSection />
      </main>
    </Layout>
  );
}
