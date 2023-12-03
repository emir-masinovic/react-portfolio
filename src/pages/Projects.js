import "../css/projects.css";
import Card from "../components/Card";

import clicker from "../images/clicker.jpg";
import clock from "../images/clock.jpg";
// import gocube from "../images/gocube.jpg";
import parallax from "../images/parallax.jpg";
import pokemon from "../images/pokemon.jpg";
import ratings from "../images/ratings.jpg";
// import ttt from "../images/ttt.jpg";

export default function Projects() {
  return (
    <>
      <div className="project-container">
        <Card
          title="Clicker"
          imageSource={clicker}
          bodyContent="Clickity-clack!"
          buttonText="Play"
          buttonLink="/projects/clicker"
        />
        <Card
          title="Clock"
          imageSource={clock}
          bodyContent="Just a clock, that tells your local time"
          buttonText="Link"
          buttonLink="/projects/clock"
        />
        {/* <Card
          title="GoCube"
          imageSource={gocube}
          bodyContent="Babylonjs"
          buttonText="Play"
          buttonLink="/projects/gocube"
        /> */}
        <Card
          title="Parallax"
          imageSource={parallax}
          bodyContent="Illusion of depth with Parallax Effect"
          buttonText="Link"
          buttonLink="/parallax/parallax.html"
        />
        <Card
          title="Pokemon"
          imageSource={pokemon}
          bodyContent="Pokedex, but without images"
          buttonText="Link"
          buttonLink="/projects/pokemon"
        />
        <Card
          title="Movie Ratings"
          imageSource={ratings}
          bodyContent="Rate a movie!"
          buttonText="Link"
          buttonLink="/projects/ratings"
        />
        {/* <Card title="Tic Tac Toe" imageSource={ttt} bodyContent="Work in progress" buttonText="Play" buttonLink="/projects/tictactoe" /> */}
      </div>
    </>
  );
}
