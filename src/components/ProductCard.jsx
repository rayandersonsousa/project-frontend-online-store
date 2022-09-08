import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, dataTestId } = this.props;
    return (
      <div data-testid={ dataTestId }>
        <h5>{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;
