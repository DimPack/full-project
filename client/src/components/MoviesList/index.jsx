import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/moviesSlice";
// import mapMovies from "./mapMovies/index";
const MoviesList = () => {
  const { movies, error, isPending } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const mapMovies = (movie) => (
    <li key={movie.id}>
      <b>Movie:</b> {movie.title}
      <p><b>Description:</b> {movie.description} </p>
      <p><b>Data release:</b> {movie.releaseDate}</p>
      <p><b>Duration:</b> {movie.durationMovie}</p>
      <p><b>Country: </b>{movie.country}</p>
      <p><b>Language: </b>{movie.language}</p>
      <hr></hr>
    </li>
  );
  useEffect(() => {
    dispatch(getMovies({ page: 1, amount: 3 }));
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {!error && !isPending && movies.length === 0 ? (
        <p>movies list empty</p>
      ) : (
        <ol>{movies.map(mapMovies)}</ol>
      )}
    </>
  );
};

export default MoviesList;
