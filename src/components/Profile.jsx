import { React, useState } from "react";
import { USER_NAME } from "./../utils/getAuthInfos";
import { FavoriteMovies } from "./../providers/favoriteMovies";
import { Link } from "react-router-dom";
import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/profile/profile.css";
function Profile() {
  const defaultPfp =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png";

  const { favoriteMovies, setFavoriteMovies } = FavoriteMovies();

  const [pfp, setPfp] = useState(
    localStorage.getItem("pfp")
      ? JSON.parse(localStorage.getItem("pfp"))
      : defaultPfp
  );

  const removeFavorite = (id) => {
    let movie = favoriteMovies.find((movie) => movie.id === id);

    for (var i = favoriteMovies.length - 1; i >= 0; i--) {
      if (favoriteMovies[i] === movie) {
        favoriteMovies.splice(i, 1);
        setFavoriteMovies(favoriteMovies);
        localStorage.setItem("favMovies", JSON.stringify(favoriteMovies));
        window.location.reload();
      }
    }
  };

  return (
    <div className="profile__info">
      <div className="user__info">
        <img className="pfp" src={pfp} alt="user profile" />
        <input
          type="url"
          name="profile__pic"
          id="profile__url__input"
          placeholder="Adicione um link de uma imagem aqui"
          onChange={(e) => {
            setPfp(() => e.target.value);
            localStorage.setItem("pfp", JSON.stringify(e.target.value));
          }}
        />
      </div>
      <section className="favorite__movies">
        {/* condicionando texto de favoritos */}
        {favoriteMovies.length > 0 ? (
          <>
            {/* condicionando texto para saber se possui apenar uma avaliação favorita ou mais */}
            {favoriteMovies.length === 1 ? (
              <h1 className="movies__title">{`Filme favorito de ${USER_NAME()}!`}</h1>
            ) : (
              <h1 className="movies__title">{`Favoritos de ${USER_NAME()}`}</h1>
            )}
            <div className="movies__content">
              <ul className="movies__cards">
                {favoriteMovies.map((movie) => (
                  <li key={movie.id} className="movie__card favorite">
                    <div className="movie__title">
                      <h2 className="movie__title-text">{movie.name}</h2>
                      <div className="isfavorite">
                        <span
                          className="favorite true"
                          // alterando o ícone quando o mouse passar pelo texto
                          onMouseOver={(e) => (e.target.textContent = "☆")}
                          onMouseOut={(e) => (e.target.textContent = "★")}
                          onClick={() => {
                            removeFavorite(movie.id);
                          }}
                        >
                          ★
                        </span>
                      </div>
                    </div>
                    <Link to={`/movie/${movie.id}`}>
                      <div className="movies__img">
                        <img
                          className="movie__img"
                          src={movie.img}
                          alt={`Capa do filme ${movie.name}`}
                        />
                      </div>
                    </Link>
                    <p className="movie__desc-text">{movie.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* texto mostrado caso não haja avaliações favoritadas */}
            <h1 className="movies__title">Ainda não achou seu favorito?</h1>
            <p className="movies__subtitle">
              Tenho certeza que o próximo que vamos avaliar vai estar do seu
              agrado! &#128513;
            </p>
          </>
        )}
      </section>
    </div>
  );
}

export default Profile;
