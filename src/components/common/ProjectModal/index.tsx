import { X, Github, ExternalLink, Calendar, Users, Briefcase } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '@/types';
import { ImageWithFallback } from '../ImageWithFallback';
import styles from './styles.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // 모달 배경 클릭 시 닫기
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className={styles['close-button']} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* 헤더 이미지 */}
        <div className={styles['image-container']}>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        </div>

        {/* 컨텐츠 */}
        <div className={styles.content}>
          {/* 제목과 카테고리 */}
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <span className={styles.category}>{project.category}</span>
          </div>

          {/* 프로젝트 정보 */}
          {(project.duration || project.teamSize || project.role) && (
            <div className={styles['info-grid']}>
              {project.duration && (
                <div className={styles['info-item']}>
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.teamSize && (
                <div className={styles['info-item']}>
                  <Users size={16} />
                  <span>{project.teamSize}</span>
                </div>
              )}
              {project.role && (
                <div className={styles['info-item']}>
                  <Briefcase size={16} />
                  <span>{project.role}</span>
                </div>
              )}
            </div>
          )}

          {/* 기술 스택 태그 */}
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {/* 상세 설명 */}
          {project.detailedDescription && (
            <div className={styles.section}>
              <h3 className={styles['section-title']}>프로젝트 개요</h3>
              <p className={styles.description}>{project.detailedDescription}</p>
            </div>
          )}

          {/* 주요 기능 */}
          {project.features && project.features.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles['section-title']}>주요 기능</h3>
              <ul className={styles.list}>
                {project.features.map((feature) => (
                  <li key={feature} className={styles['list-item']}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술 스택 */}
          {project.techStack && (
            <div className={styles.section}>
              <h3 className={styles['section-title']}>기술 스택</h3>
              <div className={styles['tech-stack']}>
                {project.techStack.frontend && (
                  <div className={styles['tech-category']}>
                    <h4 className={styles['tech-title']}>Frontend</h4>
                    <div className={styles['tech-tags']}>
                      {project.techStack.frontend.map((tech) => (
                        <span key={tech} className={styles['tech-tag']}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.backend && (
                  <div className={styles['tech-category']}>
                    <h4 className={styles['tech-title']}>Backend</h4>
                    <div className={styles['tech-tags']}>
                      {project.techStack.backend.map((tech) => (
                        <span key={tech} className={styles['tech-tag']}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.database && (
                  <div className={styles['tech-category']}>
                    <h4 className={styles['tech-title']}>Database</h4>
                    <div className={styles['tech-tags']}>
                      {project.techStack.database.map((tech) => (
                        <span key={tech} className={styles['tech-tag']}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.techStack.deployment && (
                  <div className={styles['tech-category']}>
                    <h4 className={styles['tech-title']}>Deployment</h4>
                    <div className={styles['tech-tags']}>
                      {project.techStack.deployment.map((tech) => (
                        <span key={tech} className={styles['tech-tag']}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 기술적 과제 */}
          {project.challenges && project.challenges.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles['section-title']}>기술적 과제 및 해결</h3>
              <ul className={styles.list}>
                {project.challenges.map((challenge) => (
                  <li key={challenge} className={styles['list-item']}>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 성과 */}
          {project.outcome && (
            <div className={styles.section}>
              <h3 className={styles['section-title']}>성과</h3>
              <p className={styles.description}>{project.outcome}</p>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className={styles.actions}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['action-button']}
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['action-button']}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
