import React from 'react';
import clsx from 'clsx';
import PostCard, { type PostCategory } from '../PostCard';
import styles from './styles.module.css';

export interface RelatedPost {
  id: string;
  metadata: {
    title: string;
    permalink: string;
    date: string;
    formattedDate: string;
    readingTime?: number;
    description?: string;
    tags?: Array<{
      label: string;
      permalink: string;
    }>;
    frontMatter?: {
      category?: PostCategory;
    };
  };
}

export interface RelatedPostsProps {
  posts: RelatedPost[];
  title?: string;
  maxPosts?: number;
  className?: string;
}

export default function RelatedPosts({
  posts,
  title = 'Related Posts',
  maxPosts = 3,
  className,
}: RelatedPostsProps): React.ReactElement | null {
  const displayPosts = posts.slice(0, maxPosts);

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <section className={clsx(styles.relatedPosts, className)}>
      <h2 className={styles.relatedPosts__title}>{title}</h2>
      <div className={styles.relatedPosts__grid}>
        {displayPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.metadata.title}
            permalink={post.metadata.permalink}
            date={post.metadata.date}
            formattedDate={post.metadata.formattedDate}
            readingTime={post.metadata.readingTime}
            description={post.metadata.description}
            tags={post.metadata.tags}
            category={post.metadata.frontMatter?.category}
            variant="related"
          />
        ))}
      </div>
    </section>
  );
}
