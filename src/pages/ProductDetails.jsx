import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetailsById } from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductDetailsEvaluationForm from '../components/ProductDetailsEvaluationForm';
import ProductDetailsEvaluationCard from '../components/ProductDetailsEvaluationCard';

export default class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
    emailInput: '',
    evaluationText: '',
    rate: 0,
    evaluationList: [],
    isInvalidFields: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const evaluationList = JSON.parse(localStorage.getItem(id)) || [];
    const { title, thumbnail, price } = await getProductDetailsById(id);
    this.setState({ title, thumbnail, price, evaluationList });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: name === 'rate' ? Number(value) : value,
    });
  };

  handleValidation = () => {
    const { emailInput, rate } = this.state;
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const trueEmail = emailInput.match(regexp);
    console.log(emailInput, rate);
    return trueEmail && (rate !== 0);
  };

  handleClick = () => {
    const validation = this.handleValidation();
    const {
      emailInput,
      evaluationText,
      rate,
      evaluationList,
      // isInvalidFields,
    } = this.state;
    const { match: { params: { id } } } = this.props;
    console.log(validation);
    if (validation) {
      this.setState({
        evaluationList: [...evaluationList, {
          email: emailInput,
          text: evaluationText,
          rating: rate,
        }],
      }, () => {
        this.setState({
          emailInput: '',
          evaluationText: '',
          rate: 0,
          isInvalidFields: false,
        });
        localStorage.setItem(id, JSON.stringify([...evaluationList, {
          email: emailInput,
          text: evaluationText,
          rating: rate,
        }]));
      });
    } else {
      this.setState({ isInvalidFields: true });
    }
  };

  render() {
    const {
      title,
      thumbnail,
      price,
      emailInput,
      evaluationText,
      rate,
      isInvalidFields,
      evaluationList,
    } = this.state;

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
        <ProductDetailsEvaluationForm
          handleChange={ this.handleChange }
          emailInput={ emailInput }
          evaluationText={ evaluationText }
          rate={ rate }
          isInvalidFields={ isInvalidFields }
          handleClick={ this.handleClick }
        />
        <ul>
          {evaluationList.map(({ email, text, rating }) => (
            <ProductDetailsEvaluationCard
              key={ text }
              email={ email }
              text={ text }
              rating={ rating }
            />
          ))}
        </ul>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;
