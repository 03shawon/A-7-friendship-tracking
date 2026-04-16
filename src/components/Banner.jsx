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
        <div className="pt-10 pb-16 px-4">
            <div className="container mx-auto">
                <div className="bg-white  p-8 md:p-16 text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-[#64748B] max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] hover:bg-[#1b3a30] text-white border-none px-8 rounded-lg flex items-center gap-2 mx-auto transition-all shadow-lg font-bold">
                        <UserPlus size={20} />
                        Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-all">
                            <h2 className="text-3xl md:text-4xl font-black text-[#244D3F]">{stat.value}</h2>
                            <p className="text-[10px] md:text-xs text-[#64748B] uppercase tracking-[0.1em] mt-2 font-semibold">
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