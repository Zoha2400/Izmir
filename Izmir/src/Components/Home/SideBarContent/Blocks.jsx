import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

function Blocks({blocks, _selectedName, floors}) {
  return (
    <div className='blocks-wrapper'>
        <div className='blocks'>
        {blocks.map((i) => {
            return(
                <NavLink to={ '/developer/' + _selectedName + '/blocks/' + i} activeClassName="activeChecked">
                    <p key={i}>{i}</p>
                </NavLink>
            )
        })}
        </div>
    </div>
  )
}

export default Blocks