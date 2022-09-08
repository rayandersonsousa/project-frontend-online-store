import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';
import CategoriesBar from './components/CategoriesBar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <CategoriesBar />
            <SearchProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
