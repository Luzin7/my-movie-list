import { React, useState} from "react";
import { Link } from "react-router-dom";

import { FavoriteMovies } from "../providers/favoriteMovies";

import { MOVIES, NEXT_MOVIES } from "../data/movies";

import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/movies/nextMovies.css";

function Movies() {
  const { favoriteMovies } = FavoriteMovies();

  console.log(favoriteMovies);
  const [search, setSearch] = useState("");
  const moviesLenght = MOVIES.length;
  const nextMoviesLenght = NEXT_MOVIES.length;
  const totalMovies = moviesLenght + nextMoviesLenght;

  const movies = MOVIES.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  var randomMovieRecomendation =
    NEXT_MOVIES[Math.floor(Math.random() * NEXT_MOVIES.length)];

  function goTopBtn() {
    window.scrollTo(0, 0);
  }

  return (
    <main className="movies">
      <section className="search__movies">
        <div className="search">
          <label className="search__label">Pesquise um filme</label>
          <input
            className="search__input"
            type="search"
            placeholder="Filme"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
      <section className="movies__watched">
        {movies.length > 0 ? (
          <>
            <h1 className="movies__title">Filmes avaliados</h1>
            <span id="total-watched">
              {moviesLenght}/{totalMovies}
            </span>
            <div className="movies__content">
              <ul className="movies__cards">
                <div className="slider">
                  <div className="slides">
                    {movies.map((movie) => (
                      <li key={movie.id} className="movie__card watched">
                        <Link to={`movie/${movie.id}`}>
                          <h2 className="movie__title">{movie.name}</h2>
                          <div className="movies__img">
                            <img
                              className="movie__img"
                              src={movie.img}
                              alt={`Capa do filme ${movie.name}`}
                            />
                          </div>
                          <p className="movie__desc-text">
                            {movie.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <>
            <h1 className="movies__title">Não avaliamos esse filme ainda</h1>
          </>
        )}
      </section>
      <section className="next__movies">
        <h1 className="next movies__title-sec">Veja também</h1>
        <div className="movies__content">
          <ul className="movies__cards">
            <li
              key={randomMovieRecomendation.id}
              className="movie__card unwatched"
            >
              <h2 className="movie__title">{randomMovieRecomendation.name}</h2>
              <div className="movies__img">
                <img
                  className="movie__img"
                  src={randomMovieRecomendation.media}
                  alt={`Capa do filme ${randomMovieRecomendation.name}`}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <span id="go-back__link" onClick={goTopBtn}>
        Voltar ao topo
      </span>
    </main>
  );
}

export default Movies;
