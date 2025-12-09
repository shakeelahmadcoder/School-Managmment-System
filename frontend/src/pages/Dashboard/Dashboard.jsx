import React from 'react'
import StatsBox from '../../components/Dashboard/StatsBoxCard'
import StatsBoxes from '../../components/Dashboard/StatsBoxes'
import Calendar from '../../components/Dashboard/Calender'
import StackedAreaChart from '../../components/Dashboard/StackedAreaChart'

const Dashboard = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
      
      <div>
      <StatsBoxes/>
      <Calendar/>
      </div>

      <div>
        <StackedAreaChart/>
      </div>
    </div>
  )
}

export default Dashboard