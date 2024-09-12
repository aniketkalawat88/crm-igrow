/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RevenueNavbar from './_components/revenue-navbar'
import RevenueComparison from './_components/revenue-comparison'
import GoalsRevenue from './_components/goals-revenue'
import InvoiceRevenue from './_components/invoice-revenue'
import ProfitLossRevenue from './_components/profit-loss-revenue'

const Revenue = () => {
  const rev= [
    {
      name:'Social Media Marketing',
      rs:'Rs. 23,8998.99',
      icons:'',
      color:'#5B66F3',
    },
    {
      name:'Web Development',
      rs:'Rs. 23,8998.99',
      icons:'',
      color:'#940B92',
    },
    {
      name:'Performance Marketing',
      rs:'Rs. 23,8998.99',
      icons:'',
      color:'#662549',
    },
    {
      name:'CRM',
      rs:'Rs. 23,8998.99',
      icons:'',
      color:'#435585',
    },
  ]
  return (
    <div>
        <RevenueNavbar />
        <div className="grid grid-cols-2 gap-4 text-white">
          {
            rev.map((ele,i) => (
          <div key={i} className="flex items-center justify-between bg-[#1D232C] px-4 py-6 rounded-lg">
            <div className="flex items-center">
            <div className={`bg-[${ele.color}] p-3 rounded-full h-10 w-10`}>
            </div>
            <div className="ml-4">
              <div className="text-xl text-[#BAC4D1]">
              {ele.name}
              </div>
              <div className="text-2xl text-white mt-2">
              {ele.rs}
              </div>
            </div>
            </div>
            <div>
            <img alt="Graph showing social media marketing trends" className="h-12" height="50" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-uCv088H5fe1DjbdnpCmYYFaE.png?st=2024-09-07T08%3A52%3A15Z&amp;se=2024-09-07T10%3A52%3A15Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-06T21%3A33%3A41Z&amp;ske=2024-09-07T21%3A33%3A41Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=wtcy8QXYparye2OAbKfPc%2B1dOMaMtGW87cXQL284zfQ%3D" width="100"/>
            </div>
          </div>
            ))
          }
        </div>
        <div className="grid grid-cols-2 gap-6 my-8">
          <div className="bg-[#1D232C]">
            <RevenueComparison />
          </div>
          <div className="bg-[#1D232C]">
            <p className="text-xl text-white p-6">Goals Revenue </p>
            <GoalsRevenue />
          </div>
        </div>
        <div className="bg-[#1D232C] my-10">
          <InvoiceRevenue />
        </div>
        <div className="bg-[#1D232C]">
          <ProfitLossRevenue />
        </div>
    </div>
  )
}

export default Revenue