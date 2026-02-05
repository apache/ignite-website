import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface CityMeetup {
  flag: string;
  city: string;
  name: string;
  url: string;
}

const CITY_MEETUPS: CityMeetup[] = [
  {
    flag: '/img/events/flag-uk.svg',
    city: 'London',
    name: 'Apache Ignite Meetup',
    url: 'https://www.meetup.com/Apache-Ignite-London/',
  },
  {
    flag: '/img/events/flag-ru.svg',
    city: 'St.Petersburg',
    name: 'Apache Ignite Meetup',
    url: 'https://www.meetup.com/St-Petersburg-Apache-Ignite-Meetup/',
  },
  {
    flag: '/img/events/flag-ru.svg',
    city: 'Moscow',
    name: 'Apache Ignite Meetup',
    url: 'https://www.meetup.com/Moscow-Apache-Ignite-Meetup/',
  },
];

export default function CityMeetups(): React.ReactElement {
  return (
    <section className={styles.cityMeetups} id="meetups-city">
      <div className="container">
        <h2>Apache Ignite Meetups In Your City</h2>

        <div className={styles.grid}>
          {CITY_MEETUPS.map((meetup, index) => (
            <article key={index} className={styles.meetupCard}>
              <div className={styles.flag}>
                <img src={meetup.flag} alt="" />
              </div>
              <div className={styles.info}>
                <strong>{meetup.city}</strong>
                <span>{meetup.name}</span>
              </div>
              <div className={styles.action}>
                <Link
                  to={meetup.url}
                  className={`button button--outline ${styles.joinButton}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/img/events/icon-plus.svg" alt="" />
                  <span>Join</span>
                </Link>
              </div>
            </article>
          ))}

          <article className={styles.startMeetup}>
            <p className={styles.startTitle}>
              Start an onsite Apache Ignite Meetup in your city.
            </p>
            <small>Take the first step.</small>
            <small>
              Send us a note to <br />
              <a href="mailto:dev@ignite.apache.org">dev@ignite.apache.org</a> <br />
              and we'll see what can be done.
            </small>
          </article>
        </div>
      </div>
    </section>
  );
}
