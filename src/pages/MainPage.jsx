import styles from '../MainPage.module.css'

export default function MainPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to SoundAPI</h1>
      <p className={styles.text}>
        Navigate to /vision to learn about the vision, or /endpoints to explore API endpoints.
      </p>
    </div>
  )
}