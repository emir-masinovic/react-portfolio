import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.js"
import Projects from "./pages/Projects"
import Pokemon from "./pages/Pokemon"
import Clicker from "./pages/Clicker"
import Ratings from "./pages/Ratings"
import TTT from "./pages/TTT"

export default function App() {

  return (
    <>
      <Navbar /><Routes basename="emir-masinovic.github.io">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pokemon" element={<Pokemon />} />
        <Route path="/projects/clicker" element={<Clicker />} />
        <Route path="/projects/ratings" element={<Ratings />} />
        <Route path="/projects/tictactoe" element={<TTT />} />
      </Routes>
    </>
  )
}