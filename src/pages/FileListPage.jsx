import { useEffect, useState } from 'react';
import styles from '../components/FileList.module.css';

export default function FileList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.powersurge.dk/api/audio/result');
      const data = await res.json();
      setFiles(data.results || []);
    } catch (err) {
      console.error('❌ Fejl i fetch:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this file?');
    if (!confirmed) return;

    try {
      const res = await fetch(`https://api.powersurge.dk/api/audio/delete/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setFiles(prev => prev.filter(file => file.id !== id));
      } else {
        alert('❌ Delete failed');
      }
    } catch (err) {
      console.error('❌ Delete error:', err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📂 Audio Files</h2>
      {loading ? (
        <p className={styles.loading}>Loading files...</p>
      ) : (
        <ul className={styles.list}>
          {files.length === 0 ? (
            <p className={styles.loading}>No audio files found yet.</p>
          ) : (
            files.map(f => (
              <li key={f.id} className={styles.item}>
                <div className={styles.fileInfo}>
                  <span className={styles.filename}>
                    🎵 {f.audioFile?.filename || 'Unknown file'}
                  </span>
                  <span className={styles.bpm}>
                    BPM: {f.audioFile?.bpm?.toFixed(2) || 'N/A'}
                  </span>
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(f.id)}
                  title="Delete file"
                >
                  🗑️
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}