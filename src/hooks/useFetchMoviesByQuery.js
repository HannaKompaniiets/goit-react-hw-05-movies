import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetch';

const useFetchMoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) return;
    serchMovies(movieName);
  }, [searchParams, movieName]);

  const serchMovies = async movieName => {
    setIsLoading(true);
    try {
      const data = await fetchMovieByQuery(movieName);
      setMovies(data.results);
    } catch (error) {
      setError(error.massage);
    } finally {
      setIsLoading(false);
    }
  };
  return { movies, error, isLoading, setSearchParams };
};

export default useFetchMoviesByQuery;
