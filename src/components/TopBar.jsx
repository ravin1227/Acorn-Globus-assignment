import React from 'react'
import {FiMenu,FiSearch} from "react-icons/fi";
import {IoIosHelpBuoy} from "react-icons/io";
import {MdScreenSearchDesktop} from "react-icons/md";
import {RiArrowDropDownLine} from "react-icons/ri";


const TopBar = () => {
  return (
    <div className='flex justify-between items-center text-xl w-full text-gray-600'>
        <div className='flex gap-3 items-center'>
            <FiMenu />
            <div className='flex items-center gap-2 bg-[#FAF9F6] rounded-xl p-1 sm:w-[250px] md:w-[490px]'>
                <FiSearch className='ml-2'/>
                <input type={"search"} placeholder='Search' className='text-sm text-gray-400 w-full bg-[#FAF9F6] p-1 focus:outline-none' />
            </div>
        </div>
        <div className='flex items-center gap-6'>
            <div className='text-sm flex gap-4 items-center'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <IoIosHelpBuoy />
                    <span>Help</span>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <MdScreenSearchDesktop />
                    <span>Tour</span>
                </div>
            </div>
            <div className='flex items-center'>
                <img 
                    src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000" alt="" 
                    className='rounded-full w-[30px] h-[30px]'    
                />
                <RiArrowDropDownLine size={30} className='cursor-pointer'/>

            </div>
        </div>
    </div>
  )
}

export default TopBar