import React from 'react'

export default function LeadsForPieChart() {
    return (
        <div className='h-full w-full p-8'>
            <div className='funnel-shape h-full w-full scale-[0.8]'>
                <div className='grid h-full w-full text-lg text-white'>
                    <div className='bg-[#940B92] flex justify-center items-center p-4'>Social Media Marketing</div>
                    <div className='bg-[#818FB4] flex justify-center items-center p-4 w-[90%] mx-auto'>Performance Marketing</div>
                    <div className='bg-[#F6B17A] flex justify-center items-center p-4 w-[80%] mx-auto'>Web Development</div>
                    <div className='bg-[#E3651D] flex justify-center items-center p-4 w-[70%] mx-auto'>CRM</div>
                </div>
            </div>
        </div>
    )
}
