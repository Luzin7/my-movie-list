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
      <input
        type="url"
        name="profile__pic"
        id="profile__pic"
        placeholder="Url da imagem de perfil"
        onInput={(e) => {
          setPfp(() => e.target.value);
          localStorage.setItem("pfp", JSON.stringify(e.target.value));
        }}
      />
      <img className="pfp" src={pfp} alt="user profile" />
      <h1 className="movies__title">{`Filmes favoritos de ${USER_NAME()}`}</h1>
      {favoriteMovies.map((movie) => (
        <li key={movie.id} className="movie__card watched">
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
    </div>
  );
}

export default Profile;
