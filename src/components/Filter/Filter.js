import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './filter.module.css';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  handleFilterChange = event => {
    const { value } = event.target;
    const { onFilterChange } = this.props;
    onFilterChange(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <div>
        <label className={css.filterLabel} htmlFor="filterInput">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          id="filterInput"
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default Filter;