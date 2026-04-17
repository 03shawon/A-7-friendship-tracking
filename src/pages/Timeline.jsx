import React, { useState, useEffect } from 'react';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const Timeline = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const savedTimeline = JSON.parse(localStorage.getItem('timeline')) || [];
        setEntries(savedTimeline);
    }, []);

    const getIcon = (type) => {
        if (type === 'call') return callIcon;
        if (type === 'text') return textIcon;
        return videoIcon;
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl font-bold text-[#1E1E1E] mb-8 tracking-tight">Timeline</h2>
                
                <div className="mb-8">
                    <select className="select select-bordered w-full max-w-xs bg-white border-[#E9E9E9] text-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#244D3F]">
                        <option disabled selected>Filter timeline</option>
                        <option>All Interactions</option>
                        <option>Calls</option>
                        <option>Texts</option>
                        <option>Videos</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {entries.length > 0 ? (
                        entries.map((entry) => (
                            <div key={entry.id} className="bg-white p-5 rounded-xl border border-[#E9E9E9] shadow-sm flex items-center gap-6 hover:shadow-md transition-all duration-200 group">
                                <div className="p-1">
                                    <img 
                                        src={getIcon(entry.type)} 
                                        alt={entry.type} 
                                        className="w-7 h-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-bold text-[#1E1E1E]">
                                        {entry.title.split(' with ')[0]} 
                                        <span className="font-medium text-[#64748B] ml-1">
                                            with {entry.title.split(' with ')[1]}
                                        </span>
                                    </h4>
                                    <p className="text-[12px] font-semibold text-[#64748B] mt-0.5 uppercase tracking-wide">
                                        {entry.date}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-[#E9E9E9]">
                            <p className="text-[#64748B] font-medium italic">No interactions logged yet.</p>
                            <p className="text-xs text-gray-400 mt-2">Check in with a friend to see history here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;