import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import useFetchMovieReviews from 'hooks/useFetchMovieReviews';

const Reviews = () => {
  const { reviews, error, isLoading } = useFetchMovieReviews();

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>Sorry, error</div>}
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
    </div>
  );
};

export default Reviews;
