import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  state = {
    frete: [],
  };

  componentDidMount() {
    const { shipping } = this.props;
    const { frete } = this.state;
    const hasShipping = (Object.values(shipping)[0]);
    this.setState({ frete: hasShipping });
    console.log(frete);
  }

  render() {
    const { frete } = this.state;
    const { title, price, thumbnail, dataTestId, name } = this.props;
    return (
      <div
        data-testid={ dataTestId }
        id={ name }
      >
        <h5>{ title }</h5>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        {/* <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ handleCartButton }
        >
          Adicionar ao carrinho
        </button> */}
        { frete === true
          ? (
            <p data-testid="free-shipping">Frete Grátis</p>
          ) : <p>Não tem frete grátis T-T</p>}
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  handleCartButton: PropTypes.func,
  name: PropTypes.string,
  shipping: PropTypes.object,
}.isRequired;
