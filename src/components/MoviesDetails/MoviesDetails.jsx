import BackLink from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';
import { React, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/fetch';
import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const useFetchMovieDetailes = () => {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

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
      fetchDataMovie();
    }, []);
    return { movie, error, isLoading };
  };

  const { movie, error, isLoading } = useFetchMovieDetailes();

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

  const { original_title, overview, poster_path, genres } = movie;

  return (
    <div className={css.mainMovieDetails}>
      <BackLink location={location} />
      <div className={css.movieDescription}>
        <img
          src={poster_path ?`https://image.tmdb.org/t/p/w300/${poster_path}`: '{ original_title}'}
          alt={original_title}
        />
        <div className={css.movieDescriptionText}>
          <h2 className={css.movieTitle}>{original_title}</h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.genres}>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul className={css.linksList}>
        <Link className={css.links} to="cast">
          <div>Cast</div>
        </Link>
        <Link className={css.links} to={'reviews'}>
          <div>Review</div>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
