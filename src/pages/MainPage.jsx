import { useState } from 'react';
import styles from '../components/MainPage.module.css';
import WaveBackground from './WaveBackground';
import ImageBox from './imageBox';
import IntroPopup from './IntroPopup';
<<<<<<< HEAD
import Navbar from './Navbar'; // ✅ Top navigation
=======
import Navbar from './Navbar'; // ✅ new nav

>>>>>>> 2a4a1d56d130d3932929832ea88cdfbb79190b78

export default function MainPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={styles.container}>
      {showIntro ? (
        <IntroPopup onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />

          {/* Main content with spacing under sticky navbar */}
          <main className={styles.contentWrapper}>
            <div className={styles.content}>
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
            </div>
          </main>

          <WaveBackground />
        </>
      )}
    </div>
  );
}