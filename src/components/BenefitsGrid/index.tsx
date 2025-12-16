import React from 'react';
import styles from './styles.module.css';

/**
 * Benefits Grid Component
 *
 * Displays a grid of benefits with icons, titles, and descriptions.
 * Used on use case pages to highlight key advantages.
 */

export interface Benefit {
  icon?: string;
  title: string;
  description: string;
  metric?: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
  columns?: number;
}

export default function BenefitsGrid({
  benefits,
  columns = 3,
}: BenefitsGridProps): JSX.Element {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className={styles.grid} style={gridStyle}>
      {benefits.map((benefit, index) => (
        <div key={index} className={styles.item}>
          {benefit.icon && (
            <div className={styles.icon}>
              <img src={benefit.icon} alt="" />
            </div>
          )}
          <h3 className={styles.title}>{benefit.title}</h3>
          {benefit.metric && <div className={styles.metric}>{benefit.metric}</div>}
          <div className={styles.description}>{benefit.description}</div>
        </div>
      ))}
    </div>
  );
}
