import React from 'react'
import ReactDOM from 'react-dom/client'
import Image from './Components/Images/Imagen'
import SearchBar from './Components/SearchBar/Search'
import Cards from './Components/Tarjetas/Tarjeta'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Image />
    <SearchBar/>
    <Cards/>
  </>
)
