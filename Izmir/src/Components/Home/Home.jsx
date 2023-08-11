import { useState } from 'react'
import './Home.scss'
import Dropdwm from './Drpopdwn';
import Header from './Header';
import Offers from './Offers';
import Content from './Content';
import SideBar from './SideBar';
import Show from './Show';


function Home() {

  const [showWind, setShowWind] = useState(false)
  const [dataFree, setDataFree] = useState([])

  const FreeTables = [{num: 1 ,home: "BoboCity", room: 2, floor:3, block:"Б", area: "46 m2", terrace: "4 m2"}]
  const DiscussTables = [{num: 1 ,seller: "Khayot Tangirov", area: "46 m2", block: "E", floor: "3", room:2}]
  const BookedTables = [{num: 1 ,client: "Khayot Tangirov", date: "15.05.2023", paid: '6.000.000', area: '45 m2', block: 'Б', floor: 3, room: 2}]
  const SoldTables = [{num: 1 ,client: "Khayot Tangirov", date: "11.05.2023", dateTill: '11.06.2023', area: '45 m2', block: 'Б', floor: 3, room: 2}]
  const PotentialClientsTables = [{num: 1 ,client: "Khayot Tangirov", whenMoves: "11.05.2023", number: "+998 90 000 00 00"}]



  return (
    <div className="Home-wrapper">
      <SideBar/>

      <div className='Content-side'>
        <Header/>     
        <Offers
                  fl={FreeTables.length}
                  dl={DiscussTables.length}
                  bl={BookedTables.length}
                  sl={SoldTables.length}
                  pcl={PotentialClientsTables.length}
        
        />
        <Content FreeTables={FreeTables}
                 DiscussTables={DiscussTables}
                 BookedTables={BookedTables}
                 SoldTables={SoldTables}
                 PotentialClientsTables={PotentialClientsTables}
                 setShowWind={setShowWind}
                 setDataFree={setDataFree}
        />
      </div>

     {showWind ?  <Show data={dataFree}/> :  <Show classInfo='disactive' data={dataFree}/>}
     {showWind ?  <div className='darker'  onClick={() => {setShowWind(false)}}></div> :  <div className='darker disactive'></div>}

    </div>

  )
}


export default Home
