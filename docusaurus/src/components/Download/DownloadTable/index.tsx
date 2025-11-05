import React, {useState} from 'react';
import {DownloadVersion, ExtensionVersion} from '@site/src/data/downloads';
import styles from './styles.module.css';

interface DownloadTableProps {
  versions: DownloadVersion[] | ExtensionVersion[];
  type: 'source' | 'binary' | 'slim' | 'extension-source' | 'extension-binary';
  showTabs?: boolean;
}

function isDownloadVersion(version: DownloadVersion | ExtensionVersion): version is DownloadVersion {
  return 'ignite3' in version;
}

function isExtensionVersion(version: DownloadVersion | ExtensionVersion): version is ExtensionVersion {
  return 'name' in version && !('ignite3' in version);
}

function getFileName(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1];
}

function handleDownloadClick(version: string, type: string, fileName: string) {
  // Track download with gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventCategory =
      type === 'source'
        ? 'apache_ignite_source_download'
        : type === 'docker'
          ? 'docker_repo_download'
          : 'apache_ignite_fabric_download';

    (window as any).gtag('event', 'download', {
      event_category: eventCategory,
      event_label: fileName,
    });
  }
}

function DownloadRow({version, type}: {version: DownloadVersion | ExtensionVersion; type: string}) {
  if (isExtensionVersion(version)) {
    return (
      <tr>
        <td>{version.name}</td>
        <td>{version.version}</td>
        <td>
          {version.guide && (
            <a href={version.guide} target="_blank" rel="noopener noreferrer">
              guide
            </a>
          )}
        </td>
        <td>
          {version.notes && (
            <a href={version.notes} target="_blank" rel="noopener noreferrer">
              release notes
            </a>
          )}
        </td>
        <td>{version.releaseDate}</td>
        <td className={styles.linksInside}>
          {version.sourceLink && (
            <>
              <a
                className={styles.sourceLink}
                href={version.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleDownloadClick(version.version, type, getFileName(version.sourceLink))
                }>
                {getFileName(version.sourceLink)}
              </a>
              {' ('}
              <a href={`${version.sourceLink}.asc`} target="_blank" rel="noopener noreferrer">
                pgp
              </a>
              <a href={`${version.sourceLink}.sha512`} target="_blank" rel="noopener noreferrer">
                sha512
              </a>
              {')'}
            </>
          )}
        </td>
      </tr>
    );
  }

  const downloadVersion = version as DownloadVersion;
  const downloadLink =
    type === 'source' ? downloadVersion.sourceLink : downloadVersion.binaryLink || downloadVersion.sourceLink;

  return (
    <tr>
      <td>
        {downloadVersion.version}
        {downloadVersion.isLatest ? ' (latest)' : ''}
      </td>
      <td>
        {downloadVersion.guide && (
          <a href={downloadVersion.guide} target="_blank" rel="noopener noreferrer">
            guide
          </a>
        )}
        {downloadVersion.javadoc && (
          <a href={downloadVersion.javadoc} target="_blank" rel="noopener noreferrer">
            javadoc
          </a>
        )}
        {downloadVersion.scaladoc && (
          <a href={downloadVersion.scaladoc} target="_blank" rel="noopener noreferrer">
            scaladoc
          </a>
        )}
      </td>
      <td>
        {downloadVersion.notes && (
          <a href={downloadVersion.notes} target="_blank" rel="noopener noreferrer">
            release notes
          </a>
        )}
      </td>
      <td>{downloadVersion.releaseDate}</td>
      <td className={styles.linksInside}>
        {downloadLink && (
          <>
            <a
              className={styles.sourceLink}
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleDownloadClick(downloadVersion.version, type, getFileName(downloadLink))
              }>
              {getFileName(downloadLink)}
            </a>
            {' ('}
            <a href={`${downloadLink}.asc`} target="_blank" rel="noopener noreferrer">
              pgp
            </a>
            <a href={`${downloadLink}.sha512`} target="_blank" rel="noopener noreferrer">
              sha512
            </a>
            {')'}
          </>
        )}
      </td>
    </tr>
  );
}

export default function DownloadTable({versions, type, showTabs = false}: DownloadTableProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<'ignite3' | 'ignite2'>('ignite3');

  if (!showTabs) {
    const isExtension = type.includes('extension');
    return (
      <div className={styles.tableWrap}>
        <div className={styles.tableScroller}>
          <table className={styles.downloadTable}>
            <thead>
              <tr>
                {isExtension && <th className={styles.col1}>Name</th>}
                <th className={styles.col1}>Version</th>
                <th className={styles.col2}>Docs</th>
                <th className={styles.col3}>Release Notes</th>
                <th className={styles.col4}>Date</th>
                <th className={styles.col5}>Source</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((version, index) => (
                <DownloadRow key={index} version={version} type={type} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const ignite3Versions = versions.filter(
    (v) => isDownloadVersion(v) && v.ignite3
  ) as DownloadVersion[];
  const ignite2Versions = versions.filter(
    (v) => isDownloadVersion(v) && !v.ignite3
  ) as DownloadVersion[];

  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableScroller}>
        <div className={styles.tabLinks}>
          <button
            className={`${styles.tabLink} ${activeTab === 'ignite3' ? styles.active : ''}`}
            onClick={() => setActiveTab('ignite3')}
            data-tablink="ignite3">
            Ignite 3
          </button>
          <button
            className={`${styles.tabLink} ${activeTab === 'ignite2' ? styles.active : ''}`}
            onClick={() => setActiveTab('ignite2')}
            data-tablink="ignite2">
            Ignite 2
          </button>
        </div>

        <div className={styles.tabs}>
          <div
            className={`${styles.tabContent} ${activeTab === 'ignite3' ? styles.active : ''}`}
            data-tab="ignite3">
            <table className={styles.downloadTable}>
              <thead>
                <tr>
                  <th className={styles.col1}>Version</th>
                  <th className={styles.col2}>Docs</th>
                  <th className={styles.col3}>Release Notes</th>
                  <th className={styles.col4}>Date</th>
                  <th className={styles.col5}>Source</th>
                </tr>
              </thead>
              <tbody>
                {ignite3Versions.map((version, index) => (
                  <DownloadRow key={index} version={version} type={type} />
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`${styles.tabContent} ${activeTab === 'ignite2' ? styles.active : ''}`}
            data-tab="ignite2">
            <table className={styles.downloadTable}>
              <thead>
                <tr>
                  <th className={styles.col1}>Version</th>
                  <th className={styles.col2}>Docs</th>
                  <th className={styles.col3}>Release Notes</th>
                  <th className={styles.col4}>Date</th>
                  <th className={styles.col5}>Source</th>
                </tr>
              </thead>
              <tbody>
                {ignite2Versions.map((version, index) => (
                  <DownloadRow key={index} version={version} type={type} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
