import React, { Component } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import ProductCheckoutDetails from '../components/ProductCheckoutDetails';

export default class CheckoutProducts extends Component {
  state = {
    cartItems: [],
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
    validation: false,
  };

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleValidation = () => {
    const { fullName, email, cpf, phone, cep, address, payment } = this.state;
    return fullName !== ''
      && email !== ''
      && cpf !== ''
      && phone !== ''
      && cep !== ''
      && address !== ''
      && payment !== '';
  };

  handleClick = () => {
    const validation = this.handleValidation();
    console.log(validation);
    this.setState({ validation });
  };

  render() {
    const { cartItems,
      fullName,
      email,
      cpf,
      phone,
      cep,
      address,
      validation,
    } = this.state;
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
        <CheckoutForm
          fullName={ fullName }
          cpf={ cpf }
          email={ email }
          phone={ phone }
          cep={ cep }
          address={ address }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}
