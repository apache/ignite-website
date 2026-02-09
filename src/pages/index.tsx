import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Section from '@site/src/components/Section';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './index.module.css';

function HomepageHero() {
  return (
    <div className={styles.fronttop}>
      <img className={styles.fronttop__pic} src="/img/frontpage/hero-white.svg" alt="" />

      <section className={clsx(styles.innerhero, styles.fronthero)}>
        <div className="container">
          <div className={styles.heroColumns}>
            <div className={styles.heroColumns__left}>
              <h1 className={styles.innerhero__h1}>
                Fast OR Consistent?<br />Choose Both.
              </h1>
              <p className={styles.innerhero__h2}>
                Apache Ignite is a <em>distributed database</em> for mission-critical high-velocity applications that require in-memory performance. 
              </p>
              <p className={styles.innerhero__h2}>
                Scale across memory and disk without compromise.
              </p>
            </div>

            <div className={styles.heroColumns__right}>
              <div className={styles.heroTradeoffs}>
                <h2 className={styles.heroTradeoffs__lead}>Distributed systems make you choose.</h2>
                <ul className={styles.heroTradeoffs__list}>
                  <li><span>Event streams:</span> <em>Fast OR Consistent?</em></li>
                  <li><span>Distributed state:</span> <em>Fast OR Durable?</em></li>
                  <li><span>Data integrity:</span> <em>Eventual OR ACID?</em></li>
                  <li><span>Microservices:</span> <em>Simple OR Scalable?</em></li>
                </ul>
                <p className={styles.heroTradeoffs__answer}>
                  <strong>Apache Ignite eliminates the trade-off.</strong>
                </p>
                <p className={styles.heroTradeoffs__pillars}>
                  <em>Speed. Scale. Consistency. Durability. Queryability.</em>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a className={clsx('button', styles.fronthero__button)} href="/docs/">
              Get Started
            </a>
            <Link className={clsx('button', 'button--outline', styles.fronthero__button)} to="/use-cases">
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CoreCapabilities() {
  const [selectedLanguage, setSelectedLanguage] = useState<'java' | 'dotnet' | 'cpp' | 'python' | 'sql'>('java');
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Only render SyntaxHighlighter on the client to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    },
    sql: {
      language: "sql",
      code: `-- Connect to the cluster
-- $ docker run -it apacheignite/ignite:3.1.0 cli
-- > connect http://localhost:10300
-- > sql

-- Create a table
CREATE TABLE IF NOT EXISTS Person (
    id INT PRIMARY KEY,
    name VARCHAR,
    age INT
);

-- Insert data
INSERT INTO Person (id, name, age) VALUES (1, 'John Doe', 30);
INSERT INTO Person (id, name, age) VALUES (2, 'Jane Smith', 28);

-- Query data
SELECT * FROM Person WHERE age > 25;`
    }
  };

  return (
    <div className={clsx('container', styles.forntcodes)}>
      <h2 className={styles.h2}>Start Building With Apache Ignite</h2>

      <div className={clsx(styles.forntcodes__wrap)} style={{display: 'flex', gap: '4rem', alignItems: 'flex-start'}}>
        {/* Left Column - 1/3 width */}
        <div style={{flex: '0 0 33%', minWidth: '280px'}}>
          <p className="pt-3 pb-2" style={{fontSize: '16px', lineHeight: '1.6', color: '#333'}}>
            Get up and running in minutes. Apache Ignite provides a memory-first distributed SQL database
            that eliminates the scale/speed trade-off for high-velocity workloads.
          </p>

          <div style={{marginTop: '2rem'}}>
            <a href="/docs/ignite3/3.1.0/getting-started/start-cluster" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Configure a cluster in under 5 minutes</span>
            </a>

            <a href="/docs/ignite3/3.1.0/getting-started/work-with-sql" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Run SQL queries on your distributed data</span>
            </a>

            <a href="/docs/ignite3/3.1.0/getting-started/key-value-api" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Store and retrieve data with the Java API</span>
            </a>

            <a href="/docs/ignite3/3.1.0/configure-and-operate/configuration/config-storage-persistent" className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Persist your in-memory data</span>
            </a>
          </div>

          <div style={{marginTop: '4rem'}}>
            <a className="button" href="/docs/" target="_blank" rel="noreferrer" style={{fontSize: '16px'}}>View Client Documentation</a>
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
              <a
                href="#"
                className={clsx(styles.nativecode__link, selectedLanguage === 'sql' && 'active')}
                onClick={(e) => { e.preventDefault(); setSelectedLanguage('sql'); }}
              >
                SQL/CLI
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
              <div className={clsx(styles.nativecode__tab, 'active')} style={{background: '#2d3748', borderRadius: '8px', overflow: 'hidden', minHeight: '400px'}}>
                {isMounted ? (
                  <SyntaxHighlighter
                    language={codeExamples[selectedLanguage].language}
                    style={tomorrow}
                    customStyle={{ margin: 0, background: '#2d3748', padding: '20px' }}
                    showLineNumbers={true}
                    wrapLongLines={false}
                  >
                    {codeExamples[selectedLanguage].code}
                  </SyntaxHighlighter>
                ) : (
                  <pre style={{ margin: 0, background: '#2d3748', padding: '20px', color: '#ccc', overflow: 'auto' }}>
                    <code>{codeExamples[selectedLanguage].code}</code>
                  </pre>
                )}
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
      <h2 className={styles.h2}>Apache Ignite Use Cases</h2>
      <div className={styles.frontnewcards__wrap}>
        <article className={clsx(styles.frontsimplecard, styles.cardsimple)} style={{ display: 'flex', flexDirection: 'column', padding: 'var(--ai-spacing-2xl) var(--ai-spacing-xl) var(--ai-spacing-xl)' }}>
          <div style={{ flex: 1 }}>
            <h4 className={styles.cardsimple__title}>Event Stream Processing <br />And Enrichment</h4>
            <div className={styles.cardsimple__text}>
              <strong>Fast OR Consistent?</strong> Enrich high-throughput event streams with consistent reference data. Memory-first architecture delivers low-latency lookups while maintaining ACID guarantees. Eliminate cache invalidation complexity.
            </div>
          </div>
          <Link className="button button--primary button--outline" to="/use-cases/event-stream-processing" style={{ marginTop: '1.5rem' }}>
            Learn More
          </Link>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)} style={{ display: 'flex', flexDirection: 'column', padding: 'var(--ai-spacing-2xl) var(--ai-spacing-xl) var(--ai-spacing-xl)' }}>
          <div style={{ flex: 1 }}>
            <h4 className={styles.cardsimple__title}>Session Management <br />And Caching At Scale</h4>
            <div className={styles.cardsimple__text}>
              <strong>Fast OR Durable?</strong> Any-node session access with automatic failover and zero data loss. Low-latency session retrieval with ACID guarantees eliminates sticky sessions while maintaining consistency.
            </div>
          </div>
          <Link className="button button--primary button--outline" to="/use-cases/session-management" style={{ marginTop: '1.5rem' }}>
            Learn More
          </Link>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)} style={{ display: 'flex', flexDirection: 'column', padding: 'var(--ai-spacing-2xl) var(--ai-spacing-xl) var(--ai-spacing-xl)' }}>
          <div style={{ flex: 1 }}>
            <h4 className={styles.cardsimple__title}>Microservices <br />State Management</h4>
            <div className={styles.cardsimple__text}>
              <strong>Simple OR Scalable?</strong> Distributed ACID transactions across service boundaries eliminate saga complexity. Significant infrastructure cost reduction potential through system consolidation.
            </div>
          </div>
          <Link className="button button--primary button--outline" to="/use-cases/microservices-state" style={{ marginTop: '1.5rem' }}>
            Learn More
          </Link>
        </article>
      </div>
    </Section>
  );
}

