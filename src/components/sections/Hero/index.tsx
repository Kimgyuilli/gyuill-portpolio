import { LeftColumn } from './LeftColumn';
import { CenterColumn } from './CenterColumn';
import { RightColumn } from './RightColumn';
import styles from './styles.module.css';

export function Hero() {
  return (
    <section id="home" className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-grid']}>
          <LeftColumn />
          <CenterColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
}
