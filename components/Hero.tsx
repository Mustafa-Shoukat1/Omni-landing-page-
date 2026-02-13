/**
 * Hero Component
 * 
 * Main landing section with:
 * - Animated headline and tagline
 * - YouTube video player with thumbnail preview
 * - Primary CTA button ("Get Access Now")
 * - Theme-aware styling (dark/light mode)
 * 
 * @component
 */

import React, { useState, useEffect } from 'react';

interface HeroProps {
  isDarkMode: boolean;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, onCtaClick }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    // Robust origin detection for iframe handshake
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const bgAccent = isDarkMode ? 'bg-[#00D1FF]' : 'bg-[#2563EB]';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const bgColor = isDarkMode ? '' : 'bg-white';

  return (
    <section className={`relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden rail-pattern ${bgColor}`}>
      {/* Dynamic Background Elements */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] ${isDarkMode ? 'bg-accent/20' : 'bg-blue-500/10'} blur-[120px] rounded-full -z-10 animate-pulse`}></div>
      <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] ${isDarkMode ? 'bg-purple-600/15' : 'bg-indigo-500/10'} blur-[120px] rounded-full -z-10 animate-float`}></div>
      
      <div className="container mx-auto px-6 text-center">
        {/* Social Proof Ticker */}
        <div className={`inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 mb-8 border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-blue-100 bg-blue-50'} rounded-full glass-card shadow-lg`}>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 ${isDarkMode ? 'border-black' : 'border-white'} bg-gray-600 shadow-md overflow-hidden`}>
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Satisfied customer ${i}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="h-4 w-px bg-gray-700/50 hidden sm:block"></div>
          <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-[10px] sm:text-xs font-semibold tracking-wide`}>
            Live Yield: <span className={accentColor}>$124,502,192</span> Generated
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
        </div>
        
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl mx-auto leading-tight ${headingColor} tracking-tight`}>
          Own Your <br /><span className={`${accentColor}`}>Market Rail</span>
        </h1>
        
        <p className={`text-base sm:text-lg md:text-xl ${textColor} mb-10 max-w-2xl mx-auto font-medium leading-relaxed`}>
          Stop chasing leads. Install the infrastructure that <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>hunts them for you</span> 24 hours a day, at scale
        </p>
        
        {/* Video Container with Crystalline Border */}
        <div className="relative group max-w-4xl mx-auto mb-12 sm:mb-16" style={{ animationDelay: '0.5s' }}>
          <div className={`absolute -inset-1 bg-gradient-to-r ${isDarkMode ? 'from-accent/40 via-purple-600/30 to-accent/40' : 'from-blue-400/20 via-indigo-200 to-blue-400/20'} rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
          
          <div className={`relative ${isDarkMode ? 'bg-[#050505]' : 'bg-white'} rounded-[2.5rem] aspect-video border ${isDarkMode ? 'border-white/20' : 'border-blue-100'} shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden glass-card`}>
            {!showVideo ? (
              <>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src="https://img.youtube.com/vi/Zs60_ssuN6Y/maxresdefault.jpg" 
                  alt="High Tech Real Estate" 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isDarkMode ? 'opacity-50 grayscale' : 'opacity-80'}`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <div 
                    onClick={() => setShowVideo(true)}
                    className={`group/play ${bgAccent} ${isDarkMode ? 'text-black shadow-accent/40' : 'text-white shadow-blue-600/40'} p-5 sm:p-8 md:p-10 rounded-full cursor-pointer hover:scale-110 transition-all shadow-2xl shine-effect border-2 sm:border-4 border-white/20`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                  <div className="mt-8">
                    <p className="text-white text-xs font-black uppercase tracking-[0.5em] drop-shadow-lg mb-2">Omnipresent Agent V.3</p>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Watch The 2-Minute Engine Overview</p>
                  </div>
                </div>
              </>
            ) : (
              <iframe 
                className="w-full h-full border-0"
                src={`https://www.youtube.com/embed/Zs60_ssuN6Y?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&enablejsapi=1&widgetapi=1&origin=${encodeURIComponent(origin)}`} 
                title="Omnipresent Agent Demo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <button 
          onClick={onCtaClick}
          className={`${bgAccent} ${isDarkMode ? 'text-black shadow-accent/30' : 'text-white shadow-blue-600/30'} hover:scale-105 active:scale-95 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold transition-all shadow-xl tracking-wide shine-effect`}
        >
          Get Access Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
