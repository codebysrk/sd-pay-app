import React from 'react';

const BottomNav = () => (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around p-2 z-20">
        {['Store', 'My Orders', 'Chat', 'History'].map(item => (
            <button key={item} className="flex flex-col items-center gap-1 text-gray-500 text-xs">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.97V4H2.01L2 20h12v-2H4V6h16v3.97l2 2.06zM4 22h14v-2H4v2zm18-7l-6-6-4 4-2.5-2.5L8 13l4 4 6-6z"/></svg>
                <span>{item}</span>
            </button>
        ))}
    </nav>
);

export default BottomNav;
