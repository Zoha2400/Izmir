import React from 'react'
import './ContentComponents.scss'

function mainShowContent({data}) {
  return (
    <div className='main-show-content-wrap'>
        <div className='main-show-content'>
           <img src={data.img}/>
        </div>
    </div>
  )
}

export default mainShowContent