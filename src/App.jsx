import { Routes, Route } from "react-router";
import Home from "./component/home";
import Pokedex from "./component/pokedex";
import Details from "./component/details";
import ProtectedRoute from "./routes/protectedRoute";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokedex" element={<ProtectedRoute />}>
        <Route index element={<Pokedex />} />
        <Route path=":name" element={<Details />} />
      </Route>

    </Routes>
  )
}

export default App
