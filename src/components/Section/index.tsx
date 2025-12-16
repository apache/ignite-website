import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface SectionProps {
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'dark';
  children: ReactNode;
  id?: string;
  containerClassName?: string;
}

/**
 * Section component provides a consistent layout container for page sections.
 * Supports different background colors and custom styling.
 */
export default function Section({
  className,
  background,
  children,
  id,
  containerClassName
}: SectionProps): ReactNode {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        background && styles[`section--${background}`],
        className
      )}>
      <div className={clsx('container', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
