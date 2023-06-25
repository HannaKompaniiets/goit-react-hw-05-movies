import { React, useEffect, useState } from 'react';
import { fetchMovieCast } from 'services/fetch';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const useFetchMovieCast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

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
    }, []);
    return { cast, error, isLoading };
  };

  const { cast, error, isLoading } = useFetchMovieCast();

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
    <div>
      <h3 className={css.castTitle}>Cast: </h3>
      <ul className={css.castList}>
        {cast.length > 0
          ? cast.map(({ character, name, id }) => (
              <li className={css.castListItem} key={id}>
                <p className={css.castListItem}>
                  {name} as {character}
                </p>
              </li>
            ))
          : 'Sorry, there is no cast for this movie'}
      </ul>
    </div>
  );
};

export default Cast;
