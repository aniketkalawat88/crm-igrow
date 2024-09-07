/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaBell } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  return (
      <div className="flex items-center justify-between h-20 bg-primary-bg rounded-xl  ">
        <div className="flex items-center px-4 ">
          <div className="relative mx-auto text-[#BAC4D1]">
            <button type="submit" className="absolute left-1 top-0 mt-3 ml-2">
              <IoMdSearch />
            </button>
            <input
              className="h-10 w-96 px-5 pl-10 rounded-lg text-sm placeholder-current focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-[#BAC4D1] bg-[#3B4758]"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
        {/* notification */}
        <div className="flex items-center space-x-4 mr-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
          >
            <FaBell className="text-xl" />
          </a>
          <div>
            <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
            <label
              htmlFor="toggle"
              className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-primary-main peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-prbg-primary-main"
            >
              <span className="sr-only">Enable</span>
            </label>
          </div>
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80" alt="" />
          </div>
        </div>


      </div>
  )
}

export default Navbar