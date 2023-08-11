import {useState} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link, Routes, Route} from "react-router-dom";
import './Home.scss'
import Blocks from './SideBarContent/Blocks.jsx';
import Floors from './SideBarContent/Floors';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState(''); // Имя, выбранное из списка
  
    const names = ['xonsaroy', 'goldebhouse', 'piramt', 'nestone']; // Список имен


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleNameSelect = (name) => {
        setSelectedName(name);
        setIsOpen(false);
    };

    const blocksInfo = [
        {name: 'xonsaroy', blocks: ['A', 'Б', 'В', 'Г', 'Д', 'Е'], floors: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ]},
        {name: 'goldebhouse', blocks: ['A', 'Б', 'В', 'Г', 'Д', 'Е'], floors: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ]},
        {name: 'piramt', blocks: ['A', 'Б', 'В', 'Г', 'Д'],floors: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        ]},
        {name: 'nestone', blocks: ['A', 'Б', 'В', 'Г', 'Д', 'Е'], floors: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        ]}
    ]




  return (
    <div className="side-bar">
    <div className="ico">
      <Link to="/"><img src={izmirIco} alt="icon"/></Link>
    </div>

    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedName || 'НОВОСТРОЙКА'}
        <i class="bi bi-chevron-down"></i>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {blocksInfo.map((name) => (
              <Link to={`/developer/${name.name}`}  className="link-building" key={name.name} onClick={() => handleNameSelect(name.name)}>{name.name}</Link>
          ))}              
        </ul>
      )}
    </div>
    
    <Routes>
        {blocksInfo.map((el) => {
            return(
            <Route path={`/developer/${el.name}/*`} element={<Blocks blocks={el.blocks} _selectedName={el.name}/>}/>
            )
        })}
    </Routes>

    <Routes>
        {blocksInfo.map((el) => {
                return(
                //    <Route path={`/developer/${el.name}/${elB}/*`} element={<Floors floors={el.floors} _selectedName={el.name} block={elB}/>}/>
                <Route path={`/developer/${el.name}/Б`} element={<Floors floors={el.floors} _selectedName={el.name} block={'Б'}/>}/>
                
                )
        })}
    </Routes>
  </div>
  )
}

export default SideBar