import React, { useState } from 'react'
import { BsArrowLeftShort, BsBookmark, BsMegaphone, BsInbox, BsBag } from "react-icons/bs";
import {BiQuestionMark, BiCoinStack} from "react-icons/bi";
import {TbTags} from "react-icons/tb";
import {AiOutlineUser, AiOutlineLine} from "react-icons/ai";
import {HiOutlineDocumentReport} from "react-icons/hi";
import logo from '../images/stack-overflow.png'


const SideMenu = () => {

    const [open ,setOpen] = useState(true)
    const Menu =[
        {
            title: "Questions",
            icons: <BiQuestionMark/>,
            active: true,
            activeIcon: <AiOutlineLine />

        },
        {
            title: "Jobs",
            icons: < BsBag/>,
            active: false

        },
        {
            title: "Documentation",
            icons: < HiOutlineDocumentReport/>,
            active: false

        },
        {
            title: "Tags",
            icons: <TbTags/>,
            active: false


        },
        {
            title: "users",
            icons: <AiOutlineUser/>,
            active: false

        },
        {
            title: "Badges",
            icons: <BsBookmark/>,
            active: false

        },
        {
            title: "Ask Questions",
            icons: <BsMegaphone/>,
            active: false

        },
        {
            title: "Stack Exchange",
            icons: <BiCoinStack/>,
            active: false

        },
        {
            title: "Inbox",
            icons: <BsInbox/>,
            active: false

        },
    ]

  return (
    // ${open ? "shadow-[3px_-25px_50px_6px_#ccc] z-10": "shadow-[3px_-25px_25px_6px_#ccc] z-1"}
    <div className={`p-5 pt-8   ${open ? "w-72": "w-20"}  
        relative duration-300 ${open ? "shadow-[3px_-25px_50px_6px_#ccc] z-10": "shadow-[3px_-25px_25px_6px_#ccc] z-1"}`}
    >
         <BsArrowLeftShort 
            className= {`bg-white ${ open ? "rounded-l-full" : "rounded-r-full"}  
                        text-3xl  border absolute -right-[0px] top-16 cursor-pointer ${!open && "rotate-180"}`
            }
            onClick={()=> setOpen(!open)}
        />
        <div className='inline-flex  p-1 items-center '>
            <img src={logo} alt='' className={`w-[25px] h-[25px] object-cover mr-1    
               duration-500 ${!open && "rotate-[360deg]"} `}

            />
            <h1 className={` duration-300 ${!open && "scale-0"}`}>stack<span className='text-xl font-bold'>overflow</span></h1>

        </div>
        <div className='mt-10'>
            <ul>
                {Menu.map((menu, index)=>(
                    <>
                        
                        <li key={index} className={` ${menu.active ? "text-black font-semibold" : "text-gray-500 font-medium" } text-sm flex 
                            items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FAF9F6] rounded-md mt-2 ${menu.active ? "bg-[#FAF9F6]":"bg-[#FFF]" } `}
                        >   
                            <span className={`text-xl block float-left  ${menu.active ? "text-orange-400":"text-gray-500" }`}>{menu.icons}</span>
                            <span className={` flex-1 ${!open && "scale-0"}  duration-300 text-transform: uppercase `}>{menu.title} <span></span></span>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SideMenu