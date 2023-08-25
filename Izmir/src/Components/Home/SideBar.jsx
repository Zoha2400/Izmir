import {useState, useEffect} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, NavLink, Route} from "react-router-dom";
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SideBar({setSvg, dataAll}) {

  const data = dataAll;
  let pathname;
  for(let i = 0; i < data.length; i++){
    if(i == 0){
      pathname = data[i].pathname;
    }
  }



  const [selectedNews, setSelectedNews] = useState(pathname);
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
      navigate(`/${pathname}`);
      setSelectedNews(pathname);
    }
  }, []);


  return (
    <div className="side-bar">
      
    <div className="ico">
      <Link to={`${pathname}`}><img src={izmirIco} alt="icon"/></Link>
    </div>

      <div className="dropdown-container">
        <select value={selectedNews} className='dropdown-header' onChange={handleOptionClick}>
          {data.map((news) => (
            <option key={news.pathname} value={news.pathname}>
              {news.pathname}
            </option>
          ))}
        </select>
      </div>
      {selectedNews && (
        <div className='blocks-wrapper'>
         <div className="blocks">
          {data.find((news) => news.pathname === selectedNews).blocks.map((block) => (
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
          .find((news) => news.pathname === selectedNews)
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