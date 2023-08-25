import { useState, useEffect } from 'react'
import './Home.scss'
import Dropdwm from './Drpopdwn';
import Header from './Header';
import Offers from './Offers';
import Content from './Content';
import SideBar from './SideBar';
import ShowFree from './ShowFree';
import ShowDiscuss from './ShowDiscuss';
import ShowBooked from './ShowBooked';
import imgFlat from '../../assets/flat.png'
import imgBlock from '../../assets/A-block.svg'
import imgDev from '../../assets/dev.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { fetchData } from '../../store/dataFetchSlice';

import axios from 'axios';


function Home() {

  const [dataS, setDataS] = useState(null);

  useEffect(() => {
    // Выполняем асинхронный запрос к серверу
    fetch('http://89.38.131.46:1808/get_all_data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Устанавливаем данные в состояние, когда они загружены
        setDataS(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз при монтировании компонента

  // Если данные еще не загружены, показываем сообщение о загрузке

  

  const data = useSelector(state => state.data.data)


  //http://89.38.131.46:1808/api/all_tables/

  const [showWind, setShowWind] = useState(false)
  const [showDiscuss, setShowDiscuss] = useState(false)
  const [showBooked, setShowBooked] = useState(false)
  const [dataFree, setDataFree] = useState()
  const [svgData, setSvgData] = useState()
  // const FreeTables = [];
  // FreeTables.push(existData.filter((el) => el.status == 'free'));
 
   // let FreeTables = [];

   
  //  FreeTables.push(data.data?.blocks?.floors?.rooms.filter(el => {el.status === 'free'}))

  let dataAll = [];
  let RoomMainList = [];

  dataS?.data.forEach((el) => {
    dataAll.push(el);
    el.blocks.forEach((b) => {
      b.floors.forEach((f) => {
        f.rooms.forEach((r) => {
          RoomMainList.push(r);
        });
      });
    });
  });
  

  // const FreeTables = [{num: 1 ,home: "BoboCity", room: 2, floor:3, block:"Б", area: 46, terrace: 4, img: imgFlat, cost: 8000000 ,status:'free'},]
  const FreeTables = RoomMainList.filter(el => el.status == 'free');
  const DiscussTables =  RoomMainList.filter(el => el.status == 'discussion');
  const BookedTables = RoomMainList.filter(el => el.status == 'booked');
  const SoldTables =  RoomMainList.filter(el => el.status == 'sold');
  const PotentialClientsTables = [{num: 1 ,client: "Khayot Tangirov", whenMoves: "11.05.2023", number: "+998 90 000 00 00",  img: imgFlat}]
  const searchResult = [];

  const navigate = useNavigate()
  const [inpText, setInpText] = useState('');

  if(inpText != '' && location.pathname != '/search'){
    navigate('/search');
  }

  return (
    <div className="Home-wrapper">
      <SideBar setSvg={setSvgData} dataAll={dataAll}/>

      <div className='Content-side'>
        <Header setInpText={setInpText}/>   
          
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
                 setShowDiscuss={setShowDiscuss}
                 setShowBooked={setShowBooked}
                 setDataFree={setDataFree}
                 setInpText={setInpText}
                 inpText={ inpText }
        />
      </div>

     {showWind ?  <ShowFree dataFree={dataFree}/> :  <ShowFree classInfo='disactive'/>}
     {showDiscuss ? <ShowDiscuss dataFree={dataFree} setShowDiscuss={setShowDiscuss}/> : <ShowDiscuss classInfo='disactive'/>}
     {showBooked ? <ShowBooked dataFree={dataFree}/> : <ShowBooked classInfo='disactive'/>}
     {showWind || showDiscuss || showBooked ?  <div className='darker'  onClick={() => {setShowWind(false); setShowDiscuss(false); setShowBooked((false))}}></div> :  <div className='darker disactive'></div>}

    </div>

  )
}


export default Home
