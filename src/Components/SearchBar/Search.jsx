import React, { useState } from 'react'
import './Search.css'

function SearchBar () {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
      className='botona'
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='search' type="submit">Search</button>
    </form>
  )
}

export default SearchBar
