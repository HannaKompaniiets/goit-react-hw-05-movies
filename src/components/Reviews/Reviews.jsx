import { React, useEffect, useState } from 'react';
import { fetchMovieReviews } from 'services/fetch';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const useFetchMovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      const fetchReviews = async () => {
        try {
          const data = await fetchMovieReviews(movieId);
          setReviews(data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReviews();
    }, []);
    return { reviews, error, isLoading };
  };

  const { reviews, error, isLoading } = useFetchMovieReviews();

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
      <h3 className={css.revTitle}>Reviews: </h3>
      <ul className={css.revList}>
        {reviews.length > 0
          ? reviews.map(({ author, content, id }) => (
              <li className={css.revListItem} key={id}>
                <h3>{author}</h3>
                <p className={css.revListItem}>{content}</p>
              </li>
            ))
          : "Sorry, we don't have any review for this movie"}
      </ul>
    </div>
  );
};

export default Reviews;
