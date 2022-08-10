import React from "react";

import { MOVIES, NEXT_MOVIES } from "../data/admMovies";

import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/movies/nextMovies.css";

function AdminMovies() {
  window.history.pushState({}, "", "/nossos-filmes-💜");

  const moviesLenght = MOVIES.length;
  const nextMoviesLenght = NEXT_MOVIES.length;
  const totalMovies = moviesLenght + nextMoviesLenght;

  function goTopBtn() {
    window.scrollTo(0, 0);
  }

  return (
    <main className="movies">
      <section className="movies__watched">
        <h1 className="movies__title">Filmes vistos</h1>
        <span id="total-watched">
          {moviesLenght}/{totalMovies}
        </span>
        <div className="movies__content">
          <ul className="movies__cards">
            <div className="slider">
              <div className="slides">
                {MOVIES.map((movie) => (
                  <li key={movie.id} className="movie__card watched">
                    <h2 className="movie__title">{movie.name}</h2>
                    <div className="movies__img">
                      <img
                        className="movie__img"
                        src={movie.img}
                        alt={`Capa do filme ${movie.name}`}
                      />
                    </div>
                    <p className="movie__desc-text">{movie.rating}/5</p>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </section>
      <section className="next__movies">
        <h1 className="next movies__title-sec">Próximos filmes</h1>
        <div className="movies__content">
          <ul className="movies__cards">
            <div className="slider">
              <div className="slides">
                {NEXT_MOVIES.map((movie) => (
                  <li key={movie.id} className="movie__card unwatched">
                    <h2 className="movie__title">{movie.name}</h2>
                    <div className="movies__img">
                      <img
                        className="movie__img"
                        src={movie.media}
                        alt={`Capa do filme ${movie.name}`}
                      />
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </section>
      <span id="go-back__link" onClick={goTopBtn}>
        Voltar ao topo
      </span>
    </main>
  );
}

export default AdminMovies;
