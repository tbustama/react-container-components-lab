import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code  Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    latestMovies: [],
  };
  componentDidMount() {
    fetch(URL)
      .then((resp) => resp.json())
      .then((reviews) =>
        this.setState({
          latestMovies: reviews.results,
        })
      );
  }
  render() {
    console.log(this.state.latestMovies);
    return <MovieReviews latestMovies={this.state.latestMovies} />;
  }
}
