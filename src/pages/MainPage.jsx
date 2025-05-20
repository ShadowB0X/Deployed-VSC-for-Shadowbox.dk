import { useState } from 'react';
import styles from '../components/MainPage.module.css';
import WaveBackground from './WaveBackground';
import ImageBox from './imageBox';
import IntroPopup from './IntroPopup'; // 👈 Add this

export default function MainPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={styles.container}>
      {showIntro && <IntroPopup onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <h1 className={styles.title}>Welcome to SoundAPI</h1>
          <p className={styles.text}>
            Unlock the power of intelligent audio analysis — extract meaning from sound, frequency, and rhythm using SoundAPI.
          </p>
          <p className={styles.text}>
            SoundAPI is designed to help developers, artists, and AI systems understand audio at a deeper level.
          </p>
          <p className={styles.text}>
            Learn about the visions, or click the button to explore our API endpoints.
          </p>

          <ImageBox />

          <a href="/vision" className={styles.button}>
            Go to Vision
          </a>
          <a
            href="https://api.powersurge.dk/api/routes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View API Endpoints
          </a>

          <WaveBackground /> {/* 🌊 Still appears as background */}
        </>
      )}
    </div>
  );
}