import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductDetailsEvaluationCard extends Component {
  render() {
    const { email, text, rating } = this.props;
    return (
      <li>
        <h3 data-testid="review-card-email">
          Email:
          {' '}
          { email}
        </h3>
        <p data-testid="review-card-rating">
          Nota:
          {' '}
          {rating}
        </p>
        <p data-testid="review-card-evaluation">
          Descrição:
          {' '}
          {text}
        </p>
      </li>
    );
  }
}

ProductDetailsEvaluationCard.propTypes = {
  email: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string,
}.isRequired;
