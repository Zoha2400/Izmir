import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Free from './ContentComponents/Free'
import './Home.scss'
import Discuss from './ContentComponents/Discuss'
import Booked from './ContentComponents/Booked'
import Sold from './ContentComponents/Sold'
import PotentialClients from './ContentComponents/PotentialClients'

function Content({FreeTables, DiscussTables, BookedTables, SoldTables, PotentialClientsTables, setShowWind, setDataFree}) {


  return (
    <div className='Content-wrapper'>
      <div className='Content'>
        <Routes>
                <Route path="/tables/free" element={<Free data={FreeTables} setShowWind={setShowWind} setDataFree={setDataFree}/>} />
                <Route path="/tables/discuss" element={<Discuss data={DiscussTables}/>} />
                <Route path="/tables/booked" element={<Booked data={BookedTables}/>} />
                <Route path="/tables/sold" element={<Sold data={SoldTables}/>} />
                <Route path="/tables/clients" element={<PotentialClients data={PotentialClientsTables}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Content