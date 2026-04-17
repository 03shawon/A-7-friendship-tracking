import React, { useState, useEffect } from 'react';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const Timeline = () => {
    const [allEntries, setAllEntries] = useState([]);
    const [filteredEntries, setFilteredEntries] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const savedTimeline = JSON.parse(localStorage.getItem('timeline')) || [];
        setAllEntries(savedTimeline);
        setFilteredEntries(savedTimeline);
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredEntries(allEntries);
        } else {
            const filtered = allEntries.filter(entry => entry.type === filter.toLowerCase());
            setFilteredEntries(filtered);
        }
    }, [filter, allEntries]);

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
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="select select-bordered w-full max-w-xs bg-white border-[#E9E9E9] text-[#64748B] text-sm focus:outline-none focus:ring-1 focus:ring-[#244D3F]"
                    >
                        <option value="All">All Interactions</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Texts</option>
                        <option value="Video">Videos</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry) => (
                            <div key={entry.id} className="bg-white p-5 rounded-xl border border-[#E9E9E9] shadow-sm flex items-center gap-6 group hover:shadow-md transition-all">
                                <div className="p-1">
                                    <img src={getIcon(entry.type)} alt={entry.type} className="w-7 h-7 opacity-60 group-hover:opacity-100" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-bold text-[#1E1E1E]">
                                        {entry.title.split(' with ')[0]} 
                                        <span className="font-medium text-[#64748B] ml-1">with {entry.title.split(' with ')[1]}</span>
                                    </h4>
                                    <p className="text-[12px] font-semibold text-[#64748B] mt-0.5 uppercase tracking-wide">{entry.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-400 italic">No {filter !== 'All' ? filter.toLowerCase() : ''} interactions found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;