import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/friend/${friend.id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="card bg-base-100 shadow-sm border border-gray-100 flex flex-col items-center text-center p-6 h-full hover:shadow-md transition-all cursor-pointer"
        >
            
            <figure className="mb-4">
                <img 
                    src={friend.picture} 
                    alt={friend.name} 
                    className="w-20 md:w-24 h-20 md:h-24 rounded-full object-cover ring-4 ring-gray-50" 
                />
            </figure>

            <h3 className="text-lg font-bold text-gray-800 leading-tight">{friend.name}</h3>
            <p className="text-[#64748B] text-[11px] mt-1 mb-4 font-medium">{friend.days_since_contact}d ago</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-[#D1FAE5] text-[#10B981] text-[10px] font-bold px-3 py-1 rounded-full uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="w-full mt-auto space-y-4">
                <span className={`block w-full py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest ${
                    friend.status === 'on-track' ? 'bg-[#244D3F]' : 
                    friend.status === 'overdue' ? 'bg-[#EF4444]' : 'bg-[#F59E0B]'
                }`}>
                    {friend.status === 'on-track' ? 'On-Track' : 
                     friend.status === 'overdue' ? 'Overdue' : 'Almost Due'}
                </span>

            
            </div>
        </div>
    );
};

export default FriendCard;