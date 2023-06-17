import React from 'react'
import { RecentChurch } from './RecentChurch'

export const UserDashboard = () => {
  return (
    <div>
        <div className='xs:flex xs:flex-col lg:gap-4 '>
            {/* <DashboardStats/> */}
            user dashboard
            <div className='lg:flex lg:flex-row lg:gap-4'>
                
            </div>

            <div className='lg:flex lg:flex-row w-full lg:gap-4 xs:pt-6 xs:space-y-4'>
            <RecentChurch/> 
            </div>
        </div>
    </div>
  )
}
