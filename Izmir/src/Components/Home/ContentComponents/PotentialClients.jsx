import React from 'react'

function PotentialClients({data}) {
  return (
    <div className='BookedFlats'>
        <button className='addbtn btn-table'>ДОБАВИТЬ</button>
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th className='secondElTable'>Имя Клиента</th>
                <th>Когда приедет</th>
                <th>Телефон</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {data.map((i) => {
                    return(
                        <tr>
                            <td>{i.num < 10 ? "0" + i.num : i.num}</td>
                            <td>{i.client}</td>
                            <td>{i.whenMoves}</td>
                            <td>{i.number}</td>
                            <td className='btnTd'><button className='soldbtn btn-table'>ПОСМОТРЕТЬ</button></td>       
                            <td className='btnTd'><button className='dissmiss btn-table'>УДАЛИТЬ</button></td>       
                        </tr>
                    )
                })}
            </tbody>
      </table>        
    </div>
  )
}

export default PotentialClients