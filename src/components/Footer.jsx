import React from 'react'
import {FaTwitter, FaFacebookF, FaDribbble} from "react-icons/fa";


const Footer = () => {
    const Menu =[
        {title:'about us'},
        {title:'tour'},
        {title:'help'},
        {title:'blog'},
        {title:'chat'},
        {title:'data'},
        {title:'legal'},
        {title:'privacy policy'},
        {title:'work here'},
        {title:'adertising info'},
        {title:'mobile'},
        {title:'contact us'},
        {title:'feedback'},
    ]
    const Category =[
        {
            item:'technology',
            subItems:[]
        },
        {
            item:'life/arts',
            subItems:[]
        },
        {
            item:'culture/pecreation',
            subItems:[]
        },
        {
            item:'science',
            subItems:[]
        },
        {
            item:'other',
            subItems:[]
        },
    ]
  return (
    <div className='divide-y'>
        <div className='flex justify-between px-24 text-gray-500 p-3 items-center '>
            {/**Menu */}
            <div className='bg-[#FFFFFF]' >
                <ul className='flex gap-4 text-sm hover:cursor-pointer'>
                    {Menu.map((menu, index)=>(
                        <>
                            <li>{menu.title}</li>
                        </>
                    ))}
                </ul>
            </div>
            {/** social icons */}
            <div className='flex gap-3 '>
                <FaTwitter className=' '/>
                <FaFacebookF className=' '/>
                <FaDribbble className=' '/>        
            </div>
        </div>
        <div className='px-24  text-sm py-3 text-gray-500 items-center'>
            <ul className='flex justify-between'>
                {Category.map((cat, index)=>(
                    <>
                        <li key={index} className='text-transform: uppercase'>{cat.item}</li>
                    </>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Footer