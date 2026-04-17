import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import FriendCard from '../components/FriendCard';

const Home = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            </div>
        );
    }

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