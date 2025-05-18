import { useEffect, useRef } from 'react';
import '../components/StarfieldCanvas.module.css';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const numStars = 200;
    stars.current = [];

    for (let i = 0; i < numStars; i++) {
      stars.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width
      });
    }

    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      for (let star of stars.current) {
        star.z -= 1;
        if (star.z <= 0) star.z = width;

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px < width && py >= 0 && py < height) {
          const size = (1 - star.z / width) * 2;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, 2 * Math.PI);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
};

export default StarfieldCanvas;