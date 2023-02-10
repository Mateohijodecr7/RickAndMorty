import React from 'react'
import ReactDOM from 'react-dom/client'
import Image from './Components/Images/Imagen'
import { CharacterCard } from './Components/Card/CardData'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Image />
    <CharacterCard />
  </>
)
