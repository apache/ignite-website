import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import '../../../css/tooling.css';

export default function Tooling(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Tooling</title>
      </Head>

      <section className="innerhero innerhero--tooling">
        <div className="container innerhero__cont">
          <div className="innerhero__main">
            <h1 className="h1 innerhero__h1">
              Tools And Solutions <br />
              For Apache Ignite Management <br />
              And Monitoring
            </h1>
            <div className="innerhero__descr pt-4 h4">
              Apache Ignite exposes metrics in&nbsp;JMX and <br />
              OpenCensus formats. Use a&nbsp;broad range of&nbsp;tools
            </div>
            <img className="innerhero__pic innerhero__pic--tooling" src="/img/features/tooling/herobg.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '2rem 0' }}>
        <div style={{
          background: '#f0f7ff',
          border: '1px solid #0066cc',
          borderRadius: '8px',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#0066cc"/>
          </svg>
          <div>
            <strong style={{ color: '#0066cc' }}>Apache Ignite 2.x Feature</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#333' }}>
              This feature applies to Apache Ignite 2.x. For current Apache Ignite capabilities, see the <Link to="/features">main features page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="tooling-leading container">
        <h2 className="h4">Out-Of-The-Box Solutions</h2>
        <p className="h5 pt-2">Tools developed specifically for Ignite cluster management and monitoring</p>
      </section>

      <section className="toolingbox container">
        <h2 className="toolingbox__title h4 flexi">
          <img src="/img/features/tooling/icon-apache.svg" alt="" />
          <span>VISOR COMMAND LINE AND CONTROL SCRIPT</span>
        </h2>

        <div className="toolingbox__picwrap">
          <img src="/img/features/tooling/visor-command-line.png" alt="" />
        </div>
        <div className="toolingbox__bg">
          <div className="toolingbox__picdescr h5">
            Apache Ignite officially supports two command-line tools <br />
            to manage and monitor the cluster:
          </div>
          <div className="toolvarlist1">
            <div className="toolvarlist1__left">
              <h3 className="toolvarlist1__title">Visor Command Line tool</h3>
              <div className="toolvarlist1__list">
                <dl className="toolvarlist1__dl">
                  <dt>Get statistics about</dt>
                  <dd>
                    <p>– cluster nodes</p>
                    <p>– compute tasks</p>
                    <p>– caches</p>
                  </dd>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Manage the size of your cluster by starting or&nbsp;stopping nodes.</dt>
                </dl>
              </div>
              <div className="toolvarlist1__more">
                <a className="button" href="/use-cases/in-memory-cache">
                  Learn more
                </a>
              </div>
            </div>
            <div className="toolvarlist1__right">
              <h3 className="toolvarlist1__title">Control Script</h3>
              <p className="toolvarlist1__descr">
                An advanced command-line utility. It can <br />
                do the following:
              </p>
              <div className="toolvarlist1__list">
                <dl className="toolvarlist1__dl">
                  <dt>Change the baseline topology</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Activate and deactivate the cluster</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Perform consistency checks of your data and indexes</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Detect long-running or hanging transactions</dt>
                </dl>
              </div>
              <div className="toolvarlist1__more">
                <a className="button" href="/use-cases/in-memory-cache">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="toolingbox container">
        <h2 className="toolingbox__title h4 flexi">
          <img src="/img/features/tooling/icon-gridgain.svg" alt="" />
          <span>GRIDGAIN CONTROL CENTER</span>
        </h2>

        <div className="toolingbox__picwrap">
          <img src="/img/features/tooling/grid-gain.png" alt="" />
        </div>
        <div className="toolingbox__bg">
          <div className="toolingbox__picdescr h5">
            GridGain Control Center is a troubleshooting, management <br />
            and monitoring tool created just for Apache Ignite:
          </div>
          <div className="toolvarlist1 toolvarlist1--simple">
            <div className="toolvarlist1__left">
              <div className="toolvarlist1__list">
                <dl className="toolvarlist1__dl">
                  <dt>Debug SQL query performance bottleneck</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Define custom alerts to track and react on&nbsp;over 200 cluster, node, and storage</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Upgrade clusters while in production, with&nbsp;zero downtime</dt>
                </dl>
              </div>
            </div>
            <div className="toolvarlist1__right">
              <div className="toolvarlist1__list">
                <dl className="toolvarlist1__dl">
                  <dt>Trace the performance of your operations under load</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Proactively manage data skews to optimize cluster utilization</dt>
                </dl>
                <dl className="toolvarlist1__dl">
                  <dt>Monitor the state of the cluster with customizable dashboards</dt>
                </dl>
              </div>
            </div>
          </div>
          <div className="toolvarlist1-bottom">
            <a className="button" href="https://www.gridgain.com/products/control-center" target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="toolingbox container">
        <h2 className="toolingbox__title h4 flexi">
          <img src="/img/features/tooling/icon-datadog.svg" alt="" />
          <span>DATADOG INTEGRATION FOR APACHE IGNITE</span>
        </h2>

        <div className="toolingbox__picwrap">
          <img src="/img/features/tooling/data-dog.jpg" alt="" />
        </div>
        <div className="toolingbox__bg">
          <div className="toolingbox__picdescr h5">
            Datadog is a general-purpose monitoring service that integrates <br />
            natively with Apache Ignite and supports the following:
          </div>
          <div className="toolvarlist2">
            <div className="toolvarlist2__item">
              <p>Collect and visualize metrics for your Ignite nodes through an out-of-the-box dashboard</p>
            </div>
            <div className="toolvarlist2__item">
              <p>Track cluster-wide memory usage, including detailed garbage collection activity</p>
            </div>
            <div className="toolvarlist2__item">
              <p>
                Use the built-in health check for Ignite to&nbsp;create an&nbsp;alert and notify you about the
                &laquo;node goes offline&raquo; events
              </p>
            </div>
          </div>
          <div className="toolvarlist1-bottom">
            <a
              className="button"
              href="https://www.datadoghq.com/blog/monitor-apache-ignite-with-datadog/"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="toolingbox container">
        <h2 className="toolingbox__title h4 flexi">
          <img src="/img/features/tooling/icon-zabbix.svg" alt="" />
          <span>ZABBIX</span>
        </h2>

        <div className="toolingbox__picwrap">
          <img src="/img/features/tooling/zabbix.png" alt="" />
        </div>
        <div className="toolingbox__bg">
          <div className="toolingbox4__wrap">
            <div className="toolingbox4__left">
              <h3 className="toolingbox4__title">
                Zabbix is an open-source monitoring <br />
                software tool for diverse IT components:
              </h3>
              <ul className="dashlist">
                <li>networks</li>
                <li>servers</li>
                <li>virtual machines</li>
                <li>cloud services</li>
              </ul>
            </div>
            <div className="toolingbox4__right">
              <h3 className="toolingbox4__title">
                Zabbix provides monitoring <br />
                metrics:
              </h3>
              <ul className="dashlist">
                <li>network utilization</li>
                <li>CPU load</li>
                <li>disk space consumption.</li>
              </ul>
            </div>
          </div>
          <div className="toolingbox4__numblock">
            <h3 className="h5 toolingbox4__numtitle">Essential characteristics:</h3>
            <div className="toolingbox4__numwrap pt-3">
              <div className="toolingbox4__numitem">
                <i>01</i>
                <p>Official JMX Template for Apache Ignite computing platform.</p>
                <p className="toolingbox4__small">
                  This template is contributed and maintained by an Ignite community member.
                </p>
              </div>
              <div className="toolingbox4__numitem">
                <i>02</i>
                <p>For Zabbix version: 5.4 and higher of data loss or corruption execute on nodes across the cluster.</p>
              </div>
              <div className="toolingbox4__numitem">
                <i>03</i>
                <p>
                  This template works with standalone and cluster instances. Metrics are collected by&nbsp;JMX. All
                  metrics are discoverable.
                </p>
              </div>
            </div>
          </div>
          <div className="toolvarlist1-bottom">
            <a
              className="button"
              href="https://www.zabbix.com/integrations/ignite#tab:official1"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="toolingend">
        <div className="container flexi">
          <div className="toolingend__main">
            <div className="toolingend__title h4">Ready to Start with Apache Ignite?</div>
            <p className="fz20 pt-1x">
              Start with our Quick Start Guides and build your first application <br />
              in 5-10 minutes
            </p>
          </div>
          <div className="toolingend__action">
            <a className="button">Build your first application</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
