import React, { Component } from 'react';

export default class ProductDetailsForm extends Component {
  render() {
    return (
      <div>
        <h3>Formulário de Avaliação do Produto</h3>
        <form>
          <label htmlFor="product-detail-email">
            E-mail:
            {' '}
            <input
              type="text"
              id="product-detail-email"
              data-testid="product-detail-email"
            />
          </label>
          {/* https://codepen.io/hesguru/pen/BaybqXv */}
          <div className="rate">
            <span>Como você avalia este produto?</span>
            <label htmlFor="star1" title="text">
              <input
                type="radio"
                id="star1"
                name="rate"
                value="1"
                data-testid="1-rating"
              />
              1 estrela
            </label>
            <label htmlFor="star2" title="text">
              <input
                type="radio"
                id="star2"
                name="rate"
                value="2"
                data-testid="2-rating"
              />
              2 estrelas
            </label>
            <label htmlFor="star3" title="text">
              <input
                type="radio"
                id="star3"
                name="rate"
                value="3"
                data-testid="3-rating"
              />
              3 estrelas
            </label>
            <label htmlFor="star4" title="text">
              <input
                type="radio"
                id="star4"
                name="rate"
                value="4"
                data-testid="4-rating"
              />
              4 estrelas
            </label>
            <label htmlFor="star5" title="text">
              <input
                type="radio"
                id="star5"
                name="rate"
                value="5"
                data-testid="5-rating"
              />
              5 estrelas
            </label>
          </div>
          <textarea
            name="evaluation-text"
            id="evaluation-text"
            cols="30"
            rows="10"
            data-testid="product-detail-evaluation"
          />
          <br />
          <button type="button" data-testid="submit-review-btn">Enviar</button>
        </form>
      </div>
    );
  }
}
