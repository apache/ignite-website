import React, {useState} from 'react';
import {DownloadRelease, Extension} from '@site/src/data/downloads';
import {
  resolveMirrorUrl,
  getFileName,
  trackDownload,
  getTrackingCategory,
  getTrackingLabel,
} from '@site/src/components/Download/downloadUtils';
import styles from './styles.module.css';

interface DownloadTableProps {
  ignite3Releases?: DownloadRelease[];
  ignite2Releases?: DownloadRelease[];
  extensions?: Extension[];
  type: 'source' | 'binary' | 'slim' | 'extension';
  preferredMirror?: string;
}

function isExtension(item: DownloadRelease | Extension): item is Extension {
  return 'displayName' in item;
}

function handleDownloadClick(url: string, type: string) {
  const fileName = getFileName(url);
  const category = getTrackingCategory(type);
  const label = getTrackingLabel(fileName);
  trackDownload(category, label);
}

interface DownloadRowProps {
  release: DownloadRelease | Extension;
  type: string;
  preferredMirror?: string;
}

function DownloadRow({release, type, preferredMirror}: DownloadRowProps) {
  if (isExtension(release)) {
    const sourceUrl = resolveMirrorUrl(release.sourceUrl, preferredMirror);
    return (
      <tr>
        <td>{release.displayName}</td>
        <td>{release.version}</td>
        <td>
          {release.guide && (
            <a href={release.guide} target="_blank" rel="noopener noreferrer">
              guide
            </a>
          )}
        </td>
        <td>
          {release.releaseNotes && (
            <a href={release.releaseNotes} target="_blank" rel="noopener noreferrer">
              release notes
            </a>
          )}
        </td>
        <td>{release.date}</td>
        <td className={styles.linksInside}>
          <a
            className={styles.sourceLink}
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleDownloadClick(sourceUrl, 'extension')}>
            {getFileName(sourceUrl)}
          </a>
          {' ('}
          <a href={`${sourceUrl}.asc`} target="_blank" rel="noopener noreferrer">
            pgp
          </a>
          <a href={`${sourceUrl}.sha512`} target="_blank" rel="noopener noreferrer">
            sha512
          </a>
          {')'}
        </td>
      </tr>
    );
  }

  const downloadUrl =
    type === 'source'
      ? release.sourceUrl
      : type === 'slim'
        ? release.slimUrl
        : release.binaryUrl || release.sourceUrl;

  if (!downloadUrl) return null;

  const resolvedUrl = resolveMirrorUrl(downloadUrl, preferredMirror);

  return (
    <tr>
      <td>
        {release.version}
        {release.latest && ' (latest)'}
      </td>
      <td>
        {release.guide && (
          <a href={release.guide} target="_blank" rel="noopener noreferrer">
            guide
          </a>
        )}
        {release.javadoc && (
          <a href={release.javadoc} target="_blank" rel="noopener noreferrer">
            javadoc
          </a>
        )}
        {release.scaladoc && (
          <a href={release.scaladoc} target="_blank" rel="noopener noreferrer">
            scaladoc
          </a>
        )}
      </td>
      <td>
        {release.releaseNotes && (
          <a href={release.releaseNotes} target="_blank" rel="noopener noreferrer">
            release notes
          </a>
        )}
      </td>
      <td>{release.date}</td>
      <td className={styles.linksInside}>
        <a
          className={styles.sourceLink}
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleDownloadClick(resolvedUrl, type)}>
          {getFileName(resolvedUrl)}
        </a>
        {' ('}
        <a href={`${resolvedUrl}.asc`} target="_blank" rel="noopener noreferrer">
          pgp
        </a>
        <a href={`${resolvedUrl}.sha512`} target="_blank" rel="noopener noreferrer">
          sha512
        </a>
        {')'}
      </td>
    </tr>
  );
}

export default function DownloadTable({
  ignite3Releases,
  ignite2Releases,
  extensions,
  type,
  preferredMirror,
}: DownloadTableProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<'ignite3' | 'ignite2'>('ignite3');
  const isExtension = type === 'extension';
  const hasMultipleVersions = ignite3Releases && ignite2Releases;

  if (isExtension && extensions) {
    return (
      <div className={styles.tableWrap}>
        <div className={styles.tableScroller}>
          <table className={styles.downloadTable}>
            <thead>
              <tr>
                <th className={styles.col1}>Name</th>
                <th className={styles.col1}>Version</th>
                <th className={styles.col2}>Docs</th>
                <th className={styles.col3}>Release Notes</th>
                <th className={styles.col4}>Date</th>
                <th className={styles.col5}>Source</th>
              </tr>
            </thead>
            <tbody>
              {extensions.map((extension, index) => (
                <DownloadRow
                  key={index}
                  release={extension}
                  type={type}
                  preferredMirror={preferredMirror}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (!hasMultipleVersions) {
    const releases = ignite3Releases || ignite2Releases || [];
    return (
      <div className={styles.tableWrap}>
        <div className={styles.tableScroller}>
          <table className={styles.downloadTable}>
            <thead>
              <tr>
                <th className={styles.col1}>Version</th>
                <th className={styles.col2}>Docs</th>
                <th className={styles.col3}>Release Notes</th>
                <th className={styles.col4}>Date</th>
                <th className={styles.col5}>
                  {type === 'source' ? 'Source' : type === 'slim' ? 'Slim Binary' : 'Binary'}
                </th>
              </tr>
            </thead>
            <tbody>
              {releases.map((release, index) => (
                <DownloadRow
                  key={index}
                  release={release}
                  type={type}
                  preferredMirror={preferredMirror}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const currentReleases = activeTab === 'ignite3' ? ignite3Releases : ignite2Releases;

  return (
    <div className={styles.tabWrap}>
      <div className={styles.tabLinks}>
        <button
          className={`${styles.tabButton} ${activeTab === 'ignite3' ? styles.active : ''}`}
          onClick={() => setActiveTab('ignite3')}>
          Ignite 3
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'ignite2' ? styles.active : ''}`}
          onClick={() => setActiveTab('ignite2')}>
          Ignite 2
        </button>
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tableWrap}>
          <div className={styles.tableScroller}>
            <table className={styles.downloadTable}>
              <thead>
                <tr>
                  <th className={styles.col1}>Version</th>
                  <th className={styles.col2}>Docs</th>
                  <th className={styles.col3}>Release Notes</th>
                  <th className={styles.col4}>Date</th>
                  <th className={styles.col5}>
                    {type === 'source' ? 'Source' : type === 'slim' ? 'Slim Binary' : 'Binary'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentReleases?.map((release, index) => (
                  <DownloadRow
                    key={index}
                    release={release}
                    type={type}
                    preferredMirror={preferredMirror}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
