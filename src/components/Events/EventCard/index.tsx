import React from 'react';
import Link from '@docusaurus/Link';
import type {Event} from '@site/src/data/events';
import {formatEventDate, isExternalLink} from '@site/src/utils/events';
import styles from './styles.module.css';

interface EventCardProps {
  event: Event;
  past?: boolean;
}

export default function EventCard({event, past = false}: EventCardProps) {
  const formattedDate = formatEventDate(event);
  const isExternal = isExternalLink(event.link);

  return (
    <article className={`${styles.eventCard} ${past ? styles.past : ''}`}>
      <div className={styles.date}>{formattedDate}</div>

      <h4 className={styles.title}>{event.title}</h4>

      {event.description && <p className={styles.description}>{event.description}</p>}

      <div className={styles.info}>
        {event.speakers && event.speakers.length > 0 && (
          <div className={styles.speaker}>
            {event.speakers.map((speaker, idx) => (
              <span key={idx}>
                {speaker}
                {idx < event.speakers.length - 1 && <br />}
              </span>
            ))}
          </div>
        )}

        {event.location && <div className={styles.location}>{event.location}</div>}
      </div>

      {event.link && (
        <Link
          to={event.link}
          className={`button button--secondary ${styles.button}`}
          {...(isExternal && {target: '_blank', rel: 'noopener noreferrer'})}>
          Learn more details
        </Link>
      )}
    </article>
  );
}
