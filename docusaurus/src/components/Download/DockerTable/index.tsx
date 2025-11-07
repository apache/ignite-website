import React from 'react';
import {DockerImage} from '@site/src/data/downloads';
import {trackDownload} from '@site/src/components/Download/downloadUtils';
import styles from '../DownloadTable/styles.module.css';
import pageStyles from '@site/src/pages/download.module.css';

interface DockerTableProps {
  images: DockerImage[];
}

function handleDockerClick(trackingLabel: string) {
  trackDownload('docker_repo_download', trackingLabel);
}

export default function DockerTable({images}: DockerTableProps): JSX.Element {
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableScroller}>
        <table className={`${styles.downloadTable} ${pageStyles.downtableDocker}`}>
          <thead>
            <tr>
              <th className={styles.col2}>Name</th>
              <th className={styles.col1}>Docs</th>
              <th className={styles.col3}>Date</th>
              <th className={styles.col5}>URL</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => (
              <tr key={index}>
                <td>{image.name}</td>
                <td>
                  {image.guide && (
                    <a
                      href={image.guide}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleDockerClick(image.links[0]?.trackingLabel || 'docker_download')}>
                      guide
                    </a>
                  )}
                </td>
                <td>{image.date}</td>
                <td>
                  {image.links.map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <a
                        className={styles.sourceLink}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleDockerClick(link.trackingLabel)}>
                        {link.region ? `${link.url} (${link.region})` : link.url}
                      </a>
                      {linkIndex < image.links.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
