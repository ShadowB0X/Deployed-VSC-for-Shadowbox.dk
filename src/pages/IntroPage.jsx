import '../components/IntroPage.module.css'; // We'll use plain CSS for a single-file setup

export default function IntroPage() {
  return (
    <div className="intro-container">
      <div className="intro-overlay">
        <nav className="intro-navbar">
          <div className="intro-logo">SoundAPI</div>
          <div className="intro-navLinks">
            <a href="/docs">Docs</a>
            <a href="/contact">Contact</a>
            <a href="/login" className="intro-getStarted">Get Started</a>
          </div>
        </nav>

        <div className="intro-hero">
          <h1>Welcome to <span>SoundAPI</span></h1>
          <p>Experience the power of audio<br />with precision and beauty</p>
        </div>
      </div>
    </div>
  );
}