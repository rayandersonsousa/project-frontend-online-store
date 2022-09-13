import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CheckoutForm extends Component {
  render() {
    const {
      handleChange,
      handleClick,
      fullName,
      email,
      cpf,
      phone,
      cep,
      address,
    } = this.props;
    return (
      <form>
        <label htmlFor="checkout-fullname">
          Nome completo:
          {' '}
          <input
            type="text"
            name="fullName"
            value={ fullName }
            onChange={ handleChange }
            id="checkout-fullname"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="checkout-email">
          E-mail:
          {' '}
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ handleChange }
            id="checkout-email"
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="checkout-cpf">
          CPF:
          {' '}
          <input
            type="text"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
            id="checkout-cpf"
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="checkout-phone">
          Telefone:
          {' '}
          <input
            type="text"
            name="phone"
            value={ phone }
            onChange={ handleChange }
            id="checkout-phone"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="checkout-cep">
          CEP:
          {' '}
          <input
            type="text"
            name="cep"
            value={ cep }
            onChange={ handleChange }
            id="checkout-cep"
            data-testid="checkout-cep"
          />
        </label>
        <label htmlFor="checkout-address">
          Endereço:
          {' '}
          <input
            type="text"
            name="address"
            value={ address }
            onChange={ handleChange }
            id="checkout-address"
            data-testid="checkout-address"
          />
        </label>
        <label htmlFor="payment">
          Método de Pagamento:
          {' '}
          <label htmlFor="ticket-payment">
            <input
              type="radio"
              name="payment"
              value="ticket"
              onChange={ handleChange }
              id="ticket-payment"
              data-testid="ticket-payment"
            />
            Ticket
          </label>
          <label htmlFor="visa-payment">
            <input
              type="radio"
              name="payment"
              value="visa"
              onChange={ handleChange }
              id="visa-payment"
              data-testid="visa-payment"
            />
            Visa
          </label>
          <label htmlFor="master-payment">
            <input
              type="radio"
              name="payment"
              value="master"
              onChange={ handleChange }
              id="master-payment"
              data-testid="master-payment"
            />
            Mastercard
          </label>
          <label htmlFor="elo-payment">
            <input
              type="radio"
              name="payment"
              value="elo"
              onChange={ handleChange }
              id="elo-payment"
              data-testid="elo-payment"
            />
            Elo
          </label>
        </label>
        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ handleClick }
        >
          Finalizar Compra
        </button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  address: PropTypes.string,
  cep: PropTypes.string,
  cpf: PropTypes.string,
  email: PropTypes.string,
  fullName: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  phone: PropTypes.string,
}.isRequired;
