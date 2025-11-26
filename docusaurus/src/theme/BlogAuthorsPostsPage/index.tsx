import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogAuthorsPostsPage';
import { PostCard } from '../../components/Blog';
import type { PostCategory } from '../../components/Blog/PostCard';
import styles from './styles.module.css';

function deriveCategory(tags?: Array<{ label: string }>): PostCategory {
  if (!tags || tags.length === 0) return 'technical';
  const tagLabels = tags.map((t) => t.label.toLowerCase());
  if (tagLabels.some((t) => t.includes('release') || t === 'ignite')) return 'release';
  if (tagLabels.some((t) => t.includes('tutorial') || t.includes('guide'))) return 'tutorial';
  if (tagLabels.some((t) => t.includes('community') || t.includes('event'))) return 'community';
  return 'technical';
}

function BlogAuthorsPostsPageContent({
  author,
  items,
  listMetadata,
}: {
  author: Props['author'];
  items: Props['items'];
  listMetadata: Props['listMetadata'];
}): React.ReactElement {
  const { name, title, imageURL, url, count } = author;

  return (
    <BlogLayout>
      <header className={styles.header}>
        <Link to="/blog/authors" className={styles.backLink}>
          All Authors
        </Link>

        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            {imageURL ? (
              <img src={imageURL} alt={name} className={styles.authorImage} />
            ) : (
              <div className={styles.authorPlaceholder}>
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className={styles.authorDetails}>
            <h1 className={styles.authorName}>{name}</h1>
            {title && <p className={styles.authorTitle}>{title}</p>}
            <p className={styles.postCount}>
              {count} {count === 1 ? 'post' : 'posts'}
            </p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorUrl}
              >
                View Profile
              </a>
            )}
          </div>
        </div>
      </header>

      <div className={styles.postsGrid}>
        {items.map(({ content }) => {
          const { metadata } = content;
          return (
            <PostCard
              key={metadata.permalink}
              title={metadata.title}
              permalink={metadata.permalink}
              date={metadata.date}
              formattedDate={metadata.formattedDate}
              readingTime={metadata.readingTime}
              description={metadata.description}
              tags={metadata.tags}
              category={deriveCategory(metadata.tags)}
              variant="default"
            />
          );
        })}
      </div>

      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  );
}

export default function BlogAuthorsPostsPage(props: Props): React.ReactElement {
  const { author, items, listMetadata } = props;
  const title = `Posts by ${author.name}`;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsPostsPage
      )}
    >
      <PageMetadata title={title} />
      <BlogAuthorsPostsPageContent
        author={author}
        items={items}
        listMetadata={listMetadata}
      />
    </HtmlClassNameProvider>
  );
}
