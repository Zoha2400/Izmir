import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Home.scss'

function Checked({classN, name, props}) {

  return (
    
    <NavLink to={"/tables/" + classN.toLowerCase()} activeClassName="active-checked">        
        <label className={classN + ' lable-of'}>
            <input  type="checkbox"
                    className="round-checkbox"
                    />
            <div className="checkmark">
                <span className='checkinside'></span>
            </div>
            {name}
            <p className = 'number-of'>{props}</p>
        </label>
    </NavLink>

  )
}

export default Checked