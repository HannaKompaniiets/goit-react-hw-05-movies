import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { React, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import useFetchMovieDetailes from 'hooks/useFetchMovieDetailes';

const MoviesDetails = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const { movie, error, isLoading } = useFetchMovieDetailes();

  const { original_title, title, name, overview, poster_path, genres } = movie;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>Sorry, error</div>}
      <div className={css.mainMovieDetails}>
        <Link className={css.backLink} to={backLink.current}>
          Go BACK
        </Link>
        <div className={css.movieDescription}>
          <img
            style={{ width: 300 }}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : 'https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0'
            }
            alt={title || name || original_title}
          />
          <div className={css.movieDescriptionText}>
            <h2 className={css.movieTitle}>
              {title || name || original_title}
            </h2>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={css.genres}>
              {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={css.adInfo}>
        <h3>Additional information</h3>
        <ul className={css.linksList}>
          <Link className={css.links} to="cast">
            <div>Cast</div>
          </Link>
          <Link className={css.links} to={'reviews'}>
            <div>Review</div>
          </Link>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
