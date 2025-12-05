import type { SkillCategory } from '@/types';
import styles from './styles.module.css';

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className={styles['skill-card']}>
      <div className={styles.icon}>{category.icon}</div>
      <h3 className={styles.title}>{category.title}</h3>
      <div className={styles['skills-list']}>
        {category.skills.map((skill) => (
          <span key={skill} className={styles['skill-tag']}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
