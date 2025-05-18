import styles from '../components/MainPage.module.css';
import WaveBackground from './WaveBackground';
import ImageBox from './imageBox';


export default function MainPage() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Welcome to SoundAPI</h1>
      <p className={styles.text}>
        Unlock the power of intelligent audio analysis — extract meaning from sound, frequency, and rhythm using SoundAPI.
        learn about the visions, or click the button to explore our API endpoints.
      </p>

      <ImageBox />
      <a
      href="/vision"
      className={styles.button}
      >
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
      <WaveBackground /> {/* 🌊 Add the SVG wave */}
    </div>
  );
}