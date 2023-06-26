import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';
import useFetchMovieCast from 'hooks/useFetchMovieCast';

const Cast = () => {
  const { cast, error, isLoading } = useFetchMovieCast();

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>Sorry, error</div>}
      <div>
        <h3 className={css.castTitle}>Cast: </h3>
        <ul className={css.castList}>
          {cast.length > 0
            ? cast.map(({ character, name, id, profile_path }) => (
                <li className={css.castListItem} key={id}>
                  <img
                    style={{ width: 200 }}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                        : 'https://th.bing.com/th/id/R.1a12b4c6a85c3d3d0356b8b0982e3038?rik=%2bN8VUyxPhKxwsA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2flego%2fimages%2fa%2fac%2fNo-Image-Basic.png%2frevision%2flatest%3fcb%3d20130819001030&ehk=4LPMn2YupbS2wKmWBvjF5%2bFz434RztzcY3x7Pg99GBI%3d&risl=&pid=ImgRaw&r=0'
                    }
                    alt={name}
                  />
                  <p className={css.castListItem}>
                    {name} as {character}
                  </p>
                </li>
              ))
            : 'Sorry, there is no cast for this movie'}
        </ul>
      </div>
    </div>
  );
};

export default Cast;
