import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts'; //

import ShoppingCart from './pages/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductById,
} from './services/api';
import ProductDetails from './components/ProductDetails';

export default class App extends Component {
  state = {
    categories: [],
    queryInput: '',
    queryResults: [],
    notFound: false,
    cartProducts: [],
  };

  componentDidMount() {
    this.getAllCategories();
  }

  removeItem = (id) => {
    const { cartProducts } = this.state;
    const list = cartProducts.filter((e) => e.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(list));
    this.setState({ cartProducts: list });
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

  handleRadioClick = async ({ target: { id } }) => {
    const data = await getProductById(id, '');
    this.setState({ queryResults: data.results });
  };

  getAllCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  handleCartButton = (id) => {
    const { queryResults, cartProducts } = this.state;
    const selectProduct = queryResults.find((e) => e.id === id);
    this.setState((prevState) => {
      prevState.cartProducts.push(selectProduct);
    }, () => this.saveLocalStorage(cartProducts));
  };

  saveLocalStorage = (list) => {
    localStorage.setItem('cartItems', JSON.stringify(list));
  };

  render() {
    const { categories, queryInput, queryResults, notFound, cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/produto/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                handleCartButton={ this.handleCartButton }
              />) }
          />
          <Route path="/carrinho">
            <ShoppingCart
              cartProducts={ cartProducts }
              removeItem={ this.removeItem }
            />
          </Route>
          <Route path="/">

            <aside>
              <p>Categorias:</p>
              <ul>
                { categories.map((e) => (
                  <CategoriesBar
                    key={ e.id }
                    name={ e.name }
                    id={ e.id }
                    getAllCategories={ this.getAllCategories }
                    handleRadioClick={ this.handleRadioClick }
                  />
                ))}
              </ul>
            </aside>

            <SearchProducts
              queryInput={ queryInput }
              queryResults={ queryResults }
              notFound={ notFound }
              handleChange={ this.handleChange }
              handleClick={ this.handleClick }
              handleCartButton={ this.handleCartButton }
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
