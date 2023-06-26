import { useRef } from 'react';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';
import PropTypes from 'prop-types';

const BackLink = ({ location }) => {
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <Link className={css.backLink} to={backLink.current}>
      Go BACK
    </Link>
  );
};

export default BackLink;

BackLink.propTypers = {
  location: PropTypes.string.isRequired,
};
