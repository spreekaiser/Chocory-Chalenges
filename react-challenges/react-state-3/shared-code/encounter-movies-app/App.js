import { useState } from "react";
import { uid } from "uid";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  const handleAddMovie = (movie) => {
    console.log("user has added a movie, time to add it to the array!");
    movie.id = uid();
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (id) => {
    console.log("time to delete this movie: id", id);
    const newMovies = movies.filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };

  const handleToggleLiked = (id) => {
    console.log("time to toggle the liked of movie ", id);
    // useless, but maps a new version of the old array:
    // const newMovies = movies.map((movie) => movie);
    const newMovies = movies.map((movie) => {
      // const newMovie = { ...movie };
      // if (newMovie.id === id) {
      //   newMovie.isLiked = !movie.isLiked;
      // }
      const newMovie =
        movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie;
      return newMovie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie
              id={movie.id}
              name={movie.name}
              isLiked={movie.isLiked}
              onDeleteMovie={handleDeleteMovie}
              onToggleLiked={handleToggleLiked}
            />
          </li>
        ))}
      </ul>
      <Form onAddMovie={handleAddMovie} />
    </div>
  );
}
