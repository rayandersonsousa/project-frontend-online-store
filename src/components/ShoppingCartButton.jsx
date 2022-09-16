import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShoppingCartButton extends Component {
  render() {
    return (
      <nav>
        <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
        <span data-testid="shopping-cart-size">10</span>
      </nav>
    );
  }
}
