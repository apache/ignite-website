import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import MDXContent from '@theme/MDXContent';
import TOC from '@theme/TOC';
import type { Props } from '@theme/BlogPostPage';
import type { BlogSidebar } from '@docusaurus/plugin-content-blog';
import { SocialShare, RelatedPosts } from '../../components/Blog';
import type { PostCategory } from '../../components/Blog/PostCard';
import styles from './styles.module.css';

function formatDate(dateString: string): string {
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

function formatReadingTime(minutes?: number): string {
  if (!minutes) return '';
  const rounded = Math.ceil(minutes);
  return `${rounded} minute read`;
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

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar: BlogSidebar;
  children: React.ReactNode;
}): React.ReactElement {
  const { metadata, toc } = useBlogPost();
  const {
    nextItem,
    prevItem,
    title,
    permalink,
    tags,
    date,
    readingTime,
    authors,
    frontMatter,
  } = metadata;

  const category = deriveCategory(tags);
  const author = authors?.[0];
  const formattedDate = formatDate(date);
  const readingTimeText = formatReadingTime(readingTime);

  const relatedPosts = React.useMemo(() => {
    if (!sidebar || sidebar.items.length === 0) return [];

    return sidebar.items
      .filter((item) => item.permalink !== permalink)
      .slice(0, 3)
      .map((item) => ({
        id: item.permalink,
        metadata: {
          title: item.title,
          permalink: item.permalink,
          date: item.date || '',
          formattedDate: item.date ? formatDate(item.date) : '',
          description: '',
          frontMatter: {} as { category?: PostCategory },
        },
      }));
  }, [sidebar, permalink]);

  const fullUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://ignite.apache.org${permalink}`;

  return (
    <Layout>
      <article className={styles.blogPost}>
        {/* Floating Social Share */}
        <aside className={styles.socialSidebar}>
          <SocialShare url={fullUrl} title={title} variant="vertical" />
        </aside>

        {/* Main Content */}
        <div className={styles.blogPost__container}>
          {/* Header */}
          <header className={styles.blogPost__header}>
            <div className={styles.blogPost__category}>{category}</div>
            <h1 className={styles.blogPost__title}>{title}</h1>
            <div className={styles.blogPost__meta}>
              <time dateTime={date}>{formattedDate}</time>
              {readingTimeText && (
                <>
                  <span className={styles.blogPost__separator}>|</span>
                  <span>{readingTimeText}</span>
                </>
              )}
            </div>

            {author && (
              <div className={styles.blogPost__author}>
                {author.imageURL && (
                  <img
                    src={author.imageURL}
                    alt={author.name}
                    className={styles.blogPost__authorImage}
                  />
                )}
                <div className={styles.blogPost__authorInfo}>
                  {author.url ? (
                    <a
                      href={author.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.blogPost__authorName}
                    >
                      {author.name}
                    </a>
                  ) : (
                    <span className={styles.blogPost__authorName}>{author.name}</span>
                  )}
                  {author.title && (
                    <span className={styles.blogPost__authorTitle}>{author.title}</span>
                  )}
                </div>
              </div>
            )}
          </header>

          {/* Table of Contents (inline, collapsible on mobile) */}
          {toc.length > 0 && (
            <nav className={styles.blogPost__toc}>
              <details open>
                <summary className={styles.blogPost__tocTitle}>Contents</summary>
                <TOC
                  toc={toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level as number}
                  maxHeadingLevel={frontMatter.toc_max_heading_level as number}
                />
              </details>
            </nav>
          )}

          {/* Article Content */}
          <div className={clsx('markdown', styles.blogPost__content)}>
            <MDXContent>{children}</MDXContent>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className={styles.blogPost__tags}>
              {tags.map((tag) => (
                <Link
                  key={tag.permalink}
                  to={tag.permalink}
                  className={styles.blogPost__tag}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          )}

          {/* Bottom Social Share (mobile) */}
          <div className={styles.blogPost__socialMobile}>
            <SocialShare url={fullUrl} title={title} />
          </div>

          {/* Pagination */}
          {(nextItem || prevItem) && (
            <nav className={styles.blogPost__pagination}>
              {prevItem && (
                <Link to={prevItem.permalink} className={styles.blogPost__paginationItem}>
                  <span className={styles.blogPost__paginationLabel}>Previous</span>
                  <span className={styles.blogPost__paginationTitle}>{prevItem.title}</span>
                </Link>
              )}
              {nextItem && (
                <Link
                  to={nextItem.permalink}
                  className={clsx(styles.blogPost__paginationItem, styles['blogPost__paginationItem--next'])}
                >
                  <span className={styles.blogPost__paginationLabel}>Next</span>
                  <span className={styles.blogPost__paginationTitle}>{nextItem.title}</span>
                </Link>
              )}
            </nav>
          )}
        </div>

        {/* Floating TOC (desktop) */}
        {toc.length > 0 && (
          <aside className={styles.tocSidebar}>
            <div className={styles.tocSidebar__sticky}>
              <TOC
                toc={toc}
                minHeadingLevel={frontMatter.toc_min_heading_level as number}
                maxHeadingLevel={frontMatter.toc_max_heading_level as number}
              />
            </div>
          </aside>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} title="More from the Blog" maxPosts={3} />
      )}
    </Layout>
  );
}

export default function BlogPostPage(props: Props): React.ReactElement {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
