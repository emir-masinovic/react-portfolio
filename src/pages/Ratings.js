import "../css/ratings.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const minimumCharacters = 5;

export default function Ratings() {
  const [input, setInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [averageRatings, setAverageRatings] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [ratingsArray, setRatingsArray] = useState([]);

  useEffect(() => {
    const savedData = window.localStorage.getItem("MOVIE_RATINGS");
    if (savedData !== null) setRatingsArray(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MOVIE_RATINGS", JSON.stringify(ratingsArray));
    let total = null;
    ratingsArray.map((movie) => {
      total += movie.rating;
    });
    if (total === null) return setAverageRatings(0);
    setAverageRatings((total / ratingsArray.length).toFixed(2));
  }, [ratingsArray]);

  useEffect(() => {
    if (input.length < minimumCharacters) setButtonDisabled(true);
    else setButtonDisabled(false);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) return alert("Pick a rating");
    const newRating = {
      id: uuidv4(),
      rating: userRating,
      text: input,
    };
    setUserRating(0);
    setInput("");
    setRatingsArray([newRating, ...ratingsArray]);
  };

  const handleDelete = (event) => {
    const idToDelete = event.currentTarget.dataset.id;
    const filteredArray = ratingsArray.filter((item) => item.id !== idToDelete);
    setRatingsArray(filteredArray);
  };

  return (
    <div className="ratings-container">
      <div className="ratings-header">
        <h2>Rate a movie. Heck, rate them all</h2>
        <form className="ratings-form">
          <ul className="ratings-form-list">
            {Array.from({ length: 10 }, (_, i) => (
              <li key={i}>
                <input
                  type="radio"
                  id={"radio " + (1 + i)}
                  value={1 + i}
                  onChange={(event) => {
                    setUserRating(parseInt(event.target.value));
                  }}
                  checked={userRating === 1 + i}
                />
                <label htmlFor={"radio " + (1 + i)}>{1 + i}</label>
              </li>
            ))}
          </ul>
          <div className="ratings-form-group">
            <input
              type="text"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              placeholder="Rate away"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={buttonDisabled}
              className="primary"
            >
              Rate
            </button>
          </div>
        </form>
        {input.length < minimumCharacters ? (
          <p className="warning-message">Text must be at least 5 characters</p>
        ) : (
          <div></div>
        )}
      </div>

      <div className="ratings-body">
        <div className="total-ratings">{ratingsArray.length} Reviews</div>
        <div className="average-ratings">Average rating: {averageRatings}</div>
      </div>

      <div className="ratings-footer">
        {ratingsArray.map((movie) => (
          <div key={uuidv4()} className="review-card">
            <div className="review-card-rating">{movie.rating}</div>
            <p>{movie.text}</p>
            <button
              className={"review-card-close-button"}
              onPointerDown={handleDelete}
              data-id={movie.id}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
