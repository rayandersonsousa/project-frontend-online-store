import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductDetailsEvaluationCard extends Component {
  render() {
    const { email, text, rating } = this.props;
    return (
      <li>
        <label htmlFor="review-card-email">
          E-mail:
          {' '}
          <h3 data-testid="review-card-email" id="review-card-email">
            { email }
          </h3>
        </label>
        <label htmlFor="review-card-rating">
          Nota:
          {' '}
          <p data-testid="review-card-rating" id="review-card-rating">
            {rating}
          </p>
        </label>
        <label htmlFor="review-card-evaluation">
          Descrição:
          {' '}
          <p data-testid="review-card-evaluation">
            {text}
          </p>
        </label>
      </li>
    );
  }
}

ProductDetailsEvaluationCard.propTypes = {
  email: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string,
}.isRequired;
