import React from 'react';
import clsx from 'clsx';
import PostCard, { type PostCardProps, type PostCategory } from '../PostCard';
import styles from './styles.module.css';

export interface BlogPost {
  id: string;
  metadata: {
    title: string;
    permalink: string;
    date: string;
    formattedDate: string;
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
    frontMatter?: {
      featured?: boolean;
      category?: PostCategory;
    };
  };
}

export interface FeaturedPostsProps {
  posts: BlogPost[];
  maxPosts?: number;
  className?: string;
}

function selectFeaturedPosts(posts: BlogPost[], maxPosts: number): BlogPost[] {
  const featuredPosts = posts.filter(
    (post) => post.metadata.frontMatter?.featured === true
  );

  if (featuredPosts.length >= maxPosts) {
    return featuredPosts.slice(0, maxPosts);
  }

  const remainingCount = maxPosts - featuredPosts.length;
  const nonFeaturedPosts = posts
    .filter((post) => post.metadata.frontMatter?.featured !== true)
    .slice(0, remainingCount);

  return [...featuredPosts, ...nonFeaturedPosts];
}

export default function FeaturedPosts({
  posts,
  maxPosts = 3,
  className,
}: FeaturedPostsProps): React.ReactElement | null {
  const featuredPosts = selectFeaturedPosts(posts, maxPosts);

  if (featuredPosts.length === 0) {
    return null;
  }

  const [mainPost, ...secondaryPosts] = featuredPosts;

  return (
    <section className={clsx(styles.featuredPosts, className)}>
      <div className="container">
        <div className={styles.featuredPosts__grid}>
          {mainPost && (
            <div className={styles.featuredPosts__main}>
              <PostCard
                title={mainPost.metadata.title}
                permalink={mainPost.metadata.permalink}
                date={mainPost.metadata.date}
                formattedDate={mainPost.metadata.formattedDate}
                readingTime={mainPost.metadata.readingTime}
                description={mainPost.metadata.description}
                authors={mainPost.metadata.authors}
                tags={mainPost.metadata.tags}
                category={mainPost.metadata.frontMatter?.category}
                variant="featured"
              />
            </div>
          )}

          {secondaryPosts.length > 0 && (
            <div className={styles.featuredPosts__secondary}>
              {secondaryPosts.map((post) => (
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
        </div>
      </div>
    </section>
  );
}
