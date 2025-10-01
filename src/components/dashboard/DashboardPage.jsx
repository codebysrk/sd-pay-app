import React from 'react';

const DashboardPage = ({ data }) => {
    const dashboardItems = [
        { label: 'Account Balance', value: `₹ ${data.accountBalance}` },
        { label: 'Total Earning', value: `₹ ${data.totalEarning}` },
        { label: 'My Extra Cashback', value: `₹ ${data.extraCashback}` },
        { label: 'My Cashback Earning', value: `₹ ${data.cashbackEarning}` },
        { label: 'My Level Cashback Earning', value: `₹ ${data.levelCashbackEarning}` },
        { label: 'Legwise Level Cashback', value: 'Click', isCta: true },
        { label: 'My Today Cashback', value: `₹ ${data.todayCashback}` },
        { label: 'My Today Level Cashback', value: `₹ ${data.todayLevelCashback}` },
        { label: 'My Referral', value: data.myReferral },
        { label: 'My Team', value: data.myTeam },
    ];

    return (
        <main className="p-4 bg-gray-50 h-full">
            <div className="space-y-3">
                {dashboardItems.map(item => (
                    <div key={item.label} className="bg-white p-3 rounded-xl shadow-md flex items-center space-x-4">
                        <div className="bg-red-50 p-3 rounded-full">
                           <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0 1H9m3 0h3m-3 1H9m3 0h3m-3 1H9m3 0h3m0-1v-1m0 1v.01"></path></svg>
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                            <p className="text-gray-600 text-sm">{item.label}</p>
                            <p className={`text-md font-semibold ${item.isCta ? 'text-blue-600' : 'text-gray-900'}`}>{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default DashboardPage;
