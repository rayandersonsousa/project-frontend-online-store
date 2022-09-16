import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends Component {
  render() {
    const { cartProductsAmount } = this.props;
    return (
      <nav>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        <span data-testid="shopping-cart-size">{ cartProductsAmount }</span>
      </nav>
    );
  }
}

ShoppingCartButton.propTypes = {
  cartProductsAmount: PropTypes.number,
}.isRequired;
