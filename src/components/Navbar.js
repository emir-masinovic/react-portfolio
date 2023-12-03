import React, { useEffect } from "react";
import "../css/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactComponent as Logo } from "../images/baklava.svg";

export default function Navbar() {
  const changeTheme = () => {
    document.body.classList.toggle("light-theme");
    const isLightTheme = document.body.classList.contains("light-theme");
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("isLightTheme");
    if (storedTheme) {
      const isLightTheme = JSON.parse(storedTheme);
      if (isLightTheme) {
        document.body.classList.add("light-theme");
      } else {
        document.body.classList.remove("light-theme");
      }
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <a className="logo" href="https://github.com/emir-masinovic">
          <Logo className="logo-svg" />
        </a>
        <ul className="navbar-links">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
        </ul>
        <div className="switch">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={changeTheme} />
            <div className="slider round"></div>
          </label>
        </div>
      </nav>
    </>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
