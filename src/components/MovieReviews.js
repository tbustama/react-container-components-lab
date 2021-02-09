// Code MovieReviews Here
import React from "react";
const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.latestMovies.map((movie) => {
        return (
          <div>
            <h3>{movie.display_title}</h3> <p>{movie.summary_short}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieReviews;
