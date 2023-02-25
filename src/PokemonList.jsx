import React from 'react'

function PokemonList({pokemon}) {
  return (
    <div>PokemonList
    {pokemon.map(p => (
      <div key={p}> {p} </div>
    ))}
    
    </div>
    
  )
}

export default PokemonList