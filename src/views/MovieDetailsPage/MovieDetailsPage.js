import React, { Component, lazy } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { getDetails } from '../../services/apiService.js';
import routes from '../../services/routes';
import s from '../MovieDetailsPage/MovieDetails.module.css';
import defaultImage from '../MovieDetailsPage/no-cover.png';

const Cast = lazy(() => import('../../Components/Cast/Cast'));
const Reviews = lazy(() => import('../../Components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    id: null,
    genres: [],
    release_date: null,
    overview: null,
    vote_average: 0,
    poster_path: null,
    title: null,
    original_title: null,
    name: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getDetails(movieId).then(data => {
      this.setState({ ...data });
    }).catch(error => this.setState({ error: true }));;
    
  }

  handleGoback = () => {
    const { location, history } = this.props;
    console.log(location);
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      title,
      original_title,
      overview,
      vote_average,
      genres,
      name,
      release_date,
    } = this.state;
    const posterURL = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImage;
    return (
      <div>
        <button
          className={s.back_btn}
          type="button"
          onClick={this.handleGoback}
        >
          Go back
        </button>
        <div className={s.card__box}>
          <div className={s.card__img}>
            <img  src={posterURL} alt={title}></img>
          </div>
          <div className={s.card__section__content}>
            <h1>
              {name || original_title || title} ({parseInt(release_date)})
            </h1>
            <span>Rating: {vote_average} </span>
            <div>
              <h3>Genres</h3>
              <ul>
                {genres &&
                  genres.length > 0 &&
                  genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </ul>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
        <h2 className={s.list__title}>Additional information</h2>
        <ul key={this.state.id}>
          <li className={s.navi_btn}>
            <NavLink
              to={`${this.props.match.url}/cast`}
              className="NavLink"
              activeClassName="NavLink__active"
            >
              Cast
            </NavLink>
          </li>
          <li className={s.navi_btn}>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLink__active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
export default MovieDetailsPage;
