import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface SummitBanner {
  image: string;
  alt: string;
  link: string;
}

const SUMMIT_BANNERS: SummitBanner[] = [
  {
    image: '/img/events/banner-bott-7.png',
    alt: 'Apache Ignite Summit 2025',
    link: 'https://ignite-summit.org/2025/',
  },
  {
    image: '/img/events/banner-bott-5.jpg',
    alt: 'Apache Ignite Summit June 2023',
    link: 'https://ignite-summit.org/2023-june/',
  },
  {
    image: '/img/events/banner-bott-4.jpg',
    alt: 'Apache Ignite Summit November 2022',
    link: 'https://ignite-summit.org/2022-november/',
  },
  {
    image: '/img/events/banner-bott-3.jpg',
    alt: 'Apache Ignite Summit June 2022',
    link: 'https://ignite-summit.org/2022-june/',
  },
  {
    image: '/img/events/banner-bott-1.jpg',
    alt: 'Apache Ignite Summit 2021',
    link: 'https://www.youtube.com/playlist?list=PLMc7NR20hA-JvgLWtvp2R9tEnD5vlp9l0',
  },
  {
    image: '/img/events/banner-bott-2.jpg',
    alt: 'Apache Ignite Summit 2020',
    link: 'https://www.youtube.com/playlist?list=PLMc7NR20hA-KF8c_hVICKpzKnWkjzfC2V',
  },
];

export default function IgniteSummit(): React.ReactElement {
  return (
    <section className={styles.summit} id="summit">
      <div className="container">
        <div className={styles.info}>
          <div className={styles.logo}>
            <img
              src="/img/events/ignite-summit-logo.svg"
              alt="Apache Ignite Summit"
            />
          </div>
          <div className={styles.description}>
            <h2>Apache Ignite Summit</h2>
            <p className={styles.subtitle}>
              This virtual conference will feature speakers from industry-leading companies
              <br />
              and hundreds of participants from all over the world.
            </p>
          </div>
        </div>

        <div className={styles.banners}>
          {SUMMIT_BANNERS.map((banner, index) => (
            <Link
              key={index}
              to={banner.link}
              className={styles.bannerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={banner.image} alt={banner.alt} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
