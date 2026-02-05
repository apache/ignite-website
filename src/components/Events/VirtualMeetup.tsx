import React from 'react';
import Link from '@docusaurus/Link';
import styles from './VirtualMeetup.module.css';

export default function VirtualMeetup(): React.ReactElement {
  return (
    <section className={styles.virtual}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className="h3">Virtual Meetup</h2>
            <p>
              Join our monthly virtual meetups to connect with the Apache Ignite community from
              anywhere in the world. Each session features technical talks, live demos, and Q&A
              with community experts.
            </p>
            <div className={styles.actions}>
              <Link to="https://www.meetup.com/apache-ignite-virtual-meetup/" className="button button--primary">
                Join Virtual Meetup Group
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/img/events/virtual-meetup.svg" alt="Virtual Meetup" />
          </div>
        </div>
      </div>
    </section>
  );
}
