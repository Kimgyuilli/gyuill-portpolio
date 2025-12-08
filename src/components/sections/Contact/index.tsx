import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { ContactInfoItem } from '@/components/common/ContactInfoItem';
import { SocialLink } from '@/components/common/SocialLink';
import { FadeInSection } from '@/components/common/FadeInSection';
import { contactInfoData, socialLinksData } from '@/data/contact';
import { CONTACT_ICONS, SOCIAL_ICONS } from '@/constants/contactIcons';
import { mapWithIcons } from '@/utils/iconMapper';
import styles from './styles.module.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactInfo = useMemo(
    () =>
      mapWithIcons(contactInfoData, (info) => info.label, CONTACT_ICONS).map((item) => ({
        ...item,
        icon: <item.icon size={20} />,
      })),
    []
  );

  const socialLinks = useMemo(
    () =>
      mapWithIcons(socialLinksData, (link) => link.label, SOCIAL_ICONS).map((item) => ({
        ...item,
        icon: <item.icon size={20} />,
      })),
    []
  );

  const validateForm = (): boolean => {
    // 이름 검증
    if (formData.name.trim().length < 2) {
      setErrorMessage('이름은 최소 2글자 이상이어야 합니다.');
      return false;
    }

    // 이메일 검증 (간단한 정규식)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('올바른 이메일 주소를 입력해주세요.');
      return false;
    }

    // 메시지 검증
    if (formData.message.trim().length < 10) {
      setErrorMessage('메시지는 최소 10글자 이상이어야 합니다.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 상태 초기화
    setSubmitStatus('idle');
    setErrorMessage('');

    // 폼 검증
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    // 환경변수 확인
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      setErrorMessage('EmailJS 설정이 완료되지 않았습니다. .env.local 파일을 확인해주세요.');
      setSubmitStatus('error');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS로 이메일 전송
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // 성공 처리
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // 입력 중에 에러 메시지 숨기기
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className={styles['contact-section']}>
      <div className={styles.container}>
        <FadeInSection>
          <div className={styles.header}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>
              프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락해주세요.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className={styles['content-grid']}>
            {/* Contact Info */}
            <div className={styles['contact-info-section']}>
              <h3 className={styles['section-title']}>연락처 정보</h3>

              <div className={styles['contact-list']}>
                {contactInfo.map((info) => (
                  <ContactInfoItem key={info.label} info={info} />
                ))}
              </div>

              <div>
                <h4 className={styles['social-title']}>소셜 미디어</h4>
                <div className={styles['social-links']}>
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} link={link} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles['form-section']}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles['form-group']}>
                  <label htmlFor="name" className={styles.label}>
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="홍길동"
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="email" className={styles.label}>
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="message" className={styles.label}>
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="메시지를 입력하세요..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles['submit-button']}
                  disabled={isLoading || submitStatus === 'success'}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className={styles['spinner']} />
                      <span>전송 중...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      <span>전송 완료!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>메시지 보내기</span>
                    </>
                  )}
                </button>

                {/* 상태 메시지 */}
                {submitStatus === 'success' && (
                  <div className={styles['status-message'] + ' ' + styles['success']}>
                    <CheckCircle size={16} />
                    <span>메시지가 성공적으로 전송되었습니다!</span>
                  </div>
                )}

                {submitStatus === 'error' && errorMessage && (
                  <div className={styles['status-message'] + ' ' + styles['error']}>
                    <XCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </FadeInSection>

        {/* Footer */}
        <div className={styles.footer}>
          <p>© 2025 IT Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
