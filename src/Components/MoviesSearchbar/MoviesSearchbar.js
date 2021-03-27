import React, { Component } from 'react';
import s from '../MoviesSearchbar/MoviesSearchbar.module.css';
class MoviesSearchbar extends Component {
  state = { query: '' };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
    this.setState({ query: ''});
  };
  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default MoviesSearchbar;
