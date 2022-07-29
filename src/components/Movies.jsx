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
        <h2 className="movies__title">Filmes avaliados</h2>
        <div className="movies__content">
          <ul className="movies__cards">
            <div className="slider">
              <div className="slides">
                {MOVIES.map((movie) => (
                  <li key={movie.id} className="movie__card watched">
                    <Link to={`/movies/movie/${movie.id}`}>
                      <h3 className="movie__title">{movie.name}</h3>
                      <div className="movies__img">
                        <img
                          className="movie__img"
                          src={movie.img}
                          alt={`Capa do filme ${movie.name}`}
                        />
                      </div>
                      <p className="movie__desc-text">{movie.description}</p>
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </section>
      <section className="next__movies">
        <h2 className="next movies__title-sec">Próximos filmes</h2>
        <div className="movies__content">
          <ul className="movies__cards">
            {NEXT_MOVIES.map((movie) => (
              <li key={movie.id} className="movie__card unwatched">
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
      {/* <span> Voltar ao topo</span> */}
    </main>
  );
}

export default Movies;
