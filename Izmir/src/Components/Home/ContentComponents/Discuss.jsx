import React from 'react'

function Discuss({data, setDataFree, setShowDiscuss}) {
  return (
    <div className='DiscussFlats'>

    <table>
        <thead>
          <tr>
            <th>№</th>
            <th className='secondElTable'>Продавец</th>
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
                        <td>{`${i.name} - ${i.surname}`}</td>
                        <td>{i.area}A</td>
                        <td>{i.block}</td>
                        <td>{i.floor}</td>
                        <td>{i.room}</td>
                        <td className='btnTd'><button className='discussly btn-table' onClick={() => {setDataFree(i); setShowDiscuss(true)}}>ПОСМОТРЕТЬ</button></td>       
                    </tr>
                )
            })}
        </tbody>
      </table>        
    </div>
  )
}

export default Discuss