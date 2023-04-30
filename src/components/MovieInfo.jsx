import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MOVIES } from "./../data/movies";
import * as Path from "../utils/pathNames";

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
          <p className="movie__info__title summary">{movie.description}</p>
          <h1 className="movie__info__title">{movie.name}</h1>
          <progress className="rating__bar" max="5" value={movie.rating} />
          <span className="rating">{`${movie.rating}/5`}</span>
        </div>
        <div className="movie__info__desc">
          <p className="movie__info__desc-text">{movie.long__description}</p>
        </div>
        <Link to={Path.MOVIES}>
          <span className="btn">Voltar</span>
        </Link>
      </div>
    </div>
  );
}

export default MovieInfo;
