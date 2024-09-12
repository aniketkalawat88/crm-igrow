import React from 'react'
import EmployeeNavbar from '../../_components/employee-navbar'

const page = () => {
  return (
    <div>
        <EmployeeNavbar />
        <div className="">
  <div className="mb-8">
    <h2 className="text-primary-main text-xl font-bold mb-4">
      Financial Details
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="salary-type" className="block mb-2 text-white">
          Salary Type
        </label>
        <input
          type="text"
          id="salary-type"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="payscale" className="block mb-2 text-white">
          Payscale
        </label>
        <input
          type="text"
          id="payscale"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
    </div>
  </div>
  <div className="mb-8">
    <h2 className="text-primary-main text-xl font-bold mb-4">
      Bank Account Details
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="bank-holder-name" className="block mb-2 text-white">
          Bank Holder Name
        </label>
        <input
          type="text"
          id="bank-holder-name"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="account-number" className="block mb-2 text-white">
          Account Number
        </label>
        <input
          type="text"
          id="account-number"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="bank-name" className="block mb-2 text-white">
          Bank Name
        </label>
        <input
          type="text"
          id="bank-name"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="branch-name" className="block mb-2 text-white">
          Branch Name
        </label>
        <input
          type="text"
          id="branch-name"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="branch-code" className="block mb-2 text-white">
          Branch Code
        </label>
        <input
          type="text"
          id="branch-code"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
    </div>
  </div>
  <div>
    <h2 className="text-primary-main text-xl font-bold mb-4">
      Social media Account
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="linkedin" className="block mb-2 text-white">
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedin"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label htmlFor="instagram" className="block mb-2 text-white">
          Instagram
        </label>
        <input
          type="text"
          id="instagram"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default page