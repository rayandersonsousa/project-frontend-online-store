import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

import ShoppingCart from './pages/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho" component={ ShoppingCart } />
          <Route path="/">
            <CategoriesBar />
            <SearchProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
