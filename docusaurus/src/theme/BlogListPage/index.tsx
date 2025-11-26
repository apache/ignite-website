import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogListPage';
import { BlogHero, FeaturedPosts, CategoryFilter, PostCard } from '../../components/Blog';
import type { CategoryKey, Category } from '../../components/Blog/CategoryFilter';
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

function isCurrentPost(date: string): boolean {
  const postDate = new Date(date);
  const cutoffDate = new Date('2025-01-01');
  return postDate >= cutoffDate;
}

function BlogListPageMetadata(props: Props): React.ReactElement {
  const { metadata } = props;
  const { blogTitle, blogDescription } = metadata;
  return (
    <PageMetadata title={blogTitle} description={blogDescription} />
  );
}

function BlogListPageContent(props: Props): React.ReactElement {
  const { metadata, items } = props;
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const currentPosts = useMemo(
    () => items.filter((item) => isCurrentPost(item.content.metadata.date)),
    [items]
  );

  const blogPosts = useMemo(
    () =>
      currentPosts.map((item) => ({
        id: item.content.metadata.permalink,
        metadata: {
          ...item.content.metadata,
          frontMatter: {
            featured: item.content.metadata.frontMatter?.featured as boolean | undefined,
            category: (item.content.metadata.frontMatter?.category as PostCategory) ||
              deriveCategory(item.content.metadata.tags),
          },
        },
      })),
    [currentPosts]
  );

  const categories: Category[] = useMemo(() => {
    const counts: Record<PostCategory, number> = {
      release: 0,
      technical: 0,
      tutorial: 0,
      community: 0,
    };

    blogPosts.forEach((post) => {
      const category = post.metadata.frontMatter?.category || 'technical';
      counts[category]++;
    });

    return [
      { key: 'all' as CategoryKey, label: 'All Posts', count: blogPosts.length },
      { key: 'release' as CategoryKey, label: 'Releases', count: counts.release },
      { key: 'technical' as CategoryKey, label: 'Technical', count: counts.technical },
      { key: 'tutorial' as CategoryKey, label: 'Tutorials', count: counts.tutorial },
      { key: 'community' as CategoryKey, label: 'Community', count: counts.community },
    ].filter((cat) => cat.key === 'all' || cat.count > 0);
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter(
      (post) => post.metadata.frontMatter?.category === activeCategory
    );
  }, [blogPosts, activeCategory]);

  const postsAfterFeatured = useMemo(() => {
    if (metadata.page === 1 && activeCategory === 'all') {
      const featuredIds = new Set(blogPosts.slice(0, 3).map((p) => p.id));
      return filteredPosts.filter((post) => !featuredIds.has(post.id));
    }
    return filteredPosts;
  }, [filteredPosts, blogPosts, metadata.page, activeCategory]);

  const showFeaturedSection = metadata.page === 1 && activeCategory === 'all';

  return (
    <Layout>
      <main className={styles.blogMain}>
        <BlogHero />

        {showFeaturedSection && blogPosts.length > 0 && (
          <FeaturedPosts posts={blogPosts} maxPosts={3} />
        )}

        <section className={styles.blogList}>
          <div className="container">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {postsAfterFeatured.length > 0 && (
              <div className={styles.blogList__grid}>
                {postsAfterFeatured.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.metadata.title}
                    permalink={post.metadata.permalink}
                    date={post.metadata.date}
                    formattedDate={post.metadata.formattedDate}
                    readingTime={post.metadata.readingTime}
                    description={post.metadata.description}
                    authors={post.metadata.authors}
                    tags={post.metadata.tags}
                    category={post.metadata.frontMatter?.category}
                    variant="default"
                  />
                ))}
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className={styles.blogList__empty}>
                <p>No posts found in this category.</p>
              </div>
            )}

            {activeCategory === 'all' && filteredPosts.length > 0 && (
              <BlogListPaginator metadata={metadata} />
            )}

            <div className={styles.blogList__archive}>
              <Link to="/blog/archive" className={styles.blogList__archiveLink}>
                View Archive (2017-2024)
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default function BlogListPage(props: Props): React.ReactElement {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
