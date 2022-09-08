import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class CategoriesBar extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = async () => {
    const categorieList = await getCategories();
    this.setState({
      categories: categorieList,
    });
  };

  render() {
    const { categories } = this.state;

    return (
      <aside>
        <p>Categorias:</p>
        <ul>
          {
            categories.map((categorie) => (
              <li key={ categorie.name }>
                <label htmlFor={ categorie.name } data-testid="category">
                  <input
                    value={ categorie.name }
                    type="radio"
                  />
                  {' '}
                  {categorie.name}
                </label>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}
