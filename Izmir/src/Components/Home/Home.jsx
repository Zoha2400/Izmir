import { useState, useEffect } from 'react'
import './Home.scss'
import Dropdwm from './Drpopdwn';
import Header from './Header';
import Offers from './Offers';
import Content from './Content';
import SideBar from './SideBar';
import Show from './Show';
import imgFlat from '../../assets/flat.png'
import imgBlock from '../../assets/A-block.svg'
import imgDev from '../../assets/dev.svg'

function Home() {

  const [existData, setExistData] = useState('');

  useEffect(() => {
    fetch('http://89.38.131.46:1808/api/all_tables/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExistData(data);
      });
  }, [])

  console.log(existData)

  //http://89.38.131.46:1808/api/all_tables/

  const [showWind, setShowWind] = useState(false)
  const [dataFree, setDataFree] = useState()
  const [svgData, setSvgData] = useState()

  const FreeTables = [{num: 1 ,home: "BoboCity", room: 2, floor:3, block:"Б", area: "46 m2", terrace: "4 m2", img: imgFlat, cost: 380000000 ,status:'free'},]
  const DiscussTables = [{num: 1 ,seller: "Khayot Tdangirov", area: "46 m2", block: "E", floor: "3", room:2,  img: imgFlat, status:'discussing'}]
  const BookedTables = [{num: 1 ,client: "Khayot Tangirov", date: "15.05.2023", paid: '6.000.000', area: '45 m2', block: 'Б', floor: 3, room: 2,  img: imgFlat, status:'booked'}]
  const SoldTables = [{num: 1 ,client: "Khayot Tangirov", date: "11.05.2023", dateTill: '11.06.2023', area: '45 m2', block: 'Б', floor: 3, room: 2,  img: imgFlat, status:'sold'}]
  const PotentialClientsTables = [{num: 1 ,client: "Khayot Tangirov", whenMoves: "11.05.2023", number: "+998 90 000 00 00",  img: imgFlat}]




  return (
    <div className="Home-wrapper">
      <SideBar setSvg={setSvgData}/>

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

     {showWind ?  <Show dataFree={dataFree}/> :  <Show classInfo='disactive'/>}
     {showWind ?  <div className='darker'  onClick={() => {setShowWind(false)}}></div> :  <div className='darker disactive'></div>}

    </div>

  )
}


export default Home
