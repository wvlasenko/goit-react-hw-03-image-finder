import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchbarStl from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitSearchForm = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onSubmitForm(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={SearchbarStl.searchbar}>
        <form
          id="form"
          onSubmit={this.onSubmitSearchForm}
          className={SearchbarStl.form}
        >
          <button type="submit" className={SearchbarStl.button}>
            <span className={SearchbarStl.label}>Search</span>
          </button>
          <input
            className={SearchbarStl.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputValue"
            value={inputValue}
            id="input"
            onChange={this.onInputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
