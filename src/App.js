import "./App.css";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useEffect, useMemo, useState } from "react";

function getImages() {
  const cache = {};

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }

  importAll(require.context("./assets", true, /\.jpeg$/));
  return cache;
}

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const cache = useMemo(getImages, []);

  useEffect(() => setBest(Math.max(best, score)), [score, best]);

  const choosePokemon = (id) => {
    const chosen = pokemons.filter((pokemon) => pokemon.id === id)[0];
    if (chosen.clicked) {
      setIsLoading(true);
    } else {
      setPokemons(
        pokemons
          .filter((pokemon) => pokemon.id !== id)
          .concat({ ...chosen, clicked: true })
      );
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (!isLoading) return;

    const result = [];
    let index = 0;
    for (const key in cache) {
      const pokemon = {
        id: index,
        name: key.slice(2, key.length - 5),
        src: cache[key],
        clicked: false,
      };
      result.push(pokemon);
      index += 1;
    }
    setPokemons(result);
    setIsLoading(false);
    setScore(0);
  }, [isLoading, cache]);

  return (
    <div className="App">
      <Navbar score={score} best={best} />
      {!isLoading && (
        <CardContainer pokemons={pokemons} handleClick={choosePokemon} />
      )}
    </div>
  );
}

export default App;
