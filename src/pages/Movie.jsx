import React from "react";
import Header from "./../components/Header";
import MovieInfo from "../components/MovieInfo";

function Movie() {
  return (
    <div className="movie__info">
      <Header />
      <MovieInfo />
    </div>
  );
}

export default Movie;
