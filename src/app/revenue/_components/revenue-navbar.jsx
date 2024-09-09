"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const RevenueNavbar = () => {
    const path = usePathname();
    const leadOver = [
        {
            name:'Revenue Overview  ',
            path:'',
            link:'/revenue',
        },
        {
            name:'Social Media Marketing',
            path:'',
            link:'/revenue/social-media-market',
        },
        {
            name:'Web Development',
            path:'',
            link:'/revenue/web-development',
        },
        {
            name:'Performance Marketing',
            path:'',
            link:'/revenue/performance-market',
        },
        {
            name:'CRM',
            path:'',
            link:'/revenue/crm',
        },
        {
            name:'Profit / Loss',
            path:'',
            link:'/revenue/profit-loss',
        },
    ]
  return (
    <div>
         <h1 className="text-[#EEF0F4] text-2xl font-bold">Revenue</h1>
        <div className="my-4 flex space-x-14">
            {
                leadOver.map((ele,i) => (
            <Link key={i} href={ele.link} className={cn("hover:text-primary-main text-[#DDE1E8] font-medium py-5 border-b border-opacity-0 w-fit border-b-primary-main" , ele.link === path ? "text-primary-main border-opacity-100" : "")}>
            {ele.name}
            </Link>

                ))
            }
        </div>
    </div>
  )
}

export default RevenueNavbar