function EventsSection() {
  return (
    <Section className={clsx(styles.frontconfs, styles.frontblue)}>
      <h2 className={styles.h2}>Join The Community At Events And Meetups Worldwide</h2>
      <div className={styles.frontconfs__wrap}>
        <a href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup/" target="_blank" className={clsx(styles.frontconfcard, styles['frontconfcard--white'])} rel="noreferrer">
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

        <a href="https://ignite-summit.org/" target="_blank" className={clsx(styles.frontconfcard, styles['frontconfcard--white'])} rel="noreferrer">
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

        <a href="/events#upcoming" className={clsx(styles.frontconfcard, styles['frontconfcard--white'])}>
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

function ReadyToStart() {
  return (
    <section className={clsx(styles.toolingend, styles['toolingend--front'])}>
      <div className={clsx('container', 'flexi')}>
        <div className={styles.toolingend__main}>
          <p className={clsx(styles.toolingend__title, styles.h3)}>
            <strong>Ready To Start?</strong>
          </p>
          <p className={clsx(styles.h5, 'pt-2')}>
            Discover our quick start guides and build your first application in 5-10 minutes
          </p>
        </div>
        <div className={styles.toolingend__action}>
          <a className="button" href="/docs/ignite3/3.1.0/getting-started/quick-start" target="_blank" rel="noreferrer">Quick Start Guide</a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const canonicalUrl = useCanonicalUrl();

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
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta property="og:description" content="Apache Ignite is a leading distributed database management system for high-performance computing with in-memory speed. Learn how to use the Ignite decentralized database system and get started." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Header is rendered inside fronttop (in HomepageHero) to match PUG structure */}
      <HomepageHero />

      <section className={styles.frontblue}>
        <CoreCapabilities />
      </section>

      <UsageScenarios />
      <EventsSection />
      <ReadyToStart />
    </Layout>
  );
}
