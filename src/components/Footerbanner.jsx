import React from 'react'

const Footerbanner = () => {
  return (
    <div className='py-14 flex flex-col items-center '>
        <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="" 
            className='w-[400px]  mt-6 p-4 items-center  '
        />
        <div className='mt-2 flex  items-center flex-col'>
            <h1 className='text-2xl text-gray-600' >Looking for more?</h1>
            <p className='text-sm text-gray-500'>Browse the 
                <span className='text-[#348FD3] cursor-pointer'> complete list of questions</span>, or 
                <span className='text-[#348FD3] cursor-pointer'> popular tags</span>. Help us answer
            </p>
            <p className='text-sm text-gray-500'>unanswer questions.</p>
        </div>
    </div>
  )
}

export default Footerbanner