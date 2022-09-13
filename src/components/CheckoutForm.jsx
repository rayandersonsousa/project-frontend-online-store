import React, { Component } from 'react';

export default class CheckoutForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="checkout-fullname">
          Nome completo:
          {' '}
          <input
            type="text"
            name=""
            id="checkout-fullname"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="checkout-email">
          E-mail:
          {' '}
          <input type="text" name="" id="checkout-email" data-testid="checkout-email" />
        </label>
        <label htmlFor="checkout-cpf">
          CPF:
          {' '}
          <input type="text" name="" id="checkout-cpf" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="checkout-phone">
          Telefone:
          {' '}
          <input type="text" name="" id="checkout-phone" data-testid="checkout-phone" />
        </label>
        <label htmlFor="checkout-cep">
          CEP:
          {' '}
          <input type="text" name="" id="checkout-cep" data-testid="checkout-cep" />
        </label>
        <label htmlFor="checkout-address">
          Endereço:
          {' '}
          <input
            type="text"
            name=""
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
              id="ticket-payment"
              data-testid="ticket-payment"
            />
            Ticket
          </label>
          <label htmlFor="visa-payment">
            <input
              type="radio"
              name="payment"
              id="visa-payment"
              data-testid="visa-payment"
            />
            Visa
          </label>
          <label htmlFor="master-payment">
            <input
              type="radio"
              name="payment"
              id="master-payment"
              data-testid="master-payment"
            />
            Mastercard
          </label>
          <label htmlFor="elo-payment">
            <input
              type="radio"
              name="payment"
              id="elo-payment"
              data-testid="elo-payment"
            />
            Elo
          </label>
        </label>
        <button type="button" data-testid="checkout-btn">Finalizar Compra</button>
      </form>
    );
  }
}
