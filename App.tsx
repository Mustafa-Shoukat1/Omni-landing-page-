
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OldVsNew from './components/OldVsNew';
import AIDemo from './components/AIDemo';
import Automation from './components/Automation';
import Economics from './components/Economics';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import GetOffer from './components/GetOffer';
import Legal from './components/Legal';
import SupportJunction from './components/SupportJunction';
import InvestorDeck from './components/InvestorDeck';

type Page = 'home' | 'get-offer' | 'privacy' | 'terms' | 'support' | 'investor';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Apply theme class to body for global transitions
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.add('bg-[#0A0A0A]');
      document.body.classList.remove('bg-[#F8FAFC]');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('bg-[#F8FAFC]');
      document.body.classList.remove('bg-[#0A0A0A]');
    }
  }, [isDarkMode]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const navigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'get-offer':
        return <GetOffer isDarkMode={isDarkMode} />;
      case 'privacy':
        return <Legal isDarkMode={isDarkMode} title="Privacy Policy" />;
      case 'terms':
        return <Legal isDarkMode={isDarkMode} title="Terms of Rail" />;
      case 'support':
        return <SupportJunction isDarkMode={isDarkMode} />;
      case 'investor':
        return <InvestorDeck isDarkMode={isDarkMode} />;
      default:
        return (
          <>
            <Hero isDarkMode={isDarkMode} onCtaClick={() => navigate('get-offer')} />
            <OldVsNew isDarkMode={isDarkMode} />
            <AIDemo isDarkMode={isDarkMode} onCtaClick={() => navigate('get-offer')} />
            <Automation isDarkMode={isDarkMode} />
            <Economics isDarkMode={isDarkMode} onCtaClick={() => navigate('get-offer')} />
            <FinalCTA isDarkMode={isDarkMode} onCtaClick={() => navigate('get-offer')} />
          </>
        );
    }
  };

  return (
    <div className={`flex flex-col min-h-screen theme-transition ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        navigate={navigate} 
        currentPage={currentPage} 
      />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer isDarkMode={isDarkMode} navigate={navigate} />
    </div>
  );
};

export default App;
