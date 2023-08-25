import {useEffect} from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Free from './ContentComponents/Free'
import './Home.scss'
import Discuss from './ContentComponents/Discuss'
import Booked from './ContentComponents/Booked'
import Sold from './ContentComponents/Sold'
import PotentialClients from './ContentComponents/PotentialClients'
import ShowContent from './ContentComponents/ShowContent'
import { useSelector, useDispatch } from 'react-redux'
import SearchResult from './ContentComponents/SearchResult'
import ShowFloor from './ContentComponents/ShowFloor'

import { fetchData } from '../../store/dataFetchSlice';

function Content({FreeTables, DiscussTables, BookedTables, SoldTables, PotentialClientsTables, setShowWind, setDataFree, setShowDiscuss, setShowBooked, setInpText, inpText}) {
  
  const data = useSelector(state => state.data.data)
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.dataFetch.data)

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // useEffect(() => {
  //   // Когда данные обновляются, выведем их в консоль
  //   console.log(data);
  // }, [data]);


  return (
         <div className='Content-wrapper'>
         <div className='Content'>
           <Routes>
                   <Route path="/tables/free" element={<Free data={FreeTables} setShowWind={setShowWind} setDataFree={setDataFree}/>} />
                   <Route path="/tables/discuss" element={<Discuss data={DiscussTables} setShowDiscuss={setShowDiscuss} setDataFree={setDataFree}/>} />
                   <Route path="/tables/booked" element={<Booked data={BookedTables}  setShowBooked={setShowBooked} setDataFree={setDataFree}/>}/>
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
                   block.floors.map((floor) => (
                     <Route
                       key={`${build.name}-${block.name}-${floor.num}`}
                       path={`/${build.name}/${block.name}/${floor.num}`}
                       element={<ShowFloor data={floor} />}
                     />
                   ))
                 )
                )}
   
               <Route path='search' element={<SearchResult inpText={inpText}/>}/>
           </Routes>
         </div>
       </div>
  )
}

export default Content