import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import './styles.css';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    let page;
    switch (route) {
      case '#/about':
        page = <AboutPage />;
        break;
      case '#/services':
        page = <ServicesPage />;
        break;
      case '#/portfolio':
        page = <PortfolioPage />;
        break;
      case '#/contact':
        page = <ContactPage />;
        break;
      case '#/':
      default:
        page = <HomePage />;
        break;
    }
    return (
      <div key={route} className="page-enter">
        {page}
      </div>
    );
  };


  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#121212] text-[#111827] dark:text-[#F9FAFB] selection:bg-[#3B82F6] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;