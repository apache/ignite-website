import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Section from '@site/src/components/Section';
import Ignite3StatusNote, { IGNITE3_STATUS_SHORT } from '@site/src/components/Ignite3StatusNote';
import {
  IGNITE2_VERSION,
  IGNITE2_DOCS_PATHS,
  IGNITE3_VERSION,
  IGNITE3_DOCS_PATHS,
} from '@site/src/config/docs-urls';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './docs.module.css';

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
    title: 'Apache Ignite 2',
    version: IGNITE2_VERSION,
    description: 'Actively developed and maintained. Production-proven and recommended for new projects and production deployments.',
    status: 'Recommended',
    href: IGNITE2_DOCS_PATHS.index,
    primary: true,
    links: [
      { label: 'Quick Start', href: IGNITE2_DOCS_PATHS.quickStart },
      { label: 'SQL Reference', href: IGNITE2_DOCS_PATHS.sql },
      { label: 'Thin Clients', href: IGNITE2_DOCS_PATHS.thinClients },
      { label: 'Installation', href: IGNITE2_DOCS_PATHS.installation },
    ],
  },
  {
    title: 'Apache Ignite 3',
    version: IGNITE3_VERSION,
    description: `Separate codebase with a redesigned architecture. ${IGNITE3_STATUS_SHORT}.`,
    status: 'Available',
    href: IGNITE3_DOCS_PATHS.index,
    links: [
      { label: 'Quick Start', href: IGNITE3_DOCS_PATHS.gettingStarted.quickStart },
      { label: 'SQL Reference', href: IGNITE3_DOCS_PATHS.sql.index },
      { label: 'Java Client', href: IGNITE3_DOCS_PATHS.apiReference.javaClient },
      { label: 'Installation', href: IGNITE3_DOCS_PATHS.configureAndOperate.installation },
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
            Use <strong>Apache Ignite 2</strong>. It is actively developed and maintained,
            and it is the version the community recommends for production deployments.
          </p>
        </article>
        <article className={clsx(styles.guidanceCard, 'cardsimple')}>
          <div className={styles.guidanceIcon}>
            <img src="/img/resourses/block-book.svg" alt="" />
          </div>
          <h3 className="h5">Already Using Ignite 3?</h3>
          <Ignite3StatusNote />
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
          href="https://github.com/apache/ignite"
          className={clsx(styles.resourceCard, 'cardsimple')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="h5">Ignite 2 GitHub</h4>
          <p>Actively developed, recommended version</p>
        </a>
        <a
          href="https://github.com/apache/ignite-3"
          className={clsx(styles.resourceCard, 'cardsimple')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="h5">Ignite 3 GitHub</h4>
          <p>{IGNITE3_STATUS_SHORT}</p>
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
      description="Apache Ignite Documentation - Apache Ignite 2 (recommended) and Apache Ignite 3"
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Documentation - Apache Ignite" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Apache Ignite Documentation - Apache Ignite 2 (recommended) and Apache Ignite 3"
        />
      </Head>

      <HeroSection />
      <VersionsSection />
      <GuidanceSection />
      <ResourcesSection />
    </Layout>
  );
}
