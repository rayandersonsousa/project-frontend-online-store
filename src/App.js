import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

import ShoppingCart from './pages/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  state = {
    categories: [],
    queryInput: '',
    queryResults: [],
    notFound: false,
  };

  componentDidMount() {
    this.getAllCategories();
  }

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

  handleRadioClick = async () => {
    console.log('oi');
  };

  getAllCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories, queryInput, queryResults, notFound } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho">
            <ShoppingCart />
          </Route>
          <Route path="/">

            <aside>
              <p>Categorias:</p>
              <ul>
                { categories.map((e) => (
                  <CategoriesBar
                    key={ e.id }
                    name={ e.name }
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
