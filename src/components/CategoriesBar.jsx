import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoriesBar extends Component {
  // state = {
  //   categories: [],
  // };

  // componentDidMount() {
  //   const { getAllCategories } = this.props;
  //   getAllCategories();
  // }

  // getAllCategories = async () => {
  //   const categorieList = await getCategories();
  //   this.setState({
  //     categories: categorieList,
  //   });
  // };

  render() {
    const { name, handleRadioClick } = this.props;

    return (
      <li>
        <label htmlFor={ name } data-testid="category">
          <input
            value={ name }
            type="radio"
            name="categories"
            id={ name }
            onClick={ handleRadioClick }
          />
          {' '}
          { name }
        </label>
      </li>
    );
  }
}

CategoriesBar.propTypes = {
  name: PropTypes.string,
}.isRequired;
