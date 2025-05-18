import styles from '../components/EndPointPage.module.css'

export default function EndPointPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📡 API Endpoints</h1>
      <p className={styles.text}>
        Documentation and details for available routes and how to interact with the SoundAPI.
      </p>
    </div>
  )
}