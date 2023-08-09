import { useState } from 'react'
import './Home.scss'
import izmirIco from '../../assets/izmir.svg'
import { BrowserRouter,Outlet, Link} from "react-router-dom";


function Home() {

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
    <div className="Home-wrapper">
      <div className="side-bar">
        <div className="ico">
          <Link to="/"><img src={izmirIco} alt="icon"/></Link>
        </div>

        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedName || 'НОВОСТРОЙКА'}
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

      <div className="header-wrapper">
        <div className="header">
         <input type="text" className="name-input" placeholder="Имя Фамилия" />
          <div className="dropdowns">
            <Dropdown placeholder="Ком." options={['Ком 1', 'Ком 2', 'Ком 3']} />
            <Dropdown placeholder="Этаж" options={['Этаж 1', 'Этаж 2', 'Этаж 3']} />
            <Dropdown placeholder="Блок" options={['Блок A', 'Блок B', 'Блок C']} />
          </div>  
          <div className="login">Логин</div>         
        </div>
      </div>


    </div>

  )
}


const Dropdown = ({ placeholder, options }) => {
  return (
    <div className="dropdown">
      <select className="dropdown-select">
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Home
