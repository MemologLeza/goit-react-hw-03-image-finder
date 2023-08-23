import PropTypes from 'prop-types';

import { Component } from 'react';
import styled from './Searchbar.module.css';
class Searchbar extends Component {
  state = {
    value: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
    this.setState({ value: '' });
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };
  render() {
    return (
      <header className={styled.searchbar}>
        <form
          className={styled.SearchForm}
          role="search"
          onSubmit={this.handleSubmit}
        >
          <button type="submit" className={styled.SearchFormButton}>
            <span className={styled.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.value}
            className={styled.input}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Searchbar;
