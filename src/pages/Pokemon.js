import "../css/loader.css";
import "../css/pokemon.css";
import pokemontitle from "../images/pokemontitle.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel = null;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => (cancel = cancel());
  }, [currentPageUrl]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="pokemon-card">
      <img className="pokemon-card-head" src={pokemontitle} alt="" />
      <div className="pokemon-card-body">
        {pokemon.map((p) => (
          <div key={p} className="pokemon-card-body-div">
            {capitalize(`${p}`)}
          </div>
        ))}
      </div>
      <div className="pokemon-card-footer">
        <div className="pokemon-card-buttons">
          {prevPageUrl !== null && (
            <button onClick={() => setCurrentPageUrl(prevPageUrl)}>
              Previous
            </button>
          )}
          {nextPageUrl !== null && (
            <button onClick={() => setCurrentPageUrl(nextPageUrl)}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}
