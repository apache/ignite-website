/**
 * Utility functions for events page
 */

import type {Event, EventType} from '@site/src/data/events';

/**
 * Format event date for display
 */
export function formatEventDate(event: Event): string {
  const start = new Date(event.date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return start.toLocaleDateString('en-US', options);
}

/**
 * Format event date range for display
 */
export function formatEventDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);

  if (!endDate || startDate === endDate) {
    return formatEventDate({date: startDate} as Event);
  }

  const end = new Date(endDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
}

/**
 * Group events by year
 */
export function groupEventsByYear(events: Event[]): Record<string, Event[]> {
  return events.reduce((acc, event) => {
    const year = new Date(event.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
}

/**
 * Filter events by type and year
 */
export function filterEvents(
  events: Event[],
  type: EventType | null,
  year: string | null
): Event[] {
  return events.filter((event) => {
    if (type && event.type !== type) return false;
    if (year && new Date(event.date).getFullYear().toString() !== year) return false;
    return true;
  });
}

/**
 * Sort events by date
 */
export function sortEventsByDate(events: Event[], ascending = false): Event[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Get upcoming events (date >= today)
 */
export function getUpcomingEvents(events: Event[]): Event[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day
  return events.filter((event) => new Date(event.date) >= now);
}

/**
 * Get past events (date < today)
 */
export function getPastEvents(events: Event[]): Event[] {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day
  return events.filter((event) => new Date(event.date) < now);
}

/**
 * Get available years from events
 */
export function getAvailableYears(events: Event[]): string[] {
  const years = new Set<string>();
  events.forEach((event) => {
    years.add(new Date(event.date).getFullYear().toString());
  });
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
}

/**
 * Get available event types from events
 */
export function getAvailableTypes(events: Event[]): EventType[] {
  const types = new Set<EventType>();
  events.forEach((event) => {
    types.add(event.type);
  });
  return Array.from(types).sort();
}

/**
 * Extract YouTube video ID from URL
 */
export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

/**
 * Get YouTube thumbnail URL from video URL
 */
export function getYouTubeThumbnail(videoUrl: string): string | null {
  const videoId = extractYouTubeVideoId(videoUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * Check if a link is external
 */
export function isExternalLink(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname !== 'ignite.apache.org' && urlObj.hostname !== 'localhost';
  } catch {
    // If URL parsing fails, assume it's a relative/internal link
    return false;
  }
}
