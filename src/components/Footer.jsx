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
            submenu: true,
            submenu2:true,
            subItems:[
                {title:'Stack Overflow'},
                {title:'Server Fault'},
                {title:'Super User'},
                {title:'Web Application'},
                {title:'Ask Ubuntu'},
                {title:'Webmaster'},
                {title:'Game Development'},
                {title:'TeX LaTeX'},
            ],
            subItems2:[
                {title:'Programmer'},
                {title:'Unix & Linux'},
                {title:'Ask Different (Apple)'},
                {title:'WordPress Development'},
                {title:'Geographic Information Systems'},
                {title:'Electrical Engineering'},
                {title:'Android Enthusiasts'},
                {title:'50 +more'},
            ]

        },
        {
            item:'life/arts',
            submenu: true,
            submenu2:false,
            subItems:[
                {title:'Photography'},
                {title:'Science Fiction & Fantasy'},
                {title:'Graphics Design'},
                {title:'Movies & Tv'},
                {title:'Seasoned Advice(cooking)'},
                {title:'Home Improvement'},
                {title:'Personal Finance & Money'},
                {title:'19 more'},
            ]
        },
        {
            item:'culture/pecreation',
            submenu2:false,
            submenu: true,
            subItems:[
                {title:'English Language & Usage'},
                {title:'Skeptics'},
                {title:'Mi Yodeya(judaism)'},
                {title:'Travel'},
                {title:'christianty'},
                {title:'Arqade (gaming)'},
                {title:'Biscyles'},
                {title:'21 more'},
            ]
        },
        {
            item:'science',
            submenu2:false,
            submenu: true,
            subItems:[
                {title:'Mathematics'},
                {title:'Cross Validated(Stats'},
                {title:'Theoretical Computer Science'},
                {title:'Physics'},
                {title:'Mathoverflow'},
                {title:'Chemistry'},
                {title:'Biology'},
                {title:'5 more'},
            ]
        },
        {
            item:'other',
            submenu2:false,
            submenu: true,
            subItems:[
                {title:'Stack Apps'},
                {title:'Meta Stack Exchange'},
                {title:'Area 51'},
                {title:'Stack Overflow Careers'},
            ]
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
                            <li key={index}>{menu.title}</li>
                            
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
                        <li key={index} >
                            <span className='text-transform: uppercase text-gray-500 '>{cat.item}</span>
                            <div className='flex gap-6'>
                                <div>
                                    {cat.submenu && (
                                        <ul className='mt-2 '>
                                            {cat.subItems.map((subItems, index)=> (
                                                <li key={index} className='text-[12px] text-gray-400 cursor-pointer mt-1'>
                                                    {subItems.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div>
                                    {cat.submenu2 && (
                                            <ul className='mt-2'>
                                                {cat.subItems2.map((subItems, index)=> (
                                                    <li key={index} className='text-[12px] text-gray-400 cursor-pointer mt-1 '>
                                                        {subItems.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                </div>
                            </div>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Footer