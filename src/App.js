import { useState } from 'react'
import { Search } from './Components/SearchBar/Search'
import { Cards } from './Components/Tarjetas/Tarjeta'

function App () {
  const [personajes] = useState([])
  const [loading] = useState(true)
  const [filter, setFilter] = useState('')

  const personjesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )
  if (loading) return <div>Cargando...</div>

  return (
    <div className="container">
      <Search filter={filter} setFilter={setFilter} />

      <section className="lista-personajes">
        {personjesFiltrados.length > 0
          ? (
              personjesFiltrados.map((personaje) => (
            <Cards key={personaje.id} personaje={personaje} />
              ))
            )
          : (
          <p className="text">
            No se encontro personajes con la busqueda{' '}
            <strong>{filter}</strong>.
          </p>
            )}
      </section>
    </div>
  )
}

export default App
