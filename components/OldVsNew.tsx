
import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const OldVsNew: React.FC<Props> = ({ isDarkMode }) => {
  const oldWays = [
    "Waiting on inconsistent referrals.",
    "Grinding through soul-crushing cold calls.",
    "Buying 'recycled' leads from portals.",
    "Trading 80 hours a week for one closing."
  ];

  const newWays = [
    "Consistent lead flow on autopilot.",
    "AI Voice Agents pre-qualifying leads 24/7.",
    "Live SDRs booking calls on your calendar.",
    "Leveraging a team with unlimited capacity."
  ];

  const bgColor = isDarkMode ? 'bg-[#050505]' : 'bg-white';
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const cardBg = isDarkMode ? 'bg-white/[0.02]' : 'bg-blue-50/20';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-blue-100';

  return (
    <section className={`py-32 ${bgColor} theme-transition relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-5xl md:text-7xl font-black text-center mb-20 max-w-4xl mx-auto tracking-tighter ${headingColor} leading-none`}>
          STOP THE <span className="text-red-500 italic">BURN OUT</span>. <br />EMBRACE THE MACHINE.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Old Way */}
          <div className={`${cardBg} border ${borderColor} p-12 rounded-[3rem] shadow-xl glass-card relative group opacity-60 hover:opacity-100 transition-opacity`}>
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-red-500/10 p-5 rounded-2xl border border-red-500/20">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-3xl font-black ${headingColor} tracking-tight`}>The Legacy Way</h3>
            </div>
            <ul className="space-y-8">
              {oldWays.map((text, i) => (
                <li key={i} className="flex items-start space-x-5 text-gray-500">
                  <span className="mt-2 w-2 h-2 rounded-full bg-red-500/40 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                  <span className="text-xl font-medium tracking-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New Way */}
          <div className={`${isDarkMode ? 'bg-accent/5 border-accent/30' : 'bg-blue-600/5 border-blue-600/30'} p-12 rounded-[3rem] relative overflow-hidden group shadow-2xl glass-card border-2`}>
            <div className={`absolute -top-12 -right-12 w-48 h-48 ${isDarkMode ? 'bg-accent/20' : 'bg-blue-600/10'} blur-[80px] -z-10`}></div>
            <div className="flex items-center space-x-6 mb-12">
              <div className={`${isDarkMode ? 'bg-accent/20' : 'bg-blue-600/20'} p-5 rounded-2xl border ${isDarkMode ? 'border-accent/40' : 'border-blue-600/40'}`}>
                <svg className={`w-10 h-10 ${accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-3xl font-black ${headingColor} tracking-tight`}>The <span className={accentColor}>Omni</span> Architecture</h3>
            </div>
            <ul className="space-y-8">
              {newWays.map((text, i) => (
                <li key={i} className="flex items-start space-x-5">
                  <svg className={`mt-1.5 w-6 h-6 ${accentColor} flex-shrink-0 shadow-[0_0_12px_var(--accent-glow)]`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4.242 4.243a1 1 0 01-1.414 0L6.293 11.2a1 1 0 111.414-1.414L9 11.086l3.293-3.293a1 1 0 111.414 1.414z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-xl font-black ${headingColor} tracking-tight`}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNew;
