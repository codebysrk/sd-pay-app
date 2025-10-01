import React from 'react';
import logo from '../../assets/sd-png.png';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 6h16" />
    </svg>
  );
  
const BackIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
  );

const Header = ({ onMenuClick, onBackClick, pageTitle }) => (
    <header className="sticky top-0 bg-zinc-900 z-20 text-white shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
        <button onClick={pageTitle === 'Sd Pay' ? onMenuClick : onBackClick} className="text-white">
          {pageTitle === 'Sd Pay' ? <MenuIcon /> : <BackIcon />}
        </button>
        {pageTitle === 'Sd Pay' ? (
           <img src={logo} alt="Logo" className="w-24 h-auto" />
        ) : (
          <h1 className="text-lg font-bold">{pageTitle}</h1>
        )}
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Profile Icon Placeholder */}
        </div>
      </div>
    </header>
);

export default Header;

