import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProducsCard from '../components/CartProducsCard';

export default class ShoppingCart extends Component {
  render() {
    const { removeItem, storage } = this.props;
    return (
      <section>
        { storage.length === 0
          ? (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
              {' '}
            </h1>)
          : storage.map((e) => (
            <CartProducsCard
              key={ e.id }
              id={ e.id }
              title={ e.title }
              price={ e.price }
              thumbnail={ e.thumbnail }
              removeItem={ removeItem }
            />))}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  storage: PropTypes.array,
}.isREquired;
