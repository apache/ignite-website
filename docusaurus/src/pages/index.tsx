import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Section from '@site/src/components/Section';
import {userStories, storyCategories} from '@site/src/data/userStories';

import styles from './index.module.css';

function HomepageHero() {
  return (
    <div className={styles.fronttop}>
      <img className={styles.fronttop__pic} src="/img/frontpage/hero-white.svg" alt="" />

      <section className={clsx(styles.innerhero, styles.fronthero)}>
        <div className="container">
          <div className={styles.innerhero__main}>
            <h1 className={styles.innerhero__h1}>
              Memory-First Distributed SQL Database <br />For High-Velocity Data Workloads
            </h1>
            <div className={styles.innerhero__h2}>
              Distributed Scale Without Distributed Query Penalties
            </div>
            <div className={styles.innerhero__action}>
              <Link className={clsx('button', styles.fronthero__button)} to="https://ignite.apache.org/docs/latest/index">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TopCards() {
  return (
    <aside className={clsx(styles.fronttopcards, 'container')}>
      <a href="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from" target="_blank" className={styles.frontcard} rel="noreferrer">
        <div className={styles.frontcard__title}>
          A top-5 project of the Apache Software <br />Foundation
        </div>
        <div className={styles.frontcard__prises}>
          <div className={styles.frontcard__price}>
            <div className={styles.frontcard__iconwrap}>
              <img src="/img/frontpage/b1-prize1.svg" alt="" />
            </div>
            <span>Big Data <br />Users Lists</span>
          </div>
          <div className={styles.frontcard__price}>
            <div className={clsx(styles.frontcard__iconwrap, styles['frontcard__iconwrap--blue'])}>
              <img src="/img/frontpage/b1-prize1.svg" alt="" />
            </div>
            <span>Users Lists</span>
          </div>
          <div className={styles.frontcard__price}>
            <div className={clsx(styles.frontcard__iconwrap, styles['frontcard__iconwrap--grey'])}>
              <img src="/img/frontpage/b1-prize1.svg" alt="" />
            </div>
            <span>Dev Lists</span>
          </div>
        </div>
      </a>

      <Link to="/use-cases/provenusecases" className={styles.frontcard}>
        <div className={styles.frontcard__network}>
          <img src="/img/frontpage/b1-planet.svg" alt="" />
        </div>
        <div className={clsx(styles.frontcard__title, styles.frontcard__title_secondary, 'pt-3')}>
          Leading companies around the world select Ignite to speed up and scale applications used by millions of people daily
        </div>
      </Link>
    </aside>
  );
}

function CoreCapabilities() {
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'dotnet' | 'cpp' | 'python'>('java');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples = {
    java: {
      language: "java",
      code: `// Connect to the cluster
IgniteClient client = IgniteClient.builder()
    .addresses("127.0.0.1:10800")
    .build();

// Create a table
String createTableSql = "CREATE TABLE IF NOT EXISTS Person ("
    + "id INT PRIMARY KEY,"
    + "name VARCHAR,"
    + "age INT"
    + ")";
client.sql().execute(null, createTableSql);

// Insert data
String insertSql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)";
client.sql().execute(null, insertSql, 1, "John Doe", 30);
client.sql().execute(null, insertSql, 2, "Jane Smith", 28);

// Query data
client.sql().execute(null, "SELECT * FROM Person WHERE age > ?", 25)
    .forEachRemaining(row -> {
        System.out.println("ID: " + row.intValue("id") +
                          ", Name: " + row.stringValue("name") +
                          ", Age: " + row.intValue("age"));
    });

// Close the client
client.close();`
    },
    dotnet: {
      language: "csharp",
      code: `// Connect to the cluster
var config = new IgniteClientConfiguration("127.0.0.1:10800");
using var client = await IgniteClient.StartAsync(config);

// Create a table
var createTableSql = "CREATE TABLE IF NOT EXISTS Person (" +
    "id INT PRIMARY KEY," +
    "name VARCHAR," +
    "age INT" +
    ")";
await client.Sql.ExecuteAsync(null, createTableSql);

// Insert data
var insertSql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)";
await client.Sql.ExecuteAsync(null, insertSql, 1, "John Doe", 30);
await client.Sql.ExecuteAsync(null, insertSql, 2, "Jane Smith", 28);

// Query data
await using var resultSet = await client.Sql.ExecuteAsync(null,
    "SELECT * FROM Person WHERE age > ?", 25);
await foreach (var row in resultSet)
{
    Console.WriteLine($"ID: {row["id"]}, Name: {row["name"]}, Age: {row["age"]}");
}`
    },
    cpp: {
      language: "cpp",
      code: `// Connect to the cluster
ignite_client_configuration cfg{"127.0.0.1:10800"};
auto client = ignite_client::start(cfg, std::chrono::seconds{30});

// Create a table
std::string createTableSql = "CREATE TABLE IF NOT EXISTS Person ("
    "id INT PRIMARY KEY,"
    "name VARCHAR,"
    "age INT"
    ")";
client.get_sql().execute(nullptr, nullptr, {createTableSql}, {});

// Insert data
std::string insertSql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)";
client.get_sql().execute(nullptr, nullptr, {insertSql}, {1, "John Doe", 30});
client.get_sql().execute(nullptr, nullptr, {insertSql}, {2, "Jane Smith", 28});

// Query data
auto result = client.get_sql().execute(nullptr, nullptr,
    {"SELECT * FROM Person WHERE age > ?"}, {25});
while (result->has_row_set() && result->next()) {
    std::cout << "ID: " << result->get_value<int32_t>("id")
              << ", Name: " << result->get_value<std::string>("name")
              << ", Age: " << result->get_value<int32_t>("age") << std::endl;
}`
    },
    python: {
      language: "python",
      code: `# Connect to the cluster
import pyignite_dbapi

conn = pyignite_dbapi.connect(address="127.0.0.1:10800")
cursor = conn.cursor()

# Create a table
create_table_sql = """CREATE TABLE IF NOT EXISTS Person (
    id INT PRIMARY KEY,
    name VARCHAR,
    age INT
)"""
cursor.execute(create_table_sql)

# Insert data
insert_sql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)"
cursor.execute(insert_sql, (1, "John Doe", 30))
cursor.execute(insert_sql, (2, "Jane Smith", 28))

# Query data
cursor.execute("SELECT * FROM Person WHERE age > ?", (25,))
for row in cursor.fetchall():
    print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}")

# Close the connection
cursor.close()
conn.close()`
    }
  };

  return (
    <div className={clsx('container', styles.forntcodes)}>
      <h2 className={styles.h2}>Start Building With Apache Ignite 3</h2>

      <div className={clsx(styles.forntcodes__wrap)} style={{display: 'flex', gap: '4rem', alignItems: 'flex-start'}}>
        {/* Left Column - 1/3 width */}
        <div style={{flex: '0 0 33%', minWidth: '280px'}}>
          <p className="pt-3 pb-2" style={{fontSize: '16px', lineHeight: '1.6', color: '#333'}}>
            Get up and running in minutes. Apache Ignite 3 provides a memory-first distributed SQL database
            that eliminates the scale/speed trade-off for high-velocity workloads.
          </p>

          <div style={{marginTop: '2rem'}}>
            <a href="https://ignite.apache.org/docs/ignite3/latest/quick-start/start-cluster" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Configure a cluster in under 5 minutes</span>
            </a>

            <a href="https://ignite.apache.org/docs/ignite3/latest/quick-start/explore-sql" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Run SQL queries on your distributed data</span>
            </a>

            <a href="https://ignite.apache.org/docs/ignite3/latest/quick-start/java-api" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Store and retrieve data with the Java API</span>
            </a>

            <a href="https://ignite.apache.org/docs/ignite3/latest/quick-start/persist-data" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Persist your in-memory data</span>
            </a>
          </div>

          <div style={{marginTop: '4rem'}}>
            <a className="button" href="https://ignite.apache.org/docs/latest/" target="_blank" rel="noreferrer" style={{fontSize: '16px'}}>View Client Documentation</a>
          </div>
        </div>

        {/* Right Column - 2/3 width */}
        <div style={{flex: '1', minWidth: '0', position: 'relative'}}>
          <div className={styles.forntcodes__innertabs}>
            <div className={styles.nativecode__tabctrls}>
              <a
                href="#"
                className={clsx(styles.nativecode__link, selectedLanguage === 'java' && 'active')}
                onClick={(e) => { e.preventDefault(); setSelectedLanguage('java'); }}
              >
                Java
              </a>
              <a
                href="#"
                className={clsx(styles.nativecode__link, selectedLanguage === 'dotnet' && 'active')}
                onClick={(e) => { e.preventDefault(); setSelectedLanguage('dotnet'); }}
              >
                .NET
              </a>
              <a
                href="#"
                className={clsx(styles.nativecode__link, selectedLanguage === 'cpp' && 'active')}
                onClick={(e) => { e.preventDefault(); setSelectedLanguage('cpp'); }}
              >
                C++
              </a>
              <a
                href="#"
                className={clsx(styles.nativecode__link, selectedLanguage === 'python' && 'active')}
                onClick={(e) => { e.preventDefault(); setSelectedLanguage('python'); }}
              >
                Python
              </a>
            </div>
            <div className={styles.nativecode__tabs} style={{position: 'relative'}}>
              <button
                onClick={handleCopy}
                className={styles.copyButton}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  zIndex: 10,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
                      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <div className={clsx(styles.nativecode__tab, 'active')} style={{background: '#2d3748', borderRadius: '8px', overflow: 'hidden'}}>
                <SyntaxHighlighter
                  language={codeExamples[selectedLanguage].language}
                  style={tomorrow}
                  customStyle={{ margin: 0, background: '#2d3748', padding: '20px' }}
                  showLineNumbers={true}
                  wrapLongLines={false}
                >
                  {codeExamples[selectedLanguage].code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UsageScenarios() {
  return (
    <Section className={styles.frontnewcards}>
      <h2 className={styles.h2}>Apache Ignite 3 Use Cases</h2>
      <div className={styles.frontnewcards__wrap}>
        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Event Stream Processing <br />And Enrichment</h4>
          <div className={styles.cardsimple__text}>
            Enrich streaming events with reference data lookups without latency penalties. Handle high-throughput streams while maintaining data consistency and eliminating cache complexity.
          </div>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Session Management <br />And Caching At Scale</h4>
          <div className={styles.cardsimple__text}>
            Handle millions of concurrent sessions with automatic failover and any-node access. Eliminate sticky sessions while maintaining strong consistency and fast response times.
          </div>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Microservices <br />State Management</h4>
          <div className={styles.cardsimple__text}>
            Coordinate state across microservices with distributed transactions. Eliminate manual compensation logic while maintaining service autonomy and linear scalability.
          </div>
        </article>
      </div>
    </Section>
  );
}

function UserStories() {
  return (
    <Section className={styles.frontstories}>
      <h2 className={styles.h2}>Ignite User Stories</h2>
      <div className={clsx(styles.frontstories__checkerswrap, styles.cardsimple)}>
        <ul className={clsx(styles.frontstories__checkers, 'capstext')}>
          {storyCategories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>

      <div className={styles.frontstories__grid}>
        {userStories.map((story, idx) => (
          <article key={idx} className={styles.userStory}>
            <a href={story.url} className={styles.userStory__link} target="_blank" rel="noreferrer">
              <img src={story.thumbnail} alt={story.title} className={styles.userStory__thumbnail} />
              <div className={clsx(styles.userStory__title, story.titleClass)}>
                {story.title}
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className={clsx(styles.frontstories__bottom, 'pt-5')}>
        <Link to="/use-cases/provenusecases" className="button button--shadow">Watch Other Stories</Link>
      </div>
    </Section>
  );
}

function EventsSection() {
  return (
    <Section className={styles.frontconfs}>
      <h2 className={styles.h2}>Join The Community At Events <br />And Meetups Worldwide</h2>
      <div className={styles.frontconfs__wrap}>
        <a href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup/" target="_blank" className={clsx(styles.frontconfcard, styles['frontconfcard--red'])} rel="noreferrer">
          <div className={styles.frontconfs__iconwrap}>
            <img src="/img/frontpage/events/001.svg" alt="" />
          </div>
          <h4 className={styles.frontconfcard__title}>Ignite Virtual Meetup</h4>
          <p>Experts and practitioners give <strong>online talks and presentations</strong> and share their Apache Ignite experience.</p>
          <div className={styles.frontconfcard__bottom}>
            <p className={styles.capstext}>Online</p>
            <div className={styles.frontconfcard__cal}>Regularly</div>
          </div>
        </a>

        <a href="https://ignite-summit.org/" target="_blank" className={clsx(styles.frontconfcard, styles['frontconfcard--blue'])} rel="noreferrer">
          <div className={styles.frontconfs__iconwrap}>
            <img src="/img/frontpage/events/004.svg" alt="" />
          </div>
          <h4 className={styles.frontconfcard__title}>Ignite Summit</h4>
          <p>This <strong>virtual conference</strong> is a chance to learn more about up-to-date in-memory computing solutions.</p>
          <p>There are speakers from industry-leading companies and hundreds of participants from all over the world.</p>
          <div className={styles.frontconfcard__bottom}>
            <p className={styles.capstext}>Online</p>
            <div className={styles.frontconfcard__cal}>Annually</div>
          </div>
        </a>

        <a href="/events#upcoming" className={styles.frontconfcard}>
          <div className={styles.frontconfs__iconwrap}>
            <img src="/img/frontpage/events/003.svg" alt="" />
          </div>
          <h4 className={styles.frontconfcard__title}>Other Events</h4>
          <p>Join us for <strong>conferences, presentations, and webinars</strong> to learn more about in-memory computing technologies.</p>
          <div className={styles.frontconfcard__bottom}>
            <p className={styles.capstext}>ONLINE <small>and</small> OFFLINE</p>
            <div className={styles.frontconfcard__cal}>Regularly</div>
          </div>
        </a>
      </div>

      <div className={clsx(styles.frontconfs__bottom, 'pt-5')}>
        <Link to="/events" className="button button--shadow">View All Events</Link>
      </div>
    </Section>
  );
}

function ResourcesSection() {
  return (
    <Section className={styles.frontresourse}>
      <h2 className={styles.h2}>Resources To Elevate Your <br />Ignite Experience</h2>
      <div className={styles.frontresourse__subtitle}>
        Get access to a variety of free technical <br />and learning resources
      </div>

      <div className={styles.frontresourse__wrap}>
        <div className={styles.frontresourse__col}>
          <div className={styles.capstext}>Technical resources</div>
          <Link to="/resources#technical" className={clsx(styles.frontresitem, styles['frontresitem--black'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-docs.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Apache Ignite technical documentation</div>
          </Link>

          <a href="https://cwiki.apache.org/confluence/display/IGNITE/" target="_blank" className={clsx(styles.frontresitem, styles['frontresitem--gray'])} rel="noreferrer">
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-wiki.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Ignite Wiki with a collection of low-level design documents and instructions</div>
          </a>

          <Link to="/resources#git" className={clsx(styles.frontresitem, styles['frontresitem--gray'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/icon-github.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Git repositories with Ignite source code and code samples and examples</div>
          </Link>
        </div>

        <div className={styles.frontresourse__col}>
          <div className={styles.capstext}>Learning resources</div>
          <Link to="/resources#learning" className={clsx(styles.frontresitem, styles['frontresitem--red'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-videos.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Dozens of essential videos and webinar <br />recordings</div>
          </Link>

          <Link to="/resources#training" className={clsx(styles.frontresitem, styles['frontresitem--rose'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-vebinar.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Trainings and courses that help with building high-performance and data-intensive applications with the Apache Ignite</div>
          </Link>

          <a href="https://www.shamimbhuiyan.com/ignitebook" target="_blank" className={clsx(styles.frontresitem, styles['frontresitem--rose'])} rel="noreferrer">
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-book.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Apache Ignite book to expand your knowledge in in-memory computing and distributed databases</div>
          </a>
        </div>
      </div>

      <div className={clsx(styles.frontconfs__bottom, 'pt-5')}>
        <Link to="/resources" className="button button--shadow">View All Resources</Link>
      </div>
    </Section>
  );
}

function ReadyToStart() {
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
          <a className="button" href="https://ignite.apache.org/docs/latest/" target="_blank" rel="noreferrer">Discover Quick Start Guide</a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.body.classList.add('homepage');
    return () => {
      document.body.classList.remove('homepage');
    };
  }, []);

  return (
    <Layout
      title="Distributed Database - Apache Ignite"
      description="Apache Ignite is a leading distributed database management system for high-performance computing with in-memory speed. Learn how to use the Ignite decentralized database system and get started."
      wrapperClassName="homepage-wrapper">
      <Head>
        <meta property="og:title" content="Distributed Database - Apache Ignite®" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta property="og:description" content="Apache Ignite is a leading distributed database management system for high-performance computing with in-memory speed. Learn how to use the Ignite decentralized database system and get started." />
        <link rel="canonical" href="https://ignite.apache.org/" />
      </Head>

      {/* Header is rendered inside fronttop (in HomepageHero) to match PUG structure */}
      <HomepageHero />

      <section className={styles.frontblue}>
        <TopCards />
        <CoreCapabilities />
      </section>

      <UsageScenarios />
      <UserStories />
      <EventsSection />
      <ResourcesSection />
      <ReadyToStart />
    </Layout>
  );
}
