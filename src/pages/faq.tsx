import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import { FAQCategoryTabs, type FAQCategory } from '@site/src/components/FAQAccordion';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './faq.module.css';

function HeroSection() {
  return (
    <section className="innerhero">
      <div className="container innerhero__cont">
        <div className="innerhero__main">
          <div className="innerhero__pre pb-3">Apache Ignite</div>
          <h1 className="h1 innerhero__h1">Frequently Asked Questions</h1>
          <div className="innerhero__descr pt-2 h5">
            Answers to common questions about Apache Ignite<br />the memory-first distributed SQL database
          </div>
        </div>
        <img
          className="innerhero__pic innerhero__pic--faq"
          src="/img/faq/hero.svg"
          alt="Apache Ignite FAQ"
        />
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <Section className={styles.overview}>
      <div className={styles.overviewGrid}>
        <div className={styles.overviewContent}>
          <div className="capstext">What is Apache Ignite?</div>
          <p className={styles.overviewLead}>
            Apache Ignite is a memory-first distributed SQL database built for high-velocity data workloads where milliseconds matter.
          </p>
          <ul className={styles.overviewList}>
            <li>Memory-first storage with optional persistence</li>
            <li>Schema-driven data placement for local query execution</li>
            <li>ACID transactions across partitions using Raft consensus</li>
            <li>Non-blocking reads through MVCC snapshot isolation</li>
            <li>Full SQL support via Apache Calcite</li>
          </ul>
        </div>
        <aside className={styles.overviewMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>Sub-10ms</span>
            <span className={styles.metricLabel}>query latency with colocation</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>ACID</span>
            <span className={styles.metricLabel}>transactions across partitions</span>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function ValuePropsSection() {
  const valueProps = [
    {
      title: 'Speed Without Compromise',
      description: 'Memory-first architecture delivers microsecond latencies. Data lives in RAM, not behind disk I/O.',
      icon: '/img/faq/icon-faq1.svg',
    },
    {
      title: 'Scale Without Penalties',
      description: 'Schema-driven colocation keeps related data together, eliminating cross-node join penalties.',
      icon: '/img/faq/icon-faq2.svg',
    },
    {
      title: 'Consistency Without Tradeoffs',
      description: 'ACID transactions across partitions with Raft consensus. No eventual consistency compromises.',
      icon: '/img/faq/icon-faq3.svg',
    },
  ];

  return (
    <Section className={styles.valueProps}>
      <div className={styles.valuePropsGrid}>
        {valueProps.map((prop, index) => (
          <article key={index} className={styles.valueProp}>
            <div className={styles.valuePropIcon}>
              <img src={prop.icon} alt="" />
            </div>
            <h3 className={styles.valuePropTitle}>{prop.title}</h3>
            <p className={styles.valuePropDescription}>{prop.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  const categories: FAQCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      questions: [
        {
          question: 'What is Apache Ignite?',
          answer: (
            <>
              <p>
                Apache Ignite is a memory-first distributed SQL database built for high-velocity data workloads where milliseconds matter. It combines:
              </p>
              <ul>
                <li>Memory-first storage with optional persistence (AIPERSIST, AIMEM)</li>
                <li>Schema-driven data placement (colocation) for local query execution</li>
                <li>ACID transactions across partitions using Raft consensus</li>
                <li>Non-blocking reads through MVCC snapshot isolation</li>
                <li>Full SQL support via Apache Calcite</li>
              </ul>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/',
          learnMoreText: 'Read the Documentation',
        },
        {
          question: 'How is Ignite 3 different from Ignite 2?',
          answer: (
            <>
              <p>
                Ignite 3 represents an architectural evolution from cache-centric platform to database-first design:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Ignite 2</th>
                    <th>Ignite 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary API</td>
                    <td>Cache API</td>
                    <td>Table API</td>
                  </tr>
                  <tr>
                    <td>Schema</td>
                    <td>Optional via configuration</td>
                    <td>Required via SQL DDL</td>
                  </tr>
                  <tr>
                    <td>Transactions</td>
                    <td>6 modes</td>
                    <td>Single mode (strict serializable)</td>
                  </tr>
                  <tr>
                    <td>Consistency</td>
                    <td>Configurable</td>
                    <td>Strong by default (Raft)</td>
                  </tr>
                  <tr>
                    <td>SQL</td>
                    <td>Optional addon</td>
                    <td>Primary interface (Calcite)</td>
                  </tr>
                  <tr>
                    <td>Data Placement</td>
                    <td>Manual</td>
                    <td>Schema-driven colocation</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Both versions remain under Apache Software Foundation governance for different use cases.
              </p>
            </>
          ),
        },
        {
          question: 'What languages and clients are supported?',
          answer: (
            <>
              <p>Ignite provides native thin clients for:</p>
              <ul>
                <li><strong>Java</strong>: Full feature set with CompletableFuture async support</li>
                <li><strong>.NET (C#)</strong>: Native thin-client protocol with async/await</li>
                <li><strong>C++</strong>: Native thin-client implementation</li>
                <li><strong>Python</strong>: Native thin-client bindings</li>
              </ul>
              <p>All clients provide partition-aware routing for direct access to data nodes.</p>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/develop/ignite-clients/',
          learnMoreText: 'Client Documentation',
        },
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      questions: [
        {
          question: 'How does schema-driven colocation work?',
          answer: (
            <>
              <p>
                Traditional distributed databases use <code>hash(primary_key)</code> by default, and scatter data randomly across nodes. When you query related data (e.g., artist + albums), this requires expensive cross-node joins adding tens to hundreds of milliseconds additional latency.
              </p>
              <p>
                Ignite's <code>colocateBy</code> annotation declares relationships in the schema. Related data lives together, so queries execute locally in memory (sub-10ms) instead of coordinating across nodes.
              </p>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/sql/reference/language-definition/ddl',
          learnMoreText: 'Schema Design Guide',
        },
        {
          question: 'What is memory-first architecture?',
          answer: (
            <>
              <p>
                Memory-first architecture treats RAM as the primary storage tier, not as cache in front of disk. Data lives in memory by default. Persistence (if enabled) provides durability through background checkpointing, not synchronous disk writes.
              </p>
              <p>This eliminates the latency tax disk-based systems impose on every operation:</p>
              <ul>
                <li>Hot data reads: microsecond-level latency</li>
                <li>MVCC version chains traverse in memory</li>
                <li>Transaction coordination happens in memory</li>
                <li>No write-ahead log bottleneck (WAL-free with Raft)</li>
              </ul>
            </>
          ),
        },
        {
          question: 'What storage options are available?',
          answer: (
            <>
              <p>Three storage profiles for different workload needs:</p>
              <table>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Characteristics</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>AIMEM</strong></td>
                    <td>Pure in-memory, no persistence</td>
                    <td>Caches, session stores, temporary data</td>
                  </tr>
                  <tr>
                    <td><strong>AIPERSIST</strong></td>
                    <td>Memory-first with checkpointing</td>
                    <td>Production transactional workloads (default)</td>
                  </tr>
                  <tr>
                    <td><strong>RocksDB</strong></td>
                    <td>LSM-tree disk storage</td>
                    <td>Large datasets exceeding memory (experimental)</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/configure-and-operate/configuration/config-storage-overview',
          learnMoreText: 'Storage Configuration',
        },
        {
          question: 'How does Ignite achieve sub-10ms query latency?',
          answer: (
            <>
              <p>Three architectural choices combine to deliver low latency:</p>
              <ol>
                <li><strong>Memory-First Storage</strong>: Data lives in memory. No disk seeks for hot data.</li>
                <li><strong>Schema-Driven Colocation</strong>: Related data lives together. No cross-node joins.</li>
                <li><strong>MVCC Non-Blocking Reads</strong>: Readers never wait for writers. Version chains traverse in memory.</li>
              </ol>
              <p>
                For colocated relationship queries (e.g., customer + orders), expect 1-5ms latency. For cross-partition queries, expect 10-50ms depending on data distribution.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: 'transactions',
      title: 'Transactions',
      questions: [
        {
          question: 'Does Ignite support ACID transactions?',
          answer: (
            <>
              <p>Yes. Ignite provides full ACID transactions across any number of partitions:</p>
              <ul>
                <li><strong>Atomicity</strong>: Two-phase commit ensures all partitions commit or all abort</li>
                <li><strong>Consistency</strong>: Schema constraints validated before commit</li>
                <li><strong>Isolation</strong>: REPEATABLE_READ via MVCC snapshot isolation</li>
                <li><strong>Durability</strong>: Raft replication to multiple nodes before acknowledgment</li>
              </ul>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/develop/work-with-data/transactions',
          learnMoreText: 'Transaction Guide',
        },
        {
          question: 'What isolation level does Ignite use?',
          answer: (
            <>
              <p>Ignite uses REPEATABLE_READ isolation (snapshot isolation) for all transactions:</p>
              <ul>
                <li><strong>Read-write transactions</strong>: Strict serializable isolation with lock-based coordination</li>
                <li><strong>Read-only transactions</strong>: Snapshot isolation on any replica without locking</li>
              </ul>
              <p>
                This prevents dirty reads, non-repeatable reads, and phantom reads. The simplified model (one isolation level vs Ignite 2's six modes) reduces configuration complexity.
              </p>
            </>
          ),
        },
        {
          question: 'How does Raft consensus provide consistency?',
          answer: (
            <>
              <p>Each partition forms a Raft replication group with a leader and followers:</p>
              <ol>
                <li>Leader processes all writes for the partition</li>
                <li>Writes replicate to followers before acknowledgment</li>
                <li>Majority quorum (e.g., 2 of 3 replicas) required for commit</li>
                <li>If leader fails, remaining nodes elect new leader in milliseconds</li>
              </ol>
              <p>
                This eliminates split-brain scenarios. The partition with quorum continues operating. Isolated partitions cannot accept writes.
              </p>
              <p><strong>Recommended</strong>: 3+ replicas for production (tolerates 1 failure)</p>
            </>
          ),
        },
        {
          question: 'Can transactions span multiple partitions?',
          answer: (
            <p>
              Yes. Ignite supports distributed ACID transactions across any number of partitions on any number of nodes. The coordinator tracks participating partitions and uses Raft to ensure atomic commit. If any partition fails, all abort. This eliminates the need for application-level sagas or compensation logic.
            </p>
          ),
        },
      ],
    },
    {
      id: 'sql',
      title: 'SQL & Data Access',
      questions: [
        {
          question: 'What SQL capabilities does Ignite support?',
          answer: (
            <>
              <p>Ignite uses Apache Calcite for SQL processing:</p>
              <ul>
                <li><strong>DDL</strong>: CREATE TABLE, ALTER TABLE, CREATE INDEX, distribution zones</li>
                <li><strong>DML</strong>: INSERT, UPDATE, DELETE, MERGE</li>
                <li><strong>Queries</strong>: Joins (all types), aggregations, subqueries, CTEs, set operations</li>
                <li><strong>Indexes</strong>: Hash and sorted indexes, composite and covering indexes</li>
                <li><strong>Functions</strong>: Standard SQL functions plus aggregations with GROUP BY</li>
              </ul>
              <p>The cost-based optimizer handles partition pruning, index selection, and join reordering automatically.</p>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/sql/',
          learnMoreText: 'SQL Reference',
        },
        {
          question: 'What are RecordView and KeyValueView?',
          answer: (
            <>
              <p>Ignite provides multiple API views over the same schema:</p>
              <p>
                <strong>RecordView</strong>: Type-safe object mapping with compile-time validation. Best for domain-driven access patterns.
              </p>
              <p>
                <strong>KeyValueView</strong>: Key-value semantics for cache-like access patterns. Best for simple lookups by primary key.
              </p>
              <p>Both views provide the same ACID guarantees. Choose based on access pattern preference.</p>
            </>
          ),
        },
        {
          question: 'How do distributed joins perform?',
          answer: (
            <>
              <p>Join performance depends on data colocation:</p>
              <table>
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Expected Latency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Colocated join (related data together)</td>
                    <td>1-5ms (local memory)</td>
                  </tr>
                  <tr>
                    <td>Non-colocated join</td>
                    <td>40-200ms (cross-node coordination)</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Design schemas with colocation in mind. Use <code>colocateBy</code> to keep related data together. The query optimizer recognizes colocated joins and generates local execution plans.
              </p>
            </>
          ),
        },
        {
          question: 'Can I run analytics on transactional data?',
          answer: (
            <>
              <p>Yes. MVCC snapshot isolation enables non-blocking analytical queries:</p>
              <ul>
                <li>Read-only transactions access consistent snapshots</li>
                <li>No locks acquired, no impact on write throughput</li>
                <li>Long-running queries don't block updates</li>
                <li>Same SQL interface for both OLTP and analytics</li>
              </ul>
              <p>This eliminates ETL pipelines for operational analytics.</p>
            </>
          ),
        },
      ],
    },
    {
      id: 'operations',
      title: 'Operations',
      questions: [
        {
          question: 'How do I deploy Ignite in Kubernetes?',
          answer: (
            <>
              <p>
                Ignite supports Kubernetes-native deployment via Helm charts. StatefulSets provide stable pod identity. Anti-affinity rules distribute replicas across availability zones. Automatic partition rebalancing handles node additions and removals.
              </p>
            </>
          ),
          learnMoreLink: '/docs/3.1.0/getting-started/quick-start',
          learnMoreText: 'Getting Started Guide',
        },
        {
          question: 'How does replication and failover work?',
          answer: (
            <>
              <p>Each partition replicates via Raft consensus:</p>
              <ol>
                <li>Configure replication factor per distribution zone (recommend 3 for production)</li>
                <li>Each partition has a leader and followers</li>
                <li>Writes replicate to majority before acknowledgment</li>
                <li>If leader fails, new leader elected in milliseconds</li>
                <li>Client connections automatically failover to new leader</li>
              </ol>
            </>
          ),
        },
        {
          question: 'Can I change schema without downtime?',
          answer: (
            <>
              <p>Yes. The catalog manages schema metadata with atomic versioning:</p>
              <ul>
                <li>Add columns, modify constraints, create indexes while cluster runs</li>
                <li>HybridTimestamp coordination ensures cluster-wide consistency</li>
                <li>Applications continue operating during schema changes</li>
                <li>Schema changes activate after configurable delay (default 500ms)</li>
              </ul>
              <p>This enables rolling deployments and A/B testing without coordination windows.</p>
            </>
          ),
        },
        {
          question: 'What monitoring and observability options exist?',
          answer: (
            <>
              <p>Ignite provides:</p>
              <ul>
                <li><strong>OpenTelemetry metrics</strong>: Export to Prometheus, Grafana, etc.</li>
                <li><strong>System views</strong>: Query cluster state as SQL tables</li>
                <li><strong>Distributed tracing</strong>: Integration with observability platforms</li>
                <li><strong>Event logging</strong>: Configurable sinks for audit and debugging</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      id: 'comparison',
      title: 'Comparison',
      questions: [
        {
          question: 'How does Ignite compare to other distributed databases?',
          answer: (
            <>
              <p>The key differentiator is <strong>schema-driven colocation</strong>:</p>
              <table>
                <thead>
                  <tr>
                    <th>Database Type</th>
                    <th>Scale</th>
                    <th>Consistency</th>
                    <th>SQL</th>
                    <th>Data Locality Control</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Distributed SQL databases</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No (blind hash)</td>
                  </tr>
                  <tr>
                    <td>Ignite</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td><strong>Yes (colocateBy)</strong></td>
                  </tr>
                </tbody>
              </table>
              <p>
                Most distributed SQL databases scatter related data randomly using hash-based partitioning. Every relationship query requires cross-node coordination (40-200ms). Ignite keeps related data together for local execution (1-5ms).
              </p>
            </>
          ),
        },
        {
          question: 'What problems does Ignite solve that traditional databases don\'t?',
          answer: (
            <>
              <p>Traditional database architectures force trade-offs:</p>
              <ul>
                <li><strong>Traditional RDBMS</strong>: SQL support, but vertical scaling limits</li>
                <li><strong>In-memory key-value stores</strong>: Fast, but no SQL or ACID transactions</li>
                <li><strong>Distributed SQL databases</strong>: Horizontal scaling, but slow relationship queries due to blind hashing</li>
              </ul>
              <p>Ignite delivers all six requirements without compromise:</p>
              <ol>
                <li>Sub-10ms query latencies (memory-first + colocation)</li>
                <li>Horizontal scaling (distributed partitioning)</li>
                <li>ACID guarantees (Raft + MVCC)</li>
                <li>SQL with joins (Apache Calcite)</li>
                <li>Data locality control (colocateBy)</li>
                <li>System consolidation (unified platform)</li>
              </ol>
            </>
          ),
        },
        {
          question: 'When should I use Ignite vs other database types?',
          answer: (
            <>
              <p><strong>Choose Ignite when you need</strong>:</p>
              <ul>
                <li>Sub-10ms latency WITH ACID transactions</li>
                <li>Horizontal scaling WITHOUT application-level sharding</li>
                <li>SQL queries on distributed data WITH predictable performance</li>
                <li>Related data queried together WITH local execution</li>
              </ul>
              <p><strong>In-memory key-value stores may be sufficient when</strong>:</p>
              <ul>
                <li>Pure key-value access (no relationships)</li>
                <li>Eventual consistency acceptable</li>
                <li>No SQL query requirements</li>
              </ul>
              <p><strong>Traditional RDBMS may be sufficient when</strong>:</p>
              <ul>
                <li>Single-node capacity sufficient</li>
                <li>Mature ecosystem tools required</li>
                <li>No horizontal scaling needed</li>
              </ul>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <Section className={styles.faqSection}>
      <div className="capstext">Frequently Asked Questions</div>
      <div className={styles.faqContainer}>
        <FAQCategoryTabs categories={categories} />
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={clsx('container', styles.ctaContainer)}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Start?</h2>
          <p className={styles.ctaDescription}>
            Get started with Apache Ignite in minutes with our quick start guide.
          </p>
        </div>
        <div className={styles.ctaAction}>
          <Link className="button" to="/docs/3.1.0/getting-started/quick-start">
            Quick Start Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FAQPage(): ReactNode {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite FAQ - Frequently Asked Questions</title>
        <meta name="description" content="Answers to common questions about Apache Ignite, the memory-first distributed SQL database. Learn about architecture, transactions, SQL capabilities, and deployment." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite FAQ" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta property="og:description" content="Answers to common questions about Apache Ignite, the memory-first distributed SQL database." />
      </Head>
      <main>
        <HeroSection />
        <OverviewSection />
        <ValuePropsSection />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
}
