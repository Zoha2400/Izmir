import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Home.scss'
import Checked from './Checked';

function Offers({fl, dl, bl, sl, pcl}) {

  return (
    <div className='offers-wrapper'>
      <div className='offers'>
      <Checked props={fl} classN="Free" name="Свободно" />
      <Checked props={dl} classN="Discuss" name="Обсуждение" />
      <Checked props={bl} classN="Booked" name="Забронированно" />
      <Checked props={sl} classN="Sold" name="Продано" />
      <Checked props={pcl} classN="Clients" name="Потенц.клиенты" />

      </div>
    </div>
  )
}

export default Offers