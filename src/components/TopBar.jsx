import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FiMenu,FiSearch} from "react-icons/fi";
import {IoIosHelpBuoy} from "react-icons/io";
import {MdScreenSearchDesktop} from "react-icons/md";
import {RiArrowDropDownLine} from "react-icons/ri";


const TopBar = () => {

    const [searchQuery, setSearchQuery] = useState(null)
    // const [loading,setLoading] = useState(false)
    const [result, setResult] = useState([])
    console.log(searchQuery)

    useEffect(()=>{
        // async function fetchData(){

        //     const data = await axios.get(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&q=${searchQuery}&site=stackoverflow`)
        //         .then((response)=> setResult(response.data.items))
        //         .catch((err)=>{console.log(err)});
            
        // }
        if(!searchQuery){
            axios.get(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&q=${searchQuery}&site=stackoverflow`)
                .then((response)=> setResult(response.data.items))
                .catch((err)=>{console.log(err)});

        }
        
    },[searchQuery])

    console.log(result)

  return (
    <div className='flex justify-between items-center text-xl w-full text-gray-600'>
        <div className='flex gap-3 items-center'>
            <FiMenu />
            <div className='flex items-center gap-2 bg-[#FAF9F6] rounded-xl p-1 sm:w-[250px] md:w-[490px]'>
                <FiSearch className='ml-2'/>
                <input type='search' placeholder='Search' 
                    className='text-sm text-gray-400 w-full bg-[#FAF9F6] p-1 focus:outline-none' 
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                {result.map((item, index)=>(
                    <>
                        
                    </>
                ))}
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