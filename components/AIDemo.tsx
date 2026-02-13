
import React, { useState } from 'react';

interface Props {
  isDarkMode: boolean;
  onCtaClick?: () => void;
}

interface AnalysisResult {
  intent: string;
  heatLevel: string;
  nextAction: string;
  confidenceScore: number;
}

// Mock responses for demo purposes - simulates AI analysis
const getMockAnalysis = (input: string): AnalysisResult => {
  const lowerInput = input.toLowerCase();
  
  // Hot lead indicators
  if (lowerInput.includes('asap') || lowerInput.includes('ready to') || lowerInput.includes('urgent') || lowerInput.includes('immediately')) {
    return {
      intent: "High-Intent Seller - Ready to transact",
      heatLevel: "🔥 Hot",
      nextAction: "Schedule immediate callback within 5 minutes. Prepare comparative market analysis for their area. This lead shows strong urgency signals.",
      confidenceScore: 94
    };
  }
  
  // Warm lead indicators
  if (lowerInput.includes('interested') || lowerInput.includes('considering') || lowerInput.includes('looking') || lowerInput.includes('thinking')) {
    return {
      intent: "Active Buyer/Seller - Evaluating options",
      heatLevel: "⚡ Warm",
      nextAction: "Send personalized property recommendations within 24 hours. Schedule a discovery call to understand their timeline and preferences.",
      confidenceScore: 78
    };
  }
  
  // Cold lead indicators
  if (lowerInput.includes('just browsing') || lowerInput.includes('maybe') || lowerInput.includes('someday') || lowerInput.includes('not sure')) {
    return {
      intent: "Early-Stage Research - Long-term prospect",
      heatLevel: "❄️ Cold",
      nextAction: "Add to nurture campaign with monthly market updates. Set follow-up reminder for 90 days.",
      confidenceScore: 45
    };
  }
  
  // Default response for any other input
  return {
    intent: "Potential Lead - Requires qualification",
    heatLevel: "⚡ Warm",
    nextAction: "Initiate qualification call to assess timeline, budget, and motivation. Gather property requirements and send relevant listings.",
    confidenceScore: 72
  };
};

