import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../MoviesList/MoviesList.module.css';
import PropTypes from 'prop-types';
const MoviesList = ({ data }) => {
  return (
    <section>
      <h1 className={s.list__title}>Trending Movies</h1>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
              }}
            >
              {movie.original_name ||
                movie.name ||
                movie.original_title ||
                movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      name: PropTypes.string,
      original_title: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};
export default MoviesList;
