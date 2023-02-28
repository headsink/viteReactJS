import axios from "axios";
import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currPageURL, setCurrPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();


  useEffect(() => {
    axios.get(currPageURL).then(res => {
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
      setPokemon(res.data.results.map(p=>p.name));
    })
  }, [currPageURL]);
  



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
