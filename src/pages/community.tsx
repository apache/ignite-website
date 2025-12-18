import React, { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import { pmcMembers, type Committer } from '@site/src/data/committers';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './community.module.css';

function HeroSection() {
  return (
    <section className="innerhero">
      <div className="container innerhero__cont">
        <div className="innerhero__main">
          <div className="innerhero__pre pb-3">Apache Ignite</div>
          <h1 className="h1 innerhero__h1">Community</h1>
          <div className="innerhero__descr pt-2 h5">
            Connect with developers worldwide building
            <br />
            distributed applications with Apache Ignite
          </div>
        </div>
        <img
          className="innerhero__pic innerhero__pic--community"
          src="/img/community/b1-photo.svg"
          alt="Apache Ignite Community"
        />
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className={styles.cmtyhistory} id="story">
      <div className="container">
        <h2 className={styles.cmtyhistory1__title}>Apache Ignite Story</h2>

        <div className={styles.cmtyhistory1}>
          <div className={clsx(styles.cmtyhistory1__wrap, 'flexi')}>
            <div className={styles.cmtyhistory1__left}>
              <div className={styles.cmtyhistory__year}>2014</div>
              <img src="/img/community/b3-rocket1.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory1__right}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>Ignite is contributed to ASF</h3>
              <p>
                GridGain donates the core of its in-memory computing platform to the Apache Software Foundation under the name of "Apache Ignite". The{' '}
                <a href="https://incubator.apache.org/projects/ignite.html" target="_blank" rel="noreferrer">
                  project enters the Apache Incubator
                </a>
                . The first members form its community.
              </p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.cmtyhistory2, 'pt-5')}>
          <div className={clsx(styles.cmtyhistory2__wrap, styles.cmtyhistory1__wrap, 'flexi')}>
            <div className={styles.cmtyhistory2__right}>
              <div className={clsx(styles.cmtyhistory__year, styles['cmtyhistory__year--right'])}>2015</div>
              <img src="/img/community/b3-rocket2.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory2__left}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>Ignite graduates from the incubator</h3>
              <p>
                In less than a year{' '}
                <a href="https://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces79" target="_blank" rel="noreferrer">
                  Ignite successfully graduates
                </a>{' '}
                from the ASF incubator and became a top-level project of the Apache Software Foundation.
              </p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.cmtyhistory3, 'pt-5')}>
          <div className={clsx(styles.cmtyhistory3__wrap, 'flexi')}>
            <div className={styles.cmtyhistory3__left}>
              <div className={styles.cmtyhistory__year}>2017</div>
              <img src="/img/community/b3-rocket3.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory3__right}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>Ignite introduces Native Persistence and becomes a Top-5 Project</h3>
              <p>In 2017, two notable events happened.</p>
              <p className="pb-3 pt-3">
                <a href="https://incubator.apache.org/ip-clearance/persistent-distributed-store-ignite.html" target="_blank" rel="noreferrer">
                  First, with the donation of the Ignite native persistence
                </a>{' '}
                to the project's codebase, a new chapter in the Ignite story begins. Since then, many will be using Ignite as a distributed database that scales across memory and disk with no compromises.
              </p>
              <p>Second, this is the year when Ignite is ranked as a top-5 project of the ASF in various categories for the first time. A trend that will continue in the years to come.</p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.cmtyhistory2, 'pt-5')}>
          <div className={clsx(styles.cmtyhistory2__wrap, styles.cmtyhistory1__wrap, 'flexi')}>
            <div className={styles.cmtyhistory2__right}>
              <div className={clsx(styles.cmtyhistory__year, styles['cmtyhistory__year--right'])}>2020</div>
              <img src="/img/community/b3-rocket4.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory2__left}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>
                Ignite becomes (officially) <br />a distributed database
              </h3>
              <p>3 years after the initial release of the Ignite native persistence, the community and application developers carried on improving and adopting this capability for mission-critical production workloads.</p>
              <p className="pt-3">Finally, after seeing the rapid adoption of Ignite as a database by application developers, the community repositions Ignite as a "distributed database for high-performance computing with in-memory speed".</p>
            </div>
          </div>
        </div>

        <div className={clsx(styles.cmtyhistory3, 'pt-5')}>
          <div className={clsx(styles.cmtyhistory3__wrap, 'flexi')}>
            <div className={styles.cmtyhistory3__left}>
              <div className={styles.cmtyhistory__year}>2025</div>
              <img src="/img/community/b3-rocket5.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory3__right}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>Ignite 3 is released</h3>
              <p>
                After years of development, Apache Ignite 3.0 was released in January 2025, representing a significant architectural evolution. The new version introduces a database-first design with SQL as the primary interface, schema-driven data colocation, Raft-based consensus for strong consistency, and MVCC for non-blocking reads.
              </p>
              <p className="pt-3">
                Ignite 3.1 followed in October 2025 with additional enhancements. The community continues to innovate, building a cutting-edge distributed database for high-velocity data workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetCommunitySection() {
  return (
    <section className={styles['cmty-meet']} id="community">
      <div className="container">
        <div className={clsx(styles['cmty-meet__wrap'], 'flexi')}>
          <div className={styles['cmty-meet__main']}>
            <h2 className={styles['cmty-meet__h2']}>Meet The Community</h2>
            <div className={clsx(styles['cmty-meet__text'], 'pt-3')}>
              A global community of professionals with different skills and experiences who drive the evolution of Ignite.
            </div>
            <div className={styles['cmty-meet__sub']}>
              <a href="http://www.apache.org/theapacheway/" target="_blank" rel="noreferrer">
                The Apache Way
              </a>{' '}
              - get to know our collaboration and contribution values with principles.
            </div>
          </div>
          <div className={styles['cmty-meet__pic']}>
            <img src="/img/community/b4-img.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContributorsSection() {
  return (
    <section className={styles['cmty-contrib']}>
      <div className="container">
        <div className={clsx(styles['cmty-contrib__wrap'], 'flexi')}>
          <div className={styles['cmty-contrib__main']}>
            <h3 className="h4">Contributors</h3>
            <div className={clsx(styles['cmty-contrib__text'], 'pt-2')}>
              More than 100 members help the project grow and progress daily. Code contributions, documentation creation, project awareness, developer support - <strong>this is just a sample of the contributions that we recognize.</strong>
            </div>
          </div>
          <div className={styles['cmty-contrib__pic']}>
            <img src="/img/community/b5-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PMCSection() {
  const [showAll, setShowAll] = useState(false);
  const pmcChair = pmcMembers.find((m) => m.PMC === 'PMC Chair');
  const otherPMC = pmcMembers.filter((m) => m.PMC !== 'PMC Chair');
  const visiblePMC = showAll ? otherPMC : otherPMC.slice(0, 3);

  return (
    <section className={styles['cmty-pm']} id="governance">
      <div className="container">
        <h3 className="fz30">Project Management Committee</h3>
        <div className={clsx(styles['cmty-committers__text'], 'pt-2')}>
          A group of Ignite committers who oversee project management and operational matters.
          <br />
          They vote on new committers, releases and make other vital decisions.
        </div>
        <p className={clsx(styles['cmty-committers__small'], 'pt-2')}>
          View the complete{' '}
          <a href="https://projects.apache.org/committee.html?ignite" target="_blank" rel="noreferrer">
            PMC and committer list
          </a>{' '}
          on the Apache Projects site.
        </p>

        <div className={clsx(styles['cmty-pm__wrap'], 'pt-5')}>
          {pmcChair && (
            <article className={styles['cmty-pmitem']}>
              <div className={styles['cmty-pmitem__proff']}>
                <img src="/img/community/b7-chair-star.svg" alt="" />
                <span>PMC CHAIR</span>
              </div>
              <p className={clsx(styles['cmty-pmitem__name'], 'h5')}>{pmcChair.Name}</p>
              <div className={clsx(styles['cmty-pmitem__links'], 'flexi')}>
                {pmcChair.GitHub && (
                  <a className={styles['cmty-pmitem__github']} href={pmcChair.GitHub} target="_blank" rel="noreferrer">
                    <img src="/img/icon-github.svg" alt="" />
                  </a>
                )}
                {pmcChair['Apache profile'] && (
                  <a className={styles['cmty-pmitem__apache']} href={pmcChair['Apache profile']} target="_blank" rel="noreferrer">
                    <img src="/img/asf-logo-mark.svg" alt="" />
                  </a>
                )}
              </div>
            </article>
          )}

          {visiblePMC.map((member, idx) => (
            <article key={idx} className={styles['cmty-pmitem']}>
              <p className={clsx(styles['cmty-pmitem__name'], 'h5')}>{member.Name}</p>
              <div className={clsx(styles['cmty-pmitem__links'], 'flexi')}>
                {member.GitHub && (
                  <a className={styles['cmty-pmitem__github']} href={member.GitHub} target="_blank" rel="noreferrer">
                    <img src="/img/icon-github.svg" alt="" />
                  </a>
                )}
                {member['Apache profile'] && (
                  <a className={styles['cmty-pmitem__apache']} href={member['Apache profile']} target="_blank" rel="noreferrer">
                    <img src="/img/asf-logo-mark.svg" alt="" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {!showAll && otherPMC.length > 3 && (
          <a
            href="#"
            className={styles['cmty-pm__morelink']}
            onClick={(e) => {
              e.preventDefault();
              setShowAll(true);
            }}
          >
            <i>Load more</i>
          </a>
        )}
        {showAll && (
          <div className={clsx(styles['cmty-pm__more'], 'pt-3')}>
            <div className={styles['cmty-pm__wrap']}>
              {otherPMC.slice(3).map((member, idx) => (
                <article key={idx} className={styles['cmty-pmitem']}>
                  <p className={clsx(styles['cmty-pmitem__name'], 'h5')}>{member.Name}</p>
                  <div className={clsx(styles['cmty-pmitem__links'], 'flexi')}>
                    {member.GitHub && (
                      <a className={styles['cmty-pmitem__github']} href={member.GitHub} target="_blank" rel="noreferrer">
                        <img src="/img/icon-github.svg" alt="" />
                      </a>
                    )}
                    {member['Apache profile'] && (
                      <a className={styles['cmty-pmitem__apache']} href={member['Apache profile']} target="_blank" rel="noreferrer">
                        <img src="/img/asf-logo-mark.svg" alt="" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <a
              href="#"
              className={clsx(styles['cmty-pm__morelink'], 'pt-3')}
              onClick={(e) => {
                e.preventDefault();
                setShowAll(false);
              }}
            >
              <span>Hide</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function ContributingSection() {
  return (
    <section className={styles['cmty-startcont']} id="contributing">
      <div className="container">
        <div className={clsx(styles['cmty-startcont__wrap'], 'flexi')}>
          <div className={styles['cmty-startcont__main']}>
            <h2 className={clsx('h3', styles['cmty-startcont__title'])}>Start Contributing</h2>
            <div className={clsx(styles['cmty-startcont__text'], 'h5', 'pt-3')}>
              There are multiple ways you can contribute to Ignite - contribute to the codebase, help developers on the mailing lists, write technical docs or popularize our technology!
            </div>
          </div>
          <div className={styles['cmty-startcont__pic']}>
            <img src="/img/community/b8-img.svg" alt="" />
          </div>
        </div>

        <div className={styles.contributeGrid}>
          <a href="https://cwiki.apache.org/confluence/display/IGNITE/How+to+Contribute" target="_blank" rel="noreferrer" className={clsx(styles.contributeCard, 'cardsimple')}>
            <h4 className="h5">How to Contribute</h4>
            <p>Guide for code, documentation, and community contributions</p>
          </a>
          <a href="https://github.com/apache/ignite-3/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noreferrer" className={clsx(styles.contributeCard, 'cardsimple')}>
            <h4 className="h5">Good First Issues</h4>
            <p>Issues suitable for new contributors</p>
          </a>
          <a href="https://github.com/apache/ignite-3" target="_blank" rel="noreferrer" className={clsx(styles.contributeCard, 'cardsimple')}>
            <h4 className="h5">Apache Ignite 3</h4>
            <p>Current generation development</p>
          </a>
          <a href="https://github.com/apache/ignite" target="_blank" rel="noreferrer" className={clsx(styles.contributeCard, 'cardsimple')}>
            <h4 className="h5">Apache Ignite 2</h4>
            <p>Long-term support (LTS)</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function AskQuestionSection() {
  return (
    <section className={styles['cmty-ask']} id="channels">
      <div className="container">
        <div className={clsx(styles['cmty-ask__wrap'], 'flexi')}>
          <div className={styles['cmty-ask__main']}>
            <h2 className={clsx(styles['cmty-ask__title'], 'fz50', 'pb-3')}>Get In Touch</h2>
            <div className={clsx(styles['cmty-ask__text'], 'h5')}>
              Reach out to our community if you have
              <br />
              any questions, feedback, or proposals.
            </div>
          </div>
          <img className={styles['cmty-ask__bg']} src="/img/community/b15-askimg.svg" alt="" />
        </div>

        <div className="pt-5">
          <div className={clsx(styles.faqblock, 'flexi', 'pb-5')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-quest.svg" alt="" />
              <span>For General Questions</span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>User Mailing List</p>
              <p>
                For questions about using Apache Ignite:{' '}
                <a href="mailto:user@ignite.apache.org">user@ignite.apache.org</a>
              </p>
              <p className="pt-2">
                <a href="https://lists.apache.org/list.html?user@ignite.apache.org" target="_blank" rel="noreferrer">
                  Browse archives
                </a>
              </p>
            </div>
          </div>

          <div className={clsx(styles.faqblock, 'flexi', 'pb-5')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-comments.svg" alt="" />
              <span>For Development Discussions</span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>Dev Mailing List</p>
              <p>
                For contribution and development discussions:{' '}
                <a href="mailto:dev@ignite.apache.org">dev@ignite.apache.org</a>
              </p>
              <p className="pt-2">
                <a href="https://lists.apache.org/list.html?dev@ignite.apache.org" target="_blank" rel="noreferrer">
                  Browse archives
                </a>
              </p>
            </div>
          </div>

          <div className={clsx(styles.faqblock, 'flexi', 'pb-5')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-reports.svg" alt="" />
              <span>Report An Issue</span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>On GitHub</p>
              <p>
                <a href="https://github.com/apache/ignite-3/issues" target="_blank" rel="noreferrer">
                  Apache Ignite 3 Issues
                </a>{' '}
                |{' '}
                <a href="https://github.com/apache/ignite/issues" target="_blank" rel="noreferrer">
                  Apache Ignite 2 Issues
                </a>
              </p>
            </div>
          </div>

          <div className={clsx(styles.faqblock, 'flexi')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-quest.svg" alt="" />
              <span>Stack Overflow</span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>Technical Q&A</p>
              <p>
                Ask questions with the{' '}
                <a href="https://stackoverflow.com/questions/tagged/apache-ignite" target="_blank" rel="noreferrer">
                  apache-ignite tag
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsCTA() {
  return (
    <Section className={styles.eventsCta}>
      <div className={clsx(styles.eventsCta__wrap, 'flexi')}>
        <div className={styles.eventsCta__main}>
          <h2 className="h3">Join Us at Events</h2>
          <p className="pt-2 h5">
            Connect with the community at Apache Ignite Summit, virtual meetups, and conferences worldwide.
          </p>
        </div>
        <div className={styles.eventsCta__action}>
          <Link className="button" to="/events">
            View Events
          </Link>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={clsx('container', styles.ctaContainer)}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Join the Apache Ignite community and start building distributed applications.
          </p>
        </div>
        <div className={styles.ctaAction}>
          <Link className="button" to="/docs/ignite3/3.1.0/getting-started/quick-start">
            Quick Start Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CommunityPage(): ReactNode {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Community - Join and Contribute</title>
        <meta
          name="description"
          content="Join the Apache Ignite community. Connect with developers, contribute to the project, and get help through mailing lists, Stack Overflow, and GitHub."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite Community - Join and Contribute" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Join the Apache Ignite community. Connect with developers, contribute to the project, and get help through mailing lists, Stack Overflow, and GitHub."
        />
      </Head>
      <main>
        <HeroSection />
        <TimelineSection />
        <MeetCommunitySection />
        {/* <ContributorsSection /> */}
        <PMCSection />
        <ContributingSection />
        <AskQuestionSection />
        <EventsCTA />
        {/* <CTASection /> */}
      </main>
    </Layout>
  );
}
