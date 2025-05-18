import styles from '../components/ImageBox.module.css';
import soundwave from '../assets/SoundWave.png';

const ImageBox = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src={soundwave} alt="Sound Wave" className={styles.image} />
    </div>
  );
};

export default ImageBox;