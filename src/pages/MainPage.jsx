import styles from '../components/MainPage.module.css';
import WaveBackground from './WaveBackground';
import ImageBox from './imageBox';


export default function MainPage() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Welcome to SoundAPI</h1>
      <p className={styles.text}>
        Navigate to /vision to learn about the vision, or click the button to explore API endpoints.
      </p>

      <ImageBox />

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