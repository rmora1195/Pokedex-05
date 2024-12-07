import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './pokecard.css'
import { Link } from 'react-router'

function Pokecard({ url }) {
  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    getPokemon(url)
  }, [url])

  if (!pokemon) return null

  const image = pokemon?.sprites?.other["official-artwork"]?.front_default
  const types = pokemon?.types.map((type) => type.type.name).join(" / ")
  const hp = pokemon?.stats?.find((stat) => stat.stat.name === "hp")?.base_stat
  const attack = pokemon?.stats?.find((stat) => stat.stat.name === "attack")?.base_stat
  const defense = pokemon?.stats?.find((stat) => stat.stat.name === "defense")?.base_stat
  const speed = pokemon?.stats?.find((stat) => stat.stat.name === "speed")?.base_stat

  const classType = types.split(' / ')[0]

  return (


    <Link to={"/pokedex/" + pokemon?.name}>

      <div className={`card ${classType && 'type--' + classType}`}>
        <div className='card__header'>
          <img src={image} alt={pokemon?.name} />
        </div>

        <div className='card__body'>
          <h2 className='card__name'>{pokemon?.name}</h2>
          <p className='card__types'>{types}</p>
          <span className='card__types-label'>Type</span>

          <div className='card__stats'>
            <span className='card__stats-item'>hp<span>{hp}</span></span>
            <span className='card__stats-item'>attack<span>{attack}</span></span>
            <span className='card__stats-item'>defense<span>{defense}</span></span>
            <span className='card__stats-item'>speed<span>{speed}</span></span>
          </div>
        </div>
      </div>

    </Link>
  )

}

export default Pokecard