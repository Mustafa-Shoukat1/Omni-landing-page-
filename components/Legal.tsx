
import React from 'react';

interface Props {
  isDarkMode: boolean;
  title: string;
}

const Legal: React.FC<Props> = ({ isDarkMode, title }) => {
  const headingColor = isDarkMode ? 'text-white' : 'text-slate-900';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const bgColor = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-white/[0.02]' : 'bg-slate-50';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-blue-100';

  return (
    <section className={`py-24 ${bgColor} min-h-screen theme-transition`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className={`text-5xl font-black mb-12 tracking-tight ${headingColor}`}>{title}</h1>
        
        <div className={`prose prose-lg ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
          <div className={`${cardBg} border ${borderColor} p-10 rounded-3xl shadow-xl space-y-8`}>
            <section>
              <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>1. Data Protocol</h2>
              <p className={textColor}>
                At Omnipresent Agent Systems, our growth infrastructure relies on high-fidelity data nodes. We treat your market intelligence and lead data with the highest level of security encryption used in real estate automation.
              </p>
            </section>
            
            <section>
              <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>2. Territorial Exclusivity</h2>
              <p className={textColor}>
                Our "Terms of Rail" strictly prohibit the distribution of leads to competing agents within a locked market sector. Once an agent reserves a territory, all system yield is dedicated solely to that entity.
              </p>
            </section>
            
            <section>
              <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>3. Automated Interactions</h2>
              <p className={textColor}>
                The AI Voice SDRs operate under localized guidelines. All automated interactions are recorded and logged for performance auditing and compliance with real estate licensing standards.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>4. System Maintenance</h2>
              <p className={textColor}>
                We guarantee 99.9% uptime for the Growth Engine. Scheduled maintenance of the Omni-AI Node will occur during off-peak hours (Eastern Standard Time) to ensure zero lead drop-off.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
