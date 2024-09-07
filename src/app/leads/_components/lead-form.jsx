import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const LeadForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 h-[80vh] overflow-y-scroll">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Name</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Name"
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Date</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="17/01/2024"
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Email</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Phone</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="+91 78004581"
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Profession</label>
          <div className="flex items-center space-x-2">
            <input
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              placeholder="Enter Your Name"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Owner</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Name"
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Source</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Interested</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Status</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Quotation sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Proposal sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Invoice Sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Negotiation</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Remark</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Contract Sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded">
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main">Yes</option>
            <option className="text-secondary-main">No</option>
          </select>
        </div>
      </div>
      <div className="mt-8">
        <button className="w-full p-3 bg-primary-main text-black font-bold rounded">
          Sumit
        </button>
      </div>
    </div>
  )
}

export default LeadForm