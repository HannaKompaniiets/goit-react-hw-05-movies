import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 &&
        movies.map(({ id, original_title }) => (
          <li className={css.moviesList} key={id}>
            <Link
              className={css.moviesItem}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {original_title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesList;
