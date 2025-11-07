import React, {useState, useEffect} from 'react';
import styles from '@site/src/pages/download.module.css';

interface Mirror {
  url: string;
  isBackup?: boolean;
}

interface MirrorSelectorProps {
  onMirrorChange: (mirror: string) => void;
}

export default function MirrorSelector({onMirrorChange}: MirrorSelectorProps): JSX.Element {
  const [mirrors] = useState<Mirror[]>([
    {url: 'https://dlcdn.apache.org', isBackup: false},
    {url: 'https://downloads.apache.org', isBackup: true},
    {url: 'https://archive.apache.org/dist', isBackup: true},
  ]);

  const [selectedMirror, setSelectedMirror] = useState<string>(mirrors[0].url);
  const [hasChanged, setHasChanged] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMirror(event.target.value);
    setHasChanged(true);
  };

  const handleChangeClick = () => {
    onMirrorChange(selectedMirror);
    setHasChanged(false);
  };

  return (
    <div className={styles.downloadChoser}>
      <div className={styles.downloadChoserLabel}>Selected mirror:</div>
      <div className={styles.downloadChoserSelect}>
        <select value={selectedMirror} onChange={handleSelectChange} aria-label="Select download mirror">
          {mirrors.map((mirror) => (
            <option key={mirror.url} value={mirror.url}>
              {mirror.url}
              {mirror.isBackup ? ' (backup)' : ''}
            </option>
          ))}
        </select>
        <button
          type="button"
          className={`${styles.downloadChoserButton} ${hasChanged ? styles.downloadChoserButtonBlue : ''}`}
          onClick={handleChangeClick}
          disabled={!hasChanged}>
          Change
        </button>
      </div>
    </div>
  );
}
