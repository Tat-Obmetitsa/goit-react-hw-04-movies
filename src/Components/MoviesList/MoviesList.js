import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../MoviesList/MoviesList.module.css';
import PropTypes from 'prop-types';
const MoviesList = ({ data }) => {
  return (
    <section>
      <h1 className={s.list__title}>Trending Movies</h1>
      <ul className={s.gallery}>
        {data.map(movie => (
          <li  className={s.gallery__card} key={movie.id}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
              }}
            >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt= ""
            ></img>
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
