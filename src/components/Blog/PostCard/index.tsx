import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export type PostCategory = string;

export interface PostCardProps {
  title: string;
  permalink: string;
  date: string;
  formattedDate?: string;
  readingTime?: number;
  description?: string;
  authors?: Array<{
    name: string;
    title?: string;
    url?: string;
    imageURL?: string;
  }>;
  tags?: Array<{
    label: string;
    permalink: string;
  }>;
  category?: PostCategory;
  variant?: 'default' | 'featured' | 'compact' | 'related';
  className?: string;
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function deriveCategory(tags?: Array<{ label: string }>): string {
  if (!tags || tags.length === 0) return 'Technical';

  const firstTag = tags[0].label.toLowerCase();

  // Special case: "apache" tag means it's a release announcement
  if (firstTag === 'apache') return 'Release';

  return capitalizeFirst(firstTag);
}

function formatReadingTime(minutes?: number): string {
  if (!minutes) return '';
  const rounded = Math.ceil(minutes);
  return `${rounded} min read`;
}

function formatDate(dateString: string, formattedDate?: string): string {
  if (formattedDate) return formattedDate;
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export default function PostCard({
  title,
  permalink,
  date,
  formattedDate,
  readingTime,
  description,
  authors,
  tags,
  category,
  variant = 'default',
  className,
}: PostCardProps): React.ReactElement {
  const effectiveCategory = category || deriveCategory(tags);
  const author = authors?.[0];

  return (
    <article
      className={clsx(
        styles.postCard,
        styles[`postCard--${variant}`],
        className
      )}
    >
      <Link to={permalink} className={styles.postCard__link}>
        <header className={styles.postCard__header}>
          <div className={styles.postCard__meta}>
            <span className={styles.postCard__category}>
              {effectiveCategory}
            </span>
          </div>

          <div className={styles.postCard__dateLine}>
            <time dateTime={date} className={styles.postCard__date}>
              {formatDate(date, formattedDate)}
            </time>
            {readingTime && (
              <>
                <span className={styles.postCard__separator}>&#8226;</span>
                <span className={styles.postCard__readingTime}>
                  {formatReadingTime(readingTime)}
                </span>
              </>
            )}
          </div>

          <h3 className={styles.postCard__title}>{title}</h3>
        </header>

        {description && variant !== 'compact' && (
          <p className={styles.postCard__description}>{description}</p>
        )}
      </Link>

      <div className={styles.postCard__footer}>
        {author && variant !== 'compact' && variant !== 'related' && (
          <div className={styles.postCard__author}>
            {author.imageURL && (
              <img
                src={author.imageURL}
                alt={author.name}
                className={styles.postCard__authorImage}
              />
            )}
            <div className={styles.postCard__authorInfo}>
              <span className={styles.postCard__authorName}>{author.name}</span>
              {author.title && (
                <span className={styles.postCard__authorTitle}>{author.title}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {tags && tags.length > 0 && variant === 'default' && (
        <div className={styles.postCard__tags}>
          {tags.slice(0, 3).map((tag) => (
            <Link
              key={tag.permalink}
              to={tag.permalink}
              className={styles.postCard__tag}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
