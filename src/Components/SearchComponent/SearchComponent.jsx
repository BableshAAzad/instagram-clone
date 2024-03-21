import React from 'react'
import "./SearchComponent.css"
import SearchUserCard from './SearchUserCard'

function SearchComponent() {
  return (
    <div className='searchContainer'>
      <div className='px-3 pb-5'>
        <h1 className='text-xl pb-4 '>Search</h1>
        <input className='searchIntput' type="text" placeholder='Search...' />
      </div>
      <hr />
      <div className='px-3 pt-5'>
        {[1, 2, 3, 4, 5].map((item) => <SearchUserCard key={item} />)}
      </div>
    </div>
  )
}

export default SearchComponent
