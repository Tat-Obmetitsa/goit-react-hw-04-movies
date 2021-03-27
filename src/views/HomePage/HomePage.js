import React, { Component } from 'react';
import MoviesList from '../../Components/MoviesList/MoviesList';
import { getRating } from '../../services/apiService';

// import s from '../HomePage/HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
    error: false,
  };
  componentDidMount() {
    getRating()
      .then(data => {
        this.setState(this.setState({ movies: data.results }));
      })
      .catch(error => this.setState({ error: true }));
  }
  render() {
    const { movies, error } = this.state;
    return (
      <div>
        {error && <h1>No movies found</h1>}
        <MoviesList data={movies} />
      </div>
    );
  }
}
export default HomePage;
