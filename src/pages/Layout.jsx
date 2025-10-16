import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'


const Layout = () => {

  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  // Avoid relying on Clerk hooks here so the layout doesn't fail when ClerkProvider
  // is not configured (development without a publishable key).
  return (
    <div className='flex flex-col items-start justify-start'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200' >

        <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} onClick={() => navigate('/')} />
        {
          sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 md:hidden' />
            : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 md:hidden' />
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout
