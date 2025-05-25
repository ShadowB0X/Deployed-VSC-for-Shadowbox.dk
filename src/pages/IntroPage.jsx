import '../components/IntroPage.module.css';

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
          <p>Analyze audio with elegance, precision, and rhythm.</p>
        </div>
      </div>
    </div>
  );
}