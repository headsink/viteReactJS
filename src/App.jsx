import { useState } from "react"
import PokemonList from "./PokemonList";


function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur","charmander"]);



  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <PokemonList pokemon={pokemon} />
    </div>
   
  );
}

export default App
