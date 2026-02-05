/**
 * Featured Event Configuration
 * Update this file to change the featured event banner on the events page
 */

export interface FeaturedEvent {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageSrcMobile?: string;
  imageAlt: string;
  enabled: boolean;
}

export const FEATURED_EVENT: FeaturedEvent = {
  title: 'Apache Ignite Summit 2025',
  description: 'Join the Apache Ignite community for talks, workshops, and networking',
  link: 'https://ignite-summit.org/2025/',
  imageSrc: '/images/promos/ignite-Summit-call-for-speakers.png',
  imageSrcMobile: '/images/promos/ignite-Summit-call-for-speakers.png',
  imageAlt: 'Ignite Summit call for speakers',
  enabled: true,
};
