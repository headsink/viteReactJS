import axios from "axios";
import { useState, useEffect } from "react"
import PokemonList from "./PokemonList";


function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setPokemon(res.data.results.map(p=>p.name))
    })
  }, [])
  



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
