import React, { type ReactNode } from 'react';
import { footerSections, copyrightInfo } from '@site/src/config/navigation';
import styles from '@site/src/css/footer.module.css';

/**
 * Custom Footer Component
 * Replicates the exact footer structure from the current Ignite site
 * with 4-column layout, social links, and CTA button
 */
export default function Footer(): ReactNode {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        {/* Column 1: Features */}
        <section className={styles.footer1}>
          <a href={footerSections.features.titleLink} className={styles.footerTitle}>
            {footerSections.features.title}
          </a>
          <ul className={styles.footerMenu}>
            {footerSections.features.items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Column 2: Use Cases */}
        <section className={styles.footer2}>
          <a href={footerSections.useCases.titleLink} className={styles.footerTitle}>
            {footerSections.useCases.title}
          </a>
          <ul className={styles.footerMenu}>
            {footerSections.useCases.items.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Column 3: Community/Resources/Events */}
        <section className={styles.footer3}>
          {footerSections.community.links.map((link, index) => (
            <a key={index} href={link.href} className={styles.footerTitle}>
              {link.label}
            </a>
          ))}
        </section>

        {/* Column 4: Contact & Social */}
        <section className={styles.footer4}>
          <div className={styles.footer4Item}>
            Join Our{' '}
            <a href={`mailto:${footerSections.contact.devMailingList}`}>
              Dev Mailing List
            </a>
          </div>
          <div className={`${styles.footer4Item} pt-2`}>
            Or email the{' '}
            <a href={`mailto:${footerSections.contact.userMailingList}`}>
              User Mailing List
            </a>
          </div>
          <div className={`${styles.footer4Item} pt-5`}>Follow Us:</div>
          <div className={`${styles.footer4Socwrap} pt-2`}>
            {footerSections.contact.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer4Soc}
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
          <a
            href={footerSections.contact.ctaButton.href}
            className={`button ${styles.footer4Button}`}
          >
            {footerSections.contact.ctaButton.label}
          </a>
        </section>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className={`container ${styles.footerBot}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/img/asf-logo-mark.svg"
            alt="Apache Software Foundation"
            style={{ height: '40px', width: 'auto' }}
          />
          <p style={{ margin: 0 }}>
            © {copyrightInfo.startYear} - {currentYear}{' '}
            <a href={copyrightInfo.organizationLink}>
              {copyrightInfo.organization}
            </a>
          </p>
        </div>
        <p className={styles.pt1x}>{copyrightInfo.trademarkNotice}</p>
        <p className={styles.pt1x}>
          <a href={copyrightInfo.privacyPolicyLink}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
