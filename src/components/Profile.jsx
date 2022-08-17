import { React, useState } from "react";
import { USER_NAME } from "./../utils/getAuthInfos";
import { FavoriteMovies } from "./../providers/favoriteMovies";
import { Link } from "react-router-dom";
// TODO: Ajustar css
import "../styles/movies/movies.css";
import "../styles/movies/moviesWatched.css";
import "../styles/profile/profile.css";
function Profile() {
  const { favoriteMovies } = FavoriteMovies();

  const [pfp, setPfp] = useState(
    localStorage.getItem("pfp") ? JSON.parse(localStorage.getItem("pfp")) : ""
  );

  return (
    <div className="profile__info">
      <div className="user__info">
        <img className="pfp" src={pfp} alt="user profile" />
        <input
          type="url"
          name="profile__pic"
          id="profile__url__input"
          placeholder="Cole aqui a url da imagem de perfil que você quer"
          onInput={(e) => {
            setPfp(() => e.target.value);
            localStorage.setItem("pfp", JSON.stringify(e.target.value));
          }}
        />
      </div>
      <section className="favorite__movies">
        <h1 className="movies__title">{`Favoritos de ${USER_NAME()}`}</h1>
        <div className="movies__content">
          <ul className="movies__cards">
            {favoriteMovies.map((movie) => (
              <li key={movie.id} className="movie__card favorite">
                <h2 className="movie__title">{movie.name}</h2>
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
      </section>
    </div>
  );
}

export default Profile;
