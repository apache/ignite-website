import React, {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
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
              Distributed Database For <br />High-Performance Applications <br />With In-Memory Speed
            </h1>
            <div className={styles.innerhero__h2}>
              Scale Across Memory And Disk Without Compromise
            </div>
            <div className={styles.innerhero__action}>
              <Link className={clsx('button', styles.fronthero__button)} to="https://ignite.apache.org/docs/latest/index">
                Start Coding
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

      <Link to="/use-cases/provenusecases.html" className={styles.frontcard}>
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
  // State for managing tab visibility - matches PUG's jsTabWrap pattern
  const [activeTab, setActiveTab] = useState('frontcode-1');
  const [activeCodeTab, setActiveCodeTab] = useState<{[key: string]: string}>({
    'frontcode-1': 'xml',
    'frontcode-3': 'java',
    'frontcode-4': 'java',
    'frontcode-6': 'java'
  });

  const multiTierXML = `<bean class="org.apache.ignite.configuration.IgniteConfiguration">
    <property name="dataStorageConfiguration">
        <bean class="org.apache.ignite.configuration.DataStorageConfiguration">
            <property name="defaultDataRegionConfiguration">
                <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                    <property name="persistenceEnabled" value="true"/>
                </bean>
            </property>
        </bean>
    </property>
</bean>`;

  const multiTierJava = `IgniteConfiguration cfg = new IgniteConfiguration();

DataStorageConfiguration storageCfg = new DataStorageConfiguration();

// Enable Ignite Persistence
storageCfg.getDefaultDataRegionConfiguration().setPersistenceEnabled(true);

// Using the new storage configuration
cfg.setDataStorageConfiguration(storageCfg);`;

  const multiTierCSharp = `var cfg = new IgniteConfiguration
{
    DataStorageConfiguration = new DataStorageConfiguration
    {
        DefaultDataRegionConfiguration = new DataRegionConfiguration
        {
            Name = "Default_Region",
            PersistenceEnabled = true
        }
    }
};`;

  const sqlCode = `SELECT country.name, city.name, MAX(city.population) as max_pop
FROM country JOIN city ON city.countrycode = country.code
WHERE country.code IN ('USA','BRA','ESP','JPN')
GROUP BY country.name, city.name
ORDER BY max_pop DESC LIMIT 3;`;

  const acidJava = `IgniteTransactions transactions = ignite.transactions();

try (Transaction tx = transactions.txStart()) {
    Integer hello = cache.get("Hello");

    if (hello == 1)
        cache.put("Hello", 11);

    cache.put("World", 22);

    tx.commit();
}`;

  const acidCSharp = `var transactions = ignite.GetTransactions();

using (var tx = transactions.TxStart()) {
    int hello = cache.Get("Hello");

    if (hello == 1) {
        cache.Put("Hello", 11);
    }

    cache.Put("World", 22);

    tx.Commit();
}`;

  const computeJava = `// Broadcast the task to server nodes only.
IgniteCompute compute = ignite.compute(ignite.cluster().forServers());

// Each remote server node will execute the logic of the task/lambda below.
compute.broadcast(() -> System.out.println(
    "Hello Node: " + ignite.cluster().localNode().id()));`;

  const computeCSharp = `// Broadcast the task to server nodes only.
var compute = ignite.GetCluster().ForServers().GetCompute();

// Each remote server node will execute the custom PrintNodeIdAction task.
compute.Broadcast(new PrintNodeIdAction());`;

  const mlJava = `// Create the trainer
KNNClassificationTrainer trainer = new KNNClassificationTrainer()
.withK(3).withIdxType(SpatialIndexType.BALL_TREE)
.withDistanceMeasure(new EuclideanDistance())
.withWeighted(true);

// Train the model
KNNClassificationModel knnMdl = trainer.fit(ignite, dataCache, vectorizer);

// Make a prediction
double prediction = knnMdl.predict(observation);`;

  const continuousJava = `ContinuousQuery qry = new ContinuousQuery<>();

// The callback that will be triggered on the application side.
qry.setLocalListener(new MyLocalListener());

// The callback that will be executed on the server side.
qry.setRemoteFilterFactory(new MyRemoteFilterFactory());

// Deploy the query in the cluster.
cache.query(query);`;

  const continuousCSharp = `var cache = ignite.GetOrCreateCache("myCache");

var query = new ContinuousQuery(
    new MyLocalListener(), // Will be triggered on the application side.
    new MyRemoteFilter()); // Will be executed on the server side.

// Deploy the query in the cluster.
var handle = cache.QueryContinuous(query);`;

  const handleCodeTabChange = (tabId: string, codeTab: string) => {
    setActiveCodeTab(prev => ({...prev, [tabId]: codeTab}));
  };

  return (
    <div className={clsx('container', styles.forntcodes)}>
      <h2 className={styles.h2}>Use Ignite Core Capabilities To Start Easily <br />And Scale Faster</h2>

      <div className={clsx(styles.forntcodes__wrap, 'pt-4')}>
        {/* Left side vertical menu - matches PUG layout */}
        <div className={styles.forntcodes__menu}>
          <ul className="fz20">
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-1' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-1'); }}
              >
                Multi-Tier Storage
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-2' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-2'); }}
              >
                Distributed SQL
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-3' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-3'); }}
              >
                ACID Transactions
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-4' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-4'); }}
              >
                Compute APIs
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-5' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-5'); }}
              >
                Machine Learning
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeTab === 'frontcode-6' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('frontcode-6'); }}
              >
                Continuous Queries
              </a>
            </li>
          </ul>
          <Link className={clsx(styles.forntcodes__menumore, 'fz20')} to="/features/">View all features</Link>
        </div>

        {/* Right side content area */}
        <div className={styles.forntcodes__tabwraps}>
          {/* Multi-Tier Storage Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-1' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>Multi-Tier Storage</p>
            <p>Ignite scales up and out across memory and disk. By default, Ignite operates in a pure in-memory mode. But, by toggling a single configuration setting, you can turn a cluster into a database that can grow beyond the cluster's memory capacity:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-1'] === 'xml' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-1', 'xml'); }}
                >
                  XML
                </a>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-1'] === 'java' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-1', 'java'); }}
                >
                  Java
                </a>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-1'] === 'csharp' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-1', 'csharp'); }}
                >
                  C#/.NET
                </a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-1'] === 'xml' && 'active')}>
                  <CodeBlock language="markup">{multiTierXML}</CodeBlock>
                </div>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-1'] === 'java' && 'active')}>
                  <CodeBlock language="java">{multiTierJava}</CodeBlock>
                </div>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-1'] === 'csharp' && 'active')}>
                  <CodeBlock language="csharp">{multiTierCSharp}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <Link className="button" to="/arch/multi-tier-storage.html">Learn More About Multi-Tier Storage</Link>
              </div>
            </div>
          </div>

          {/* Distributed SQL Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-2' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>Distributed SQL</p>
            <p>Use Ignite as a traditional SQL database by leveraging JDBC drivers, ODBC drivers, or the native SQL APIs that are available for Java, C#, C++, Python, and other programming languages. Seamlessly join, group, aggregate, and order your distributed in-memory and on-disk data:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a href="#" className={clsx(styles.nativecode__link, 'active')}>SQL</a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, 'active')}>
                  <CodeBlock language="sql">{sqlCode}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <Link className="button" to="/features/sql.html">Learn More About Distributed SQL</Link>
              </div>
            </div>
          </div>

          {/* ACID Transactions Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-3' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>ACID Transactions</p>
            <p>Ignite can operate in a strongly consistent mode that provides full support for distributed ACID transactions. Transact across multiple cluster nodes, caches, tables, and partitions:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-3'] === 'java' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-3', 'java'); }}
                >
                  Java
                </a>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-3'] === 'csharp' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-3', 'csharp'); }}
                >
                  C#/.NET
                </a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-3'] === 'java' && 'active')}>
                  <CodeBlock language="java">{acidJava}</CodeBlock>
                </div>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-3'] === 'csharp' && 'active')}>
                  <CodeBlock language="csharp">{acidCSharp}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <Link className="button" to="/features/acid-transactions.html">Learn More About Transactions</Link>
              </div>
            </div>
          </div>

          {/* Compute APIs Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-4' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>Compute APIs In Java, Scala, Kotlin, C#, C++</p>
            <p>With traditional databases, for in-place calculations, you use stored procedures that are written in a language such as PL/SQL. With Ignite, you use modern JVM languages, C# or C++ to develop and execute custom tasks across your distributed database:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-4'] === 'java' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-4', 'java'); }}
                >
                  Java
                </a>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-4'] === 'csharp' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-4', 'csharp'); }}
                >
                  C#/.NET
                </a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-4'] === 'java' && 'active')}>
                  <CodeBlock language="java">{computeJava}</CodeBlock>
                </div>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-4'] === 'csharp' && 'active')}>
                  <CodeBlock language="csharp">{computeCSharp}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <Link className="button" to="/features/compute-apis.html">Learn More About Compute APIs</Link>
              </div>
            </div>
          </div>

          {/* Machine Learning Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-5' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>Built-In Machine Learning</p>
            <p>Ignite machine learning uses built-in algorithms and tools, as well as TensorFlow integration, to enable the building of scalable machine learning models and avoid costly data transfers. Train, deploy, evaluate, and update your ML and DL models continuously and at scale:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a href="#" className={clsx(styles.nativecode__link, 'active')}>Java</a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, 'active')}>
                  <CodeBlock language="java">{mlJava}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <Link className="button" to="/features/machinelearning.html">Learn More About Machine Learning</Link>
              </div>
            </div>
          </div>

          {/* Continuous Queries Tab */}
          <div className={clsx(styles.forntcodes__tab, activeTab === 'frontcode-6' && 'active')}>
            <p className={clsx(styles.forntcodes__tabtitle, 'fz20', 'pb-1')}>Continuous Queries</p>
            <p>With relational databases, you use triggers to react to certain events. With Ignite, you deploy continuous queries that are written in a modern programming language such as Java or C# and process streams of changes on the database and application side:</p>

            <div className={styles.forntcodes__innertabs}>
              <div className={styles.nativecode__tabctrls}>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-6'] === 'java' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-6', 'java'); }}
                >
                  Java
                </a>
                <a
                  href="#"
                  className={clsx(styles.nativecode__link, activeCodeTab['frontcode-6'] === 'csharp' && 'active')}
                  onClick={(e) => { e.preventDefault(); handleCodeTabChange('frontcode-6', 'csharp'); }}
                >
                  C#/.NET
                </a>
              </div>
              <div className={styles.nativecode__tabs}>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-6'] === 'java' && 'active')}>
                  <CodeBlock language="java">{continuousJava}</CodeBlock>
                </div>
                <div className={clsx(styles.nativecode__tab, activeCodeTab['frontcode-6'] === 'csharp' && 'active')}>
                  <CodeBlock language="csharp">{continuousCSharp}</CodeBlock>
                </div>
              </div>
              <div className={styles.forntcodes__bottom}>
                <a className="button" href="https://ignite.apache.org/docs/latest/key-value-api/continuous-queries" target="_blank" rel="noreferrer">Learn More About Continuous Queries</a>
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
      <h2 className={styles.h2}>New To Ignite? <br />Three Primary Usage Scenarios</h2>
      <div className={styles.frontnewcards__wrap}>
        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Application Acceleration <br />& Scale Out</h4>
          <div className={styles.cardsimple__text}>
            Accelerate your existing applications by 100x using Ignite as an in-memory cache or in-memory data grid that is deployed over one or more external databases.
          </div>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Distributed Database For <br />HTAP Workloads</h4>
          <div className={styles.cardsimple__text}>
            Build applications that support transactional and analytical workloads by using Ignite as a database that scales beyond available memory capacity.
          </div>
        </article>

        <article className={clsx(styles.frontsimplecard, styles.cardsimple)}>
          <h4 className={styles.cardsimple__title}>Digital Integration Hub</h4>
          <div className={styles.cardsimple__text}>
            Create an advanced platform architecture that aggregates multiple back-end systems and databases into a low-latency and shared data store.
          </div>
          <div className={styles.cardsimple__bottom}>
            <Link to="/use-cases/digital-integration-hub.html" className="button button--shadow">Learn More</Link>
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
        <Link to="/use-cases/provenusecases.html" className="button button--shadow">Watch Other Stories</Link>
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

        <a href="/events.html#upcoming" className={styles.frontconfcard}>
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
        <Link to="/events.html" className="button button--shadow">View All Events</Link>
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
          <Link to="/resources.html#technical" className={clsx(styles.frontresitem, styles['frontresitem--black'])}>
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

          <Link to="/resources.html#git" className={clsx(styles.frontresitem, styles['frontresitem--gray'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/icon-github.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Git repositories with Ignite source code and code samples and examples</div>
          </Link>
        </div>

        <div className={styles.frontresourse__col}>
          <div className={styles.capstext}>Learning resources</div>
          <Link to="/resources.html#learning" className={clsx(styles.frontresitem, styles['frontresitem--red'])}>
            <div className={styles.frontresitem__icon}>
              <img src="/img/frontpage/res-videos.svg" alt="" />
            </div>
            <div className={styles.frontresitem__text}>Dozens of essential videos and webinar <br />recordings</div>
          </Link>

          <Link to="/resources.html#training" className={clsx(styles.frontresitem, styles['frontresitem--rose'])}>
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
        <Link to="/resources.html" className="button button--shadow">View All Resources</Link>
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
