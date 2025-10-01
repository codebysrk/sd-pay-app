import React from 'react';
import logo from '../assets/sd-png.png';

const SideMenu = ({ isOpen, onClose, onNavigate, userData }) => {
  const menuItems = [
    {
      name: 'Dashboard',
      page: 'dashboard',
      icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    },
    {
      name: 'Profile',
      page: 'profile',
      icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    },
    {
      name: 'Offer',
      page: 'offer',
      icon: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.22-1.05-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z',
    },
    {
      name: 'Transaction',
      page: 'transaction',
      icon: 'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Menu */}
      <div
        className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-gray-100 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-zinc-900 text-white p-6 text-center">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 mx-auto bg-white rounded-full p-2 border-2 border-zinc-500"
          />
          <p className="text-sm text-gray-300 mt-4">Available Balance</p>
          <h2 className="text-2xl font-bold">₹ {userData.balance}</h2>
        </div>
        <nav className="flex-grow overflow-y-auto">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={() => onNavigate(item.page)}
                  className="flex items-center gap-4 p-4 text-zinc-800 border-b border-gray-200 hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-800"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={item.icon} />
                  </svg>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 text-center">
          <button className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center shadow-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.19 1.01-4.14 2.58-5.42L8.17 5.17C6.07 6.9 5 9.36 5 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.64-1.07-5.1-2.83-6.83z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
