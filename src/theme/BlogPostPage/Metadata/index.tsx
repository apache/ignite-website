import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function BlogPostPageMetadata(): React.ReactElement {
  const { metadata, assets } = useBlogPost();
  const { title, description, date, tags, authors, frontMatter } = metadata;
  const { keywords } = frontMatter;
  const image = assets.image ?? frontMatter.image;

  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      image={image}
    >
      <meta property="article:published_time" content={date} />
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .map((author) => author.url)
            .filter(Boolean)
            .join(',')}
        />
      )}
      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
    </PageMetadata>
  );
}
