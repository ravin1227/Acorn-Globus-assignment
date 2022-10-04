import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import SideMenu from '../components/SideMenu'

const Homepage = () => {
  return (
    <div className='flex'>
        <SideMenu />
        <MainContent />
    </div>
  )
}

export default Homepage