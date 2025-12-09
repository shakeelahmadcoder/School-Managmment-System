import { Icon, Users } from 'lucide-react'
import React from 'react'

const StatsBoxCard = ({Icon, title, value, bg}) => {
  return (
    <div className='flex  items-center bg-white gap-6'>
      <div className={`${bg}  text-white p-12`} >
        < Icon size={50} strokeWidth={3}/>
      </div>
      
        <div>
          <h1 className='text-4xl'>{value}</h1>
          <p className='text-gray-600'>{title}</p>
        </div>
    </div>
  )
}

export default StatsBoxCard