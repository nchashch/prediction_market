import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createOrder } from '../../actions/orders';

export class OrderForm extends Component {
  state = {
    outcome: '',
    portfolio: '',
    type: '',
    amount: '',
  }

  static propTypes = {
    /* createOrder: PropTypes.func.isRequired,*/
    outcomeId: PropTypes.number.isRequired
  }

  componentDidMount() {
    /* this.state.outcome = this.props.outcomeId;*/
    this.setState({ ...this.state, outcome: this.props.outcomeId })
  }

  onSubmit = e => {
    e.preventDefault();
    const order = this.state;
    /* console.log(order);*/
    /* this.props.createOrder(order);*/
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  buy = e => {
    console.log('buy');
    const type = 'buy';
    this.setState({...this.state, type});
  }

  sell = e => {
    console.log('sell');
    const type = 'sell';
    this.setState({...this.state, type});
  }

  render() {
    const { outcome, portfolio, amount } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="number"
              name="amount"
              onChange={this.onChange}
              value={amount}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={this.buy} className="btn btn-primary form-control">Buy</button>
          </div>
          <div className="form-group">
            <button type="submit" onClick={this.sell} className="btn btn-primary form-control">Sell</button>
          </div>
      </form>
    );
  }
}

export default connect(null, { createOrder })(OrderForm);
