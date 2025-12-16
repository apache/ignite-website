import React, {useState, type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  defaultExpanded?: boolean;
  children: ReactNode;
  id?: string;
}

export default function CollapsibleSection({
  title,
  subtitle,
  defaultExpanded = false,
  children,
  id,
}: CollapsibleSectionProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className={styles.collapsible} id={id}>
      <div className="container">
        <button
          className={clsx(styles.collapsibleHeader, {[styles.expanded]: isExpanded})}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          type="button">
          <div className={styles.collapsibleTitle}>
            <h2 className="capstext">{title}</h2>
            {subtitle && <span className={styles.collapsibleSubtitle}>{subtitle}</span>}
          </div>
          <span className={styles.collapsibleIcon}>{isExpanded ? '−' : '+'}</span>
        </button>
        <div
          className={clsx(styles.collapsibleContent, {
            [styles.collapsibleContentExpanded]: isExpanded,
          })}>
          {children}
        </div>
      </div>
    </section>
  );
}
