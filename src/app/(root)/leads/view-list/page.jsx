"use client"

import React , {useState} from "react";
import LeadNavbar from "../_components/lead-navbar";
import LeadForm from "../_components/lead-form";
import { IoMdAdd } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const ViewList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const date = new Date().toLocaleDateString();
    // console.log(date)

    const [isList , setIsList] = useState([]);
    const [isForm , setIsForm] = useState({
      name:'',
      date:date,
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
      // console.log(isForm , "2346789")
      isForm.date = date
      setIsList([...isList , isForm]);
      setIsOpen(false)
      setIsForm({
        name:'',
        date:'',
        email:'',
        phone:'',
        profession:'',
        owner:'',
        leadfor:'',
        source:'',
        interseted:'',
        status:'',
        Quotation:'',
        Proposal:'',
        Invoice:'',
        Negotiation:'',
        Remark:'',
        Contract:'',
      })
    }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // const arr = [
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  // ];
  const headin = [
    "Leads Date",
    "Leads Name",
    "Email",
    "Phone",
    "Leads Profession",
    "Leads Owner",
    "Leads For",
    "Leads Source",
    "Interested",
    "Status",
    "Quotation sent",
    "Proposal sent",
    "Invoice Sent",
    "Negotiation",
    "Leads Remark",
    "Contract Sent",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredForm = isList.filter((lead) => {
    return (
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) 
    );
  });
  return (
    <div className="relative">
        <div className="flex space-x-4 float-right absolute right-10 top-5 text-sm">
            <button className="flex items-center px-4 py-2 border border-gray-500 rounded-md text-gray-300" onClick={toggleModal}>
            <IoMdAdd className="mr-2" />
                Add New Leads
            </button>
            <button className="relative">
                <IoIosSearch className="mr-2 absolute" />
                <input
                   type="text"
                  placeholder="Search here"
                  className="px-4 py-2 border border-gray-500 rounded-md text-gray-300 bg-transparent"
                  value={searchQuery} // Bind input to searchQuery state
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                />
            </button>
            </div>
        <LeadNavbar />
       
        <div>
      {/* Main modal */}
      {isOpen && (
        <div
          id="static-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl">
            {/* Modal content */}
            <div className="relative bg-[#1D232C] rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div className="flex justify-between items-center">
                    <h1 className="text-primary-main text-2xl">Leads S.NO. 01</h1>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                    <RxCross1 />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
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
            value={date}
            // onChange={handleChange}
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
          <label className="block mb-2 text-sm text-secondary-main">Leads For</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="leadfor" value={isForm.leadfor} onChange={handleChange}>
            <option className="text-secondary-main">Select an option</option>
            <option className="text-secondary-main" value="Social Media Marketing">Social Media Marketing</option>
            <option className="text-secondary-main" value="Performance Marketing">Performance Marketing</option>
            <option className="text-secondary-main" value="Web Development">Web Development</option>
            <option className="text-secondary-main" value="CRM">CRM</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm text-secondary-main">Leads Source</label>
          <select className="text-secondary-main w-full p-2 bg-gray-800 border border-gray-700 rounded" name="source" value={isForm.source} onChange={handleChange}>
            <option className="text-secondary-main" value="">Select an option</option>
            <option className="text-secondary-main" value="Whatsapp">What’s App</option>
            <option className="text-secondary-main" value="Instagram">Instagram</option>
            <option className="text-secondary-main" value="Call">Call</option>
            <option className="text-secondary-main" value="linkedin">LinkedIn</option>
            <option className="text-secondary-main" value="Google My Business">Google My Business</option>
            <option className="text-secondary-main" value="Website">Websites</option>
            <option className="text-secondary-main" value="Advertisement">Advertisement</option>
            <option className="text-secondary-main" value="Reference">Reference</option>
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
            <option className="text-secondary-main" value="New">New</option>
            <option className="text-secondary-main" value="Connected">Connected</option>
            <option className="text-secondary-main" value="Interested">Interested</option>
            <option className="text-secondary-main" value="Not-Inetrested">Not-Inetrested</option>
            <option className="text-secondary-main" value="Proposal sent">Proposal sent</option>
            <option className="text-secondary-main" value="Negotiation">Negotiation</option>
            <option className="text-secondary-main" value="Quotation sent">Quotation sent</option>
            <option className="text-secondary-main" value="Invoice sent">Invoice sent</option>
            <option className="text-secondary-main" value="Completed">Completed</option>
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
    
    </div>
            </div>
          </div>
        </div>
      )}
    </div> 
      { isList.length === 0 ?
        <div className="text-white text-xl p-6 text-center">No data</div>
        :
        <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-700">
            <thead>
            <tr className="bg-primary-main text-lg font-normal">
                {headin.map((ele, i) => (
                <th
                    key={i}
                    className="border border-gray-700 px-4 py-2 text-center  min-w-64"
                >
                    {ele}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            { filteredForm.map((ele,i) => (
                <tr key={i} className="text-white text-center">
                  <td className="border border-gray-700 p-4">{ele.date}</td>
                  <td className="border border-gray-700 p-4">{ele.name}</td>
                  <td className="border border-gray-700 p-4">{ele.email}</td>
                  <td className="border border-gray-700 p-4">{ele.phone}</td>
                  <td className="border border-gray-700 p-4">{ele.profession}</td>
                  <td className="border border-gray-700 p-4">{ele.leadfor}</td>
                  <td className="border border-gray-700 p-4">{ele.owner}</td>
                  <td className="border border-gray-700 p-4">{ele.source}</td>
                  <td className="border border-gray-700 p-4">{ele.interseted}</td>
                  <td className="border border-gray-700 p-4">{ele.status}</td>
                  <td className="border border-gray-700 p-4">{ele.Quotation}</td>
                  <td className="border border-gray-700 p-4">{ele.Proposal}</td>
                  <td className="border border-gray-700 p-4">{ele.Invoice}</td>
                  <td className="border border-gray-700 p-4">{ele.Negotiation}</td>
                  <td className="border border-gray-700 p-4">{ele.Remark}</td>
                  <td className="border border-gray-700 p-4">{ele.Contract}</td>
                </tr>
              ))
            }
            </tbody>
        </table>
        </div>
      }
    </div>
  );
};

export default ViewList;
