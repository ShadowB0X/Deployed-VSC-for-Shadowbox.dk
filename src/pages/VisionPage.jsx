import styles from '../components/VisionPage.module.css';

export default function VisionPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎧 Vision</h1>

      <p className={styles.text}>
        <strong>SoundAPI</strong> er bygget med én klar mission: <br />
        <em>At forstå lyd på et dybere, mere intelligent niveau.</em>
      </p>

      <p className={styles.text}>
        Vi tager lydfiler og analyserer deres strukturelle mønstre, lydsignaturer,
        frekvenser og BPM (beats per minute) for at udtrække meningsfuld information
        fra selve lydens kerne.
      </p>

      <div className={styles.list}>
        <h2 className={styles.subheading}>🎯 Hvad handler det om?</h2>
        <ul>
          <li>📡 Læse og fortolke lydfiler</li>
          <li>📊 Identificere og analysere lydmønstre og bølgeformer</li>
          <li>🎵 Bestemme tempo (BPM) og frekvensprofiler</li>
          <li>🧠 Gøre lyddata brugbar og tilgængelig for udviklere, kunstnere og AI-systemer</li>
        </ul>
      </div>

      <p className={styles.text}>
        Vi bygger bro mellem digital lyd og intelligent analyse, så enhver lyd
        kan blive forstået, visualiseret og anvendt med præcision og formål.
      </p>
    </div>
  );
}