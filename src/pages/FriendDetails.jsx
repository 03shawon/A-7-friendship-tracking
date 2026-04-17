import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                const foundFriend = data.find(f => f.id === parseInt(id));
                setFriend(foundFriend);
            });
    }, [id]);

    const handleCheckIn = (type) => {
        if (!friend) return;

        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            title: `${type} with ${friend.name}`,
            type: type.toLowerCase()
        };
        
        const existingEntries = JSON.parse(localStorage.getItem('timeline')) || [];
        localStorage.setItem('timeline', JSON.stringify([newEntry, ...existingEntries]));
        
        toast.success(`${type} with ${friend.name}`, {
            style: { 
                border: '1px solid #244D3F', 
                padding: '16px', 
                color: '#244D3F',
                borderRadius: '12px',
                fontWeight: 'bold'
            },
            iconTheme: { primary: '#244D3F', secondary: '#FFFAEE' },
        });
    };

    if (!friend) return <div className="text-center py-20 font-bold text-gray-500 italic">Loading...</div>;

    return (
        <div className="bg-[#F9FAFB] min-h-screen pb-20">
            <Toaster position="top-center" reverseOrder={false} />
            
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                            <img src={friend.picture} alt={friend.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-gray-50" />
                            <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
                            <div className="flex justify-center gap-2 my-3">
                                <span className={`px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase ${friend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-red-500'}`}>
                                    {friend.status}
                                </span>
                                {friend.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-600 uppercase">{tag}</span>
                                ))}
                            </div>
                            <p className="text-gray-500 italic text-sm mb-2">"{friend.bio}"</p>
                            <p className="text-gray-400 text-xs font-medium">Preferred: {friend.email}</p>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 hover:bg-green-50 transition-all flex items-center justify-center gap-2">⏰ Snooze 2 Weeks</button>
                            <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">📦 Archive</button>
                            <button className="w-full py-3 bg-white border border-red-100 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all flex items-center justify-center gap-2">🗑️ Delete</button>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <h4 className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</h4>
                                <p className="text-xs text-gray-400 font-medium uppercase mt-2">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <h4 className="text-3xl font-bold text-gray-800">{friend.goal}</h4>
                                <p className="text-xs text-gray-400 font-medium uppercase mt-2">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800">{friend.next_due_date}</h4>
                                <p className="text-xs text-gray-400 font-medium uppercase mt-2">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 className="text-sm font-bold text-gray-800 mb-1">Relationship Goal</h4>
                                <p className="text-sm text-gray-500 font-medium">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
                            </div>
                            <button className="px-6 py-2 bg-gray-50 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-100">Edit</button>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-bold text-gray-800 mb-6 uppercase tracking-wider">Quick Check-In</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all group active:scale-95">
                                    <img src={callIcon} alt="Call" className="w-8 h-8 opacity-70 group-hover:opacity-100" />
                                    <span className="text-xs font-bold text-gray-600">Call</span>
                                </button>
                                <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all group active:scale-95">
                                    <img src={textIcon} alt="Text" className="w-8 h-8 opacity-70 group-hover:opacity-100" />
                                    <span className="text-xs font-bold text-gray-600">Text</span>
                                </button>
                                <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all group active:scale-95">
                                    <img src={videoIcon} alt="Video" className="w-8 h-8 opacity-70 group-hover:opacity-100" />
                                    <span className="text-xs font-bold text-gray-600">Video</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;