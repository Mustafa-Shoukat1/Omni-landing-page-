
import React from 'react';

interface Props {
  isDarkMode: boolean;
  onCtaClick?: () => void;
}

const FinalCTA: React.FC<Props> = ({ isDarkMode, onCtaClick }) => {
  const bgColor = isDarkMode ? 'bg-[#050505]' : 'bg-white';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const bgAccent = isDarkMode ? 'bg-[#00D1FF]' : 'bg-[#2563EB]';

  return (
    <section className={`py-48 relative overflow-hidden ${bgColor} theme-transition`}>
      {/* Intense Background Glow */}
      <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'bg-accent/5' : 'bg-blue-600/5'} -z-20`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] ${isDarkMode ? 'bg-accent/15' : 'bg-blue-600/10'} blur-[250px] rounded-full -z-10 animate-pulse`}></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className={`inline-flex items-center space-x-3 px-6 py-2 mb-12 border-2 ${isDarkMode ? 'border-accent/30 bg-accent/5' : 'border-blue-200 bg-blue-50'} rounded-full glass-card`}>
           <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
           <span className={`${accentColor} text-[11px] font-black tracking-[0.5em] uppercase`}>Territorial Lockdown Active</span>
        </div>
        
        <h2 className={`text-6xl md:text-[12rem] font-black mb-16 max-w-[90rem] mx-auto leading-[0.8] tracking-tighter ${headingColor}`}>
          SECURE YOUR <br /><span className={`${accentColor} italic`}>DOMAIN.</span>
        </h2>
        
        <p className={`text-2xl md:text-5xl ${textColor} mb-24 max-w-5xl mx-auto leading-tight font-black tracking-tighter`}>
          The top 1% are building infrastructure. The rest are building hope. <br className="hidden md:block" /> <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>Which one are you?</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16">
          <button 
            onClick={onCtaClick}
            className={`w-full sm:w-auto ${bgAccent} ${isDarkMode ? 'text-black shadow-accent/50' : 'text-white shadow-blue-600/50'} px-24 py-12 rounded-[3rem] text-4xl font-black shadow-2xl hover:scale-110 active:scale-95 transition-all uppercase tracking-[0.3em] shine-effect border-4 border-white/20`}
          >
            Apply Now
          </button>
        </div>
        
        <div className="mt-32 flex flex-col items-center justify-center space-y-10">
           <div className="flex -space-x-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-20 h-20 rounded-full border-4 ${isDarkMode ? 'border-[#050505]' : 'border-white'} bg-gray-800 shadow-2xl overflow-hidden animate-float`} style={{ animationDelay: `${i * 0.4}s` }}>
                  <img src={`https://i.pravatar.cc/200?img=${i + 45}`} alt={`Agent testimonial ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className={`w-20 h-20 rounded-full border-4 ${isDarkMode ? 'border-[#050505]' : 'border-white'} ${bgAccent} flex items-center justify-center shadow-2xl z-10 animate-pulse`}>
                 <span className={`${isDarkMode ? 'text-black' : 'text-white'} font-black text-xl`}>+2k</span>
              </div>
           </div>
           <p className={`text-xs font-black ${textColor} uppercase tracking-[0.5em] opacity-60`}>
             Join <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>2,481 Agents</span> Automating Their Future
           </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
