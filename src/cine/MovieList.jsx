import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = getAllMovies();
  return (
    <div className="items-center p-4">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
