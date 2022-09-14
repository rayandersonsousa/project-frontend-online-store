import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import ShoppingCartButton from './ShoppingCartButton';

export default class SearchProducts extends Component {
  render() {
    const { queryInput, queryResults, notFound, handleChange,
      handleClick, handleCartButton } = this.props;

    return (
      <div>
        <header><ShoppingCartButton /></header>
        <input
          name="queryInput"
          data-testid="query-input"
          id=""
          type="text"
          value={ queryInput }
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ handleClick }
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
          <div key={ e.id }>
            <Link
              to={ `/produto/${e.id}` }
              data-testid="product-detail-link"
            >
              <ProductCard
                dataTestId="product"
                title={ e.title }
                price={ e.price }
                thumbnail={ e.thumbnail }
                name={ e.id }
                shipping={ e.shipping }
              />
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => handleCartButton(e.id) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

SearchProducts.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  notFound: PropTypes.bool,
  queryInput: PropTypes.string,
  queryResults: PropTypes.array,
  handleCartButton: PropTypes.func,
}.isRequired;
