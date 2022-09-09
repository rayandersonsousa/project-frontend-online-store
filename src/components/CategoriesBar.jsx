import React, { Component } from 'react';

export default class CategoriesBar extends Component {
  // state = {
  //   categories: [],
  // };

  componentDidMount() {
    const { getAllCategories } = this.props;
    getAllCategories();
  }

  // getAllCategories = async () => {
  //   const categorieList = await getCategories();
  //   this.setState({
  //     categories: categorieList,
  //   });
  // };

  render() {
    const { categories } = this.props;

    return (
      <aside>
        <p>Categorias:</p>
        <ul>
          {
            categories.map(({ name }) => (
              <li key={ name }>
                <label htmlFor={ name } data-testid="category">
                  <input
                    value={ name }
                    type="radio"
                  />
                  {' '}
                  { name }
                </label>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}
