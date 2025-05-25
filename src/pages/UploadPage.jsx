import { useState } from 'react';
import styles from '../components/UploadPage.module.css';
import WaveBackground from './WaveBackground';

export default function UploadPage({ token }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('audio', file);

    try {
      const res = await fetch('https://api.powersurge.dk/api//audio/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (res.ok) {
        setMessage("✅ Upload successful!");
      } else {
        setMessage("❌ Upload failed.");
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <WaveBackground />

      <form onSubmit={handleUpload} className={styles.uploadBox}>
        <h2>Upload Audio</h2>
        <input
          type="file"
          className={styles.fileInput}
          onChange={e => setFile(e.target.files[0])}
        />
        <button type="submit" className={styles.button}>Upload</button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
}