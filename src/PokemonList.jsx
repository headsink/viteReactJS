import React from 'react'

function PokemonList({pokemon}) {
  return (
    <div className="mt-4 bg-orange-400 font-extrabold">PokemonList
    {pokemon.map(p => (
      <div> {p} </div>
    ))}
    
    </div>
    
  )
}

export default PokemonList