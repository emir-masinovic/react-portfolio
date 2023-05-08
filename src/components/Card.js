import "../css/card.css"
import Button from "./Button"

const Card = ({ title, imageSource, bodyContent, buttonText, buttonLink }) => {
  return (
    <div className="card-container">
      <div className="card-head">
        <img src={imageSource} alt="" className="img-card" />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{bodyContent}</p>
      </div>
      <div className="card-footer">
        <Button text={buttonText} buttonLink={buttonLink} />
      </div>
    </div>
  )
}
export default Card