import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const page = () => {
  return (
    <div className=" w-[95%]">
        <h1 className="text-primary-main text-3xl font-semibold">Allowance & Deduction </h1>
        <div>
        <>
  <div className="flex justify-center items-center ">
    <div className="w-full grid grid-cols-2 gap-8">
      {/* Allowance Section */}
      <div>
        <h2 className="text-primary-main text-3xl font-bold mb-6 text-center my-10">
          Allowance
        </h2>
        <div className="space-y-10">
          {/* Input Rows */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="Mobile And Internet"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <IoMdAdd className="fas fa-plus" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="Movies"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="Entertainment"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="Tour"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="Fuel"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      {/* Deduction Section */}
      <div>
        <h2 className="text-primary-main text-3xl font-bold mb-6 text-center my-10">
          Deduction
        </h2>
        <div className="space-y-4">
          {/* Input Rows */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="PF"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <IoMdAdd className="fas fa-plus" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="ESI"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="TDS"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              defaultValue="GST"
              className="bg-gray-800 text-white w-full py-2 px-4 rounded-md focus:outline-none"
            />
            <button className="bg-primary-main text-black p-2 rounded-md">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <button className="bg-primary-main text-black py-2 px-6 rounded-md text-lg my-10 w-1/4">
      Save
    </button>
  {/* Include Font Awesome for icons */}
</>

        </div>
    </div>
  )
}

export default page