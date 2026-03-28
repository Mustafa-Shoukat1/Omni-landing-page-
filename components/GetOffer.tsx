
import React, { useState } from 'react';

interface Props {
  isDarkMode: boolean;
}

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  website: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const PHONE_ALLOWED_REGEX = /^[0-9\s()\-+]+$/;

function validateLeadPayload(payload: LeadPayload): string | null {
  if (payload.website) {
    return 'Invalid submission.';
  }

  if (!payload.name || !payload.email || !payload.phone) {
    return 'Please fill all required fields.';
  }

  if (payload.name.length < 2 || payload.name.length > 80) {
    return 'Name must be between 2 and 80 characters.';
  }

  if (!NAME_REGEX.test(payload.name)) {
    return 'Name contains invalid characters.';
  }

  if (payload.email.length > 254 || !EMAIL_REGEX.test(payload.email)) {
    return 'Please enter a valid email address.';
  }

  if (payload.phone.length < 7 || payload.phone.length > 20 || !PHONE_ALLOWED_REGEX.test(payload.phone)) {
    return 'Please enter a valid phone number.';
  }

  const phoneDigits = payload.phone.replace(/\D/g, '');
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return 'Phone number must include 7 to 15 digits.';
  }

  return null;
}

const GetOffer: React.FC<Props> = ({ isDarkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const bgColor = isDarkMode ? 'bg-[#050505]' : 'bg-[#F8FAFC]';
  const cardBg = isDarkMode ? 'bg-white/[0.02]' : 'bg-white';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-blue-100';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const bgAccent = isDarkMode ? 'bg-[#00D1FF]' : 'bg-[#2563EB]';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const payload: LeadPayload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim().toLowerCase(),
      phone: String(formData.get('phone') || '').trim(),
      website: String(formData.get('website') || '').trim()
    };

    const validationError = validateLeadPayload(payload);
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json().catch(() => ({}));
      
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        const detailError = data?.detail?.error;
        const message = data?.message;
        setError(detailError || message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className={`py-40 ${bgColor} text-center min-h-screen flex items-center`}>
        <div className="container mx-auto px-6">
          <div className={`${cardBg} max-w-3xl mx-auto border ${borderColor} p-16 rounded-[4rem] shadow-2xl glass-card`}>
            <div className={`${bgAccent} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_var(--accent-glow)] shine-effect`}>
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-5xl font-black mb-6 ${headingColor} tracking-tighter`}>SYSTEMS INITIALIZED</h2>
            <p className={`text-2xl ${textColor} font-medium leading-relaxed`}>Your territorial application is being processed by our central node. We will notify you of clearance within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-32 ${bgColor} min-h-screen theme-transition relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 max-w-7xl mx-auto items-center">
          <div>
            <div className={`inline-flex items-center space-x-3 px-4 py-2 mb-10 border ${borderColor} rounded-xl glass-card`}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className={`${accentColor} text-[10px] font-black tracking-[0.4em] uppercase`}>Restricted Access</span>
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight ${headingColor}`}>
              Reserve <br /><span className={accentColor}>Your Rail</span>
            </h1>
            <p className={`text-base sm:text-lg md:text-xl ${textColor} mb-8 leading-relaxed font-medium`}>
              Territorial exclusivity is non-negotiable. Once a market node is occupied, all growth infrastructure is locked to that partner.
            </p>
            
            <div className="space-y-10">
              {[
                { title: "2-4 Deals Guaranteed", desc: "System performance is backed by our yield contract." },
                { title: "Full System Deployment", desc: "We build your rail in 7 days or less." },
                { title: "Exclusive Territories", desc: "One top producer per market. Zero overlap." }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-white/5' : 'bg-blue-50'} border ${borderColor} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className={`w-2 h-2 rounded-full ${bgAccent}`}></div>
                  </div>
                  <div>
                    <span className={`text-base sm:text-lg font-bold ${headingColor} block`}>{item.title}</span>
                    <span className={`text-sm ${textColor} font-medium`}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${cardBg} border-2 ${borderColor} p-6 sm:p-10 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl glass-card relative`}>
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[10px] font-black text-gray-700 tracking-[0.5em] uppercase opacity-40">Form V.7.01</div>
            <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${headingColor}`}>Clearance Application</h3>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Full Name</label>
                  <input required type="text" name="name" minLength={2} maxLength={80} autoComplete="name" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} placeholder="Full Name" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    maxLength={254}
                    autoComplete="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                    className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} 
                    placeholder="Email Address" 
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  name="phone" 
                  minLength={7}
                  maxLength={20}
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9\s\-\(\)\+]{7,20}"
                  title="Please enter a valid phone number"
                  className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} 
                  placeholder="(555) 123-4567" 
                />
              </div>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${bgAccent} ${isDarkMode ? 'text-black' : 'text-white'} py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:scale-105 active:scale-95 transition-all mt-2 sm:mt-4 shine-effect disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]`}
              >
                {isSubmitting ? 'Processing...' : 'Request Clearance'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetOffer;
