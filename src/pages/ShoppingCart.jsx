import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProducsCard from '../components/CartProducsCard';

export default class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <section>
        { cartProducts.length === 0
          ? (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
              {' '}
            </h1>)
          : cartProducts.map((e) => (
            <CartProducsCard
              key={ e.id }
              title={ e.title }
              price={ e.price }
              thumbnail={ e.thumbnail }
            />))}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.string,
}.isREquired;
