"use client"

import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

export default function TaskStatus() {
    const data01 = [
        {
            "name": "Closed",
            "value": 150,
            "color":'#809FB8',
        },
        {
            "name": "In Progress",
            "value": 130,
            "color":'#EB754D',
        },
        {
            "name": "Validated",
            "value": 80,
            "color":'#DB5AEE',
        },
        {
            "name": "Open",
            "value": 60,
            "color":'#FF9800',
        },
        {
            "name": "In Review",
            "value": 140,
            "color":'#1AD598',
        },
        {
            "name": "On Hold",
            "value": 140,
            "color":'#1AD598',
        },
        {
            "name": "Testing",
            "value": 140,
            "color":'#1AD598',
        },
    ];

    const COLORS = ['#FF9800', '#002161', '#610000', '#4C48EC', '#F4E824','#EE000E','#006141'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text style={{ fontWeight: 500, fontSize: "16px" }} x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="bg-primaryBg rounded-2xl relative">
            <h3 className='absolute top-2 left-4 text-white font-semibold text-2xl p-4'>Task By Status</h3>
            <div className='flex items-center gap-4'>
                <ResponsiveContainer width={"100%"} height={400} className="mt-8 p-4">
                    <PieChart width={100} height={100}>
                        <Pie data={data01} dataKey="value" nameKey={"name"} cx={"50%"} cy={"46%"} outerRadius={150} fill="#8884d8" labelLine={false} label={renderCustomizedLabel} >
                            {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                
                <div className="w-[80%] space-y-7">
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#FF9800] h-5 w-5 rounded-full"></div>Closed</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#002161] h-5 w-5 rounded-full"></div>In Progress</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#610000] h-5 w-5 rounded-full"></div> Validated</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#4C48EC] h-5 w-5 rounded-full"></div>Open</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#F4E824] h-5 w-5 rounded-full"></div>In Review</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#EE000E] h-5 w-5 rounded-full"></div>On Hold</div>
                    <div className="flex items-center gap-2 text-lg text-[#809FB8]"><div className="bg-[#006141] h-5 w-5 rounded-full"></div>Testing</div>
                </div>
            </div>
        </div>
    )
}
