import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProducsCard extends Component {
  render() {
    const { title, price, thumbnail, amount } = this.props;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
      </div>
    );
  }
}

CartProducsCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  amount: PropTypes.number,
}.isRequired;
