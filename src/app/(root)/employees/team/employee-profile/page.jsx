/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import GoalsRevenue from '@/app/(root)/revenue/_components/goals-revenue';
import PlannedActualWork from '../../_components/planned-actual-work';
import TotalUtilize from '../../_components/total-utilize';
import DaysComparison from '../../_components/days-comparison';
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
  <div className="flex space-x-6 text-white">
    <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
      <img
        src="/assests/admin-images/03.png"
        alt="Profile Photo"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold mt-2">Chanchal Asudani</h2>
      <p className="text-white my-2">UI/UX Designer</p>
      <span className="text-lg text-[#7D8592] border-2 border-[#7D8592] rounded-md px-4 py-1 mt-2">
        Senior
      </span>
      {/* Icons */}
      <div className="flex space-x-4 mt-6 text-lg">
        <a href="#" className="p-2 rounded-full bg-black hover:bg-gray-600">
          <IoIosCall className="" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black hover:bg-gray-600">
          <FiMessageSquare className="fas fa-envelope" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black hover:bg-gray-600">
          <MdOutlineEmail className="fas fa-comment-dots" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black hover:bg-gray-600">
          <MdOutlineCalendarToday className="fas fa-ellipsis-h" />
        </a>
        <a href="#" className="p-2 rounded-full bg-black hover:bg-gray-600">
          <CiMenuKebab className="fas fa-ellipsis-h" />
        </a>
      </div>
      <div className="bg-[#2B3441] p-1 px-2 rounded-xl w-full my-10">
        <h3 className="text-base font-semibold mb-4">Overall Performance</h3>
        <div className="w-full h-2 bg-gray-700 rounded-full relative mt-7">
          <div
            className="absolute top-0 left-0 h-full bg-[#FF9800] rounded-full"
            style={{ width: "80%" }}
          />
        </div>
        <p className="mt-2 text-right text-sm">80%</p>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-2 gap-6">
      {/* Planned vs Actual Work */}
      <div className="col-span-2">
          <PlannedActualWork />
      </div>
        <TotalUtilize />
        <DaysComparison />
    </div>
    
  </div>
    <p className="text-primary-main text-2xl mb-6 font-bold my-10">Personal Details</p>
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
  )
}

export default page