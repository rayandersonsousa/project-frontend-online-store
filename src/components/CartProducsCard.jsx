import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProducsCard extends Component {
  state = {
    amount: 1,
  };

  componentDidMount() {
    const { id } = this.props;
    this.setState({ amount: Number(localStorage.getItem(id)) || 1 });
  }

  itemsIncrease = () => {
    const { id } = this.props;
    const { amount } = this.state;
    this.setState({ amount: amount + 1 });
    localStorage.setItem(id, amount + 1);
  };

  itemsDecrease = () => {
    const { id } = this.props;
    const { amount } = this.state;
    if (amount >= 2) {
      this.setState({ amount: amount - 1 });
      localStorage.setItem(id, amount - 1);
    }
  };

  render() {
    const { amount } = this.state;
    const { title, price, thumbnail, removeItem, id } = this.props;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="remove-product"
          onClick={ () => removeItem(id) }
        >
          x
        </button>
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
