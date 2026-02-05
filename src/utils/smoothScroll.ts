/**
 * Smooth Scroll Utility
 *
 * Provides smooth scrolling behavior for anchor links throughout the site.
 * This utility can be used in navigation menus, table of contents, and other
 * components that need smooth scrolling to page sections.
 */

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional offset from the top in pixels (useful for fixed headers)
 */
export const smoothScrollTo = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Sets up smooth scroll behavior for all anchor links on the page
 * Call this function once when the page loads to enable smooth scrolling
 * for all links with href starting with #
 */
export const initSmoothScroll = (): void => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');

      if (href && href !== '#') {
        const elementId = href.substring(1);
        smoothScrollTo(elementId, 100); // 100px offset for fixed header
      }
    }
  });
};
