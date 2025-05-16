import styles from './VisionPage.module.css'

export default function VisionPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎧 Vision</h1>
      <p className={styles.text}>
        SoundAPI analyzes soundwaves, frequencies, and BPMs to extract meaning from audio data.
      </p>
    </div>
  )
}