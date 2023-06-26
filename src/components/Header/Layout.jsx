import { React, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Layout.module.css';

const Layout = () => {
  const StyledLink = styled(NavLink)`
    color: white;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <ul className={css.header}>
        <li>
          <StyledLink to="/" className={css.page}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/movies" className={css.page}>
            Movies
          </StyledLink>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
