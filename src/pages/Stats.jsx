import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const timeline = JSON.parse(localStorage.getItem('timeline')) || [];
        
        const counts = timeline.reduce((acc, entry) => {
            acc[entry.type] = (acc[entry.type] || 0) + 1;
            return acc;
        }, {});

        const chartData = [
            { name: 'Text', value: counts.text || 0 },
            { name: 'Call', value: counts.call || 0 },
            { name: 'Video', value: counts.video || 0 },
        ];
        setData(chartData);
    }, []);

    const COLORS = [ '#244D3F', '#A159D5', '#3BBA74'];

    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <div className="flex justify-center gap-10 mt-10 text-[11px] font-semibold text-[#64748B]">
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span>{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-bold text-[#1E1E1E] mb-12 tracking-tight">Friendship Analytics</h2>
                
                <div className="bg-white p-10 rounded-2xl border border-[#E9E9E9] shadow-sm">
                    <p className="text-xs font-semibold text-[#64748B] mb-1 uppercase tracking-wide">
                        By Interaction Type
                    </p>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={90}
                                    outerRadius={130}
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={10}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend content={renderLegend} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;