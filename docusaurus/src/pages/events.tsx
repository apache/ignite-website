import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { EVENTS, EventType } from '../data/events';
import { FEATURED_EVENT } from '../data/featured-event';
import {
  filterEvents,
  getAvailableYears,
  groupEventsByYear,
  getUpcomingEvents,
  getPastEvents,
  sortEventsByDate,
} from '../utils/events';
import EventCard from '../components/Events/EventCard';
import EventFilters from '../components/Events/EventFilters';
import IgniteSummit from '../components/Events/IgniteSummit';
import VirtualMeetup from '../components/Events/VirtualMeetup';
import CityMeetups from '../components/Events/CityMeetups';
import styles from './events.module.css';

const EVENT_TYPES: Array<{ value: EventType | 'all'; label: string }> = [
  { value: 'all', label: 'All Events' },
  { value: 'summit', label: 'Summits' },
  { value: 'conference', label: 'Conferences' },
  { value: 'webinar', label: 'Webinars' },
  { value: 'meetup', label: 'Meetups' },
  { value: 'virtual', label: 'Virtual' },
  { value: 'podcast', label: 'Podcasts' },
];

export default function EventsPage(): React.ReactElement {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const availableYears = useMemo(() => getAvailableYears(EVENTS), []);

  const filteredEvents = useMemo(() => {
    const typeFilter = selectedType === 'all' ? null : selectedType;
    const yearFilter = selectedYear === 'all' ? null : String(selectedYear);
    return filterEvents(EVENTS, typeFilter, yearFilter);
  }, [selectedType, selectedYear]);

  const upcomingEvents = useMemo(
    () => sortEventsByDate(getUpcomingEvents(filteredEvents), true),
    [filteredEvents]
  );

  const pastEvents = useMemo(
    () => sortEventsByDate(getPastEvents(filteredEvents)),
    [filteredEvents]
  );

  const pastEventsByYear = useMemo(
    () => groupEventsByYear(pastEvents),
    [pastEvents]
  );

  return (
    <Layout>
      <Head>
        <title>Apache Ignite Events - Meetups, Summit, Conference</title>
        <meta
          name="description"
          content="Join our upcoming events: in-memory computing meetups, Apache Ignite summits or conferences. Find an Apache Ignite meetup/group near you."
        />
        <meta property="og:title" content="Apache Ignite Events - Meetups, Summit, Conference" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ignite.apache.org/events" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta
          property="og:description"
          content="Join our upcoming events: in-memory computing meetups, Apache Ignite summits or conferences. Find an Apache Ignite meetup/group near you."
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              Join The Apache Ignite
              <br />
              Community At Conferences,
              <br />
              Summits And Other Events
            </h1>
            <p className={styles.heroSubtitle}>
              The community meets online and offline regularly.
              <br />
              Join our meetup groups and events to learn from
              <br />
              Ignite experts or to share your Ignite experience.
            </p>
          </div>
          <img
            src="/img/events/b1-mainpic.svg"
            alt="Join the Apache Ignite Community at Conferences, Summits and Other Events"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Navigation Links */}
      <section className={styles.navigation}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <a href="#summit" className={styles.navActive}>
                Ignite Summit
              </a>
            </li>
            <li>
              <a href="#meetups">Meetups Worldwide</a>
            </li>
            <li>
              <a href="#upcoming">Upcoming Events</a>
            </li>
            <li>
              <a href="#past">Past Events</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured Event Banner */}
      {FEATURED_EVENT.enabled && (
        <section className={styles.featuredEvent}>
          <div className="container">
            <p className={styles.capsText}>Featured Event</p>
            <Link
              to={FEATURED_EVENT.link}
              className={styles.featuredBanner}
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                {FEATURED_EVENT.imageSrcMobile && (
                  <source srcSet={FEATURED_EVENT.imageSrcMobile} media="(max-width: 767px)" />
                )}
                <img src={FEATURED_EVENT.imageSrc} alt={FEATURED_EVENT.imageAlt} />
              </picture>
            </Link>
          </div>
        </section>
      )}

      {/* Ignite Summit Section */}
      <IgniteSummit />

      {/* Meetups Worldwide Section Header */}
      <section className={styles.meetupsHeader} id="meetups">
        <div className="container">
          <div className={styles.meetupsContent}>
            <div className={styles.meetupsText}>
              <h2>Apache Ignite Meetups Worldwide</h2>
              <p>
                Meet the community — developers, experts, and practitioners — face-to-face,
                virtually, or onsite in your city.
              </p>
            </div>
            <div className={styles.meetupsImage}>
              <img src="/img/events/b4-world.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Meetup Section */}
      <VirtualMeetup />

      {/* City Meetups Section */}
      <CityMeetups />

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className={styles.upcomingEvents} id="upcoming">
          <div className="container">
            <p className={styles.capsText}>Upcoming Events Schedule</p>
            <div className={styles.eventsGrid}>
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      <section className={styles.pastEvents} id="past">
        <div className="container">
          <p className={styles.capsText}>Past Events</p>

          {/* Event Filters */}
          <EventFilters
            eventTypes={EVENT_TYPES}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            availableYears={availableYears}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />

          {/* Past Events by Year */}
          {Object.entries(pastEventsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, events]) => (
              <div key={year} className={styles.yearSection}>
                <h3 className={styles.yearHeading}>{year}</h3>
                <div className={styles.eventsGrid}>
                  {events.map(event => (
                    <EventCard key={event.id} event={event} isPast />
                  ))}
                </div>
              </div>
            ))}

          {pastEvents.length === 0 && (
            <div className={styles.noEvents}>
              <p>No events found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
