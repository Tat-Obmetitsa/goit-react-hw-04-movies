import React, { Component } from 'react';
import s from '../Cast/Cast.module.css';
import { getCast } from '../../services/apiService.js';
import defaultImg from '../Cast/no-photo-actor.png'

class Cast extends Component {
  state = {
    cast: [],
    error: false,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    getCast(movieId).then(actor => {
      this.setState({ cast: actor.cast });
    }).catch(error => this.setState({ error: true }));;
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={s.gallery}>
          {cast.map(actor => {
            return (
              <li className={s.gallery__card} key={actor.id}>
                <img
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImg}
                  alt={`${actor.name}`}
                />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;