import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

/**
 * Scroll to Top Button Component
 *
 * Displays a floating button in the bottom-right corner that scrolls
 * the page to the top when clicked. Button appears when scrolled >= 100px.
 */
export default function ScrollToTop(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrolled >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      className={clsx('scrollTop', { active: isVisible })}
      href="#"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        className="feather feather-chevron-up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </a>
  );
}
