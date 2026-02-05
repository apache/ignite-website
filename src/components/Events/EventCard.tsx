import React from 'react';
import { Event } from '../../data/events';
import Link from '@docusaurus/Link';
import styles from './EventCard.module.css';

interface EventCardProps {
  event: Event;
  isPast?: boolean;
}

export default function EventCard({ event, isPast }: EventCardProps): React.ReactElement {
  const eventDate = new Date(event.date);
  const formattedDate = event.endDate
    ? `${new Date(event.date).toLocaleDateString()} - ${new Date(event.endDate).toLocaleDateString()}`
    : eventDate.toLocaleDateString();

  return (
    <div className={`${styles.eventCard} ${isPast ? styles.past : ''}`}>
      {event.thumbnail && (
        <div className={styles.thumbnail}>
          <img src={event.thumbnail} alt={event.title} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.type}>{event.type.toUpperCase()}</div>
        <h4 className={styles.title}>{event.title}</h4>
        <div className={styles.meta}>
          <div className={styles.date}>{formattedDate}</div>
          <div className={styles.location}>{event.location}</div>
        </div>
        <p className={styles.description}>{event.description}</p>

        {event.speakers && event.speakers.length > 0 && (
          <div className={styles.speakers}>
            {event.speakers.map((speaker, idx) => (
              <div key={idx} className={styles.speaker}>
                {speaker.photo && <img src={speaker.photo} alt={speaker.name} />}
                <span>{speaker.name}</span>
              </div>
            ))}
          </div>
        )}

        {event.links && (
          <div className={styles.links}>
            {event.links.registration && !isPast && (
              <Link to={event.links.registration} className="button button--primary">
                Register
              </Link>
            )}
            {event.links.recording && (
              <Link to={event.links.recording} className="button button--secondary">
                Watch Recording
              </Link>
            )}
            {event.links.slides && (
              <Link to={event.links.slides}>View Slides</Link>
            )}
            {event.links.website && (
              <Link to={event.links.website}>Event Website</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
