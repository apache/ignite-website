import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

interface Mirror {
  url: string;
  isBackup?: boolean;
}

interface MirrorSelectorProps {
  onMirrorChange?: (mirror: string) => void;
}

export default function MirrorSelector({onMirrorChange}: MirrorSelectorProps): JSX.Element {
  const [mirrors, setMirrors] = useState<Mirror[]>([]);
  const [selectedMirror, setSelectedMirror] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch available mirrors from Apache infrastructure
    // This mimics the behavior of the old download.cgi system
    const fetchMirrors = async () => {
      try {
        // The Apache mirror system provides a CGI script that returns mirror data
        // For now, we'll use the preferred mirror CDN as default
        const defaultMirrors: Mirror[] = [
          {url: 'https://dlcdn.apache.org/ignite/', isBackup: false},
          {url: 'https://downloads.apache.org/ignite/', isBackup: true},
          {url: 'https://archive.apache.org/dist/ignite/', isBackup: true},
        ];

        setMirrors(defaultMirrors);
        setSelectedMirror(defaultMirrors[0].url);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch mirrors:', error);
        setLoading(false);
      }
    };

    fetchMirrors();
  }, []);

  const handleMirrorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMirror = event.target.value;
    setSelectedMirror(newMirror);
    if (onMirrorChange) {
      onMirrorChange(newMirror);
    }
  };

  if (loading) {
    return (
      <div className={styles.mirrorSelector}>
        <div className={styles.label}>Loading mirrors...</div>
      </div>
    );
  }

  return (
    <form className={styles.mirrorSelector}>
      <div className={styles.label}>Selected mirror:</div>
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={selectedMirror}
          onChange={handleMirrorChange}
          aria-label="Select download mirror">
          {mirrors.map((mirror) => (
            <option key={mirror.url} value={mirror.url}>
              {mirror.url}
              {mirror.isBackup ? ' (backup)' : ''}
            </option>
          ))}
        </select>
        <button
          type="button"
          className={styles.changeButton}
          onClick={() => {
            if (onMirrorChange) {
              onMirrorChange(selectedMirror);
            }
          }}>
          Change
        </button>
      </div>
    </form>
  );
}
