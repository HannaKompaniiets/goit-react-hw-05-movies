import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

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

MoviesList.propTypers = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
