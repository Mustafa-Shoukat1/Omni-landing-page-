
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  navigate: (page: any) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, navigate, currentPage }) => {
  const accentColor = isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]';
  const bgAccent = isDarkMode ? 'bg-[#00D1FF]' : 'bg-[#2563EB]';
  const bgColor = isDarkMode ? 'bg-[#0A0A0A]/80' : 'bg-[#F8FAFC]/90';
  const borderColor = isDarkMode ? 'border-white/5' : 'border-blue-100';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const navTextColor = isDarkMode ? 'text-white' : 'text-slate-900';

  return (
    <nav className={`sticky top-0 z-50 ${bgColor} backdrop-blur-md border-b ${borderColor} py-4 theme-transition`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => navigate('home')}
        >
          <div className={`w-10 h-10 ${bgAccent} rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-6`}>
            {/* Better Suiting Logo: Growth Compass */}
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-3-3" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-xl font-black tracking-tighter ${navTextColor}`}>
              OMNI<span className={accentColor}>AGENT</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 ${textColor}`}>Growth Infrastructure</span>
          </div>
        </div>
        
        <div className={`hidden lg:flex space-x-10 text-xs font-black uppercase tracking-widest ${textColor}`}>
          <button 
            onClick={() => { navigate('home'); setTimeout(() => document.getElementById('demo')?.scrollIntoView({behavior:'smooth'}), 100); }} 
            className={`transition-colors ${isDarkMode ? 'hover:text-[#00D1FF]' : 'hover:text-[#2563EB]'}`}
          >
            The Demo
          </button>
          <button 
            onClick={() => { navigate('home'); setTimeout(() => document.getElementById('systems')?.scrollIntoView({behavior:'smooth'}), 100); }} 
            className={`transition-colors ${isDarkMode ? 'hover:text-[#00D1FF]' : 'hover:text-[#2563EB]'}`}
          >
            Systems
          </button>
          <button 
            onClick={() => { navigate('home'); setTimeout(() => document.getElementById('roi')?.scrollIntoView({behavior:'smooth'}), 100); }} 
            className={`transition-colors ${isDarkMode ? 'hover:text-[#00D1FF]' : 'hover:text-[#2563EB]'}`}
          >
            ROI Matrix
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${borderColor} ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-blue-50'} transition-all`}
            title="Toggle Theme"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12 10.607a1 1 0 010-1.414l.706-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zM3 10a1 1 0 100 2h1a1 1 0 100-2H3z" /></svg>
            ) : (
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
          <button 
            onClick={() => navigate('get-offer')}
            className={`${bgAccent} ${isDarkMode ? 'text-black' : 'text-white'} px-6 py-2.5 rounded-xl text-xs font-black transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest`}
          >
            Get Offer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
