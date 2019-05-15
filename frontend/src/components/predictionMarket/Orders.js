import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions/orders';

function Orders() {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
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
            { orders.map((order) => (
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

export default Orders;
