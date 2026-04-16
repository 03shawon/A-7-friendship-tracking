import React from 'react';
import { UserPlus } from 'lucide-react';

const Banner = () => {
    const stats = [
        { label: "Total Friends", value: 10 },
        { label: "On Track", value: 3 },
        { label: "Need Attention", value: 6 },
        { label: "Interactions This Month", value: 12 },
    ];

    return (
        <div className="bg-[#F9FAFB] pt-10 pb-16 px-4">
            <div className="container mx-auto">
                <div className="bg-white  p-12 text-center mb-10 shadow-sm">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto mb-8 text-lg">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] hover:bg-[#1b3a30] text-white border-none px-8 rounded-lg flex items-center gap-2 mx-auto transition-all shadow-md">
                        <UserPlus size={20} />
                        Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                            <h2 className="text-4xl font-black text-gray-800">{stat.value}</h2>
                            <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] mt-2 font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;