import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { React, useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/fetch';
import css from './Home.module.css';

const Home = () => {
  const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const data = await getTrendingMovies();
          setMovies(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);
    return { movies, error, isLoading };
  };

  const { movies, error, isLoading } = useFetchMovies();

  return (
    <div className={css.main}>
      <h2 className={css.homeTitle}>Trending today:</h2>
      {error && <div>Something went wrong ...</div>}
      {isLoading && (
        <div>
          <Loader />{' '}
        </div>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
