import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {IoIosArrowForward} from "react-icons/io";
import {data} from '../data/data'
import {icons} from '../data/data'


const Jobs = () => {
    const [hot, setHot] = useState([])
    const [job, setJob] = useState(data)
    const [jobIcon, setJobicon] = useState(icons)
    // const [num, setNum] = useState(0)

    // const randomIcon = e =>{
    //     const len = jobIcon.length;
    //     setNum(Math.floor(Math.random() * len))
    // }

    // console.log('icon22',jobIcon[num].items)
    // console.log(num)
    useEffect (()=>{
        // setIcon(icons)
        axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
        .then((result)=> {setHot(result.data.items)})
        .catch((error)=> console.log(error))
    },[])



  return (
    <div className=' p-2 px-8 sm:w-full md:w-5/12 bg-[#FAFAFA]'>
        <div className='px-1'>
            <div className='relative'>
                <span className='text-6xl text-gray-200'>jobs</span>
                <span className='text-gray-400 absolute left-0 top-6'>Looking out for...</span>
            </div>
            <div className='my-4'>
                <div className='border-l-2 border-gray-200 ml-3 mt-1 py-0 space-y-6'>
                    {job.map((item,index)=>(
                        <div className='relative' key={index}>
                            <div className='absolute top-1 -left-2 bg-white h-4 w-4 rounded-full border-2 border-gray-200'></div>
                            <div className='pl-4 '>
                                <h1 className='text-[12px] text-blue-400 cursor-pointer'>{item.title}</h1>
                                <p className='text-gray-400 text-[11px] mt-1'>{item.company}</p>
                                <div className='flex gap-2 mt-1'>
                                    <h1 className=' flex items-center text-gray-400 gap-1 text-[9px]'>{item.locationIcon} <span>{item.location}</span></h1>
                                    <h1 className='flex items-center text-gray-400 gap-1 text-[9px]'>{item.locationIcon} <span>{item.type}</span></h1>
                                </div>
                                {item.salary && <span className='text-[11px] text-green-500 pl-1'>{item.salary}</span> }

                                <div className='flex gap-2'>
                                    {item.tags.map((tag, index)=>(
                                        <div className=' gap-2 text-[11px] mt-1 text-gray-400'>
                                            <span key={index} className='bg-white rounded-full p-1 px-2'>{tag.subTitle}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>        
                    ))}
                </div>
                <span className='flex items-center mt-4 text-[12px] text-[#50A0CE] cursor-pointer ml-8 gap-1'>view all jobs <IoIosArrowForward /> </span>
            </div>
        </div>
        <div>
            <div className='relative'>
                <span className='text-6xl text-gray-200'>hot</span>
                <span className='text-gray-400 absolute left-0 top-6'>Network questions</span>
            </div>
            <div className='mt-4 '>
                <div>
                    <ul className='divide-y divide-gray-200'>
                        {hot.slice(0,5).map((item, index)=>(
                            <div className='flex flex-row mt-2 pt-2 items-center gap-2'>
                                <li>{jobIcon[Math.floor(Math.random()*jobIcon.length)].items}</li>
                                <li key={index} className='text-[#50A0CE]  text-[12px]  items-center '><a href={item.link} target="_blank" rel="noopener noreferrer" >{item.title}</a></li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className=''>
                    <span className='text-[12px] text-[#50A0CE] pt-4 cursor-pointer flex items-center gap-1'>
                        view all jobs <IoIosArrowForward /> 
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jobs