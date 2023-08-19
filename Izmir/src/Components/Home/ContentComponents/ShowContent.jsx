import React from 'react'
import './ContentComponents.scss'
import { ReactSVG } from 'react-svg'
// import {ReactComponent as Logo } from '../../../assets/owSvDveM.svg'

function mainShowContent({data}) {
  return (
    <div className='main-show-content-wrap'>
        <div className='main-show-content'>
           <img src={data.img}/>
           {/* <ReactSVG src='http://89.38.131.46:1808/static/img/owSvDveM.svg'/> */}
        </div>
    </div>
  )
}

export default mainShowContent