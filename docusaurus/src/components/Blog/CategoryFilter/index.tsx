import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type CategoryKey = 'all' | string;

export interface Category {
  key: CategoryKey;
  label: string;
  count?: number;
}

export interface CategoryFilterProps {
  categories: Category[];
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
  className?: string;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: CategoryFilterProps): React.ReactElement {
  return (
    <nav className={clsx(styles.categoryFilter, className)} aria-label="Blog categories">
      <ul className={styles.categoryFilter__list}>
        {categories.map((category) => (
          <li key={category.key}>
            <button
              type="button"
              className={clsx(
                styles.categoryFilter__button,
                activeCategory === category.key && styles['categoryFilter__button--active']
              )}
              onClick={() => onCategoryChange(category.key)}
              aria-pressed={activeCategory === category.key}
            >
              {category.label}
              {category.count !== undefined && (
                <span className={styles.categoryFilter__count}>{category.count}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
