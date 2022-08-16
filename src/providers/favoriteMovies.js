// import { React, createContext, useContext, useState, useEffect } from "react";

// import { MOVIES } from "./../data/movies";

// export const FavoriteMoviesContext = createContext({});

// export const FavoriteMoviesProvider = (props) => {
//   const [favoriteMovies, setFavoriteMovies] = useState([]);
  
//   useEffect(() => {
//     const movie2 = MOVIES.find((movie) => movie.id === 4);

//     setFavoriteMovies(favoriteMovies.push(movie2));
//   }, []);

//   return (
//     <FavoriteMoviesContext.Provider
//       value={{ favoriteMovies, setFavoriteMovies }}
//     >
//       {props.children}
//     </FavoriteMoviesContext.Provider>
//   );
// };

// export const FavoriteMovies = () => useContext(FavoriteMoviesContext);
