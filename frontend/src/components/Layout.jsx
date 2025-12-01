import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen'>
        <div className='flex'>
        <Sidebar/>
        <main className='flex-1 ml-64 p-6'>
            <Navbar/>
            <div className='mt-20'>
              <Outlet />
            </div>
        </main>
        </div>
    </div>
  )
}

export default Layout