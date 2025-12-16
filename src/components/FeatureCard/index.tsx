import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

/**
 * FeatureCard component displays a feature highlight with icon, title, and description.
 * Can optionally include a link to learn more.
 */
export default function FeatureCard({
  icon,
  title,
  description,
  link,
  className
}: FeatureCardProps): ReactNode {
  const card = (
    <div className={clsx(styles.featureCard, className)}>
      {icon && (
        <div className={styles.featureCard__icon}>
          <img src={icon} alt="" />
        </div>
      )}
      <h4 className={styles.featureCard__title}>{title}</h4>
      <p className={styles.featureCard__description}>{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className={styles.featureCard__link}>
        {card}
      </Link>
    );
  }

  return card;
}
