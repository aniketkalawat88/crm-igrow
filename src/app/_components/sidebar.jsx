"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList, FaUserGroup, FaSuitcase } from "react-icons/fa6";
import { TbBoxMultiple } from "react-icons/tb";
import { IoMdChatboxes, IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SideBar = () => {
  const pathname = usePathname()
  const iconClass = "h-6 w-6";
  
  const routes = [
    {
      icon: <MdSpaceDashboard className={iconClass} />,
      label: "Dashboard",
      href: "/",
      active: pathname === "/",
    },
    {
      icon: <FaClipboardList className={iconClass} />,
      label: "Leads",
      href: "/leads",
      active: pathname.includes("leads"),
    },
    {
      icon: <TbBoxMultiple className={iconClass} />,
      label: "Revenue",
      href: "/revenue",
      active: pathname.includes("revenue"),
    },
    {
      icon: <FaUserGroup className={iconClass} />,
      label: "Employees",
      href: "/employees",
      active: pathname === "/employees",
    },
    {
      icon: <FaSuitcase className={iconClass} />,
      label: "Clients",
      href: "/clients",
      active: pathname === "/clients",
    },
    {
      icon: <FaUserGroup className={iconClass} />,
      label: "Chat",
      href: "/chat",
      active: pathname === "/profile",
    },
    {
      icon: <FaRegCalendarAlt className={iconClass} />,
      label: "Calendar",
      href: "/calendar",
      active: pathname === "/calendar",
    },
    {
      icon: <IoMdSettings className={iconClass} />,
      label: "Settings",
      href: "/settings",
      active: pathname === "/settings",
    },
  ];
  return (
    <div className="">
      <div className="relative w-full h-24 p-4">
        <img src="/assests/admin-images/logo.png" alt="No Preview" fill className="object-cover" />
      </div>
       <div className="hidden md:flex flex-col rounded-2xl">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex flex-col flex-1 overflow-y-auto py-4 gap-4 rounded-2xl">
            {
             routes.map((ele,i) => (
            <div key={i} className="flex flex-col flex-1 gap-3">
              <Link
                href={ele.href}
                className={cn("flex w-full items-center gap-2 rounded text-secondary-main hover:bg-primary-main hover:text-black p-2" , ele.active ? "bg-primary-main text-black" : "")}
              >
                {ele.icon} {ele.label}
              </Link>
            </div>
             )) 
            }
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar