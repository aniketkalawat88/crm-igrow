"use client"

import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

export default function DaysComparison() {
    const data01 = [
        {
            "name": "Emergency Leave",
            "value": 150,
            "color":'#809FB8',
        },
        {
            "name": "Casual Leave Type",
            "value": 130,
            "color":'#EB754D',
        },
        {
            "name": "Sick Leave",
            "value": 80,
            "color":'#DB5AEE',
        },
        {
            "name": "Work From Home",
            "value": 60,
            "color":'#FF9800',
        },
        {
            "name": "Vacation Leave",
            "value": 140,
            "color":'#1AD598',
        },
    ];

    const COLORS = ['#1AD598', '#DB5AEE', '#EB754D', '#4A99F6', '#FF9800'];

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
            <h3 className='text-white font-semibold text-xl p-4'>Days Comparison</h3>
            <div className='flex items-center gap-4'>
                <ResponsiveContainer width={"100%"} height={350} className="p-6">
                    <PieChart width={100} height={100}>
                        <Pie data={data01} dataKey="value" nameKey={"name"} cx={"50%"} cy={"46%"} outerRadius={150} fill="#8884d8" labelLine={false} label={renderCustomizedLabel} >
                            {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
