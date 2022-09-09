import React, { Component } from 'react';
import { getProductDetailsById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { title, thumbnail, price } = await getProductDetailsById(id);
    this.setState({ title, thumbnail, price });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>{ id }</div>
    );
  }
}