const AIDemo: React.FC<Props> = ({ isDarkMode, onCtaClick }) => {
  const [userInput, setUserInput] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSDRVideo, setShowSDRVideo] = useState(false);

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const analyzeLead = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    
    // Simulate AI processing delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const result = getMockAnalysis(userInput);
    setAnalysis(result);
    setLoading(false);
  };

  const bgColor = isDarkMode ? 'bg-[#050505]' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-slate-50';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-blue-100';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';

  return (
    <section id="demo" className={`py-32 border-y ${borderColor} ${bgColor} relative overflow-hidden theme-transition`}>
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${isDarkMode ? 'bg-accent/10' : 'bg-blue-600/5'} blur-[180px] rounded-full -z-10`}></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className={`inline-flex items-center space-x-3 px-4 py-2 mb-8 border ${borderColor} rounded-xl glass-card`}>
              <span className={`w-2.5 h-2.5 rounded-full ${isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600'} animate-pulse shadow-[0_0_12px_rgba(0,209,255,0.4)]`}></span>
              <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${textColor}`}>Intelligence Node 5.0 LIVE</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight ${headingColor}`}>
              The Brain <br /><span className={`${accentColor}`}>Behind the Rail</span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl ${textColor} mb-8 font-medium leading-relaxed`}>
              While competitors are manually dialing, our neural nodes are qualifying intent, booking calls, and calculating the most profitable next move.
            </p>

            <div className={`${cardBg} rounded-[2.5rem] p-10 border-2 ${borderColor} shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-12 relative overflow-hidden glass-card group`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
              <div className="flex justify-between items-center mb-12">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${textColor} opacity-60`}>Audio Dispatch 0x7F</span>
                  <div className="w-12 h-4 flex space-x-0.5 items-end">
                    {[1,2,3,4,5,6].map(i => <div key={i} className={`w-1 ${isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600'} rounded-full animate-bounce`} style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>)}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-1">
                   <span className={textColor}>Processing Load</span>
                   <span className={accentColor}>82% Optimal</span>
                </div>
                <div className={`h-2 ${isDarkMode ? 'bg-white/5' : 'bg-slate-200'} rounded-full overflow-hidden p-0.5`}>
                  <div className={`${isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600'} h-full rounded-full w-[82%] shadow-[0_0_15px_rgba(0,209,255,0.4)]`}></div>
                </div>
              </div>

              {!showSDRVideo ? (
                <button 
                  onClick={() => setShowSDRVideo(true)}
                  className={`w-full py-6 ${isDarkMode ? 'bg-accent/10 border-accent/30' : 'bg-blue-600/10 border-blue-600/30'} border-2 rounded-2xl font-black text-xs uppercase tracking-[0.5em] flex items-center justify-center space-x-4 transition-all ${accentColor} hover:bg-accent/20 hover:scale-[1.02]`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                  <span>Watch Live SDR Call Demo</span>
                </button>
              ) : (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-accent/30">
                  <iframe 
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/Zs60_ssuN6Y?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`} 
                    title="Live SDR Call Demo" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                  <button 
                    onClick={() => setShowSDRVideo(false)}
                    className="absolute top-2 right-2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={onCtaClick}
              className={`${isDarkMode ? 'bg-white text-black' : 'bg-slate-900 text-white'} px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold shadow-xl hover:scale-105 active:scale-95 transition-all tracking-wide shine-effect`}
            >
              Get Cleared For Rail
            </button>
          </div>

          <div className={`${isDarkMode ? 'bg-[#050505]' : 'bg-white'} border-2 ${borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 relative shadow-xl glass-card group overflow-hidden`}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className={`mb-4 sm:mb-6 ${isDarkMode ? 'text-[#00D1FF]' : 'text-blue-600'} font-bold text-lg sm:text-xl`}>
               Neural Scanner
             </div>
             
             <div className="mb-12 pt-8">
               <div className="flex justify-between items-center mb-6">
                 <p className={`text-xs font-black ${textColor} uppercase tracking-[0.3em]`}>Terminal Input</p>
                 <span className={`text-[9px] font-black text-green-500 uppercase tracking-widest`}>Secure Connection</span>
               </div>
               <div className="relative">
                 <textarea 
                   value={userInput}
                   onChange={(e) => setUserInput(e.target.value)}
                   className={`w-full h-48 ${isDarkMode ? 'bg-black border-white/10' : 'bg-slate-50 border-blue-100'} border-2 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 ${headingColor} placeholder-gray-700 focus:outline-none focus:border-accent/50 transition-all resize-none text-base sm:text-xl font-bold shadow-inner`}
                   placeholder="Try: 'I saw your listing on Main St, I'm ready to sell my current home in Malibu ASAP...'"
                 />
                 <button 
                  onClick={analyzeLead}
                  disabled={loading}
                  className={`absolute bottom-8 right-8 ${isDarkMode ? 'bg-[#00D1FF] text-black' : 'bg-blue-600 text-white'} p-6 rounded-3xl shadow-2xl hover:scale-110 active:scale-90 transition-all disabled:opacity-50 shine-effect`}
                 >
                   {loading ? (
                     <div className="w-6 h-6 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
                   ) : (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                   )}
                 </button>
               </div>
             </div>

             {analysis ? (
               <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                 <div className="grid grid-cols-2 gap-6">
                   <div className={`${isDarkMode ? 'bg-white/5' : 'bg-slate-100'} p-8 rounded-[2rem] border-2 ${borderColor} glass-card`}>
                     <p className={`text-[10px] font-black ${textColor} uppercase tracking-[0.3em] mb-3`}>Detected Intent</p>
                     <p className={`text-2xl font-black ${headingColor} tracking-tight`}>{analysis.intent}</p>
                   </div>
                   <div className={`${isDarkMode ? 'bg-white/5' : 'bg-slate-100'} p-8 rounded-[2rem] border-2 ${borderColor} glass-card`}>
                     <p className={`text-[10px] font-black ${textColor} uppercase tracking-[0.3em] mb-3`}>Heat Level</p>
                     <p className={`text-2xl font-black ${analysis.heatLevel?.toLowerCase().includes('hot') ? 'text-red-500' : accentColor} tracking-tight`}>{analysis.heatLevel}</p>
                   </div>
                 </div>
                 <div className={`${isDarkMode ? 'bg-accent/10 border-accent/40' : 'bg-blue-600/5 border-blue-600/40'} border-2 rounded-[2.5rem] p-10 relative overflow-hidden group`}>
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <p className={`text-[11px] font-black ${accentColor} uppercase tracking-[0.4em] mb-4`}>AI Tactical Response</p>
                   <p className={`text-xl font-bold ${headingColor} leading-relaxed tracking-tight`}>{analysis.nextAction}</p>
                 </div>
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center py-24 border-4 border-dashed border-white/5 rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity">
                  <div className={`w-16 h-16 rounded-full border-4 ${isDarkMode ? 'border-accent/20' : 'border-blue-600/20'} flex items-center justify-center mb-6`}>
                    <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600'} animate-ping`}></div>
                  </div>
                  <p className="font-black text-sm uppercase tracking-[0.4em]">Awaiting Lead Frequency</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
