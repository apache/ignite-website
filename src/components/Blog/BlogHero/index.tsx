import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface BlogHeroProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function BlogHero({
  title = 'Apache Ignite Blog',
  description = 'Release announcements, technical deep-dives, tutorials, and community updates from the Apache Ignite project.',
  className,
}: BlogHeroProps): React.ReactElement {
  return (
    <header className={clsx(styles.blogHero, className)}>
      <div className="container">
        <h1 className={styles.blogHero__title}>{title}</h1>
        <p className={styles.blogHero__description}>{description}</p>
      </div>
    </header>
  );
}
