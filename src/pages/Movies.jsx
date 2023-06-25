import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetch';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({
      query: e.target.searchName.value,
    });
  };

  const movieName = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovieByName = async () => {
      try {
        const data = await fetchMovieByQuery(movieName);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      return { movies, error, isLoading };
    };
    fetchMovieByName(movieName);
  }, [movies, error, isLoading, movieName]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Sorry, error</div>;
  }

  return (
    <div className={css.mainMovies}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2>Find movie:</h2>
        <input className={css.input} type="text" name="searchName" />
        <button className={css.search} type="submit">
          Search
        </button>
      </form>
      <div>{movies?.length > 0 && <MoviesList movies={movies} />}</div>
    </div>
  );
};

export default Movies;
