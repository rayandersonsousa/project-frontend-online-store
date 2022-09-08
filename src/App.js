import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <SearchProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
