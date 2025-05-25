import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../components/IntroPopup.module.css';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function WaveParticles() {
  const count = 1000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = Math.sin(x * 2) * 2 + (Math.random() - 0.5);
    const z = (Math.random() - 0.5) * 10;
    positions.set([x, y, z], i * 3);
  }

  return (
    <Points positions={positions}>
      <PointMaterial
        color="#00d4ff"
        size={0.1}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function IntroPopup({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* 🌀 3D Canvas Wave Background */}
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <WaveParticles />
          </Canvas>

          {/* 🧠 Overlay Text */}
          <motion.h1
            className={styles.text}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            Welcome to SoundAPI
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

IntroPopup.propTypes = {
  onFinish: PropTypes.func.isRequired,
};