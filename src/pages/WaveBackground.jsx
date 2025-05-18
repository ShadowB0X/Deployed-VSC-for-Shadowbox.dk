import '../components/WaveBackground.css'; // We'll use global CSS for SVG animation

const WaveBackground = () => {
  return (
    <div className="waveWrapper">
      <svg
        className="wave"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
          fill="rgba(0, 200, 255, 0.15)"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;