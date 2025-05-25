import styles from '../components/Navbar.module.css';
export default function Navbar({ username }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>SoundAPI</a>

        <div className={styles.navLinks}>
          <a href="/vision" className={styles.link}>Go to Vision</a>
          <a
            href="https://api.powersurge.dk/api/routes"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View API Endpoints
          </a>
          <a href="/filelist" className={styles.link}>File List</a>
          <a href="/login" className={styles.link}>Login</a>
          <a href="/register" className={styles.link}>Register</a>
          {username && (
            <span className={styles.welcome}>Welcome, {username}</span>
          )}
        </div>
      </div>
    </nav>
  );
}