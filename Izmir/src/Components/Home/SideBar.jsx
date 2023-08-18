import {useState} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'
import imgFlat from '../../assets/imageFlat.svg'

const newsBlocksData = [
  {
    name: 'NeonTower',
    blocks: ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
    rooms: [
      {id: 1, status: "free", img: imgFlat},
      {id: 2, status: "sold", img: imgFlat},
      {id: 3, status: "booked", img: imgFlat},
      {id: 4, status: "discuss", img: imgFlat}
    ]
  },
  {
    name: 'kr',
    blocks: ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
    rooms: [
      {id: 1, status: "free", img: imgFlat},
      {id: 2, status: "sold", img: imgFlat},
      {id: 3, status: "booked", img: imgFlat},
      {id: 4, status: "discuss", img: imgFlat}
    ]
  },
  {
    name: 'hk',
    blocks: ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
    rooms: [
      {id: 1, status: "free", img: imgFlat},
      {id: 2, status: "sold", img: imgFlat},
      {id: 3, status: "booked", img: imgFlat},
      {id: 4, status: "discuss", img: imgFlat}
    ]
  },
  {
    name: 'hh',
    blocks: ['А', 'Б', 'В', 'Г', 'Д', 'Е'],
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


function SideBar() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
  };


  return (
    <div className="side-bar">

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
            <NavLink to={`/${selectedNews}/${block}`} activeClassName="active">
              <button
                key={block}
                className={`block-button`}
                onClick={() => handleBlockSelect(block)}
              >
                {block}
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
}

export default SideBar