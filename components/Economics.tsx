
import React from 'react';

interface Props {
  isDarkMode: boolean;
  onCtaClick?: () => void;
}

const Economics: React.FC<Props> = ({ isDarkMode, onCtaClick }) => {
  const bgColor = isDarkMode ? 'bg-[#0F0F0F]' : 'bg-slate-50';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const cardBg = isDarkMode ? 'bg-[#1a1a1a]/50' : 'bg-white';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-slate-200';

  return (
    <section id="roi" className={`py-32 ${bgColor} relative overflow-hidden theme-transition`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <div className={`inline-block px-4 py-1.5 mb-6 border ${isDarkMode ? 'border-accent/30 bg-accent/5' : 'border-blue-200 bg-blue-50'} rounded-full`}>
            <span className={`${accentColor} text-[10px] font-black tracking-widest uppercase`}>Infrastructure Yield Report</span>
          </div>
          <h2 className={`text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter ${headingColor}`}>
            The Economics of <br /><span className={`${accentColor} italic`}>Scaling</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className={`lg:col-span-7 ${cardBg} border-2 ${borderColor} p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden glass-card`}>
            <div className="flex justify-between items-center mb-16 relative z-10">
              <h3 className={`text-2xl font-black tracking-tight ${headingColor}`}>Yield Matrix</h3>
              <div className="flex space-x-10 text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <span className={textColor}>Manual Labor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
                  <span className={textColor}>AI Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Railroad Track Grid Graph */}
            <div className="relative h-80 w-full mb-10">
              <svg className="w-full h-full overflow-visible">
                {/* Horizontal Tracks */}
                {[0, 0.25, 0.5, 0.75, 1].map(p => (
                  <line key={p} x1="0" y1={`${p * 100}%`} x2="100%" y2={`${p * 100}%`} stroke={isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)"} strokeWidth="2" />
                ))}
                
                {/* Manual Path (Derailing) */}
                <path 
                  d="M0,280 C100,260 200,100 400,0" 
                  fill="none" 
                  stroke="#EF4444" 
                  strokeWidth="6" 
                  strokeDasharray="10 5"
                  className="drop-shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                />
                
                {/* Omni System Path (The Straight Rail) */}
                <path 
                  d="M0,280 C150,290 300,240 600,200" 
                  fill="none" 
                  stroke={isDarkMode ? "#00D1FF" : "#2563EB"} 
                  strokeWidth="8" 
                  className={isDarkMode ? 'drop-shadow-[0_0_15px_rgba(0,209,255,0.4)]' : 'drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]'}
                />

                <circle cx="0" cy="280" r="8" fill={isDarkMode ? "#00D1FF" : "#2563EB"} />
                <circle cx="100%" cy="200" r="10" fill={isDarkMode ? "#00D1FF" : "#2563EB"} className="animate-pulse" />
              </svg>
              
              <div className="absolute top-0 right-0 -translate-y-8 text-[11px] font-black text-red-500 uppercase tracking-widest">Inefficiency Spike +300%</div>
              <div className={`absolute bottom-12 right-1/4 p-4 ${isDarkMode ? 'bg-accent/10' : 'bg-blue-600/10'} rounded-2xl border border-accent/20`}>
                 <p className={`text-[11px] font-black ${accentColor} uppercase tracking-widest`}>Scale Route Locked</p>
              </div>
            </div>

            <div className={`flex justify-between text-[11px] font-black ${textColor} uppercase tracking-[0.4em] pt-8 border-t ${borderColor}`}>
              <span>2020</span>
              <span>2022</span>
              <span>2024</span>
              <span>Unlimited Exit</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className={`${cardBg} p-10 rounded-[3rem] border ${borderColor} shadow-2xl relative group overflow-hidden glass-card`}>
              <div className={`absolute -right-12 -top-12 w-32 h-32 ${isDarkMode ? 'bg-accent/10' : 'bg-blue-600/5'} blur-3xl group-hover:opacity-100 opacity-50 transition-all`}></div>
              <h4 className={`text-7xl font-black ${accentColor} mb-4 tracking-tighter`}>68%</h4>
              <p className={`text-xs font-black ${isDarkMode ? 'text-gray-300' : 'text-slate-500'} uppercase tracking-[0.3em] mb-6`}>Market Failure Rate</p>
              <p className={`text-xl ${textColor} leading-relaxed font-bold tracking-tight`}>
                Of Realtors struggle with inconsistent sales because they lack a predictable system. Leverage the machine.
              </p>
            </div>

            <div 
              onClick={onCtaClick}
              className={`${isDarkMode ? 'bg-white text-black shadow-accent/20' : 'bg-slate-900 text-white shadow-slate-900/20'} p-10 rounded-[3rem] shadow-2xl transform hover:scale-[1.02] transition-all cursor-pointer group shine-effect`}
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-60">The Outcome</p>
              <h4 className="text-4xl font-black leading-tight mb-8 tracking-tighter">Establish Territorial Dominance.</h4>
              <div className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest">
                 <span>Secure Market Hub</span>
                 <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economics;
