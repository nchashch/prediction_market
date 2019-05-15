import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { createMarket } from '../../actions/markets';

function MarketForm() {
  const [market, setMarket] = useState({
    name: '',
    b: '',
    start_date: '',
    end_date: ''
  });
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createMarket(market));
  }
  const onChange = e => setMarket({ ...market, [e.target.name]: e.target.value });
  const { name, b, start_date, end_date } = market;
  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Create Market</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>B</label>
          <input
            className="form-control"
            type="number"
            name="b"
            onChange={onChange}
            value={b}
          />
        </div>
        <div className="form-group">
          <label>Start date</label>
          <input
            className="form-control"
            type="date"
            name="start_date"
            onChange={onChange}
            value={start_date}
          />
        </div>
        <div className="form-group">
          <label>End date</label>
          <input
            className="form-control"
            type="date"
            name="end_date"
            onChange={onChange}
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

export default MarketForm;
