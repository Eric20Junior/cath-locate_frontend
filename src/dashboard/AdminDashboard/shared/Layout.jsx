import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='xs:flex xs:flex-1 lg:flex lg:flex-row xs:h-screen xs:w-screen xs:overflow-hidden  xs:bg-slate-200'>
        <Sidebar/>
        <div className='xs:flex-1 xs:overflow-auto'>
            <Header/>
            <div className='xs:p-4'>{<Outlet />}</div>
        </div>
    </div>
  )
}
