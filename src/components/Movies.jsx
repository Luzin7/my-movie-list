import React from "react";
import { Link } from "react-router-dom";

import { MOVIES, NEXT_MOVIES } from "../data/movies";

import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/movies/nextMovies.css";

function Movies() {
  return (
    <main className="movies">
      {/* <div className="search">
        <input type="search" />
      </div> */}
      <section className="movies__watched">
        <h1 className="movies__title">
          Olá, Usuário! Veja minha lista (100% parcial) de filmes!
        </h1>
        <h2 className="movies__title-sec">Filmes avaliados</h2>
        <div className="movies__content">
          <ul className="movies__cards">
            {MOVIES.map((movie) => (
              <Link key={movie.id} to={`/movies/movie/${movie.id}`}>
                <li className="movie__card">
                  <h3 className="movie__title">{movie.name}</h3>
                  <div className="movies__img">
                    <img
                      className="movie__img"
                      src={movie.img}
                      alt={`Capa do filme ${movie.name}`}
                    />
                  </div>
                  <p className="movie__desc-text">
                    Resumo: {movie.description}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
      <section className="next__movies">
        <h2 className="movies__title-sec">
          Próximos títulos previstos a serem avaliados
        </h2>
        <div className="movies__content">
          <ul className="movies__cards">
            {NEXT_MOVIES.map((movie) => (
              <li key={movie.id} className="movie__card">
                <h3 className="movie__title">{movie.name}</h3>
                <div className="movies__img">
                  <img
                    className="movie__img"
                    src={movie.media}
                    alt={`Capa do filme ${movie.name}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Movies;
