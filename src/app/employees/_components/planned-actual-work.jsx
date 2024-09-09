"use client"

import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
const PlannedActualWork = () => {
  return (
    <div className="bg-primaryBg rounded-2xl relative h-full ">
        <h3 className='absolute top-2 left-4 text-white font-semibold text-2xl p-4'>Planned vs Actual Work</h3>
      <ResponsiveContainer width="100%" height={400}  className="">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 105,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0.1 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#A9CAFF" activeBar={<Rectangle fill="#809FB8" stroke="green" />} />
          <Bar dataKey="uv" fill="#3662BB" activeBar={<Rectangle fill="#EB754D" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PlannedActualWork