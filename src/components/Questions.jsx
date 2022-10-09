import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaRegThumbsUp} from "react-icons/fa";
import {MdOutlineModeComment} from "react-icons/md";
import {IoMdEye} from "react-icons/io";
import {HiOutlineDocumentText, HiOutlinePencil} from "react-icons/hi";


const Questions = () => {
    const [ques, setQues] = useState([])

  useEffect (()=>{
    axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
    .then((result)=> {setQues(result.data.items)})
    .catch((error)=> console.log(error))
  },[])



  const quesMenu =[
    {title:'interesting'},
    {title:'featured'},
    {title:'hot'},
    {title:'week'},
    {title:'month'},
  ]

  return (
    <div className='bg-white p-2 px-7  sm:w-full  '>
        <div className='relative'>
            <span className='text-6xl text-gray-100'>top</span>
            <span className='text-gray-500 absolute left-0 top-6'>Questions</span>
        </div>
        <div className='mt-4 divide-y pt-2'>
            <ul className='flex gap-3 text-[12px] text-gray-400'>
                {quesMenu.map((items, index)=>(
                    <>
                        <li key={index} className='first:bg-orange-400 px-2 rounded-full first:text-white'>{items.title}</li>
                    </>
                ))}
            </ul>
        </div>
        <div className=' mt-2 pt-2 divide-y'>
            {ques.slice(0,10).map((item, index)=>(
                <div key={index} className='flex justify-between items-center'>
                    <div className='flex flex-col '>
                        <h1 className='text-sm  text-[#52A1DA] hover:text-blue-500 font-semibold mt-3 cursor-pointer'><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h1>
                        <ul className='flex gap-2 py-3'>
                            {item.tags.map((tags, index)=>(
                                <>
                                    <li className='p-1 px-2 border rounded-full text-[9px] text-gray-400'>{tags}</li>
                                </>
                            ))}
                        </ul>
                        <div className='flex items-center gap-1'>
                            {item.is_answered ? (
                                <>
                                    <div className='flex items-center text-[10px] gap-2 text-gray-400 mb-2'>
                                        <div className='text-orange-500 border rounded-full  p-1 text-[12px]'>
                                            <HiOutlineDocumentText/>
                                        </div> 
                                        <span> answered </span>
                                    </div>
                                </>
                            ):(
                                <>
                                    <div className='flex items-center text-[10px] gap-2 text-gray-400 mb-2'>
                                        <div className='text-orange-500 border rounded-full p-1  text-[12px]'>
                                            <HiOutlinePencil /> 
                                        </div>
                                        <span> modified </span>
                                    </div>
                                </>
                            )}
                            <p className='text-[10px] text-gray-400 mb-2 '>2 min ago <span className='text-gray-800 text-[11px]'>{item.owner.display_name}</span></p>
                        </div>
                    </div>
                    <div className=' flex gap-4 ml-2 text-[11px] '>
                        <div className='flex flex-col items-center text-gray-500 gap-1 hover:shadow p-2 
                            hover:shadow-green-400 hover:text-green-400 cursor-pointer'>
                            <span>{item.score}</span>
                            <h1><a href={item.link} target="_blank" rel="noopener noreferrer">vote</a></h1>
                            <FaRegThumbsUp />
                        </div>
                        <div className=' flex flex-col items-center text-gray-500 gap-1 hover:shadow p-2 hover:text-green-400 hover:shadow-green-400 cursor-pointer'>
                            <span>{item.answer_count}</span>
                            <h1><a href={item.link} target="_blank" rel="noopener noreferrer">answer</a></h1>
                            <MdOutlineModeComment />
                        </div>
                        <div className=' flex flex-col items-center text-gray-500 gap-1 hover:shadow p-2 hover:text-green-400 hover:shadow-green-400 cursor-pointer'>
                            <span>{item.view_count}</span>
                            <h1><a href={item.link} target="_blank" rel="noopener noreferrer">views</a></h1>
                            <IoMdEye />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Questions