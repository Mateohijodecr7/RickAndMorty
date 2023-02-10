/* eslint-disable no-tabs */
import React from 'react'
import { Cards } from '../Tarjetas/Tarjeta'

export const Search = ({ filter, setFilter }) => {
  const handleInput = ({ target }) => {
    setFilter(target.value)
  }

  return (
		<section className='filtrar'>
			<input
				className='boton'
				type='text'
				placeholder='Search...'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
			<alert ></alert>
            <button 
			className='boton2'
			>
				Buscar
			</button>
		</section>
  )
}
