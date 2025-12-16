import React from 'react';
import styles from './IgniteSummit.module.css';

export default function IgniteSummit(): React.ReactElement {
  return (
    <section className={styles.summit} id="summit">
      <div className="container">
        <p className="capstext">APACHE IGNITE SUMMIT</p>
        <h2 className="h2">The Premier Apache Ignite Conference</h2>
        <p className={styles.description}>
          Apache Ignite Summit brings together developers, architects, and industry leaders to share
          knowledge, best practices, and the latest developments in distributed computing and in-memory
          data grids.
        </p>
        <div className={styles.summitContent}>
          <div className={styles.summitInfo}>
            <h3>What to Expect:</h3>
            <ul>
              <li>Technical deep-dives from Apache Ignite committers and PMC members</li>
              <li>Real-world use cases from companies using Ignite in production</li>
              <li>Hands-on workshops and tutorials</li>
              <li>Networking opportunities with the community</li>
              <li>Latest roadmap updates and future directions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
