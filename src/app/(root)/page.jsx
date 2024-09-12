/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LeadDetailed from './_components/_lead-components/lead-detailed';
import RevenueDetailed from './_components/_lead-components/revenue-detailed';
import { FaArrowUpLong } from "react-icons/fa6";
import { MyData } from '@/lib/Data';

const page = () => {
  const val = MyData.employedDetail.sort((a, b) => b.percent - a.percent);
  return (
      <div>
        <h1 className="text-[#EEF0F4] text-2xl font-bold">Dashboards</h1>
        <div className="grid grid-cols-12 my-8 gap-6 items-start">
          <div className=" col-span-8 space-y-6">
            <div className="bg-primary-bg p-4 rounded-xl">
              <LeadDetailed />
            </div>
            <div className="bg-primary-bg p-4 rounded-xl">
              <RevenueDetailed />
            </div>

          </div>
          <div className="col-span-4 bg-primaryBg rounded-xl p-4 w-[95%]">
            {/* <h3 className='absolute top-2 left-4 text-white font-normal text-lg'>Employee Detailed</h3> */}
            <div className="space-y-4 ">
              {
                MyData.employedDetail.map((ele,i) => (
              <div key={i} className="bg-[#3B4758] p-4 rounded-xl">
                <div className="space-y-2">
                  <p className=" space-x-2 text-[#BAC4D1] font-bold">{ele.name} <span className="text-xs font-normal"> ({ele.role} )</span></p>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-normal text-white">
                      Work Performance
                      </span>
                      <span className="text-sm font-medium text-[#BAC4D1] dark:text-text-secondary-main flex">
                        {ele.percent}% <FaArrowUpLong className="text-[#7CE7AC] text-sm scale-90" />
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                      <div className={`h-1 rounded-full ${ele.percent < 40 ? 'bg-[#FF5E5E]' : ele.percent <70 ? "bg-yellow-300" : "bg-[#7CE7AC]" }`} style={{ width: `${ele.percent}%` }} />
                    </div>
                  </div>

                </div>
              </div>

                ))
              }
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default page