import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    invalidFields: false,
    isRedirect: false,
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
    const newValidation = this.handleValidation();
    console.log(newValidation);
    this.setState({ validation: newValidation }, () => {
      const { validation } = this.state;
      if (validation) {
        localStorage.setItem('cartItems', JSON.stringify([]));
        this.setState({ isRedirect: true });
      } else {
        this.setState({ invalidFields: true });
      }
    });
  };

  render() {
    const { cartItems,
      fullName,
      email,
      cpf,
      phone,
      cep,
      address,
      invalidFields,
      isRedirect,
    } = this.state;
    if (isRedirect) { return <Redirect to="/" />; }
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
          invalidFields={ invalidFields }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}
