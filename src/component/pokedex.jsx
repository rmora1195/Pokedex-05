import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Pokecard from "./pokecard";
import "./pokedex.css";
import Search from "./search";
import Filter from "./filter";
import { useName } from "../contexts/namecontexts";


function Pokedex() {
  const [pokemons, getPokemons] = useFetch()
  const [pokemonUrl, setPokemonUrl] = useState(null)
  const [isFilter, setIsFilter] = useState(false)
  const { name } = useName()

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon")
  }, [])

  function onPrevious() {
    getPokemons(pokemons?.previous)
  }
  function onNext() {
    getPokemons(pokemons?.next)
  }

  function handlerSearch(value) {
    if (value) {
      setPokemonUrl("https://pokeapi.co/api/v2/pokemon/" + value);
    } else {
      setPokemonUrl(null)
      setIsFilter(false)
      getPokemons("https://pokeapi.co/api/v2/pokemon")
    }


  }

  function handlerFilter(value) {
    if (value) {
      setIsFilter(true)
      getPokemons("https://pokeapi.co/api/v2/type/" + value)
    } else {
      setIsFilter(false)
      getPokemons("https://pokeapi.co/api/v2/pokemon")

    }
  }

  const pokemonsfiltered = isFilter ? pokemons?.pokemon : pokemons?.results

  return (
    <div className="container">
      <h2>Hi, {name} </h2>
      <div className="forms">
        <Search handlerSearch={handlerSearch} />
        <Filter handlerFilter={handlerFilter} />
      </div>
      <div className="buttons">

        <button onClick={onPrevious} disabled={!pokemons?.previous} className="buttons-btn">
          Previous
        </button>
        <button onClick={onNext} disabled={!pokemons?.next} className="buttons-btn">
          Next
        </button>
      </div>

      <div className="cards-container">
        {!pokemonUrl && (

          <>
            {pokemonsfiltered?.map((pokemon) => {
              const name = isFilter ? pokemon.pokemon.name : pokemon.name
              const url = isFilter ? pokemon.pokemon.url : pokemon.url
              return (
                <Pokecard key={name} url={url} />
              )
            })}
          </>


        )}

        {pokemonUrl && <Pokecard url={pokemonUrl} />}
      </div>
    </div>
  )
}

export default Pokedex