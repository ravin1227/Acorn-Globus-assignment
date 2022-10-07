import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {IoIosArrowForward} from "react-icons/io";


const Jobs = () => {
    const [hot, setHot] = useState([])

    

    useEffect (()=>{
        axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
        .then((result)=> {setHot(result.data.items)})
        .catch((error)=> console.log(error))
    },[])

    console.log(hot)

  return (
    <div className=' p-2 px-8 sm:w-full md:w-4/12 bg-[#FAFAFA]'>
        <div>
            <div className='relative'>
                <span className='text-6xl text-gray-200'>jobs</span>
                <span className='text-gray-400 absolute left-0 top-6'>Looking out for...</span>
            </div>
        </div>
        <div>
            <div className='relative'>
                <span className='text-6xl text-gray-200'>hot</span>
                <span className='text-gray-400 absolute left-0 top-6'>Network questions</span>
            </div>
            <div className='mt-4 '>
                <div>
                    <ul className='divide-y divide-gray-300'>
                        {hot.slice(0,5).map((item, index)=>(
                            <>
                                <li className='text-[#50A0CE] mt-3 text-[12px]  items-center'><a href={item.link} target="_blank" rel="noopener noreferrer" >{item.title}</a></li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className='mt-2'>
                    <span className='text-[12px] text-[#50A0CE] pt-4 cursor-pointer flex items-center gap-2'>
                        view all jobs <IoIosArrowForward /> 
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jobs