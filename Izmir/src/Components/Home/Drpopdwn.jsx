import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Home.scss';
import arrowDown from '../../assets/chevron-down.svg'


function Dropdwm({nameDiv, array}) {

const [showDropdown, setShowDropdown] = useState(false);

const [title, setTitle] = useState(nameDiv)

const toggleDropdown = () => {
  setShowDropdown(!showDropdown);
};

function changeTitle(attr){
  setTitle(attr);
  setShowDropdown(!showDropdown)
}

return (
  <div className="Dropdown-btn-wrapper">
    <button className="dropdown-button" onClick={toggleDropdown}>
      {title} 
      <i class="bi bi-chevron-down"></i>
    </button>
    {showDropdown && (
      <div className="dropdown-btn">
        {array.map((i) => {
          return(
            <p onClick={()=> {changeTitle((i))}} key={i}>{i}</p>
          )
        })}
      </div>
    )}
  </div>
);
}

export default Dropdwm