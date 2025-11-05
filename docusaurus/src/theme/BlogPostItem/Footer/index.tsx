import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogShare from '@site/src/components/BlogShare';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {siteConfig} = useDocusaurusContext();

  // Only show share buttons on individual blog post pages (not on list pages)
  const showShare = isBlogPostPage;

  // Construct full URL for sharing
  const fullUrl = `${siteConfig.url}${metadata.permalink}`;

  return (
    <>
      {showShare && (
        <BlogShare url={fullUrl} title={metadata.title} />
      )}
      <Footer {...props} />
    </>
  );
}
