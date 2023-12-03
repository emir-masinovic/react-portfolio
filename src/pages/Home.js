import emir from "../images/emir.jpg";
import "../css/home.css";
import Cube from "../components/Cube";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-item">
          <img src={emir} alt="" className="profile-picture" />
        </div>
        <div className="home-item">
          <h1>Emir Masinovic</h1>
          <p>
            I'm working on combining website development and computer graphics.
          </p>
          <Cube />
        </div>
      </div>
    </>
  );
}
