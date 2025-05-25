import styles from '../components/Navbar.module.css';

export default function Navbar() {
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
          <a href="/files" className={styles.link}>Audio files</a> {/* ✅ NEW LINK */}
          <a href="/login" className={styles.link}>Login</a>
          <a href="/register" className={styles.link}>Register</a>
        </div>
      </div>
    </nav>
  );
}