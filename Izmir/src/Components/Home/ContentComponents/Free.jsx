import React from 'react'
import './ContentComponents.scss'

function Free({data, setShowWind, setDataFree}) {

  return (
    <div className='FreeLyFlats'>

    <table>
        <thead>
          <tr>
            <th>№</th>
            <th className='secondElTable'>Дом</th>
            <th>Ком.</th>
            <th>Этаж</th>
            <th>Блок</th>
            <th>Площадь</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {data.map((i) => {
                return(
                    <tr>
                        <td>{+i.number < 10 ? "0" + i.number : i.number}</td>
                        <td>{i.name}</td>
                        <td>{i.room}</td>
                        <td>{i.floor}</td>
                        <td>{i.block}</td>
                        <td>{i.area}A</td>
                        <td className='btnTd'><button onClick={() => {setDataFree(i); setShowWind(true)}} className='freely btn-table'>ПОСМОТРЕТЬ</button></td>       
                    </tr>
                )
            })}
        </tbody>
      </table>        
    </div>
  )
}

export default Free