import React from 'react'
import { Outlet } from 'react-router-dom'

function OutletSidebar() {
  return (
    <div className='outletSidebar'>
        <Outlet/>
    </div>
  )
}

export default OutletSidebar