import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductCheckoutDetails extends Component {
  state = { amount: 0 };

  componentDidMount() {
    const { id } = this.props;
    const amount = Number(localStorage.getItem(id));
    this.setState({ amount: amount || 1 });
  }

  render() {
    const { title } = this.props;
    const { amount } = this.state;
    return (
      <div>
        <p>{title}</p>
        <p>{amount}</p>
      </div>
    );
  }
}

ProductCheckoutDetails.propTypes = {
  title: PropTypes.string,
}.isRequired;
