import {useState, useEffect} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBar({setSvg}) {

  const data = useSelector(state => state.data.data);

  const newsBlocksData = data;

  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleNewsSelect = (newsName) => {
    setSelectedNews(newsName);
    setSelectedBlock(null);
    setSelectedRoom(null);
  };


  const navigate = useNavigate();
  

  const handleOptionClick = (event) => {
    const selectedValue = event.target.value;
    setSelectedNews(selectedValue);
    navigate(`/${selectedValue}`);
  };


  useEffect(() => {
    if (data[0]) {
      navigate(`/${data[0].name}`);
    }
  }, []);


  return (
    <div className="side-bar">
      
    <div className="ico">
      <Link to={`${data[0].name}`}><img src={izmirIco} alt="icon"/></Link>
    </div>

      <div className="dropdown-container">
        <select value={selectedNews} className='dropdown-header' onChange={handleOptionClick}>
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
          {newsBlocksData
          .find((news) => news.name === selectedNews)
          .blocks.find((block) => block.name === selectedBlock)
          .rooms.map((room) => (
            <NavLink to={`/${selectedNews}/${selectedBlock}/${room.num}`} activeClassName="active" key={room.num}>
              <div className={`room`}>
                {room.num}
              </div>
            </NavLink>
          ))
          }
          </div>
        </div>
      )}
    </div>
  );

}

export default SideBar