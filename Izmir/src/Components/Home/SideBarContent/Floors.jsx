import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Sidebar.scss'

function Floors({_selectedName, floors, block}) {
  return (
    <div className='Floors-wrapper'>
        <div className='floors'>
          {floors.map((i) => {
            i.map((fi) => {
              return(
                <NavLink to={ `/developer/${_selectedName}/${block}/${fi}`} activeClassName="activeCheckedFloor">
                   <p key={fi}>{fi}</p>
                </NavLink>
              )
            })
          })}
        </div>
    </div>
  )
}

export default Floors