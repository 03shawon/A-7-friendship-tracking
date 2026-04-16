import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import FriendCard from '../components/FriendCard';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div className="bg-[#F9FAFB] min-h-screen">
            <Banner />
            <div className="container mx-auto px-4 pb-20">
                <div className="flex justify-between items-center mb-8 px-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Your Friends</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                    {friends.map(friend => (
                        <FriendCard key={friend.id} friend={friend} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;