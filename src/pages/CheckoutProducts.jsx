import React, { Component } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import ProductCheckoutDetails from '../components/ProductCheckoutDetails';

export default class CheckoutProducts extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <h1>Produtos do Carrinho de Compras</h1>
        <ul>
          { cartItems.map(({ title, id }) => (
            <ProductCheckoutDetails
              key={ id }
              id={ id }
              title={ title }
            />
          ))}
        </ul>
        <CheckoutForm />
      </div>
    );
  }
}
