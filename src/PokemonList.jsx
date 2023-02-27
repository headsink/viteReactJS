import React from 'react'

function PokemonList({pokemon}) {
  return (
    <div className="mt-4 bg-orange-400 font-extrabold">PokemonList
    {pokemon.map(p => (
      <div key={p}> {p} </div>
    ))}
    
    </div>
    
  )
}

export default PokemonList