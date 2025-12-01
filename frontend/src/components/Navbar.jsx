import { Bell, CircleUser, Globe, GraduationCap, Mail, Search } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  const [messages, setMessages] = useState(5)
  const [notifications, setNotifications] = useState(3)
  return (
    <nav className='flex items-center justify-between top-0 left-64 right-0 fixed bg-white shadow-md px-6 z-40 gap-4 py-3'>
      {/* Logo  */}
        <div className='flex items-center justify-center gap-2'>
          <div className='h-12 w-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center'>
            <GraduationCap className='text-white' size={28} strokeWidth={2.5}/>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-black tracking-tight'>EduNexa</h1>
          <p className='text-xs text-gray-500'>School Managment System</p>
          </div>
        </div>

      {/* Searchbar  */}
     <div className='flex-1 max-w-xl mx-8'>
       <div className='relative'>
        <input className='w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none border border-gray-200 bg-gray-50 focus:bg-white text-sm' type="text" placeholder='Search students, teachers, classes...' />
        <Search className='absolute top-3 left-5 text-gray-400' size={20}/>
      </div>
     </div>

      {/* Langauges  */}
      <div className='bg-gray-50 flex items-center justify-center gap-2 p-3 rounded-xl'>
        <Globe size={20} />
        <select className='outline-none' name="English" id="language">
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Sindhi">Sindhi</option>
            <option value="Pashto">Pashto</option>
        </select>
      </div>

      {/* Devider  */}
      <div className='h-9 w-px bg-gray-200'></div>

      {/* message, notifications and profile  */}
      <div className='flex items-center justify-between gap-4'>
        {/* message  */}
        <div className='relative'>
          <Mail  size={25} className='text-gray-600'/>
          <button className='w-5 h-5 rounded-full bg-green-500 absolute text-xs -top-3 -right-3 text-white font-bold flex items-center justify-center'>
            {messages && (
              <span>{messages}</span>
            )}
          </button>
        </div>
        {/* notifications  */}
        <div className='relative'>
          <Bell  size={25} className='text-gray-600'/>
          <button className='w-5 h-5 rounded-full bg-red-500 absolute text-xs -top-3 -right-3 text-white font-bold flex items-center justify-center'>
            {notifications && (
              <span>{notifications}</span>
            )}
          </button>
        </div>
        
       {/* Devider  */}
      <div className='h-9 w-px bg-gray-200'></div>
      
        <div className='flex items-center justify-center gap-2'>
          <div className='bg-linear-to-br from-yellow-400 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center'>
              <CircleUser  size={28} strokeWidth={2.1} className='text-white'/>
          </div>
         <div>
          <h1 className='text-xl font-bold'>Shakeel</h1>
          <p className='text-xs text-gray-500'>Admin</p>
         </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar