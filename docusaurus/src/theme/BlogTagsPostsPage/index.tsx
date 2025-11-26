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
import type { Props } from '@theme/BlogTagsPostsPage';
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

function BlogTagsPostsPageContent({
  tag,
  items,
  listMetadata,
}: {
  tag: Props['tag'];
  items: Props['items'];
  listMetadata: Props['listMetadata'];
}): React.ReactElement {
  return (
    <BlogLayout>
      <header className={styles.header}>
        <Link to="/blog/tags" className={styles.backLink}>
          All Tags
        </Link>
        <h1 className={styles.title}>
          <span className={styles.titleLabel}>Posts tagged</span>
          <span className={styles.titleTag}>{tag.label}</span>
        </h1>
        <p className={styles.description}>
          {tag.count} {tag.count === 1 ? 'post' : 'posts'} with this tag
        </p>
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
              authors={metadata.authors}
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

export default function BlogTagsPostsPage(props: Props): React.ReactElement {
  const { tag, items, listMetadata } = props;
  const title = `Posts tagged "${tag.label}"`;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsPostsPage
      )}
    >
      <PageMetadata title={title} />
      <BlogTagsPostsPageContent tag={tag} items={items} listMetadata={listMetadata} />
    </HtmlClassNameProvider>
  );
}
