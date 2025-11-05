import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import TopBanner from '@site/src/components/TopBanner';
import MobileModal from '@site/src/components/MobileModal';
import { mainNavItems, getStartedMenu, featuresMenu, communityMenu, resourcesMenu } from '@site/src/config/navigation';
import type { DropdownMenu } from '@site/src/config/navigation';
import styles from '@site/src/css/navigation.module.css';

/**
 * Dropdown Menu Component
 * Renders a dropdown panel with sections and items
 */
interface DropdownProps {
  menu: DropdownMenu;
  isActive: boolean;
  panelKey: string;
}

function DropdownMenuPanel({ menu, isActive, panelKey }: DropdownProps): JSX.Element {
  const gridClass = panelKey === 'getStarted' || panelKey === 'resources'
    ? styles.dropmenu1Grid
    : panelKey === 'features'
    ? styles.dropmenu2Grid
    : styles.dropmenu3Grid;

  return (
    <div
      className={clsx(styles.dropmenuPanel, { 'active': isActive })}
      data-menupanel={panelKey}
    >
      <div className={clsx('container', gridClass)}>
        {menu.featured && (panelKey === 'getStarted' || panelKey === 'resources') && (
          <div className={styles.dropmenu1Buttonwrap}>&nbsp;</div>
        )}

        {menu.featured && (
          <div className={clsx(styles.dropmenuBox, styles.dropmenuBoxButtonin)}>
            <a
              href={menu.featured.href}
              className={clsx(styles.dropmenuRedbutton, menu.featured.className)}
            >
              <img src={menu.featured.icon} alt="" />
              <span>{menu.featured.label}</span>
            </a>
            {menu.sections[0] && menu.sections[0].items && (
              <ul className={styles.dropmenuMenu}>
                {menu.sections[0].items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className={styles.dropmenuIconitem}>
                      {item.icon && <img src={item.icon} alt="" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {menu.sections.map((section, sectionIdx) => {
          if (menu.featured && sectionIdx === 0) return null;

          const isLastSection = sectionIdx === menu.sections.length - 1;
          const noBorder = panelKey === 'getStarted'
            ? isLastSection
            : panelKey === 'community'
            ? (sectionIdx === 1 || sectionIdx === 3)
            : false;

          return (
            <div
              key={sectionIdx}
              className={clsx(styles.dropmenuBox, {
                [styles.noBorder]: noBorder,
                blog: panelKey === 'resources' && section.title === ''
              })}
            >
              {section.title && (
                <p className="capstext">
                  {section.titleLink ? (
                    <a href={section.titleLink} className={styles.dropmenuCapslink}>
                      {section.title}
                    </a>
                  ) : (
                    section.title
                  )}
                </p>
              )}
              <ul className={styles.dropmenuMenu}>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      className={styles.dropmenuIconitem}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.icon && <img src={item.icon} alt="" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {(panelKey === 'getStarted' || panelKey === 'features') && (
        <div className={clsx(styles.panelmorelinkwrap, {
          [styles.panelmorelinkwrapEnd]: panelKey === 'getStarted'
        }, 'container')}>
          <a
            href={panelKey === 'getStarted' ? '/use-cases.html' : '/features/'}
            className={styles.panellink}
          >
            View all
          </a>
        </div>
      )}
    </div>
  );
}

/**
 * Custom Navbar Content Component
 * Replicates the exact navigation from the current Ignite site
 * This replaces Docusaurus's default NavbarContent component
 */
export default function NavbarContent(): ReactNode {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const baseDropmenuRef = useRef<HTMLDivElement | null>(null);
  const floatDropmenuRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add/remove body class for header scroll state
  useEffect(() => {
    if (isScrolled) {
      document.body.classList.add('hdr-active');
    } else {
      document.body.classList.remove('hdr-active');
    }
  }, [isScrolled]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown]);

  // Set dropdown height when active panel changes
  useEffect(() => {
    // Update height for both dropdown containers
    [baseDropmenuRef, floatDropmenuRef].forEach(ref => {
      if (ref.current) {
        if (activeDropdown) {
          const activePanel = ref.current.querySelector(`.${styles.dropmenuPanel}.active`);
          if (activePanel) {
            ref.current.style.height = `${activePanel.scrollHeight}px`;
          }
        } else {
          ref.current.style.height = '';
        }
      }
    });
  }, [activeDropdown]);

  // Close dropdown when clicking outside or mouse leaves dropdown area
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.hdrmenu}`) && !target.closest(`.${styles.dropmenu}`)) {
        setActiveDropdown(null);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if mouse is over dropdown background (should close)
      if (target.closest(`.${styles.dropmenuBack}`)) {
        setActiveDropdown(null);
        return;
      }
      // Check if mouse is NOT over dropdown or menu items (should close)
      const overDropdown = target.closest(`.${styles.dropmenu}`);
      const overMenuItem = target.closest('.js-hasdrop');
      if (!overDropdown && !overMenuItem && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [activeDropdown]);

  const handleMouseEnter = (key: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      // Check if still hovering over header wrap before opening
      if (document.querySelector(`.${styles.hdrWrap}:hover`)) {
        setActiveDropdown(key);
      }
    }, 200);
  };

  const handleClick = (key: string, hasMenu: boolean) => {
    if (hasMenu) {
      setActiveDropdown(activeDropdown === key ? null : key);
    }
  };

  const isCurrentPage = (href?: string, key?: string) => {
    // Homepage matches "Get Started" (empty path)
    if (location.pathname === '/' && key === 'getStarted') {
      return true;
    }

    if (!href) return false;

    // Handle absolute URLs (external links)
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      return false;
    }

    // Remove leading slash for comparison
    const path = href.replace(/^\//, '');
    const currentPath = location.pathname.replace(/^\//, '');

    // Exact match or match with/without trailing slash
    return currentPath === path ||
           currentPath === path + '/' ||
           currentPath + '/' === path;
  };

  return (
    <>
      {/* Base Header */}
      <header className={clsx(styles.hdr, styles.hdrWhite, 'jsHdrBase', {
        opened: activeDropdown !== null
      })}>
        <div className="jsHdrLine">
          <TopBanner />
          <div className={clsx(styles.hdrWrap, 'flexi')}>
            <button
              className={styles.hdrBurger}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
            >
              <img src="/img/menu.svg" alt="" />
            </button>

            <a href="/" className={styles.hdrLogo}>
              <img
                src="/img/logo-white.svg"
                alt="Apache Ignite"
                className={clsx(styles.hdrLogoImg, styles.hdrLogoWhite)}
              />
              <img
                src="/img/logo.svg"
                alt="Apache Ignite"
                className={clsx(styles.hdrLogoImg, styles.hdrLogoBlack)}
              />
            </a>

            <a href="/download.cgi" className={clsx('button', styles.hdrButton)}>
              Download Ignite
            </a>

            <nav className={styles.hdrmenu}>
              <ul className="flexi">
                {mainNavItems.map((item) => {
                  const hasMenu = 'menu' in item && item.menu;
                  const itemHref = 'href' in item ? item.href : undefined;
                  const key = 'key' in item ? item.key : undefined;
                  const isActive = activeDropdown === key;
                  const isCurrent = isCurrentPage(itemHref, key);

                  return (
                    <li
                      key={item.label}
                      className={hasMenu ? 'js-hasdrop' : undefined}
                      onMouseEnter={() => hasMenu && key && handleMouseEnter(key)}
                    >
                      <a
                        href={itemHref || '#'}
                        className={clsx({
                          [styles.hdrmenuExpanded]: hasMenu,
                          [styles.hdrmenuCurrent]: isCurrent,
                          'active': isActive,
                        })}
                        data-panel={key}
                        target={'external' in item && item.external ? '_blank' : undefined}
                        rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.dropmenu} ref={baseDropmenuRef}>
              <DropdownMenuPanel
                menu={getStartedMenu}
                isActive={activeDropdown === 'getStarted'}
                panelKey="getStarted"
              />
              <DropdownMenuPanel
                menu={featuresMenu}
                isActive={activeDropdown === 'features'}
                panelKey="features"
              />
              <DropdownMenuPanel
                menu={communityMenu}
                isActive={activeDropdown === 'community'}
                panelKey="community"
              />
              <DropdownMenuPanel
                menu={resourcesMenu}
                isActive={activeDropdown === 'resources'}
                panelKey="resources"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Background Overlay */}
      <div
        className={clsx(styles.dropmenuBack, {
          'active': activeDropdown !== null
        })}
        onClick={() => setActiveDropdown(null)}
      />

      {/* Floating Header (on scroll) */}
      <header className={clsx(styles.hdrfloat, styles.hdrWhite, 'jsHdrFloatBase', {
        opened: activeDropdown !== null
      })}>
        <div className="jsHdrLine">
          <div className={clsx(styles.hdrWrap, 'flexi')}>
            <button
              className={styles.hdrBurger}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
            >
              <img src="/img/menu.svg" alt="" />
            </button>

            <a href="/" className={styles.hdrLogo}>
              <img
                src="/img/logo.svg"
                alt="Apache Ignite"
                className={styles.hdrLogoImg}
              />
            </a>

            <a href="/download.cgi" className={clsx('button', styles.hdrButton)}>
              Download Ignite
            </a>

            <nav className={styles.hdrmenu}>
              <ul className="flexi">
                {mainNavItems.map((item) => {
                  const hasMenu = 'menu' in item && item.menu;
                  const itemHref = 'href' in item ? item.href : undefined;
                  const key = 'key' in item ? item.key : undefined;
                  const isActive = activeDropdown === key;
                  const isCurrent = isCurrentPage(itemHref, key);

                  return (
                    <li
                      key={item.label}
                      className={hasMenu ? 'js-hasdrop' : undefined}
                      onMouseEnter={() => hasMenu && key && handleMouseEnter(key)}
                    >
                      <a
                        href={itemHref || '#'}
                        className={clsx({
                          [styles.hdrmenuExpanded]: hasMenu,
                          [styles.hdrmenuCurrent]: isCurrent,
                          'active': isActive,
                        })}
                        data-panel={key}
                        target={'external' in item && item.external ? '_blank' : undefined}
                        rel={'external' in item && item.external ? 'noopener noreferrer' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.dropmenu} ref={floatDropmenuRef}>
              <DropdownMenuPanel
                menu={getStartedMenu}
                isActive={activeDropdown === 'getStarted'}
                panelKey="getStarted"
              />
              <DropdownMenuPanel
                menu={featuresMenu}
                isActive={activeDropdown === 'features'}
                panelKey="features"
              />
              <DropdownMenuPanel
                menu={communityMenu}
                isActive={activeDropdown === 'community'}
                panelKey="community"
              />
              <DropdownMenuPanel
                menu={resourcesMenu}
                isActive={activeDropdown === 'resources'}
                panelKey="resources"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Modal Navigation */}
      <MobileModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
