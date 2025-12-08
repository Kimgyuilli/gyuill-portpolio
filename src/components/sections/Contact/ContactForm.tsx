import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useContactForm } from './useContactForm';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { formData, isLoading, submitStatus, errorMessage, handleSubmit, handleChange } =
    useContactForm();

  return (
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
  );
}
