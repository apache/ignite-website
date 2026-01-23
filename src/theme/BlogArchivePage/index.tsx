import React, { useState, useMemo } from 'react';
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
  onTagClick,
  activeTag,
}: {
  year: string;
  posts: YearProp[];
  onTagClick: (tag: string) => void;
  activeTag: string | null;
}): React.ReactElement {
  return (
    <section className={styles.yearSection}>
      <h2 className={styles.yearTitle}>{year}</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.metadata.permalink} className={styles.postItem}>
            <div className={styles.postContent}>
              <Link to={post.metadata.permalink} className={styles.postLink}>
                <span className={styles.postTitle}>{post.metadata.title}</span>
                <time dateTime={post.metadata.date} className={styles.postDate}>
                  {post.metadata.formattedDate}
                </time>
              </Link>
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className={styles.postTags}>
                  {post.metadata.tags.slice(0, 5).map((tag) => (
                    <button
                      key={tag.label}
                      onClick={(e) => {
                        e.preventDefault();
                        onTagClick(tag.label);
                      }}
                      className={clsx(
                        styles.postTag,
                        activeTag === tag.label && styles.postTagActive
                      )}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Extract all unique tags with counts
  const allTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    archive.blogPosts.forEach((post) => {
      post.metadata.tags?.forEach((tag) => {
        tagCounts[tag.label] = (tagCounts[tag.label] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count);
  }, [archive.blogPosts]);

  // Filter posts by active tag
  const filteredPosts = useMemo(() => {
    if (!activeTag) return archive.blogPosts;
    return archive.blogPosts.filter((post) =>
      post.metadata.tags?.some((tag) => tag.label === activeTag)
    );
  }, [archive.blogPosts, activeTag]);

  // Group filtered posts by year
  const postsByYear = useMemo(() => {
    return filteredPosts.reduce(
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
  }, [filteredPosts]);

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <BlogLayout>
      <header className={styles.header}>
        <Link to="/blog" className={styles.backLink}>
          Back to Blog
        </Link>
        <h1 className={styles.title}>Blog Archive</h1>
        <p className={styles.description}>
          {filteredPosts.length} {activeTag ? 'filtered ' : ''}posts
          {years.length > 0 && ` from ${years[years.length - 1]} to ${years[0]}`}
        </p>
      </header>

      {/* Tag Filter */}
      <div className={styles.tagFilter}>
        <div className={styles.tagFilterHeader}>
          <span className={styles.tagFilterLabel}>Filter by tag:</span>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className={styles.clearFilter}
            >
              Clear filter
            </button>
          )}
        </div>
        <div className={styles.tagFilterList}>
          {allTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => handleTagClick(tag.label)}
              className={clsx(
                styles.filterTag,
                activeTag === tag.label && styles.filterTagActive
              )}
            >
              {tag.label} <span className={styles.filterTagCount}>({tag.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Posts by Year */}
      <div className={styles.archiveContent}>
        {years.length > 0 ? (
          years.map((year) => (
            <Year
              key={year}
              year={year}
              posts={postsByYear[year]}
              onTagClick={handleTagClick}
              activeTag={activeTag}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            <p>No posts found with the tag "{activeTag}".</p>
            <button onClick={() => setActiveTag(null)} className={styles.clearFilterButton}>
              Clear filter
            </button>
          </div>
        )}
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
