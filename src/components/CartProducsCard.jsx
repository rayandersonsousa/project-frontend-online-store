import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProducsCard extends Component {
  // itemsIncrease = () => {
  //   const { id, amount, quantity } = this.props;
  //   const savedList = JSON.parse(localStorage.getItem('cartItems'));
  //   const savedIndex = savedList.findIndex((e) => e.id === id);
  //   if (amount < quantity) {
  //     savedList[savedIndex].cartAmout += 1;
  //     localStorage.setItem('cartItems', JSON.stringify(savedList));
  //     window.location.reload(false);
  //   }
  // };

  // itemsDecrease = () => {
  //   // const { id } = this.props;
  //   const { amount } = this.props;
  //   // if (amount >= 2) {
  //   //   this.setState({ amount: amount - 1 });
  //   //   // localStorage.setItem(id, amount - 1);
  //   // }
  // };

  render() {
    const {
      title,
      price,
      thumbnail,
      removeItem,
      id,
      amount,
      itemsIncrease,
      itemsDecrease,
    } = this.props;

    return (
      <div>
        <button
          type="button"
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
            onClick={ () => itemsIncrease(id) }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ amount }</p>
          <button
            type="submit"
            data-testid="product-decrease-quantity"
            onClick={ () => itemsDecrease(id) }
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
