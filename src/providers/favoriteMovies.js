import { React, createContext, useContext, useState } from "react";

export const FavoriteMoviesContext = createContext({});

export const FavoriteMoviesProvider = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    localStorage.favMovie ? JSON.parse(localStorage.getItem("favMovie")) : []
  );
  console.log(favoriteMovies);

  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriteMovies, setFavoriteMovies }}
    >
      {props.children}
    </FavoriteMoviesContext.Provider>
  );
};

export const FavoriteMovies = () => useContext(FavoriteMoviesContext);
