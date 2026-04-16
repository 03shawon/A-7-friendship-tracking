import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <Banner />
            <div className="container mx-auto px-4 pb-20">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 px-2">Your Friends</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                </div>
            </div>
        </div>
    );
};

export default Home;