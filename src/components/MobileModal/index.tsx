import React, { useState, useEffect, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { mobileMenuItems } from '@site/src/config/navigation';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface AccordionState {
  [key: string]: boolean;
}

/**
 * Helper to check if a URL is external (absolute URL)
 */
function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
}

/**
 * Create a URL resolver function that prepends baseUrl to relative paths
 */
function createUrlResolver(baseUrl: string): (url: string) => string {
  return (url: string): string => {
    if (!url) return url;
    if (isExternalUrl(url)) return url;
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const normalizedPath = url.startsWith('/') ? url : `/${url}`;
    return `${normalizedBase}${normalizedPath}`;
  };
}

export default function MobileModal({ isOpen, onClose }: Props): ReactNode {
  const [accordionState, setAccordionState] = useState<AccordionState>({});
  const [mounted, setMounted] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  // Static asset URLs with baseUrl support
  const logoUrl = useBaseUrl('/img/logo.svg');
  const homeUrl = useBaseUrl('/');
  const downloadUrl = useBaseUrl('/download');

  // Create URL resolver for dynamic paths (menu items from config)
  const resolveUrl = useCallback(
    createUrlResolver(siteConfig.baseUrl),
    [siteConfig.baseUrl]
  );

  // Handle mount state for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleAccordion = (label: string) => {
    setAccordionState(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  if (!mounted || !isOpen) return null;

  const content = (
    <div className={styles.mobmenu} aria-hidden={!isOpen}>
      <div className={styles.mobmenuWrap} onClick={onClose}>
        <div className={styles.mobmenuWindow} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <button className={styles.mobmenuClose} onClick={onClose} aria-label="Close menu">
            Close
          </button>
          <div className={styles.mobmenuContent}>
            <a className={styles.mobmenuLogo} href={homeUrl}>
              <img src={logoUrl} alt="Apache Ignite" />
            </a>
            <div className={styles.mobmenuMenu}>
              <ul>
                {mobileMenuItems.map((item) => {
                  const hasChildren = 'children' in item && item.children && item.children.length > 0;
                  const isDefault = 'isDefault' in item && item.isDefault;
                  const isOpen = isDefault || accordionState[item.label];

                  if (hasChildren) {
                    return (
                      <li key={item.label} className={isDefault ? styles.isdefault : (isOpen ? styles.isopen : '')}>
                        {isDefault ? (
                          // Community without accordion button - just the link
                          <a href={resolveUrl(item.href)}>{item.label}</a>
                        ) : (
                          // Use Cases and Features with accordion button
                          <span className={styles.mobmenuParent}>
                            <a href={resolveUrl(item.href)}>{item.label}</a>
                            <button
                              className={styles.mobmenuOpener}
                              onClick={() => toggleAccordion(item.label)}
                              aria-label={`Toggle ${item.label} menu`}
                            />
                          </span>
                        )}
                        <ul className={isDefault ? styles.isdefault : undefined}>
                          {item.children.map((child, idx) => (
                            <li key={idx}>
                              <a href={resolveUrl(child.href)}>{child.label}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <a href={resolveUrl(item.href)}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={downloadUrl}
                className={`button ${styles.mobmenuButton}`}
              >
                Download Ignite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
