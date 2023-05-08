import "../css/projects.css"
import Card from "../components/Card"

import leaderboard from "../image/leaderboard.jpg"
import feedback from "../image/feedback.jpg"
import ttt from "../image/ttt.jpg"
import pokemon from "../image/pokemon.jpg"

export default function Projects() {
  return (
    <>
      <div className="project-container">
        <Card title="Clicker" imageSource={leaderboard} bodyContent="Clickity-clack!" buttonText="Play" buttonLink="/projects/clicker" />
        <Card title="Feedback Ratings" imageSource={feedback} bodyContent="Rate a movie!" buttonText="Link" buttonLink="/projects/ratings" />
        <Card title="Tic Tac Toe" imageSource={ttt} bodyContent="Work in progress" buttonText="Play" buttonLink="/projects/tictactoe" />
        <Card title="Pokemon" imageSource={pokemon} bodyContent="Pokedex, but without images" buttonText="Link" buttonLink="/projects/pokemon" />
      </div>
    </>
  )
}