import {useState} from 'react'
import './Home.scss'
import Dropdwm from './Drpopdwn';
import { Link } from 'react-router-dom';

function Header({setInpText}) {

    const kom = ['1 Kom', '2 Kom', '3 Kom']
    const etj = ['1 etaj', '2 etaj', '3 etaj']
    const blok = ['1 blok', '2 blok',]
  return (
  <div className="header-wrapper">
    <div className="header">
     <input type="text" onChange={(e) => setInpText(e.target.value)} className="name-input" placeholder="Имя Фамилия" />
      <div className='dropdowns-btns'>
        <Dropdwm nameDiv={'Ком.'} array={kom}/>
        <Dropdwm nameDiv={'Этаж'} array={etj}/>
        <Dropdwm nameDiv={'Блок'} array={blok}/>
      </div>
     <Link to='/LogIn'> <div className="login">Логин <i class="bi bi-box-arrow-in-right"></i></div></Link>
    </div>
  </div>

  )
}

export default Header