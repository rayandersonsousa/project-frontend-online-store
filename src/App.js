import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

import ShoppingCart from './pages/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import { getCategories } from './services/api';

export default class App extends Component {
  state = {
    categories: [],
  };

  getAllCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho">
            <ShoppingCart />
          </Route>
          <Route path="/">
            <CategoriesBar
              getAllCategories={ this.getAllCategories }
              categories={ categories }
            />
            <SearchProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
