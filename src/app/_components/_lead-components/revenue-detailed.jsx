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

const RevenueDetailed = () => {
  return (
    <div className="grid grid-cols-9">
      <div className="text-white col-span-2">
        <p className="text-xl">Revenue Detailed </p>
        <div className="my-4 space-y-4">
          <div>
            <p className="text-secondary-main text-sm">Deal</p>
            <p className="text-white mt-2">98</p>
          </div>
          <div>
            <p className="text-secondary-main text-sm">Reference</p>
            <p className="text-white mt-2">82</p>
          </div>
          <div>
            <p className="text-secondary-main text-sm">Web Development</p>
            <p className="text-white mt-2">782</p>
          </div>
          <div>
            <p className="text-secondary-main text-sm">Social Media Marketing</p>
            <p className="text-white mt-2">108</p>
          </div>
        </div>
      </div>
      <div className="col-span-7 p-10">
        <ResponsiveContainer width={"100%"} height={280}>
          <AreaChart
            width={100}
            height={100}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorAmt1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B142F5" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#B142F5" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1 9" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={13} fontWeight={500} dy={10} />
            <YAxis dataKey={"amt"} tickLine={false} axisLine={false} fontSize={13} fontWeight={500} dx={-1} tickCount={5} tickFormatter={(numer) => `$${numer.toFixed(0)}`} />
            <Tooltip />
            <Area dataKey="amt" stroke="#B142F5" fillOpacity={5} fill="url(#colorAmt1)" />
          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default RevenueDetailed;