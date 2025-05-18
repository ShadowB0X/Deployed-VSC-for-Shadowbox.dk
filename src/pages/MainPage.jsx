import styles from '../components/MainPage.module.css'

export default function MainPage() {
  return (
    <div className={styles.background}>
      <img src="assets/SoundWave.png" alt="Digital Art" width="300" height="300"></img>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
      <h1 className={styles.title}>Welcome to SoundAPI</h1>
      <p className={styles.text}>
        Navigate to /vision to learn about the vision, or click the button to explore API endpoints.
      </p>
      
      <a
        href="https://api.powersurge.dk/api/routes"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        View API Endpoints
      </a>
      </div>
    </div>
  )
}