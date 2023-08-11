import React from 'react'

function Show({classInfo, dataFree}) {
    console.log(dataFree)
  return (
    <div className={`ShowWindowFlat ${classInfo}`}>
        {dataFree}
    </div>
  )
}

export default Show