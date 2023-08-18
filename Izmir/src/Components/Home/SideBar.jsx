import {useState, useEffect} from 'react'
import izmirIco from '../../assets/izmir.svg'
<<<<<<< HEAD
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'

function SideBar({data}) {

  const newsBlocksData = data;
=======
import { BrowserRouter,Outlet, Link, NavLink, Route, Routes, Navigate } from "react-router-dom";
import './Home.scss'
import imgFlat from '../../assets/imageFlat.svg'



function SideBar() {

  const [blocksServ, setBlocksServ] = useState();

  useEffect(() => {
    fetch('http://89.38.131.46:1808/api/blocks/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBlocksServ(data);
      console.log(data);
    });
  }, []);

  const newsBlocksData = [
    {
      name: 'NeonTower',
      blocks: blocksServ,
      rooms: [
        {id: 1, status: "free", img: imgFlat},
        {id: 2, status: "sold", img: imgFlat},
        {id: 3, status: "booked", img: imgFlat},
        {id: 4, status: "discuss", img: imgFlat}
      ]
    },
    {
      name: 'Xonsaroy',
      blocks: blocksServ,
      rooms: [
        {id: 1, status: "free", img: imgFlat},
        {id: 2, status: "sold", img: imgFlat},
        {id: 3, status: "booked", img: imgFlat},
        {id: 4, status: "discuss", img: imgFlat}
      ]
    },
  ];
  function generateRooms() {
    return Array.from({ length: 10 }, (_, index) => `${index + 1}`);
  }


>>>>>>> main

  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
<<<<<<< HEAD

  const handleNewsSelect = (newsName) => {
    setSelectedNews(newsName);
    setSelectedBlock(null);
    setSelectedRoom(null);
=======


  const handleNewsSelect = (newsName) => {
    setSelectedNews(newsName);
    setSelectedBlock(null);
    setSelectedRoom(null);
  };

  const handleBlockSelect = (blockName) => {
    setSelectedBlock(blockName);
    setSelectedRoom(null);
  };

  const handleRoomSelect = (roomId) => {
    if (selectedRoom === roomId) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(roomId);
    }
>>>>>>> main
  };

  const handleRoomSelect = (roomId) => {
    if (selectedRoom === roomId) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(roomId);
    }
  };

  return (
    <div className="side-bar">
      
<<<<<<< HEAD
    <div className="ico">
      <Link to="/"><img src={izmirIco} alt="icon"/></Link>
    </div>

      <div className="dropdown-container">
        <select className='dropdown-header' onChange={(e) => handleNewsSelect(e.target.value)}>
          <option value="">Выберите новостройку</option>
          {newsBlocksData.map((news) => (
            <option key={news.name} value={news.name}>
              {news.name}
            </option>
          ))}
        </select>
      </div>
      {selectedNews && (
        <div className='blocks-wrapper'>
         <div className="blocks">
          {newsBlocksData.find((news) => news.name === selectedNews).blocks.map((block) => (
             <NavLink to={`/${selectedNews}/${block.name}`} activeClassName="active">
              <button
                key={block.name}
                className={`block-button`}
                onClick={() => setSelectedBlock(block.name)}
                >
                <span className={`block-letter`}>
                  {block.name}
                </span>
              </button>
             </NavLink>
          ))}
         </div>
        </div>
      )}
      {selectedBlock && (
        <div className="rooms">
          <div className="room-list">
            {newsBlocksData.find((news) => news.name === selectedNews).rooms.map((room) => (
                 <NavLink to={`/${selectedNews}/${selectedBlock}/${room.num}`} activeClassName="active">
                  <div
                    key={room.num}
                    className={`room`}
                    >
                    {room.num}
                  </div>
                 </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );

=======
      <Routes>
      <Route path='/' element={ <Navigate to={`/${newsBlocksData[0].name}`}/>}/>
    </Routes>

    <div className="ico">
      <Link to="/"><img src={izmirIco} alt="icon"/></Link>
    </div>
    <div className="dropdown-container">
          <select className='dropdown-header' onChange={(e) => handleNewsSelect(e.target.value)}>
            {newsBlocksData.map((news) => (
              <option key={news.name} value={news.name}>
                {news.name}
              </option>
            ))}
          </select>
      </div>
      {selectedNews && (
        <div className="blocks-wrapper">
          <div className='blocks'>
          {newsBlocksData.find((news) => news.name === selectedNews).blocks.map((block) => (
            <NavLink to={`/${selectedNews}/${block.address}`} activeClassName="active">
              <button
                key={block.address}
                className={`block-button`}
                onClick={() => handleBlockSelect(block.address)}
              >
                {block.address}
              </button>
            </NavLink>

          ))}
          </div>
        </div>
      )}
      {selectedBlock && (
        <div className="rooms">
          <div className="room-list">
            {generateRooms().map((room, index) => (
            <NavLink to={`/${selectedNews}/${selectedBlock}/${room}`} activeClassName="active"> 
              <div key={index} className="room">
                {room}
              </div>
            </NavLink>

            ))}
          </div>
        </div>
      )}
    </div>
  );
>>>>>>> main
}

export default SideBar