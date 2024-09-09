/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import EmployeeNavbar from '../../_components/employee-navbar';

const page = () => {
  return (
    <div>
      <EmployeeNavbar />
        <div className="">
  <div className="flex items-center justify-start mb-8">
    <div className="w-44 h-44 rounded-full border-4 border-gray-700 flex items-center justify-center text-center text-gray-400 bg-[#2B3441] text-xl pt-10">
      Add employee photo
    </div>
  </div>
  <h2 className="text-primary-main text-2xl mb-6 font-bold">Personal Details</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <FaRegUser className="" /> Full Name
      </label>
      <input
        type="text"
        defaultValue="Chanchal Asudani"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <FiPhoneCall className="" /> Phone
      </label>
      <input
        type="text"
        defaultValue={8085366801}
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Email
      </label>
      <input
        type="text"
        defaultValue="Chanchal Asudani"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <IoCallOutline className="" /> Alternate No.
      </label>
      <input
        type="text"
        defaultValue="Chanchal Asudani"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Aadhar Card No.
      </label>
      <input
        type="text"
        defaultValue="5797-2020-4776"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Pan Card No.
      </label>
      <input
        type="text"
        defaultValue="JDUNPA"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Father's Name
      </label>
      <input
        type="text"
        defaultValue="Suresh Asudani"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Mother's Name
      </label>
      <input
        type="text"
        defaultValue="Sheela Asudani"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Parent's No.
      </label>
      <input
        type="text"
        defaultValue="91+78983668011"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Current Address
      </label>
      <input
        type="text"
        defaultValue="Hno 10 swadesh nagar ashoka garden Bhopal (M.P)"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
    <div>
      <label className="flex items-center gap-2 mb-2 text-white">
        <CiMail className="" /> Permanent Address
      </label>
      <input
        type="text"
        defaultValue="Same as"
        className="w-full p-2 bg-[#2B3441] text-[#809FB8] border border-gray-700 rounded"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default page