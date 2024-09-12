/* eslint-disable @next/next/no-img-element */
import React from 'react'
import LeadsPieChart from '../_components/_lead-components/lead-pie-chart';
import FunnelChart from '../_components/_lead-components/funnel-chart';
import LeadsForPieChart from '../_components/_lead-components/leads-for-chart';
import DealsChart from '../_components/_lead-components/deals-chart';
import LeadDetailed from '../_components/_lead-components/lead-detailed';
import LeadNavbar from './_components/lead-navbar';

const page = () => {
  return (
      <div>
      <LeadNavbar />
      <div className="grid grid-cols-12 my-8 gap-6 items-start">
        <div className="bg-primary-bg p-4 rounded-xl col-span-8">
          <LeadDetailed />
        </div>
        <div className="col-span-4 bg-primaryBg rounded-md relative">
          <h3 className='absolute top-2 left-4 text-white font-normal text-lg'>Leads Source</h3>
          <LeadsPieChart />
        </div>
        <div className='col-span-7 bg-primaryBg rounded-md relative'>
          <h3 className='absolute top-2 left-4 text-white font-normal text-lg'>Leads Status</h3>
          <FunnelChart />
        </div>
        <div className='col-span-5 bg-primaryBg rounded-md relative h-full'>
          <h3 className='absolute top-2 left-4 text-white font-normal text-lg'>Leads Owner</h3>
          <DealsChart />
        </div>
        <div className='col-span-6 bg-primaryBg rounded-md relative h-full'>
          <h3 className='absolute top-2 left-4 text-white font-medium text-lg'>Leads For</h3>
          <LeadsForPieChart />
        </div>

        <div className='col-span-6 bg-primaryBg rounded-md relative h-full'>
          <h3 className='absolute top-2 left-4 text-white font-normal text-lg'>Deals</h3>
          <LeadsPieChart />
        </div>
        
      </div>
      </div>
  )
}

export default page