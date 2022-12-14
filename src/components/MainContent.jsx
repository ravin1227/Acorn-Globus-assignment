import React from 'react'
import Footerbanner from './Footerbanner'
import Jobs from './Jobs'
import Questions from './Questions'
import TopBar from './TopBar'

const MainContent = () => {
  return (
    <div className='p-4 pt-8  w-full'>
        <TopBar />
        <div className='flex justify-between mt-4 sm:flex-col md:flex-row '>
            <div className='items-center w-full  divide-y'>
              <Questions />
              <Footerbanner />
            </div>
            <Jobs />
        </div>
    </div>
  )
}

export default MainContent