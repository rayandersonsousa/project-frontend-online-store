import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetailsById } from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';

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
