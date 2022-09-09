import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import ShoppingCartButton from './ShoppingCartButton'; //

export default class SearchProducts extends Component {
  state = {
    queryInput: '',
    queryResults: [],
    notFound: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { queryInput } = this.state;
    const data = await getProductsFromCategoryAndQuery('', queryInput);
    this.setState({ queryResults: data.results }, () => {
      this.setState({ notFound: data.results.length === 0 });
    });
  };

  render() {
    const { queryInput, queryResults, notFound } = this.state;

    return (
      <div>
        <header><ShoppingCartButton /></header>
        <input
          name="queryInput"
          data-testid="query-input"
          id=""
          type="text"
          value={ queryInput }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {/* adicionei a renderização condicional da mensagem termo vazio conforme a prop queryInput */}
        { queryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {notFound ? (
          <p>
            Nenhum produto foi encontrado
          </p>
        ) : queryResults.map((e) => (
          <ProductCard
            key={ e.id }
            dataTestId="product"
            title={ e.title }
            price={ e.price }
            thumbnail={ e.thumbnail }
          />))}
      </div>
    );
  }
}
