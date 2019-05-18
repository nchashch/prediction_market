import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createOrder } from '../../actions/orders';

function OrderForm(props) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    outcome: '',
    portfolio: '2',
    position: '',
    type: '',
    amount: '',
  });
  useEffect(() => setOrder({ ...order, outcome: props.outcomeId }), [props.outcomeId]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createOrder(order, props.marketId));
  }
  const onChange = e => setOrder({ ...order, [e.target.name]: e.target.value });
  const buy = e => {
    const type = 'buy';
    setOrder({...order, type});
  }

  const sell = e => {
    const type = 'sell';
    setOrder({...order, type});
  }

  const { outcome, portfolio, amount } = order;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="number"
          name="amount"
          onChange={onChange}
          value={amount}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit" onClick={buy} className="btn btn-primary form-control">Buy</button>
      </div>
      <div className="form-group">
        <button type="submit" onClick={sell} className="btn btn-primary form-control">Sell</button>
      </div>
    </form>
  );
}

OrderForm.propTypes = {
  outcomeId: PropTypes.number.isRequired
}

export default OrderForm;
