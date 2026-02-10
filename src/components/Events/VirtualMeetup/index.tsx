import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface VideoRecording {
  videoId: string;
  title: string;
}

const RECENT_RECORDINGS: VideoRecording[] = [
  {
    videoId: 'f2ArcJPH4iU',
    title: 'Virtual Meetup Recording 1',
  },
  {
    videoId: 'lCiZ3x8IRvI',
    title: 'Virtual Meetup Recording 2',
  },
  {
    videoId: '7UjENQBFvIQ',
    title: 'Virtual Meetup Recording 3',
  },
];

const MEETUP_URL = 'https://www.meetup.com/Apache-Ignite-Virtual-Meetup/';
const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ';

export default function VirtualMeetup(): React.ReactElement {
  return (
    <section className={styles.virtualMeetup} id="virtual">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.description}>
            <h3>Virtual Apache Ignite Meetup</h3>
            <p>
              Join Ignite users, developers, committers, contributors, and architects from all over the world
              and get access to the online talks and presentations by Apache Ignite experts and practitioners.
            </p>
          </div>
          <div className={styles.action}>
            <Link to={MEETUP_URL} className="button" target="_blank" rel="noopener noreferrer">
              Join Virtual Meetup
            </Link>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.column}>
            <h4>Recordings Of Past Meetups</h4>
            <p>
              Find a collection of past Virtual Apache Ignite Meetup
              <br />
              presentations, talks, and webinars.
            </p>
          </div>

          <div className={`${styles.column} ${styles.upcoming}`}>
            <h4>Upcoming Virtual Meetup</h4>
            <div className={styles.joinMessage}>
              <h5>
                Join our group and don't
                <br />
                miss an upcoming virtual event
              </h5>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.recordings}>
              {RECENT_RECORDINGS.map((recording) => (
                <Link
                  key={recording.videoId}
                  to={`https://www.youtube.com/watch?v=${recording.videoId}`}
                  className={styles.recordingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/events/content/meetup.png"
                    alt={recording.title}
                    className={styles.thumbnail}
                  />
                </Link>
              ))}
              <Link
                to={PLAYLIST_URL}
                className={`button button--outline ${styles.playlistButton}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71423 4.99993L0.142805 9.94865L0.142805 0.0512134L8.71423 4.99993Z" fill="currentColor"/>
                </svg>
                <span>Watch Virtual Meetup videos</span>
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <img
              src="/img/events/logo-meetup.svg"
              alt="Meetup.com"
              className={styles.meetupLogo}
            />
            <Link
              to={MEETUP_URL}
              className={`button button--outline ${styles.learnMoreButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
