import {useState, useEffect} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBar({setSvg, dataAll}) {

  const data = useSelector(state => state.data.data)

  const [selectedNews, setSelectedNews] = useState(data[0].name);
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
      setSelectedNews(data[0].name);
    }
  }, []);


  return (
    <div className="side-bar">
      
    <div className="ico">
      <Link to={`${data[0].name}`}><img src={izmirIco} alt="icon"/></Link>
    </div>

      <div className="dropdown-container">
        <select value={selectedNews} className='dropdown-header' onChange={handleOptionClick}>
          {data.map((news) => (
            <option key={news.name} value={news.name}>
              {news.name}
            </option>
          ))}
        </select>
      </div>
      {selectedNews && (
        <div className='blocks-wrapper'>
         <div className="blocks">
          {data.find((news) => news.name === selectedNews).blocks.map((block) => (
             <NavLink to={`/${selectedNews}/${block.name}/1`} activeClassName="active">
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
          {data
          .find((news) => news.name === selectedNews)
          .blocks.find((block) => block.name === selectedBlock)
          .floors.map((floor) => (
            <NavLink to={`/${selectedNews}/${selectedBlock}/${floor.num}`} activeClassName="active" key={floor.num}>
              <div className={`room`}>
                {floor.num}
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