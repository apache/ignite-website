import React, { useState, type ReactNode } from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { mobileMenuItems } from '@site/src/config/navigation';
import styles from './styles.module.css';

/**
 * Mobile Menu Component
 * Replicates the slide-in mobile menu with accordion-style dropdowns
 */
export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useLockBodyScroll(mobileSidebar.shown);

  if (!mobileSidebar.shouldRender) {
    return null;
  }

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div
      className={styles.mobmenu}
      aria-hidden={!mobileSidebar.shown}
      style={{ display: mobileSidebar.shown ? 'block' : 'none' }}
    >
      <div className={styles.mobmenuWrap}>
        <div className={styles.mobmenuWindow} role="dialog" aria-modal="true">
          <button
            className={styles.mobmenuClose}
            onClick={mobileSidebar.toggle}
            aria-label="Close mobile menu"
          >
            Close
          </button>

          <div className={styles.mobmenuContent}>
            <a href="/" className={styles.mobmenuLogo}>
              <img src="/img/logo.svg" alt="Apache Ignite" />
            </a>

            <div className={styles.mobmenuMenu}>
              <ul>
                {mobileMenuItems.map((item, index) => {
                  const hasChildren = 'children' in item && item.children;
                  const isOpen = openItems.has(index);
                  const isDefault = 'isDefault' in item && item.isDefault;

                  return (
                    <li key={index}>
                      {hasChildren ? (
                        <>
                          <span className={styles.mobmenuParent}>
                            <a href={item.href}>{item.label}</a>
                            {!isDefault && (
                              <button
                                className={styles.mobmenuOpener}
                                onClick={() => toggleItem(index)}
                                aria-expanded={isOpen}
                                aria-label={`Toggle ${item.label} submenu`}
                              />
                            )}
                          </span>
                          <ul
                            className={isDefault ? styles.isdefault : undefined}
                            style={{
                              display: isDefault || isOpen ? 'block' : 'none'
                            }}
                          >
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <a href={child.href}>{child.label}</a>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <a href={item.href}>{item.label}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
              <a href="/download" className={`button ${styles.mobmenuButton}`}>
                Download Ignite
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileSidebar.shown && (
        <div
          className={styles.mobmenuBackdrop}
          onClick={mobileSidebar.toggle}
          role="presentation"
        />
      )}
    </div>
  );
}
