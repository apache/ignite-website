import React from 'react';
import type {EventType} from '@site/src/data/events';
import styles from './styles.module.css';

interface EventFiltersProps {
  selectedType: EventType | null;
  selectedYear: string | null;
  availableYears: string[];
  availableTypes: EventType[];
  onTypeChange: (type: EventType | null) => void;
  onYearChange: (year: string | null) => void;
}

export default function EventFilters({
  selectedType,
  selectedYear,
  availableYears,
  availableTypes,
  onTypeChange,
  onYearChange,
}: EventFiltersProps) {
  const formatTypeName = (type: EventType): string => {
    return type.charAt(0).toUpperCase() + type.slice(1) + 's';
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <label className={styles.label}>Event Type:</label>
        <div className={styles.buttons}>
          <button
            className={selectedType === null ? styles.active : ''}
            onClick={() => onTypeChange(null)}>
            All
          </button>
          {availableTypes.map((type) => (
            <button
              key={type}
              className={selectedType === type ? styles.active : ''}
              onClick={() => onTypeChange(type)}>
              {formatTypeName(type)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Year:</label>
        <div className={styles.buttons}>
          <button
            className={selectedYear === null ? styles.active : ''}
            onClick={() => onYearChange(null)}>
            All Years
          </button>
          {availableYears.map((year) => (
            <button
              key={year}
              className={selectedYear === year ? styles.active : ''}
              onClick={() => onYearChange(year)}>
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
