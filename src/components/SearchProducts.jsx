import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchProducts extends Component {
  render() {
    const { queryInput } = this.props;
    return (
      <div>
        { queryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

SearchProducts.propTypes = {
  queryInput: PropTypes.string,
}.isRequired;
