import "../css/button.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, buttonLink }) {
  const isExternalLink = buttonLink.endsWith(".html");

  if (isExternalLink) {
    return (
      <a
        href={buttonLink}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  } else {
    return (
      <Link to={buttonLink} className="btn">
        {text}
      </Link>
    );
  }
}
