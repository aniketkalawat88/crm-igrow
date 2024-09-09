import React from 'react'
import EmployeeNavbar from '../../_components/employee-navbar'

const page = () => {
  return (
    <div>
        <EmployeeNavbar />
        <div className="">
  <h1 className="text-2xl font-bold text-primary-main mb-6">Company Details</h1>
  <div className="grid grid-cols-2 gap-6">
    <div>
      <label htmlFor="employee-id" className="block mb-2 text-white">
        Employee Id
      </label>
      <input
        type="text"
        id="employee-id"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="department" className="block mb-2 text-white">
        Department
      </label>
      <input
        type="text"
        id="department"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="designation" className="block mb-2 text-white">
        Designation
      </label>
      <input
        type="text"
        id="designation"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="date-of-joining" className="block mb-2 text-white">
        Date of Joining <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="date-of-joining"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="date-of-leaving" className="block mb-2 text-white">
        Date of Leaving
      </label>
      <input
        type="text"
        id="date-of-leaving"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="manager" className="block mb-2 text-white">
        Manager
      </label>
      <input
        type="text"
        id="manager"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div>
      <label htmlFor="status" className="block mb-2 text-white">
        Status
      </label>
      <input
        type="text"
        id="status"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default page