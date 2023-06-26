import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetch';

const useFetchMovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return { cast, error, isLoading };
};

export default useFetchMovieCast;
