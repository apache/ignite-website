import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CityMeetups.module.css';

interface CityMeetup {
  city: string;
  country: string;
  link: string;
  members?: number;
}

const CITY_MEETUPS: CityMeetup[] = [
  {
    city: 'San Francisco',
    country: 'USA',
    link: 'https://www.meetup.com/apache-ignite-san-francisco/',
    members: 500,
  },
  {
    city: 'New York',
    country: 'USA',
    link: 'https://www.meetup.com/apache-ignite-new-york/',
    members: 400,
  },
  {
    city: 'London',
    country: 'UK',
    link: 'https://www.meetup.com/apache-ignite-london/',
    members: 350,
  },
  {
    city: 'Moscow',
    country: 'Russia',
    link: 'https://www.meetup.com/apache-ignite-moscow/',
    members: 600,
  },
  {
    city: 'Bangalore',
    country: 'India',
    link: 'https://www.meetup.com/apache-ignite-bangalore/',
    members: 450,
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    link: 'https://www.meetup.com/apache-ignite-tokyo/',
    members: 300,
  },
];

export default function CityMeetups(): React.ReactElement {
  return (
    <section className={styles.cityMeetups}>
      <div className="container">
        <h2 className="h3">City-Based Meetup Groups</h2>
        <p className={styles.description}>
          Connect with fellow Apache Ignite enthusiasts in your city. Our local meetup groups host
          regular in-person events, workshops, and networking sessions.
        </p>
        <div className={styles.meetupGrid}>
          {CITY_MEETUPS.map((meetup, index) => (
            <Link
              key={index}
              to={meetup.link}
              className={styles.meetupCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.meetupInfo}>
                <h4 className={styles.city}>{meetup.city}</h4>
                <div className={styles.country}>{meetup.country}</div>
                {meetup.members && (
                  <div className={styles.members}>{meetup.members}+ members</div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.callout}>
          <p>
            Don't see your city? Start your own Apache Ignite meetup group or join our virtual
            meetup to connect with the global community.
          </p>
        </div>
      </div>
    </section>
  );
}
