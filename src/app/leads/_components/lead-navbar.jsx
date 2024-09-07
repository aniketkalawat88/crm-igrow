"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeadNavbar = () => {
    const path = usePathname();
    const leadOver = [
        {
            name:'Leads Overview ',
            path:'',
            link:'/leads',
        },
        {
            name:'Deals',
            path:'',
            link:'/leads/deals',
        },
        {
            name:'View List',
            path:'',
            link:'/leads/view-list',
        },
    ]
  return (
    <div>
         <h1 className="text-[#EEF0F4] text-2xl font-bold">Leads</h1>
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

export default LeadNavbar