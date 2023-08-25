import React from 'react'
import './ContentComponents.scss'

function SearchResult({inpText}) {
  return (
    <div className='searchResult'>
        {inpText=='' ? <p>Введите имя в поисковик...</p> : <p>Результат!</p>}
    </div>
  )
}

export default SearchResult