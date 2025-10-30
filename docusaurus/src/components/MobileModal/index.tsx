import React, { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { mobileMenuItems } from '@site/src/config/navigation';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface AccordionState {
  [key: string]: boolean;
}

export default function MobileModal({ isOpen, onClose }: Props): ReactNode {
  const [accordionState, setAccordionState] = useState<AccordionState>({});
  const [mounted, setMounted] = useState(false);

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
            <a className={styles.mobmenuLogo} href="/">
              <img src="/img/logo.svg" alt="Apache Ignite" />
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
                          <a href={item.href}>{item.label}</a>
                        ) : (
                          // Use Cases and Features with accordion button
                          <span className={styles.mobmenuParent}>
                            <a href={item.href}>{item.label}</a>
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
                              <a href={child.href}>{child.label}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <a href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href="/download.cgi"
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
