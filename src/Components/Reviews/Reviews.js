import React, { Component } from 'react';
import s from '../Reviews/Reviews.module.css';
import { getReviews } from '../../services/apiService.js';

class Reviews extends Component {
  state = {
    content: [],
    error: false,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    getReviews(movieId).then(data => {
      this.setState({ content: data.results });
    }).catch(error => this.setState({ error: true }));
  }
  render() {
    return (
      <>
        <ul className={s.gallery}>
          {this.state.content.length > 0 ? (
            this.state.content.map(descr => {
              return (
                <li className={s.gallery__card} key={descr.id}>
                  <h4>Author:{descr.author}</h4>
                  <p>{descr.content}</p>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
