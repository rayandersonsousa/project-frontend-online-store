import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

export default class App extends Component {
  state = {
    queryInput: '',
  };

  render() {
    const { queryInput } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          {/* alterei a sintaxe do route para eu conseguir passar props para o SearchProducts */}
          <Route path="/">
            <SearchProducts
              queryInput={ queryInput }
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
