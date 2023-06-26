import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Home.module.css';
import useFetchMovies from 'hooks/useFetchMovies';

const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();

  return (
    <div className={css.main}>
      <h2 className={css.homeTitle}>Trending today:</h2>
      {error && <div>Something went wrong ...</div>}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
