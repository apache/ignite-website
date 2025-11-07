import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from '@site/src/pages/download.module.css';

export default function VerificationGuide(): JSX.Element {
  return (
    <section className={`${styles.downverify} container`} id="verify">
      <h3 className="h5">How to verify</h3>
      <div className={`${styles.downverifyWrap} flexi`}>
        <div className={styles.downverifyLeft}>
          <p>
            The PGP signatures can be verified using PGP or GPG. First download the{' '}
            <a href="https://downloads.apache.org/ignite/KEYS" target="_blank" rel="noopener noreferrer">
              Apache Ignite KEYS
            </a>{' '}
            file as well as the .asc signature files for the desired release version. Make sure you get
            these files from the main distribution directory, rather than from a mirror. Then verify the
            signatures.
          </p>
        </div>
        <aside className={styles.downverifyRight}>
          <p>
            Please check{' '}
            <a
              href="https://www.apache.org/info/verification.html"
              target="_blank"
              rel="noopener noreferrer">
              How to Verify Downloaded Files
            </a>{' '}
            for more information on how and why you should verify Apache Ignite releases.
          </p>
          <div className={styles.downverifyCode}>
            <p>% gpg --import KEYS</p>
            <p>% gpg --verify apache-ignite-2.9.1-src.zip.asc apache-ignite-2.9.1-src.zip</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
