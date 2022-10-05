import React from 'react'

const Jobs = () => {
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
        </div>
    </div>
  )
}

export default Jobs