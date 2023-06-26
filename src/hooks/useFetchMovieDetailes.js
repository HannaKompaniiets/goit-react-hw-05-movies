import { useState, useEffect } from 'react';
import { fetchMovie } from 'services/fetch';
import { useParams } from 'react-router-dom';

const useFetchMovieDetailes = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchDataMovie = async () => {
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataMovie(movieId);
  }, [movieId]);

  return { movie, error, isLoading };
};

export default useFetchMovieDetailes;
