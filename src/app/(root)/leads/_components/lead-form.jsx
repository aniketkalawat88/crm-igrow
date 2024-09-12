"use client"

import React , {useState} from 'react'
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const LeadForm = () => {
  const [isList , setIsList] = useState([]);
  const [isForm , setIsForm] = useState({
    name:'',
    date:'',
    email:'',
    phone:'',
    profession:'',
    owner:'',
    source:'',
    interseted:'',
    status:'',
    Quotation:'',
    Proposal:'',
    Invoice:'',
    Negotiation:'',
    Remark:'',
    Contract:''
  })
  const handleChange = (e) => {
    setIsForm({
      ...isForm,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isForm , "2346789")
    setIsList([...isList , isForm]);
  }
  return (
    <div className="max-w-3xl mx-auto p-8 h-[80vh] overflow-y-scroll">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Name</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={isForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Date</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="17/01/2024"
            type="text"
            name="date"
            value={isForm.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Email</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={isForm.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Phone</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="+91 78004581"
            type="text"
            name="phone"
            value={isForm.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Profession</label>
          <div className="flex items-center space-x-2">
            <input
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              placeholder="Enter Your Name"
              type="text"
              name="profession"
              value={isForm.profession}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Owner</label>
          <input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            placeholder="Enter Your Name"
            type="text"
            name="owner"
            value={isForm.owner}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Source</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="source" value={isForm.source} onChange={handleChange}>
            <option className="text-secondary-main" value="">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Interested</label>
          <select 
            className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="interseted"
            onChange={handleChange} value={isForm.interseted}
          >
            <option className="text-secondary-main" value="">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Lead Status</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="status" value={isForm.status} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Quotation sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Quotation" value={isForm.Quotation} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Proposal sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Proposal" value={isForm.Proposal} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="yes">Yes</option>
            <option className="text-secondary-main" value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Invoice Sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Invoice" value={isForm.Invoice} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="yes">Yes</option>
            <option className="text-secondary-main" value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Negotiation</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Negotiation" value={isForm.Negotiation} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="yes">Yes</option>
            <option className="text-secondary-main" value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Remark</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Remark" value={isForm.Remark} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Contract Sent</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="Contract" value={isForm.Contract} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="Yes">Yes</option>
            <option className="text-secondary-main" value="No">No</option>
          </select>
        </div>
        <div className="mt-4 col-span-2">
          <button type="submit" className="w-full p-3 bg-primary-main text-black font-bold rounded">
            Sumit
          </button>
        </div>
      </form>
      {
        isList.map((ele,i) => (
          <div key={i}>
            {ele.name}
          </div>
        ))
      }
    </div>
  )
}

export default LeadForm