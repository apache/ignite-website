import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Section from '@site/src/components/Section';
import { DOCS_QUICK_START, IGNITE2_DOCS_PATHS } from '@site/src/config/docs-urls';
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
ClientConfiguration cfg = new ClientConfiguration().setAddresses("127.0.0.1:10800");

try (IgniteClient client = Ignition.startClient(cfg)) {
    // Create a table
    client.query(new SqlFieldsQuery("CREATE TABLE IF NOT EXISTS Person ("
        + "id INT PRIMARY KEY,"
        + "name VARCHAR,"
        + "age INT"
        + ")")).getAll();

    // Insert data
    String insertSql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)";
    client.query(new SqlFieldsQuery(insertSql).setArgs(1, "John Doe", 30)).getAll();
    client.query(new SqlFieldsQuery(insertSql).setArgs(2, "Jane Smith", 28)).getAll();

    // Query data
    List<List<?>> rows = client.query(
        new SqlFieldsQuery("SELECT id, name, age FROM Person WHERE age > ?").setArgs(25)).getAll();

    for (List<?> row : rows)
        System.out.println("ID: " + row.get(0) + ", Name: " + row.get(1) + ", Age: " + row.get(2));
}`
    },
    dotnet: {
      language: "csharp",
      code: `// Connect to the cluster
var cfg = new IgniteClientConfiguration
{
    Endpoints = new[] { "127.0.0.1:10800" }
};
using var client = Ignition.StartClient(cfg);

// The .NET thin client runs SQL through a cache
var cache = client.GetOrCreateCache<object, object>(
    new CacheClientConfiguration("sql_cache") { SqlSchema = "PUBLIC" });

// Create a table
cache.Query(new SqlFieldsQuery("CREATE TABLE IF NOT EXISTS Person (" +
    "id INT PRIMARY KEY," +
    "name VARCHAR," +
    "age INT" +
    ")")).GetAll();

// Insert data
var insertSql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)";
cache.Query(new SqlFieldsQuery(insertSql, 1, "John Doe", 30)).GetAll();
cache.Query(new SqlFieldsQuery(insertSql, 2, "Jane Smith", 28)).GetAll();

// Query data
var rows = cache.Query(new SqlFieldsQuery("SELECT id, name, age FROM Person WHERE age > ?", 25));
foreach (var row in rows)
{
    Console.WriteLine($"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}");
}`
    },
    cpp: {
      language: "cpp",
      code: `// Connect to the cluster
IgniteClientConfiguration cfg;
cfg.SetEndPoints("127.0.0.1:10800");
IgniteClient client = IgniteClient::Start(cfg);

// The C++ thin client runs SQL through a cache
cache::CacheClient<int32_t, int32_t> cache =
    client.GetOrCreateCache<int32_t, int32_t>("sql_cache");

// Create a table
cache::query::SqlFieldsQuery createTable("CREATE TABLE IF NOT EXISTS Person ("
    "id INT PRIMARY KEY,"
    "name VARCHAR,"
    "age INT"
    ")");
createTable.SetSchema("PUBLIC");
cache.Query(createTable);

// Insert data
cache::query::SqlFieldsQuery insert("INSERT INTO Person (id, name, age) VALUES (?, ?, ?)");
insert.SetSchema("PUBLIC");
insert.AddArgument<int32_t>(1);
insert.AddArgument<std::string>("John Doe");
insert.AddArgument<int32_t>(30);
cache.Query(insert);

insert.ClearArguments();
insert.AddArgument<int32_t>(2);
insert.AddArgument<std::string>("Jane Smith");
insert.AddArgument<int32_t>(28);
cache.Query(insert);

// Query data
cache::query::SqlFieldsQuery select("SELECT id, name, age FROM Person WHERE age > ?");
select.SetSchema("PUBLIC");
select.AddArgument<int32_t>(25);

cache::query::QueryFieldsCursor cursor = cache.Query(select);
while (cursor.HasNext()) {
    cache::query::QueryFieldsRow row = cursor.GetNext();
    int32_t id = row.GetNext<int32_t>();
    std::string name = row.GetNext<std::string>();
    int32_t age = row.GetNext<int32_t>();
    std::cout << "ID: " << id << ", Name: " << name << ", Age: " << age << std::endl;
}`
    },
    python: {
      language: "python",
      code: `# Connect to the cluster
from pyignite import Client

client = Client()
client.connect("127.0.0.1", 10800)

# Create a table
create_table_sql = """CREATE TABLE IF NOT EXISTS Person (
    id INT PRIMARY KEY,
    name VARCHAR,
    age INT
)"""
client.sql(create_table_sql)

# Insert data
insert_sql = "INSERT INTO Person (id, name, age) VALUES (?, ?, ?)"
client.sql(insert_sql, query_args=[1, "John Doe", 30])
client.sql(insert_sql, query_args=[2, "Jane Smith", 28])

# Query data
for row in client.sql("SELECT id, name, age FROM Person WHERE age > ?", query_args=[25]):
    print(f"ID: {row[0]}, Name: {row[1]}, Age: {row[2]}")

# Close the connection
client.close()`
    },
    sql: {
      language: "sql",
      code: `-- Connect to the cluster
-- $ ./bin/sqlline.sh -u jdbc:ignite:thin://127.0.0.1/

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
            <a href={IGNITE2_DOCS_PATHS.clustering} className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Configure a cluster in under 5 minutes</span>
            </a>

            <a href={IGNITE2_DOCS_PATHS.sql} className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Run SQL queries on your distributed data</span>
            </a>

            <a href={IGNITE2_DOCS_PATHS.keyValueApi} className={styles.checklistItem} target="_blank" rel="noreferrer">
              <span className={styles.checklistIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Store and retrieve data with the Java API</span>
            </a>

            <a href={IGNITE2_DOCS_PATHS.persistence} className={styles.checklistItem} target="_blank" rel="noreferrer">
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
          <a className="button" href={DOCS_QUICK_START} target="_blank" rel="noreferrer">Quick Start Guide</a>
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
