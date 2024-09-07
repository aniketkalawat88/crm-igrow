"use client"

import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

export default function DealsChart() {
    const data01 = [
        {
            "name": "New",
            "value": 150
        },
        {
            "name": "In Process",
            "value": 130
        },
        {
            "name": "Invoice",
            "value": 80
        },
        {
            "name": "Successful Deal",
            "value": 60
        },
        {
            "name": "Pipeline Deals",
            "value": 140
        },
    ];

    const COLORS = ['#FF9800', '#1AD598', '#006141', '#EE000E', '#C9666C', '#F4E824', '#4C48EC', '#610000', '#002161', '#DB5AEE'];

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
        <div className=''>
            <ResponsiveContainer width={"100%"} height={400}>
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
    )
}
