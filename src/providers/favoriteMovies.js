import { React, createContext, useContext, useState, useEffect } from "react";

export const FavoriteMoviesContext = createContext({});

export const FavoriteMoviesProvider = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState({
    name: undefined,
  });

  useEffect(() => {
    const userName = localStorage.getItem("userName");

    if (userName) {
      setFavoriteMovies({ name: JSON.parse(userName) });
    } else {
      setFavoriteMovies({ name: "" });
    }
  }, []);

  return (
    <FavoriteMoviesContext.Provider
      value={{ favoriteMovies, setFavoriteMovies }}
    >
      {props.children}
    </FavoriteMoviesContext.Provider>
  );
};

export const FavoriteMovies = () => useContext(FavoriteMoviesContext);
