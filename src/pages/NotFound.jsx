import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-[#244D3F]">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page not found</p>
            <p className="text-gray-500 mt-2 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="px-8 py-3 bg-[#244D3F] text-white font-bold rounded-xl hover:bg-[#1a3a2f] transition-all">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;