import {useState} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'

function SideBar({data}) {

  const newsBlocksData = data;

  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleNewsSelect = (newsName) => {
    setSelectedNews(newsName);
    setSelectedBlock(null);
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

}

export default SideBar