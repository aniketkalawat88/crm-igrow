import React from 'react'
import RevenueNavbar from '../_components/revenue-navbar'

const page = () => {

  return (
    <div>
        <RevenueNavbar />
        <div className="grid grid-cols-4 gap-8">
            <div className={`h-36 w-full flex items-center font-medium justify-center text-2xl bg-[#6D69F9] text-white`}>
            Gross Revenue
            </div>
            <div className={`h-36 w-full flex items-center font-medium justify-center text-2xl bg-[#EA3A3D] text-white`}>
            Expenses
            </div>
            <div className={`h-36 w-full flex items-center font-medium justify-center text-2xl bg-[#7BB31A] text-white`}>
            Net Profit 
            </div>
            <div className={`h-36 w-full flex items-center font-medium justify-center text-2xl bg-[#FFA800] text-white`}>
            Expected Revenue
            </div>
        </div>
        <div className="overflow-x-auto my-8">
            <table className="w-full text-sm text-left text-gray-500 border border-white">
            <thead className="text-xs text-gray-700 uppercase bg-primary-main">
                <tr>
                <th scope="col" className="px-6 py-3 border border-white">
                Revenue
                </th>
                <th scope="col" className="px-6 py-3 border border-white">
                Expected Revenue 
                </th>
                <th scope="col" className="px-6 py-3 border border-white">
                Archives Revenue 
                </th>
                <th scope="col" className="px-6 py-3 border border-white">
                Lost Revenue 
                </th>
                <th scope="col" className="px-6 py-3 border border-white">
                Conversion Revenue 
                </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-transparent">
                <th
                    scope="row"
                    className="px-6 py-4 border border-white font-medium text-white whitespace-nowrap"
                >
                    Rajah Armstrong
                </th>
                <td className="px-6 py-4 border border-white">
                    rajah.armstrong@yahoo.com
                </td>
                <td className="px-6 py-4 border border-white">1-636-140-1210</td>
                <td className="px-6 py-4 border border-white">Feb 26, 2022</td>
                <td className="px-6 py-4 border border-white">Feb 26, 2022</td>
                </tr>
            </tbody>
            </table>
        </div>

        
    </div>
  )
}

export default page