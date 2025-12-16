import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * Use Case Card Component
 *
 * Displays a use case with title, description, and link.
 * Used on the use cases index page to showcase different use cases.
 */

interface UseCaseCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

export default function UseCaseCard({
  title,
  description,
  link,
  icon,
}: UseCaseCardProps): JSX.Element {
  return (
    <div className={`${styles.card} ${styles.usecaseCard}`}>
      {icon && (
        <div className={styles.icon}>
          <img src={icon} alt="" />
        </div>
      )}
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.text}>{description}</div>
      <div className={styles.bottom}>
        <Link to={link} className={`button button--shadow ${styles.button}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
