import React from 'react';
import promoBanner from '../../assets/sdhome.jpg';

const HomePage = ({ onNavigate }) => {
    const quickActions = [
        { name: 'My QR', page: 'my-qr', icon: 'M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm-2 12h-4v-2h4v-2h-2v-2h2v-2h-4v-2h6v8z' },
        { name: 'Add Balance', page: 'add-balance', icon: 'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' },
        { name: 'SD to SD', page: 'sd-to-sd', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
        { name: 'Bank Pay', page: 'bank-pay', icon: 'M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z' },
    ];
    return (
        <div className="bg-gray-100">
            <div className="bg-zinc-900 text-white p-4 flex justify-around rounded-b-3xl">
                {quickActions.map(action => (
                    <button key={action.name} onClick={() => onNavigate(action.page)} className="flex flex-col items-center gap-2 text-center">
                        <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d={action.icon}/></svg>
                        </div>
                        <span className="text-xs">{action.name}</span>
                    </button>
                ))}
            </div>
            
            <div className="p-4 -mt-8">
                <img src={promoBanner} alt="Promo Banner" className="rounded-xl shadow-lg"/>

                 <div className="bg-white p-4 rounded-xl shadow-md mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-red-800">Recharge & Bill Payments</h3>
                        <a href="#" className="text-sm text-red-800 font-semibold">My bills {'>'}</a>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        {['Mobile', 'Gas Line', 'Electricity', 'Broadband', 'Municipal', 'Fastag', 'Insurance', 'More'].map(item => (
                             <div key={item} className="flex flex-col items-center gap-2">
                                 <div className="w-14 h-14 border border-gray-200 rounded-xl flex items-center justify-center">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-800" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>
                                 </div>
                                 <span className="text-xs text-zinc-800">{item}</span>
                             </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md mt-4">
                    <h3 className="font-bold text-red-800 mb-4">Book on SD Pay</h3>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        {['Movie', 'Flights', 'Train', 'More'].map(item => (
                             <div key={item} className="flex flex-col items-center gap-2">
                                 <div className="w-14 h-14 border border-gray-200 rounded-xl flex items-center justify-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-800" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
                                 </div>
                                 <span className="text-xs text-zinc-800">{item}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

