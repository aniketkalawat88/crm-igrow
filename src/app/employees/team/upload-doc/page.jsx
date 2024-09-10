import React from 'react'
import EmployeeNavbar from '../../_components/employee-navbar'
import { FiUpload } from "react-icons/fi";

const page = () => {
  return (
    <div>
        <EmployeeNavbar />
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-primary-main mb-8">Upload Documents</h1>
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Aadhar Card</h2>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Front Side of Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Back Side of your Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="grid grid-cols-2 gap-8 my-6">
                <div className="">
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Bank Passbook</h2>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Upload Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Pan Card</h2>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Upload Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Marksheet 12th class</h2>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Upload Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Marksheet 10th class</h2>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Upload Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-normal mb-4 text-white text-2xl">Upload Updated CV</h2>
                    <div className="bg-gray-800 p-6 rounded-lg text-center text-[#7D8592]">
                        <FiUpload className="text-4xl mb-4 mx-auto my-4" />
                        <p className="font-medium text-xl">Upload Document</p>
                        <p className="text-lg">
                        Drag &amp; drop files here or{" "}
                        <a href="#" className="text-blue-500 block">
                            attach file
                        </a>
                        </p>
                        <p className="text-sm">850 MB max file size.</p>
                    </div>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default page