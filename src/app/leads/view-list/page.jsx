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

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const arr = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  const headin = [
    "Leads S.NO.",
    "Leads Name",
    "Email",
    "Phone",
    "Leads Profession",
    "Leads Owner",
    "Leads For",
    "Leads Source",
    "Status",
    "Interested",
    "Proposal sent",
    "Quotation sent",
    "Negotiation",
    "Invoice Sent",
    "Leads Source",
    "Contract Sent",
    "Leads Remark",
    "No. Of Follow up",
  ];
  return (
    <div className="relative">
        <div className="flex space-x-4 float-right absolute right-10 top-5 text-sm">
            <button className="flex items-center px-4 py-2 border border-gray-500 rounded-md text-gray-300" onClick={toggleModal}>
            <IoMdAdd className="mr-2" />
                Add New Leads
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-500 rounded-md text-gray-300">
                <IoIosSearch className="mr-2" />
                Search here
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
              <LeadForm />
            </div>
          </div>
        </div>
      )}
    </div> 
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
            {arr.map((ele, i) => (
                <tr key={i} className="">
                {headin.map((val, j) => (
                    <td key={j} className="border border-gray-700 p-4"></td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default ViewList;
