
import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const InvestorDeck: React.FC<Props> = ({ isDarkMode }) => {
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const bgColor = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-white/[0.02]' : 'bg-slate-50';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-blue-100';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';

  const metrics = [
    { label: "TAM", val: "$2.5T", sub: "Annual Real Estate Volume" },
    { label: "Efficiency", val: "85%", sub: "Reduction in Lead Waste" },
    { label: "Expansion", val: "124%", sub: "Quarterly Node Growth" },
    { label: "Yield", val: "4.2x", sub: "Agent ROI Benchmark" }
  ];

  return (
    <section className={`py-24 ${bgColor} min-h-screen theme-transition relative overflow-hidden`}>
      <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] ${isDarkMode ? 'bg-accent/10' : 'bg-blue-600/5'} blur-[200px] rounded-full`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className={`inline-flex items-center space-x-2 px-4 py-1.5 mb-6 border ${isDarkMode ? 'border-accent/30 bg-accent/5' : 'border-blue-200 bg-blue-50'} rounded-full`}>
              <span className={`${accentColor} text-[10px] font-black tracking-widest uppercase`}>Capital & Strategy</span>
            </div>
            <h1 className={`text-6xl md:text-9xl font-black mb-8 tracking-tighter ${headingColor} leading-[0.85]`}>
              Scaling the <br /><span className={accentColor}>2026 Realtor.</span>
            </h1>
            <p className={`text-2xl ${textColor} mb-12 font-medium leading-relaxed max-w-xl`}>
              We aren't just software. We are building the foundational infrastructure for a trillion-dollar industry shift. AI is the rail; we are the engine.
            </p>
            <div className="grid grid-cols-2 gap-12">
              {metrics.map((m, i) => (
                <div key={i} className={`border-l-4 ${isDarkMode ? 'border-[#00D1FF]' : 'border-blue-600'} pl-8 group hover:translate-x-2 transition-transform`}>
                  <p className={`text-5xl font-black ${headingColor} mb-2`}>{m.val}</p>
                  <p className={`text-[11px] font-black uppercase tracking-widest ${textColor} opacity-60`}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className={`absolute -inset-4 bg-gradient-to-tr ${isDarkMode ? 'from-accent/20 to-purple-500/20' : 'from-blue-200 to-indigo-200'} blur-3xl opacity-30 animate-pulse`}></div>
             <div className={`${cardBg} border-2 ${borderColor} p-12 md:p-16 rounded-[4rem] shadow-2xl relative glass-card`}>
                <div className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-widest opacity-20">Confidential Node V.3</div>
                <h3 className={`text-4xl font-black mb-10 ${headingColor} tracking-tight`}>Executive Summary</h3>
                <div className="space-y-8">
                  {[
                    "Standardization of AI Voice protocols for high-stakes negotiation.",
                    "Global territorial expansion targeting the top 1% of producers.",
                    "Proprietary Lead-to-Outcome neural processing models.",
                    "Next-generation CRM-agnostic infrastructure layer."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start space-x-6 group">
                      <div className={`w-10 h-10 rounded-2xl ${isDarkMode ? 'bg-accent/10 border-accent/30' : 'bg-blue-100 border-blue-200'} border flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:rotate-12`}>
                        <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600'} shadow-[0_0_10px_rgba(0,209,255,0.4)]`}></div>
                      </div>
                      <p className={`text-lg font-bold ${textColor} leading-relaxed`}>{text}</p>
                    </div>
                  ))}
                </div>
                <a 
                  href="mailto:investors@omnipresentagent.com?subject=Pitch%20Deck%20Request&body=Hi%2C%20I%20am%20interested%20in%20receiving%20the%20Omnipresent%20Agent%20pitch%20deck.%20Please%20send%20it%20to%20this%20email.%20Thank%20you!" 
                  className={`block w-full mt-14 py-8 ${isDarkMode ? 'bg-[#00D1FF] text-black' : 'bg-slate-900 text-white'} rounded-[2rem] font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl shine-effect text-center`}
                >
                  Request Pitch Deck
                </a>
             </div>
          </div>
        </div>

        <div className="text-center">
           <p className={`text-[10px] font-black uppercase tracking-[0.5em] ${textColor} mb-12 opacity-40`}>Technology Stack Partners</p>
           <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`h-10 w-40 ${isDarkMode ? 'bg-white/10' : 'bg-slate-300'} rounded-2xl glass-card border ${borderColor}`}></div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorDeck;
