import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Sidebar.scss'

function Floors({floors}) {
  return (
    <div className='Floors-wrapper'>
        <div className='floors'>
          {floors.map((i) => {
            <p>{i}</p>
          })}
        </div>
    </div>
  )
}

export default Floors