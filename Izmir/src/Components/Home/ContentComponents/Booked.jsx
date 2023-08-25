import React from 'react'

function Booked({data, setDataFree, setShowBooked}) {
  return (
    <div className='BookedFlats'>
    <table>
        <thead>
          <tr>
            <th>№</th>
            <th className='secondElTable'>Имя Клиента</th>
            <th>Когда приедет</th>
            <th>Оплатил(а)</th>
            <th>Площадь</th>
            <th>Блок</th>
            <th>Этаж</th>
            <th>Ком.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {data.map((i) => {
                return(
                    <tr>
                        <td>{+i.number < 10 ? "0" + +i.number : +i.number}</td>
                        <td>{i.name}</td>
                        <td>{i.date}</td>
                        <td> - </td>
                        <td>{i.area}</td>
                        <td>{i.block}</td>
                        <td>{i.floor}</td>
                        <td>{i.room}</td>
                        <td className='btnTd'><button className='bookedbtn btn-table' onClick={() => {setDataFree(i); setShowBooked(true)}}>ПОСМОТРЕТЬ</button></td>       
                    </tr>
                )
            })}
        </tbody>
      </table>        
    </div>
  )
}

export default Booked