import '../components/WaveBackground.css'; // Global CSS for SVG animation

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
          fill="rgba(0, 255, 255, 0.25)"
          style={{
            filter: 'drop-shadow(0 -4px 12px rgba(0, 255, 255, 0.6))',
            transition: 'all 0.5s ease',
          }}
        />
      </svg>
    </div>
  );
};

export default WaveBackground;