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

  componentDidMount() {
    this.getAllCategories();
  }

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

            <aside>
              <p>Categorias:</p>
              <ul>
                { categories.map((e) => (
                  <CategoriesBar
                    key={ e.id }
                    name={ e.name }
                    getAllCategories={ this.getAllCategories }
                  />
                ))}
              </ul>
            </aside>

            <SearchProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
