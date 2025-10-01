import React from 'react';
import logo from '../../assets/sd-png.png';

const SplashScreen = () => (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
        {/* Top black curved section */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black" style={{ borderBottomLeftRadius: '50% 30%', borderBottomRightRadius: '50% 30%' }}>
            {/* Bokeh effect */}
            {[...Array(15)].map((_, i) => {
                const size = Math.random() * 50 + 10;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const opacity = Math.random() * 0.3 + 0.1;
                return (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gray-400"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: `${top}%`,
                            left: `${left}%`,
                            opacity: opacity,
                        }}
                    ></div>
                );
            })}
        </div>
        
        {/* White section with Bokeh */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white">
             {[...Array(15)].map((_, i) => {
                const size = Math.random() * 50 + 10;
                const bottom = Math.random() * 100;
                const left = Math.random() * 100;
                const opacity = Math.random() * 0.2 + 0.05;
                return (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gray-300"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            bottom: `${bottom}%`,
                            left: `${left}%`,
                            opacity: opacity,
                        }}
                    ></div>
                );
            })}
         </div>

        {/* Logo and Text */}
        <div className="z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-8">
            <div className="bg-white rounded-full p-4 shadow-2xl mb-4">
                <img src={logo} alt="Logo" className="w-32 h-auto" />
            </div>
            <h1 className="text-4xl font-bold">
                <span className="text-red-600">SD</span>
                <span className="text-black"> Pay</span>
            </h1>
        </div>
    </div>
);

export default SplashScreen;

