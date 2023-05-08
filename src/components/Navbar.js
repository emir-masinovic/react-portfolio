import "../css/navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import { ReactComponent as Logo } from "../image/baklava.svg"
import { ReactComponent as Sun } from "../image/sun.svg"
import { ReactComponent as Moon } from "../image/moon.svg"
import { ReactComponent as Menu } from "../image/menu.svg"

export default function Navbar() {

  function changeTheme() { document.body.classList.toggle("light-theme") }

  return (
    <>
      <nav className="navbar">
        <div className="theme-icon">
          <button className="sun" onClick={changeTheme}><Sun /></button>
          <button className="moon" onClick={changeTheme}><Moon /></button>
        </div>
        <ul className="navbar-links">
          <div className="logo"><Logo /></div>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
        </ul>
        <button className="menu-container" ><Menu className="menu" /></button>
      </nav>
    </>
  )
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })


  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}