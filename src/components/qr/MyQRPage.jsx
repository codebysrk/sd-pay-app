import React from 'react';

const MyQRPage = ({ user }) => {
    const qrData = `upi://pay?pa=${user.upiId}&pn=${encodeURIComponent(user.name)}&mc=0000&tid=NA&tr=NA&tn=Payment&am=0.00&cu=INR`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrData)}`;

    return (
        <div className="p-4 bg-gray-100 h-full flex flex-col items-center justify-center text-center">
             <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs">
                <img src={qrCodeUrl} alt="Your UPI QR Code" className="w-48 h-48 mx-auto" />
                <h2 className="text-2xl font-bold mt-4 text-zinc-800">{user.name}</h2>
                <p className="text-gray-600 mt-1">{user.upiId}</p>
                <p className="text-xs text-gray-400 mt-4">Scan this QR code to pay me using any UPI app</p>
             </div>
        </div>
    );
};

export default MyQRPage;
