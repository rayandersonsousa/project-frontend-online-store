import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';

export default class SearchProducts extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ShoppingCartButton />
      </div>
    );
  }
}
