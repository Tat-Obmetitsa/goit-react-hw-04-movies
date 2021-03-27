import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';
const Navigation = () => {
  return (
    <header className={s.pageHeader}>
      <ul className={s.headerNavigation}>
        <li className={s.navi_btn}>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.NavLink__active}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navi_btn}>
          <NavLink
            exact
            to="/movies"
            className={s.NavLink}
            activeClassName={s.NavLink__active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
