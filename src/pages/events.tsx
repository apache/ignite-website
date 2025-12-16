import React, { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Section from '@site/src/components/Section';
import { useCanonicalUrl } from '@site/src/hooks/useCanonicalUrl';
import styles from './events.module.css';

// Upcoming events data - manually maintained since Meetup API requires OAuth
const upcomingEvents = [
  {
    id: 'dec-2025-spring-boot',
    title: 'Apache Ignite 3 and GridGain 9 for Spring Boot and Spring Data Development',
    date: '2025-12-11',
    time: '10:00 AM - 12:00 PM PT',
    location: 'Online',
    description: 'Two-hour workshop for Java developers and architects exploring best practices for using Spring Boot and Spring Data with Apache Ignite 3 and GridGain 9.',
    link: 'https://www.meetup.com/apache-ignite-virtual-meetup/events/312167964/',
    type: 'workshop' as const,
  },
];

// Past summit data
const pastSummits = [
  {
    year: '2025',
    title: 'Ignite Summit 2025',
    image: '/img/events/ignite-summit-2025-watch-1200х630_2.png',
    link: 'https://ignite-summit.org/2025/',
  },
  {
    year: '2023',
    title: 'Ignite Summit June 2023',
    image: '/img/events/banner-bott-5.jpg',
    link: 'https://ignite-summit.org/2023-june/',
  },
  {
    year: '2022 Nov',
    title: 'Ignite Summit November 2022',
    image: '/img/events/banner-bott-4.jpg',
    link: 'https://ignite-summit.org/2022-november/',
  },
  {
    year: '2022 Jun',
    title: 'Ignite Summit June 2022',
    image: '/img/events/banner-bott-3.jpg',
    link: 'https://ignite-summit.org/2022-june/',
  },
];

// Past events from Virtual Meetup (recent only, within 6 months)
const pastEvents = [
  {
    id: 'nov-2025-essentials-emea',
    title: 'Apache Ignite 3 Essentials: Principles for Building Data-Intensive Apps (EMEA)',
    date: '2025-11-13',
    location: 'Online',
    link: 'https://www.meetup.com/apache-ignite-virtual-meetup/events/311839185/',
    type: 'training',
  },
  {
    id: 'oct-2025-essentials-americas',
    title: 'Apache Ignite 3 Essentials - Free Online Developer Training Session (Americas)',
    date: '2025-10-30',
    location: 'Online',
    link: 'https://www.meetup.com/apache-ignite-virtual-meetup/events/311523148/',
    type: 'training',
  },
  {
    id: 'sep-2025-spring-boot',
    title: 'Apache Ignite 3 and GridGain 9 for Spring Boot and Spring Data Development',
    date: '2025-09-18',
    location: 'Online',
    link: 'https://www.meetup.com/apache-ignite-virtual-meetup/events/310709112/',
    type: 'training',
  },
];

function HeroSection() {
  return (
    <section className="innerhero">
      <div className="container innerhero__cont">
        <div className="innerhero__main">
          <div className="innerhero__pre pb-3">Apache Ignite</div>
          <h1 className="h1 innerhero__h1">Events</h1>
          <div className="innerhero__descr pt-2 h5">
            Connect with the community at conferences,
            <br />
            summits, and virtual meetups worldwide
          </div>
        </div>
        <img
          className="innerhero__pic innerhero__pic--events"
          src="/img/events/b1-mainpic.svg"
          alt="Apache Ignite Events"
        />
      </div>
    </section>
  );
}

function UpcomingEventsSection() {
  if (upcomingEvents.length === 0) {
    return (
      <Section id="upcoming" className={styles.upcoming}>
        <p className="capstext">Upcoming Events</p>
        <h2 className="h3 pt-2">Join Us at an Upcoming Event</h2>
        <div className={styles.noEvents}>
          <p>No upcoming events scheduled. Check back soon or join our meetup group to stay informed.</p>
          <a
            className="button button--shadow"
            href="https://www.meetup.com/apache-ignite-virtual-meetup/"
            target="_blank"
            rel="noreferrer"
          >
            Join Virtual Meetup Group
          </a>
        </div>
      </Section>
    );
  }

  return (
    <Section id="upcoming" className={styles.upcoming}>
      <p className="capstext">Upcoming Events</p>
      <h2 className="h3 pt-2">Join Us at an Upcoming Event</h2>
      <div className={styles.upcomingGrid}>
        {upcomingEvents.map((event) => (
          <article key={event.id} className={clsx(styles.upcomingCard, 'cardsimple')}>
            <div className={styles.upcomingDate}>
              <span className={styles.upcomingDay}>
                {new Date(event.date + 'T00:00:00').getDate()}
              </span>
              <span className={styles.upcomingMonth}>
                {new Date(event.date + 'T00:00:00').toLocaleString('en-US', { month: 'short' }).toUpperCase()}
              </span>
              <span className={styles.upcomingYear}>
                {new Date(event.date + 'T00:00:00').getFullYear()}
              </span>
            </div>
            <div className={styles.upcomingContent}>
              <span className={styles.upcomingType}>{event.type}</span>
              <h3 className="h5">{event.title}</h3>
              <p className={styles.upcomingMeta}>
                <span>{event.time}</span>
                <span>{event.location}</span>
              </p>
              <p className={clsx(styles.upcomingDescription, 'pb-3')}>{event.description}</p>
              <a
                className="button"
                href={event.link}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function SummitSection() {
  return (
    <Section id="summit" className={styles.summit}>
      <div className={clsx(styles.summitHeader, 'flexi')}>
        <div className={styles.summitLogo}>
          <img src="/img/events/ignite-summit-logo.svg" alt="Ignite Summit" />
        </div>
        <div className={styles.summitInfo}>
          <h2 className="h3">Apache Ignite Summit</h2>
          <p className="h5 pt-2">
            The annual virtual conference featuring speakers from industry-leading companies
            and hundreds of participants from around the world.
          </p>
        </div>
      </div>
      <div className={styles.summitGrid}>
        {pastSummits.map((summit) => (
          <a
            key={summit.year}
            href={summit.link}
            target="_blank"
            rel="noreferrer"
            className={styles.summitCard}
          >
            <img src={summit.image} alt={summit.title} />
            <span className={styles.summitYear}>{summit.year}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function MeetupsSection() {
  return (
    <Section id="meetups" className={styles.meetups}>
      <div className={clsx(styles.meetupsHeader, 'flexi')}>
        <div className={styles.meetupsContent}>
          <h2 className="h3">Virtual Apache Ignite Meetup</h2>
          <p className="h5 pt-3">
            Join Ignite users, developers, committers, and architects from around the world.
            Access online talks and presentations by Apache Ignite experts and practitioners.
          </p>
          <div className={styles.meetupsActions}>
            <a
              className="button"
              href="https://www.meetup.com/apache-ignite-virtual-meetup/"
              target="_blank"
              rel="noreferrer"
            >
              Join Virtual Meetup
            </a>
          </div>
        </div>
        <div className={styles.meetupsImage}>
          <img src="/img/events/b4-world.svg" alt="Worldwide Meetups" />
        </div>
      </div>
    </Section>
  );
}

function HostEventSection() {
  return (
    <Section className={styles.hostEvent}>
      <div className={clsx(styles.hostEventWrap, 'flexi')}>
        <div className={styles.hostEventMain}>
          <h2 className="h3">Share Your Ignite Experience</h2>
          <p className="h5 pt-2">
            Have you built something with Apache Ignite? Consider sharing your experience with the community.
          </p>
        </div>
        <div className={styles.hostEventPic}>
          <img src="/img/community/b8-img.svg" alt="Share your experience" />
        </div>
      </div>
      <div className={styles.hostEventGrid}>
        <article className={clsx(styles.hostEventCard, 'cardsimple')}>
          <h3 className="h5">Present at a Virtual Meetup</h3>
          <p>Share your use case, lessons learned, or technical deep-dive with the global Ignite community.</p>
          <a href="mailto:dev@ignite.apache.org?subject=Virtual Meetup Presentation Proposal" className="button button--shadow">
            Propose a Talk
          </a>
        </article>
        <article className={clsx(styles.hostEventCard, 'cardsimple')}>
          <h3 className="h5">Speak at Conferences</h3>
          <p>Represent Apache Ignite at industry conferences. We can help with talk preparation and materials.</p>
          <a href="mailto:dev@ignite.apache.org?subject=Conference Speaking Inquiry" className="button button--shadow">
            Get in Touch
          </a>
        </article>
        <article className={clsx(styles.hostEventCard, 'cardsimple')}>
          <h3 className="h5">Write for the Blog</h3>
          <p>Share technical articles, tutorials, or case studies on the Apache Ignite blog.</p>
          <Link to="/community#contributing" className="button button--shadow">
            Learn How
          </Link>
        </article>
      </div>
    </Section>
  );
}

function PastEventsSection() {
  return (
    <Section id="past" className={styles.past}>
      <p className="capstext">Past Events</p>
      <h2 className="h3 pt-2">Recent Community Events</h2>
      <p className={styles.pastDescription}>
        Browse past virtual meetups and community events. Visit our{' '}
        <a href="https://www.meetup.com/apache-ignite-virtual-meetup/events/past/" target="_blank" rel="noreferrer">
          Meetup page
        </a>{' '}
        for the complete archive.
      </p>
      {pastEvents.length > 0 ? (
        <div className={styles.pastGrid}>
          {pastEvents.map((event) => (
            <a
              key={event.id}
              href={event.link}
              target="_blank"
              rel="noreferrer"
              className={clsx(styles.pastCard, 'cardsimple')}
            >
              <span className={styles.pastDate}>{event.date}</span>
              <h4 className="h5">{event.title}</h4>
              <span className={styles.pastLocation}>{event.location}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className={styles.noEvents}>
          <p>
            Visit our{' '}
            <a href="https://www.meetup.com/apache-ignite-virtual-meetup/events/past/" target="_blank" rel="noreferrer">
              Meetup page
            </a>{' '}
            to browse past events.
          </p>
        </div>
      )}
    </Section>
  );
}

function CTASection() {
  return (
    <Section className={styles.cta}>
      <div className={clsx(styles.ctaWrap, 'flexi')}>
        <div className={styles.ctaMain}>
          <h2 className="h3">Stay Connected</h2>
          <p className="h5 pt-2">
            Join our mailing list to receive announcements about upcoming events and community news.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a
            className="button"
            href="https://www.meetup.com/apache-ignite-virtual-meetup/"
            target="_blank"
            rel="noreferrer"
          >
            Join Meetup Group
          </a>
          <Link className="button button--shadow" to="/community#channels">
            Subscribe to Mailing List
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default function EventsPage(): ReactNode {
  const canonicalUrl = useCanonicalUrl();

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Events - Meetups, Summit, Conferences</title>
        <meta
          name="description"
          content="Join Apache Ignite community events: virtual meetups, Ignite Summit, and conferences. Connect with developers and learn from Ignite experts."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Apache Ignite Events - Meetups, Summit, Conferences" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Join Apache Ignite community events: virtual meetups, Ignite Summit, and conferences."
        />
      </Head>
      <main>
        <HeroSection />
        <UpcomingEventsSection />
        <SummitSection />
        <MeetupsSection />
        <HostEventSection />
        <PastEventsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
