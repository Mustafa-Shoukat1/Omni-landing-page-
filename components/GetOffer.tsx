
import React, { useState } from 'react';

interface Props {
  isDarkMode: boolean;
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
    formData.append('access_key', 'YOUR_WEB3FORMS_KEY'); // Replace with actual key
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
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
                  <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Agent Identifier</label>
                  <input required type="text" name="name" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} placeholder="Full Name" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Communication</label>
                  <input required type="email" name="email" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} placeholder="Email Address" />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Phone Number</label>
                <input required type="tel" name="phone" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Target Market</label>
                <input required type="text" name="market" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold placeholder-gray-700 shadow-inner text-base`} placeholder="City, State or Zip Code" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <label className={`block text-[10px] font-black uppercase tracking-[0.3em] ${textColor}`}>Current Yield</label>
                <select name="deals" className={`w-full ${isDarkMode ? 'bg-black border-white/5 text-white focus:border-[#00D1FF]/50' : 'bg-slate-50 border-blue-100 text-slate-900 focus:border-[#2563EB]/50'} border-2 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:outline-none transition-all font-bold shadow-inner text-base`}>
                  <option>0-2 Deals / Month</option>
                  <option>3-5 Deals / Month</option>
                  <option>5-10 Deals / Month</option>
                  <option>10+ Deals / Month</option>
                </select>
              </div>
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
