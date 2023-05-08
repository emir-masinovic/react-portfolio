import emir from "../image/emir.jpg"
import "../css/home.css"

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-item">
          <img src={emir} alt="" className="img-fluid" />
        </div>
        <div className="home-item">
          <h1>Emir Masinovic</h1>
          <p>I'm working on combining website development and computer graphics.</p>
          <div className="cube">
            <div className="top"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="left"></div>
            <div className="front"></div>
            <div className="back"></div>
          </div>
        </div>
      </div>
    </>
  )
}