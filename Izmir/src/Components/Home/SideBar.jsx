import {useState} from 'react'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link} from "react-router-dom";
import './Home.scss'

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedName, setSelectedName] = useState(''); // Имя, выбранное из списка
  
    const names = ['Alice', 'Bob', 'Charlie', 'David']; // Список имен


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNameSelect = (name) => {
    setSelectedName(name);
    setIsOpen(false);
  };


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
          {names.map((name) => (
              <Link to={`/${"developer/" + name}`}  className="link-building" key={name} onClick={() => handleNameSelect(name)}>{name}</Link>
          ))}              
        </ul>
      )}
    </div>
  </div>
  )
}

export default SideBar