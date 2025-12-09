import React from 'react'
import StatsBoxCard from './StatsBoxCard'
import { dashboardStats } from '../../assets/data'

const StatsBoxes = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {dashboardStats.map((data, index)=>(
            <div key={index}>
                <StatsBoxCard title={data.title} Icon={data.Icon} value={data.value} bg={data.bg}/>
            </div>
        ))}
    </div>
  )
}

export default StatsBoxes