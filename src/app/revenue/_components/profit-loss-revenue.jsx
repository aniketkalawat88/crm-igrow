"use client"

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 5490,
    pv: 300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 1490,
    pv: 3300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 4490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 490,
    pv: 5300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ProfitLossRevenue = () => {
  return (
    
    <div className="p-2">
      <p className="text-xl text-white p-6">Profit/Loss</p>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
        <defs>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00DEA3" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#00DEA3" stopOpacity={0.01} />
          </linearGradient>
          <linearGradient id="colorAmt1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00DEA3" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#00DEA3" stopOpacity={0.01} />
          </linearGradient>
        </defs>
          <CartesianGrid strokeDasharray="0 3 1 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area dataKey="uv" stroke="#00DEA3" fillOpacity={5} stackId="1" fill="url(#colorAmt)" />
          <Area dataKey="pv" stroke="#CB1E29" fillOpacity={5} stackId="1" fill="url(#colorAmt1)" />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ProfitLossRevenue