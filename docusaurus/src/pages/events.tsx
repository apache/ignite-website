import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { EVENTS } from '../data/events';

// Helper function to group events by year
function groupEventsByYear(events: typeof EVENTS) {
  const grouped: Record<string, typeof EVENTS> = {};
  events.forEach((event) => {
    const year = event.date.substring(0, 4);
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(event);
  });
  return grouped;
}

// Event card component matching PUG structure
function EventCard({ event }: { event: typeof EVENTS[0] }) {
  return (
    <article className="eventcard">
      <div className="eventcard__date">{event.date}</div>
      <div className="eventcard__title pt-2">{event.title}</div>
      <div className="eventcard__info pt-2">
        {event.speakers && event.speakers.length > 0 && (
          <div
            className="eventcard__speaker"
            dangerouslySetInnerHTML={{ __html: event.speakers.join('<br>') }}
          />
        )}
        <div className="eventcard__loc">{event.location}</div>
      </div>
      <a className="eventcard__button button button--shadow" href={event.link} target="_blank" rel="noopener noreferrer">
        Learn more details
      </a>
    </article>
  );
}

export default function EventsPage(): JSX.Element {
  const eventsByYear = groupEventsByYear(EVENTS);
  const years = Object.keys(eventsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const [activeYear, setActiveYear] = useState(years[0]);
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());

  const handleShowMore = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const renderYearEvents = (year: string) => {
    const yearEvents = eventsByYear[year] || [];
    const isExpanded = expandedYears.has(year);
    const visibleEvents = isExpanded ? yearEvents : yearEvents.slice(0, 3);
    const hasMore = yearEvents.length > 3;

    return (
      <div
        className={`eventspast__tabwrap ${activeYear === year ? 'active' : ''}`}
        data-tab={`e${year}`}
        key={year}
      >
        <div className="eventspast__tab">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {hasMore && (
          <div className="eventspast__bottom pt-1">
            <a
              className="eventspast__more jsLoadMoreEvents"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleShowMore(year);
              }}
              data-invis={isExpanded ? '0' : '1'}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout
      title="Apache Ignite Events - Meetups, Summit, Conference"
      description="Join our upcoming events: in-memory computing meetups, Apache Ignite summits or conferences. Find an Apache Ignite meetup/group near you."
    >
      <head>
        <link rel="canonical" href="https://ignite.apache.org/events" />
        <meta property="og:title" content="Apache Ignite Events - Meetups, Summit, Conference" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ignite.apache.org/events" />
        <meta property="og:image" content="/img/og-pic.png" />
        <meta property="og:description" content="Join our upcoming events: in-memory computing meetups, Apache Ignite summits or conferences. Find an Apache Ignite meetup/group near you." />
      </head>

      <section className="eventhero">
        <div className="container">
          <div className="eventhero__main">
            <h1 className="h2">
              Join The Apache Ignite <br />
              Community At Conferences, <br />
              Summits And Other Events
            </h1>
            <div className="h5 pt-3">
              The community meets online and offline regularly. <br />
              Join our meetup groups and events to learn from <br />
              Ignite experts or to share your Ignite experience.
            </div>
          </div>
          <img
            className="eventhero__img"
            src="/img/events/b1-mainpic.svg"
            alt="Join the Apache Ignite Community at Conferences, Summits and Other Events"
          />
        </div>
      </section>

      <section className="cmtynavblock">
        <div className="container">
          <ul className="cmtynavblock__list flexi">
            <li>
              <a className="cmtynavblock__active" href="#summit">
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

      <section className="event-featured container">
        <p className="capstext">Featured Event</p>
        <a
          href="https://ignite-summit.org/2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="event-featured__banner pt-5"
        >
          <picture>
            <source srcSet="/images/promos/ignite-Summit-call-for-speakers.png" media="(max-width: 767px)" />
            <img
              src="/images/promos/ignite-Summit-call-for-speakers.png"
              alt="Ignite Summit call for speakers"
            />
          </picture>
        </a>
      </section>

      <section className="evsummit container" id="summit">
        <div className="evsummit__info flexi pt-5">
          <div className="evsummit__logo">
            <img src="/img/events/ignite-summit-logo.svg" alt="" />
          </div>
          <div className="evsummit__descr">
            <h2 className="h3">Apache Ignite Summit</h2>
            <p className="h5 pt-2">
              This virtual conference will feature speakers from industry-leading companies <br />
              and hundreds of participants from all over the world.
            </p>
          </div>
        </div>
        <div className="evsummit__twobanners pt-5">
          <a
            href="https://ignite-summit.org/2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-7.png" alt="" />
          </a>
          <a
            href="https://ignite-summit.org/2023-june/"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-5.jpg" alt="" />
          </a>
          <a
            href="https://ignite-summit.org/2022-november/"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-4.jpg" alt="" />
          </a>
          <a
            href="https://ignite-summit.org/2022-june/"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-3.jpg" alt="" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLMc7NR20hA-JvgLWtvp2R9tEnD5vlp9l0"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-1.jpg" alt="" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLMc7NR20hA-KF8c_hVICKpzKnWkjzfC2V"
            target="_blank"
            rel="noopener noreferrer"
            className="evsummit__twobannerslink"
          >
            <img src="/img/events/banner-bott-2.jpg" alt="" />
          </a>
        </div>
      </section>

      <section className="event-planet" id="meetups">
        <div className="container">
          <div className="event-planet__wrap flexi">
            <div className="event-planet__main">
              <h2 className="h3 pb-1">Apache Ignite Meetups Worldwide</h2>
              <p className="h5 pt-5">
                Meet the community — developers, experts, and practitioners — face-to-face, virtually, or onsite in your city.
              </p>
            </div>
            <div className="event-planet__pic">
              <img src="/img/events/b4-world.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="event-virtual container" id="virtual">
        <div className="eventvirt flexi">
          <div className="eventvirt__left">
            <h3 className="h4">Virtual Apache Ignite Meetup</h3>
            <p className="pt-2">
              Join Ignite users, developers, committers, contributors, and architects from all over the world and get
              access to the online talks and presentations by Apache Ignite experts and practitioners.
            </p>
          </div>
          <div className="eventvirt__right">
            <a
              className="button"
              href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Virtual Meetup
            </a>
          </div>
        </div>

        <div className="event-virtbot">
          <div className="event-virtbot__col">
            <h4 className="h4">Recordings Of Past Meetups</h4>
            <p className="pt-2">
              Find a collection of past Virtual Apache Ignite Meetup <br />
              presentations, talks, and webinars.
            </p>
          </div>
          <div className="event-virtbot__col event-virtbot__col--long">
            <h4 className="h4">Upcoming Virtual Meetup</h4>
            <div className="event-dynamicsect">
              <h3 className="fz20">
                Join our group and don't <br />
                miss an upcoming virtual event
              </h3>
            </div>
          </div>
          <div className="event-virtbot__col">
            <div className="event-recording pb-2">
              <a
                href="https://www.youtube.com/watch?v=f2ArcJPH4iU&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="event-recorditem videoscr glightbox"
              >
                <img
                  className="event-recpic"
                  src="https://img.youtube.com/vi/f2ArcJPH4iU/maxresdefault.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=lCiZ3x8IRvI&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=2"
                target="_blank"
                rel="noopener noreferrer"
                className="event-recorditem videoscr glightbox"
              >
                <img
                  className="event-recpic"
                  src="https://img.youtube.com/vi/lCiZ3x8IRvI/maxresdefault.jpg"
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=7UjENQBFvIQ&list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ&index=3"
                target="_blank"
                rel="noopener noreferrer"
                className="event-recorditem videoscr glightbox"
              >
                <img
                  className="event-recpic"
                  src="https://img.youtube.com/vi/7UjENQBFvIQ/maxresdefault.jpg"
                  alt=""
                />
              </a>
            </div>
            <a
              className="event-recbutton button button--shadow"
              href="https://www.youtube.com/playlist?list=PLMc7NR20hA-LQ0GR1QW5SDQflMOuPUqDQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71423 4.99993L0.142805 9.94865L0.142805 0.0512134L8.71423 4.99993Z" />
                </svg>
              </i>
              <span>Watch Virtual Meetup videos</span>
            </a>
          </div>
          <div className="event-virtbot__col">
            <img className="event-dynamicsect__pic" src="/img/events/logo-meetup.svg" alt="" />
            <a
              className="button button--shadow event-recmorebutton"
              href="https://www.meetup.com/Apache-Ignite-Virtual-Meetup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="eventyoucity container">
        <h2 className="h4">Apache Ignite Meetups In Your City</h2>
        <div className="eventyoucity__wrap pt-5">
          <article className="eventyoucity__item">
            <div className="eventyoucity__icon">
              <img src="/img/events/flag-uk.svg" alt="" />
            </div>
            <div className="eventyoucity__town h5">
              <strong>London</strong>
              <span>Apache Ignite Meetup</span>
            </div>
            <div className="eventyoucity__action">
              <a
                className="button button--shadow"
                href="https://www.meetup.com/Apache-Ignite-London/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/events/icon-plus.svg" alt="" />
                <span>Join</span>
              </a>
            </div>
          </article>
          <article className="eventyoucity__item">
            <div className="eventyoucity__icon">
              <img src="/img/events/flag-ru.svg" alt="" />
            </div>
            <div className="eventyoucity__town h5">
              <strong>St.Petersburg</strong>
              <span>Apache Ignite Meetup</span>
            </div>
            <div className="eventyoucity__action">
              <a
                className="button button--shadow"
                href="https://www.meetup.com/St-Petersburg-Apache-Ignite-Meetup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/events/icon-plus.svg" alt="" />
                <span>Join</span>
              </a>
            </div>
          </article>
          <article className="eventyoucity__item">
            <div className="eventyoucity__icon">
              <img src="/img/events/flag-ru.svg" alt="" />
            </div>
            <div className="eventyoucity__town h5">
              <strong>Moscow</strong>
              <span>Apache Ignite Meetup</span>
            </div>
            <div className="eventyoucity__action">
              <a
                className="button button--shadow"
                href="https://www.meetup.com/Moscow-Apache-Ignite-Meetup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/events/icon-plus.svg" alt="" />
                <span>Join</span>
              </a>
            </div>
          </article>
          <article className="eventyoucity__last">
            <p className="fz20 pb-3">Start an onsite Apache Ignite Meetup in your city.</p>
            <small>Take the first step.</small>
            <small>
              Send us a note to <br />
              <a href="mailto:dev@ignite.apache.org">dev@ignite.apache.org</a> <br />
              and we'll see what can be done.
            </small>
          </article>
        </div>
      </section>

      <section className="eventupcoming container" id="upcoming">
        <div className="capstext pb-1">Upcoming Events Schedule</div>
        <div className="eventupcoming__wrap py-4">
          <h2 className="h4 pb-4">Offline events (3)</h2>

          <article className="eventcomingitem flexi">
            <div className="eventcomingitem__left">
              <p className="eventcomingitem__num">8</p>
              <p className="eventcomingitem__month">OCTOBER</p>
              <p className="eventcomingitem__year pt-3">2023</p>
            </div>
            <div className="eventcomingitem__main">
              <p className="eventcomingitem__title h5">
                Scalable Distributed Computing with Groovy Using Apache Ignite
              </p>
              <a
                className="eventcomingitem__more"
                href="https://communityovercode.org/schedule-list/#GR008"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more details
              </a>
            </div>
            <div className="eventcomingitem__right">
              <div className="eventcomingitem__mic">
                <div className="eventcomingitem__speaker">Jeremy Meyer</div>
              </div>
              <div className="eventcomingitem__loc">
                <div className="eventcomingitem__loctitle">Community Over Code</div>
                <div className="eventcomingitem__address">Halifax, Canada</div>
              </div>
            </div>
          </article>

          <article className="eventcomingitem flexi">
            <div className="eventcomingitem__left">
              <p className="eventcomingitem__num">8</p>
              <p className="eventcomingitem__month">OCTOBER</p>
              <p className="eventcomingitem__year pt-3">2023</p>
            </div>
            <div className="eventcomingitem__main">
              <p className="eventcomingitem__title h5">
                Whiskey Clustering with Apache Groovy and Apache Ignite
              </p>
              <a
                className="eventcomingitem__more"
                href="https://communityovercode.org/schedule-list/#GR007"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more details
              </a>
            </div>
            <div className="eventcomingitem__right">
              <div className="eventcomingitem__mic">
                <div className="eventcomingitem__speaker">Paul King</div>
              </div>
              <div className="eventcomingitem__loc">
                <div className="eventcomingitem__loctitle">Community Over Code</div>
                <div className="eventcomingitem__address">Halifax, Canada</div>
              </div>
            </div>
          </article>

          <article className="eventcomingitem flexi">
            <div className="eventcomingitem__left">
              <p className="eventcomingitem__num">9</p>
              <p className="eventcomingitem__month">OCTOBER</p>
              <p className="eventcomingitem__year pt-3">2023</p>
            </div>
            <div className="eventcomingitem__main">
              <p className="eventcomingitem__title h5">
                Enhancing Apache Ignite 3.0 with the Power of Open-Source
              </p>
              <a
                className="eventcomingitem__more"
                href="https://communityovercode.org/schedule-list/#BDC006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more details
              </a>
            </div>
            <div className="eventcomingitem__right">
              <div className="eventcomingitem__mic">
                <div className="eventcomingitem__speaker">Stanislav Lukyanov</div>
              </div>
              <div className="eventcomingitem__loc">
                <div className="eventcomingitem__loctitle">Community Over Code</div>
                <div className="eventcomingitem__address">Halifax, Canada</div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="eventspast container jsTabWrap" id="past">
        <h3 className="capstext pb-5">Past Events</h3>
        <div className="eventspast__tablinks flexi">
          {years.map((year) => (
            <button
              key={year}
              className={`eventpast__link ${activeYear === year ? 'active' : ''}`}
              data-tablink={`e${year}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="eventspast__tabs">{years.map((year) => renderYearEvents(year))}</div>
      </section>
    </Layout>
  );
}
