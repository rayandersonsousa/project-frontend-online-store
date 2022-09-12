import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProducsCard extends Component {
  state = {
    amount: 1,
  };

  itemsIncrease = () => {
    const { amount } = this.state;
    this.setState({ amount: amount + 1 });
  };

  itemsDecrease = () => {
    const { amount } = this.state;
    if (amount >= 2) {
      this.setState({ amount: amount - 1 });
    }
  };

  render() {
    const { amount } = this.state;
    const { title, price, thumbnail, removeItem, id } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="remove-product"
          onClick={ () => removeItem(id) }
        >
          x
        </button>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <div>
          <button
            type="submit"
            data-testid="product-increase-quantity"
            onClick={ this.itemsIncrease }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ amount }</p>
          <button
            type="submit"
            data-testid="product-decrease-quantity"
            onClick={ this.itemsDecrease }
          >
            -
          </button>
        </div>
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
