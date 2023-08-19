import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Free from './ContentComponents/Free'
import './Home.scss'
import Discuss from './ContentComponents/Discuss'
import Booked from './ContentComponents/Booked'
import Sold from './ContentComponents/Sold'
import PotentialClients from './ContentComponents/PotentialClients'
import ShowContent from './ContentComponents/ShowContent'

function Content({FreeTables, DiscussTables, BookedTables, SoldTables, PotentialClientsTables, setShowWind, setDataFree, data}) {

  console.log(data)

  return (
    <div className='Content-wrapper'>
      <div className='Content'>
        <Routes>
                <Route path="/tables/free" element={<Free data={FreeTables} setShowWind={setShowWind} setDataFree={setDataFree}/>} />
                <Route path="/tables/discuss" element={<Discuss data={DiscussTables}/>} />
                <Route path="/tables/booked" element={<Booked data={BookedTables}/>} />
                <Route path="/tables/sold" element={<Sold data={SoldTables}/>} />
                <Route path="/tables/clients" element={<PotentialClients data={PotentialClientsTables}/>} />

                {data.map((build) => {
                  return(<Route path={`/${build.name}`} element={<ShowContent data={build}/>}/>)
                })}

                {data.map((build) =>
                  build.blocks.map((block) => (
                    <Route
                      key={`${build.name}-${block.name}`}
                      path={`/${build.name}/${block.name}`}
                      element={<ShowContent data={block} />}
                    />
                  ))
                )}
              
              {data.map((build) =>
              build.blocks.map((block) =>
                block.rooms.map((room) => (
                  <Route
                    key={`${build.name}-${block.name}-${room.num}`}
                    path={`/${build.name}/${block.name}/${room.num}`}
                    element={<ShowContent data={room} />}
                  />
                ))
              )
             )}

              
        </Routes>
      </div>
    </div>
  )
}

export default Content