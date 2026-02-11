
import React from 'react';

interface Props {
  isDarkMode: boolean;
}

const SupportJunction: React.FC<Props> = ({ isDarkMode }) => {
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const bgColor = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-white/[0.02]' : 'bg-slate-50';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-blue-100';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';

  const categories = [
    { title: "Technical Setup", icon: "🛠️", desc: "Configuration for your AI Voice Node and CRM integration." },
    { title: "Onboarding", icon: "🚄", desc: "First-week deployment guide and system optimization." },
    { title: "Billing & Plans", icon: "💳", desc: "Manage your territorial subscription and scaling tokens." },
    { title: "AI Training", icon: "🧠", desc: "Customizing your SDR personality and objection handling." }
  ];

  return (
    <section className={`py-24 ${bgColor} min-h-screen theme-transition relative overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${isDarkMode ? 'bg-accent/5' : 'bg-blue-600/5'} blur-[150px] rounded-full`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 mb-6 border ${isDarkMode ? 'border-accent/30 bg-accent/5' : 'border-blue-200 bg-blue-50'} rounded-full`}>
            <span className={`${accentColor} text-[10px] font-black tracking-widest uppercase`}>Station Help Desk</span>
          </div>
          <h1 className={`text-6xl md:text-9xl font-black mb-6 tracking-tighter ${headingColor}`}>Support <br /><span className={accentColor}>Junction.</span></h1>
          <p className={`text-xl ${textColor} font-medium leading-relaxed`}>Need assistance with your Growth Engine? Our technicians are standing by at the main dispatch terminal.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className={`${cardBg} border-2 ${borderColor} p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all group glass-card`}>
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className={`text-2xl font-black mb-4 ${headingColor} tracking-tight`}>{cat.title}</h3>
              <p className={`text-base ${textColor} leading-relaxed font-medium`}>{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${isDarkMode ? 'bg-white/[0.03]' : 'bg-blue-600/5'} border-2 ${borderColor} rounded-[4rem] p-12 md:p-20 text-center max-w-5xl mx-auto glass-card`}>
          <h3 className={`text-4xl md:text-6xl font-black mb-8 ${headingColor} tracking-tight`}>Connect with a Technician</h3>
          <p className={`${textColor} mb-12 text-xl font-medium max-w-2xl mx-auto`}>Operational hours: 24/7 for Enterprise Node holders. High-priority dispatch active.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button className={`${isDarkMode ? 'bg-[#00D1FF] text-black shadow-accent/40' : 'bg-[#2563EB] text-white shadow-blue-600/40'} px-14 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all shine-effect`}>
              Open Ticket
            </button>
            <button className={`${isDarkMode ? 'bg-white text-black' : 'bg-white border-slate-200 text-slate-900'} px-14 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl`}>
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportJunction;
