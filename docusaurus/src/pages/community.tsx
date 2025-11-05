import React, { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import { committers, pmcMembers, type Committer } from '@site/src/data/committers';
import styles from './community.module.css';

function HeroSection() {
  return (
    <section className={styles.cmtyhero}>
      <div className="container">
        <div className={styles.cmtyhero__main}>
          <h1 className={styles.cmtyhero__h1}>
            Welcome To The Apache <br />Ignite Community
          </h1>
          <div className={styles.cmtyhero__text}>
            A community of software engineers, tech writers, and technologists who drive the evolution of a top-5 project of the Apache Software Foundation
          </div>
          <div className={styles.cmtyhero__sub}>
            <a href="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from" target="_blank" rel="noreferrer">
              Learn more
            </a>{' '}
            about Ignite ranking in various categories.
          </div>
        </div>
        <a href="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from" target="_blank" rel="noreferrer" className={styles.cmtyhero__img}>
          <img src="/img/community/b1-photo.svg" alt="Welcome to the Apache Ignite Community" />
        </a>
      </div>
    </section>
  );
}

function NavigationBlock() {
  return (
    <section className={styles.cmtynavblock}>
      <div className="container">
        <ul className={clsx(styles.cmtynavblock__list, 'flexi')}>
          <li><a href="#story">Learn Our Story</a></li>
          <li><a href="#community">Meet the Community</a></li>
          <li><a href="#contributing">Start Contributing</a></li>
          <li><a href="#faq">Ask a Question</a></li>
        </ul>
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
              <div className={styles.cmtyhistory__year}>Today</div>
              <img src="/img/community/b3-rocket5.svg" alt="" />
            </div>
            <div className={styles.cmtyhistory3__right}>
              <h3 className={clsx(styles.cmtyhistory1__h3, 'fz30', 'pb-3')}>Ignite 3.0 version is under way</h3>
              <p>Even when your project boasts hundreds of thousands of downloads a month and is being selected by elite developers and architects for applications that are used by millions of people daily, there is still room for innovation.</p>
              <p className="pt-3">Ignite 3 is a significant leap forward for both the project and its community. Join or support us in an effort to create a cutting-edge distributed database...</p>
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
              – get to know our collaboration and contribution values with principles.
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
              More than 100 members help the project grow and progress daily. Code contributions, documentation creation, project awareness, developer support — <strong>this is just a sample of the contributions that we recognize.</strong>
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

interface CommitterCardProps {
  committer: Committer;
}

function CommitterCard({ committer }: CommitterCardProps) {
  return (
    <div className={clsx(styles.committer, 'flexi')}>
      <div className={styles.committer__name}>{committer.Name}</div>
      {committer.GitHub && (
        <a className={styles.committer__github} href={committer.GitHub} target="_blank" rel="noreferrer">
          <img src="/img/icon-github.svg" alt="" />
        </a>
      )}
      {committer['Apache profile'] ? (
        <a className={styles.committer__apache} href={committer['Apache profile']} target="_blank" rel="noreferrer">
          <img src="/img/icon-pero.svg" alt="" />
        </a>
      ) : (
        <span className={styles.committer__apache} />
      )}
    </div>
  );
}

function CommittersSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCommitters = showAll ? committers : committers.slice(0, 14);

  return (
    <section className={styles['cmty-committers']}>
      <div className="container">
        <h3 className="h4">Committers</h3>
        <div className={clsx(styles['cmty-committers__text'], 'pt-2')}>
          Most active contributors who make a significant contribution <br />to the project become Apache Ignite committers.
        </div>
        <p className={clsx(styles['cmty-committers__small'], 'pt-2')}>Here is the list of committers for the project.</p>

        <div className={styles.committers__wrap}>
          {visibleCommitters.map((committer, idx) => (
            <CommitterCard key={idx} committer={committer} />
          ))}
        </div>

        {!showAll && (
          <a href="#" className={styles.committers__morelink} onClick={(e) => { e.preventDefault(); setShowAll(true); }}>
            <i>Load more</i>
          </a>
        )}
        {showAll && (
          <a href="#" className={styles.committers__morelink} onClick={(e) => { e.preventDefault(); setShowAll(false); }}>
            <span>Hide</span>
          </a>
        )}
      </div>
    </section>
  );
}

function PMCSection() {
  const [showAll, setShowAll] = useState(false);
  const pmcChair = {
    Name: 'Dmitriy Pavlov',
    Comitter: 'YES',
    PMC: 'PMC Chair',
    GitHub: 'https://github.com/dspavlov',
    'Apache profile': 'http://people.apache.org/phonebook.html?uid=dpavlov',
    Company: 'SberTech',
  };
  const otherPMC = pmcMembers.filter(m => m.PMC !== 'PMC Chair');
  const visiblePMC = showAll ? otherPMC : otherPMC.slice(0, 3);

  return (
    <section className={styles['cmty-pm']}>
      <div className="container">
        <h3 className="fz30">Project Management Committee</h3>
        <div className={clsx(styles['cmty-committers__text'], 'pt-2')}>
          A group of Ignite committers who oversee project management and operational matters. <br />They vote on new committers, releases and make other vital decisions.
        </div>
        <p className={clsx(styles['cmty-committers__small'], 'pt-2')}>Here is the list of PMC members for the project.</p>

        <div className={clsx(styles['cmty-pm__wrap'], 'pt-5')}>
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
                  <img src="/img/icon-pero.svg" alt="" />
                </a>
              )}
            </div>
          </article>

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
                    <img src="/img/icon-pero.svg" alt="" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <a href="#" className={styles['cmty-pm__morelink']} onClick={(e) => { e.preventDefault(); setShowAll(true); }}>
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
                        <img src="/img/icon-pero.svg" alt="" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <a href="#" className={clsx(styles['cmty-pm__morelink'], 'pt-3')} onClick={(e) => { e.preventDefault(); setShowAll(false); }}>
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
              There are multiple ways you can contribute to Ignite — contribute to the codebase, help developers on the mailing lists, write technical docs or popularize our technology!
            </div>
          </div>
          <div className={styles['cmty-startcont__pic']}>
            <img src="/img/community/b8-img.svg" alt="" />
          </div>
        </div>

        <div className="pt-5">
          <h3 className="h4">Code and technical documentation contributions</h3>
          <p className="pt-2">Visit the{' '}
            <a href="https://cwiki.apache.org/confluence/display/IGNITE/How+to+Contribute" target="_blank" rel="noreferrer">
              Contribution and Development
            </a>{' '}
            page for detailed instructions on how to contribute to Apache Ignite.
          </p>
        </div>
      </div>
    </section>
  );
}

