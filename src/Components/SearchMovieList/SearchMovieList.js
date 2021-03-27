import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from '../SearchMovieList/SearchMovie.module.css';
const SearchMovieList = ({ movies, location }) => {
  return (
    <ul className={s.gallery}>
      {movies.map(({ id, poster_path }) => (
        <li className={s.gallery__card} key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            ></img>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

SearchMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
};
export default withRouter (SearchMovieList);
