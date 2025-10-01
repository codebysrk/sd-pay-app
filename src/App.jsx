import React, { useState, useEffect } from 'react';
import SplashScreen from './components/common/SplashScreen';
import Header from './components/common/Header';
import SideMenu from './components/SideMenu';
import HomePage from './components/home/HomePage';
import DashboardPage from './components/dashboard/DashboardPage';
import MyQRPage from './components/qr/MyQRPage';
import BottomNav from './components/common/BottomNav';
import { mockUserData } from './data/mockUserData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'dashboard', 'my-qr'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // App load hone ka anubhav simulate karein
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second ka delay

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const handleNavigate = (page) => {
    const validPages = [
      'home',
      'dashboard',
      'my-qr',
      'profile',
      'offer',
      'transaction',
    ];
    if (validPages.includes(page)) {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }
    setIsMenuOpen(false);
  };

  const pageTitle = {
    home: 'Sd Pay',
    dashboard: 'Dashboard',
    'my-qr': 'My QR Code',
    profile: 'Profile',
    offer: 'Offers',
    transaction: 'Transactions',
  }[currentPage];

  // Page rendering ke logic ko alag kar dein
  const RenderPage = ({ page, onNavigate }) => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={onNavigate} />;
      case 'dashboard':
        return <DashboardPage data={mockUserData.dashboard} />;
      case 'my-qr':
        return <MyQRPage user={mockUserData} />;
      case 'profile':
      case 'offer':
      case 'transaction':
        return (
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">{pageTitle}</h1>
            <p className="mt-4 text-gray-500">
              Yeh page abhi banaya ja raha hai.
            </p>
          </div>
        );
      default:
        return <HomePage onNavigate={onNavigate} />;
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans relative overflow-hidden md:max-w-sm md:mx-auto md:shadow-lg">
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        userData={mockUserData}
      />

      <div
        className={`flex flex-col h-screen ${
          isMenuOpen ? 'pointer-events-none' : ''
        }`}
      >
        <Header
          onMenuClick={() => setIsMenuOpen(true)}
          onBackClick={() => setCurrentPage('home')}
          pageTitle={pageTitle}
        />

        <div className="flex-grow overflow-y-auto pb-16">
          <RenderPage page={currentPage} onNavigate={handleNavigate} />
        </div>

        {currentPage === 'home' && <BottomNav />}
      </div>
    </div>
  );
}
