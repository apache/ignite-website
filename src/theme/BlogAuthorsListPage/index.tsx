import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/BlogAuthorsListPage';
import styles from './styles.module.css';

function AuthorCard({
  author,
}: {
  author: Props['authors'][number];
}): React.ReactElement {
  const { name, title, imageURL, url, count, permalink } = author;

  return (
    <Link to={permalink} className={styles.authorCard}>
      <div className={styles.authorCard__avatar}>
        {imageURL ? (
          <img src={imageURL} alt={name} className={styles.authorCard__image} />
        ) : (
          <div className={styles.authorCard__placeholder}>
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles.authorCard__info}>
        <span className={styles.authorCard__name}>{name}</span>
        {title && <span className={styles.authorCard__title}>{title}</span>}
        <span className={styles.authorCard__count}>
          {count} {count === 1 ? 'post' : 'posts'}
        </span>
      </div>
    </Link>
  );
}

function BlogAuthorsListPageContent({
  authors,
}: {
  authors: Props['authors'];
}): React.ReactElement {
  const sortedAuthors = [...authors].sort((a, b) => b.count - a.count);

  return (
    <BlogLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>Authors</h1>
        <p className={styles.description}>
          Meet the {authors.length} contributors to the Apache Ignite blog.
        </p>
      </header>

      <div className={styles.authorsGrid}>
        {sortedAuthors.map((author) => (
          <AuthorCard key={author.permalink} author={author} />
        ))}
      </div>
    </BlogLayout>
  );
}

export default function BlogAuthorsListPage(props: Props): React.ReactElement {
  const { authors } = props;
  const title = 'Blog Authors';

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsListPage
      )}
    >
      <PageMetadata title={title} />
      <BlogAuthorsListPageContent authors={authors} />
    </HtmlClassNameProvider>
  );
}
