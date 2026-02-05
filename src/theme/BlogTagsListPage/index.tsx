import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/BlogTagsListPage';
import styles from './styles.module.css';

function TagCard({
  tag,
}: {
  tag: { label: string; permalink: string; count: number };
}): React.ReactElement {
  return (
    <Link to={tag.permalink} className={styles.tagCard}>
      <span className={styles.tagCard__label}>{tag.label}</span>
      <span className={styles.tagCard__count}>{tag.count}</span>
    </Link>
  );
}

function BlogTagsListPageContent({
  tags,
}: {
  tags: Props['tags'];
}): React.ReactElement {
  const tagsList = Object.values(tags);

  const sortedTags = tagsList.sort((a, b) => b.count - a.count);

  return (
    <BlogLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>Tags</h1>
        <p className={styles.description}>
          Browse all {tagsList.length} tags used across our blog posts.
        </p>
      </header>

      <div className={styles.tagsGrid}>
        {sortedTags.map((tag) => (
          <TagCard key={tag.permalink} tag={tag} />
        ))}
      </div>
    </BlogLayout>
  );
}

export default function BlogTagsListPage(props: Props): React.ReactElement {
  const { tags } = props;
  const title = 'Tags';

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage
      )}
    >
      <PageMetadata title={title} />
      <BlogTagsListPageContent tags={tags} />
    </HtmlClassNameProvider>
  );
}
