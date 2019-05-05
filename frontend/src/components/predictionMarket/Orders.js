import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders } from '../../actions/orders';

export class Orders extends Component {
  static propTypes = {
    orders: PropTypes.array.isRequired,
    getOrders: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <Fragment>
        <h1>Order list</h1>
        <ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Market</th>
                <th>Outcome</th>
                <th>Portfolio</th>
                <th>Position</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              { this.props.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.market}</td>
                  <td>{order.outcome}</td>
                  <td>{order.portfolio}</td>
                  <td>{order.position}</td>
                  <td>{order.type}</td>
                  <td>{order.amount}</td>
                  <td>{order.timestamp}</td>
                </tr>
              )) }
            </tbody>
          </table>
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders
});

export default connect(mapStateToProps, { getOrders })(Orders);
