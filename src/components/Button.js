import "../css/button.css"
import { Link } from "react-router-dom"

export default function Button({ text, buttonLink }) {
  return (
    <Link to={buttonLink} className="btn">{text}</Link>
  )
}