function AskQuestionSection() {
  return (
    <section className={styles['cmty-ask']} id="faq">
      <div className="container">
        <div className={clsx(styles['cmty-ask__wrap'], 'flexi')}>
          <div className={styles['cmty-ask__main']}>
            <h2 className={clsx(styles['cmty-ask__title'], 'fz50', 'pb-3')}>Ask a Question</h2>
            <div className={clsx(styles['cmty-ask__text'], 'h5')}>
              Feel free to reach out to our community if you have <br />any questions, doubts or proposals. There are a few <br />ways to do this.
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
              <p className={styles.faqblock__rightitle}>By e-mail</p>
              <p>
                For general questions about Ignite <a href="mailto:user@ignite.apache.org">user@ignite.apache.org</a>
              </p>
            </div>
          </div>

          <div className={clsx(styles.faqblock, 'flexi', 'pb-5')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-comments.svg" alt="" />
              <span>
                For Contribution Related <br />Questions And Discussions
              </span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>By e-mail</p>
              <p>
                For contribution-related discussions <a href="mailto:dev@ignite.apache.org">dev@ignite.apache.org</a>
              </p>
            </div>
          </div>

          <div className={clsx(styles.faqblock, 'flexi')}>
            <h3 className={clsx(styles.faqblock__title, 'h5')}>
              <img src="/img/community/b16-icon-reports.svg" alt="" />
              <span>Report An Issue</span>
            </h3>
            <div className={styles.faqblock__right}>
              <p className={styles.faqblock__rightitle}>On GitHub</p>
              <p>
                Visit <a href="https://github.com/apache/ignite/issues" target="_blank" rel="noreferrer">Ignite GitHub</a> if you would like to file a new issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CommunityPage(): ReactNode {
  return (
    <Layout>
      <Head>
        <title>Apache Ignite Community - Start Contributing</title>
        <meta
          name="description"
          content="Meet an Apache Ignite community and get help. Contribute to Ignite by helping answer user questions, coding, changing technical documentation, or becoming a committer and PMC member."
        />
        <link rel="canonical" href="https://ignite.apache.org/community.html" />
        <meta property="og:title" content="Apache Ignite Community - Start Contributing" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/community.html" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Meet an Apache Ignite community and get help. Contribute to Ignite by helping answer user questions, coding, changing technical documentation, or becoming a committer and PMC member."
        />
      </Head>
      <main>
        <HeroSection />
        <NavigationBlock />
        <TimelineSection />
        <MeetCommunitySection />
        <ContributorsSection />
        <CommittersSection />
        <PMCSection />
        <ContributingSection />
        <AskQuestionSection />
      </main>
    </Layout>
  );
}
