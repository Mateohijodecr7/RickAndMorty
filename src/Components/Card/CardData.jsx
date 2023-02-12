import React, { useState, useEffect } from 'react'
import { Card } from '../Card'

export function CharacterCard (name) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((characterData) => characterData.json())
      .then((characterData) => setData(characterData))
  }, [])
  console.log(data)
  if (!data?.results?.length) return <div>No hay nada</div>

  return (
    <>
      {data?.results?.map((characterData) => {
        console.log(characterData)
        return (
          <>
            <Card {...characterData} />
          </>
        )
      })}
    </>
  )
}
