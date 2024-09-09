"use client"

import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    amt: 0,
  },
  {
    name: 'Feb',
    amt: 4510,
  },
  {
    name: 'Mar',
    amt: 1500,
  },
  {
    name: 'Apr',
    amt: 4000,
  },
  {
    name: 'May',
    amt: 6181,
  },
  {
    name: 'Jun',
    amt: 500,
  },
  {
    name: 'Jul',
    amt: 1100,
  },
  {
    name: 'Jul',
    amt: 9400,
  },
  {
    name: 'Aug',
    amt: 8100,
  },
  {
    name: 'Sep',
    amt: 4100,
  },
  {
    name: 'Oct',
    amt: 8100,
  },
  {
    name: 'Nov',
    amt: 3000,
  },
  {
    name: 'Dec',
    amt: 600,
  },
];

const RevenueComparison = () => {
  return (
    <div className="p-2">
      <p className="text-xl text-white p-6">Comparison Revenue </p>
      <ResponsiveContainer width={"100%"} height={280}>
        <AreaChart
          width={100}
          height={100}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorAmt1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F05941" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#F05941" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0 9" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={13} fontWeight={500} dy={10} />
          <Tooltip />
          <Area dataKey="amt" stroke="#F05941" fillOpacity={5} fill="url(#colorAmt1)" />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueComparison;