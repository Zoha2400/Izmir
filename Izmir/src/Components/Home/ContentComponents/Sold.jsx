import React from 'react'

function Sold({data}) {
  return (
    <div className='SoldFlats'>
    <table>
        <thead>
          <tr>
            <th>№</th>
            <th className='secondElTable'>Имя Клиента</th>
            <th>Дата покупки</th>
            <th>След.оплата</th>
            <th>Площадь</th>
            <th>Блок</th>
            <th>Этаж</th>
            <th>Ком.</th>
            <th>Рассрочка</th>
          </tr>
        </thead>
        <tbody>
            {data.map((i) => {
                return(
                    <tr>
                        <td>{+i.number < 10 ? "0" + +i.number : +i.number}</td>
                        <td>{i.name}</td>
                        <td>{i.date}</td>
                        <td>-</td>
                        <td>{i.area}</td>
                        <td>{i.block}</td>
                        <td>{i.floor}</td>
                        <td>{i.room}</td>
                        <td className='btnTd'><button className='soldbtn btn-table'>ПОСМОТРЕТЬ</button></td>       
                    </tr>
                )
            })}
        </tbody>
      </table>        
    </div>
  )
}

export default Sold