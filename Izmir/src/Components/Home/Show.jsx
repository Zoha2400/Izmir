import React from 'react'
import './Home.scss'

function Show({classInfo, dataFree}) {
  return (
    <div className={`ShowWindowFlat-wrapper ${classInfo}`}>
      <div className='ShowWindowFlat'>
        <h1>{dataFree?.area}</h1>
        <p className='shortInfo'>
          {dataFree?.room}х ком. {dataFree?.floor}-ЭТАЖ | {dataFree?.block}-БЛОК
        </p>
        <img src={dataFree?.img}/>
      </div>
    </div>
  )
}

export default Show