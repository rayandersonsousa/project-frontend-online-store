import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, dataTestId, name } = this.props;
    return (
      <div
        data-testid={ dataTestId }
        id={ name }
      >
        <h5>{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        {/* <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ handleCartButton }
        >
          Adicionar ao carrinho
        </button> */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  handleCartButton: PropTypes.func,
  name: PropTypes.string,
}.isRequired;
