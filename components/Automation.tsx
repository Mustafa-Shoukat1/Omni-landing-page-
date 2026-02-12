
import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const Automation: React.FC<Props> = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-[#050505]' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-white/[0.03]' : 'bg-slate-50';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-slate-200';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const bgAccent = isDarkMode ? 'bg-[#00D1FF]' : 'bg-[#2563EB]';

  return (
    <section id="systems" className={`py-32 ${bgColor} theme-transition relative overflow-hidden`}>
      <div className={`absolute top-1/2 left-0 w-96 h-96 ${isDarkMode ? 'bg-accent/5' : 'bg-blue-600/5'} blur-[100px] -z-10`}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Mock SMS Interface 1 */}
              <div className={`${cardBg} rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border ${borderColor} shadow-2xl transform sm:-rotate-2 hover:rotate-0 transition-all duration-700 glass-card sm:scale-105 z-20`}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-10 h-10 rounded-xl ${isDarkMode ? 'bg-accent/20' : 'bg-blue-600/20'} flex items-center justify-center border ${isDarkMode ? 'border-accent/40' : 'border-blue-600/40'}`}>
                    <span className={`${accentColor} text-xs font-black`}>AI</span>
                  </div>
                  <div>
                    <p className={`text-xs font-black ${headingColor}`}>Omni-Agent Node</p>
                    <div className="flex items-center space-x-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                       <p className={`text-[9px] ${accentColor} uppercase font-black tracking-widest`}>Processing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className={`${isDarkMode ? 'bg-white/5' : 'bg-slate-200/50'} rounded-2xl rounded-tl-none p-4`}>
                    <p className={`text-xs ${textColor} leading-relaxed font-medium`}>"I noticed you were browsing properties in Brentwood. Looking for an investment or a primary home?"</p>
                  </div>
                  <div className={`${bgAccent} ${isDarkMode ? 'text-black shadow-accent/20' : 'text-white shadow-blue-600/20'} rounded-2xl rounded-tr-none p-4 ml-6 shadow-xl`}>
                    <p className="text-xs font-black">"Primary home! We need more space for the kids."</p>
                  </div>
                </div>
              </div>

              {/* Mock SMS Interface 2 */}
              <div className={`${cardBg} rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border ${borderColor} shadow-2xl transform sm:rotate-3 sm:translate-y-16 hover:rotate-0 transition-all duration-700 glass-card`}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                    <span className="text-purple-500 text-xs font-black">SYS</span>
                  </div>
                  <div>
                    <p className={`text-xs font-black ${headingColor}`}>Pipeline Dispatch</p>
                    <p className="text-[9px] text-purple-500 uppercase font-black tracking-widest">Active Call</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className={`${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200'} rounded-2xl p-4 border shadow-sm`}>
                    <p className={`text-[9px] ${textColor} uppercase font-black mb-2 tracking-widest`}>Signal Found</p>
                    <p className={`text-sm font-black ${headingColor}`}>Sarah Miller is READY.</p>
                  </div>
                  <div className={`${isDarkMode ? 'bg-accent/20 border-accent/40' : 'bg-blue-600/10 border-blue-600/40'} border-2 rounded-2xl p-4 flex items-center justify-between`}>
                    <span className={`text-xs ${accentColor} font-black`}>Dialing Agent...</span>
                    <div className="flex space-x-1">
                      <div className={`w-1.5 h-4 ${bgAccent} animate-bounce`}></div>
                      <div className={`w-1.5 h-4 ${bgAccent} animate-bounce`} style={{animationDelay: '0.1s'}}></div>
                      <div className={`w-1.5 h-4 ${bgAccent} animate-bounce`} style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className={`inline-block px-4 py-2 mb-8 border ${isDarkMode ? 'border-accent/30 bg-accent/10' : 'border-blue-600/30 bg-blue-600/5'} rounded-xl`}>
              <span className={`${accentColor} text-[10px] font-black tracking-[0.4em] uppercase`}>Scale Architecture</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight ${headingColor}`}>
              Built For <span className={`${accentColor}`}>Velocity</span>
            </h2>
            <p className={`text-base sm:text-lg ${textColor} mb-8 leading-relaxed font-medium`}>
              Real estate isn't a hobby—it's infrastructure. We replace the messy "human dialer" bottleneck with a high-throughput AI engine that never eats, never sleeps, and never misses a follow-up.
            </p>
            <div className="space-y-8">
              {[
                { title: "3-Second Response", desc: "Our AI touches every lead before they can even close their browser." },
                { title: "Smart Sentiment", desc: "Neural processing identifies high-intent leads and routes them instantly." },
                { title: "Automated Calendar Sync", desc: "No more phone tag. Appointments appear on your phone like magic." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className={`mt-1 w-8 h-8 ${isDarkMode ? 'bg-accent/10' : 'bg-blue-600/10'} border ${isDarkMode ? 'border-accent/30' : 'border-blue-600/30'} rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110`}>
                    <svg className={`w-4 h-4 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className={`text-xl font-black ${headingColor} tracking-tight`}>{item.title}</h4>
                    <p className={`text-base ${textColor} font-medium`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
