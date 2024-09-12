"use client"

import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';


const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
const PlannedHours = () => {
  return (
    <div className="bg-[#1D232C] p-6 rounded-xl shadow-lg h-full">
        <p className="text-white text-2xl font-semibold mb-4">
        Planned Hours vs. Utilized Hours By Resource
        </p>
        
      <ResponsiveContainer width="100%" height={400} className="">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="0.1 5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={30} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>

    </div>
  )
}

export default PlannedHours