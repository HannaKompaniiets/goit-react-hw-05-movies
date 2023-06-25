import axios from 'axios';

const API_KEY = '314821462cf957217439db4fd7a420c5';
const URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovie = async name => {
  const { data } = await axios.get(`${URL}/movie/${name}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCast = async movie_id => {
  const { data } = await axios.get(
    `${URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};
