import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clicker from "./pages/Clicker";
import Clock from "./pages/Clock";
import Projects from "./pages/Projects";
import Pokemon from "./pages/Pokemon";
import Ratings from "./pages/Ratings";
// import TTT from "./pages/TTT";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes basename="emir-masinovic.github.io">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/clicker" element={<Clicker />} />
        <Route path="/projects/clock" element={<Clock />} />
        {/* <Route path="/parallax/parallax.html" /> */}
        <Route path="/projects/pokemon" element={<Pokemon />} />
        <Route path="/projects/ratings" element={<Ratings />} />
        {/* <Route path="/projects/tictactoe" element={<TTT />} /> */}
      </Routes>
    </>
  );
}
