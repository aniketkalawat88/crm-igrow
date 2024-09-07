import React from 'react'

export default function FunnelChart() {
    return (
        <div className='h-full w-full'>
            <div className='funnel-shape h-full w-full my-10'>
                <div className='grid h-full w-full text-white'>
                    <div className='bg-[#2D3250] flex justify-center items-center p-2'>New(999)</div>
                    <div className='bg-[#5C8374] flex justify-center items-center p-2 w-full'>Connected(888)</div>
                    <div className='bg-[#435585] flex justify-center items-center p-2 w-full'>Interested(777)</div>
                    <div className='bg-[#940B92] flex justify-center items-center p-2 w-full'>Not-interested(666)</div>
                    <div className='bg-[#005B41] flex justify-center items-center p-2 w-full'>Proposal Sent(555)</div>
                    <div className='bg-[#E19898] flex justify-center items-center p-2 w-full'>Negotiation(444)</div>
                    <div className='bg-[#AE445A] flex justify-center items-center p-2 w-full'>Quotation Sent(333)</div>
                    <div className='bg-[#BE3144] flex justify-center items-center p-2 w-full'>Invoice Sent(222)</div>
                    <div className='bg-[#1AB582] flex justify-center items-center p-2 w-full'>Completed(111)</div>
                </div>
            </div>
        </div>
    )
}
