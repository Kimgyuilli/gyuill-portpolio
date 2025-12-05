import { Achievement } from '@/types';
import { ExternalLink } from 'lucide-react';
import styles from './styles.module.css';

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const CardContent = (
    <div className={styles.content}>
      <div className={styles['icon-wrapper']}>{achievement.icon}</div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.title}>{achievement.title}</h3>
          {achievement.link && (
            <div className={styles['external-icon']}>
              <ExternalLink size={16} />
            </div>
          )}
        </div>
        <p className={styles.issuer}>{achievement.issuer}</p>
        <p className={styles.date}>{achievement.date}</p>
        {achievement.description && <p className={styles.description}>{achievement.description}</p>}
      </div>
    </div>
  );

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['achievement-card']} ${styles['achievement-card-link']}`}
      >
        {CardContent}
      </a>
    );
  }

  return <div className={styles['achievement-card']}>{CardContent}</div>;
}
