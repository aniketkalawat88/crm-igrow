import { MyData } from '@/lib/Data'
import Image from 'next/image'
import React from 'react'

const TopPerformance = () => {
  const data = MyData.employedDetail;
  const top3Performers = MyData.employedDetail.sort((a, b) => b.percent - a.percent).slice(0, 2);
  const val = data.sort((a,b) => 
    (b.percent-a.percent)
  );

  return (
    <div className="bg-[#1D232C] max-w-2xl p-6 rounded-2xl">
      <p className="text-2xl font-semibold">Top Performance</p>
      <p className="text-[#809FB8] mt-1.5">(Current Month)</p>
      <div className="p-3.5 grid grid-cols-3 justify-items-center">
        {
          data.slice(0,3).map((ele,i) => (
        <div key={i} className="flex flex-col justify-center items-center">
          <div className="relative h-24 w-24">
            <Image src={ele.img} alt="" fill className="object-cover rounded-full border-2 border-[#DBAA52]" />
            <p className="bg-[#F9CC7A] w-5 h-5 absolute -bottom-2 left-1/3 text-sm mx-auto flex justify-center items-center rounded-full ml-1 text-black">{i+1}</p>
          </div>
          <p className="text-[#809FB8] mt-2">{ele.name}</p>
        </div>
          ))
        }
      </div>
        
    </div>
  )
}

export default TopPerformance