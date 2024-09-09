import { MyData } from '@/lib/Data'
import Image from 'next/image'
import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import EmployeeNavbar from '../_components/employee-navbar';
import Link from 'next/link';

const page = () => {
    const data = MyData.employedDetail;
  return (
    <div>
        <EmployeeNavbar />
        <div className="grid grid-cols-4 gap-8 my-6">
            {
                data.map((ele,i) => (
                <div key={i} className="h-80 bg-[#809FB8] rounded-3xl p-2 relative">
                    <Link href="/employees/team/personal-detail" className=""> <CiMenuKebab className="text-white absolute right-6 top-6" /> </Link>
                    <div className="bg-[#1D232C] p-4 rounded-3xl">
                        <div className="h-14 w-14 rounded-full relative mx-auto border-2 border-[#F4E824]">
                            <Image src={ele.img} alt="No Preview" fill className="object-cover rounded-full p-1" />
                        </div>
                        <p className="text-white font-bold text-center mt-4">{ele.name}</p>
                        <p className="text-sm text-[#ffffff] text-center">{ele.role}</p>
                        <p className="text-[#809FB8] text-xs text-center my-3 border border-[#809FB8] w-fit rounded p-1 mx-auto">Senior</p>
                    </div>
                    <div className="my-4 px-5 flex justify-between">
                        <div className="text-center">
                            <p className="text-3xl text-white font-bold">22</p>
                            <p className="text-sm text-[#141414] mt-2.5">Task</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl text-white font-bold">20</p>
                            <p className="text-sm text-[#141414] mt-2.5">In Process</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl text-white font-bold">2</p>
                            <p className="text-sm text-[#141414] mt-2.5">Closed</p>
                        </div>
                    </div>
                </div>

                ))
            }
        </div>
    </div>
  )
}

export default page