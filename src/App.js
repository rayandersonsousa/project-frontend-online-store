import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carrinho" component={ ShoppingCart } />
          <Route path="/" component={ SearchProducts } />
        </Switch>
      </BrowserRouter>
    );
  }
}
