import { useState } from 'react'
import { Search } from './Components/SearchBar/Search'

function App () {
  const [personajes] = useState([])
  const [loading] = useState(true)
  const [filtrar, setFiltrar] = useState('')

  const personjesFiltrados = personajes.filtrar((personaje) =>
    personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )
  if (loading) return <div>Cargando...</div>

  return (<>
  
    <div className="container">
      <Search filtrar={filtrar} setFiltrar={setFiltrar} />
			<section className='lista-personajes'>
				{loading
				  ? (
					  <p>Cargando...</p>
				    )
				  : personjesFiltrados.length > 0
				  ? (
					  personjesFiltrados.map((item) => (
						  <li key={item.id}>{item.name}</li>
						  ))
						  )
						  : (
							  <p className='text'>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filtrar}"</strong>.
					</p>
				      )}
			</section>
		</div>
		</>
  </div>
  )
}

export default App
