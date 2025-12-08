import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  return {
    formData,
    isLoading,
    submitStatus,
    errorMessage,
    handleSubmit,
    handleChange,
  };
}
