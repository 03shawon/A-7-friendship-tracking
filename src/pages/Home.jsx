import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <Banner />
            
            <div className="container mx-auto px-4 pb-20">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Your Friends</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-400">
                        Friend Cards Coming Soon...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;