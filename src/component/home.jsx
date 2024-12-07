import { useRef } from "react"
import { useName } from "../contexts/namecontexts"
import { useNavigate } from "react-router"
import "./home.css"

function Home() {
  const navigate = useNavigate()
  const { setName } = useName()
  const inputref = useRef()
  const handleClick = () => {
    setName(inputref.current.value)
    navigate("/pokedex")
  }

  return (
    <div className="home">
      <h1 className="home-title">Welcome to the Pokedex</h1>
      <p className="home-text">Please tape you name to start</p>
      <div>
        <input type="text" ref={inputref} className="home-input" />
        <button onClick={handleClick} className="home-btn">Star</button>
      </div>
    </div>
  )
}

export default Home