import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FavoriteMovies } from "./../providers/favoriteMovies";

import { MOVIES, NEXT_MOVIES } from "../data/movies";

import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/movies/nextMovies.css";

function Movies() {
  // hook personalizado trazendo o estado do context API
  const { favoriteMovies, setFavoriteMovies } = FavoriteMovies();
  localStorage.setItem("favMovies", JSON.stringify(favoriteMovies));

  // estado para receber a pesquisa do usuário
  const [search, setSearch] = useState("");

  // Pedindo permissão para notificar o usuário
  useEffect(() => {
    Notification.requestPermission()
      .then((status) => status === "granted")
      .then((isAllowed) => {
        if (!isAllowed) {
          return;
        }
        // conteúdo da notificação
        new Notification("Ainda estou em desenvolvimento!", {
          body: "O My Movie List é um site em desenvolvimento, se achar algo que não agrade, por favor, entre em contato.",
        });
      });
  }, []);

  const moviesLenght = MOVIES.length;
  const nextMoviesLenght = NEXT_MOVIES.length;
  const totalMovies = moviesLenght + nextMoviesLenght;

  // filtrando todos os filmes disponíveis
  const movies = MOVIES.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  // funçao para saber se o filme está nos favoritos
  const isFavorite = (id) => favoriteMovies.find((movie) => movie.id === id);

  // recomendar um filme aleatório sempre que a página atualiza
  const randomMovieRecomendation =
    NEXT_MOVIES[Math.floor(Math.random() * NEXT_MOVIES.length)];

  // funçao para adicionar o filme escolhido pelo usuário aos favoritos
  function addFavoriteMovie(id) {
    const movie = MOVIES.find((movie) => movie.id === id);
    setFavoriteMovies((prev) => [...prev, movie]);
    localStorage.setItem("favMovies", JSON.stringify(favoriteMovies));
  }

  // funçao para levar o usuário ao topo da página
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
            onChange={(e) => setSearch(() => e.target.value)}
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
                        {/* condicionando o estilo da estrela caso o filme tenha sido favoritado ou não */}
                        {isFavorite(movie.id) ? (
                          <div className="isfavorite">
                            <span className="favorite true">★</span>
                          </div>
                        ) : (
                          <div className="isfavorite">
                            <span
                              className="favorite false"
                              onClick={() => {
                                addFavoriteMovie(movie.id);
                              }}
                            >
                              ☆
                            </span>
                          </div>
                        )}
                        <Link to={`/movie/${movie.id}`}>
                          <div className="movies__img">
                            <img
                              className="movie__img"
                              src={movie.img}
                              alt={`Capa do filme ${movie.name}`}
                            />
                          </div>
                          <h2 className="movie__title-text">{movie.name}</h2>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <h1 className="movies__title">Não avaliamos esse filme ainda</h1>
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
      <button className="btn" id="go-back__link" onClick={goTopBtn}>
        Voltar ao topo
      </button>
    </main>
  );
}

export default Movies;
