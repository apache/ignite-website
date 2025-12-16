import React from 'react';
import { EventType } from '../../data/events';
import styles from './EventFilters.module.css';

interface EventFiltersProps {
  eventTypes: Array<{ value: EventType | 'all'; label: string }>;
  selectedType: EventType | 'all';
  onTypeChange: (type: EventType | 'all') => void;
  availableYears: number[];
  selectedYear: number | 'all';
  onYearChange: (year: number | 'all') => void;
}

export default function EventFilters({
  eventTypes = [],
  selectedType,
  onTypeChange,
  availableYears = [],
  selectedYear,
  onYearChange,
}: EventFiltersProps): React.ReactElement {
  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Event Type:</label>
        <div className={styles.filterButtons}>
          {eventTypes.map((type) => (
            <button
              key={type.value}
              className={`${styles.filterButton} ${
                selectedType === type.value ? styles.active : ''
              }`}
              onClick={() => onTypeChange(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Year:</label>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${
              selectedYear === 'all' ? styles.active : ''
            }`}
            onClick={() => onYearChange('all')}
          >
            All Years
          </button>
          {availableYears.map((year) => (
            <button
              key={year}
              className={`${styles.filterButton} ${
                selectedYear === year ? styles.active : ''
              }`}
              onClick={() => onYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
