import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Section from '@site/src/components/Section';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './docs.module.css';

const IGNITE3_VERSION = '3.1.0';
const IGNITE2_VERSION = '2.17.0';

interface DocVersion {
  title: string;
  version: string;
  description: string;
  status: string;
  href: string;
  links: { label: string; href: string }[];
  primary?: boolean;
}

const docVersions: DocVersion[] = [
  {
    title: 'Apache Ignite 3',
    version: IGNITE3_VERSION,
    description: 'Current generation featuring redesigned architecture with improved performance, simplified operations, and enhanced developer experience.',
    status: 'Current',
    href: `/docs/ignite3/${IGNITE3_VERSION}/`,
    primary: true,
    links: [
      { label: 'Quick Start', href: `/docs/ignite3/${IGNITE3_VERSION}/getting-started/quick-start` },
      { label: 'SQL Reference', href: `/docs/ignite3/${IGNITE3_VERSION}/sql/` },
      { label: 'Java Client', href: `/docs/ignite3/${IGNITE3_VERSION}/api-reference/native-clients/java/` },
      { label: 'Installation', href: `/docs/ignite3/${IGNITE3_VERSION}/configure-and-operate/installation/` },
    ],
  },
  {
    title: 'Apache Ignite 2',
    version: IGNITE2_VERSION,
    description: 'Long-term support (LTS) generation. Production-proven and battle-tested for enterprise workloads.',
    status: 'LTS',
    href: `/docs/ignite2/${IGNITE2_VERSION}/`,
    links: [
      { label: 'Quick Start', href: `/docs/ignite2/${IGNITE2_VERSION}/quick-start/java.html` },
      { label: 'SQL Reference', href: `/docs/ignite2/${IGNITE2_VERSION}/SQL/sql-introduction.html` },
      { label: 'Thin Clients', href: `/docs/ignite2/${IGNITE2_VERSION}/thin-clients/getting-started-with-thin-clients.html` },
      { label: 'Installation', href: `/docs/ignite2/${IGNITE2_VERSION}/installation/installing-using-zip.html` },
    ],
  },
];

function HeroSection() {
  return (
    <section className="innerhero">
      <div className="container innerhero__cont">
        <div className="innerhero__main">
          <div className="innerhero__pre pb-3">Apache Ignite</div>
          <h1 className="h1 innerhero__h1">Documentation</h1>
          <div className="innerhero__descr pt-2 h5">
            Technical documentation for building
            <br />
            distributed applications with Apache Ignite
          </div>
        </div>
        <img
          className="innerhero__pic innerhero__pic--docs"
          src="/img/features/key-value/hero.svg"
          alt="Apache Ignite Documentation"
        />
      </div>
    </section>
  );
}

function DocVersionCard({ doc }: { doc: DocVersion }) {
  return (
    <article className={clsx(styles.versionCard, 'cardsimple', doc.primary && styles.versionCardPrimary)}>
      <div className={styles.versionHeader}>
        <h3 className="h4">{doc.title}</h3>
        <span className={clsx(styles.versionBadge, doc.primary ? styles.badgeCurrent : styles.badgeLts)}>
          {doc.status}
        </span>
      </div>
      <p className={styles.versionNumber}>Version {doc.version}</p>
      <p className={styles.versionDescription}>{doc.description}</p>
      <div className={styles.quickLinks}>
        <p className="capstext">Quick Links</p>
        <ul className={styles.linksList}>
          {doc.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href={doc.href} className={clsx('button', doc.primary ? '' : 'button--ghost')}>
        View Documentation
      </a>
    </article>
  );
}

function VersionsSection() {
  return (
    <Section id="versions" className={styles.versions}>
      <p className="capstext">Choose Your Version</p>
      <h2 className="h3 pt-2">Select the Documentation for Your Deployment</h2>
      <div className={styles.versionsGrid}>
        {docVersions.map((doc) => (
          <DocVersionCard key={doc.title} doc={doc} />
        ))}
      </div>
    </Section>
  );
}

function GuidanceSection() {
  return (
    <Section id="guidance" className={styles.guidance}>
      <p className="capstext">Getting Started</p>
      <h2 className="h3 pt-2">Which Version Should I Use?</h2>
      <div className={styles.guidanceGrid}>
        <article className={clsx(styles.guidanceCard, 'cardsimple')}>
          <div className={styles.guidanceIcon}>
            <img src="/img/resourses/res2-book.svg" alt="" />
          </div>
          <h3 className="h5">Starting a New Project?</h3>
          <p>
            Use <strong>Apache Ignite 3</strong>. It offers a modern architecture,
            improved performance, and a better developer experience.
          </p>
        </article>
        <article className={clsx(styles.guidanceCard, 'cardsimple')}>
          <div className={styles.guidanceIcon}>
            <img src="/img/resourses/block-book.svg" alt="" />
          </div>
          <h3 className="h5">Existing Ignite 2 Deployment?</h3>
          <p>
            Continue with <strong>Apache Ignite 2</strong> documentation.
            When ready, see our{' '}
            <a href={`/docs/ignite3/${IGNITE3_VERSION}/getting-started/migrate-from-ignite-2`}>
              migration guide
            </a>.
          </p>
        </article>
      </div>
    </Section>
  );
}

function ResourcesSection() {
  return (
    <Section id="resources" className={styles.resources}>
      <p className="capstext">Additional Resources</p>
      <h2 className="h3 pt-2">Source Code and Community</h2>
      <div className={styles.resourcesGrid}>
        <a
          href="https://github.com/apache/ignite-3"
          className={clsx(styles.resourceCard, 'cardsimple')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="h5">Ignite 3 GitHub</h4>
          <p>Current generation development</p>
        </a>
        <a
          href="https://github.com/apache/ignite"
          className={clsx(styles.resourceCard, 'cardsimple')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="h5">Ignite 2 GitHub</h4>
          <p>Long-term support (LTS)</p>
        </a>
        <a
          href="https://cwiki.apache.org/confluence/display/IGNITE/"
          className={clsx(styles.resourceCard, 'cardsimple')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="h5">Apache Ignite Wiki</h4>
          <p>Design documents and proposals</p>
        </a>
        <a href="/community" className={clsx(styles.resourceCard, 'cardsimple')}>
          <h4 className="h5">Community</h4>
          <p>Mailing lists and support channels</p>
        </a>
      </div>
    </Section>
  );
}

export default function DocsLandingPage(): React.JSX.Element {
  const canonicalUrl = useCanonicalUrl('/docs/');

  return (
    <Layout
      title="Documentation"
      description="Apache Ignite Documentation - Choose between Apache Ignite 3 (current) and Apache Ignite 2 (LTS)"
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Documentation - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite Documentation - Choose between Apache Ignite 3 (current) and Apache Ignite 2 (LTS)"
        />
      </Head>

      <HeroSection />
      <VersionsSection />
      <GuidanceSection />
      <ResourcesSection />
    </Layout>
  );
}
