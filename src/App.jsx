import axios from "axios";
import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currPageURL, setCurrPageURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true); // if Internet is slow it will be showing "LOADING..."
    let cancel;
    axios.get(currPageURL,{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false); // if this is deleted the page will be showing "LOADING..."
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
      setPokemon(res.data.results.map(p=>p.name));
    })

    return () => cancel();
  }, [currPageURL]);

  if (loading) return "LOADING....";

  const gotoNextPage = () => {}

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
