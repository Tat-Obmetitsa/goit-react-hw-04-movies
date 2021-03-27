import React, { Component } from 'react';
import MoviesSearchbar from '../../Components/MoviesSearchbar/MoviesSearchbar';
import SearchMovieList from '../../Components/SearchMovieList/SearchMovieList';
import axios from 'axios';
// import s from '../MoviesPage/MoviesPage.module.css';
class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    currentPage: 1,
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.onSubmitSearch(this.props.location.search.slice(7));
    }
  }
  onSubmitSearch = query => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = 'da01c4e54a8d5b285bda18b1e0590cea';
    const { history, match } = this.props;
    history.push(`${match.url}?query=${query}`);
    const path = `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    return axios
      .get(path)
      .then(response => {
        this.setState({ movies: response.data.results});
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => {
        if (this.state.movies.length >= 1) {
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      });
  };

  render() {
    const { movies, error } = this.state;

    return (
      <div>
        <MoviesSearchbar onSubmit={this.onSubmitSearch} />
        {error && <h1>No movie found</h1>}
        <SearchMovieList movies={movies} location={this.handleQuery}/>
      </div>
    );
  }
}
export default MoviesPage;
