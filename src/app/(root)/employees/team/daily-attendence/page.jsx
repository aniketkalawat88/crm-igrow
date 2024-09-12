import React from 'react'
import EmployeeNavbar from '../../_components/employee-navbar'
import { IoMdSearch } from "react-icons/io";

const page = () => {
  return (
    <div>
        <EmployeeNavbar />
        <div className="w-full">
  <h1 className="text-3xl font-bold text-primary-main my-6">Daily Attendance</h1>
  <form className="grid grid-cols-2 gap-6">
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="daily-attendance">
        Daily Attendance
      </label>
      <input
        className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        id="daily-attendance"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="shift">
        Shift
      </label>
      <input
        className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        id="shift"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor="date">
        Date
      </label>
      <input
        className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        id="date"
        type="text"
      />
    </div>
    <div className="col-span-2">
      <button className="bg-primary-main text-gray-900 font-bold py-2 px-4 rounded w-1/4">
        Get Employee
      </button>
    </div>
  </form>
</div>

<div className="w-[97%]">
    <div className="relative mt-16 mb-10">
      <input
        type="text"
        placeholder="search..."
        className="bg-gray-800 text-gray-400 rounded-xl pl-4 pr-10 py-2 focus:outline-none"
      />
      <IoMdSearch className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
    </div>
        <table className="min-w-full border border-white rounded-2xl overflow-hidden">
          <thead className="rounded-t-2xl rounded-2xl overflow-hidden">
            <tr className="bg-primary-main text-black ">
              <th className="py-2 px-4 border-b border-gray-700">Employee Id</th>
              <th className="py-2 px-4 border-b border-gray-700">Employee Name</th>
              <th className="py-2 px-4 border-b border-gray-700">Attendance By</th>
              <th className="py-2 px-4 border-b border-gray-700">In Time</th>
              <th className="py-2 px-4 border-b border-gray-700">Out Time</th>
              <th className="py-2 px-4 border-b border-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="text-white text-center">
            <tr className="border-b border-b-white">
              <td className="py-2 px-4 border-b border-gray-700">12160</td>
              <td className="py-2 px-4 border-b border-gray-700">Chanchal A.</td>
              <td className="py-2 px-4 border-b border-gray-700">Admin</td>
              <td className="py-2 px-4 border-b border-gray-700">09:45</td>
              <td className="py-2 px-4 border-b border-gray-700">6:30</td>
              <td className="py-2 px-4 border-b border-gray-700">Present</td>
            </tr>
            <tr className="border-b border-b-white">
              <td className="py-2 px-4 border-b border-gray-700">12160</td>
              <td className="py-2 px-4 border-b border-gray-700">Niharika</td>
              <td className="py-2 px-4 border-b border-gray-700">Admin</td>
              <td className="py-2 px-4 border-b border-gray-700">09:45</td>
              <td className="py-2 px-4 border-b border-gray-700">6:30</td>
              <td className="py-2 px-4 border-b border-gray-700">Present</td>
            </tr>
            <tr className="border-b border-b-white">
              <td className="py-2 px-4 border-b border-gray-700">12160</td>
              <td className="py-2 px-4 border-b border-gray-700">Aniket .1</td>
              <td className="py-2 px-4 border-b border-gray-700">Admin</td>
              <td className="py-2 px-4 border-b border-gray-700">09:45</td>
              <td className="py-2 px-4 border-b border-gray-700">6:30</td>
              <td className="py-2 px-4 border-b border-gray-700">Present</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default page