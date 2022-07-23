import React from "react";
import { useParams } from "react-router";
import { MOVIES } from "./../data/movies";

import "../styles/movie/movie.css";

function MovieInfo() {
  const { id } = useParams();
  const movie = MOVIES.find((movie) => movie.id === parseInt(id));
  return (
    <div className="movie__info">
      <div className="movie__info__content">
        <img
          className="movie__img"
          src={movie.media}
          alt={`capa do filme ${movie.name}`}
        />
        <div className="movie__info__title-wrapper">
          <h1 className="movie__info__title">{movie.name}</h1>
          <progress id="rating__bar" max="5" value={movie.rating} />
          <span className="rating">{`${movie.rating}/5`}</span>
        </div>
        <div className="movie__info__desc">
          <p className="movie__info__desc-text">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
