
import React from 'react';

interface Props {
  isDarkMode: boolean;
  navigate: (page: any) => void;
}

const Footer: React.FC<Props> = ({ isDarkMode, navigate }) => {
  const bgColor = isDarkMode ? 'bg-black' : 'bg-slate-900';
  const textColor = isDarkMode ? 'text-gray-500' : 'text-slate-400';
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';

  const scrollToSection = (id: string) => {
    navigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className={`${bgColor} border-t ${isDarkMode ? 'border-white/5' : 'border-white/10'} py-20 theme-transition`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div 
              className="flex items-center space-x-3 mb-8 cursor-pointer"
              onClick={() => navigate('home')}
            >
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-accent' : 'bg-blue-600'} rounded-xl flex items-center justify-center shadow-xl`}>
                <span className={`${isDarkMode ? 'text-black' : 'text-white'} font-black text-2xl italic leading-none`}>O</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">OMNIPRESENT<span className={accentColor}>AGENT</span></span>
            </div>
            <p className={`${textColor} max-w-sm text-base leading-relaxed mb-10 font-medium`}>
              We build the infrastructure of modern real estate. Scale your deals, automate your engine, and dominate your territory.
            </p>
            <div className="flex space-x-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer group">
                  <div className="w-4 h-4 bg-current rounded-sm group-hover:scale-110 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h5>
            <ul className={`space-y-4 text-sm ${textColor} font-bold`}>
              <li><button onClick={() => scrollToSection('demo')} className="hover:text-white">The Demo</button></li>
              <li><button onClick={() => scrollToSection('systems')} className="hover:text-white">Systems</button></li>
              <li><button onClick={() => scrollToSection('roi')} className="hover:text-white">ROI Matrix</button></li>
              <li><button onClick={() => navigate('get-offer')} className="hover:text-white">Get Offer</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Station</h5>
            <ul className={`space-y-4 text-sm ${textColor} font-bold`}>
              <li><button onClick={() => navigate('privacy')} className="hover:text-white">Privacy Policy</button></li>
              <li><button onClick={() => navigate('terms')} className="hover:text-white">Terms of Rail</button></li>
              <li><button onClick={() => navigate('support')} className="hover:text-white">Support Junction</button></li>
              <li><button onClick={() => navigate('investor')} className="hover:text-white">Investor Deck</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em] mb-6 md:mb-0">
            © 2025 OMNIPRESENT AGENT SYSTEMS INC.
          </p>
          <div className="flex items-center space-x-10 text-[10px] font-black text-gray-700 uppercase tracking-[0.3em]">
             <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span>All Systems: Green</span>
             </div>
             <span>Terminal US-EAST-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
