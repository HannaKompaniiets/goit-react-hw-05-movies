import { Route, Routes } from 'react-router-dom';
import Layout from './Header/Layout';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Home from 'pages/Home';
import MoviesDetails from './MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
