import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (실제로는 백엔드 API 호출)
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-slate-100">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락해주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-slate-100">연락처 정보</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p>이메일</p>
                  <a href="mailto:example@email.com" className="text-slate-400 hover:text-emerald-400">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p>전화번호</p>
                  <a href="tel:+821012345678" className="text-slate-400 hover:text-emerald-400">
                    +82 10-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p>위치</p>
                  <p className="text-slate-400">서울, 대한민국</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-slate-100">소셜 미디어</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-slate-300">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-slate-300">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-slate-300">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="메시지를 입력하세요..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>메시지 보내기</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© 2025 IT Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
