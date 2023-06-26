import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
import useFetchMoviesByQuery from 'hooks/useFetchMoviesByQuery';

const Movies = () => {
  const { movies, error, isLoading, setSearchParams } = useFetchMoviesByQuery();

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>Sorry, error</div>}

      <div className={css.mainMovies}>
        <form className={css.form} onSubmit={setSearchParams}>
          <h2>Find movie:</h2>
          <input className={css.input} type="text" name="query" />
          <button className={css.search} type="submit">
            Search
          </button>
        </form>
        <div>{movies?.length > 0 && <MoviesList movies={movies} />}</div>
      </div>
    </div>
  );
};

export default Movies;
