import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/BlogArchivePage';
import styles from './styles.module.css';

type YearProp = Props['archive']['blogPosts'][number];

function Year({
  year,
  posts,
}: {
  year: string;
  posts: YearProp[];
}): React.ReactElement {
  return (
    <section className={styles.yearSection}>
      <h2 className={styles.yearTitle}>{year}</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.metadata.permalink} className={styles.postItem}>
            <Link to={post.metadata.permalink} className={styles.postLink}>
              <span className={styles.postTitle}>{post.metadata.title}</span>
              <time dateTime={post.metadata.date} className={styles.postDate}>
                {post.metadata.formattedDate}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BlogArchivePageContent({
  archive,
}: {
  archive: Props['archive'];
}): React.ReactElement {
  const postsByYear = archive.blogPosts.reduce(
    (acc, post) => {
      const year = new Date(post.metadata.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, YearProp[]>
  );

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <BlogLayout>
      <header className={styles.header}>
        <Link to="/blog" className={styles.backLink}>
          Back to Blog
        </Link>
        <h1 className={styles.title}>Blog Archive</h1>
        <p className={styles.description}>
          {archive.blogPosts.length} posts from {years[years.length - 1]} to {years[0]}
        </p>
      </header>

      <div className={styles.archiveContent}>
        {years.map((year) => (
          <Year key={year} year={year} posts={postsByYear[year]} />
        ))}
      </div>
    </BlogLayout>
  );
}

export default function BlogArchivePage(props: Props): React.ReactElement {
  const { archive } = props;
  const title = 'Blog Archive';

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogArchivePage
      )}
    >
      <PageMetadata title={title} />
      <BlogArchivePageContent archive={archive} />
    </HtmlClassNameProvider>
  );
}
