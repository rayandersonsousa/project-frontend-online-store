import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetailsById } from '../services/api';
import ShoppingCartButton from './ShoppingCartButton';

export default class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { title, thumbnail, price } = await getProductDetailsById(id);
    this.setState({ title, thumbnail, price });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    const { match: { params: { id } }, handleCartButton } = this.props;
    return (
      <div>
        <span data-testid="product-detail-name">
          { title }
        </span>
        { ' - R$ ' }
        <span data-testid="product-detail-price">
          { price }
        </span>
        <br />
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleCartButton(id) }
        >
          Adicionar ao carrinho
        </button>
        <ShoppingCartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequeired;
