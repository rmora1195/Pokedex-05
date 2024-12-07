import { useEffect } from "react"
import { Link, useParams } from "react-router"
import useFetch from "../hooks/useFetch"
import './details.css'

function Details() {
  const params = useParams()
  const [pokemon, setPokemon] = useFetch()
  useEffect(() => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  }, [params.name])
  return (

    <div className="details">


      <div className={"details-header type--" + pokemon?.types[0]?.type?.name}>
        <div className="details-title">
          <Link to="/pokedex" className="details-arrow" >
            ←
          </Link>
          <h1>{pokemon?.name}</h1>
        </div>
        <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} alt={pokemon?.name} className="details-image" />
      </div>

      <div className="details-body container">
        <h2>Types</h2>
        <ul>
          {pokemon?.types?.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
          ))}
        </ul>
        <h2>Abilities</h2>
        <ul>
          {pokemon?.abilities?.map((ability) => (
            <li key={ability.slot}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Details