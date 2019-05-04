import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createMarket } from '../../actions/markets';

export class MarketForm extends Component {
  state = {
    name: '',
    b: '',
    start_date: '',
    end_date: ''
  }

  static propTypes = {
    createMarket: PropTypes.func.isRequired
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, b, start_date, end_date } = this.state;
    const market =
      { name,
        b,
        start_date,
        end_date }
    this.props.createMarket(market);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, b, start_date, end_date } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Market</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>B</label>
            <input
              className="form-control"
              type="number"
              name="b"
              onChange={this.onChange}
              value={b}
            />
          </div>
          <div className="form-group">
            <label>Start date</label>
            <input
              className="form-control"
              type="date"
              name="start_date"
              onChange={this.onChange}
              value={start_date}
            />
          </div>
          <div className="form-group">
            <label>End date</label>
            <input
              className="form-control"
              type="date"
              name="end_date"
              onChange={this.onChange}
              value={end_date}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createMarket })(MarketForm);
