import { AchievementCard } from '@/components/common/AchievementCard';
import { FadeInSection } from '@/components/common/FadeInSection';
import { achievements } from '@/data/achievements';
import { ACHIEVEMENT_ICONS, DEFAULT_ACHIEVEMENT_ICON } from '@/constants/achievementIcons';
import styles from './styles.module.css';

export function Achievements() {
  return (
    <section id="achievements" className={styles['achievements-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Achievements & Certifications</h2>
            <p className={styles.description}>전문성을 인정받은 자격증과 수상 경력입니다.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles.grid}>
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={{
                  ...achievement,
                  icon: ACHIEVEMENT_ICONS[achievement.title] || DEFAULT_ACHIEVEMENT_ICON,
                }}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
